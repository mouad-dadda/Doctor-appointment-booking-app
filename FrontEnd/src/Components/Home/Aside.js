import React from "react";
import "../Css/HomeCss/Aside.css";

const Aside = () => {
  return (
    <aside className="_container height_aside">
      <div className="aside_bg">
        <span className="circle_bg"></span>
        <span className="circle_border"></span>
        <h1> Ne tardez pas à prendre soin de vous et de votre santé </h1>
        <button className="_btn btn_bg_white "> Prenez rendez-vous </button>
        <span className=" circle_bottom_border "></span>
      </div>
    </aside>
  );
};

export default Aside;
