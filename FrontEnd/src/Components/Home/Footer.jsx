import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/HomeCss/Footer.css";
const Footer = () => {
  return (
    <footer className="footer_height">
      <div className="lgine"></div>
      <div className="_container content_footer">
        <Link to={"/"}>
          {" "}
          <img src="/img/logo.png" alt="" />
        </Link>
        <p>Copyright © 2023 Doctolib, tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
