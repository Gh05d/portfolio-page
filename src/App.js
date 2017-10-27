import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import About from "./About";
import ContactForm from "./ContactForm";
import PageInfo from "./PageInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container-fluid" id="pic-desc">
          <About />
          {/*<!--A gallery with all the projects I have completed-->*/}
          <div id="Portfolio">
            <h1 className="text-center">Portfolio</h1>
            <div className="row">
              <Portfolio />
            </div>
          </div>
          <ContactForm />
          <PageInfo />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
