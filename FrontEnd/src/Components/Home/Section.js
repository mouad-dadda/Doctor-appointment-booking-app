import React from "react";
import "../Css/HomeCss/Section.css";

const Section = () => {
  return (
    <div className="Section_bg">
      <div className="_container d_flex _height pd-top">
        <div className="_height">
          <h1 className="_title_Section">
            Doctolib vous Offre le meilleur moyen de trouver un medecin
          </h1>
          <p className="su_text">
            Grace au site web , vous pouvez facilement rechercher des medcins et
            suivre tous vos rendez-vous.
          </p>
          <button className="_btn btn_bg_primary _btn_Section mr_top">
            Prenez rendez-vous
          </button>
        </div>
        <div className="Section_img">
          <span className="circle"></span>
          <img src="./img/doctor-2.png" className="_img" alt="" />
          <span className="_heart_icon circle_1">
            <span className="circle_2">
              <i className="fa-solid fa-heart-pulse"></i>
            </span>
          </span>
          <div className="_info">
            <div className="_info_div ">
              <div className="_info_icon">
                <i className="fa-regular fa-user-plus"></i>
              </div>
              <div className="_info_text">
                <p> 100,000+ </p>
                <p> patients/yers </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
