import React, { useState } from 'react'

export default function Login() {   //removed props, dont know what will be passed in
	// const { loginValues, disabled, submit, change } = props;

	const initialLoginValues = {
		username: '',
		phoneNum: '',
		password: ''
	}
	const initialDisabled = true;

	const [loginValues, setLoginValues] = useState(initialLoginValues)

	const onSubmit = evt => {
    evt.preventDefault()
    submit() //not sure how this will need to be set up
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

	// const loginSubmit = () => {
  //   const newLogin = {
  //     username: formValues.username.trim(),
  //     phoneNum: formValues.phoneNum.trim(),
  //     password: formValues.password.trim()
  //   }
  //   login(newLogin)
  // }

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
