import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      
      
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  
  

  return (
    <div className="loginCOntainer">
      <div className="Login">
        <span className="loginTitle">Register</span>
        <form className="loginForm">
          <label>Username</label>
          <TextField
      id="outlined-basic"
      label="Enter your username..."
      variant="outlined"
      style={{ width: 350 }}
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
          <label>Email</label>
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            type="email"
            style={{ width: 350 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            style={{ width: 350 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "black",
              width: 200,
              marginTop: "10px",
            }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </form>
        <button
          className="loginRegisterButton"
          style={{ backgroundColor: "teal", color: "white" }}
        >
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </div>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
