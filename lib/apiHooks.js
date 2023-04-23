/* eslint-disable no-unused-vars */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosProvider } from "./axios";
const { axiosInstance: axios } = axiosProvider();

import { useSelector, useDispatch } from "react-redux";

export function useBrand(id) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/brand`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["brand", id], () => axios.get(query).then((res) => res.data));

  const brand = data || null;

  return { isLoading, error, refetch, brand };
}

export function useProduct(id, options = {}) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/product`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}?${options}`;

  const key = id ? id : "all";

  const { isLoading, error, data, refetch } = useQuery(["product", key, options], () => axios.get(query).then((res) => res.data));

  const product = !isLoading && !error ? data : [];

  return { isLoading, error, refetch, product };
}

export function useCategory(id) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/category`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["category", id], () => axios.get(query).then((res) => res.data));

  const category = data || null;

  return { isLoading, error, refetch, category };
}

export function useCustomer(id) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["user", id], () => axios.get(query).then((res) => res.data));

  const customer = data || null;

  return { isLoading, error, refetch, customer };
}

export function useUser() {

  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/account/me`;
  const auth = useSelector((state) => state.auth);
  
  const isEnabled = auth?.isLoggedIn;
  const { axiosInstance: axios } = axiosProvider();

  const { isLoading, error, refetch, data } = useQuery(
    ["user"],
    async () => {
      return axios.get(apiUrl);
    },
    {
      enabled: isEnabled,
      retry: 1,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
    },
  );

  const user = !isLoading && !error ? data?.data : {};

  return { isLoading, error, refetch, user };
}

export function useCustomerGroup(id) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/usergroup`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["customer group", id], () => axios.get(query).then((res) => res.data));

  const customerGroup = data || null;

  return { isLoading, error, refetch, customerGroup };
}

export function useOrder(id) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/order`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["order", id], () => axios.get(query).then((res) => res.data));

  const order = data || null;

  return { isLoading, error, refetch, order };
}

export function useOrderStatus(id) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/orderstatus`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["orderStatus", id], () => axios.get(query).then((res) => res.data));

  const orderStatus = data || null;

  return { isLoading, error, refetch, orderStatus };
}

export function useOrderCode() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ordercode`;

  const query = apiUrl;

  const { isLoading, error, data, refetch } = useQuery(["new ordercode"], () => axios.get(query).then((res) => res.data));

  const ordercode = data || null;

  return { isLoading, error, refetch, ordercode };
}

export function useCreateOrder(order) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/order`;

  const query = `${apiUrl}`;

  const createOrder = useMutation((payload) => axios.post(apiUrl, payload), {
    onSuccess: () => {
      queryClient.invalidateQueries(["order"]);
    },
  });

  const { isLoading, error, data } = createOrder.mutate({ url: apiUrl, order: order });

  const newOrder = data || null;

  return { isLoading, error, newOrder };
}

export function useSearch(term) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/search-product`;

  const query = `${apiUrl}/?q=${term}`;

  const { isLoading, error, data, refetch } = useQuery(["search product", term], () => axios.get(query).then((res) => res.data));

  const search = data || null;

  return { isLoading, error, refetch, search };
}

export function useSettings() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/settings`;

  const { isLoading, error, data, refetch } = useQuery(["settings"], () => axios.get(apiUrl).then((res) => res.data));

  const settings = data || [];

  return { isLoading, error, refetch, settings };
}
