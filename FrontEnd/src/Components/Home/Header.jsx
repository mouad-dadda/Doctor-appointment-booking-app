import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/HomeCss/header.css";
import ProfileImg from "./ProfileImg";
import { useTranslation } from "react-i18next";
import SelelctLang from "./SelelctLang";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [Toggle, setToggle] = useState(false);



  return (
    <header className="header posit_rela">
      <div className="Header_container _container">
        <div className="logo_siz d_flex">
          <Link to={"/"}>
            <img src="/img/logo.png" className="logo_nav" alt="" />
          </Link>
          <div className="menu_mobile">
            {Toggle ? (
              <button className="btn_menu" onClick={() => setToggle(!Toggle)}>
                <i className="fa-regular fa-xmark-large"></i>
              </button>
            ) : (
              <button className="btn_menu" onClick={() => setToggle(!Toggle)}>
                <i className="fa-light fa-bars"></i>
              </button>
            )}
          </div>
        </div>
        <div className={Toggle ? "shaw menu w-full " : "menu w-full"}>
          <ul className="nav_items h-fit  ">
            <li className="nav_item">
              <Link to={"/"} className="nav_link">
                {t("Header.Home")}
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/recherche"} className={"nav_link"}>
                {t("Header.Find_Doctor")}
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/about"} className="nav_link">
                {t("Header.About")}
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/contact"} className={"nav_link"}>
                {t("Header.Contact")}
              </Link>
            </li>
          </ul>
          <ProfileImg />
          <SelelctLang />
        </div>
      </div>
    </header>
  );
};

export default Header;
