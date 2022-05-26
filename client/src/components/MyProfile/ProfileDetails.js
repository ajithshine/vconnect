import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";
import "./ProfileDetails.css";
import picture from "../Images/pic1.jpg";
export default function ProfileDetails() {
  const [data, setData] = useState([])
  const [post, setPost] = useState([])
  const [following,setFollowing] = useState([])
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('id');
  const url = 'http://localhost:3001/api/profile/details/' + id;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url, {
          params: { token: token },
        });
        await setData(res.data.userDetails);
        await setPost(res.data.userPosts);
        await setFollowing(res.data.userDetails.following);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <div className="details">
      <img src={picture} alt="profile picture" className="pics" />
      <h4 className="name">{data.username}</h4>
      <div className="bio">{data.description}</div>
      <br />
      <ul className="post">
        <li>Post</li>
        <li>Following</li>
      </ul>
      <ul className="following">
        <li>{post.length}</li>
        <li>{following.length}</li>
      </ul>
      <button className="button1">My Relations</button>
    </div>
  );
}
