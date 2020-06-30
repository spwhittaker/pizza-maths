import React, { useContext } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { UpperLevelContext } from "../context/UpperLevelContext";

export default () => {
  const { height } = useContext(UpperLevelContext);
  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button
      className={height > 80 ? "scroll-btn show-scroll-btn" : "scroll-btn"}
      onClick={scrollBackToTop}
      aria-label="button"
    >
      <FaAngleDoubleUp />
    </button>
  );
};
