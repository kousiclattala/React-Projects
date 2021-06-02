import React from "react";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <div
      style={{
        margin: "0 25px",
      }}
    >
      <h1>Theme toggler</h1>
      <ThemeToggler />
    </div>
  );
};

export default Header;
