import React from "react";
import { Footer, Header } from "../../Components";
import axiosClient from "../../AxiosClient";
import { logout } from "../../Redux/SliceAuthDoctor";
import { remove } from "../../Services/LocalStorageService";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const WhaitingConfirmation = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const HandleLogout = () => {
    axiosClient
      .post("/doctor/logout")
      .then((res) => {
        if (res.data.success && res.status === 200) {
          dispatch(logout());
          remove("TOKEN_DOCTOR");
          navigate("/Connexion");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className=" absolute w-[100%] h-[100vh]  img_bg">
        <div className=" relative bg-black  bg-opacity-75 ">
          <Header />
          <main className="h-[80.65vh] flex justify-center items-center ">
            <div className="  bg-slate-100 flex justify-center items-center  w-[40%] h-[35%] p-2 rounded-lg ">
              <div className="max-w-xl px-5 text-center">
                <h2 className="mb-2 text-[23px] font-bold text-zinc-800">
                  Whaiting To Conferm Your Account
                </h2>
                <p className="mb-2 text-[16px] text-zinc-500">
                  We Contect Wed You in email wen we ned samting
                </p>
                <button
                  onClick={HandleLogout}
                  className=" mt-3 ml-7 px-4 mr-2  text-[14px] font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 "
                >
                  Lougaut
                </button>
              </div>
            </div>
          </main>
          <Footer colorText="white" />
        </div>
      </div>
    </>
  );
};

export default WhaitingConfirmation;
