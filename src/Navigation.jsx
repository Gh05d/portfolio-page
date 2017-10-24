import React from "react";

export default () => {
  const navBarLinks = ["About", "Portfolio", "Contact"];
  const renderNavBarLinks = navBarLinks.map((link, key) => (
    <li key={key} id={`li${key + 1}`}>
      <a href={`#${link}`}>{link}</a>
    </li>
  ));

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#main-navbar">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

          <a href="#" className="navbar-brand">
            Gh05d
          </a>
        </div>

        <div
          className="collapse navbar-collapse navbar-right navigation"
          id="main-navbar">
          <ul className="nav navbar-nav">{renderNavBarLinks}</ul>
        </div>
      </div>
    </nav>
  );
};
