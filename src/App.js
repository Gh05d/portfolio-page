import React, { Component } from "react";
import logo from "./logo.svg";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import About from "./About";
import ContactForm from "./ContactForm";
import "./index.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        {/*<!--A gallery with all the projects I have completed-->*/}
        <div id="Portfolio">
          <h1 className="text-center">Portfolio</h1>
          <div className="row">
            <Portfolio />
          </div>
        </div>
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
