import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Header/Nav";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome Dude",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Nav />
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />

        <Footer />
      </div>
    );
  }
}
