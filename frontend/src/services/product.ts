import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { productTypesResponse } from "@/types/product";

async function getAllProducts(): Promise<productTypesResponse> {
  const response = await axiosInstance.get<productTypesResponse>(``);
  return response.data;
}

export function useGetAllProducts() {
  return useQuery<productTypesResponse>({
    queryKey: ["allproducts"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: true,
  });
}

