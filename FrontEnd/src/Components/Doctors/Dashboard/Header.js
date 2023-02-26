import React, { useState } from "react";
import NotificationMess from './NotificationMess.js';

const Header = () => {

  const [ToogleNotification ,setToogleNotification]=useState(false)

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
          <span className="notif_btn" id="notif_btn" onClick={()=>{setToogleNotification(!ToogleNotification)}} >
            <i className="fa-regular fa-bell"></i>
          </span>
          <div>
            { ToogleNotification ?<NotificationMess/>:'' }
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
