import React from "react";
import "./style.css";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome Alien</h1>
      <Button title="React JS" />
      <Button title="Angular" />
      <Button />
      {/* <button className="button">Heyy Alien!!!!</button> */}
    </div>
  );
};

export default App;
