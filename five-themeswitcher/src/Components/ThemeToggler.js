import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <p>
        Current Theme:
        <span>{themeMode === "light" ? "Light Theme" : "Dark Theme"}</span>
      </p>
    </div>
  );
};

export default ThemeToggler;
