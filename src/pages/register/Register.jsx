import { Button, TextField } from '@mui/material';
import React from 'react';
import "./register.css"

const Register = () => {
  return (
    <div className="loginCOntainer">
<div className='Login'>

<span className='loginTitle'>Register</span>
<form className='loginForm'>
  <label>Username</label>
  <TextField id="outlined-basic" label="User" variant="outlined" style={{width: 350}} />
  <label>Email</label>
  <TextField id="outlined-basic" label="user@gmail.com" variant="outlined" type="email" style={{width: 350}} />
  <label>Password</label>
  <TextField id="outlined-basic" label="Password" variant="outlined" type="password" style={{width: 350}}/>
  <Button variant="contained" style={{backgroundColor: "white", color
: "black", width: 200,  marginTop: "10px"}}>Login</Button>
</form>
<button className="loginRegisterButton" style={{backgroundColor: "teal", color: "white"}}>Register</button>

</div>
    </div>
  )
}

export default Register