import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./ProfileDetails.css";
import picture from "../Images/pic1.jpg";
export default function ProfileDetails() {
  return (
    <div className="details">
      <img src={picture} alt="profile picture" className="pics" />
      <h4 className="name">Aashli Anoop K</h4>
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
    </div>
  );
}
