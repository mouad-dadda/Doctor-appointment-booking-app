import React, { useState } from "react";
import {
  Footer,
  Header,
  AlertToRegistre,
  SearchDoctorCard,
} from "../Components";
import "../Assets/Css/HomeCss/SearchDoctors.css";
import axiosClient from "../AxiosClient";
import { useSelector } from "react-redux";

const SearchDoctors = () => {
  document.title = "Recherche Medecin";

  const AuthUserData = useSelector((state) => state.authUser);

  const [DataForm, setDataForm] = useState({
    specialty: "",
    ville: "",
    docteur: "",
    hopital: "",
  });

  const [DataSearch, setDataSearch] = useState([]);

  const HandleChangeData = (ev) => {
    const { name, value } = ev.target;
    setDataForm({ ...DataForm, [name]: value });
  };

  const HandleSubmitData = (e) => {
    e.preventDefault();

    axiosClient
      .post("/search/doctors", {
        key: DataForm.specialty,
      })
      .then((res) => setDataSearch(res.data.DataSearch))
      .catch((err) => console.log(err));
  };

  const [showAlertToRegistre, setSowAlertToRegistre] = useState(
    AuthUserData.showAlertToAuth
  );
  return (
    <>
      <Header />
      <section>
        <div className="_img_cover">
          <div className="search_bar">
            <form onSubmit={HandleSubmitData}>
              <div className="search_input">
                <label htmlFor="Specialty" className="label_search">
                  Specialty
                  <i className="fa-light fa-chevron-down"></i>
                </label>
                <input
                  id="Specialty"
                  type="text"
                  name="specialty"
                  className="input_search"
                  placeholder="Choose specialty"
                  onChange={HandleChangeData}
                />
              </div>
              <div className="search_input">
                <label htmlFor="Ville" className="label_search">
                  Ville
                  <i className="fa-light fa-chevron-down"></i>
                </label>
                <input
                  id="Ville"
                  type="text"
                  name="ville"
                  className="input_search"
                  placeholder="Choose Ville"
                  onChange={HandleChangeData}
                />
              </div>
              <div className="search_input">
                <label htmlFor="Docteur" className="label_search">
                  Docteur
                  <i className="fa-light fa-chevron-down"></i>
                </label>
                <input
                  id="Docteur"
                  type="text"
                  name="docteur"
                  className="input_search"
                  placeholder="Choose Docteur"
                  onChange={HandleChangeData}
                />
              </div>
              <div className="search_input">
                <label htmlFor="Hôpital" className="label_search">
                  Hôpital
                  <i className="fa-light fa-chevron-down"></i>
                </label>
                <input
                  id="Hôpital"
                  type="text"
                  name="hopital"
                  className="input_search"
                  placeholder="Choose Hospital"
                  onChange={HandleChangeData}
                />
              </div>
              <button className="btn_search btn_bg_primary ">Search</button>
            </form>
          </div>
        </div>
      </section>
      <main className=" _container mt-4 mb-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
          {/* Card  For  Resulta  Doctor */}

          {DataSearch.map((info, idx) => {
            return (
              <SearchDoctorCard
                key={idx}
                name={info.firstname + " " + info.lastname}
                id={info.id}
                day_debut_work={info.day_debut_work}
                day_fin_work={info.day_fin_work}
                specialite={info.specialite}
                available={info.available}
                avatar_doctor={info.avatar_doctor}
                time_debut_work={info.time_debut_work}
                time_fin_work={info.time_fin_work}
              />
            );
          })}
        </div>
      </main>
      <Footer />
      <AlertToRegistre
        showAlertToRegistre={showAlertToRegistre}
        setSowAlertToRegistre={setSowAlertToRegistre}
      />
    </>
  );
};

export default SearchDoctors;
