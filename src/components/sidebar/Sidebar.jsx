import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

const Sidebar = () => {
  const [cats, setCats] = useState([]);

 useEffect(() => {
  const getcats = async ()=> {
    const res = await axios.get("/categories");
    setCats(res.data)
  }
  getcats();
  
 }, []);
 
 

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus
          recusandae cumque voluptate maiores in officiis nemo, iure rerum
          delectus id dicta harum corrupti facere quia nesciunt odit
          exercitationem ad.
        </p>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="authorImage"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus
          recusandae cumque voluptate maiores in officiis nemo, iure rerum
          delectus id dicta harum corrupti facere quia nesciunt odit
          exercitationem ad.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ui className="sidebarList">
          {cats.map((c)=> (
            <li className="sidebarListItem">
            <Link className="link" to={`/?cat=${c.name}`}>
              {c.name}
            </Link>
          </li>
          ))}
          
        </ui>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <Facebook style={{ color: 'blue' }} className="socialIcons" />
          <Instagram style={{ color: '#962fbf' }} className="socialIcons" />
          <YouTube style={{ color: '#FF0000' }} className="socialIcons" />
          <Twitter style={{ color: '#1DA1F2' }} className="socialIcons" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
