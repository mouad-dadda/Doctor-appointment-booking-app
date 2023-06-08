import React from "react";
import { Footer, Header } from "../../Components";

const WhaitingConfirmation = () => {
  return (
    <>
      <div className=" absolute w-[100%] h-[100vh]  img_bg">
        <div className=" relative bg-black  bg-opacity-75 ">
          <Header />
          <main className="h-[80.65vh] flex justify-center items-center ">
            <div className="  bg-slate-100 flex justify-center items-center  w-[40%] h-[35%] p-2 rounded-lg ">
              <div className="max-w-xl px-5 text-center">
                <h2 className="mb-2 text-[23px] font-bold text-zinc-800">
                  Whaiting To Conferm Your Account
                </h2>
                <p className="mb-2 text-[16px] text-zinc-500">
                  We Contect Wed You in email wen we ned samting
                </p>
              </div>
            </div>
          </main>
          <Footer colorText="white" />
        </div>
      </div>
    </>
  );
};

export default WhaitingConfirmation;
