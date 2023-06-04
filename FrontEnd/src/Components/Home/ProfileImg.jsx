import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProfileImg = () => {
  const adminData = useSelector((state) => state.AuthAdmin);
  const doctorData = useSelector((state) => state.AuthDoctor);
  const userData = useSelector((state) => state.authUser);
  const { t } = useTranslation();

  if ((adminData.isAuthenticated && adminData.adminToken) || adminData.admin) {
    return (
      <div className="mr_left">
        <Link to={"/admin/dashboard"}>
          <img
            className="w-[46px] h-[45px] ml-[114px] p-1 rounded-full ring-2 ring-gray-300 "
            src="/img/Rectangle 9.png"
            alt="Bordered avatar"
          />
        </Link>
      </div>
    );
  } else if (
    (doctorData.isAuthenticated && doctorData.doctorToken) ||
    doctorData.doctor
  ) {
    return (
      <div className="mr_left">
        <Link to={"/doctor/dashboard"}>
          <img
            className="w-[46px] h-[45px] ml-[114px] p-1 rounded-full ring-2 ring-gray-300 "
            src="/img/Rectangle 9.png"
            alt="Bordered avatar"
          />
        </Link>
      </div>
    );
  } else if ((userData.isAuthenticated && userData.userToken) || userData.user) {
    return (
      <div className="mr_left">
        <Link to={"/user/profile"}>
          <img
            className="w-[46px] h-[45px] ml-[114px] p-1 rounded-full ring-2 ring-gray-300 "
            src="/img/Rectangle 9.png"
            alt="Bordered avatar"
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="mr_left">
        <Link to={"/Connexion"}>
          <button className="_btn btn_bg_white ">{t("ProfileRegister.Login")}</button>
        </Link>
        <Link to={"/identifier"}>
          <button className="_btn btn_bg_primary btn_mrl">
            {t("ProfileRegister.Register")}
          </button>
        </Link>
      </div>
    );
  }
};

export default ProfileImg;
