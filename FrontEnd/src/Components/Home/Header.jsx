import React, { useState } from "react";
import "../Css/HomeCss/header.css";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <header className="header posit_rela">
      <div className="Header_container _container">
        <div className="logo_siz d_flex">
          <img src="./img/logo.png" className="logo_nav" alt="" />
          <div className="menu_mobile">
            {Toggle ? (
              <button className="btn_menu" onClick={() => setToggle(!Toggle)}>
                <i class="fa-regular fa-xmark-large"></i>
              </button>
            ) : (
              <button className="btn_menu" onClick={() => setToggle(!Toggle)}>
                <i className="fa-light fa-bars"></i>
              </button>
            )}
          </div>
        </div>
        <div className={Toggle ? "shaw menu" : "menu"}>
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
          <div className="mr_left">
            <button className="_btn btn_bg_white ">Connexion</button>
            <button className="_btn btn_bg_primary btn_mrl">
              S'identifier
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
