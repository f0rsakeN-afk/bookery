import { allProductTypesResponse } from "@/types/product";
import axiosInstance from "./axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  deleteProductProps,
  deleteProductResponse,
  getAllUsersResponse,
  productTypes,
} from "@/types/dashboard";
import { AxiosError } from "axios";

async function getAllProducts(): Promise<allProductTypesResponse> {
  const response = await axiosInstance.get<allProductTypesResponse>(
    `product/?limit=100`
  );
  return response.data;
}

export function useGetAllProducts() {
  return useQuery<allProductTypesResponse>({
    queryKey: ["dashboardAllProducts"],
    queryFn: getAllProducts,
  });
}

async function deleteProduct({
  id,
}: deleteProductProps): Promise<deleteProductResponse> {
  const response = await axiosInstance.delete<deleteProductResponse>(
    `product/${id}`
  );
  return response.data;
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation<deleteProductResponse, AxiosError, deleteProductProps>({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["dashboardAllProducts"],
      });
      queryClient.invalidateQueries({ queryKey: ["productListHome"] });
      queryClient.invalidateQueries({
        queryKey: ["allproducts"],
        exact: false,
      });
      toast.success(data.message || "Product deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Product deletion failed");
    },
  });
}

async function getAllUsers(): Promise<getAllUsersResponse> {
  const response = await axiosInstance.get<getAllUsersResponse>("users/");
  return response.data;
}

export function useGetAllUsers() {
  return useQuery<getAllUsersResponse>({
    queryKey: ["allusers"],
    queryFn: getAllUsers,
    refetchOnWindowFocus: true,
    staleTime: 9000,
  });
}

//@ts-ignore
async function addProduct(productData: productTypes) {
  const response = await axiosInstance.post(`product/`, productData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export function useAddProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["dashboardAllProducts"],
      });
      queryClient.invalidateQueries({ queryKey: ["productListHome"] });
      queryClient.invalidateQueries({
        queryKey: ["allproducts"],
        exact: false,
      });
      toast.success(data.message || "Product added successfully");
    },
    onError: (err: any) => {
      toast.error(err.message || "Failed to add product");
    },
  });
}

export interface updateProductProps {
  data: productTypes;
  id: string;
}

async function updateProduct({ data, id }: updateProductProps) {
  const response = await axiosInstance.patch(`product/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["dashboardAllProducts"],
      });
      queryClient.invalidateQueries({ queryKey: ["productListHome"] });
      queryClient.invalidateQueries({
        queryKey: ["allproducts"],
        exact: false,
      });
      queryClient.invalidateQueries({
        queryKey: ["productDetails"],
        exact: false,
      });
      toast.success(data.message || "Product updated successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to update the product");
    },
  });
}
