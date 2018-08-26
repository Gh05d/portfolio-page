import React from "react";
import { portfolioItems } from "../portfolioItems";

export default () => {
  const portfolio = portfolioItems.map(
    ({
      title,
      imageLink,
      codeLink,
      image,
      alt,
      description,
      technologies,
      icon
    }) => (
      <div className="portfolio-item" key={title}>
        <a href="#!">
          <img src={image} alt={alt} />
        </a>
        <a href={imageLink} className="btn-light" target="_blank">
          <i className="fas fa-eye" />
          &nbsp;{title}
        </a>
        <a href={codeLink} className="btn-dark" target="_blank">
          <i className={`fab fa-${icon.toLowerCase()}`} />&nbsp;{icon}
        </a>
        <div className="caption">
          <p>{description}</p>
          <p>Technologies used:</p>
          <p className="technology">
            {technologies.map((technologie, id) => (
              <span key={id} className="technology-item">
                {technologie}
              </span>
            ))}
          </p>
        </div>
      </div>
    )
  );

  return (
    <main id="portfolio">
      <h1 className="lg-heading">
        My <span className="text-secondary">Portfolio</span>
      </h1>

      <h2 className="sm-heading">Check out some of my projects</h2>

      <div className="portfolio">{portfolio}</div>
    </main>
  );
};
