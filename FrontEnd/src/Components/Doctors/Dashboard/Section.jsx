import React from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();
  const doctorData = useSelector((state) => state.AuthDoctor);

  return (
    <>
      <div className="bg-white md:flex border drop-shadow-sm h-40 rounded-lg my-6 mx-4">
        <div className="mt-4 p-4">
          <div className="flex">
            <p className="whitespace-nowrap font-medium block text-xl capitalize text-gray-900">
              {t("Section_Doctor.Welcome_Doctor")}{" "}
              <span className="px-2 text-white bg-[#0D63F3] font-semibold rounded dark:bg-blue-500">
              Dr. {doctorData.doctor!=null?doctorData.doctor.firstname:'' }              </span>{" "}
              {t("Section_Doctor.in_Doctolib")}
            </p>
            <HandThumbUpIcon className="h-6 w-6 text-gray-500" />
          </div>
          <p className="text-gray-500 dark:text-gray-400 whitespace-nowrap pl-3 text-base mt-2 font-normal">
            {t("Section_Doctor.Appointments_Today")}
          </p>
        </div>
        <img src="/img/sammy-doctors-consultation.png" className="ml-[22rem]" alt="" />
      </div>
    </>
  );
};

export default Section;
