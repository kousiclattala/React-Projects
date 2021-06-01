import React from "react";
import { FaCross, FaPen, FaCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "cross":
      return <FaCross className="icon" />;
    case "circle":
      return <FaCircle className="icon" />;
    default:
      return <FaPen className="icon" />;
  }
};

export default Icon;
