import React, { useState } from "react";
import './Tabs.css';
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import Setcss from './Settings.module.css';
import picture from "../Images/pic1.jpg";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      <div className="heading">
            <p>Vconnect</p>
        </div>
      <div className={Setcss.container}>
           <div className={Setcss.small}>
             <ul className="nav">
             <li className={activeTab === "tab1" ? "active" : ""}
             onClick={handleTab1}
             >
             Edit Profile</li>
             <li className={activeTab === "tab2" ? "active" : ""}
             onClick={handleTab2}
             >
             Change Password</li>
             </ul>

           </div>
            <div className={Setcss.large}>
                <div className="outlet">
                   {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
                </div>
                <img src={picture} alt="profile picture" className={Setcss.pic} />
               <p>aashlianoop</p>
          
            </div>
        </div>
  
    </div>
  );
};
export default Tabs;