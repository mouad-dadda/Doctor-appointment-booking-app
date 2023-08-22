import React from "react";
import { Footer, Header } from "../Components";
import { useTranslation } from "react-i18next";

export const Aboutus = () => {
  document.title = "DocAppoint";
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <h1 className="text-3xl font-semibold text-center  mt-[100px] text-sky-800">
        {" "}
        {t("About.aboutUsTitle")}
      </h1>
      <div class="px-6 py-12 text-center md:px-12 lg:text-left">
        <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div class="grid items-center lg:grid-cols-2">
            <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                {t("About.welcomeMessage")}{" "}
              </div>
            </div>
            <div class="md:mb-12 lg:mb-0">
              <img
                src="./img/Doctors2.jpg"
                class="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-[100px] mt-5 text-justify"></div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 my-10">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="./img/Rectangle 9.png"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="./img/medicament.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <div className="block h-full w-full rounded-lg object-cover object-center text-justify">
                  {t("About.dataPrivacyMessage")}
                </div>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <div className="block h-full w-full rounded-lg object-cover object-center text-justify">
                  {t("About.bookingSystemMessage")}
                </div>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="./img/hospital.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="./img/doctors3.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
