import React from "react";
import "../Css/HomeCss/Aside.css";


const Aside = () => {
  return (
    <aside class="_container height_aside">
      <div class="aside_bg">
        <span class="circle_bg"></span>
        <span class="circle_border"></span>
        <h1> Ne tardez pas à prendre soin de vous et de votre santé </h1>
        <button class="_btn btn_bg_white "> Prenez rendez-vous </button>
        <span class=" circle_bottom_border "></span>
      </div>
    </aside>
  );
};

export default Aside;
