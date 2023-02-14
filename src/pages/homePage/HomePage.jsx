import { CleaningServices } from '@mui/icons-material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import "./homePage.css"

const HomePage = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <Header/>
      <div className='home'>
        <Posts/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default HomePage