import React from "react";
import { Link } from "react-router-dom";

const PageNotfond = () => {
  document.title = "Not fond";
  return (
    <>
      <div className="  flex justify-center items-center ">
        <img src="/img/36395-lonely-404.gif" alt="" />
      </div>
      <div className="  absolute  " style={{ top: "64%", left: "46%" }}>
        <Link to={"/"}>
          <button className="px-4 py-2 mt-4 text-lg text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-100 focus:outline-none">
            Go Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default PageNotfond;
