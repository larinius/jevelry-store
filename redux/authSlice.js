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
    logoutStart: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    logoutFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const user = await loginApi(credentials);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutStart());
  try {
    await logoutApi();
    dispatch(logoutSuccess());
    // Clear the cookie
    document.cookie = "serviceToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
};

export const authReducer = authSlice.reducer;
