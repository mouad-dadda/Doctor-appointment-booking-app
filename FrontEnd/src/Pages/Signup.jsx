import React, { useState } from "react";
import { Footer, Header } from "../Components";

const Signup = () => {
  document.title = "S'identifier";

  const [Data, setData] = useState({
    firstname: "",
    lastname: "",
    cin: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const HandleChangeData = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  };

  return (
    <>
      <div className=" absolute w-[100%] h-[133vh]  add_img">
        <div className=" relative bg-black h-[133vh] bg-opacity-75 ">
          <Header />
          <div className="h-[40rem] flex justify-center items-center ">
            <div className="  w-[27rem] rounded-md  bg-white pl-8 pt-7 pr-8 pb-7">
              <div className=" text-center">
                <div className="flex justify-center items-center">
                  <img src="/img/logo.png" className="w-[123px]" alt="" />
                </div>
                <div className="mb-[14px]">
                  <h1 className="mt-4 text-[25px] font-medium text-gray-900 ">
                    Bienvenue sur Doctolib
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Prenom"
                      required
                      onChange={HandleChangeData}
                    />
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full    py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Nom"
                      required
                      onChange={HandleChangeData}
                    />
                  </div>
                </div>

                <div className="mb-[20px]">
                  <label
                    htmlFor="cin"
                    className="block mb-1 text-[12px]  font-medium text-gray-900 dark:text-white"
                  >
                    Cin
                  </label>
                  <input
                    type="text"
                    id="cin"
                    name="cin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cin"
                    onChange={HandleChangeData}
                    required
                  />
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="exemple@gmail.com"
                    required
                    onChange={HandleChangeData}
                  />
                </div>

                <div className="grid gap-6 mb-[15px] md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="Password"
                      className="block mb-1 text-[12px]  font-medium text-red-700 dark:text-white"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="text"
                      id="Password"
                      name="pasword"
                      className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="•••••••••"
                      required
                      onChange={HandleChangeData}
                    />
                    <p className="mt-2 text-[11px] text-red-600 dark:text-red-500">
                      {" "}
                      Some error message.
                    </p>
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
                      name="passwordConfirmation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full    py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="•••••••••"
                      required
                      onChange={HandleChangeData}
                    />
                  </div>
                </div>
                <div className=" mb-2">
                  <a href="/tets" className="  flex  flex-row-reverse ">
                    <span className="text-medium tracking-wide text-[13px] text-blue-600">
                      Mot de passe oublié ?
                    </span>
                  </a>
                </div>
                <div className="flex justify-center items-center w-full ">
                  <button className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[12px]   px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Créer un compte
                  </button>
                </div>
              </form>
              <div className="  flex justify-center items-center mb-4 ">
                <p className="mt-4 text-[14px] text-gray-500 sm:mt-0">
                  Vous avez déjà un compte?
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    Connexion
                  </a>
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Signup;
