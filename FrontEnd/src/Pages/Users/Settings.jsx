import React, { useEffect, useState } from "react";
import { Footer, Header, UserNavSettings } from "../../Components";
import {  useSelector } from "react-redux";
import axiosClient from "../../AxiosClient";
import GetAuthUser from "../../hooks/GetAuthUser";

const Settings = () => {
  const UserData = useSelector((state) => state.authUser);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [UserAvatar, setUserAvatar] = useState(null);

  const [GetUserAvatar, setGetUserAvatar] = useState(null);

  const [DataForm, setDataForm] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    cin: "",
  });

  GetAuthUser();

  useEffect(() => {
    if (UserData.user && UserData.user.user_avatar !== null) {
      setGetUserAvatar(UserData.user.user_avatar);
    }

    if (UserData.user) {
      setDataForm({
        id: UserData.user.id,
        firstname: UserData.user.firstname,
        lastname: UserData.user.lastname,
        email: UserData.user.email,
        cin: UserData.user.cin,
      });
    }
  }, [UserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...DataForm, [name]: value });
  };

  const handleFile = (e) => {
    setUserAvatar(e.target.files[0]);
  };

  console.log(UserData);
  console.log(UserAvatar);
  console.log(DataForm);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("inside");
    let DataSend = {};
    if (UserAvatar !== null && UserAvatar !== UserData.user.user_avatar) {
      DataSend = { ...DataForm, user_avatar: UserAvatar };
    } else {
      DataSend = { ...DataForm };
    }

    console.log(DataSend);
    axiosClient
      .put("/user/update", DataSend)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="_container my-8 flex ">
        <UserNavSettings />
        <div className=" w-[75%] ">
          <form onSubmit={HandleSubmit}>
            <div className=" ml-7   ">
              <div className="p-4 mb-4 bg-white   ">
                <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                  <img
                    className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                    src={
                      GetUserAvatar == null
                        ? "/img/Rectangle 4.jpg"
                        : "http://localhost:8000/storage/images/users/" +
                          GetUserAvatar
                    }
                    alt=""
                  />
                  <div>
                    <h3 className="mb-1  text-sm  font-bold">
                      Profile picture
                    </h3>
                    <div className="mb-4 text-[11px] text-gray-500 ">
                      JPG, GIF or PNG. Max size of 800K
                    </div>
                    <div className="flex items-center space-x-4">
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
                          name="user_avatar"
                          onChange={handleFile}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  ml-16 ">
              <h3 className="mb-7  text-sm  ">Personal Information :</h3>

              <div className=" w-[55%] ">
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
                      value={DataForm.firstname}
                      className={
                        "bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      onChange={handleChange}
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
                      value={DataForm.lastname}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Nom"
                      required
                    />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <label
                    htmlFor="cin"
                    className="block mb-1 text-[14px]  font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="cin"
                    name="cin"
                    value={DataForm.cin}
                    onChange={handleChange}
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="jj99999"
                    required
                  />
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
                    value={DataForm.email}
                    onChange={handleChange}
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="exemple@gmail.com"
                    required
                  />
                </div>
                <button className="inline-flex items-center px-3 py-2 text-[12px]  text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
          <div className="  ml-16 mt-7 ">
            <h3 className="mb-2  text-sm  text-red-600 ">Delete Account :</h3>
            <p className=" mb-5 text-[16px] ">
              Do you want to delete the account? Please press below "Delete"
              button
            </p>
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
