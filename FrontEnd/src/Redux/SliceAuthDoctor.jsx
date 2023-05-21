import { createSlice } from "@reduxjs/toolkit";
import { get } from "../Services/LocalStorageService";

const initialState = {
  isAuthenticated: get("TOKEN_DOCTOR") ? true : false,
  doctorToken: get("TOKEN_DOCTOR") || null,
  doctor: null,
};

const AuthDoctorSlice = createSlice({
  name: "authdoctor",
  initialState,
  reducers: {
    signUpSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.doctor = action.payload.doctor;
      state.doctorToken = action.payload.token;
    },
    showAlertToAuth: (state, action) => {
      state.showAlertToAuth = action.payload;
    },
    addDoctorData: (state, action) => {
      state.doctor = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.doctor = action.payload.doctor;
      state.doctorToken = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.doctor = null;
      state.doctorToken = null;
    },
  },
});

export const { signUpSuccess, loginSuccess, logout, addDoctorData , showAlertToAuth} =
AuthDoctorSlice.actions;

export default AuthDoctorSlice.reducer;
