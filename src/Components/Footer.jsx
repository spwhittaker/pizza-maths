import React from "react";
import "../styles/Footer.scss";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  let fullCopyrightText;
  if (year === 2020) {
    fullCopyrightText = (
      <p>
        ©{year}{" "}
        <a
          href="https://github.com/spwhittaker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephen Whittaker
        </a>{" "}
        &
        <a
          href="https://github.com/joannebasa"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Joanne Basa
        </a>
      </p>
    );
  } else {
    fullCopyrightText = (
      <p>
        © 2020 - {year}{" "}
        <a
          href="https://github.com/spwhittaker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephen Whittaker
        </a>{" "}
        &
        <a
          href="https://github.com/joannebasa"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Joanne Basa
        </a>
      </p>
    );
  }

  return (
    <footer>
      <a href="#top">
        <p>Top of page</p>
      </a>
      <strong>
        <p>{fullCopyrightText}</p>
      </strong>
    </footer>
  );
};

export default Footer;
