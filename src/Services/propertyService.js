// // import axios from "axios";

// // const API_BASE_URL =
// //   import.meta.env.VITE_API_BASE_URL  || "http://localhost:3000/api";

// // console.log(
// //   "ENV API URL:",
// //   import.meta.env.VITE_API_BASE_URL
// // );
// // export const createPropertyApi = async (payload) => {
// //   const token = localStorage.getItem("token");

// //   const response = await axios.post(
// //     `${API_BASE_URL}/newproperties/`,
// //     payload,
// //     {
// //       headers: {
// //         // "Content-Type": "application/json",
// //         Authorization: `Bearer ${token}`, 
// //       },
// //     }
// //   );
// //   return response.data;
// // };

// // export const getAllPropertiesApi =
// //   async ({
// //     role = "",
// //     status = "",
// //     city = "",
// //     search = "",
// //   } = {}) => {

// //     const response =
// //       await axios.get(
// //         `${API_BASE_URL}/newproperties/all`,
// //         {
// //           params: {
// //             role:
// //               role || undefined,

// //             status:
// //               status || undefined,

// //             city:
// //               city || undefined,

// //             search:
// //               search || undefined,
// //           },
// //         }
// //       );

// //     return response.data;
// //   };

// // export const getPropertyByIdApi =
// //   async (id) => {

// //     const response =
// //       await axios.get(
// //         `${API_BASE_URL}/newproperties/${id}`
// //       );

// //     return response.data;
// //   };

// import axios from "axios";

// const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL ||
//   "http://localhost:3000/api";

// console.log(
//   "ENV API URL:",
//   import.meta.env.VITE_API_BASE_URL
// );


// // ======================================================
// // CREATE PROPERTY
// // ======================================================

// export const createPropertyApi = async (payload) => {
//   const token = localStorage.getItem("token");

//   const response = await axios.post(
//     `${API_BASE_URL}/newproperties/`,
//     payload,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return response.data;
// };


// // ======================================================
// // GET ALL PROPERTIES
// // ======================================================

// export const getAllPropertiesApi = async ({
//   role = "",
//   status = "",
//   city = "",
//   search = "",
// } = {}) => {

//   const response = await axios.get(
//     `${API_BASE_URL}/newproperties/all`,
//     {
//       params: {
//         role: role || undefined,
//         status: status || undefined,
//         city: city || undefined,
//         search: search || undefined,
//       },
//     }
//   );

//   return response.data;
// };


// // ======================================================
// // GET PROPERTY BY ID
// // ======================================================

// export const getPropertyByIdApi = async (id) => {

//   const response = await axios.get(
//     `${API_BASE_URL}/newproperties/${id}`
//   );

//   return response.data;
// };


// // ======================================================
// // DELETE PROPERTY
// // ======================================================

// export const deletePropertyApi = async (id) => {

//   const token = localStorage.getItem("token");

//   const response = await axios.delete(
//     `${API_BASE_URL}/newproperties/${id}/delete`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return response.data;
// };

import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:3000/api";


// ======================================================
// AUTH HEADERS
// ======================================================

const getAuthHeaders = () => {
  const token =
    localStorage.getItem("token");

  return {
    Authorization: token
      ? `Bearer ${token}`
      : "",
  };
};


// ======================================================
// CREATE PROPERTY
// POST /api/newproperties
// ======================================================

