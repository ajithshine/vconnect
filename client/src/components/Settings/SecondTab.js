import React from "react";
const SecondTab = () => {
  return (
    <div className="SecondTab">
    
            
    
          <label for="old">Old Password</label>
          <input type="password" id="old" name="old"
           maxLength="8" required></input>
    
      
          <label for="new">New Password</label>
          <input type="password" id="new" name="new"
           maxlength="8" required></input>
      
    
          <label for="confirm">Confirm Password</label>
          <input type="password" id="confirm" name="confirm"
           maxlength="8" required></input>
          
          <button className="second button2">Save</button>


  
    </div>
  );
};
export default SecondTab;