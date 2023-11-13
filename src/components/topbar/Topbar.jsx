import React from 'react'
import { Search, Person, Chat, Notifications }  from '@mui/icons-material';
import './topbar.css'

const Topbar = () => {
  return (
    <div className='topContainer'>
        <div className='topLeft'>
            <span className='logo'>My Social</span>
        </div>
        <div className="topCenter">
            <div className="searchbar">
                <Search/>
                <input type="text" className='searchInput' />
            </div>
        </div>
        <div className="topRight">
            <div className="topLinks">
                <span className='topLink'>2</span>
                <span className='topLink'>3</span>
                <span className='topLink'>4</span>
            </div>
            <div className="topIcons">
                <div className="topIconItems">
                    <Person />
                    <span className="topIconBadge"></span>
                </div>
                <div className="topIconItems">
                    <Chat/>
                    <span className="topIconBadge"></span>
                </div><div className="topIconItems">
                    <Notifications />
                    <span className="topIconBadge"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar