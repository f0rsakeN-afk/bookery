import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { toast } from "sonner";
import { addToCartProps } from "@/types/cart";

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

async function addToCart(data: addToCartProps) {
  const response = await axiosInstance.post("cart/", data);
  return response.data;
}

export function useAddToCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success(data.message);
    },
    onError: (error) => {
      /*       console.log(error); */
      toast.error(error.message);
    },
  });
}

async function removeFromCart({ productId }: { productId: string }) {
  const response = await axiosInstance.delete(`cart/${productId}`);
  return response.data;
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeFromCart,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

async function updateCartQuantity({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) {
  const response = await axiosInstance.patch(`cart/${productId}`, { quantity });
  return response.data;
}

export function useUpdateCartQuantity() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCartQuantity,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success(data.message);
    },
    onError: (error) => {
      /*       console.log(error); */
      toast.error(error.message);
    },
  });
}
