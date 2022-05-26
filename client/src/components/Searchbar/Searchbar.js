import React from "react";
import { Link,useNavigate } from "react-router-dom";
import searchcss from "./Searchbar.module.css";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";

export default function Searchbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
		localStorage.removeItem("token");
		// window.location.reload();
    navigate("/");
	};
  return (
    <div className={searchcss.outer}>
      <form className={searchcss.bar}>
        <button type="submit" className={searchcss.button}>
          <FiSearch className={searchcss.icons} />
        </button>
        <input className={searchcss.searchbox} type="text" placeholder="Search.." name="search"/>
      </form>
      <Link to='/MyProfile' className={searchcss.hover}><CgProfile className={`${searchcss.icon} ${searchcss.hover}`} /></Link>
      <div className={searchcss.hover}>
        <IoNotificationsSharp className={searchcss.icon} />
        <div className={searchcss.dropdowncontent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <FaSignOutAlt className={`${searchcss.icon} ${searchcss.hover}`} onClick={handleLogout}/>
    </div>
  );
}
