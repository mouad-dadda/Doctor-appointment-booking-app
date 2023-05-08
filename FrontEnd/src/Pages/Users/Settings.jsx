import React from "react";
import { Footer, Header, UserNavSettings } from "../../Components";

const Settings = () => {
  return (
    <>
      <Header />
      <div className="_container my-8 flex ">
        <UserNavSettings />
        <div className=" w-[75%] ">
          <div className=" ml-7   ">
            <div className="p-4 mb-4 bg-white   ">
              <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                <img
                  className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                  src="/img/Rectangle 4.jpg"
                  alt="Jese picture"
                />
                <div>
                  <h3 className="mb-1  text-sm  font-bold">Profile picture</h3>
                  <div className="mb-4 text-[11px] text-gray-500 ">
                    JPG, GIF or PNG. Max size of 800K
                  </div>
                  <div className="flex items-center space-x-4">
                    <form>
                      <div>
                        <label
                          className="inline-flex items-center px-3 py-2 text-[12px]  text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
                          htmlFor="DownloadFile"
                        >
                          Upload picture
                        </label>
                        <input
                          className=" hidden "
                          id="DownloadFile"
                          type="file"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  ml-16 ">
            <h3 className="mb-7  text-sm  ">Personal Information :</h3>

            <form className=" w-[55%] ">
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
                      "bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    placeholder="Prenom"
                    required
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nom"
                    required
                  />
                </div>
              </div>
              <div className="mb-[20px]">
                <label
                  htmlFor="email"
                  className="block mb-1 text-[14px]  font-medium text-gray-900 dark:text-white"
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
                />
              </div>
              <button className="inline-flex items-center px-3 py-2 text-[12px]  text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Save Changes
              </button>
            </form>
          </div>
          <div className="  ml-16 mt-7 ">
            <h3 className="mb-2  text-sm  text-red-600 ">Delete Account :</h3>
            <p className=" mb-5 text-[16px] " >Do you want to delete the account? Please press below "Delete" button</p>
            <form className=" w-[55%] ">
              <button className="inline-flex items-center px-3 py-2 text-[12px]  text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 ">
                Delete Acount
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
