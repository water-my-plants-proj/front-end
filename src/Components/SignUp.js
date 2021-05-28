import axios from 'axios';
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  top: 150px;
  height: 50vh;
  width: 30%;
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
    font-size: 0.5rem;
  }
`

const initialValue = {
  username: "Test",
  password: "Password",
  phoneNumber: "123-123-1234",
};

export default function SignUp() {
  const { push } = useHistory();
  const [signUpValues, setSignUp] = useState(initialValue);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://plantszapi.herokuapp.com/api/auth/register", signUpValues)
      .then((res) => {
        console.log(res);
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUpValues,
      [name]: value,
    });
  };
  return (
    <Form className="loginContainer" onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={signUpValues.username}
          onChange={onChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={signUpValues.phoneNumber}
          onChange={onChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={signUpValues.password}
          onChange={onChange}
        />
      </label>
      <button>Sign Up</button>
    </Form>
  );
}
