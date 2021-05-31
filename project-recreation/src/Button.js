import React from "react";

// when we use '()' in the method then we don't have to use 'return' keyword.
// To pass data as Props send them like below, and don't forget to use '{}' braces.
// When you put default value like below '{title = "JavaScript"}',
// if you don't pass values wherever you are using this component then that default value will be set.

const Button = ({ title = "JavaScript" }) => (
  <div>
    <button className="button">{title}</button>
  </div>
);

export default Button;
