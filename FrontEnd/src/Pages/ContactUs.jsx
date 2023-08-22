import React from "react";
import { Footer, Header } from "../Components";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  document.title = "DocAppoint";
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <div className="my-24 mx-auto md:px-6">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">
              {t("contact.contactUsTitle")}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-12 w-full md:p-3 lg:mb-0 lg:w-5/12 lg:px-6 shadow-xl rounded-md">
            <form className=" ">
              <div className="mb-6">
                <label htmlFor="exampleInputName">
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>

              <div className="relative mb-6">
                <label htmlFor="exampleInputEmail">
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>

              <div className="relative mb-6">
                <label htmlFor="exampleFormControlTextarea1">
                  {t("contact.messageLabel")}
                </label>
                <textarea
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder={t("contact.messagePlaceholder")}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button
                type="button"
                className="inline-blok w-full rounded bg-blue-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase"
              >
                {t("contact.sendButton")}
              </button>
            </form>
          </div>
          <div className="lg:w-7/12 mt-[100px]">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="inline-block rounded-md bg-primary-100 p-4">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="ml-6 grow">
                    <p className="text-neutral-500 dark:text-neutral-200 align-middle inline-block">
                      {t("contact.phoneNumber")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="inline-block rounded-md bg-primary-100 p-4">
                    <i className="fa-solid fa-phone-office"></i>
                  </div>
                  <div className="ml-6 grow">
                    <p className="text-neutral-500 dark:text-neutral-200">
                      {t("contact.officePhoneNumber")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="inline-block rounded-md bg-primary-100 p-4">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="ml-6 grow">
                    <p className="text-neutral-500 dark:text-neutral-200">
                      {t("contact.emailAddress")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="inline-block rounded-md bg-primary-100 p-4">
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div className="ml-6 grow">
                    <p className="text-neutral-500 dark:text-neutral-200">
                      {t("contact.address")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
