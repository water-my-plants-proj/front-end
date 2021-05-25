import axios from 'axios';
import React,{useState} from 'react'
import axiosWithAuth from '../Utils/AxiosWithAuth';
import {useHistory} from 'react-router-dom'
const initialValue={
    username: "Joe",
    password: "1234",
    phoneNumber:"775-123-1456"
}

export default function SignUp() {
	const {push}=useHistory()
	const [signUpValues, setSignUp] = useState(initialValue);

	const onSubmit = e => {
		// e.preventDefault()
        // axiosWithAuth().post("auth/register",signUpValues)
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
		push("/plant-list")
	}

	const onChange = e => {
		const { name, value } = e.target;
        setSignUp({
			...signUpValues,
			[name]: value
		})
	}
    console.log(signUpValues.phoneNumber)
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
