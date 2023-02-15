import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../header/Header';
import Post from '../post/Post'
import ResponsiveAppBar from '../TopBar/Topbar';
import "./Posts.css";

const Posts = ({posts}) => {
  return (
    <div className='posts'>
    {posts.map((p)=> (
      <Post post={p}/>
    ))}
    </div>
  )
}

export default Posts;