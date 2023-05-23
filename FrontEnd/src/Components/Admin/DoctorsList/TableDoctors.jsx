import { XCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

const TableDoctors = () => {

  const [Doctors, setDoctors] = useState([]);

  useEffect(() => {
      axiosClient
        .get("/admin/doctor")
        .then((res) => {
          setDoctors(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);


  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
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
                      Date Rendezvous
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                    >
                      Heur
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {/* {NewAppointment.map((el, idx) => {
                    return ( */}
                  <tr className="hover:bg-gray-100 ">
                    <td className="flex items-center p-4   whitespace-nowrap">
                      <div className="text-[14px] font-normal text-gray-500 ">
                        <div className="text-[14px] font-semibold text-gray-900 ">
                          {/* {el.user.firstname} */}jjj
                        </div>
                        <div className="text-[14px] font-normal text-gray-500 ">
                          {/* {el.user.email} */} ll
                        </div>
                      </div>
                    </td>
                    <td className="max-w-sm p-4 overflow-hidden text-[14px] font-normal text-gray-500 truncate xl:max-w-xs">
                      {/* {el.user.cin} */} hhh
                    </td>
                    <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap ">
                      {/* {el.user.phoneNumber} */} kk
                    </td>
                    <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap ">
                      {/* {el.type_appointment} */} jj
                    </td>
                    <td className="p-4 text-[14px] font-normal text-gray-900 whitespace-nowrap ">
                      {/* <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                          </div> */}
                      {/* {el.date_appointment} */} edde
                    </td>
                    <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap ">
                      {/* {el.time_appointment} */}ffe
                    </td>
                    <td className="p-4 space-x-2 whitespace-nowrap">
                      {/* <button
                            type="button"
                            className="inline-flex items-center px-2 py-1.5 text-[14px] font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
                          >
                            <CheckCircleIcon className="w-[1.4rem] h-[1.4rem] mr-2 " />
                            Terminer
                          </button> */}
                      <button
                        type="button"
                        className="inline-flex items-center px-2 py-1.5 text-[14px] font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                        // onClick={() => {
                        //   setIdAppointment(idx);
                        //   setShowAnnuler(!showAnnuler);
                        // }}
                      >
                        <XCircleIcon className="w-4 h-4 mr-2 " />
                        Annuler
                      </button>
                    </td>
                  </tr>
                  {/* );
                  })} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Table */}
    </>
  );
};
export default TableDoctors;
