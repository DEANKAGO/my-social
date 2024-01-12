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
            <Link to={`/profile/${user.username}`}>
              <img 
                className='postProfileImg' 
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                  } 
                  alt=""
                  />
            </Link>
            <span className='username'>
              {user.username}
            </span>
            <span className="date">{format(post.createdAt)}</span>
          </div>
          <div className="topRight">
          <MoreVert/>
        </div>
        </div>
        <div className="center">
          <span className="text">{post?.desc}</span>
          <img src={PF + post.img } alt="" className="postImg" />
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <img 
              src={`${PF}like.png`} 
              className="likeIcon" 
              onClick={likeHandler} 
              alt=""
            />
            <img 
              src={`${PF}heart.png`} 
              alt="" 
              className="likeIcon" 
              onClick={likeHandler}  
            />
            <span className="likeCounter">{like} people like it </span>
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