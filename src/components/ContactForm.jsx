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

    this.setState({ [name]: value });
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
    const { email, name, phone, message } = this.state;

    try {
      await axios.post("http://localhost:4000", {
        email,
        name,
        phone,
        message
      });

      this.animateSubmit();
    } catch (error) {
      console.log(error);
      this.setState({
        formSent: false,
        error: "Sorry, the form could not be sent. Please try again."
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
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>

        <h2 className="sm-heading">Just drop me a quick message here</h2>

        <div className="form-holder">
          {this.state.formSent ? (
            <div id="sent" className="animated fadeIn">
              <div>{name},</div>
              <div>Thanks for contacting me.</div>
              <div>I will reply as soon as possible.</div>
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

              <button type="submit" className="btn-dark" disabled={!isEnabled}>
                Submit
              </button>
              {error ? <div className="error">{error}</div> : ""}
            </form>
          )}
        </div>
      </main>
    );
  }
}

export default ContactForm;
