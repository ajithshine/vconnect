import React from 'react'
import ProfileDetails from '../MyProfile/ProfileDetails'
import Searchbar from '../Searchbar/Searchbar'
import Cards from './Cards'

export default function Relation() {
  return (
    <div>
        <Searchbar />
        <ProfileDetails />
        <Cards />
    </div>
  )
}
