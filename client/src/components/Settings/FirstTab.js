import React, { useState } from "react";
import axios from 'axios';
const FirstTab = () => {
  const [newUsername, setNewUsername] = useState('');
  const [bio, setBio] = useState('');
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token')

  const postData = (e) => {
    e.preventDefault();
    try {
      axios({
        method: "put",
        url: "http://localhost:3001/api/users/update-userdetails/",
        data: { userId: id, newUsername: newUsername, bio: bio },
        // params: { token: token }
      })
        .then(function (response) {
          //handle success
          alert(response.data)
        })
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="FirstTab">

      <label for="pass">New Username</label>
      <input type="text" id="pass" name="new username"
        minLength="8" required value={newUsername} onChange={(e) => setNewUsername(e.target.value)} ></input>

      <label for="bio">Bio</label>

      <textarea id="bio" name="bio" rows="3" cols="50" value={bio} onChange={(e) => setBio(e.target.value)}>
      </textarea>
      <button className="first button1" onClick={postData}>Save Changes</button>


    </div>
  );
};
export default FirstTab;