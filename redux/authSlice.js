import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./apiThunks";

const initialState = {
  isLoggedIn: false,
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
      state.user = action.payload.user;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
      state.isLoading = false;
    },
    logoutStart: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    logoutFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
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

export const authReducer = authSlice.reducer;
