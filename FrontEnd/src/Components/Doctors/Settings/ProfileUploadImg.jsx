import React from "react";

const ProfileUploadImg = () => {
  return (
    <>
      {/* <!-- Profile Upload Img --> */}
      <div className="col-span-full xl:col-auto">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 lg:p-4 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <img
              className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
              src="/img/Rectangle 4.jpg"
              alt="Jese"
            />
            <div>
              <h3 className="mb-1 text-xl lg:text-lg font-bold text-gray-900 dark:text-white">
                Profile picture
              </h3>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                JPG, GIF or PNG. Max size of 800K
              </div>
              <div className="flex items-center space-x-4">
                <form>
                  <label
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    htmlFor="DownloadFile"
                  >
                    Upload picture
                  </label>
                  <input className=" hidden " id="DownloadFile" type="file" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUploadImg;
