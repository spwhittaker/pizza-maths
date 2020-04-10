import React from "react";
import "../styles/Footer.scss";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  let fullCopyrightText;
  if (year == "2020") {
    fullCopyrightText = "© 2020 Stephen Whittaker & Joanne Basa";
  } else {
    fullCopyrightText = `© 2020 - ${year} Stephen Whittaker & Joanne Basa`;
  }

  return (
    <footer>
      <a href="#top">
        <p>Top of page</p>
      </a>
        <strong><p>{fullCopyrightText}</p></strong>
    </footer>
  );
};

export default Footer;
