import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SelelctLang = () => {
  const [Toggle, setToggle] = useState(false);

  const { t, i18n } = useTranslation();

  const locales = {
    en: "en",
    fr: "fr",
    cn: "cn",
  };

  return (
    <>
      <button
        className="flex-shrink-0 z-10  uppercase  inline-flex h-[35px] mt-[9px] items-center py-0.5 px-1.5 text-[13px] font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
        type="button"
        onClick={() => setToggle(!Toggle)}
      >
        {i18n.resolvedLanguage}
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={
          Toggle
            ? "z-10 w-12  bg-white divide-y absolute right-[8.2%] top-[9%] divide-gray-100 rounded-lg shadow  "
            : "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
        }
      >
        <ul
          className=" text-[13px] text-gray-700   "
          aria-labelledby="states-button"
        >
          {Object.keys(locales).map((val, idx) => {
            if (val === i18n.resolvedLanguage) {
              return "";
            } else {
              return (
                <li key={idx}>
                  <button
                    onClick={() => {
                      i18n.changeLanguage(val);
                      setToggle(!Toggle);
                    }}
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-[14px] hover:bg-gray-100 hover:rounded-lg text-gray-700 "
                  >
                    <div className="inline-flex uppercase items-center">
                      {val}
                    </div>
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default SelelctLang;
