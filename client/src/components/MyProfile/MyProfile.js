import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import ProfileDetails from './ProfileDetails'
import Feed from '../Feed/Feed'
function MyProfile() {
  return (
    <div>
        <Searchbar />
        <ProfileDetails />
        <Feed/>
    </div>
  )
}

export default MyProfile;