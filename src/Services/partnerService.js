// import axios from "axios";

// const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL ||
//   "http://localhost:3000";

// const PARTNER_API =
//   `${API_BASE_URL}/partners`;

// export const getAllPartnersApi =
//   async () => {
//     try {
//       const response =
//         await axios.get(
//           `${PARTNER_API}/`
//         );

//       return response.data;
//     } catch (error) {
//       console.error(
//         "Get All Partners API Error:",
//         error
//       );
//       throw error;
//     }
//   };
// export const getPartnerByIdApi =
//   async (partnerId) => {
//     try {
//       const response =
//         await axios.get(
//           `${PARTNER_API}/${partnerId}`
//         );

//       return response.data;
//     } catch (error) {
//       console.error(
//         "Get Partner By ID API Error:",
//         error
//       );

//       throw error;
//     }
//   };
// // export const getPartnerByIdApi =
// //   async (partnerId) => {
// //     try {
// //       const response =
// //         await axios.get(
// //           `${PARTNER_API}/${partnerId}`
// //         );

// //       return response.data;
// //     } catch (error) {
// //       console.error(
// //         "Get Partner By ID API Error:",
// //         error
// //       );

// //       throw error;
// //     }
// //   };
// export const verifyPartnerApi = async (id, isVerified = true) => {
//   const response = await axios.patch(
//     `${PARTNER_API}/${id}/verify`,
//     { isVerified }, // Pass object directly as 2nd argument
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   return response.data;
// };

// export const blacklistPartnerApi = async (id, isBlocked) => {
//   const response = await axios.patch(
//     `${PARTNER_API}/${id}/block`,
//     { isBlocked },
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   return response.data;
// };

// export const deletePartnerApi = async (
//   id
// ) => {
//   const response = await axios.delete(
//     `${PARTNER_API}/delete/${id}`
//   );

//   return response.data;
// };

//   export const getUnassignedPropertiesApi =
//   async () => {
//     const response =
//       await axios.get(
//        `${PARTNER_API}/properties/unassigned`
//       );

//     return response.data;
//   };

// export const getAvailablePartnersApi =
//   async (params = {}) => {
//     const response =
//       await axios.get(
//         `${PARTNER_API}/partners/available`,
//         {
//           params,
//         }
//       );

//     return response.data;
//   };

// export const assignPartnerApi =
//   async (
//     propertyMongoId,
//     data
//   ) => {
//     const response =
//       await axios.patch(
//         `${PARTNER_API}/properties/${propertyMongoId}/assign-partner`,
//         data
//       );

//     return response.data;
//   };

// export const getAssignmentSummaryApi =
//   async () => {
//     const response =
//       await axios.get(
//         `${PARTNER_API}/summary`
//       );

//     return response.data;
//   };

// export const getAssignmentPropertiesApi =
//   async (
//     params = {}
//   ) => {
//     const response =
//       await axios.get(
//         `${PARTNER_API}/properties`,
//         {
//           params,
//         }
//       );

//     return response.data;
//   };

// export const unassignPartnerFromPropertyApi =
//   async (
//     propertyId,
//     payload
//   ) => {
//     const response =
//       await axios.patch(
//         `${PARTNER_API}/properties/${propertyId}/unassign`,
//         payload
//       );

//     return response.data;
//   };
// // export const getAvailablePartnersApi =
// //   async (
// //     params = {}
// //   ) => {
// //     const response =
// //       await axios.get(
// //         "/partner-assignment/partners",
// //         {
// //           params,
// //         }
// //       );

// //     return response.data;
// //   };


// // ======================================================
// // ASSIGN
// // ======================================================

// export const assignPartnerToPropertyApi =
//   async (
//     propertyId,
//     payload
//   ) => {
//     const response =
//       await axios.patch(
//         `${PARTNER_API}/properties/${propertyId}/assign`,
//         payload
//       );

//     return response.data;
//   };

//   export const assignPropertyToPartnerApi =
//   async (
//     propertyId,
//     payload
//   ) => {
//     const response =
//       await axios.patch(
//         `${PARTNER_API}/properties/${propertyId}/assign`,
//         payload
//       );

//     return response.data;
//   };

import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const PARTNER_API = `${API_BASE_URL}/partners`;

export const getAllPartnersApi = async () => {
  const response = await axios.get(`${PARTNER_API}/`);
  return response.data;
};

export const getPartnerByIdApi = async (partnerMongoId) => {
  const response = await axios.get(`${PARTNER_API}/${partnerMongoId}`);
  return response.data;
};

export const verifyPartnerApi = async (id, isVerified = true) => {
  const response = await axios.patch(
    `${PARTNER_API}/${id}/verify`,
    { isVerified },
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

export const blacklistPartnerApi = async (id, isBlocked) => {
  const response = await axios.patch(
    `${PARTNER_API}/${id}/block`,
    { isBlocked },
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

export const deletePartnerApi = async (id) => {
  const response = await axios.delete(`${PARTNER_API}/delete/${id}`);
  return response.data;
};

export const getUnassignedPropertiesApi = async () => {
  const response = await axios.get(`${PARTNER_API}/properties/unassigned`);
  return response.data;
};

export const getAvailablePartnersApi = async (params = {}) => {
  const response = await axios.get(`${PARTNER_API}/partners/available`, { params });
  return response.data;
};

export const assignPartnerApi = async (propertyMongoId, data) => {
  const response = await axios.patch(
    `${PARTNER_API}/properties/${propertyMongoId}/assign-partner`,
    data
  );
  return response.data;
};

export const getAssignmentSummaryApi = async () => {
  const response = await axios.get(`${PARTNER_API}/summary`);
  return response.data;
};

export const getAssignmentPropertiesApi = async (params = {}) => {
  const response = await axios.get(`${PARTNER_API}/properties`, { params });
  return response.data;
};

export const unassignPartnerFromPropertyApi = async (propertyId, payload) => {
  const response = await axios.patch(
    `${PARTNER_API}/properties/${propertyId}/unassign`,
    payload
  );
  return response.data;
};

export const assignPartnerToPropertyApi = async (propertyId, payload) => {
  const response = await axios.patch(
    `${PARTNER_API}/properties/${propertyId}/assign`,
    payload
  );
  return response.data;
};

export const assignPropertyToPartnerApi = assignPartnerToPropertyApi;
