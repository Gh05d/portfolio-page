import React from "react";
import { renderPortrait } from "../constants";

export default () => {
  const jobs = [
    {
      company: "Antalis GmbH",
      occupation: "Großhandelskaufmann",
      description: `My first Job was at a company that sold paper.
      Main customers were printing companies. I worked there for three years.`
    },
    {
      company: "Key-Systems GmbH",
      occupation: "IT Support",
      description: `My second Job was at one of the Top 10 Domain Registrars in
      the world. I worked in the Brand Department and helped customers in registering
      Domains to protect their brands.`
    },
    {
      company: "Vipfy GmbH",
      occupation: "Co-Founder & Fullstack Developer & COO",
      description: `Currently I am COO of Vipfy. We provide SME's with a centralized
      solution for buying and managing all their tools. Most of my work is the
      development of the App, but I am also busy organizing.`
    }
  ];

  const showJobs = jobs.map(({ company, occupation, description }, i) => (
    <div className={`job job-&{i}`} key={i}>
      <h3>{company}</h3>
      <h6>{occupation}</h6>
      <p>{description}</p>
    </div>
  ));

  return (
    <main id="about">
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>

      <h2 className="sm-heading">Some super interesting facts about me</h2>

      <div className="about-info">
        {renderPortrait("bio-image")}
        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            Born and raised in Germany. University Degree in Information Systems
            from FernUniversität in Hagen. Co-Founder and COO of &nbsp;
            <a
              href="https://vipfy.com"
              alt="Vipfy"
              className="text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vipfy
            </a>, a Saas Marketplace for SME's. Enjoy sports, reading and
            playing guitar in my leisure time.
          </p>
        </div>

        {showJobs}
      </div>
    </main>
  );
};
