import React, { useEffect, useState } from "react";
import { AlertErrorMessage, Footer, Header } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { get, storeInLocalStorage } from "../../Services/LocalStorageService";
import { useNavigate } from "react-router";
import axiosClient from "../../AxiosClient";
import { loginSuccess } from "../../Redux/SliceAuthUser";
import { Link } from "react-router-dom";

const Login = () => {
  document.title = "Doctors Connexion";

  const userData = useSelector((state) => state.authUser);
  const navigate = useNavigate();
  console.log(userData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.isAuthenticated && get("TOKEN")) {
      navigate("/user/profile");
    }
  }, [navigate, userData.isAuthenticated]);

  const [DataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const HandleChangeData = (ev) => {
    const { name, value } = ev.target;
    setDataForm({ ...DataForm, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    axiosClient
      .post("/login", DataForm)
      .then(({ data }) => {
        console.log({ data });
        dispatch(loginSuccess(data));

        storeInLocalStorage("TOKEN", data.token);

        navigate("/user/profile");
      })
      .catch((err) => {
        if (err.response && err.response.status === 422) {
          setError(err.response.data.error);
        } else {
          console.log(err);
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
                    Welcome to Doctolib
                  </h1>
                </div>
                <div>
                  <p className=" text-[14px] text-slate-400	">
                    {" "}
                    Vous creez votre premier compte doctolib pour obtenir un
                    rendez-vous avec un medcine !!{" "}
                  </p>
                </div>
              </div>
              {error && <AlertErrorMessage message={error} />}
              <form className="  p-5 pl-8 pr-8 " onSubmit={HandleSubmit}>
                <div className="mb-[20px]">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="exemple@gmail.com"
                    required
                    onChange={HandleChangeData}
                  />
                </div>

                <div className="mb-[20px]">
                  <label
                    htmlFor="Password"
                    className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    required
                    onChange={HandleChangeData}
                  />
                </div>
                <div className=" mb-2">
                  <a href="/tets" className="  flex  flex-row-reverse ">
                    <span className="text-medium tracking-wide text-[13px] text-blue-600">
                      Mot de passe oublié ?
                    </span>
                  </a>
                </div>
                <div className="flex justify-center items-center w-full ">
                  <button
                    type="submit"
                    className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[12px]   px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    se connecter
                  </button>
                </div>
              </form>
              <div className="  flex justify-center items-center mb-4 ">
                <p className="mt-4 text-[14px] text-gray-500 sm:mt-0">
                  Vous n'avez pas de compte ?
                  <Link to="/identifier" className="text-gray-700 underline">
                    {" "}
                    S'identifier
                  </Link>
                  .
                </p>
              </div>
              <div className="  flex justify-center items-center ">
                <p className="mt-4 text-[14px] text-blue-600 sm:mt-0">
                  <a href="/test">Etes-vous un docteur ??</a>
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

export default Login;
