import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { get } from "../Services/LocalStorageService";

const AuthDoctorGuard = ({ children }) => {
  const AuthDoctorData = useSelector((state) => state.AuthDoctor);
  if (!AuthDoctorData.isAuthenticated && !get("TOKEN_DOCTOR")) {
    return <Navigate to="/doctor/signup" replace />;
  } else {
    return children;
  }
};

export default AuthDoctorGuard;
