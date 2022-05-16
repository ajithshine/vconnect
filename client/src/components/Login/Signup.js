import { useState } from 'react';
import Sign from './Signup.module.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Signup() {
//   const [email, setEmail] = useState('')
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [gender, setGender] = useState('male')
//   const [date, setDate] = useState('')


//   async function registerUser(event) {
//     event.preventDefault()
//     if (password === confirmPassword) {
//       await axios.post('http://localhost:3001/api/auth/register', {
//         email,
//         username,
//         password,
//         gender,
//         date,
//       })
//         .then(function (response) {
//           console.log(response);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     } else {
//       alert("Password doesnt match!")
//     }

//   }

const [data, setData] = useState({
  email: "",
  username: "",
  password: "",
  gender: "",
  date: "",
});
const [error, setError] = useState("");
const navigate = useNavigate();

const handleChange = ({ currentTarget: input }) => {
  setData({ ...data, [input.name]: input.value });
};

const registerUser = async (e) => {
  e.preventDefault();
  if (data.password === data.confirmPassword) {
  try {
    const url = "http://localhost:3001/api/auth/register";
    const { data: res } = await axios.post(url, data);
    navigate("/");
    console.log(res.message);
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
}
};


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
            value={data.email}
            name="email"
            onChange={handleChange}
          />
          <span>Email</span>
        </div>
        <div className={Sign.inputbox}>
          <input
            type="text"
            required="required"
            value={data.username}
            name='username'
            onChange={handleChange}
          />
          <span>Username</span>
        </div>
        <div className={Sign.inputbox}>
          <input
            type="password"
            required="required"
            value={data.password}
            name='password'
            onChange={handleChange}
          />
          <span>Password</span>
        </div>
        <div className={Sign.inputbox}>
          <input
            type="password"
            required="required"
            value={data.confirmPassword}
            name='confirmPassword'
            onChange={handleChange}
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
                value={data.male}
                onChange={handleChange}
                required
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
                value={data.female}
                onChange={handleChange}
                required
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
            value={data.date}
            name='date'
            onChange={handleChange}
            required
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit" className={Sign.send}>Create account</button>
      </form>
      <p className={Sign.signup1}>Have an account? <span><Link to='/' className={Sign.signup2}>Log In</Link></span></p>
    </div>
  )
}