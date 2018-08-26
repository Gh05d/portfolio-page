import React from "react";
import { times } from "lodash";
import portrait from "../images/portrait.jpeg";

export default class Navigation extends React.Component {
  state = {
    showMenu: false,
    current: 0
  };

  toggleMenu = () =>
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));

  render() {
    const { showMenu, current } = this.state;

    const links = [
      { title: "Home", link: "home" },
      { title: "About Me", link: "about" },
      { title: "My Portfolio", link: "portfolio" },
      { title: "Contact Me", link: "contact" }
    ];

    const navBarLinks = links.map(({ link, title }, key) => (
      <li
        key={key}
        className={`nav-item ${current == key ? "current" : ""} ${
          showMenu ? "" : "show"
        }`}
      >
        <a href={link} className="nav-link">
          {title}
        </a>
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
            <img src={portrait} alt="Cool Dude" id="portrait" />
          </div>

          <ul className={`menu-nav ${showMenu ? "show" : ""}`}>
            {navBarLinks}
          </ul>
        </nav>
      </header>
    );
  }
}
