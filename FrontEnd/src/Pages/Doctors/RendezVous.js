import React from "react";
import { MenuDoctors, HeaderDoctors } from "../../Components";
import "../../Components/Css/Doctors/Dashboard.css";
import "../../Components/Css/Doctors/RendezVous.css";
import PopupDelete from "../../Components/Doctors/Dashboard/PopupDelete";
import { data } from "../../Data/User";

const RendezVous = () => {
  return (
    <div className=" row">
      <MenuDoctors />
      <div className="col-10">
        <HeaderDoctors />
        <div className="w_100  ">
          <div className="text_pg">
            <p> Rendez-Vous </p>
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
                  <th scope="col">Cin</th>
                  <th scope="col">Numéros De Téléphone</th>
                  <th scope="col">Age</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((el, idx) => {
                  return (
                    <tr key={el.id}>
                      <th scope="row"> {idx} </th>
                      <td>
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
      </div>
    </div>
  );
};

export default RendezVous;
