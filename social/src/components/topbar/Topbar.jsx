import React from 'react'
import { Search, Person, Chat, Notifications }  from '@mui/icons-material';
import './topbar.css'
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topContainer'>
        <div className='topLeft'>
            <Link to="/" style={{textDecoration:"none"}}>
                <span className='logo'>Social</span>
            </Link>
        </div>
        <div className="topCenter">
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input type="text" className='searchInput' />
            </div>
        </div>
        <div className="topRight">
            <div className="topLinks">
                <span className='topLink'>Homepage</span>
                <span className='topLink'>Timeline</span>
            </div>
            <div className="topIcons">
                <div className="topIconItems">
                    <Person />
                    <span className="topIconBadge">21</span>
                </div>
                <div className="topIconItems">
                    <Chat/>
                    <span className="topIconBadge">7</span>
                </div><div className="topIconItems">
                    <Notifications />
                    <span className="topIconBadge">5</span>
                </div>
            </div>
            <img src="/assets/social-profile.jpg" alt="" className="topImg" />
        </div>
    </div>
  )
}

export default Topbar