import React from 'react'
import { RssFeed, Chat, PlayCircle, Groups, Bookmarks, Work, Event, HelpOutline } from '@mui/icons-material'
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
                    <span className="sideListItemText">Feed</span>
                </li>
                <li className='sideListItem'>
                    < PlayCircle className='sideIcon'/>
                    <span className="sideListItemText">Feed</span>
                </li>
                <li className='sideListItem'>
                    < Groups className='sideIcon'/>
                    <span className="sideListItemText">Feed</span>
                </li>
                <li className='sideListItem'>
                    < Bookmarks className='sideIcon'/>
                    <span className="sideListItemText">Feed</span>
                </li>
                <li className='sideListItem'>
                    < Work className='sideIcon'/>
                    <span className="sideListItemText">Feed</span>
                </li>
                <li className='sideListItem'>
                    < Event className='sideIcon'/>
                    <span className="sideListItemText">Feed</span>
                </li>
                <li className='sideListItem'>
                    < HelpOutline className='sideIcon'/>
                    <span className="sideListItemText">Feed</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar