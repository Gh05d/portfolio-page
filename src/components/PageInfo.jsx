import React from "react";

export default () => {
  const text = [
    "Build with HTML, CSS, jQuery, React and Bootstrap",
    "And with Scss, what made the Webpack Configuration fun - yeah, not really",
    "Webpack is straight from Hell - here to torture you as soon as you mastered Babel"
  ];

  const showText = text.map((p, id) => (
    <p key={id} className="text-center">
      {p}
    </p>
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
        </div>
      </div>
    </div>
  );
};
