import React from "react";
import Form from "./forms";
import axios from "axios";
import anime from "animejs";

class ContactForm extends React.Component {
  state = {
    email: "",
    name: "",
    phone: "",
    message: "",
    formSent: false,
    error: ""
  };

  //Update multiple fields
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  animateSubmit = () => {
    anime({
      targets: "#contact",
      translateX: { value: -2000, duration: 1000 },
      complete: () => {
        this.setState({ formSent: true });
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000", {
        email: this.state.email,
        name: this.state.name,
        phone: this.state.phone,
        message: this.state.message
      });

      this.animateSubmit();
    } catch (error) {
      console.log(error);
      this.setState({
        formSent: false,
        error: "Sorry, the form could not be sent. <br />Please try again."
      });
    }
  };

  render() {
    const { name, email, phone, message, error } = this.state;
    const checkEmail = /[\w.]+@[a-zA-z]+\.[a-zA-z]{2,}/g;
    //Variable for disabling the form if it is not properly filled
    const isEnabled =
      name.length > 0 && email.match(checkEmail) && message.length > 0;

    const fields = [
      {
        type: "text",
        onChangeFunction: this.handleInputChange,
        placeholder: "Your name",
        value: name,
        name: "name",
        icon: "user",
        validate: name
      },
      {
        type: "email",
        onChangeFunction: this.handleInputChange,
        placeholder: "Your email",
        value: email,
        name: "email",
        icon: "envelope",
        validate: email.match(checkEmail)
      },
      {
        type: "text",
        onChangeFunction: this.handleInputChange,
        placeholder: "Your phonenumber",
        value: phone,
        name: "phone",
        icon: "earphone"
      }
    ];

    const showFields = fields.map(field => (
      <Form {...field} key={field.name} />
    ));

    return (
      <div id="Contact">
        <h1 className="text-center">Contact Me</h1>

        <div className="row">
          <div className="col-xs-6">
            {this.state.formSent ? (
              <div id="sent" className="text-center animated fadeIn">
                {name},<br /> Thanks for contacting me
                <br /> I will reply as soon as possible
              </div>
            ) : (
              <form onSubmit={this.handleSubmit} id="contact">
                {showFields}

                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={this.handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isEnabled}
                >
                  Submit
                </button>
                {error ? error : ""}
              </form>
            )}
          </div>

          <div className="col-xs-6">
            <p>
              Want to get in touch with me? Be it to request more info about
              myself or my experience, to ask for my resume, how I built this
              awesome little portfolio page, which footballer is the best in the
              world and what the hell OMAD is... Just feel free to drop me a
              line anytime.
            </p>

            <p>I will reply, I promise ;)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
