import React from "react";
import { portfolioItems } from "../portfolioItems";

export default () =>
  portfolioItems.map(
    ({ title, link, image, alt, description, technologies }) => (
      <div className="col-xs-6 portfolio-item" key={title}>
        <a href={link} className="thumbnail">
          <img src={image} alt={alt} />
        </a>
        <div className="caption">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Technologies used:</p>
          {technologies.map((technologie, id) => (
            <span key={id} className="label label-primary footer-link">
              {technologie}
            </span>
          ))}
        </div>
      </div>
    )
  );
