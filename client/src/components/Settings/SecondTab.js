import React, { useState } from "react";
import axios from 'axios';
const SecondTab = () => {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token')

  const postData = (e) => {
    e.preventDefault();
    if (confirmPass === newPass) {
      try {
        axios({
          method: "put",
          url: "http://localhost:3001/api/users/update-password/",
          data: {
            oldPass: oldPass,
            newPass: newPass,
            userId: id
          },
          params: { token: token }
        })
          .then(function (response) {
            //handle success
            alert(response.data)
          })
      } catch (error) {
        console.log(error);
      }
    }
    else {
      alert("Password doesnt match");
    }
  }

  return (
    <div className="SecondTab">



      <label for="old">Old Password</label>
      <input type="password" id="old" name="old"
        maxLength="8" value={oldPass} required onChange={(e) => setOldPass(e.target.value)}></input>


      <label for="new">New Password</label>
      <input type="password" id="new" name="new"
        maxlength="8" required value={newPass} onChange={(e) => setNewPass(e.target.value)} ></input>


      <label for="confirm">Confirm Password</label>
      <input type="password" id="confirm" name="confirm"
        maxlength="8" required value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} ></input>

      <button className="second button2" onClick={postData}>Save</button>



    </div>
  );
};
export default SecondTab;