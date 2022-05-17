import React from "react";
const FirstTab = () => {
  return (
    <div className="FirstTab">
  
       
          <label for="pass">Username</label>
          <input type="text" id="pass" name="username"
           minLength="8" required></input>

          <label for="bio">Bio</label>

          <textarea id="bio" name="bio" rows="3" cols="50">
          </textarea>
          <button className="button button1">Save Changes</button>
      
  
    </div>
  );
};
export default FirstTab;