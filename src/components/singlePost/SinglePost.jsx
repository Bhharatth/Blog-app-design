import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  // console.log(location);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res)
      setPost(res.data);
    };
    getPost();
  }, [path]);
  

  return (
    <Card sx={{ maxWidth: "100%" }} className="card">
      <CardActionArea>
        {post.photo && <CardMedia
          component="img"
          height="350px"
          image="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="green iguana"
        />}
        
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
              {post.title}
            </Link>
            <div className="singlePostInfo">
              <span>
                Author: 
                <b className="singlePostAuthor">
                  <Link className="link" to={`/?user=${post.username}`}>
                    {post.username}
                  </Link>
                </b>
              </span>
            </div>
          </Typography>
          <hr />
          <span className="postDate">
          {new Date(post.createdAt).toDateString()}{" "}
            <QueryBuilderIcon style={{ width: "15px", marginLeft: "10px" }} />
          </span>

          <Typography
            variant="body2"
            color="text.secondary"
            style={{ maxw: 300 }}
          >
            <p className="singlePostDesc">
              {post.desc}
              
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SinglePost;
