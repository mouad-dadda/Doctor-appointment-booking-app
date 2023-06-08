import React from "react";
import "../../Assets/Css/HomeCss/Card.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Card = ({ id, img, name, specialite }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="card_body" key={id}>
        <div>
          <img
            src={img !== null ? img : "img/Rectangle 5.jpg"}
            alt=""
            style={{ display: "initial" }}
          />
        </div>
        <h1>{name}</h1>
        <p>{specialite}</p>
        <div className="card_btn">
          <button className="btn_card mr_ri btn_bg_primary ">
            <Link to={"/bookingappointment/" + id}>{t("Card.Reserve")}</Link>
          </button>
          <button className="btn_card mr_lf btn_border_primary">
          <Link to={"/View_Profile/" + id}>{t("Card.Reserve")}</Link>

          {t("Card.View_Profile")}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
