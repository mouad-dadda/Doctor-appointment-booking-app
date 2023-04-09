import { createSlice } from "@reduxjs/toolkit";
import { get } from "../Services/LocalStorageService";

const initialState = {
  isAuthenticated: get("TOKEN") ? true : false,
  userToken: get("TOKEN") || null,
  user: null,
};

const AuthUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    signUpSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.userToken = action.payload.token;
    },
    addUserData:(state,action)=>{
      state.user=action.payload
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.userToken = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { signUpSuccess, loginSuccess, logout ,addUserData } = AuthUserSlice.actions;

export default AuthUserSlice.reducer;
