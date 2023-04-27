/* eslint-disable no-unused-vars */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  withCredentials: true, // Enable sending cookies with the request
});

export function useBrand(id) {
  const apiUrl = `/brand`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["brand", id], () => axiosInstance.get(query).then((res) => res.data));

  const brand = data || null;

  return { isLoading, error, refetch, brand };
}

export function useProduct(id, options = {}) {
  const apiUrl = `/product`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}?${options}`;

  const key = id ? id : "all";

  const { isLoading, error, data, refetch } = useQuery(["product", key, options], () => axiosInstance.get(query).then((res) => res.data));

  const product = !isLoading && !error ? data : [];

  return { isLoading, error, refetch, product };
}

export function useCategory(id) {
  const apiUrl = `/category`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["category", id], () => axiosInstance.get(query).then((res) => res.data));

  const category = data || null;

  return { isLoading, error, refetch, category };
}

export function useCustomer(id) {
  const apiUrl = `/user`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["user", id], () => axiosInstance.get(query).then((res) => res.data));

  const customer = data || null;

  return { isLoading, error, refetch, customer };
}

export function useUser() {
  const apiUrl = `/account/me`;
  const auth = useSelector((state) => state.auth);

  const isEnabled = auth?.isLoggedIn;

  const { isLoading, error, refetch, data } = useQuery(
    ["user"],
    async () => {
      return axiosInstance.get(apiUrl);
    },
    {
      enabled: isEnabled,
      retry: 1,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
    },
  );

  const user = !isLoading && !error ? data?.data.user : {};

  return { isLoading, error, refetch, user };
}

export function useCustomerGroup(id) {
  const apiUrl = `/usergroup`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["customer group", id], () => axiosInstance.get(query).then((res) => res.data));

  const customerGroup = data || null;

  return { isLoading, error, refetch, customerGroup };
}

export function useOrder(id) {
  const apiUrl = `/order`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}/my`;

  const { isLoading, error, data, refetch } = useQuery(["order", id], () => axiosInstance.get(query).then((res) => res.data));

  const order = data || null;

  return { isLoading, error, refetch, order };
}

export function useOrderStatus(id) {
  const apiUrl = `/orderstatus`;

  const query = id ? `${apiUrl}/${id}` : `${apiUrl}`;

  const { isLoading, error, data, refetch } = useQuery(["orderStatus", id], () => axiosInstance.get(query).then((res) => res.data));

  const orderStatus = data || null;

  return { isLoading, error, refetch, orderStatus };
}

export function useOrderCode() {
  const apiUrl = `/ordercode`;

  const query = apiUrl;

  const { isLoading, error, data, refetch } = useQuery(["new ordercode"], () => axiosInstance.get(query).then((res) => res.data));

  const ordercode = data || null;

  return { isLoading, error, refetch, ordercode };
}

export function useCreateOrder(order) {
  const queryClient = useQueryClient();
  const apiUrl = `/order`;

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
  const apiUrl = `/search-product`;

  const query = `${apiUrl}/?q=${term}`;

  const { isLoading, error, data, refetch } = useQuery(["search product", term], () => axiosInstance.get(query).then((res) => res.data));

  const search = data || null;

  return { isLoading, error, refetch, search };
}

export function useSettings() {
  const apiUrl = `/settings`;

  const { isLoading, error, data, refetch } = useQuery(["settings"], () => axiosInstance.get(apiUrl).then((res) => res.data));

  const settings = data || [];

  return { isLoading, error, refetch, settings };
}
