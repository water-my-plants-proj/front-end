import axios from 'axios';
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
const initialValue={
    username: "Test",
    password: "Password",
    phoneNumber:"123-123-1234"
}

export default function SignUp() {
	const {push}=useHistory()
	const [signUpValues, setSignUp] = useState(initialValue);
	const onSubmit = e => {
		 e.preventDefault()
    	 axios.post("https://plantszapi.herokuapp.com/api/auth/register",signUpValues)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
         })
		push("/plant-list")
	}

	const onChange = e => {
		const { name, value } = e.target;
        setSignUp({
			...signUpValues,
			[name]: value
		})
	}
	return (

		<div>
			<form className='loginContainer' onSubmit={onSubmit}>
				<h2>Sign Up</h2>
				<label>Username:
					<input
						type='text'
						name='username'
						value={signUpValues.username}
						onChange={onChange} />
				</label>
				<label>Phone Number:
					<input
						type='text'
						name='phoneNumber'
						value={signUpValues.phoneNumber}
						onChange={onChange} />
				</label>
				<label>Password:
							<input
						type='password'
						name='password'
						value={signUpValues.password}
						onChange={onChange} />
				</label>
				<button>Sign Up</button>
			</form>
		</div>
	)
}
