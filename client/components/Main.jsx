import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Nav from "./Nav"
import HomePage from "./HomePage"
import About from "./About"
import {AuthProvider} from "jwt-auth-react"; 
import Register from "./Register"
import Profile from "./Profile"
import Settings from "./Settings"
import PostProj from "./PostProj"
import mainImage from "../../public/dude.png"


class Main extends Component {
  render() {
    return (
      <>

        <AuthProvider>
            <Router>
            <Nav/>
            <div className="background-gif">
              <img src={mainImage} alt="Main Image" />
            </div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/About" component={About} />
                <Route path="/Register" component={Register}/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/Settings" component={Settings}/>
                <Route path="/PostProj" component={PostProj}/>
            </Switch>
        </Router>
        </AuthProvider>
      </>
    );
  }
}
export default (Main);