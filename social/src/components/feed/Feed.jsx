import { useState, useEffect } from 'react';
import React from 'react';
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';
import "./feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    console.log("feed rendered")
  });

  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Share/>
          {/* {Posts.map((p) =>(
            <Post key={p.id} post={p}/>
          ))}          */}
        </div>
    </div>
  )
}

export default Feed