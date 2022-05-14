import React from "react";
const SecondTab = () => {
  return (
    <div className="SecondTab">
    
            
      <div>
          <label for="pass">Old Password</label>
          <input type="password" id="pass" name="old"
           maxLength="8" required></input>
       </div>
       <div>
          <label for="pass">New Password</label>
          <input type="password" id="pass" name="new"
           maxlength="8" required></input>
       </div>
       <div className="confirm">
          <label for="pass">Confirm Password</label>
          <input type="password" id="pass" name="confirm"
           maxlength="8" required></input>
       </div>

       <input type="button" value="Save" className="save"></input>
  
    </div>
  );
};
export default SecondTab;