import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "../utils/fetchPrices";

export const useCryptoPrices = () => {
  return useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    refetchInterval: 60000, // Auto refresh every 60 seconds
    staleTime: 0, // Forces refetch on button click
    cacheTime: 0, // Disables cache storage
    refetchOnWindowFocus: false, // Prevents refetch on window focus
  });
};
