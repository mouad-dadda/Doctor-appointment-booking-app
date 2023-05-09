import React from "react";
import { Footer, Header } from "../Components";

const BookingAppointment = () => {
  return (
    <>
      <div className=" absolute w-[100%] h-[100vh]  img_bg">
        <div className=" relative bg-black  bg-opacity-75 ">
          <Header />
          <main className="h-[80.65vh] flex justify-center items-center ">
            <div className=" bg-white w-[40%] h-[60%] rounded-sm p-3 "></div>
          </main>
          <Footer colorText="white" />
        </div>
      </div>
    </>
  );
};

export default BookingAppointment;
