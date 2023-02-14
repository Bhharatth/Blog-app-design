import { Button, TextField } from '@mui/material';
import React from 'react';
import "./Login.css";

const Login = () => {
  return (
    <div className="loginCOntainer">
<div className='Login'>

<span className='loginTitle'>Login</span>
<form className='loginForm'>
  <label>Email</label>
  <TextField id="outlined-basic" label="Email" variant="outlined" type="email" style={{width: 350}} />
  <label>Password</label>
  <TextField id="outlined-basic" label="Password" variant="outlined" type="pass
  " style={{width: 350}}/>
  <Button variant="contained" style={{backgroundColor: "white", color
: "black", width: 200, marginTop: "10px"}}>Login</Button>
</form>
<button className="loginRegisterButton" style={{backgroundColor: "teal", color: "white"}}>Register</button>

</div>
    </div>
    
  )
}

export default Login