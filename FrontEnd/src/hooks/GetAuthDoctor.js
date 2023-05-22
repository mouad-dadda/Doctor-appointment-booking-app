import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addDoctorData } from "../Redux/SliceAuthDoctor";
import { get } from "../Services/LocalStorageService";
import axiosClient from "../AxiosClient";

const GetAuthDoctor = () => {
  const dispatch = useDispatch();

  const doctorData = useSelector((state) => state.AuthDoctor);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      doctorData.isAuthenticated &&
      get("TOKEN_DOCTOR") &&
      !doctorData.doctor
    ) {
      axiosClient
        .get("/doctor")
        .then((re) => {
          dispatch(addDoctorData(re.data));
          console.log(re);
        })
        .catch((er) => {
          console.log(er);
          navigate("/doctor/login");
        });
    }
  }, [dispatch, navigate]);
};

export default GetAuthDoctor;
