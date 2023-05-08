import React from "react";
import { Footer, Header, UserNavSettings } from "../../Components";

const ChangePassword = () => {
  return (
    <div>
      <Header />
      <div className="_container my-8 flex ">
        <UserNavSettings />
        <div className=" w-[75%]  ">
          <div className="ml-7 ">
            <form className=" w-[55%] ">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
