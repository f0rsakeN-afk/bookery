import { useNavigate } from "react-router-dom";
import axiosInstance from "./axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ContactProps, ContactResponse } from "@/types/contact";

async function contact(data: ContactProps): Promise<ContactResponse> {
  const response = await axiosInstance.post(``, data);
  return response.data;
}

export function useContact() {
  const navigate = useNavigate();
  return useMutation<ContactResponse, AxiosError, ContactProps>({
    mutationFn: contact,
    onSuccess: (data) => {
      toast.success(data.message || "Form submitted successfully");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message || "Form submission failed");
    },
  });
}
