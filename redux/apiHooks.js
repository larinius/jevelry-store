import { logoutSuccess, logoutFailure } from "./authSlice";
import { axiosProvider } from "../lib/axios";

const { axiosInstance: axios } = axiosProvider();

const BASE_URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`;

export const loginApi = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/account/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await axios.post("/auth/logout");

    if (response.status === 200) {
      dispatch(logoutSuccess());
    } else {
      throw new Error("Failed to log out.");
    }
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
};
