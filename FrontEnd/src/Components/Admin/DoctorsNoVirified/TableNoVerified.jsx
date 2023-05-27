import React, { useEffect, useState } from "react";
import axiosClient from "../../../AxiosClient";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const TableNoVerified = () => {
  const [Doctors, setDoctors] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [LoadingButton, setLoadingButton] = useState({ loading: false, id: 0 });

  useEffect(() => {
    setLoading(true);
    axiosClient
      .post("/doctor/noverified")
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const VerifierDoctor = (idDoctor) => {
    setLoadingButton({ id: idDoctor, loading: true });
    axiosClient
      .post("/admin/verified", { id: idDoctor })
      .then((res) => {
        setLoadingButton({ id: idDoctor, loading: false });
        console.log(res);
        axiosClient
          .post("/doctor/noverified")
          .then((res) => {
            setDoctors(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        setLoadingButton({ id: idDoctor, loading: false });
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              {!Loading ? (
                <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                  <thead className="bg-gray-100 ">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                      >
                        Nom & Prenom
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                      >
                        Matricule
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                      >
                        Action
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Doctors.map((el, idx) => {
                      return (
                        <tr key={idx} className="hover:bg-gray-100 ">
                          <td className="flex items-center p-4   whitespace-nowrap">
                            <div className="text-[14px] font-normal text-gray-500 ">
                              <div className="text-[14px] font-semibold text-gray-900 ">
                                {el.firstname + " " + el.lastname}
                              </div>
                            </div>
                          </td>
                          <td className="max-w-sm p-4 overflow-hidden text-[14px] font-normal text-gray-500 truncate xl:max-w-xs">
                            {el.Matricule}
                          </td>
                          <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap ">
                            {el.phoneNumber}
                          </td>
                          <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap ">
                            {el.email}
                          </td>
                          <td className="p-4 text-[14px] font-normal text-gray-900 whitespace-nowrap ">
                            {el.verified === 1 ? (
                              <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                                Verified
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                                No Virified
                              </div>
                            )}
                          </td>
                          <td className="p-4 space-x-2 whitespace-nowrap">
                            {LoadingButton.loading &&
                            LoadingButton.id === el.id ? (
                              <button
                                disabled
                                type="button"
                                className="inline-flex items-center px-2 py-[8px] text-[14px] font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
                              >
                                <svg
                                  aria-hidden="true"
                                  role="status"
                                  className="inline w-4 h-4 mr-3 text-white animate-spin"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                Verified
                              </button>
                            ) : (
                              <button
                                disabled={el.verified === 1 ? true : false}
                                type="button"
                                className={
                                  el.verified === 1
                                    ? "inline-flex items-center px-2 py-[8px] text-[14px] font-medium text-center text-white rounded-lg bg-primary-900  focus:ring-4 focus:ring-primary-300 "
                                    : "inline-flex items-center px-2 py-[8px] text-[14px] font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
                                }
                                onClick={() => {
                                  VerifierDoctor(el.id);
                                }}
                              >
                                <CheckCircleIcon className="w-[1.2rem] h-[1.2rem] mr-2 " />
                                Verified
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className=" flex justify-center pt-7 pb-7 ">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Table */}
    </>
  );
};
export default TableNoVerified;
