import axios from "axios";

const API_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,solana,dogecoin&vs_currencies=usd";

export const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get(API_URL, { cache: "no-store" }); // Prevent browser caching
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw new Error("Failed to fetch prices. Please try again.");
  }
};
