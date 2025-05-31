import { allProductTypesResponse } from "@/types/product";
import axiosInstance from "./axios";
import { useQuery } from "@tanstack/react-query";

async function getAllProducts(): Promise<allProductTypesResponse> {
  const response = await axiosInstance.get<allProductTypesResponse>(`product/?limit=12`);
  return response.data;
}

export function useGetAllProducts() {
  return useQuery<allProductTypesResponse>({
    queryKey: ["productListHome"],
    queryFn: getAllProducts,
  });
}
