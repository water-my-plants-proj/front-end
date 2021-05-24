import React, { useState } from 'react'
import * as yup from 'yup'
import schema from './validation/LoginSchema'

const initialLoginValues = {
	username: '',
	phoneNum: '',
	password: ''
}
const initialLoginErrors = {
	username: '',
	phoneNum: '',
	password: ''
}
const initialDisabled = true;



export default function Login() {   //removed props, dont know what will be passed in

	const [loginValues, setLoginValues] = useState(initialLoginValues);
	const [disabled, setDisabled] = useState(initialDisabled);   //need to add disabled button functionality based on validation
	const [formErrors, setFormErrors] = useState(initialLoginErrors);

	const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

	const loginSubmit = () => {
    const newLogin = {
      username: loginValues.username.trim(),
      phoneNum: loginValues.phoneNum.trim(),
      password: loginValues.password.trim()
    }
    console.log(newLogin) //token/auth will need to occur here, I think
		//receiving token for auth
		//pages cant be reached without token
  }

	const onSubmit = evt => {
    evt.preventDefault()
    loginSubmit() //not sure how this will need to be set up
  }

	const inputChange = (name, value) => {
    validate(name, value)
    setLoginValues({
      ...loginValues,
      [name]: value
    })
  }
	const onChange = evt => {
		const { name, value } = evt.target
		inputChange(name, value)
	}

	return (
			<div>
					<form className='loginContainer' onSubmit={onSubmit}>
						<h2>Login</h2>
						<label>Username:
							<input 
								id='usernameInput' 
								type='text' 
								name='username' 
								value={loginValues.username}
								onChange={onChange}/>
						</label>
						<label>Phone Number:
							<input 
								id='phoneNumInput' 
								type='text' 
								name='phoneNum' 
								value={loginValues.phoneNum}
								onChange={onChange}/>
						</label>
						<label>Password:
							<input 
								id='passwordInput' 
								type='password' 
								name='password' 
								value={loginValues.password}
								onChange={onChange}/>
						</label>
						<button disabled={disabled}>Log In</button>
					</form>
			</div>
	)
}
