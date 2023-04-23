import { axiosProvider } from '../lib/axios';
import axios from "axios";
const { axiosInstance } = axiosProvider();

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
    await axiosInstance.post(`${BASE_URL}/account/logout`);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
};