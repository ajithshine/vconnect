import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../Post/Post';

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:3001/api/auth/login", {
                email,
                password,
            })
            .then(function (response) {
                console.log(response);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("id", response.data.id);
                localStorage.setItem("username",response.data.username);
                window.location = "/Dashboard";
            });
            console.log("success");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
                console.log("error")
			}
		}
	};

    return (
        <div className='container'>
            <div className='login'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="inputbox">
                        <input type="email"
                            required="required"
                            value={email}
                            name='email'
                            onChange={(e) => setEmail(e.target.value)} />
                        <span>Email</span>
                    </div>
                    <div className="inputbox">
                        <input type="password"
                            required="required"
                            value={password}
                            name='password'
                            onChange={(e) => setPassword(e.target.value)} />
                        <span>Password</span>
                    </div>
                    {error && <div>{error}</div>}
                    <button type="submit" className="send">Log In</button>
                    <p className='signup1'>Don't have an account? <span><Link to='/Signup' className='signup2'>Sign up</Link></span></p>
                </form>
            </div>
            <div className='vconnect'>
                <h1 className='heading1'>Vconnect</h1>
                <p className='tagline'>Where <span className='tagline1'>Vconnect</span>s<br />World connects</p>
            </div>
        </div>
    )
}
