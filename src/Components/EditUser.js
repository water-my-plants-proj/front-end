import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import schema from "../validation/EditUserSchema";
import * as yup from "yup";
import axiosWithAuth from "../Utils/AxiosWithAuth";
import { editUser } from '../Actions/Index';

const Form = styled.form`
  position: relative;
  top: 150px;
  height: 40vh;
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
    margin-bottom: 40px;

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

const initialFormValues = {
  phoneNumber: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};
const initialDisabled = true;

export function EditUser(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  // console.log("EDITUSER PROPS", props)
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) =>
        setFormErrors({ ...formErrors, [name]: "-" + err.errors[0] })
      );
  };

  const onSubmit = evt => {
    const newUserData = {
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password.trim(),
    };
    evt.preventDefault();
    axiosWithAuth()
      .put(`/users/users/${props.user_id}`, newUserData)
      .then(res => {
        console.log("EDIT USER RESPONSE", res.data)
        props.editUser(res.data[0])
      })
      .catch(err => {
        console.log(err)
      })
    setFormValues(initialFormValues);
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
      <Form onSubmit={onSubmit}>
        <h2>Edit User</h2>
        <label>
          New phone number:
          <input
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={onChange}
          />
        </label>
          <h2 className="errors">{formErrors.username}</h2>
        <label>
          New password:
          <input
            name="password"
            value={formValues.password}
            onChange={onChange}
          />
        </label>
          <h2 className="errors">{formErrors.password}</h2>
        <button disabled={disabled}>Submit</button>
      </Form>
  );
}

const mapStateToProps = state => {
  return({
    user_id: state.currentUser.user_id,
  })
}
const mapActionsToProps = {
  editUser
}
export default connect (mapStateToProps, mapActionsToProps)(EditUser);