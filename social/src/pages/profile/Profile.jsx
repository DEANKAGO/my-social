import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import './profile.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import NoAvatar from '../../assets/noAvatar.png';
import NoCover from '../../assets/noCover.png';

const Profile = () => {
  const [user, setUser] = useState([]);
  const username = useParams().username;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() =>{
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
  }, [username]);

  return (
    <> 
      <Topbar/> 
      <div className='profile'>
        <Sidebar/>
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img 
                  src={user.coverPicture || NoCover}
                  alt="" 
                  className="profileCoverImg" 
                />
                <img 
                  src={user.profilePicture || NoAvatar}
                  alt="" 
                  className="profileUserImg" 
                />
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
            <div className="profileRightBottom">
              <Feed username={username}/>
              <Rightbar user={user}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Profile