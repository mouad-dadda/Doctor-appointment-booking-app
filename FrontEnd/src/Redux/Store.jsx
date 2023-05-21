import { configureStore } from "@reduxjs/toolkit";
import SliceAuthUser from "./SliceAuthUser";
import AuthDoctorSlice from "./SliceAuthDoctor";

const store = configureStore({
  reducer: {
    authUser: SliceAuthUser,
    AuthDoctor: AuthDoctorSlice,
  },
});

export default store;
