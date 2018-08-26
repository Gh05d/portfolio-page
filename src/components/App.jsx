import React from "react";
import Home from "./Home";
import ContactForm from "./ContactForm";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import About from "./PageInfo";
import Footer from "./Footer.jsx";

class App extends React.Component {
  state = {
    location: "home"
  };

  renderLocation = location => {
    switch (location) {
      case "about":
        return <About />;

      case "contact":
        return <ContactForm />;

      case "portfolio":
        return <Portfolio />;

      default:
        return <Home />;
    }
  };

  navigate = location => this.setState({ location });

  render() {
    return (
      <div id="wrapper">
        <Navigation navigate={this.navigate} location={this.state.location} />
        {this.renderLocation(this.state.location)}

        <Footer />
      </div>
    );
  }
}

export default App;
