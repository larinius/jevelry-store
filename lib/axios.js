import axios from "axios";
import React, { createContext, useContext } from "react";

const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    withCredentials: true, // Enable sending cookies with the request
  });

  return <AxiosContext.Provider value={axiosInstance}>{children}</AxiosContext.Provider>;
};

export const useAxios = () => {
  const axiosInstance = useContext(AxiosContext);
  return axiosInstance;
};

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  withCredentials: true, // Enable sending cookies with the request
});
