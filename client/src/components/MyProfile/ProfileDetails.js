import React, {useState} from "react";
import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";
import "./ProfileDetails.css";
import picture from "../Images/pic1.jpg";
export default function ProfileDetails() {
  const [abname, setAbname] = useState('')
  const ann = localStorage.getItem('token')
  const id = localStorage.getItem('id');
  const url = 'http://localhost:3001/api/users/'+ id;
  console.log(ann);
    axios.get(url,{
      params:{token:ann}
    }).then(
      (response) => {
        console.log(response);
        setAbname(response.data.username);
      }
    );
  return (
    <div className="details">
      <img src={picture} alt="profile picture" className="pics" />
      <h4 className="name">{abname}</h4>
      <div className="bio">Hi...#CECian #Music#Nature #Family#Friends</div>
      <br />
      <ul className="post">
        <li>Post</li>
        <li>Following</li>
      </ul>
      <ul className="following">
        <li>9</li>
        <li>114</li>
      </ul>
      <button className="button1">My Relations</button>
    </div>
  );
}
