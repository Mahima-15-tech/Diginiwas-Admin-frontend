// import axios from "axios";

// const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

// export const getAllSellersApi = async () => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/sellers/`
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Get All Sellers API Error:", error);
//     throw error;
//   }
// };

// export const getSellerByIdApi = async (sellerId) => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/sellers/${sellerId}`
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Get Seller By ID API Error:", error);
//     throw error;
//   }
// };


import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:3000/api";

const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem(
    "token"
  )}`,
});

// ======================================================
// GET ALL SELLERS
// ======================================================

export const getAllSellersApi =
  async (params = {}) => {
    const response =
      await axios.get(
        `${API_BASE_URL}/sellers`,
        {
          params,
          headers: authHeaders(),
        }
      );

    return response.data;
  };

// ======================================================
// GET SELLER DETAIL
// Includes properties + propertyStats + assignedPartners
// ======================================================

export const getSellerByIdApi =
  async (sellerId) => {
    const response =
      await axios.get(
        `${API_BASE_URL}/sellers/${sellerId}`,
        {
          headers: authHeaders(),
        }
      );

    return response.data;
  };

// ======================================================
// VERIFY SELLER
// ======================================================

export const verifySellerApi =
  async (
    sellerId,
    payload
  ) => {
    const response =
      await axios.patch(
        `${API_BASE_URL}/sellers/${sellerId}/verify`,
        payload,
        {
          headers: {
            ...authHeaders(),
            "Content-Type":
              "application/json",
          },
        }
      );

    return response.data;
  };

// ======================================================
// GET SELLER PROPERTIES
// ======================================================

export const getSellerPropertiesApi =
  async (sellerId) => {
    const response =
      await axios.get(
        `${API_BASE_URL}/sellers/${sellerId}/properties`,
        {
          headers: authHeaders(),
        }
      );

    return response.data;
  };

// ======================================================
// GET SINGLE SELLER PROPERTY
// ======================================================

export const getSellerPropertyByIdApi =
  async (
    sellerId,
    propertyId
  ) => {
    const response =
      await axios.get(
        `${API_BASE_URL}/sellers/${sellerId}/properties/${propertyId}`,
        {
          headers: authHeaders(),
        }
      );

    return response.data;
  };

// ======================================================
// GET SELLER SUMMARY
// ======================================================

export const getSellerSummaryApi =
  async (sellerId) => {
    const response =
      await axios.get(
        `${API_BASE_URL}/sellers/${sellerId}/summary`,
        {
          headers: authHeaders(),
        }
      );

    return response.data;
  };
