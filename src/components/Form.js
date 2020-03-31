import React from "react";

const Form = props => (
  <form onSubmit={props.getAccount}>
    <input type="text" name="username" placeholder="Username..." />
    <button className="button">Get Account</button>
  </form>
);

export default Form;
