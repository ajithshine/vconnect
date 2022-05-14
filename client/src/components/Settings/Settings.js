import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Setcss from './Settings.module.css';
import Tabs from './Tabs';
function Settings() {
  return (
    <div>
    
        <Searchbar />
        { <Tabs/> }
        

    </div>
  )
}

export default Settings;