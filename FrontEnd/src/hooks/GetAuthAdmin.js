import  { useEffect } from "react";
import { addAdminData } from "../Redux/SliceAuthAdmin";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { get, remove } from "../Services/LocalStorageService";
import axiosClient from "../AxiosClient";

const GetAuthAdmin = () => {
  const dispatch = useDispatch();

  const adminData = useSelector((state) => state.AuthAdmin);

  const navigate = useNavigate();

  useEffect(() => {
    if (adminData.isAuthenticated && get("TOKEN_ADMIN") && !adminData.admin) {
      axiosClient
        .get("/admin")
        .then((re) => {
          dispatch(addAdminData(re.data));
          console.log(re);
        })
        .catch((er) => {
          console.log(er);
          remove("TOKEN_ADMIN")
          navigate("/admin/login");
        });
    }
    console.log(adminData);
  }, [dispatch, navigate , adminData]);
};

export default GetAuthAdmin;
