import React from 'react'
import './closeFriends.css'

const CloseFriends = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className='sideFriend'>
        <img className='sideFriendImg' src={user.profilePicture} alt="" />
        <span className="sideFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriends