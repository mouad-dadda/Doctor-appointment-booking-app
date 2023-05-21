import React, { useEffect } from "react";
import {
  NavBarDoctors,
  SidebarDoctors,
  TableDashboard,
} from "../../Components";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../Services/LocalStorageService";
import { addDoctorData } from "../../Redux/SliceAuthDoctor";
import axiosClient from "../../AxiosClient";
import { useNavigate } from "react-router";

const Dashboard = () => {
  document.title = "Doctor Dashboard";
  const doctorData = useSelector((state) => state.AuthDoctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(doctorData);

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
          // navigate("/doctor/login");
        });
    }
  }, []);

  return (
    <>
      <NavBarDoctors />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SidebarDoctors />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <div className=" bg-white md:flex border drop-shadow-sm h-40 rounded-lg  my-6 mx-4">
              <div className="mt-4 p-4">
                <div className="flex">
                  <p className="whitespace-nowrap font-medium block text-xl capitalize text-gray-900">
                    Bienvenue
                    <span className="px-2 text-white bg-[#0D63F3] font-semibold	 rounded dark:bg-blue-500">
                      Dr.Ahmed
                    </span>
                    dans Doctolib
                  </p>
                  <HandThumbUpIcon className="h-6 w-6 text-gray-500" />
                </div>
                <p className=" text-gray-500 dark:text-gray-400 whitespace-nowrap pl-3 text-base mt-2	font-normal">
                  Vous avez 5 rendez-vous aujourd'hui !
                </p>
              </div>
              <img
                src="/img/sammy-doctors-consultation.png"
                className=" ml-[22rem] "
                alt=""
              />
            </div>
            <TableDashboard />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
