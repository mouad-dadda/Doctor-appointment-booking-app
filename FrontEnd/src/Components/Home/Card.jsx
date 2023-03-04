import React from "react";
import "../Css/HomeCss/Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card_body">
        <div>
          <img src={props.img} alt="" />
        </div>
        <h1>Paul Richard</h1>
        <p>
          MBBS, MD - Dermatologie, vénéréologie et lèpre Réservez notre médecin
        </p>
        <div className="card_btn">
          <button className="btn_card mr_ri btn_bg_primary ">
            <a href="/test">Reserve</a>
          </button>
          <button className="btn_card mr_lf btn_border_primary">
            View Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
