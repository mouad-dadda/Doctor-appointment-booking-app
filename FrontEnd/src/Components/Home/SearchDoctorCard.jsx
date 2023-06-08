import React from "react";
import { ClockIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchDoctorCard = ({
  name,
  id,
  avatar_doctor,
  day_debut_work,
  day_fin_work,
  specialite,
  available,
  time_fin_work,
  time_debut_work,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="border_card mx-auto p-4 w-[372px]  relative text-center  capitalize">
        <div className="  absolute top-[12px] right-0 flex  items-center ">
          {available === "1" ? (
            <div className="bg-green-100 flex items-center text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
              <span className="flex w-3 h-3 bg-green-500 items-center mr-1 rounded-full"></span>
              {t("SearchDoctorCard.Available")}
            </div>
          ) : (
            <div className="bg-red-100 flex items-center text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
              <span className="flex w-3 h-3 bg-red-500 items-center mr-1 rounded-full"></span>
              {t("SearchDoctorCard.Not_Available")}
            </div>
          )}
        </div>

        <div>
          <img
            src={avatar_doctor !== null ? avatar_doctor : "img/Rectangle 5.jpg"}
            className="h-[236px] w-[334px] rounded-[10px]"
            alt=""
          />
        </div>
        <div className=" text-center ">
          <h1 className="font-semibold py-3 ">Dr. {name} </h1>
          <p className="text-sm"> {specialite} </p>
          <p className="flex items-center  text-sm justify-center">
            <ClockIcon className="h-6 w-4 text-[#0c58dc]" />
            {day_debut_work +
              "-" +
              day_fin_work +
              "," +
              time_debut_work +
              "-" +
              time_fin_work}
          </p>
        </div>
        <div className=" mt-3 ">
          <Link to={`/bookingappointment/${id}`}>
            <button className="mr-3 px-[32px] py-[9px] text-white bg-[#0D63F3] rounded-[26px] font-medium text-[13px]">
              {t("SearchDoctorCard.Book_Now")}
            </button>
          </Link>
          <Link to={`/doctor/View_Profile/${id}`}>
            <button className="ml-3 px-[32px] py-[7px] border-[2px] border-[#0D63F3] text-[#0D63F3] rounded-[26px] font-medium text-[13px]">
              {t("SearchDoctorCard.View_Profile")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchDoctorCard;
