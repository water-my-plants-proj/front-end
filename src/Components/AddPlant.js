import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../validation/AddPlantSchema";
import styled from "styled-components";
import axiosWithAuth from "../Utils/AxiosWithAuth";
import { connect } from "react-redux";
import { addPlant } from '../Actions/Index';
import { useHistory } from 'react-router-dom';

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

const initialPlantValues = {
  nickname: "",
  species: "",
  h2oFrequency: "",
};
const initialPlantErrors = {
  nickname: "",
  species: "",
  h2oFrequency:"",
};
const initialDisabled = true;

function AddPlant(props) {
  console.log("ADD PLANT PROPS", props)
  const [plantValues, setPlantValues] = useState(initialPlantValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [plantErrors, setPlantErrors] = useState(initialPlantErrors);
  
  const { push } = useHistory()
  const { addPlant } = props

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setPlantErrors({ ...plantErrors, [name]: "" }))
      .catch((err) =>
        setPlantErrors({ ...plantErrors, [name]: "-" + err.errors[0] })
      );
  };

  const newPlant = {
    nickname: plantValues.nickname.trim(),
    species: plantValues.species.trim(),
    h2oFrequency: plantValues.h2oFrequency.trim(),
  }
   
  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("NEW PLANT", newPlant)
    axiosWithAuth()
    .post("/plants/plants", newPlant)
    .then(res => {
      console.log("ADD PLANT RESPONSE", res)
      addPlant(newPlant)
      push("/plant-list")
    })
    .catch(err => {
      debugger
      console.log(err)
    })
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setPlantValues({
      ...plantValues,
      [name]: value,
    });
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  useEffect(() => {
    schema.isValid(plantValues).then((valid) => setDisabled(!valid));
  }, [plantValues]);

  return (
        <Form className="newPlantContainer" onSubmit={onSubmit}>
          <h2>Add a New Plant</h2>
          <label>
            Nickname:
            <input
              id="nicknameInput"
              type="text"
              name="nickname"
              value={plantValues.nickname}
              onChange={onChange}
            />
          </label>
          <label>
            Plant Species:
            <input
              id="speciesInput"
              type="text"
              name="species"
              value={plantValues.phoneNum}
              onChange={onChange}
            />
          </label>
          <label>
            Watering Frequency:
            <input
              id="h2oFrequencyInput"
              type="text"
              name="h2oFrequency"
              value={plantValues.password}
              onChange={onChange}
            />
          </label>
          <div className="buttonContainer">
            <button disabled={disabled}>Add Plant</button>
          </div>
          <div className="errors">
            <h3>{plantErrors.nickname}</h3>
            <h3>{plantErrors.species}</h3>
            <h3>{plantErrors.h2oFrequency}</h3>
          </div>
      </Form>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.plantList,
  };
};
const mapActionsToProps = {
  addPlant,
};
export default connect(mapStateToProps, mapActionsToProps)(AddPlant);
