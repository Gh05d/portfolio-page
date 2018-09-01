import React from "react";
import Field from "./field";
import axios from "axios";

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

      this.setState({ formSent: true });
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
        placeholder: "Your Name",
        value: name,
        name: "name",
        icon: "user",
        required: true,
        validate: name
      },
      {
        type: "email",
        onChangeFunction: this.handleInputChange,
        placeholder: "Your Email",
        value: email,
        name: "email",
        icon: "envelope",
        required: true,
        validate: email.match(checkEmail)
      },
      {
        type: "text",
        onChangeFunction: this.handleInputChange,
        placeholder: "Your Phone number",
        value: phone,
        name: "phone",
        icon: "phone"
      }
    ];

    const showFields = fields.map(field => (
      <Field {...field} key={field.name} />
    ));

    return (
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>

        <h2 className="sm-heading">Just drop me a quick message here</h2>

        <div className="form-holder">
          <div className={this.state.formSent ? "show-form" : "hide-form"}>
            <div className="sender-name">{name},</div>
            <div>Thanks for contacting me.</div>
            <div>I will reply as soon as possible.</div>
          </div>

          <form
            onSubmit={this.handleSubmit}
            className={this.state.formSent ? "hide-form" : "show-form"}
          >
            {showFields}

            <div className="form-field">
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
        </div>
      </main>
    );
  }
}

export default ContactForm;
