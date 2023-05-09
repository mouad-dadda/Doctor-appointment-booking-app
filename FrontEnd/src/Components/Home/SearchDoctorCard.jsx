import React from "react";
import { MapPinIcon, ClockIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const SearchDoctorCard = () => {
  return (
    <>
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
