import React from "react";
import { MapPinIcon, ClockIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const SearchDoctorCard = () => {
  return (
    <>
      <div className="border_card mx-auto p-4 w-[372px]  relative text-center  capitalize">
        <div className="  absolute top-[12px] right-0 flex  items-center ">
          <div class="bg-green-100 flex items-center text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
            <span class="flex w-3 h-3 bg-green-500 items-center mr-1 rounded-full"></span>
            Indigo
          </div>
        </div>

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
          <Link to="/bookingappointment">
            <button className=" mr-3 px-[32px] py-[9px] text-white bg-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
              Book Now
            </button>
          </Link>
          <button className=" ml-3 px-[32px] py-[7px] border-[2px] border-[#0D63F3] text-[#0D63F3] rounded-[26px] font-medium text-[13px] ">
            View Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchDoctorCard;
