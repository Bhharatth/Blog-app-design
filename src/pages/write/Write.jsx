import React from "react";
import "./write.css";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { TextField } from "@mui/material";

const Write = () => {
  return (
    <div className="write">
      <div className="writeImg">
        <img src="https://images.pexels.com/photos/6806426/pexels-photo-6806426.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
             <AttachFileIcon/>
             <input id="fileInput" type="file" style={{ display: "none" }} />
          </label>
          
   <label>Title</label> 
   <TextField id="fileInput" label="Title.." variant="outlined" type="text
  " style={{width: 350}}/>
        </div>
        <div className="writeFormGroup">
        <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
