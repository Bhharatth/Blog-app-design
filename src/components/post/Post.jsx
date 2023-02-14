import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import "./post.css";

const Post = ({img}) => {
  return (
    <div className='post'>
        <Card sx={{ maxWidth: 345 }}
        className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
          <Typography gutterBottom variant="h5" component="div">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
          </Typography>
          <hr />
        <span className="postDate">1 hour ago <QueryBuilderIcon style={{ width: '15px' , marginLeft: "10px"}}/></span>
        
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

   
    </div>
  )
}

export default Post