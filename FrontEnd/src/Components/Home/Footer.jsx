import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/HomeCss/Footer.css";
const Footer = ({ colorText }) => {
  const Color = colorText || "black";
  return (
    <footer className="footer_height">
      <div className="lgine"></div>
      <div className="_container content_footer items-center h-full ">
        <Link to={"/"}>
          {" "}
          <img src="/img/logo.png" alt="" />
        </Link>
        <p className={`text-${Color} text-[14px] ml-[21rem] `}>
          Copyright © 2023 Doctolib, tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
