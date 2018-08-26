import React from "react";
import Home from "./Home";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import PageInfo from "./PageInfo";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home />
        {/* <Portfolio />
        <ContactForm />
        <PageInfo />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
