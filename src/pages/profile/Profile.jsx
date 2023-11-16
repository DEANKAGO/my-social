import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import './profile.css'

const Profile = () => {
  return (
    <> 
      <Topbar/> 
      <div className='profile'>
        <Sidebar/>
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src="assets/dd6.avif" alt="" className="profileCoverImg" />
                <img src="assets/dd5.jpg" alt="" className="profileUserImg" />
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kago Muchai</h4>
              <span className="profileInfoDesc">Hello my people</span>
            </div>
            <div className="profileRightBottom">
              <Feed/>
              <Rightbar profile/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Profile