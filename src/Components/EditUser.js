import React, { useState, useEffect } from "react";
import styled from "styled-components";
import schema from "../validation/EditUserSchema";
import * as yup from "yup";

const StyledEditUserPage = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid green;

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
      margin-left: 30%;
    }
  }
`;

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};
const initialDisabled = true;

export default function EditUser(props) {
  const { user } = props;

  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) =>
        setFormErrors({ ...formErrors, [name]: "-" + err.errors[0] })
      );
  };

  const editUserSubmit = () => {
    const newUserData = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    console.log(newUserData);
    //this information will need to be posted to the end point
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    editUserSubmit();
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <StyledEditUserPage>
      <div className="userCard">
        <h2>Username: test</h2>
        <h2>Password: test</h2>
      </div>
      <div className="formCard">
        <form onSubmit={onSubmit}>
          <h2>Edit User</h2>
          <label>
            Username:
            <input
              name="username"
              value={formValues.username}
              onChange={onChange}
            />
            <h2 className="errors">{formErrors.username}</h2>
          </label>
          <label>
            Password:
            <input
              name="password"
              value={formValues.password}
              onChange={onChange}
            />
            <h2 className="errors">{formErrors.password}</h2>
          </label>
          <button disabled={disabled}>Submit</button>
        </form>
      </div>
    </StyledEditUserPage>
  );
}
