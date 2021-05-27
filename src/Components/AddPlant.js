//this component will be interacting with plant list state?
//submission may need to observe this, and post
//testing spacing

import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../validation/AddPlantSchema";
import styled from "styled-components";
import axiosWithAuth from "../Utils/AxiosWithAuth";
import {connect} from "react-redux";
import {addPlant} from '../Actions/Index';
import{useHistory} from 'react-router-dom'


const StyledFormAddPlant = styled.div`
	margin: 0 auto;	
  display: flex;
  flex-direction: column;
	justify-content:center;
  align-items: center;
  border: 2px solid #52734d;
  background-color: #ddffbc;
	font-family: 'Lato';
	width: 30%;
	margin-top: 15%;
	
	h1,h2,h3,h4 {
		font-family: 'Roboto';
	}
  .newPlantContainer {
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

function AddPlant(props) {
  console.log(props)
  const{addPlant,data}=props
  const{push}= useHistory()


  const initialPlantValues = {
    "nickname": "",
    "species": "",
    "h2oFrequency": "",
  };
  const initialPlantErrors = {
    nickname: "",
    species: "",
    h2oFrequency:"",
    plant_id:data.length + 1,
  };
  const initialDisabled = true;

  const [plantValues, setPlantValues] = useState(initialPlantValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [plantErrors, setPlantErrors] = useState(initialPlantErrors);

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
      h2oFrequency: plantValues.h2oFrequency.trim(),}
   
    //this information will need to be posted to the end point

  const onSubmit = (evt) => {
    evt.preventDefault();
    addPlant(newPlant)
    axiosWithAuth().post("/plants/plants",newPlant)
    .then((res)=>{
      console.log(res)
    })
    push("/plant-list")
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
    <StyledFormAddPlant>
      <form className="newPlantContainer" onSubmit={onSubmit}>
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
      </form>
    </StyledFormAddPlant>
  );
}
const mapStateToProps=(state)=>{
  return{
    data:state.plantList
  }
}
const mapActionsToProps={
addPlant
}
export default connect(mapStateToProps,mapActionsToProps)(AddPlant)