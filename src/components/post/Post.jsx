import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import "./post.css";

const Post = ({post}) => {
  return (
    <div className='post'>
        <Card sx={{ maxWidth: 345 }}
        className="card">
      <CardActionArea>
        {post.photo && <CardMedia
          component="img"
          height="140"
          image={post.photo}
          alt="green iguana"
        />}
        <CardMedia
          component="img"
          height="140"
          image={post.photo}
          alt="green iguana"
        />
        <CardContent>
        <div className="postCats">
          {post.categories.map((c)=> (
            <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              {c.name}
            </Link>
          </span>
          ))}
          
        </div>
          <Typography gutterBottom variant="h5" component="div">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
          </Typography>
          <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}<QueryBuilderIcon style={{ width: '15px' , marginLeft: "10px"}}/></span>
        
          <Typography variant="body2" color="text.secondary">
            {post.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

   
    </div>
  )
}

export default Post