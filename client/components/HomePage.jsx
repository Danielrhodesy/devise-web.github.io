
  
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'
import Findproject from "./Findproject"
import Spotlight from "./Spotlight"
import Ourstory from "./Ourstory"
import Portfolio from "./Portfolio"
import Support from "./Support"
import Contact from "./Contact"


class HomePage extends Component {
  render() {
    return (
      <>
        <Findproject/>
        <Spotlight/>
        <Ourstory/>
        <Portfolio/>
        <Support/>
        <Contact/>
      </>
    );
  }
}
export default (HomePage);