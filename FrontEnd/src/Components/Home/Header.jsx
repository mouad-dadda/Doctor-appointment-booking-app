import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/HomeCss/header.css";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <header className="header posit_rela">
      <div className="Header_container _container">
        <div className="logo_siz d_flex">
          <Link to={"/"}>
            <img src="./img/logo.png" className="logo_nav" alt="" />
          </Link>
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
              <Link to={"/"} className="nav_link">
                Accueil
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/recherche"} className={"nav_link"}>
                Recherche Medecin
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/about"} className="nav_link">
                About
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/contact"} className={"nav_link"}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="mr_left">
            <button className="_btn btn_bg_white "> 
            <Link to={'/Connexion'} > Connexion </Link>
            </button>
            <button className="_btn btn_bg_primary btn_mrl">
              <Link to={'/identifier'} >S'identifier</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
