import axios from 'axios';
import { store } from '../redux/store';
import { parseCookies } from 'nookies'; // Import the parseCookies function from nookies

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

export const setAuthorizationHeader = () => {
  const { serviceToken } = parseCookies(); // Get the 'serviceToken' cookie using nookies
  if (serviceToken) {
    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${serviceToken}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

const unsubscribe = store.subscribe(() => {
  setAuthorizationHeader();
});

export const axiosProvider = () => {
  return { axiosInstance };
};
