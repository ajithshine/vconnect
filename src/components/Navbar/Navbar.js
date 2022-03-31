import React, {useState, useEffect} from 'react'
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])
  


  return (
    <nav className='navnav'>
        <h1 className="zealous">Vconnect</h1>
      {(toggleMenu || screenWidth > 750) && (
      <ul className="list">
      <Link to="/#main" id='items' onClick={toggleNav}>
      <li className='navcolor'>
        Home  
      </li>
      </Link> 
        
      <Link to="/#second" id='items' onClick={toggleNav}>
      <li className='navcolor'>
         Post
      </li>
      </Link>
    
      <Link to="/#third" id='items' onClick={toggleNav}>
      <li className='navcolor'>
        Profile
      </li>
      </Link>
    </ul>
       
      )}

      <div onClick={toggleNav} className="btnnav"></div>
    </nav>
  )
}