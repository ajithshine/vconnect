import React from 'react'
import Navcss from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={Navcss.outer}>
        <div className={Navcss.heading}>
            <p>Vconnect</p>
        </div>
        <ul className={Navcss.list}>
            <li>Add post</li>
            <li>Settings</li>
        </ul>
    </div>
  )
}
