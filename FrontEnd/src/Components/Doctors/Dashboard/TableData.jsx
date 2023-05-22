import React, { useEffect, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import AnnulerModel from "../Includes/AnnulerModel";
import axiosClient from "../../../AxiosClient";
import { useSelector } from "react-redux";

const TableDashboard = () => {
  const [showAnnuler, setShowAnnuler] = useState(false);
  const doctorData = useSelector((state) => state.AuthDoctor);
  const [AppointmentToday, setAppointmentToday] = useState([]);
  const [idAppointment, setIdAppointment] = useState(null);

  const AnnulerAppointment = (idAppointment) => {
    console.log(idAppointment);
    setShowAnnuler(!showAnnuler);
    setIdAppointment(null);
  };

  useEffect(() => {
    if (doctorData.doctor) {
      axiosClient
        .get("/doctor/appointmenttoday/" + doctorData.doctor.id)
        .then((res) => {
          setAppointmentToday(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [doctorData]);

  return (
    <>
      <div className="p-8 	bg-white	rounded-lg	border mb-2 mt-8 mx-4">
        {/* START HEADER TABLE */}
        <div className="justify-between	items-center	flex mb-4">
          <div>
            <h3 className=" text-gray-900	 font-semibold	text-xl	mb-2">
              User Sign up
            </h3>
            <span className="text-gray-500 font-normal	text-base		">
              This is a list of latest users
            </span>
          </div>
        </div>
        {/* END HEADER TABLE*/}

        {/* STARTE TABLE CENTENT */}

        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        Nom & Prenom
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        Cin
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        NumeroTelephone
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        type
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        DateRendezvous
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        heur
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {AppointmentToday.map((el, idx) => {
                      return (
                        <tr
                          key={idx}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <td className="flex items-center p-4  space-x-6 whitespace-nowrap">
                            <div className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                              <div className="text-[14px] font-semibold text-gray-900 dark:text-white">
                                {el.user.firstname + " " + el.user.lastname}
                              </div>
                              {/* <div className="text-[14px] font-normal text-gray-500 dark:text-gray-400">
                                {el.email}
                              </div> */}
                            </div>
                          </td>
                          <td className="max-w-[14px] p-4 overflow-hidden text-[14px] font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                            {el.user.cin}
                          </td>
                          <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {el.user.phoneNumber || ""}
                          </td>
                          <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {el.type_appointment}
                          </td>
                          <td className="p-4 text-[14px] font-normal text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                              {/* <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                              <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> */}
                              {el.date_appointment}
                            </div>
                          </td>
                          <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {el.time_appointment}
                          </td>
                          <td className="p-4 space-x-2 whitespace-nowrap">
                            {/* <button
                              type="button"
                              className="inline-flex items-center px-2 py-1.5 text-[14px] font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                              <CheckCircleIcon className="w-4 h-4 mr-2 " />
                              Terminer
                            </button> */}
                            <button
                              type="button"
                              className="inline-flex items-center px-2 py-1.5 text-[14px] font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                              onClick={() => {
                                setIdAppointment(idx);
                                setShowAnnuler(!showAnnuler);
                              }}
                            >
                              <XCircleIcon className="w-4 h-4 mr-2 " />
                              Annuler
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* END TABLE CENTENT */}
      </div>

      {/* Annuler Apointment Model */}
      <AnnulerModel
        showAnnuler={showAnnuler}
        setShowAnnuler={setShowAnnuler}
        AnnulerAppointment={AnnulerAppointment}
        idAppointment={idAppointment}
      />
    </>
  );
};

export default TableDashboard;
