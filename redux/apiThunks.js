import { logoutSuccess, logoutFailure } from "./authSlice";
import { axiosInstance } from "../lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",

  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/account/login`, credentials);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, { dispatch, rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(`/account/logout`);

    if (response.status === 200) {
      dispatch(logoutSuccess());
    } else {
      throw new Error("Failed to log out.");
    }
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
