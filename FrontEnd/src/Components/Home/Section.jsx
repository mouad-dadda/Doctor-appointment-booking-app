import React from "react";
import "../Css/HomeCss/Section.css";
import Card from "./Card";

const Section = () => {
  return (
    <>
      <div className="Section_bg">
        <div className="_container d_flex _height pd-top">
          <div className="_height">
            <h1 className="_title_Section">
              Doctolib vous Offre le meilleur moyen de trouver un medecin
            </h1>
            <p className="su_text">
              Grace au site web , vous pouvez facilement rechercher des medcins
              et suivre tous vos rendez-vous.
            </p>
            <button className="_btn btn_bg_primary _btn_Section mr_top">
              Prenez rendez-vous
            </button>
          </div>
          <div className="Section_img">
            <span className="circle"></span>
            <img src="./img/doctor-2.png" className="_img" alt=""  style={{display:"initial"}} />
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

      <article className="height_article_1 _container">
        <div className=" article_info text_center">
          <h1>Service de haute qualité pour vous</h1>
          <p>
            Le site compte de nombreux medecins dans differentes specialites
          </p>
          <div className="article_img">
            <img src="./img/Rectangle 4.jpg" alt="" style={{display:"initial"}} />
            <img src="./img/Rectangle 5.jpg" alt="" style={{display:"initial"}} />
            <img src="./img/Rectangle 6.jpg" alt=""  style={{display:"initial"}} />
          </div>
        </div>
      </article>

      <article className="card_container height_article_2">
        <div className="cards_info">
          <h1 className="article_title">Réservez notre médecin</h1>
          <div className="cards_">
            <Card img="./img/Rectangle 3.png" />
            <Card img="./img/Rectangle 3.png" />
            <Card img="./img/Rectangle 2.jpg" />
            <Card img="./img/Rectangle 8.jpg" />
          </div>
        </div>
      </article>

      <aside className="_container height_aside">
        <div className="aside_bg">
          <span className="circle_bg"></span>
          <span className="circle_border"></span>
          <h1> Ne tardez pas à prendre soin de vous et de votre santé </h1>
          <button className="_btn btn_bg_white "> Prenez rendez-vous </button>
          <span className=" circle_bottom_border "></span>
        </div>
      </aside>
    </>
  );
};

export default Section;
