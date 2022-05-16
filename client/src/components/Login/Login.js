import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-redirect'
import axios from 'axios';
import Post from '../Post/Post';

export default function Login() {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    // async function loginUser(event) {
    //     event.preventDefault()
    //     await axios.post('http://localhost:3001/api/login', {
    //         username,
    //         password,
    //     })
    //         .then(function (response) {
    //             if(response.data.user){
    //                 console.log("Login Successful");
    //                 // <Redirect to={"/Dashboard"} />
    //             }else{
    //                 alert("Incorrect Username or Password")
    //             }
    //         })
    //         // .catch(function (error) {
    //         //     console.log(error);
    //         // });

    // }

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3001/api/login";
			const { data: res } = await axios.post(url, data);
            console.log("success");
			localStorage.setItem("token", res.data);
			window.location = "/Dashboard";
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
                        <input type="text"
                            required="required"
                            value={data.username}
                            name='username'
                            onChange={handleChange} />
                        <span>Username</span>
                    </div>
                    <div className="inputbox">
                        <input type="password"
                            required="required"
                            value={data.password}
                            name='password'
                            onChange={handleChange} />
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
