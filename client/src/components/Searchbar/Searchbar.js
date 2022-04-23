import React from 'react'
import searchcss from './Searchbar.module.css';
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";


export default function Searchbar() {
  return (
    <nav className={searchcss.outer}>
        <form className={searchcss.bar}>
            <button type="submit" className={searchcss.button}><FiSearch className={searchcss.icons} /></button>
            <input type="text" placeholder="Search.." name="search" />
        </form>
        <CgProfile className={searchcss.icon} />
        <IoNotificationsSharp className={searchcss.icon} />
        <FaSignOutAlt className={searchcss.icon} />
    </nav>
  )
}
