import React from "react";

export default class Field extends React.Component {
  state = {
    touched: false
  };

  setTouch = () => this.setState({ touched: true });

  setStyle = () => {
    if (!this.state.touched) {
      return "";
    } else if (!this.props.required) {
      return "check";
    } else if (!this.props.validate) {
      return "times";
    } else {
      return "check";
    }
  };

  setBorderStyle = () => {
    if (!this.state.touched) {
      return "";
    } else if (!this.props.required) {
      return "success";
    } else if (!this.props.validate) {
      return "error";
    } else {
      return "success";
    }
  };

  render() {
    const {
      type,
      onChangeFunction,
      placeholder,
      value,
      name,
      icon
    } = this.props;

    return (
      <div className="form-field">
        <i className={`fas fa-${icon}`} />
        <i className={`fas fa-${this.setStyle()}`} />
        <input
          className={`form-control input-field form-${this.setBorderStyle()}`}
          onBlur={this.setTouch}
          type={type}
          onChange={onChangeFunction}
          placeholder={placeholder}
          value={value}
          name={name}
        />
        {value ? <span className="" /> : ""}
      </div>
    );
  }
}
