import React, { useState } from "react";
import { Footer, Header, TimePicker } from "../Components";

const BookingAppointment = () => {
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <>
      <div className=" absolute w-[100%] h-[100vh]  img_bg">
        <div className=" relative bg-black  bg-opacity-75 ">
          <Header />
          <main className="h-[80.65vh] flex justify-center items-center ">
            <div className=" bg-white w-[40%] h-[60%] rounded-sm p-3 ">
              <div>
                <label>Select a time:</label>
                <TimePicker
                  minTime="08:00"
                  maxTime="20:00"
                  stepInMinutes={46}
                  onChange={handleTimeChange}
                />
                <p>You selected: {selectedTime}</p>
              </div>
            </div>
          </main>
          <Footer colorText="white" />
        </div>
      </div>
    </>
  );
};

export default BookingAppointment;
