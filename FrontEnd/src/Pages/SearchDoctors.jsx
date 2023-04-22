import React, { useState } from "react";
import { Footer, Header, AlertToRegistre } from "../Components";
import "../Assets/Css/HomeCss/SearchDoctors.css";
import { MapPinIcon, ClockIcon } from "@heroicons/react/20/solid";

const SearchDoctors = () => {
  document.title = "Recherche Medecin";

  const [DataForm, setDataForm] = useState({
    specialty: "",
    ville: "",
    docteur: "",
    hopital: "",
  });

  const HandleChangeData = (ev) => {
    const { name, value } = ev.target;
    setDataForm({ ...DataForm, [name]: value });
  };

  const HandleSubmitData = (e) => {
    e.preventDefault();
    console.log(DataForm);
  };

  const [showAlertToRegistre, setSowAlertToRegistre] = useState(false);
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

          <div className="border_card mx-auto p-4 w-[372px] text-center  capitalize">
            <div>
              <img
                src="img/Rectangle 5.jpg"
                className="h-[236px] w-[334px] rounded-[10px]"
                alt=""
              />
            </div>
            <div className=" text-center ">
              <h1 className="font-semibold py-3 ">Dr. Ruby Perrin</h1>
              <p className="text-sm">Periodontology and Oral Implantology</p>
              <p className="flex items-center  text-sm justify-center">
                <ClockIcon className="h-6 w-4 text-[#0c58dc]" />
                Monday-Sanday , 8:00 , 18:30
              </p>
              <p className=" flex items-center text-sm justify-center ">
                <MapPinIcon className="h-6 w-4 text-[#0c58dc]" />
                Casablanca
              </p>
            </div>
            <div className=" mt-3 ">
              <button
              className=" mr-3 px-[32px] py-[9px] text-white bg-[#0D63F3] rounded-[26px] font-medium text-[13px] "
              >
                Book Now
              </button>
              <button className=" ml-3 px-[32px] py-[7px] border-[2px] border-[#0D63F3] text-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
                View Profile
              </button>
            </div>
          </div>

          <div className="border_card mx-auto p-4 w-[372px] text-center  capitalize">
            <div>
              <img
                src="img/Rectangle 5.jpg"
                className="h-[236px] w-[334px] rounded-[10px]"
                alt=""
              />
            </div>
            <div className=" text-center ">
              <h1 className="font-semibold py-3 ">Dr. Ruby Perrin</h1>
              <p className="text-sm">Periodontology and Oral Implantology</p>
              <p className="flex items-center  text-sm justify-center">
                <ClockIcon className="h-6 w-4 text-[#0c58dc]" />
                Monday-Sanday , 8:00 , 18:30
              </p>
              <p className=" flex items-center text-sm justify-center ">
                <MapPinIcon className="h-6 w-4 text-[#0c58dc]" />
                Casablanca
              </p>
            </div>
            <div className=" mt-3 ">
              <button className=" mr-3 px-[32px] py-[9px] text-white bg-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
                Book Now
              </button>
              <button className=" ml-3 px-[32px] py-[7px] border-[2px] border-[#0D63F3] text-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
                View Profile
              </button>
            </div>
          </div>

          <div className="border_card mx-auto p-4 w-[372px] text-center  capitalize">
            <div>
              <img
                src="img/Rectangle 5.jpg"
                className="h-[236px] w-[334px] rounded-[10px]"
                alt=""
              />
            </div>
            <div className=" text-center ">
              <h1 className="font-semibold py-3 ">Dr. Ruby Perrin</h1>
              <p className="text-sm">Periodontology and Oral Implantology</p>
              <p className="flex items-center  text-sm justify-center">
                <ClockIcon className="h-6 w-4 text-[#0c58dc]" />
                Monday-Sanday , 8:00 , 18:30
              </p>
              <p className=" flex items-center text-sm justify-center ">
                <MapPinIcon className="h-6 w-4 text-[#0c58dc]" />
                Casablanca
              </p>
            </div>
            <div className=" mt-3 ">
              <button className=" mr-3 px-[32px] py-[9px] text-white bg-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
                Book Now
              </button>
              <button className=" ml-3 px-[32px] py-[7px] border-[2px] border-[#0D63F3] text-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
                View Profile
              </button>
            </div>
          </div>

          <div className="border_card mx-auto p-4 w-[372px] text-center  capitalize">
            <div>
              <img
                src="img/Rectangle 5.jpg"
                className="h-[236px] w-[334px] rounded-[10px]"
                alt=""
              />
            </div>
            <div className=" text-center ">
              <h1 className="font-semibold py-3 ">Dr. Ruby Perrin</h1>
              <p className="text-sm">Periodontology and Oral Implantology</p>
              <p className="flex items-center  text-sm justify-center">
                <ClockIcon className="h-6 w-4 text-[#0c58dc]" />
                Monday-Sanday , 8:00 , 18:30
              </p>
              <p className=" flex items-center text-sm justify-center ">
                <MapPinIcon className="h-6 w-4 text-[#0c58dc]" />
                Casablanca
              </p>
            </div>
            <div className=" mt-3 ">
              <button className=" mr-3 px-[32px] py-[9px] text-white bg-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
                Book Now
              </button>
              <button className=" ml-3 px-[32px] py-[7px] border-[2px] border-[#0D63F3] text-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
                View Profile
              </button>
            </div>
          </div>

          <div className="border_card mx-auto p-4 w-[372px] text-center  capitalize">
            <div>
              <img
                src="img/Rectangle 5.jpg"
                className="h-[236px] w-[334px] rounded-[10px]"
                alt=""
              />
            </div>
            <div className=" text-center ">
              <h1 className="font-semibold py-3 ">Dr. Ruby Perrin</h1>
              <p className="text-sm">Periodontology and Oral Implantology</p>
              <p className="flex items-center  text-sm justify-center">
                <ClockIcon className="h-6 w-4 text-[#0c58dc]" />
                Monday-Sanday , 8:00 , 18:30
              </p>
              <p className=" flex items-center text-sm justify-center ">
                <MapPinIcon className="h-6 w-4 text-[#0c58dc]" />
                Casablanca
              </p>
            </div>
            <div className=" mt-3 ">
              <button className=" mr-3 px-[32px] py-[9px] text-white bg-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
                Book Now
              </button>
              <button className=" ml-3 px-[32px] py-[7px] border-[2px] border-[#0D63F3] text-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
                View Profile
              </button>
            </div>
          </div>
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
