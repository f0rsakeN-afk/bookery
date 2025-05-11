import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { allProductTypesResponse, productDetailTypes } from "@/types/product";

async function getAllProducts(): Promise<allProductTypesResponse> {
  const response = await axiosInstance.get<allProductTypesResponse>(`product/`);
  return response.data;
}

export function useGetAllProducts() {
  return useQuery<allProductTypesResponse>({
    queryKey: ["allproducts"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: true,
  });
}

async function getProductDetails(id: string): Promise<productDetailTypes> {
  const response = await axiosInstance.get<productDetailTypes>(`product/${id}`);
  return response.data;
}

export function useGetProductDetails(id: string) {
  return useQuery<productDetailTypes>({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id),
    enabled: !!id,
    refetchOnWindowFocus: true,
  });
}
