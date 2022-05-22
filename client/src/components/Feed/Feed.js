import React from 'react'
import { ReactDOM } from 'react';
import { useState } from 'react/cjs/react.development';
import feedcss from './Feed.module.css';
import axios from 'axios';
export default function Feed() {
  const [post, setPost]= useState('')
  const [abname, setAbname] = useState('')
  const ann = localStorage.getItem('token')
  const id = localStorage.getItem('id');
  const url = 'http://localhost:3001/api/post/timeline/all';
  const url2 = 'http://localhost:3001/api/profile/details'+ id;

  console.log(ann);
    axios.get(url).then(
      (response) => {
        console.log(response.File);
        setPost(response.File);
      }
    );  
      
    axios.get(url2,{
      params:{token:ann}
    }).then(
      (response) => {
        console.log(response);
        setAbname(response.data.username);
      }
    );
  return (
    <div>
        <div className={feedcss.outer}>
          <div className={feedcss.inner}>
            <div className={feedcss.box}>
                {/* <img src={`data:image/png;base64,${product.img.data}`} /> */}
            { abname.map((abname) => {
              <div className={feedcss.naming}>{abname}</div>
            })}    
            { post.map((post) => {
              <div className={feedcss.post}>{post}</div>
            })}
            </div>
    
          </div>  
        </div>
    </div>
  )
}
