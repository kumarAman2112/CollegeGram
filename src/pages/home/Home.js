import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Feed from '../../components/feed/feed.jsx';
import Rightbar from '../../components/rightbar/rightbar.jsx';
import './Home.css';
export default function  Home(){
  
    return(
        <>
        <div>
         <Topbar/>
        <div className='homeContainer'>
         <Sidebar/>
         <Feed/>
         <Rightbar/>
         </div>
         </div>
         </>
    );
}
