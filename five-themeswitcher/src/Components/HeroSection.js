import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        padding: "1rem",
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API Theme Toggler</h1>
      <p>This is Theme Toggler App using Context API</p>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 150px",
          border: `${currentTheme.border}`,
          fontSize: "20px",
        }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Change Theme
      </button>
    </div>
  );
};
export default HeroSection;
