import React from 'react'
import './online.css'

const Online = ({user}) => {
  return (
    <li className="friend">
            <div className="profileImgContainer">
              <img src={user.profilePicture} alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">{user.username}</span>
    </li>
  )
}

export default Online