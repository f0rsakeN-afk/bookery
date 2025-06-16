import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";

async function getSalesAnalytics() {
  const response = await axiosInstance.get("orders/analytics");
  return response.data;
}

export function useGetSalesAnalytics() {
  return useQuery({
    queryFn: getSalesAnalytics,
    queryKey: ["analytics"],
  });
}
