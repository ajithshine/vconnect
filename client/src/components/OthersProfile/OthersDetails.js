import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./OthersDetails.css";
import picture from "../Images/pic3.jpg";
export default function OthersDetails() {
  return (
    <div className="details">
      <img src={picture} alt="profile picture" className="pics" />
      <h4 className="name">Sanoop S</h4>
      <div className="bio">Hi...#CECian #Music#Nature #Family#Friends</div>
      <br />
      <ul className="post">
        <li>Post</li>
        <li>Following</li>
      </ul>
      <ul className="following">
        <li>5</li>
        <li>200</li>
      </ul>
      <button className="button button1">Add Relation</button>
    </div>
  );
}
