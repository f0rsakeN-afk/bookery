import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";

async function searchProducts(searchTerm: string) {
  const response = await axiosInstance.get(
    `product/search/?search=${searchTerm}`
  );
  return response.data;
}

export function useSearchProducts(searchTerm: string) {
  return useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => searchProducts(searchTerm),
    enabled: !!searchTerm,
    staleTime: 5000,
  });
}
