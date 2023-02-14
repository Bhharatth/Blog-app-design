import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../header/Header';
import Post from '../post/Post'
import ResponsiveAppBar from '../TopBar/Topbar';
import "./Posts.css";

const Posts = () => {
  return (
    <div className='posts'>
    <div className="postsContainer">
    <Post img="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <Post img="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <Post img="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <Post img="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <Post img="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <Post img="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=400"/>
    </div>
    </div>
  )
}

export default Posts;