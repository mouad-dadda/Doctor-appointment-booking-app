import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { get } from "../Services/LocalStorageService";
import { showAlertToAuth } from "../Redux/SliceAuthUser";

const AppointmentGuard = ({ children }) => {
  const dispatch = useDispatch();
  const AuthUserData = useSelector((state) => state.authUser);
  if (!AuthUserData.isAuthenticated && !get("TOKEN")) {
    dispatch(showAlertToAuth(true));
    return <Navigate to="/recherche" replace />;
  } else {
    return children;
  }
};

export default AppointmentGuard;
