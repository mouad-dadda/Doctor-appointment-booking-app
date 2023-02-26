import React from "react";

const Header = () => {
  return (
    <>
      <div className=" w_100 header_top border-bottom ">
        <div className="header_logo"></div>
        <div>
          <span className="header_item ">
            <a href="" className="link_text">
              <i className="fa-solid fa-chart-line"></i>
              Statistique
            </a>
          </span>
        </div>
        <div>
          <span className="notif_btn" id="notif_btn">
            <i className="fa-regular fa-bell"></i>
          </span>
          <div>
            <div className="notif_messg border " id="notif_messg">
              <div className="mssg_text border-bottom">
                <h1>You have A new Appointment</h1>
                <span> mouad dadda ,12-06-2022 </span>
              </div>
              <div className="mssg_text border-bottom">
                <h1>You have A new Appointment</h1>
                <span> mouad dadda ,12-06-2022 </span>
              </div>
              <div className="mssg_text border-bottom">
                <h1>You have A new Appointment</h1>
                <span> mouad dadda ,12-06-2022 </span>
              </div>
              <div className="mssg_text border-bottom">
                <h1>You have A new Appointment</h1>
                <span> mouad dadda ,12-06-2022 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
