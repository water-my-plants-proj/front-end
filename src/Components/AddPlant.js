//this component will be interacting with plant list state?
//submission may need to observe this, and post

import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from '../validation/AddPlantSchema'

const initialPlantValues = {
	nickname: '',
	species: '',
	h20Frequency: ''
}
const initialPlantErrors = {
	nickname: '',
	species: '',
	h20Frequency: ''
}
const initialDisabled = true;

export default function AddPlant(){

	const [plantValues, setPlantValues] = useState(initialPlantValues);
	const [disabled, setDisabled] = useState(initialDisabled);   
	const [plantErrors, setPlantErrors] = useState(initialPlantErrors);

	const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setPlantErrors({ ...plantErrors, [name]: ''}))
      .catch(err => setPlantErrors({ ...plantErrors, [name]: err.errors[0]}))
  }

	const addPlantSubmit = () => {
    const newPlant = {
      nickname: plantValues.nickname.trim(),
      species: plantValues.species.trim(),
      h20Frequency: plantValues.h20Frequency.trim()
    }
    console.log(newPlant)
		//this information will need to be posted to the end point
  }
	const onSubmit = evt => {
    evt.preventDefault()
    addPlantSubmit() //not sure how this will need to be set up
  }

	const inputChange = (name, value) => {
    validate(name, value)
    setPlantValues({
      ...plantValues,
      [name]: value
    })
  }
	const onChange = evt => {
		const { name, value } = evt.target
		inputChange(name, value)
	}

	useEffect(() => {
    schema.isValid(plantValues).then(valid => setDisabled(!valid))
  }, [plantValues])

	return (
		<div>
					<form className='newPlantContainer' onSubmit={onSubmit}>
						<h2>Add a New Plant</h2>
						<label>Nickname:
							<input 
								id='nicknameInput' 
								type='text' 
								name='nickname' 
								value={plantValues.nickname}
								onChange={onChange}/>
						</label>
						<label>Plant Species:
							<input 
								id='speciesInput' 
								type='text' 
								name='species' 
								value={plantValues.species}
								onChange={onChange}/>
						</label>
						<label>Watering Frequency:
							<input 
								id='h20FrequencyInput' 
								type='text' 
								name='h20Frequency' 
								value={plantValues.h20Frequency}
								onChange={onChange}/>
						</label>
						<button disabled={disabled}>Add Plant</button>
						<div className='errors'> 
            	<h3>{plantErrors.nickname}</h3>
							<h3>{plantErrors.species}</h3>
							<h3>{plantErrors.h20Frequency}</h3>
            </div>
					</form>
			</div>
	)
}
