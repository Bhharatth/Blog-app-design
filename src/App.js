import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Posts from "./components/posts/Posts";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import SinglePost from "./components/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Topbar from "./components/TopBar/Topbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Post from "./components/post/Post";
import ResponsiveAppBar from "./components/TopBar/Topbar";
const App = () => {
  const currentUser = true;

  return (
    <Router>
      <Write/>
      {/* <Single/> */}
      {/* <Topbar/> */}
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts" component={Posts} />
        <Route path="/register">
          {currentUser ? <HomePage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <HomePage /> : <Login />}</Route>
        <Route path="/post/:id" component={SinglePost} />
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
      </Switch>
      <Footer /> */}
    </Router>
  );
};

export default App;
