import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { logIn } from '../Actions/Index';
import * as yup from "yup";
import schema from "../validation/LoginSchema";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Form = styled.form`
  position: relative;
  top: 150px;
  height: 50vh;
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #f3f2da;
  border: 1px solid #f3f2da; 
  box-shadow: 0px 0px 60px #ea97ad;
  background-color: black;
  font-family: "Lato";

  label {
    display: flex;
    justify-content: space-between;
    width: 
  }

  h2 {
  font-family: "Roboto";
  margin: 25px auto;
  margin-top: 5%;
  font-size: 2rem;
  text-align: center;
  border-bottom: 3px solid #f3f2da;
  }

  button {
    background: #f3f2da;
    margin: 0 10px;
    border-radius: 10px;
    padding: 2px 25px;
    font-size: 1rem;
    outline: none;

    &:hover {
      background: black;
      color: #f3f2da;
      border: 2px solid #f3f2da;
    }
    &:active {
        transform: scale(.9);
        box-shadow: inset 2px 2px 5px white;
    }
  }
 
  .errors {
    display: flex;
    color: red;
    font-size: 1rem;
  }
`

const initialLoginValues = {
  username: "",
  password: "",
};
const initialLoginErrors = {
  username: "",
  phoneNum: "",
  password: "",
};

const initialDisabled = true;

export function Login(props) {
  const { push } = useHistory();
  //removed props, dont know what will be passed in
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [disabled, setDisabled] = useState(initialDisabled); //need to add disabled button functionality based on validation
  const [formErrors, setFormErrors] = useState(initialLoginErrors);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) =>
        setFormErrors({ ...formErrors, [name]: "-" + err.errors[0] })
      );
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    props.setLoggedIn(true);
    axios
      .post("https://plantszapi.herokuapp.com/api/auth/login", loginValues)
      .then((res) => {
        const resData = JSON.parse(res.config.data)
        const UserData = {
          username: resData.username,
          password: resData.password,
          user_id: res.data.user_id
        }
        console.log("USER DATA", UserData)
        localStorage.setItem("token", res.data.token);
        props.logIn(UserData);
        push("/plant-list");
        setLoginValues(initialLoginValues)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  useEffect(() => {
    schema.isValid(loginValues).then((valid) => setDisabled(!valid));
  }, [loginValues]);

  return (
    <Form className="loginContainer" onSubmit={onSubmit}>
      <h2>Login</h2>
      <label>
        Username:
        <input
          id="usernameInput"
          type="text"
          name="username"
          value={loginValues.username}
          onChange={onChange}
        />
      </label>
      <label>
        Password:
        <input
          id="passwordInput"
          type="password"
          name="password"
          value={loginValues.password}
          onChange={onChange}
        />
      </label>
      <div className="buttonContainer">
        <button disabled={disabled}>Log In</button>
      </div>

      <div className="errors">
        <h3>{formErrors.username}</h3>
        <h3>{formErrors.password}</h3>
      </div>
    </Form>
  );
}
const mapActionsToProps={
  logIn,
  }

export default connect(null, mapActionsToProps)(Login);