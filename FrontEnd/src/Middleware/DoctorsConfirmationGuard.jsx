import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { get } from "../Services/LocalStorageService";
import axiosClient from "../AxiosClient";
import { addDoctorData } from "../Redux/SliceAuthDoctor";

const DoctorsConfirmationGuard = ({children}) => {
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
          console.log(er);
          navigate("/doctor/login");
        });
    }
    console.log(AuthDoctorData);
  }, [dispatch, navigate, AuthDoctorData]);

  if (AuthDoctorData.doctor) {
    if (AuthDoctorData.doctor.verified === 1) {
      return navigate("/doctor/dashboard");
    } else {
      return children;
    }
  }
};

export default DoctorsConfirmationGuard;
