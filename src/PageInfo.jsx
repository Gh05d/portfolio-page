import React from "react";

export default () => {
  const text = [
    "Build with HTML, CSS, jQuery, React and Bootstrap",
    "And with Scss, what made the Webpack Configuriation fun - not really",
    "Webpack is straight from Hell - here to torture you as soon as you mastered Babel"
  ];

  const showText = text.map((p, id) => (
    <p key={id} className="text-center">
      {p}
    </p>
  ));

  const socialButtons = [
    {
      link: "https://github.com/Gh05d",
      style: "btn btn-github",
      symbol: "fa fa-github"
    },
    {
      link: "https://www.linkedin.com/in/pascal-clanget-545956ba/",
      style: "btn btn-linkedin",
      symbol: "fa fa-linkedin"
    },
    {
      link: "https://www.instagram.com/gh05d/?hl=de",
      style: "btn btn-instagram",
      symbol: "fa fa-instagram"
    }
  ];

  const renderSocialButtons = socialButtons.map(({ link, style, symbol }) => (
    <li key={symbol}>
      <a target="_blank" href={link}>
        <button type="button" className={style}>
          <i className={symbol} />
        </button>
      </a>
    </li>
  ));

  return (
    <div id="about">
      <div className="row">
        <div className="col-xs-6 white">
          <h3 className="text-center">ABOUT THIS PAGE</h3>
          {showText}
        </div>

        <div className="col-xs-6">
          <h3 className="text-center white">AROUND THE WEB</h3>
          <ul className="list-inline text-center">{renderSocialButtons}</ul>
        </div>
      </div>
    </div>
  );
};
