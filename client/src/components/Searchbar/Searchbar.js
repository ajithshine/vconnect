import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchcss from "./Searchbar.module.css";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import Popup from "../PopUp/Popup";


export default function Searchbar() {
  const navigate = useNavigate();
  const [word, setWord] = useState('')

  const handleLogout = () => {
    localStorage.removeItem("token");
    // window.location.reload();
    navigate("/");
  };

  const search = async (e) => {
    e.preventDefault();
    try {
      axios({
        method: "post",
        url: "http://localhost:3001/api/users/search-users/",
        data: { username: word }
      })
        .then(function (response) {
          //handle success
          console.log(response.data.user);
        })
    } catch (error) {
      console.log("error");
    }
  }


  return (
    <div className={searchcss.outer}>
      <form className={searchcss.bar} onSubmit={search}>
        <input
          className={searchcss.searchbox}
          type="text" placeholder="Search.."
          name="search"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit" className={searchcss.button}>
          <FiSearch className={searchcss.icons} />
        </button>
      </form>


      <Link to='/Dashboard' className={searchcss.hover}><FaHome className={`${searchcss.icon} ${searchcss.hover}`} /></Link>
      <div className={searchcss.hover}>
        {/*<IoNotificationsSharp className={searchcss.icon} />
        <div className={searchcss.dropdowncontent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>*/}
      </div>
      <FaSignOutAlt className={`${searchcss.icon} ${searchcss.hover}`} onClick={handleLogout} />
    </div>
  );
}
