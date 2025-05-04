import axiosInstance from "./axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  NewPasswordProps,
  NewPasswordResponse,
  ResetPasswordProps,
  ResetPasswordResponse,
  updatePasswordProps,
  updatePasswordResponse,
  userDetailsResponse,
} from "@/types/user";

async function getUserDetails(): Promise<userDetailsResponse> {
  const response = await axiosInstance.get<userDetailsResponse>(``);
  return response.data;
}

export function useGetUserDetails() {
  return useQuery<userDetailsResponse>({
    queryFn: getUserDetails,
    queryKey: ["userDetails"],
  });
}

async function ResetPassword(
  data: ResetPasswordProps
): Promise<ResetPasswordResponse> {
  const response = await axiosInstance.post<ResetPasswordResponse>(``, data);
  return response.data;
}

export function useResetPassword() {
  return useMutation<ResetPasswordResponse, AxiosError, ResetPasswordProps>({
    mutationFn: ResetPassword,
    onSuccess: (data) => {
      toast.success(
        data.message ||
          "The user password reset link has been sent to your email address"
      );
    },
    onError: (error) => {
      toast.error(error.message || "Failed sending password reset link");
    },
  });
}

async function NewPassword(
  data: NewPasswordProps
): Promise<NewPasswordResponse> {
  const response = await axiosInstance.post<NewPasswordResponse>(``, data);
  return response.data;
}

export function useNewPassword() {
  return useMutation<NewPasswordResponse, AxiosError, NewPasswordProps>({
    mutationFn: NewPassword,
    onSuccess: (data) => {
      toast.success(data.message || "Password reset successful");
    },
    onError: (error) => {
      toast.error(error.message || "Password reset failed");
    },
  });
}

async function updatePassword(
  data: updatePasswordProps
): Promise<updatePasswordResponse> {
  const response = await axiosInstance.post<updatePasswordResponse>(``, data);
  return response.data;
}

export function useUpdatePassword() {
  return useMutation<updatePasswordResponse, AxiosError, updatePasswordProps>({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      toast.success(data.message || "Password updated successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update password");
    },
  });
}
