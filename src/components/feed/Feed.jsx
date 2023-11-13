import React from 'react'
import Share from '../../components/share/Share'
import Post from '../../components/post/Post'
import "./feed.css"

const Feed = () => {
  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Share/>
          <Post/>
        </div>
    </div>
  )
}

export default Feed