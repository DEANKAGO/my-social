import React from 'react'
import './closeFriends.css'

const CloseFriends = ({user}) => {
  return (
    <li className='sideFriend'>
        <img className='sideFriendImg' src={user.profilePicture} alt="" />
        <span className="sideFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriends