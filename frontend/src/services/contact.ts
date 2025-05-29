import { useNavigate } from "react-router-dom";
import axiosInstance from "./axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import {
  ContactProps,
  ContactResponse,
  getAllMessagesResponse,
} from "@/types/contact";

async function contact(dataWithUser: ContactProps): Promise<ContactResponse> {
  console.log(dataWithUser)
  const response = await axiosInstance.post(`contact/`, dataWithUser);
  return response.data;
}

export function useContact() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<ContactResponse, AxiosError, ContactProps>({
    mutationFn: contact,
    onSuccess: (data) => {
      toast.success(data.message || "Form submitted successfully");
      queryClient.invalidateQueries({ queryKey: ["getAllMessages"] });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message || "Form submission failed");
    },
  });
}

async function getAllMessages(): Promise<getAllMessagesResponse> {
  const response = await axiosInstance.get<getAllMessagesResponse>(`contact/`);
  return response.data;
}

export function useGetAllMessages() {
  return useQuery<getAllMessagesResponse>({
    queryKey: ["getAllMessages"],
    queryFn: getAllMessages,
    retry: 2,
    staleTime: 60000,
  });
}
