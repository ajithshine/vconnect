import React from 'react'
import { Link } from 'react-router-dom';
import Navcss from './Navbar.module.css'; 
import { FaHome } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";

import {useState} from 'react'
import postcss from '../Post/Post.module.css';
import Popup from '../PopUp/Popup'
import axios from 'axios';


export default function Navbar() {
  const [buttonPopup, setButtonPopup]= useState(false);
  const [image,setImage] = useState('')
  const [description, setDescription] = useState('')

  const [abname, setAbname] = useState('')
  const ann = localStorage.getItem('token')
  const id = localStorage.getItem('id');
  const url = 'http://localhost:3001/api/profile/details'+ id;
  console.log(ann);
    axios.get(url,{
      params:{token:ann}
    }).then(
      (response) => {
        console.log(response);
        setAbname(response.data.username);
      }
  );

  const fileSelect = (event) =>{
    console.log(event.target.files)
    setImage(event.target.files[0])
  }

  const fileDescription = (event) =>{
    console.log(event.target.description)
    setDescription(event.target.description)
  }

  const fileUpload = (e) =>{
    e.preventDefault();
    // const id = localStorage.getItem('id');
    const urlProfile= 'http://localhost:3001/api/posts/'
    axios.get(urlProfile,)
    const formData = new FormData()
    formData.append('image',image)
    console.log("success")  //till here its ok
    axios.post(url, {formData,abname,description})
    .then((response)=>{
      console.log(response);
    })

  }

  return (
    <div className={Navcss.outer}>
        <div className={Navcss.heading}>
            <p>Vconnect</p>
        </div>
        <ul className={Navcss.list}>
            <li> <FaHome className={Navcss.homeicons} /> Home</li>            
            <li onClick={()=> setButtonPopup(true)}><IoAdd className={Navcss.icons} /> Add post</li>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} className={postcss.post}>
          
       
                <div className={postcss.inner}>
                <input type="file" id="image_uploads" name="image" accept=".jpg, .jpeg, .png" multiple className={postcss.img} onChange={fileSelect}/>
              
                <br />
                <textarea type="text" placeholder='Description' name='description' className={postcss.textarea} onChange={fileDescription}></textarea>
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
