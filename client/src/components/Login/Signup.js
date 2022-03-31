import React from 'react';
import Sign from './Signup.module.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className={Sign.container}>
      <div className={Sign.heading1}>
        <p className={Sign.heading2}>Sign Up</p>
      </div>
      <form className={Sign.form}>
      <div class={Sign.inputbox}>
          <input type="email" required="required" />
          <span>Email</span>
      </div>
      <div class={Sign.inputbox}>
          <input type="text"  required="required" />
          <span>Username</span>
      </div>
      <div class={Sign.inputbox}>
          <input type="password" required="required" />
          <span>Password</span>
      </div>
      <div class={Sign.inputbox}>
          <input type="password" required="required" />
          <span>Confirm Password</span>
      </div>
      <div class={Sign.wrapper}>
        <p className={Sign.radioheading}>Gender</p>
        <div className={Sign.radiocover}>
          <div className={Sign.radiocover1}>
            <input type="radio" name="select" id="option1" checked />
              <label class={Sign.option}>
                  Male
              </label>
          </div>
          <div className={Sign.radiocover2}>
            <input type="radio" name="select" id="option2" />
              <label class={Sign.option}>
                  Female
              </label>
          </div>
        </div>
      </div>
      <div className={Sign.dob}>
      <label className={Sign.dobheading}>Date of birth</label>
      <input type="date" className={Sign.dobinput} />
      </div>
      </form>
      <button type="submit" class={Sign.send}>create account</button>
      <p className={Sign.signup1}>Have an account? <span><Link to='/' className={Sign.signup2}>Log In</Link></span></p>
    </div>
  )
}
