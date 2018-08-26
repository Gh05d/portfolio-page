import React from "react";
import portrait from "./images/portrait.jpeg";

export const renderPortrait = (id = "portrait") => (
  <img src={portrait} alt="Cool Dude" id={id} />
);
