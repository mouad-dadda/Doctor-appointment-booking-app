import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router";
import { get } from "../Services/LocalStorageService";

const AuthGuard = ({ children }) => {
  const AuthUserData = useSelector((state) => state.authUser);
  if (!AuthUserData.isAuthenticated && !get("TOKEN")) {
    return <Navigate to="/Connexion" replace />;
  } else {
    return children;
  }
};

export default AuthGuard;
