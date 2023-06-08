import React, { useState } from "react";
import { Footer, Header } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../AxiosClient";
import AlertSucces from "../../Components/Alert/AlertSucces";
import { remove } from "../../Services/LocalStorageService";
import { logout } from "../../Redux/SliceAuthDoctor";

const VerificationEmail = () => {
  document.title = "Verifey Email";

  const doctorData = useSelector((state) => state.AuthDoctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ShowAlertSucce, setShowAlertSucce] = useState(false);

  const ResendVerificationEmail = () => {
    axiosClient
      .get(`/doctors/email/verify/${doctorData.doctor.id}`)
      .then(() => {
        setShowAlertSucce(!ShowAlertSucce);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <div className="  bg-slate-100  w-[40%] h-[35%] p-2 rounded-lg ">
              <div className="max-w-xl px-5 text-center">
                <h2 className="mb-2 text-[23px] font-bold text-zinc-800">
                  Check your Email
                </h2>
                <p className="mb-2 text-[16px] text-zinc-500">
                  We are glad, that you’re with us ? We’ve sent you a
                  verification link to the email address{" "}
                  <span className="font-medium text-indigo-500">
                    {doctorData.doctor && doctorData.doctor.email}
                  </span>
                  .
                </p>
                <div className=" flex ">
                  <button
                    onClick={ResendVerificationEmail}
                    className="mt-3 inline-block text-[16px] w-72 rounded bg-indigo-600 px-4 py-2.5 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700"
                  >
                    Resend Verification →
                  </button>
                  <button
                    onClick={HandleLogout}
                    className=" mt-3 ml-7 px-4 mr-2  text-[14px] font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 "
                  >
                    Lougaut
                  </button>
                </div>
              </div>
            </div>
          </main>
          <Footer colorText="white" />
        </div>
      </div>
      {ShowAlertSucce && (
        <AlertSucces Message={"link  Verification email send Succes"} />
      )}
    </>
  );
};

export default VerificationEmail;
