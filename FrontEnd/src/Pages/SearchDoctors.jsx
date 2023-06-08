import React, { useState } from "react";
import {
  Footer,
  Header,
  AlertToRegistre,
  SearchDoctorCard,
  Spinner,
} from "../Components";
import "../Assets/Css/HomeCss/SearchDoctors.css";
import axiosClient from "../AxiosClient";
import { useSelector } from "react-redux";

const SearchDoctors = () => {
  document.title = "Recherche Medecin";

  const AuthUserData = useSelector((state) => state.authUser);

  const [Loading, setLoading] = useState(false);

  const [DataForm, setDataForm] = useState({
    specialite: "",
    address_cabinet: "",
    firstname: "",
    nom_cabinet: "",
  });

  const [DataSearch, setDataSearch] = useState([]);

  const HandleChangeData = (ev) => {
    const { name, value } = ev.target;
    setDataForm({ ...DataForm, [name]: value });
  };

  const HandleSubmitData = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosClient
      .post("/search/doctors", DataForm)
      .then((res) => {
        setDataSearch(res.data.DataSearch);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    console.log(DataSearch);
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
                  name="specialite"
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
                  name="address_cabinet"
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
                  name="firstname"
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
                  name="nom_cabinet"
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
        {Loading && (
          <div className=" w-full flex items-center justify-center mb-10 ">
            <Spinner />
          </div>
        )}
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
