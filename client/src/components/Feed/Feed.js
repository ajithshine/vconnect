import React from 'react'
import { ReactDOM } from 'react';
import { useState } from 'react/cjs/react.development';
import feedcss from './Feed.module.css';
import axios from 'axios';
export default function Feed() {
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [username, setusername] = useState('')

  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token')

  axios.get("http://localhost:3001/api/posts/",{
    params:{token: token}
  }).then(
    (response) => {
      console.log(response);
    }
  );


  return (
    <div>
        <div className={feedcss.outer}>
          <div className={feedcss.inner}>
            <div className={feedcss.box}>
            { response.map((response) => {
              <div className={feedcss.naming}>{response.data.username}</div>
            })}    
            { response.map((response) => {
              <div className={feedcss.post}>{response.data.post}</div>
            })}
            </div>
    
          </div>  
        </div>
    </div>
  )
}
