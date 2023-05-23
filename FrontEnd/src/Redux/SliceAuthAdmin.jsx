import { createSlice } from "@reduxjs/toolkit";
import { get } from "../Services/LocalStorageService";

const initialState = {
  isAuthenticated: get("TOKEN_ADMIN") ? true : false,
  adminToken: get("TOKEN_ADMIN") || null,
  admin: null,
};

const AuthAdminSlice = createSlice({
  name: "authAdmin",
  initialState,
  reducers: {
    signUpSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.admin = action.payload.admin;
      state.adminToken = action.payload.token;
    },
    addAdminData: (state, action) => {
      state.admin = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.admin = action.payload.admin;
      state.adminToken = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
      state.adminToken = null;
    },
  },
});

export const {
  signUpSuccess,
  loginSuccess,
  logout,
  addAdminData,
} = AuthAdminSlice.actions;

export default AuthAdminSlice.reducer;
