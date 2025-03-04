import React from "react";
import CryptoDashboard from "../components/CryptoDashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // ✅ UPDATED IMPORT

const queryClient = new QueryClient();

const Home = () => (
  <QueryClientProvider client={queryClient}>
    <CryptoDashboard />
  </QueryClientProvider>
);

export default Home;
