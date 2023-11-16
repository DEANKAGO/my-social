import React from 'react'
import { MoreVert } from '@mui/icons-material'
import './post.css'
import { Users } from '../../dummyData'

const Post = ({post}) => {

  // const user = Users.filter(u=>u.id ===1)
  // console.log(user[0].username)

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="top">
          <div className="topLeft">
            <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
            <span className='username'>
              {Users.filter((u) => u.id === post.userId)[0].username}</span>
            <span className="date">{post.date}</span>
          </div>
          <div className="topRight">
          <MoreVert/>
        </div>
        </div>
        <div className="center">
          <span className="text">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" />
            <img src="/assets/heart.jpeg" alt="" className="likeIcon" />
            <span className="likeCounter">{post.like} people like it</span>
          </div>
          <div className="bottomRight">
            <span className="commentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post