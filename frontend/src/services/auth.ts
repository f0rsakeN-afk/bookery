import { AxiosError } from "axios";
import axiosInstance from "./axios";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import {
  LoginProps,
  LoginResponse,
  RegisterProps,
  RegisterResponse,
} from "@/types/auth";

async function Login(data: LoginProps): Promise<LoginResponse> {
  const response = await axiosInstance.post<LoginResponse>(``, data);
  return response.data;
}

export function useLogin() {
  return useMutation<LoginResponse, AxiosError, LoginProps>({
    mutationFn: Login,
    onSuccess: (data) => {
      console.log(data);
      toast(data.message || "User logged in successfully");
    },
    onError: (error) => {
      console.log(error);
      toast(error.message);
    },
  });
}

async function Register(data: RegisterProps): Promise<RegisterResponse> {
  const response = await axiosInstance.post<RegisterResponse>(``, data);
  return response.data;
}

export function useRegister() {
  return useMutation<RegisterResponse, AxiosError, RegisterProps>({
    mutationFn: Register,
    onSuccess: (data) => {
      toast(data.message || "User registration successfull");
    },
    onError: (error) => {
      toast(error.message || "User registration failed");
    },
  });
}

async function Logout() {
  const response = await axiosInstance.get(``);
  return response.data;
}

export function useLogout() {
  return useMutation({
    mutationFn: Logout,
    onSuccess: (data) => {
      toast(data.message || "Logged out successfully");
    },
    onError: (error) => {
      toast(error.message || "Logout failed");
    },
  });
}
