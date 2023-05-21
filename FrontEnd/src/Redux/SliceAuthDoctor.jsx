import { createSlice } from "@reduxjs/toolkit";
import { get } from "../Services/LocalStorageService";

const initialState = {
  isAuthenticated: get("TOKEN_DOCTOR") ? true : false,
  doctorToken: get("TOKEN_DOCTOR") || null,
  doctor: null,
};

const AuthDoctorSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    signUpSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.userToken = action.payload.token;
    },
    showAlertToAuth: (state, action) => {
      state.showAlertToAuth = action.payload;
    },
    addUserData: (state, action) => {
      state.user = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.userToken = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.userToken = null;
    },
  },
});

export const { signUpSuccess, loginSuccess, logout, addUserData , showAlertToAuth} =
AuthDoctorSlice.actions;

export default AuthDoctorSlice.reducer;
