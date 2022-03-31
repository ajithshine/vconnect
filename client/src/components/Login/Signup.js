import { useState } from 'react';
import Sign from './Signup.module.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('https://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    })

    const data = await response.json()
    console.log(data)
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
        {/* <div className={Sign.inputbox}>
          <input type="password" />
          <span>Confirm Password</span>
        </div> */}
        {/* <div className={Sign.wrapper}>
          <p className={Sign.radioheading}>Gender</p>
          <div className={Sign.radiocover}>
            <div className={Sign.radiocover1}>
              <input type="radio" name="select" id="option1" checked />
              <label className={Sign.option}>
                Male
              </label>
            </div>
            <div className={Sign.radiocover2}>
              <input type="radio" name="select" id="option2" />
              <label className={Sign.option}>
                Female
              </label>
            </div>
          </div>
        </div> */}
        {/* <div className={Sign.dob}>
          <label className={Sign.dobheading}>Date of birth</label>
          <input type="date" className={Sign.dobinput} />
        </div> */}
        <button type="submit" className={Sign.send}>Create account</button>
        <p className={Sign.signup1}>Have an account? <span><Link to='/' className={Sign.signup2}>Log In</Link></span></p>
      </form>
    </div>
  )
}
