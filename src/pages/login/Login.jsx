import { Password } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
       
      });
      console.log(res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);

  return (
    <div className="loginCOntainer">
      <div className="Login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>username</label>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            style={{ width: 350 }}
            inputRef={userRef}
          />
          <label>Password</label>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            style={{ width: 350 }}
            inputRef={passwordRef}
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
            Login
          </Button>
        </form>
        <button
          className="loginRegisterButton"
          style={{ backgroundColor: "teal", color: "white" }}
        >
          <Link className="link" to="/register" style={{textDecoration: "none" , color:
        "white"}}>
            register
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
