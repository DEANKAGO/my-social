import React from 'react'
import './online.css'
import NoAvatar from '../../assets/noAvatar.png';

const Online = ({user}) => {

  const PF = import.meta.env.VITE_APP_PUBLIC_FOLDER;

  return (
    <li className="friend">
            <div className="profileImgContainer">
              <img 
                src={user.profilePicture || NoAvatar} 
                alt="" className="profileImg" 
              />
              <span className="online"></span>
            </div>
            <span className="username">{user.username}</span>
    </li>
  )
}

export default Online