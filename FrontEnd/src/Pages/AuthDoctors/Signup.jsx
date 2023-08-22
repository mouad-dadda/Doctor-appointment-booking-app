import React, { useEffect, useState } from "react";
import { AuthButton, Footer, Header } from "../../Components";
import axiosClient from "../../AxiosClient.js";
import { useDispatch, useSelector } from "react-redux";
import { signUpSuccess } from "../../Redux/SliceAuthDoctor";
import { get, storeInLocalStorage } from "../../Services/LocalStorageService";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Signup = () => {
  document.title = "S'identifier Doctors";

  const doctorData = useSelector((state) => state.AuthDoctor);
  console.log(doctorData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (doctorData.isAuthenticated && get("TOKEN_DOCTOR")) {
      navigate("/doctor/dashboard");
    }
  }, [navigate, doctorData.isAuthenticated]);

  const [DataForm, setData] = useState({
    firstname: "",
    lastname: "",
    Matricule: "",
    phoneNumber: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    Matricule: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const HandleChangeData = (e) => {
    const { name, value } = e.target;
    setData({ ...DataForm, [name]: value });
  };

  const HandleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(DataForm);

    axiosClient
      .post("/doctor/register", DataForm)

      .then(({ data }) => {
        dispatch(signUpSuccess(data));

        storeInLocalStorage("TOKEN_DOCTOR", data.token);
        setLoading(false);
        navigate("/doctor/dashboard");
      })

      .catch((er) => {
        setLoading(false);
        if (er.response && er.response.status === 422) {
          setError({ ...error, ...er.response.data.errors });
          console.log(er);
        } else {
          console.log(er);
        }
      });
  };

  return (
    <>
      <div className=" absolute w-[100%] h-[133vh]  add_img">
        <div className=" relative bg-black h-[133vh] bg-opacity-75 ">
          <Header />
          <div className="h-[41rem] flex justify-center items-center ">
            <div className="  w-[27rem] rounded-md  bg-white pl-8 pt-7 pr-8 pb-7">
              <div className=" text-center">
                <div className="flex justify-center items-center">
                  <img src="/img/logo.png" className="w-[123px]" alt="" />
                </div>
                <div className="mb-[14px]">
                  <h1 className="mt-4 text-[25px] font-medium text-gray-900 ">
                    Bienvenue Doctor
                  </h1>
                </div>
                <div>
                  <p className=" text-[14px] text-slate-400	">
                    {" "}
                    Vous creez votre premier compte DocAppoint pour obtenir un
                    rendez-vous avec un medcine !!{" "}
                  </p>
                </div>
              </div>
              <form className="  p-5 pl-8 pr-8 " onSubmit={HandleSubmit}>
                <div className="grid gap-6 mb-[20px] md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="FirstName"
                      className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                    >
                      Prenom
                    </label>
                    <input
                      type="text"
                      id="FirstName"
                      name="firstname"
                      className={
                        error.firstname !== ""
                          ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          : "bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      placeholder="Prenom"
                      required
                      onChange={HandleChangeData}
                    />
                    {error.firstname && (
                      <p className="mt-2 text-[11px] text-red-600 dark:text-red-500">
                        {error.firstname[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="LastName"
                      className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="LastName"
                      name="lastname"
                      className={
                        error.lastname !== ""
                          ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          : "bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      placeholder="Nom"
                      required
                      onChange={HandleChangeData}
                    />
                    {error.lastname && (
                      <p className="mt-2 text-[11px] text-red-600 dark:text-red-500">
                        {error.lastname[0]}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-[20px]">
                  <label
                    htmlFor="Matricule"
                    className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                  >
                    Matricule
                  </label>
                  <input
                    type="text"
                    id="Matricule"
                    name="Matricule"
                    className={
                      error.Matricule !== ""
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    placeholder="Matricule"
                    onChange={HandleChangeData}
                    required
                  />
                  {error.Matricule && (
                    <p className="mt-2 text-[11px] text-red-600 dark:text-red-500">
                      {error.cin[0]}
                    </p>
                  )}
                </div>

                <div className="mb-[20px]">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                  >
                    phoneNumber
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className={
                      error.phoneNumber !== ""
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    placeholder="phoneNumber"
                    onChange={HandleChangeData}
                    required
                  />
                  {error.phoneNumber && (
                    <p className="mt-2 text-[11px] text-red-600 dark:text-red-500">
                      {error.cin[0]}
                    </p>
                  )}
                </div>

                <div className="mb-[20px]">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className={
                      error.email !== ""
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    placeholder="exemple@gmail.com"
                    required
                    onChange={HandleChangeData}
                  />
                  {error.email && (
                    <p className="mt-2 text-[11px] text-red-600 dark:text-red-500">
                      {error.email[0]}
                    </p>
                  )}
                </div>

                <div className="grid gap-6 mb-[15px] md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="Password"
                      className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="text"
                      id="Password"
                      name="password"
                      className={
                        error.password !== ""
                          ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          : "bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      placeholder="•••••••••"
                      required
                      onChange={HandleChangeData}
                    />
                    {error.password && (
                      <p className="mt-2 text-[11px] text-red-600 dark:text-red-500">
                        {error.password[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="PasswordConfirmation"
                      className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                    >
                      Confirmation mot de passe
                    </label>
                    <input
                      type="text"
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full    py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="•••••••••"
                      required
                      onChange={HandleChangeData}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-full ">
                  <AuthButton Text="Créer un compte" Loading={loading} />
                </div>
              </form>
              <div className="  flex justify-center items-center mb-4 ">
                <p className="mt-4 text-[14px] text-gray-500 sm:mt-0">
                  Vous avez déjà un compte?
                  <Link to="/doctor/login" className="text-gray-700 underline">
                    {" "}
                    Connexion
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <Footer colorText="white" />
        </div>
      </div>
    </>
  );
};

export default Signup;
