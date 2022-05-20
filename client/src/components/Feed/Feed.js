import React from 'react'
import { useState } from 'react/cjs/react.development';
import feedcss from './Feed.module.css';
import axios from 'axios';
export default function Feed() {
  const [post, setPost]= useState('')
  const [abname, setAbname] = useState('')
  const ann = localStorage.getItem('token')
  const id = localStorage.getItem('id');
  const url = 'http://localhost:3001/api/posts/'+ id;
  const url2 = 'http://localhost:3001/api/users/'+ id;

  console.log(ann);
    axios.get(url,{
      params:{token:ann}
    }).then(
      (response) => {
        console.log(response.File.name);
        setPost(response.data.username);
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
            <div className={feedcss.naming}>{abname}</div>
            <div className={feedcss.post}>{}</div>
            </div>
    
          </div>  
        </div>
    </div>
  )
}
