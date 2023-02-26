import React from "react";
import "bootstrap/js/dist/modal.js";
import "../../Css/Doctors/Module.css";
import { data } from "../../../Data/User";
import PopupDelete from "../PopupDelete.js";

const Dashboard = () => {
  return (
    <>
      <div className="w_100  ">
        <div className="messg_welcom ds_flex">
          <div className="text_mesg">
            <h2> Bienvenue Docteur Ahmed dans Doctolib </h2>
            <p>
              Vous avez 5 rendez-vous aujourd'hui !
              <i className="fa-light fa-face-grin-beam"></i>
            </p>
          </div>
          <div className="img_pg">
            <img src="./img/sammy-line-doctors-consultation.png" alt="" />
          </div>
        </div>
      </div>
      <div className="tabl_apoin w_100 ">
        <div className="tabl_st border">
          <h2> Rendez-vous aujourd'hui </h2>
          <table className="table  table-hover  ">
            <thead>
              <tr className="table-light">
                <th scope="col">#</th>
                <th scope="col">Nom&Prenom</th>
                <th scope="col">Numéros De Téléphone</th>
                <th scope="col">Age</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, idx) => {
                return (
                  <tr key={el.id} >
                    <th scope="row"> {idx} </th>
                    <td>
                      {" "}
                      {el.nom} {el.prenom}
                    </td>
                    <td> {el.tel} </td>
                    <td>{el.date}</td>
                    <td> {el.age} </td>
                    <td className="td_btn">
                      <button className="btn_tabl btn_bg_succes ml_">
                        Terminer
                      </button>
                      <PopupDelete id={el.id} />
                      <button
                        className="btn_tabl btn_bg_danger"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target={`#DeleteUser${el.id}`}
                      >
                        Annuler
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
