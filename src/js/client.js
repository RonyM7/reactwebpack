import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom";
import render from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, HashRouter, BrowserRouter, Switch, Link } from "react-router-dom";
import '../assets/styles/global.scss';
// import applyMiddleware from 'react-router-apply-middleware'
// import { useRelativeLinks, RelativeLink } from 'react-router-relative-links'

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

// For this demo, we are using the UMD build of react-router-dom


const Events = () => (
  <div>
   No events available
  </div>
)


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
       <Route path='/about' component={About}/>
      <Route path='/contact-us' component={Contact}/>
    </Switch>
  </main>
)

// Setting Page structures by components

const App = () => (
  <div>
    <Nav />
    <Main />
    <Footer />
   
  </div>
)

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
