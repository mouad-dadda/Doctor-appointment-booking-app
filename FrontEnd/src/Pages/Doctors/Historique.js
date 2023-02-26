import React from "react";
import { MenuDoctors, HeaderDoctors } from "../../Components";
import "../../Components/Css/Doctors/Dashboard.css";
import PopupDelete from "../../Components/Doctors/Dashboard/PopupDelete";
import { data } from "../../Data/User";

const Historique = () => {
  return (
    <div className=" row">
      <MenuDoctors />
      <div className="col-10">
        <HeaderDoctors />
        <div class="w_100  ">
          <div class="text_pg">
            <p> Historique</p>
          </div>
        </div>
        <div class="tabl_apoin w_100 ">
          <div class="tabl_st border">
            <h2> Rendez-vous aujourd'hui </h2>
            <table class="table  table-hover  ">
              <thead>
                <tr class="table-light">
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
                      <td> {el.CIN} </td>
                      <td> {el.tel} </td>
                      <td>{el.date}</td>
                      <td> {el.age} </td>
                      <td className="td_btn">
                        <button className="btn_tabl btn_bg_succes ml_">
                          Terminer
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

export default Historique;
