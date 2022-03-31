import React from 'react'
import Homecss from './Home.module.css'
import Navbar from '../Navbar/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />  
    <div className={Homecss.home}>Home</div>
    </>
  )
}
