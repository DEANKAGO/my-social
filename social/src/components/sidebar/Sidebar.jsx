import React from 'react'
import { 
    RssFeed, 
    Chat, 
    PlayCircle, 
    Groups, 
    Bookmarks, 
    Work, 
    Event, 
    HelpOutline 
} from '@mui/icons-material'
import CloseFriends from '../closeFriends/CloseFriends'
import { Users } from '../../dummyData'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sideWrapper">
            <ul className='sideList'>
                <li className='sideListItem'>
                    < RssFeed className='sideIcon'/>
                    <span className="sideListItemText">Feed</span>
                </li>
                <li className='sideListItem'>
                    < Chat className='sideIcon'/>
                    <span className="sideListItemText">Chats</span>
                </li>
                <li className='sideListItem'>
                    < PlayCircle className='sideIcon'/>
                    <span className="sideListItemText">Videos</span>
                </li>
                <li className='sideListItem'>
                    < Groups className='sideIcon'/>
                    <span className="sideListItemText">Groups</span>
                </li>
                <li className='sideListItem'>
                    < Bookmarks className='sideIcon'/>
                    <span className="sideListItemText">Bookmarks</span>
                </li>
                <li className='sideListItem'>
                    < Work className='sideIcon'/>
                    <span className="sideListItemText">Jobs</span>
                </li>
                <li className='sideListItem'>
                    < Event className='sideIcon'/>
                    <span className="sideListItemText">Events</span>
                </li>
                <li className='sideListItem'>
                    < HelpOutline className='sideIcon'/>
                    <span className="sideListItemText">Questions</span>
                </li>
            </ul>
            <button className='sideButton'>Show Nore</button>
            <hr className='sideHr'/>
            <ul className='sideFriendList'>
                {Users.map( (u) =>(
                    <CloseFriends key={u.id} user={u}/>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar