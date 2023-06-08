import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axiosClient from "../AxiosClient";
import { addUserData } from "../Redux/SliceAuthUser";
import { get, remove } from "../Services/LocalStorageService";

const VerificationEmailGuard = ({ children }) => {
  const UserData = useSelector((state) => state.authUser);
  const navigate = useNavigate();
  const dispatch=useDispatch()

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
          remove("TOKEN_USER")
          navigate("/connexion");
        });
    }
  }, [dispatch, navigate, UserData.isAuthenticated, UserData.user]);

  if (UserData.user) {
    if (UserData.user.email_verified_at) {
      return navigate("/user/profile");
    } else {
      return children;
    }
  }
};

export default VerificationEmailGuard;
