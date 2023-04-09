import React, { useEffect } from "react";
import { Footer, Header } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../AxiosClient";
import { addUserData } from "../../Slice/SliceAuthUser";
import { useNavigate } from "react-router";
import { get } from "../../Services/LocalStorageService";

const Profile = () => {
  const UserData = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(UserData);

  useEffect(() => {
    if (UserData.isAuthenticated && get("TOKEN")) {
      axiosClient
        .get("/user")
        .then((re) => {
          dispatch(addUserData(re.data));
        })
        .catch((er) => {
          navigate("/Connexion");
        });
    }
  }, []);

  if (UserData.isAuthenticated && get("TOKEN")) {
    return (
      <>
        <Header />
        <div>
          <p> hello in the page profile </p>
        </div>
        <Footer />
      </>
    );
  }
};

export default Profile;
