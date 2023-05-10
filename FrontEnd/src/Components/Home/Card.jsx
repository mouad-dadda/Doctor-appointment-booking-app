import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Assets/Css/HomeCss/Card.css";

const Card = (props) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/doctors")
      .then((response) => {
        const doctorsData = response.data;
        setDoctors(doctorsData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {doctors.map((doctor) => (
        <div className="card_body" key={doctor.id}>
          <div>
            <img src={doctor.img} alt="" style={{ display: "initial" }} />
          </div>
          <h1>{doctor.name}</h1>
          <p>{doctor.qualifications}</p>
          <div className="card_btn">
            <button className="btn_card mr_ri btn_bg_primary ">
              <a href="/reserve">Reserve</a>
            </button>
            <button className="btn_card mr_lf btn_border_primary">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
