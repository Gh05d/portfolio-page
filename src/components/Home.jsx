import React from "react";

export default () => {
  const socialButtons = [
    { link: "https://github.com/Gh05d", symbol: "github" },
    { link: "https://www.freecodecamp.org/gh05d", symbol: "free-code-camp" },
    {
      link: "https://www.linkedin.com/in/pascal-clanget-545956ba/",
      symbol: "linkedin"
    },
    { link: "https://www.instagram.com/gh05d/?hl=de", symbol: "instagram" }
  ];

  const renderSocialButtons = socialButtons.map(({ link, symbol }) => (
    <a target="_blank" href={link} key={symbol}>
      <i className={`fab fa-${symbol} fa-2x`} />
    </a>
  ));

  return (
    <main id="home">
      <h1 className="lg-heading">
        Pascal <span className="text-secondary">Clanget</span>
      </h1>
      <h2 className="sm-heading">
        Full-Stack Developer, Programmer, Entrepreneur & Guitar Player
      </h2>

      <div className="icons">{renderSocialButtons}</div>
    </main>
  );
};
