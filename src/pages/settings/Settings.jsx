import React from "react";
import { UploadFile } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css"
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

const Settings = () => {
  return (
    <div className="settingsPage">
<div className="settings">
      <div className="settingsWrapper">
        <span className="settingsTitleUpdate">Update Your Account<UpdateIcon/></span>
        <span className="settingsTitleDelete">Delete account <DeleteIcon/></span>
      </div>
      <form action="" className="settingsForm">
        <label>Profile Picture</label>
        <div className="settingsPP">
          <img
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <label htmlFor="fileInput">
            <UploadFile/>
          </label>
          <TextField  id="fileInput" label="file" variant="outlined" type="file" style={{width: 350,  display: "none"}} />
          <label>Username</label>
          <TextField  id="outlined-basic" label="username" variant="outlined" type="text" style={{width: 350}} />
          <label>Email</label>
          <TextField  id="outlined-basic" label="email" variant="outlined" type="email" style={{width: 350}} />
          <label>Password</label>
          <TextField  id="outlined-basic" label="password" variant="outlined" type="password" style={{width: 350}} />
          <Button variant="contained">Update</Button>
        </div>
       
        
      </form>
    </div>

    <div className="sidbarPage">
      <Sidebar/>
    </div>
    </div>
    
  );
};

export default Settings;
