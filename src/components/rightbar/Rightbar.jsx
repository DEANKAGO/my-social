import React from 'react'
import "./rightbar.css"

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthday">
          <img src="/assets/gift.webp" className='birthdayImg' alt="" />
          <span className="birthdayText">
            <b>Martin Kago</b> and <b>other friends</b>
          </span>
        </div>
        <img src="/assets/gift.webp" className='add' alt="" />
        <h4 className='rightTitle'>Online Friends</h4>
        <ul className='friendList'>
          <li className="friend">
            <div className="profileImgContainer">
              <img src="/assets/gift.webp" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">Kago Muchai</span>
          </li>
          <li className="friend">
            <div className="profileImgContainer">
              <img src="/assets/gift.webp" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">Kago Muchai</span>
          </li>
          <li className="friend">
            <div className="profileImgContainer">
              <img src="/assets/gift.webp" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">Kago Muchai</span>
          </li>
          <li className="friend">
            <div className="profileImgContainer">
              <img src="/assets/gift.webp" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">Kago Muchai</span>
          </li>
          <li className="friend">
            <div className="profileImgContainer">
              <img src="/assets/gift.webp" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">Kago Muchai</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar