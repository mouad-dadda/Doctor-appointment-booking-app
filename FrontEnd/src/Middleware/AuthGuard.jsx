import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { get } from "../Services/LocalStorageService";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const AuthUserData = useSelector((state) => state.authUser);
  useEffect(() => {
    if (!AuthUserData.isAuthenticated && !get("TOKEN")) {
      return navigate("/Connexion");
    }
  },[] );
  return children;
};

export default AuthGuard;
