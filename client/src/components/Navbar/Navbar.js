import React from 'react'
import Navcss from './Navbar.module.css'; 
import { FaHome } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className={Navcss.outer}>
        <div className={Navcss.heading}>
            <p>Vconnect</p>
        </div>
        <ul className={Navcss.list}>
            <li> <FaHome className={Navcss.homeicons} /> Home</li>
            
            <li><IoAdd className={Navcss.icons} /> Add post</li>
            <li><MdSettings className={Navcss.icons} /> Settings</li>
            <li><CgProfile className={Navcss.icons} /> Profile</li>
            <li><BsPeopleFill className={Navcss.icons} /> Relation</li>
        </ul>
    </div>
  )
}
