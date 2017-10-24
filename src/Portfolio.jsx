import React from "react";
import { portfolioItems } from "./portfolioItems";

export default () =>
  portfolioItems.map(item => (
    <div className="col-xs-6 portfolio-item">
      <a href={item.link} className="thumbnail" target="_blank">
        <img src={item.image} alt={item.alt} />
      </a>
      <div className="caption">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Technologies used:</p>
        {item.technologies.map(technologie => (
          <span className="label label-primary footer-link">{technologie}</span>
        ))}
      </div>
    </div>
  ));
