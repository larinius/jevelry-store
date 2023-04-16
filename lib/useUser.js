import axios from "axios";

import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function useUser() {
  const queryClient = useQueryClient();
  const apiUrl = `/api/user`;

  const { isLoading, error, data } = useQuery([apiUrl], () => axios.get(apiUrl));

  const user = data?.data;

  return { isLoading, error, user };
}
