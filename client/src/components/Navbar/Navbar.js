import React from 'react'
import { Link } from 'react-router-dom';
import Navcss from './Navbar.module.css';
import { FaHome } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";

import { useState } from 'react'
import postcss from '../Post/Post.module.css';
import Popup from '../PopUp/Popup'
import axios from 'axios';
import FormData from 'form-data'

export default function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token')

  const fileSelect = (event) => {
    console.log(event.target.name)
    setImage(event.target.files[0])
  }

  const fileUpload = (e) => {
    e.preventDefault();
    try {
      const bodyFormData = new FormData()
      bodyFormData.append('userId', id);
      bodyFormData.append('description', description);
      bodyFormData.append('image', image);
      axios({
        method: "post",
        url: "http://localhost:3001/api/posts/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
        params: { token: token }
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
    } catch (error) {
      console.log(error);
    }



  }

  return (
    <div className={Navcss.outer}>
      <div className={Navcss.heading}>
        <p>Vconnect</p>
      </div>
      <ul className={Navcss.list}>
        <li> <FaHome className={Navcss.homeicons} /> Home</li>
        <li onClick={() => setButtonPopup(true)}><IoAdd className={Navcss.icons} /> Add post</li>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} className={postcss.post}>


          <div className={postcss.inner}>
            <input type="file" id="image_uploads" name="image" accept=".jpg, .jpeg, .png" multiple className={postcss.img} onChange={fileSelect} />

            <br />
            <textarea type="text" placeholder='Description' name='description' value={description} className={postcss.textarea} onChange={(event)=>{setDescription(event.target.value)}}></textarea>
            <button type="submit" className="send" onClick={fileUpload}>Post </button>

          </div>
        </Popup>


        <Link to='/Settings' className={Navcss.nodec}><li><MdSettings className={Navcss.icons} /> Settings</li></Link>
        <Link to='/MyProfile' className={Navcss.nodec}><li><CgProfile className={Navcss.icons} /> Profile</li></Link>
        <Link to='/Relations' className={Navcss.nodec}><li><BsPeopleFill className={Navcss.icons} /> Relation</li></Link>
      </ul>
    </div>
  )
}
