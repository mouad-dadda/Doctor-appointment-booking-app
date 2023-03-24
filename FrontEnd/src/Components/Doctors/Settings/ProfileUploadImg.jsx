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
              src="img/Rectangle 8.jpg"
              alt="Jese picture"
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
                  <input
                    className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="small_size"
                    type="file"
                  />
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
