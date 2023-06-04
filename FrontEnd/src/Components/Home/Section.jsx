import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook from react-i18next
import "../../Assets/Css/HomeCss/Section.css";
import Card from "./Card";
import axiosClient from "../../AxiosClient";

const Section = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to access translation functions
  const [Doctors, setDoctors] = useState([]);

  useEffect(() => {
    axiosClient
      .post("/doctor/home")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="Section_bg">
        <div className="_container d_flex _height pd-top">
          <div className="_height">
            <h1 className="_title_Section">{t("section_title")}</h1>
            <p className="su_text">{t("section_description")}</p>
            <button className="_btn btn_bg_primary _btn_Section mr_top">
              <Link to={"/recherche"}>{t("schedule_appointment")}</Link>
            </button>
          </div>
          <div className="Section_img">
            <span className="circle"></span>
            <img
              src="./img/doctor-2.png"
              className="_img"
              alt=""
              style={{ display: "initial" }}
            />
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
          <h1>{t("service_quality_title")}</h1>
          <p>{t("service_quality_description")}</p>
          <div className="article_img">
            <img
              src="./img/Rectangle 4.jpg"
              alt=""
              style={{ display: "initial" }}
            />
            <img
              src="./img/Rectangle 5.jpg"
              alt=""
              style={{ display: "initial" }}
            />
            <img
              src="./img/Rectangle 6.jpg"
              alt=""
              style={{ display: "initial" }}
            />
          </div>
        </div>
      </article>

      <article className="card_container height_article_2">
        <div className="cards_info">
          <h1 className="article_title">{t("book_our_doctors")}</h1>
          <div className="cards_">
            {Doctors.map((info, idx) => {
              return (
                <Card
                  key={idx}
                  id={info.id}
                  img={info.avatar_doctor}
                  name={info.firstname + " " + info.lastname}
                  specialite={info.specialite}
                />
              );
            })}
          </div>
        </div>
      </article>

      <aside className="_container height_aside">
        <div className="aside_bg">
          <span className="circle_bg"></span>
          <span className="circle_border"></span>
          <h1>{t("take_care_of_yourself")}</h1>
          <button className="_btn btn_bg_white ">{t("schedule_appointment")}</button>
          <span className=" circle_bottom_border "></span>
        </div>
      </aside>
    </>
  );
};

export default Section;
