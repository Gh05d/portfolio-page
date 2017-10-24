import React from "react";

export default () => (
  <div id="Contact">
    <h1 className="text-center">Contact Me</h1>
    <div className="row">
      <div className="col-xs-6">
        <form method="POST" action="send" id="contact">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="phone"
              placeholder="Phone"
              name="phone"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              name="message"
              placeholder="Your Message"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="col-xs-6">
        <p>
          Want to get in touch with me? Be it to request more info about myself
          or my experience, to ask for my resume, how I built this awesome
          little portfolio page, which footballer is the best in the world and
          what the hell OMAD is... Just feel free to drop me a line anytime.
        </p>

        <p>I will reply, I promise ;)</p>
      </div>
    </div>
  </div>
);