export const createPropertyApi = async (
  payload
) => {
  try {
    const response =
      await axios.post(
        `${API_BASE_URL}/newproperties`,
        payload,
        {
          headers: {
            ...getAuthHeaders(),
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Create Property API Error:",
      error
    );

    throw error;
  }
};


// ======================================================
// GET ALL PROPERTIES
// GET /api/newproperties/all
// ======================================================

export const getAllPropertiesApi = async ({
  role = "",
  status = "",
  city = "",
  search = "",
} = {}) => {
  try {
    const response =
      await axios.get(
        `${API_BASE_URL}/newproperties/all`,
        {
          params: {
            role:
              role || undefined,

            status:
              status || undefined,

            city:
              city || undefined,

            search:
              search || undefined,
          },

          headers: {
            ...getAuthHeaders(),
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Get All Properties API Error:",
      error
    );

    throw error;
  }
};


// ======================================================
// GET PROPERTY BY ID
// GET /api/newproperties/:id
// ======================================================

export const getPropertyByIdApi = async (
  id
) => {
  try {
    const response =
      await axios.get(
        `${API_BASE_URL}/newproperties/${id}`,
        {
          headers: {
            ...getAuthHeaders(),
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Get Property By ID API Error:",
      error
    );

    throw error;
  }
};


// ======================================================
// UPDATE PROPERTY
// PATCH /api/newproperties/:id
//
// Supports:
// - normal fields
// - images[]
// - floorPlan
// - reraCertificate
// - video
// - existingImages
// ======================================================

export const updatePropertyApi = async (
  id,
  payload
) => {
  try {
    const response =
      await axios.patch(
        `${API_BASE_URL}/newproperties/${id}`,
        payload,
        {
          headers: {
            ...getAuthHeaders(),

            // IMPORTANT:
            // FormData ke case me Content-Type manually
            // set mat karna. Browser boundary khud set karega.
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Update Property API Error:",
      error
    );

    throw error;
  }
};


// ======================================================
// UPDATE PROPERTY STATUS
// PATCH /api/newproperties/:id/status
//
// Allowed:
// Reviewing
// Verified
// Live
// Rejected
// Sold
// Rented
// ======================================================

export const updatePropertyStatusApi =
  async (
    id,
    payload
  ) => {
    try {
      const response =
        await axios.patch(
          `${API_BASE_URL}/newproperties/${id}/status`,
          payload,
          {
            headers: {
              ...getAuthHeaders(),

              "Content-Type":
                "application/json",
            },
          }
        );

      return response.data;
    } catch (error) {
      console.error(
        "Update Property Status API Error:",
        error
      );

      throw error;
    }
  };


// ======================================================
// VERIFY PROPERTY
// Shortcut for status = Verified
// PATCH /api/newproperties/:id/status
// ======================================================

export const verifyPropertyApi = async (
  id,
  notes =
    "Property verified by admin."
) => {
  try {
    const response =
      await axios.patch(
        `${API_BASE_URL}/newproperties/${id}/status`,
        {
          status: "Verified",
          notes,
          rejectionReason: "",
        },
        {
          headers: {
            ...getAuthHeaders(),

            "Content-Type":
              "application/json",
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Verify Property API Error:",
      error
    );

    throw error;
  }
};


// ======================================================
// DELETE PROPERTY
// DELETE /api/newproperties/:id/delete
// ======================================================

export const deletePropertyApi = async (
  id
) => {
  try {
    const response =
      await axios.delete(
        `${API_BASE_URL}/newproperties/${id}/delete`,
        {
          headers: {
            ...getAuthHeaders(),
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Delete Property API Error:",
      error
    );

    throw error;
  }
};


// ======================================================
// BOOST PROPERTY
// PATCH /api/newproperties/:id/boost
// ======================================================

export const boostPropertyApi = async (
  id,
  payload = {
    boostType: "Featured",
    days: 7,
  }
) => {
  try {
    const response =
      await axios.patch(
        `${API_BASE_URL}/newproperties/${id}/boost`,
        payload,
        {
          headers: {
            ...getAuthHeaders(),

            "Content-Type":
              "application/json",
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Boost Property API Error:",
      error
    );

    throw error;
  }
};


// ======================================================
// REMOVE BOOST
// PATCH /api/newproperties/:id/unboost
// ======================================================

export const unboostPropertyApi = async (
  id
) => {
  try {
    const response =
      await axios.patch(
        `${API_BASE_URL}/newproperties/${id}/unboost`,
        {},
        {
          headers: {
            ...getAuthHeaders(),

            "Content-Type":
              "application/json",
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Unboost Property API Error:",
      error
    );

    throw error;
  }
};