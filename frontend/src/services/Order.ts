import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { toast } from "sonner";
import { orderStatusProps } from "@/types/order";

interface orderDataType {
  products: {
    product: string;
    quantity: number;
  }[];
  paymentMethod: string;
  shippingInfo: {
    address: string;
    city: string;
    phone: string;
    postalCode: string;
  };
}

interface createOrderProps {
  data: orderDataType;
}

async function getAllOrders() {
  const response = await axiosInstance.get("orders/");
  return response.data;
}

export function useGetAllOrders() {
  return useQuery({
    queryFn: getAllOrders,
    queryKey: ["orders"],
    refetchInterval: 6000,
  });
}

async function getMyOrders() {
  const response = await axiosInstance.get(`orders/myorders`);
  return response.data;
}

export function useGetMyOrders() {
  return useQuery({
    queryFn: getMyOrders,
    queryKey: ["myorders"],
    refetchInterval: 10000,
  });
}

async function createOrder({ data }: createOrderProps) {
  const response = await axiosInstance.post(`orders/`, data);
  return response.data;
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["myorders"] });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["analytics"] });
      toast.success(data.message);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
}


async function updateStatus(data: orderStatusProps) {
  /*   console.log(data); */
  const response = await axiosInstance.patch(`orders/${data.orderId}`, {
    orderStatus: data.orderStatus,
    paymentStatus: data.paymentStatus,
  });
  return response.data;
}

export function useUpdateStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["myorders"] });
      queryClient.invalidateQueries({ queryKey: ["analytics"] });
      toast.success(data.message);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
}
