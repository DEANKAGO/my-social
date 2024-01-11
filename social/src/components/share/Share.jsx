import React from 'react'
import { FolderCopy, Label, LocationOn, InsertEmoticon } from '@mui/icons-material';
import './share.css'

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img 
                className='profileImg' 
                src="/assets/social-profile.jpg" 
                alt="Profile Image" 
                />
                <input 
                    className='shareInput'
                    placeholder='How is the weather today Kago?'
                />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="option">
                        <FolderCopy htmlColor='tomato' className='shareIcon'/>
                        <span className="optionText">Photo or Video</span>
                    </div>
                    <div className="option">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className="optionText">Bookmark</span>
                    </div>
                    <div className="option">
                        <LocationOn htmlColor='green' className='shareIcon'/>
                        <span className="optionText">Location</span>
                    </div>
                    <div className="option">
                        <InsertEmoticon htmlColor='goldenrod' className='shareIcon'/>
                        <span className="optionText">Reaction</span>
                    </div>
                </div>
                <button className='btn'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share