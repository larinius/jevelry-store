import { useEffect } from "react";
import Router from "next/router";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


export default function useUser() {
  const queryClient = useQueryClient();
  const apiUrl = `/api/user`;

  const { isLoading, error, data : user } = useQuery(
    [apiUrl],
    () => fetch(apiUrl).then((res) => res.json())
  );

  // useEffect(() => {
  //     console.log(isLoading, error, user);
  // }, [isLoading, error, user]);

  return { isLoading, error, user };
}