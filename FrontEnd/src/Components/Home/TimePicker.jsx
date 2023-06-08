import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axiosClient from "../../AxiosClient";

function TimePicker({
  minTime,
  maxTime,
  stepInMinutes,
  DateAp,
  idDoctor,
  onChange,
}) {
  const { t } = useTranslation();
  const [reservedTime, setReservedTime] = useState([]);

  // Parse the input minTime and maxTime values to Date objects
  const minTimeDate = new Date(`1970-01-01T${minTime}`);
  const maxTimeDate = new Date(`1970-01-01T${maxTime}`);

  // Convert the stepInMinutes value to seconds
  const stepInSeconds = stepInMinutes * 60;

  // Create an array of Date objects representing each time option
  const timeOptions = [];
  let currTime = minTimeDate;
  while (currTime <= maxTimeDate) {
    timeOptions.push(new Date(currTime));
    currTime = new Date(currTime.getTime() + stepInSeconds * 1000);
  }

  // Format each Date object into a string for display in the option element
  const formattedTimeOptions = timeOptions.map((time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  });

  console.log("workk");

  useEffect(() => {
    if (DateAp !== "") {
      const selectedDate = new Date(DateAp);
      selectedDate.setDate(selectedDate.getDate() + 1); // Decrease date by one day

      const formattedDate = selectedDate.toISOString().slice(0, 10);
      // Fetch reserved time based on DateAp using Axios
      axiosClient
        .post("/appointment/reserved", {
          id: idDoctor,
          dateApointment: formattedDate,
        })
        .then((response) => {
          setReservedTime(response.data);
        })
        .catch((error) => {
          console.log("Error fetching reserved time:", error);
        });
    }
  }, [DateAp , idDoctor]);
  console.log(DateAp);

  console.log(reservedTime);

  return (
    <>
      {DateAp !== "" ? (
        <select
          onChange={onChange}
          id="countries"
          className="bg-gray-50 pl-[44px] border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[7px]"
        >
          <option>{t("TimePicker.Select_Time")}</option>
          {formattedTimeOptions.map((timeStr) => {
            if (reservedTime.includes(timeStr)) {
              return (
                <option key={timeStr} value={timeStr} disabled>
                  {timeStr} (Reserved)
                </option>
              );
            } else {
              return (
                <option key={timeStr} value={timeStr}>
                  {timeStr}
                </option>
              );
            }
          })}
        </select>
      ) : (
        <select
          id="countries"
          className="bg-gray-50 pl-[44px] border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[7px]"
        >
          <option> Select Date To View Time </option>
        </select>
      )}
    </>
  );
}

export default TimePicker;
