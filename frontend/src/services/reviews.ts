import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  addReviewProps,
  addReviewResponse,
  deleteProps,
  deleteReviewResponse,
  updateReviewProps,
} from "@/types/review";

async function addReview({
  dataWithReview,
}: addReviewProps): Promise<addReviewResponse> {
  const response = await axiosInstance.post<addReviewResponse>(
    "/review/",
    dataWithReview
  );
  return response.data;
}

export function useAddReview() {
  const queryClient = useQueryClient();
  return useMutation<addReviewResponse, AxiosError, addReviewProps>({
    mutationFn: addReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["productDetails"],
        exact: false,
      });
      toast.success(data.message || "Review posted successfully");
    },
    onError: (err: any) => {
      toast.error(err.response?.data.message || "Failed to post review");
    },
  });
}

async function deleteReview({
  id,
}: deleteProps): Promise<deleteReviewResponse> {
  const response = await axiosInstance.delete<deleteReviewResponse>(
    `/review/${id}`
  );
  return response.data;
}

export function useDeleteReview() {
  const queryClient = useQueryClient();
  return useMutation<deleteReviewResponse, AxiosError, deleteProps>({
    mutationFn: deleteReview,
    mutationKey: ["deleteReview"],
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["productDetails"],
        exact: false,
      });
      toast.success(data.message || "Review deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message || "Review deletion failed");
    },
  });
}

async function updateReview({
  id,
  dataWithRating,
}: updateReviewProps): Promise<addReviewResponse> {
  const response = await axiosInstance.patch<addReviewResponse>(
    `/review/${id}`,
    dataWithRating
  );
  return response.data;
}

export function useUpdateReview() {
  const queryClient = useQueryClient();
  return useMutation<addReviewResponse, AxiosError, updateReviewProps>({
    mutationFn: updateReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["productDetails"],
        exact: false,
      });
      toast.success(data.message || "Review updated successfully");
    },
    onError: (err) => {
      toast.error(err.message || "Failed to update review");
    },
  });
}
