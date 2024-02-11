import React, { useContext } from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'
import {  AuthContext } from '../../context/AuthContext';
import NoAvatar from '../../assets/noAvatar.png';


const Rightbar = ({profile}) => {
  
  const { user } = useContext(AuthContext)
  const PF = import.meta.env.VITE_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday">
          <img src="/assets/gift.webp" className='birthdayImg' alt="" />
          <span className="birthdayText">
            <b>Martin Kago</b> and <b>other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/gift.webp" className='add' alt="" />
        <h4 className='rightTitle'>Online Friends</h4>
        <ul className='friendList'>
          {Users.map(u =>(
            <Online key={u.id} user={u} />
          ))}     
        </ul>
      </>
    )
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={user.profilePicture ? user.profilePicture : NoAvatar}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Snow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}social-sidebar.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Leonel Messi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}dd6.avif`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Loise Wairimu</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}dd4.webp`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Mary Wambui</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}dd2.avif`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Batista Actor</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}dd3.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Angelina Jolie</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}dd5.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Travis Scott</span>
          </div>
        </div>
      </>
    )
  };

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">      
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar