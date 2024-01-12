import React from 'react';
import { MoreVert } from '@mui/icons-material';
import './post.css';
import { Users } from '../../dummyData';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Post = ({post}) => {

  // const user = Users.filter(u=>u.id ===1)
  // console.log(user[0].username)

  const [ like, setLike ] = useState(post.likes.length);
  const [ isLiked, setIsLiked ] = useState(false);
  const [ user, setUser ] = useState({});
  // const { user: currentUser } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler =() => {
    try{
      axios.put("/posts/" + post._id + "/like", {userId: currentUser._id });
    } catch(err) {};
    setLike(isLiked ? like - 1 : like + 1)
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