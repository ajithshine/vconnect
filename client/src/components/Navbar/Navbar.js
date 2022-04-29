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


export default function Navbar() {
  const [buttonPopup, setButtonPopup]= useState(false);

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
                <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple className={postcss.img} />
              
                <br />
                <textarea type="text" placeholder='Description' className={postcss.textarea}></textarea>
                <button type="submit" className="send"><Link to="/" className='sendlink'>Post</Link> </button>

                </div>
            </Popup>


            <li><MdSettings className={Navcss.icons} /> Settings</li>
            <li><Link to='/MyProfile'><CgProfile className={Navcss.icons} /> Profile</Link></li>
            <li><BsPeopleFill className={Navcss.icons} /> Relation</li>
        </ul>
    </div>
  )
}
