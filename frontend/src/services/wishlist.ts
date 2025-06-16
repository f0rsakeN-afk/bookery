import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { toast } from "sonner";

async function getWishlist() {
  const response = await axiosInstance.get(`wishlist/`);
  return response.data;
}

export function useGetWishlist() {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
    refetchOnWindowFocus: true,
  });
}

async function addToWishlist(data) {
  const response = await axiosInstance.post(`wishlist/`, data);
  return response.data;
}

export function useAddToWishlist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addToWishlist,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success(data.message || "Added to wishlist successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message || "Failed adding to the wishlist");
    },
  });
}

async function removeFromWishlist({ productId }: { productId: string }) {
  const response = await axiosInstance.delete(`wishlist/${productId}`);
  return response.data;
}

export function useRemoveFromWishlist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ productId }: { productId: string }) =>
      removeFromWishlist({ productId }),
    mutationKey: ["deleteWishlist"],
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success(data.message);
    },
    onError: (error) => {
      /*       console.log(error); */
      toast.error(
        error.message || "Failed to remove product from the wishlist"
      );
    },
  });
}
