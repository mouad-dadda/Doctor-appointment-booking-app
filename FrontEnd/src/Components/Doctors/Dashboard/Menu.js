import React from "react";


const Menu = () => {
  return (
    <>
      <div className="col-2">
        <header className="nav_bar border ">
          <div className="nav_logo">
            <img src="./img/logo.png" className="_img_dashboard" alt="DOCTOLIb" />
          </div>
          <nav>
            <ul className="nav_items_dashboard  ">
              <li className="nav_li ">
                <a
                  href="/Doctors/Dashboard.html"
                  className="nav_item_dashboard active nav_hover"
                >
                  <i className="fa-solid fa-grid-2"></i>
                  <span className="nav_text">Dashboard</span>
                </a>
              </li>
              <li className="nav_li">
                <a
                  href="/Doctors/Rendez-Vous.html"
                  className="nav_item_dashboard nav_hover"
                >
                  <i className="fa-solid fa-calendars"></i>
                  <span className="nav_text">Rendez-vous</span>
                </a>
              </li>
              <li className="nav_li">
                <a
                  href="/Doctors/Historique.html"
                  className="nav_item_dashboard nav_hover"
                >
                  <i className="fa-solid fa-calendar-clock"></i>
                  <span className="nav_text">Historique</span>
                </a>
              </li>
              <li className="nav_li">
                <a href="/Doctors/Settings.html" className="nav_item_dashboard nav_hover">
                  <i className="fa-solid fa-gear"></i>
                  <span className="nav_text">Settings</span>
                </a>
              </li>
              <li className="nav_li item_bottom">
                <p className="nav_item_dashboard">
                  <i className="fa-solid fa-arrow-right-from-bracket color_denger"></i>
                  <span className="nav_text color_denger">deconnecter</span>
                </p>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Menu;
