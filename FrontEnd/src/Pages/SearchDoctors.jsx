import React, { useState } from "react";

import { Footer, Header, InputSearch, Section  , AlertToRegistre} from "../Components";
import '../Assets/Css/HomeCss/SearchDoctors.css'
import { MapPinIcon, ClockIcon } from "@heroicons/react/20/solid";


const SearchDoctors = () => {
  const [showAlertToRegistre , setSowAlertToRegistre]=useState(false)
  return (
    <>
      <Header />
      <section>
        <div className="_img_cover">
          <div className="search_bar">
            <form onSubmit={(e) => e.preventDefault()}>
              <InputSearch label="Specialty" placeholder="Choose specialty" />
              <InputSearch label="Ville" placeholder="Choose Ville" />
              <InputSearch label="Docteur" placeholder="Choose Docteur" />
              <InputSearch label="Hôpital" placeholder="Choose Hospital" />
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
      <AlertToRegistre showAlertToRegistre={showAlertToRegistre} setSowAlertToRegistre={setSowAlertToRegistre}/>
    </>
  );
};

export default SearchDoctors;
