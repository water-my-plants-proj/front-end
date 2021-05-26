import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../validation/LoginSchema";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const initialLoginValues = {
  username: "",
  phoneNum: "",
  password: "",
};
const initialLoginErrors = {
  username: "",
  phoneNum: "",
  password: "",
};
const initialDisabled = true;

const StyledFormLogin = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid green;
  .loginContainer {
    display: flex;
    flex-direction: column;
  }
  label {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    margin: 0 auto;
    margin-bottom: 2%;
  }
  button {
    width: 40%;
    color: green;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }
  .errors {
    display: flex;
    color: red;
    font-size: 0.5rem;
  }
`;

export default function Login(props) {
  const { push } = useHistory();
  //removed props, dont know what will be passed in
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [disabled, setDisabled] = useState(initialDisabled);
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

  const loginSubmit = () => {
    const newLogin = {
      username: loginValues.username.trim(),
      phoneNum: loginValues.phoneNum.trim(),
      password: loginValues.password.trim(),
    };
    console.log(newLogin); //token/auth will need to occur here, I think
    //receiving token for auth
    //pages cant be reached without token
    setLoginValues(initialLoginValues);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    loginSubmit(); //not sure how this will need to be set up
    push("/plant-list");
    props.setLoggedIn(true);
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
    <StyledFormLogin>
      <form className="loginContainer" onSubmit={onSubmit}>
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
          Phone Number:
          <input
            id="phoneNumInput"
            type="text"
            name="phoneNum"
            value={loginValues.phoneNum}
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
          <h3>{formErrors.phoneNum}</h3>
          <h3>{formErrors.password}</h3>
        </div>
      </form>
    </StyledFormLogin>
  );
}
