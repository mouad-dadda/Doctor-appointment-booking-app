import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileImg = () => {
  const adminData = useSelector((state) => state.AuthAdmin);

  const doctorData = useSelector((state) => state.AuthDoctor);

  const UserData = useSelector((state) => state.authUser);

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
    (doctorData.isAuthenticated &&
    doctorData.doctorToken) ||
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
  } else if ((UserData.isAuthenticated && UserData.userToken) || UserData.user) {
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
          <button className="_btn btn_bg_white "> Connexion</button>
        </Link>

        <Link to={"/identifier"}>
          <button className="_btn btn_bg_primary btn_mrl">S'identifier</button>
        </Link>
      </div>
    );
  }
};

export default ProfileImg;
