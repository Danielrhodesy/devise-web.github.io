import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Nav extends Component {
  render() {
    return (
      <>
          <div class="nav-container flex sa">
            <div class="container sb">
              <Link to="/">
                <div class="logo">
                </div>
              </Link>
            <nav class="sb ct">
              <Link to="/About">
                  <div class="nav-item se ct">  
                  <p>About</p>
                </div>
              </Link> 
              <Link to="/Register">
                <div class="nav-item se ct">
                  <p>Register</p>  
                </div>
              </Link>
              <Link to="/Profile">
                <div class="nav-item se ct profile"> 
                <p>P</p> 
                </div>
              </Link>
              <Link to="/Settings">
                <div class="nav-item se ct"> 
                  <p>Settings</p>
                </div>
              </Link>
              <Link to="/PostProj">
                <div class="nav-item post-proj se ct">
                  <p>Post Project</p>  
                </div>
              </Link>
            </nav>
            </div>   
          </div>

      </>
    );
  }
}

export default (Nav)