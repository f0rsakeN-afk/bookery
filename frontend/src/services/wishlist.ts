import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { toast } from "sonner";

async function getWishlist() {
  const response = await axiosInstance.get(``);
  return response.data;
}

export function useGetWishlist() {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });
}

async function addToWishlist() {
  const response = await axiosInstance.post(``);
  return response.data;
}

export function useAddToWishlist() {
  return useMutation({
    mutationFn: addToWishlist,
    onSuccess: (data) => {
      toast(data.message || "Added to wishlist successfully");
    },
    onError: (error) => {
      toast(error.message || "Failed adding to the wishlist");
    },
  });
}
