import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";

async function getMyCart() {
  const response = await axiosInstance.get(`cart/`);
  return response.data;
}

export function useGetMyCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getMyCart,
    refetchOnWindowFocus: false,
  });
}
