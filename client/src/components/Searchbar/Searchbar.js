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

  const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    // window.location.reload();
    navigate("/");
  };

  const search = async (event) => {
    event.preventDefault();
    const searchWord = word;
  
    try {
      axios({
        method: "post",
        url: "http://localhost:3001/api/users/search-users/",
        data: { username: word }
      })
        .then(function (response) {
          //handle success
          console.log(response.data.user);
          const userList = response.data.user;
          setWord(searchWord)
          if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(userList);
          }

        })
    } catch (error) {
      console.log("error");
    }


  };


  return (
    <div className={searchcss.outer} onSubmit={search}>
      <form className={searchcss.bar}>
        <div className={searchcss.down}>
        <input
          className={searchcss.searchbox}
          type="text" placeholder="Search.."
          name="search"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      {filteredData.length != 0 && (
        <div className={searchcss.dataResult}>
          {filteredData.slice(0, 15).map((array) => {
            return (
              <a className={searchcss.dataItem} target="_blank">   
              {/* href={array.username}  */}
                <p>{array.username} </p>
              </a>
            );
        })}
        </div>
      )}
      </div>
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
