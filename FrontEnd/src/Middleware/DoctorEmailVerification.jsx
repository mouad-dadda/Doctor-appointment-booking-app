import React, { useEffect } from "react";
import { get, remove } from "../Services/LocalStorageService";
import { addDoctorData } from "../Redux/SliceAuthDoctor";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axiosClient from "../AxiosClient";

const DoctorEmailVerification = ({ children }) => {
  const AuthDoctorData = useSelector((state) => state.AuthDoctor);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      AuthDoctorData.isAuthenticated &&
      get("TOKEN_DOCTOR") &&
      !AuthDoctorData.doctor
    ) {
      axiosClient
        .get("/doctor")
        .then((re) => {
          dispatch(addDoctorData(re.data));
          console.log(re);
        })
        .catch((er) => {
          remove("TOKEN_DOCTOR")
          console.log(er);
          navigate("/doctor/login");
        });
    }
    console.log(AuthDoctorData);
  }, [dispatch, navigate, AuthDoctorData]);

  if (AuthDoctorData.doctor) {
    if (AuthDoctorData.doctor.email_verified_at) {
      return navigate("/doctor/dashboard");
    } else {
      return children;
    }
  }
};

export default DoctorEmailVerification;
