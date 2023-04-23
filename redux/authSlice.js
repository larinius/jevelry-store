import { createSlice } from "@reduxjs/toolkit";
import { loginApi, logoutApi } from "./apiHooks";

const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.serviceToken;
      state.user = action.payload.user;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      state.error = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const user = await loginApi(credentials);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await logoutApi();
    dispatch(logout());
  } catch (error) {
    console.log(error);
  }
};

export const authReducer = authSlice.reducer;
