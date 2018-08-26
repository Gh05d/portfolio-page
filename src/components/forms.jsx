import React from "react";

export default ({
  type,
  onChangeFunction,
  placeholder,
  value,
  name,
  icon,
  validate
}) => (
  <div className={`input-group form-group ${validate ? "has-success" : ""}`}>
    <span className="input-group-addon">
      <i className={`glyphicon glyphicon-${icon}`} />
    </span>
    <input
      className="form-control"
      type={type}
      onChange={onChangeFunction}
      placeholder={placeholder}
      value={value}
      name={name}
    />
    {value ? (
      <span className="glyphicon glyphicon-ok form-control-feedback" />
    ) : (
      ""
    )}
  </div>
);
