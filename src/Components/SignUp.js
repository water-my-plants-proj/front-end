import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
	margin: 0 auto;
	display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #52734d;
  background-color: #ddffbc;
	font-family: 'Lato';
	width: 30%;
	margin-top: 15%;
	padding-bottom: 1%;

	h1,h2,h3,h4{
		font-family: 'Roboto';
	}

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
		display:flex;
		justify-content: center
    margin-top: 2%;
  }
  .errors {
    display: flex;
    color: red;
    font-size: 0.5rem;
  }
`;

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
      })
      .catch((err) => {
        console.log(err);
      });
    push("/plant-list");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUpValues,
      [name]: value,
    });
  };
  return (
    <StyledDiv>
      <form className="loginContainer" onSubmit={onSubmit}>
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
        <div className="buttonContainer">
          <button>Sign Up</button>
        </div>
      </form>
    </StyledDiv>
  );
}
