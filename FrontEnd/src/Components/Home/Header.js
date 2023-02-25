import React from "react";
import '../Css/HomeCss/header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="Header_container _container">
        <div className="logo_siz">
          <img src="./img/logo.png" className="logo_nav" alt="" />
        </div>
        <div>
          <ul className="nav_items">
            <li className="nav_item">
              <a href="/test" className="nav_link">
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="/test" className="nav_link">
                Recherche Medecin
              </a>
            </li>
            <li className="nav_item">
              <a href="/test" className="nav_link">
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="/test" className="nav_link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mr_left">
          <button className="_btn btn_bg_white ">Connexion</button>
          <button className="_btn btn_bg_primary btn_mrl">S'identifier</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
