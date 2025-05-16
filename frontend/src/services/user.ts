import axiosInstance from "./axios";
import { toast } from "sonner";
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
import { useNavigate } from "react-router-dom";

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
  const response = await axiosInstance.post<ResetPasswordResponse>(
    `/users/forgetpassword`,
    data
  );
  return response.data;
}

export function useResetPassword() {
  return useMutation<ResetPasswordResponse, AxiosError, ResetPasswordProps>({
    mutationFn: ResetPassword,
    onSuccess: (data) => {
      toast.message(
        data.message ||
          "The user password reset link has been sent to your email address"
      );
    },
    onError: (error) => {
      toast.error(error.message || "Failed sending password reset link");
    },
  });
}

async function NewPassword({data,token}:NewPasswordProps): Promise<NewPasswordResponse> {
  const response = await axiosInstance.patch<NewPasswordResponse>(
    `/users/newpassword/${token}`,
    data
  );
  return response.data;
}

export function useNewPassword() {
  const navigate = useNavigate();
  return useMutation<NewPasswordResponse, AxiosError, NewPasswordProps>({
    mutationFn: NewPassword,
    onSuccess: (data) => {
      toast.message(data.message || "Password reset successful");
      navigate("/login");
    },
    onError: (error) => {
      console.log(error)
      toast.error(error.message || "Password reset failed");
    },
  });
}

async function updatePassword(
  {data,id}: updatePasswordProps
): Promise<updatePasswordResponse> {
  const response = await axiosInstance.post<updatePasswordResponse>(`/users/updatepassword/${id}`, data);
  return response.data;
}

export function useUpdatePassword() {
  return useMutation<updatePasswordResponse, AxiosError, updatePasswordProps>({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      toast.message(data.message || "Password updated successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update password");
    },
  });
}
