import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { get } from "../Services/LocalStorageService";

const GuardAdmin = ({ children }) => {
  const AuthAdminData = useSelector((state) => state.AuthAdmin);
  if (!AuthAdminData.isAuthenticated && !get("TOKEN_ADMIN")) {
    console.log('from here');
    return <Navigate to="/admin/login" replace />;
  } else {
    return children;
  }
};
export default GuardAdmin;
