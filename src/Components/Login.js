import React from 'react'

export default function Login(props) {
	const { loginValues, disabled, submit, change } = props;

	const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

	const onChange = evt => {
		const { name, value } = evt.target
		change(name, value)
	}
    return (
        <div>
            <form className='login container' onSubmit={onSubmit}>
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
