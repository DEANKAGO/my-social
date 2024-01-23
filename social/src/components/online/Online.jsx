import React from 'react'
import './online.css'

const Online = ({user}) => {

  const PF = import.meta.env.VITE_APP_PUBLIC_FOLDER;

  return (
    <li className="friend">
            <div className="profileImgContainer">
              <img src={PF + user.profilePicture} alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">{user.username}</span>
    </li>
  )
}

export default Online