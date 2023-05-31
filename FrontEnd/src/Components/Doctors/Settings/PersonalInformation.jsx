import React, { useEffect, useState } from "react";
import GetAuthDoctor from "../../../hooks/GetAuthDoctor";
import { useSelector } from "react-redux";
import axiosClient from "../../../AxiosClient";
import AuthButton from "../../AuthButton";
const PersonalInformation = () => {
  const doctorData = useSelector((state) => state.AuthDoctor);  
  const [loading, setLoading] = useState(false);

  const [DataForm, setDataForm] = useState({
    id: "",
    firstname: "",
    lastname: "",
    cin: "",
    phoneNumber: "",
    email: "",
    Matricule: "",
    specialite: "",
    nom_cabinet: "",
    address_cabinet: "",
    available: false,
    about: "",
  });

  GetAuthDoctor();

  useEffect(() => {
    if (doctorData.doctor !== null) {
      setDataForm({
        id: doctorData.doctor.id,
        firstname: doctorData.doctor.firstname || "",
        lastname: doctorData.doctor.lastname || "",
        cin: doctorData.doctor.cin || "",
        phoneNumber: doctorData.doctor.phoneNumber || "",
        email: doctorData.doctor.email || "",
        Matricule: doctorData.doctor.Matricule || "",
        specialite: doctorData.doctor.specialite || "",
        nom_cabinet: doctorData.doctor.nom_cabinet || "",
        address_cabinet: doctorData.doctor.address_cabinet || "",
        available: doctorData.doctor.available==="1" ? true :false ,
        about: doctorData.doctor.about || "",
      });
    }
  }, [doctorData ]);

  const HandelChangeCheckbox = (e) => {
    setDataForm({ ...DataForm, available: e.target.checked });
  };

  const HandelChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...DataForm, [name]: value });
  };

  const HandelSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(DataForm);
    axiosClient
      .post("/doctor/update/info", DataForm)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">
          General inhtmlFormation
        </h3>

        <form onSubmit={HandelSubmit}>
          <label className="relative inline-flex items-center mb-4 cursor-pointer">
            <input
              type="checkbox"
              // value={DataForm.available}
              checked={DataForm.available}
              name="available"
              onChange={HandelChangeCheckbox}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 ">
              Doctor Is Present
            </span>
          </label>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="first-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Bonnie"
                required
                value={DataForm.firstname}
                onChange={HandelChange}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                lastname
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="tt"
                required
                value={DataForm.lastname}
                onChange={HandelChange}
              />
            </div>
          </div>

          <div className="grid mt-3 grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Matricule"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Matricule
              </label>
              <input
                type="text"
                name="Matricule"
                id="Matricule"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Matricule"
                required
                value={DataForm.Matricule}
                onChange={HandelChange}
              />
            </div>
            <div className="col-span-6  sm:col-span-3">
              <label
                htmlFor="specialite"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                specialite
              </label>
              <input
                type="text"
                name="specialite"
                id="specialite"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="tt"
                required
                value={DataForm.specialite}
                onChange={HandelChange}
              />
            </div>
          </div>

          <div className="grid mt-3 grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                phoneNumber
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="phoneNumber"
                required
                value={DataForm.phoneNumber}
                onChange={HandelChange}
              />
            </div>
            <div className="col-span-6  sm:col-span-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="tt"
                required
                value={DataForm.email}
                onChange={HandelChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-full mt-4 mb-4">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                about{" "}
              </label>
              <textarea
                id="chat"
                rows="5"
                name="about"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder=" about You..."
                value={DataForm.about}
                onChange={HandelChange}
              ></textarea>
            </div>
          </div>

          <div className="grid mt-3 grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="nom_cabinet"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                nom cabinet
              </label>
              <input
                type="text"
                name="nom_cabinet"
                id="nom_cabinet"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="nom_cabinet"
                required
                value={DataForm.nom_cabinet}
                onChange={HandelChange}
              />
            </div>
            <div className="col-span-6  sm:col-span-3">
              <label
                htmlFor="address_cabinet"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                address cabinet
              </label>
              <input
                type="text"
                name="address_cabinet"
                id="address_cabinet"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="tt"
                required
                value={DataForm.address_cabinet}
                onChange={HandelChange}
              />
            </div>
          </div>

          <div className="grid mt-3 grid-cols-6 gap-6  w-[100%]">
            <div className="col-span-6 sm:col-full  w-[20%]">
              <AuthButton Text="Save all" Loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInformation;
