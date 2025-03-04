# State Management in Crypto Price Tracker

We use **React Query** (TanStack Query) for state management.

## Why React Query?
- Caches API responses efficiently.
- Reduces redundant API calls.
- Supports automatic data refreshing.

## Implementation
```javascript
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "../utils/fetchPrices";

export const useCryptoPrices = () => {
  return useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    refetchInterval: 60000,
  });
};
