import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../Redux/SliceAuthUser";
import { get } from "../Services/LocalStorageService";
import { useNavigate } from "react-router";
import axiosClient from "../AxiosClient";

const GetAuthUser = () => {
  const dispatch = useDispatch();

  const UserData = useSelector((state) => state.authUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      UserData.isAuthenticated &&
      get("TOKEN_USER") &&
      UserData.user === null
    ) {
      axiosClient
        .get("/user")
        .then((re) => {
          dispatch(addUserData(re.data));
        })
        .catch((er) => {
          navigate("/connexion");
        });
    }
  }, [dispatch, navigate]);

  console.log(UserData);
};

export default GetAuthUser;
