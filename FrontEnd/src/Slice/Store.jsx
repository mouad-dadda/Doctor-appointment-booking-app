import { configureStore } from "@reduxjs/toolkit";
import SliceAuthUser from "./SliceAuthUser";

const store = configureStore({
  reducer: {
    authUser:SliceAuthUser ,
  },
});

export default store