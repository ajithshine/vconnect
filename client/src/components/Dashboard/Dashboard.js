import React from 'react'
import Navbar from '../Navbar/Navbar'
import Searchbar from '../Searchbar/Searchbar'
import Feed from '../Feed/Feed'


export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Feed />
    </div>
  )
}
