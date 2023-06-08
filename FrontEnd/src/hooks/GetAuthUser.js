import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../Redux/SliceAuthUser";
import { get, remove } from "../Services/LocalStorageService";
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
          remove("TOKEN_USER")
          navigate("/connexion");
        });
    }
  }, [dispatch, navigate, UserData.isAuthenticated, UserData.user]);

  console.log(UserData);
  console.log( "get authu ud" );
};

export default GetAuthUser;
