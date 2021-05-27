import axios from 'axios';
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

const initialValue={
    username: "unique",
    password: "Password",
    phoneNumber:"111-111-1111"
}

export default function SignUp() {
	const {push}=useHistory()
	const [signUpValues, setSignUp] = useState(initialValue);
	const [ fail, setFail ] = useState(false)
	const [ errMessage, setErrMessage ] = useState('');

	const onSubmit = e => {
		 e.preventDefault()
    	 axios.post("https://plantszapi.herokuapp.com/api/auth/register",signUpValues)
        .then((res) => {
            console.log(res)
			push("/plant-list")
			setFail(false)
        })
        .catch((err) => {
			console.log(Object.keys(err.response.data.message))
			const errMessage = err.response.data.message;
			console.log(errMessage)
			if (errMessage.search('users_username_unique')) {
				setErrMessage('user name already exists')
			} else {
				setErrMessage('phone number is already linked to an account')
			}
			setFail(true)
         })
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
				{fail && <p>{errMessage}</p>}
				<button>Sign Up</button>
			</form>
		</div>
	)
}
