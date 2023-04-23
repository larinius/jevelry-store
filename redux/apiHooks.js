import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`;

export const loginApi = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/account/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
