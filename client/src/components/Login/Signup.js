import { useState } from 'react';
import Sign from './Signup.module.css';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState('male')
  const [date, setDate] = useState('')


  async function registerUser(event) {
    event.preventDefault()
    if (password == confirmPassword) {
      const response = await axios.post('http://localhost:3001/api/register', {
        email,
        username,
        password,
        gender,
        date,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Password doesnt match!")
    }

  }

  return (
    <div className={Sign.container}>
      <div className={Sign.heading1}>
        <p className={Sign.heading2}>Sign Up</p>
      </div>
      <form className={Sign.form} onSubmit={registerUser}>
        <div className={Sign.inputbox}>
          <input
            type="email"
            required="required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </div>
        <div className={Sign.inputbox}>
          <input
            type="text"
            required="required"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Username</span>
        </div>
        <div className={Sign.inputbox}>
          <input
            type="password"
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </div>
        <div className={Sign.inputbox}>
          <input
            type="password"
            required="required"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>Confirm Password</span>
        </div>
        <div className={Sign.wrapper}>
          <p className={Sign.radioheading}>Gender</p>
          <div className={Sign.radiocover}>
            <div className={Sign.radiocover1}>
              <input
                type="radio"
                name="select"
                id="option1"
                value='male'
                onChange={(e) => setGender(e.target.value)}
              />
              <label className={Sign.option}>
                Male
              </label>
            </div>
            <div className={Sign.radiocover2}>
              <input
                type="radio"
                name="select"
                id="option2"
                value='female'
                onChange={(e) => setGender(e.target.value)}
              />
              <label className={Sign.option}>
                Female
              </label>
            </div>
          </div>
        </div>
        <div className={Sign.dob}>
          <label className={Sign.dobheading}>Date of birth</label>
          <input
            type="date"
            className={Sign.dobinput}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className={Sign.send}>Create account</button>
      </form>
      <p className={Sign.signup1}>Have an account? <span><Link to='/' className={Sign.signup2}>Log In</Link></span></p>
    </div>
  )
}
