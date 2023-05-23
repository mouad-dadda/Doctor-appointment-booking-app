import { configureStore } from "@reduxjs/toolkit";
import SliceAuthUser from "./SliceAuthUser";
import AuthDoctorSlice from "./SliceAuthDoctor";
import SliceAuthAdmin from "./SliceAuthAdmin";

const store = configureStore({
  reducer: {
    authUser: SliceAuthUser,
    AuthDoctor: AuthDoctorSlice,
    AuthAdmin:SliceAuthAdmin
  },
});

export default store;
