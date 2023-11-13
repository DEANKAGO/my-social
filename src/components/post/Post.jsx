import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="top">
          <div className="topLeft">
            <img className='postProfileImg' src="/assets/social-sidebar.jpg" alt="" />
            <span className='username'>Martin Kago</span>
            <span className="date">10 min ago</span>
          </div>
          <div className="topRight">
          <MoreVertIcon/>
        </div>
        </div>
        <div className="center">
          <span className="text">Hi, the weather looks rainy today.</span>
          <img src="/assets/social-sidebar.jpg" alt="" className="postImg" />
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" />
            <img src="/assets/heart.jpeg" alt="" className="likeIcon" />
            <span className="likeCounter">4 people like it</span>
          </div>
          <div className="bottomRight">
            <span className="commentText">12 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post