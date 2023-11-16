import React from 'react'
import { MoreVert } from '@mui/icons-material'
import './post.css'
import { Users } from '../../dummyData'
import { useState } from 'react'

const Post = ({post}) => {

  // const user = Users.filter(u=>u.id ===1)
  // console.log(user[0].username)

  const [ like,setLike ] = useState(post.like)
  const [ isLiked, setIsLiked ] = useState(false)

  const likeHandler =() => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

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
            <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
            <img src="/assets/heart.jpeg" alt="" className="likeIcon" onClick={likeHandler} />
            <span className="likeCounter">{like}</span>
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