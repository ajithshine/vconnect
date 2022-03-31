import react from 'react';
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
    <div className='container'>
        <div className='login'>
            <form className='form'>
                <div class="inputbox">
                    <input type="text"  required="required" />
                    <span>Username</span>
                </div>
                <div className="inputbox">
                    <input type="password" required="required" />
                    <span>Password</span>
                </div>
                <button type="submit" className="send"><Link to="/Home" className='sendlink'>Log In</Link> </button>
                <p className='signup1'>Don't have an account? <span><Link to='/Signup' className='signup2'>Sign up</Link></span></p>
            </form>
        </div>
        <div className='vconnect'>
            <h1 className='heading1'>Vconnect</h1>
            <p className='tagline'>Where <span className='tagline1'>Vconnect</span>s<br />World connects</p>
        </div>
    </div>
    </>
  )
}
