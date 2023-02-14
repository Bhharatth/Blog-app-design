import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitlesm'>Around the world Blogs</span>
            <span className='headerTitlesm'>SIGNATURE BLOG</span>
        </div>
        <img
        className="headerImg"
        src="https://images.pexels.com/photos/13948274/pexels-photo-13948274.jpeg?cs=srgb&dl=pexels-mavi-ay-dura%C4%9F%C4%B1-13948274.jpg&fm=jpg"
        alt=""
      />
    </div>
  )
}

export default Header