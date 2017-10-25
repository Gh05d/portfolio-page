import React, { Component } from "react";
import Form from "./forms";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      phone: "",
      message: "",
      formSent: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Update multiple fields
  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("/contactme", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        phone: this.state.phone,
        message: this.state.message
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          this.setState({ formSent: true });
        } else this.setState({ formSent: false });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { name, email, phone, message } = this.state;
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
              <div id="sent">{name},\n Thanks for contacting me</div>
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
                  disabled={!isEnabled}>
                  Submit
                </button>
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
