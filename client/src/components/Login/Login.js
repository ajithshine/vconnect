import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../Post/Post';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()
        await axios.post('http://localhost:3001/api/login', {
            username,
            password,
        })
            .then(function (response) {
                if(response.data.user){
                    console.log("Login Successful");
                }else{
                    alert("Incorrect Username or Password")
                }
            })
            // .catch(function (error) {
            //     console.log(error);
            // });

    }

    return (
        <div className='container'>
            <div className='login'>
                <form className='form' onSubmit={loginUser}>
                    <div className="inputbox">
                        <input type="text"
                            required="required"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <span>Username</span>
                    </div>
                    <div className="inputbox">
                        <input type="password"
                            required="required"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <span>Password</span>
                    </div>
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
