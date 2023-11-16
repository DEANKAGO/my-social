import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'


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
          {Users.map(u =>(
            <Online key={u.id} user={u} />
          ))}     
        </ul>
      </div>
    </div>
  )
}

export default Rightbar