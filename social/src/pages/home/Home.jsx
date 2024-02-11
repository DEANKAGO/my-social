import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import './home.css'

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <> 
      <Topbar/> 
      <div className='homeContainer'>
        <Sidebar/>
        <Feed user={user} username={user?.username} />
        <Rightbar />
      </div>
    </> 
  )
}

export default Home