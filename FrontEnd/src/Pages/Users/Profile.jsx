import React, { useEffect } from "react";
import { Footer, Header, UserNavSettings } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../AxiosClient";
import { addUserData, logout } from "../../Redux/SliceAuthUser";
import { useNavigate } from "react-router";
import { get, remove } from "../../Services/LocalStorageService";

const Profile = () => {
  const UserData = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(UserData);

  useEffect(() => {
    if (UserData.isAuthenticated && get("TOKEN_USER") && UserData.user === null) {
      axiosClient
        .get("/user")
        .then((re) => {
          dispatch(addUserData(re.data));
        })
        .catch((er) => {
          navigate("/connexion");
        });
    }
  }, [UserData.isAuthenticated, UserData.user, dispatch, navigate]);

  const HandleLogout = () => {
    axiosClient
      .post("/user/logout")
      .then((res) => {
        if (res.data.success && res.status === 200) {
          dispatch(logout());
          remove("TOKEN_USER");
          navigate("/Connexion");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(UserData.user);

  return (
    <>
      <Header />
      <div className="_container my-8 flex ">
        <UserNavSettings />
        <div className=" w-[75%] flex justify-center ">
          {UserData.user && (
            <div className="  w-[50%]  m-auto ">
              <div className="  border-x border-t  rounded-sm flex justify-center">
                <div className="  text-center ">
                  <img
                    className="mb-4 mt-9 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                    src="/img/Rectangle 4.jpg"
                    alt=""
                  />
                  <h3 className=" mt-4 font-[600]  mb-5 text-[16px] ">
                    {UserData.user.firstname} {UserData.user.lastname}
                  </h3>
                </div>
              </div>
              <div className=" border  p-8 ">
                <div>
                  {UserData.user.phoneNumber && (
                    <p className=" text-[15px] ">
                      {" "}
                      <span className="  font-semibold "> Phone No :</span>
                      {UserData.user.phoneNumber}
                    </p>
                  )}

                  <p className=" text-[15px] ">
                    {" "}
                    <span className="  font-semibold "> CIN :</span>
                    {UserData.user.cin}
                  </p>
                  <p className=" text-[15px] ">
                    {" "}
                    <span className="  font-semibold "> Email :</span>
                    {UserData.user.email}
                  </p>
                </div>
                <div className=" mt-3 ">
                  <button
                    onClick={HandleLogout}
                    type="button"
                    className="text-white text-[13px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2 mr-2 mb-2  focus:outline-none"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
