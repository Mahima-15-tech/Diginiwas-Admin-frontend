import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// 1. All Buyers fetch karne ke liye
export const fetchAllBuyers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/buyers/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching buyers:", error);
    throw error;
  }
};

// 2. Single Buyer by ID fetch karne ke liye
export const fetchBuyerById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/buyers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching buyer with ID ${id}:`, error);
    throw error;
  }
};