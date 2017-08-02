import React from "react";
import './Nav.scss';
import { Router, Route, IndexRoute, hashHistory, HashRouter, BrowserRouter, Switch, Link } from "react-router-dom";


export default class Nav extends React.Component {

  render() {
    return (

      <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img src="assets/images/logo.jpg" />
          
        </div>
        <div id="navbar" className="navbar-collapse collapse pull-right">
          <ul className="nav navbar-nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
     
      
    );
  }
}
