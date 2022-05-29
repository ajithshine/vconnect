import React from "react";
const FirstTab = () => {
  return (
    <div className="FirstTab">
  
          <label for="pass">New Username</label>
          <input type="text" id="pass" name="new username"
           minLength="8" required></input>

          <label for="bio">Bio</label>

          <textarea id="bio" name="bio" rows="3" cols="50">
          </textarea>
          <button className="first button1">Save Changes</button>
      
  
    </div>
  );
};
export default FirstTab;