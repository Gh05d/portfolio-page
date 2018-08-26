import React from "react";
import { times } from "lodash";
import { renderPortrait } from "../constants";

export default class Navigation extends React.Component {
  state = {
    showMenu: false
  };

  toggleMenu = () =>
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));

  navigate = link => {
    this.setState({ showMenu: false });
    this.props.navigate(link);
  };

  render() {
    const { showMenu } = this.state;
    const { location } = this.props;

    const links = [
      { title: "Home", link: "home" },
      { title: "About Me", link: "about" },
      { title: "My Portfolio", link: "portfolio" },
      { title: "Contact Me", link: "contact" }
    ];

    const navBarLinks = links.map(({ link, title }, key) => (
      <li
        key={key}
        className={`nav-item ${showMenu ? "" : "show"}`}
        onClick={() => this.navigate(link)}
      >
        <span className={`nav-link ${link == location ? "current" : ""}`}>
          {title}
        </span>
      </li>
    ));

    return (
      <header>
        <div
          className={`menu-btn ${showMenu ? "close" : ""}`}
          onClick={this.toggleMenu}
        >
          {times(3, key => <div key={key} className="btn-line" />)}
        </div>

        <nav className={`menu ${showMenu ? "show" : ""}`}>
          <div className={`menu-branding ${showMenu ? "show" : ""}`}>
            {renderPortrait()}
          </div>

          <ul className={`menu-nav ${showMenu ? "show" : ""}`}>
            {navBarLinks}
          </ul>
        </nav>
      </header>
    );
  }
}
