// // import React, { useEffect, useMemo, useState } from "react";

// // import { useNavigate, useParams } from "react-router-dom";

// // import {
// //   Search,
// //   SlidersHorizontal,
// //   ChevronDown,
// //   ChevronLeft,
// //   ChevronRight,
// //   MoreVertical,
// //   Download,
// //   UserPlus,
// //   Users,
// //   BadgeCheck,
// //   BriefcaseBusiness,
// //   UserRoundCheck,
// //   X,
// //   Mail,
// //   Phone,
// //   CalendarDays,
// //   RefreshCw,
// //   MapPin,
// //   ShieldCheck,
// //   Ban,
// //   Trash2,
// //   Building2,
// //   UserRound,
// //   UsersRound,
// //   Plus,
// //   CheckCircle2,
// //   Eye,
// //   History,
// // } from "lucide-react";

// // import Swal from "sweetalert2";

// // import {
// //   getAllPartnersApi,
// //   getPartnerByIdApi,
// //   verifyPartnerApi,
// //   blacklistPartnerApi,
// //   deletePartnerApi,
// //   assignPropertyToPartnerApi,
// // } from "../../../Services/partnerService";

// // import { getPartnerVisitsApi } from "../../../Services/visitService";

// // const PartnerManagement = ({
// //   embedded = false,
// //   initialPartnerId = null,
// //   onEmbeddedDetailClose,
// // }) => {
// //   const navigate = useNavigate();
// //   const { id: routePartnerId } = useParams();
// //   // ======================================================
// //   // STATES
// //   // ======================================================

// //   const [partners, setPartners] = useState([]);

// //   const [loading, setLoading] = useState(true);

// //   const [error, setError] = useState("");

// //   const [search, setSearch] = useState("");

// //   const [activeTab, setActiveTab] = useState("All");

// //   const [verificationFilter, setVerificationFilter] = useState("");

// //   const [currentPage, setCurrentPage] = useState(1);

// //   const [itemsPerPage] = useState(8);

// //   const [selectedPartner, setSelectedPartner] = useState(null);

// //   const [partnerDetailsLoading, setPartnerDetailsLoading] = useState(false);

// //   const [actionLoading, setActionLoading] = useState("");

// //   const [openActionMenu, setOpenActionMenu] = useState(null);

// //   const [showAssignProperty, setShowAssignProperty] = useState(false);

// //   const [propertyId, setPropertyId] = useState("");

// //   const [partnerVisits, setPartnerVisits] = useState([]);

// //   // ======================================================
// //   // GET ALL PARTNERS
// //   // ======================================================

// //   const fetchPartners = async () => {
// //     try {
// //       setLoading(true);
// //       setError("");

// //       const response = await getAllPartnersApi();

// //       console.log("GET ALL PARTNERS RESPONSE:", response);

// //       if (response?.success === true && Array.isArray(response?.data)) {
// //         setPartners(response.data);
// //       } else {
// //         setPartners([]);

// //         setError(response?.message || "Unable to fetch partners");
// //       }
// //     } catch (err) {
// //       console.error("GET ALL PARTNERS ERROR:", err);

// //       setError(
// //         err?.response?.data?.message ||
// //           err?.message ||
// //           "Unable to fetch partners",
// //       );

// //       setPartners([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ======================================================
// //   // GET PARTNER BY ID
// //   // ======================================================

// //   const handleGetPartnerById = async (id) => {
// //     try {
// //       setPartnerDetailsLoading(true);
// //       setSelectedPartner(null);
// //       setPartnerVisits([]);
// //       setShowAssignProperty(false);
// //       setPropertyId("");
// //       setOpenActionMenu(null);

// //       const [partnerResult, visitResult] = await Promise.allSettled([
// //         getPartnerByIdApi(id),
// //         getPartnerVisitsApi(id),
// //       ]);

// //       if (
// //         partnerResult.status === "fulfilled" &&
// //         partnerResult.value?.success &&
// //         partnerResult.value?.data
// //       ) {
// //         setSelectedPartner(partnerResult.value.data);
// //       } else {
// //         const message =
// //           partnerResult.status === "rejected"
// //             ? partnerResult.reason?.response?.data?.message ||
// //               partnerResult.reason?.message
// //             : partnerResult.value?.message;
// //         throw new Error(message || "Unable to load partner details");
// //       }

// //       if (visitResult.status === "fulfilled" && visitResult.value?.success) {
// //         const visitData = visitResult.value?.data;
// //         setPartnerVisits(
// //           Array.isArray(visitData)
// //             ? visitData
// //             : Array.isArray(visitData?.visits)
// //               ? visitData.visits
// //               : [],
// //         );
// //       } else {
// //         setPartnerVisits([]);
// //       }
// //     } catch (err) {
// //       console.error("GET PARTNER DETAIL ERROR:", err);
// //       setSelectedPartner(null);
// //       setPartnerVisits([]);

// //       await Swal.fire({
// //         title: "Error",
// //         text:
// //           err?.response?.data?.message ||
// //           err?.message ||
// //           "Unable to load partner details",
// //         icon: "error",
// //       });
// //     } finally {
// //       setPartnerDetailsLoading(false);
// //     }
// //   };

// //   // ======================================================
// //   // INITIAL LOAD
// //   // ======================================================

// //   useEffect(() => {
// //     fetchPartners();
// //   }, []);

// //   useEffect(() => {
// //     // Partner Dashboard ke embedded mode me URL params use nahi karne.
// //     if (embedded) {
// //       return;
// //     }

// //     if (routePartnerId) {
// //       handleGetPartnerById(routePartnerId);
// //     }
// //   }, [routePartnerId, embedded]);

// //   // Visit Management se Partner Dashboard par aane par
// //   // selected partner drawer automatically open karo.
// //   useEffect(() => {
// //     if (!embedded || !initialPartnerId) {
// //       return;
// //     }

// //     handleGetPartnerById(initialPartnerId);
// //   }, [embedded, initialPartnerId]);

// //   // ======================================================
// //   // STATUS
// //   // ======================================================

// //   const getPartnerStatus = (partner) => {
// //     if (partner?.isBlacklisted || partner?.isBlocked) {
// //       return "Blacklisted";
// //     }

// //     if (partner?.isSuspended) {
// //       return "Suspended";
// //     }

// //     if (partner?.isVerified || partner?.isPhoneVerified) {
// //       return "Verified";
// //     }

// //     return "Pending";
// //   };

// //   // ======================================================
// //   // VERIFY PARTNER
// //   // ======================================================

// //   // const handleVerifyPartner =
// //   //   async (partner) => {
// //   //     const result =
// //   //       await Swal.fire({
// //   //         title:
// //   //           "Verify Partner?",

// //   //         text: `${
// //   //           partner?.name ||
// //   //           "This partner"
// //   //         } will be marked as verified.`,

// //   //         icon: "question",

// //   //         showCancelButton:
// //   //           true,

// //   //         confirmButtonText:
// //   //           "Yes, Verify",

// //   //         cancelButtonText:
// //   //           "Cancel",

// //   //         confirmButtonColor:
// //   //           "#18b894",
// //   //       });

// //   //     if (
// //   //       !result.isConfirmed
// //   //     ) {
// //   //       return;
// //   //     }

// //   //     try {
// //   //       setActionLoading(
// //   //         partner._id
// //   //       );

// //   //       const response =
// //   //         await verifyPartnerApi(
// //   //           partner._id
// //   //         );

// //   //       if (
// //   //         response?.success
// //   //       ) {
// //   //         await Swal.fire({
// //   //           title:
// //   //             "Partner Verified!",

// //   //           text:
// //   //             response?.message ||
// //   //             "Partner verified successfully.",

// //   //           icon: "success",

// //   //           confirmButtonColor:
// //   //             "#18b894",
// //   //         });

// //   //         await fetchPartners();

// //   //         if (
// //   //           selectedPartner?._id ===
// //   //           partner._id
// //   //         ) {
// //   //           await handleGetPartnerById(
// //   //             partner._id
// //   //           );
// //   //         }
// //   //       } else {
// //   //         throw new Error(
// //   //           response?.message ||
// //   //             "Unable to verify partner"
// //   //         );
// //   //       }
// //   //     } catch (error) {
// //   //       await Swal.fire({
// //   //         title: "Error",

// //   //         text:
// //   //           error?.response?.data
// //   //             ?.message ||
// //   //           error?.message ||
// //   //           "Unable to verify partner.",

// //   //         icon: "error",
// //   //       });
// //   //     } finally {
// //   //       setActionLoading("");
// //   //       setOpenActionMenu(
// //   //         null
// //   //       );
// //   //     }
// //   //   };
// //   const handleVerifyPartner = async (partner) => {
// //     const result = await Swal.fire({
// //       title: "Verify Partner?",
// //       text: `${partner?.name || "This partner"} will be marked as verified.`,
// //       icon: "question",
// //       showCancelButton: true,
// //       confirmButtonText: "Yes, Verify",
// //       cancelButtonText: "Cancel",
// //       confirmButtonColor: "#18b894",
// //     });

// //     if (!result.isConfirmed) {
// //       return;
// //     }

// //     try {
// //       setActionLoading(partner._id);

// //       // Body me isVerified: true bhejne ke liye second argument true add kiya
// //       const response = await verifyPartnerApi(partner._id, true);

// //       if (response?.success) {
// //         await Swal.fire({
// //           title: "Partner Verified!",
// //           text: response?.message || "Partner verified successfully.",
// //           icon: "success",
// //           confirmButtonColor: "#18b894",
// //         });

// //         await fetchPartners();

// //         if (selectedPartner?._id === partner._id) {
// //           await handleGetPartnerById(partner._id);
// //         }
// //       } else {
// //         throw new Error(response?.message || "Unable to verify partner");
// //       }
// //     } catch (error) {
// //       await Swal.fire({
// //         title: "Error",
// //         text:
// //           error?.response?.data?.message ||
// //           error?.message ||
// //           "Unable to verify partner.",
// //         icon: "error",
// //       });
// //     } finally {
// //       setActionLoading("");
// //       setOpenActionMenu(null);
// //     }
// //   };

// //   // ======================================================
// //   // BLACKLIST PARTNER
// //   // ======================================================

// //   const handleBlacklistPartner = async (partner) => {
// //     const currentlyBlocked = partner?.isBlocked;

// //     const result = await Swal.fire({
// //       title: currentlyBlocked ? "Unblock Partner?" : "Block Partner?",
// //       text: currentlyBlocked
// //         ? `${partner?.name || "This partner"} will be unblocked.`
// //         : `${partner?.name || "This partner"} will be blocked from access.`,
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonText: currentlyBlocked ? "Yes, Unblock" : "Yes, Block",
// //       cancelButtonText: "Cancel",
// //       confirmButtonColor: currentlyBlocked ? "#18b894" : "#dc2626",
// //     });

// //     if (!result.isConfirmed) {
// //       return;
// //     }

// //     try {
// //       setActionLoading(partner._id);

// //       // Toggles status: sends true if currently unblocked, false if currently blocked
// //       const response = await blacklistPartnerApi(
// //         partner._id,
// //         !currentlyBlocked,
// //       );

// //       if (response?.success) {
// //         await Swal.fire({
// //           title: currentlyBlocked ? "Partner Unblocked!" : "Partner Blocked!",
// //           text: response?.message || "Partner status updated successfully.",
// //           icon: "success",
// //           confirmButtonColor: "#18b894",
// //         });

// //         await fetchPartners();

// //         if (selectedPartner?._id === partner._id) {
// //           await handleGetPartnerById(partner._id);
// //         }
// //       } else {
// //         throw new Error(response?.message || "Unable to update partner status");
// //       }
// //     } catch (error) {
// //       await Swal.fire({
// //         title: "Error",
// //         text:
// //           error?.response?.data?.message ||
// //           error?.message ||
// //           "Unable to update partner status.",
// //         icon: "error",
// //       });
// //     } finally {
// //       setActionLoading("");
// //       setOpenActionMenu(null);
// //     }
// //   };

// //   // ======================================================
// //   // DELETE PARTNER
// //   // ======================================================

// //   const handleDeletePartner = async (partner) => {
// //     const result = await Swal.fire({
// //       title: "Delete Partner?",

// //       html: `
// //             <div style="
// //               font-size:13px;
// //               color:#64748b;
// //               line-height:1.7;
// //             ">
// //               You are about to permanently delete
// //               <strong>
// //                 ${partner?.name || "this partner"}
// //               </strong>.
              
// //               <br/><br/>
              
// //               Type
// //               <strong>DELETE</strong>
// //               below to confirm.
// //             </div>
// //           `,

// //       icon: "warning",

// //       input: "text",

// //       inputPlaceholder: "Type DELETE",

// //       showCancelButton: true,

// //       confirmButtonText: "Delete Partner",

// //       cancelButtonText: "Cancel",

// //       confirmButtonColor: "#dc2626",

// //       preConfirm: (value) => {
// //         if (value?.trim() !== "DELETE") {
// //           Swal.showValidationMessage("Please type DELETE exactly.");

// //           return false;
// //         }

// //         return value;
// //       },
// //     });

// //     if (!result.isConfirmed) {
// //       return;
// //     }

// //     try {
// //       setActionLoading(partner._id);

// //       const response = await deletePartnerApi(partner._id);

// //       if (response?.success) {
// //         await Swal.fire({
// //           title: "Partner Deleted!",

// //           text: response?.message || "Partner deleted successfully.",

// //           icon: "success",

// //           confirmButtonColor: "#18b894",
// //         });

// //         if (selectedPartner?._id === partner._id) {
// //           setSelectedPartner(null);
// //         }

// //         await fetchPartners();
// //       } else {
// //         throw new Error(response?.message || "Unable to delete partner");
// //       }
// //     } catch (error) {
// //       await Swal.fire({
// //         title: "Unable to Delete",

// //         text:
// //           error?.response?.data?.message ||
// //           error?.message ||
// //           "Partner could not be deleted.",

// //         icon: "error",
// //       });
// //     } finally {
// //       setActionLoading("");
// //       setOpenActionMenu(null);
// //     }
// //   };

// //   // ======================================================
// //   // ASSIGN PROPERTY
// //   // ======================================================

// //   const handleAssignProperty = async (partner) => {
// //     if (!propertyId.trim()) {
// //       await Swal.fire({
// //         title: "Property Required",

// //         text: "Please enter a property ID.",

// //         icon: "warning",

// //         confirmButtonColor: "#18b894",
// //       });

// //       return;
// //     }

// //     const result = await Swal.fire({
// //       title: "Assign Property?",

// //       html: `
// //             <div style="
// //               font-size:13px;
// //               color:#64748b;
// //             ">
// //               Assign property
// //               <strong>
// //                 ${propertyId}
// //               </strong>
// //               to
// //               <strong>
// //                 ${partner?.name || "Partner"}
// //               </strong>?
// //             </div>
// //           `,

// //       icon: "question",

// //       showCancelButton: true,

// //       confirmButtonText: "Assign Property",

// //       cancelButtonText: "Cancel",

// //       confirmButtonColor: "#18b894",
// //     });

// //     if (!result.isConfirmed) {
// //       return;
// //     }

// //     try {
// //       setActionLoading("assign-property");

// //       const response = await assignPropertyToPartnerApi(
// //         partner._id,
// //         propertyId.trim(),
// //       );

// //       if (response?.success) {
// //         await Swal.fire({
// //           title: "Property Assigned!",

// //           text: response?.message || "Property assigned successfully.",

// //           icon: "success",

// //           confirmButtonColor: "#18b894",
// //         });

// //         setPropertyId("");

// //         setShowAssignProperty(false);

// //         await handleGetPartnerById(partner._id);

// //         await fetchPartners();
// //       } else {
// //         throw new Error(response?.message || "Unable to assign property");
// //       }
// //     } catch (error) {
// //       await Swal.fire({
// //         title: "Error",

// //         text:
// //           error?.response?.data?.message ||
// //           error?.message ||
// //           "Unable to assign property.",

// //         icon: "error",
// //       });
// //     } finally {
// //       setActionLoading("");
// //     }
// //   };

// //   // ======================================================
// //   // STATS
// //   // ======================================================

// //   const stats = useMemo(() => {
// //     const total = partners.length;

// //     const verified = partners.filter(
// //       (partner) => getPartnerStatus(partner) === "Verified",
// //     ).length;

// //     const pending = partners.filter(
// //       (partner) => getPartnerStatus(partner) === "Pending",
// //     ).length;

// //     const suspended = partners.filter(
// //       (partner) => getPartnerStatus(partner) === "Suspended",
// //     ).length;

// //     const blacklisted = partners.filter(
// //       (partner) => getPartnerStatus(partner) === "Blacklisted",
// //     ).length;

// //     return {
// //       total,
// //       verified,
// //       pending,
// //       suspended,
// //       blacklisted,
// //     };
// //   }, [partners]);

// //   // ======================================================
// //   // TABS
// //   // ======================================================

// //   const tabs = [
// //     {
// //       label: "All",
// //       count: stats.total,
// //     },

// //     {
// //       label: "Verified",
// //       count: stats.verified,
// //     },

// //     {
// //       label: "Pending",
// //       count: stats.pending,
// //     },

// //     // {
// //     //   label: "Suspended",
// //     //   count: stats.suspended,
// //     // },

// //     {
// //       label: "Blacklisted",
// //       count: stats.blacklisted,
// //     },
// //   ];

// //   // ======================================================
// //   // FILTER
// //   // ======================================================

// //   const filteredPartners = useMemo(() => {
// //     let data = [...partners];

// //     // STATUS
// //     if (activeTab && activeTab !== "All") {
// //       data = data.filter((partner) => getPartnerStatus(partner) === activeTab);
// //     }

// //     // SEARCH
// //     if (search.trim()) {
// //       const value = search.trim().toLowerCase();

// //       data = data.filter((partner) => {
// //         const name = partner?.name?.toLowerCase() || "";

// //         const email = partner?.email?.toLowerCase() || "";

// //         const phone = String(partner?.phone || "").toLowerCase();

// //         const partnerId = partner?.partnerId?.toLowerCase() || "";

// //         const mongoId = partner?._id?.toLowerCase() || "";

// //         const city = partner?.location?.city?.toLowerCase() || "";

// //         const state = partner?.location?.state?.toLowerCase() || "";

// //         const address = partner?.location?.address?.toLowerCase() || "";

// //         const type = partner?.partnerType?.toLowerCase() || "";

// //         return (
// //           name.includes(value) ||
// //           email.includes(value) ||
// //           phone.includes(value) ||
// //           partnerId.includes(value) ||
// //           mongoId.includes(value) ||
// //           city.includes(value) ||
// //           state.includes(value) ||
// //           address.includes(value) ||
// //           type.includes(value)
// //         );
// //       });
// //     }

// //     // VERIFICATION
// //     if (verificationFilter === "Verified") {
// //       data = data.filter(
// //         (partner) => partner?.isVerified || partner?.isPhoneVerified,
// //       );
// //     }

// //     if (verificationFilter === "Not Verified") {
// //       data = data.filter(
// //         (partner) => !partner?.isVerified && !partner?.isPhoneVerified,
// //       );
// //     }

// //     return data;
// //   }, [partners, search, activeTab, verificationFilter]);

// //   // ======================================================
// //   // PAGINATION
// //   // ======================================================

// //   const totalPages = Math.max(
// //     1,
// //     Math.ceil(filteredPartners.length / itemsPerPage),
// //   );

// //   const startIndex = (currentPage - 1) * itemsPerPage;

// //   const currentPartners = filteredPartners.slice(
// //     startIndex,
// //     startIndex + itemsPerPage,
// //   );

// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [search, activeTab, verificationFilter]);

// //   // ======================================================
// //   // CLEAR
// //   // ======================================================

// //   const clearFilters = () => {
// //     setSearch("");

// //     setVerificationFilter("");

// //     setActiveTab("All");
// //   };

// //   // ======================================================
// //   // EXPORT
// //   // ======================================================

// //   const exportPartners = () => {
// //     if (filteredPartners.length === 0) {
// //       Swal.fire({
// //         title: "No Data",
// //         text: "No partner data available.",
// //         icon: "info",
// //       });

// //       return;
// //     }

// //     const headings = [
// //       "Partner ID",
// //       "Name",
// //       "Email",
// //       "Phone",
// //       "Partner Type",
// //       "City",
// //       "State",
// //       "Country",
// //       "Status",
// //       "Created At",
// //     ];

// //     const rows = filteredPartners.map((partner) => [
// //       partner?.partnerId || "",
// //       partner?.name || "",
// //       partner?.email || "",
// //       partner?.phone || "",
// //       partner?.partnerType || "",
// //       partner?.location?.city || "",
// //       partner?.location?.state || "",
// //       partner?.location?.country || "",
// //       getPartnerStatus(partner),
// //       partner?.createdAt
// //         ? new Date(partner.createdAt).toLocaleDateString("en-IN")
// //         : "",
// //     ]);

// //     const csv = [
// //       headings.join(","),

// //       ...rows.map((row) =>
// //         row.map((item) => `"${String(item).replace(/"/g, '""')}"`).join(","),
// //       ),
// //     ].join("\n");

// //     const blob = new Blob([csv], {
// //       type: "text/csv;charset=utf-8;",
// //     });

// //     const url = URL.createObjectURL(blob);

// //     const link = document.createElement("a");

// //     link.href = url;

// //     link.download = "partners.csv";

// //     document.body.appendChild(link);

// //     link.click();

// //     document.body.removeChild(link);

// //     URL.revokeObjectURL(url);
// //   };

// //   // ======================================================
// //   // UI
// //   // ======================================================

// //   return (
// //     <div className="min-h-screen p-3 sm:p-5 lg:p-1">
// //       <div className="mx-auto max-w-[1600px]">
// //         {/* HEADER */}

// //         <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
// //           <div>
// //             <h1 className="text-[24px] font-semibold tracking-[-0.4px] text-[#14213d]">
// //               Partners Management
// //             </h1>

// //             <p className="mt-1 max-w-[720px] text-[12px] leading-5 text-gray-500">
// //               Manage partner accounts, verification, property assignments,
// //               location, partner type and account status.
// //             </p>
// //           </div>

// //           <div className="flex items-center gap-2">
// //             <button
// //               onClick={exportPartners}
// //               className="flex h-[39px] items-center gap-2 rounded-md border border-gray-200 bg-white px-4 text-[11px] font-medium text-gray-600 shadow-sm transition hover:bg-gray-50"
// //             >
// //               <Download size={14} />

// //               <div className="leading-[13px]">
// //                 <div>Export</div>
// //                 <div>Partners</div>
// //               </div>
// //             </button>

// //             {/* <button className="flex h-[39px] items-center gap-2 rounded-md bg-[#18b894] px-4 text-[11px] font-medium text-white shadow-sm transition hover:bg-[#13a786]">
// //               <UserPlus size={14} />

// //               <div className="leading-[13px]">
// //                 <div>Add</div>
// //                 <div>Partner</div>
// //               </div>
// //             </button> */}
// //           </div>
// //         </div>

// //         {/* STATS */}

// //         <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
// //           <StatCard
// //             icon={<Users size={20} />}
// //             title="TOTAL PARTNERS"
// //             value={stats.total}
// //             badge={`${stats.verified} Verified`}
// //             color="blue"
// //           />

// //           <StatCard
// //             icon={<BadgeCheck size={20} />}
// //             title="PENDING VERIFICATION"
// //             value={stats.pending}
// //             subText="Requires Action"
// //             color="orange"
// //           />

// //           <StatCard
// //             icon={<UserRoundCheck size={20} />}
// //             title="VERIFIED PARTNERS"
// //             value={stats.verified}
// //             badge="Verified"
// //             color="green"
// //           />

// //           <StatCard
// //             icon={<BriefcaseBusiness size={20} />}
// //             title="BLACKLISTED / SUSPENDED"
// //             value={stats.blacklisted + stats.suspended}
// //             color="red"
// //           />
// //         </div>

// //         {/* TABLE */}

// //         {/* <div className="overflow-visible rounded-lg border border-[#e4e7ec] bg-white shadow-[0_1px_3px_rgba(16,24,40,0.05)]"> */}
// //         <div className="relative overflow-visible rounded-lg border border-[#e4e7ec] bg-white shadow-[0_1px_3px_rgba(16,24,40,0.05)]">
// //           {/* TABS */}

// //           <div className="border-b border-gray-100 px-4">
// //             <div className="flex gap-6 overflow-x-auto">
// //               {tabs.map((tab) => (
// //                 <button
// //                   key={tab.label}
// //                   onClick={() => setActiveTab(tab.label)}
// //                   className={`relative flex h-[46px] shrink-0 items-center gap-1.5 text-[11px] font-medium transition ${
// //                     activeTab === tab.label ? "text-[#172b4d]" : "text-gray-400"
// //                   }`}
// //                 >
// //                   {tab.label}

// //                   <span
// //                     className={`rounded px-1.5 py-[1px] text-[9px] ${
// //                       activeTab === tab.label
// //                         ? "bg-[#eef4f8] text-[#385269]"
// //                         : "bg-gray-100 text-gray-400"
// //                     }`}
// //                   >
// //                     {tab.count}
// //                   </span>

// //                   {activeTab === tab.label && (
// //                     <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#172b4d]" />
// //                   )}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* FILTER */}

// //           <div className="flex flex-col gap-3 border-b border-gray-100 px-4 py-3 xl:flex-row xl:items-center xl:justify-between">
// //             <div className="flex flex-1 flex-wrap items-center gap-2">
// //               <div className="relative min-w-[220px] flex-1 xl:max-w-[340px]">
// //                 <Search
// //                   size={14}
// //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
// //                 />

// //                 <input
// //                   value={search}
// //                   onChange={(e) => setSearch(e.target.value)}
// //                   placeholder="Search Partner ID, Name, Email, Phone, Location..."
// //                   className="h-[34px] w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-[11px] text-gray-600 outline-none focus:border-[#18b894]"
// //                 />
// //               </div>

// //               <FilterSelect
// //                 label="Verification"
// //                 value={verificationFilter}
// //                 onChange={setVerificationFilter}
// //                 options={["Verified", "Not Verified"]}
// //               />
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <button
// //                 onClick={clearFilters}
// //                 className="text-[9px] font-semibold uppercase tracking-wide text-gray-400 hover:text-gray-700"
// //               >
// //                 CLEAR
// //               </button>

// //               <button className="flex h-[30px] items-center gap-1.5 rounded bg-[#183a56] px-3 text-[10px] font-medium text-white">
// //                 <SlidersHorizontal size={12} />
// //                 Apply Filters
// //               </button>

// //               <button
// //                 onClick={fetchPartners}
// //                 className="flex h-[30px] w-[30px] items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50"
// //               >
// //                 <RefreshCw size={13} />
// //               </button>
// //             </div>
// //           </div>

// //           {/* TABLE */}

// //           {/* <div className="overflow-x-auto">

// //             <table className="w-full min-w-[1100px] border-collapse"> */}
// //           <div className="w-full overflow-visible">
// //             <table className="w-full table-fixed border-collapse">
// //               {/* <thead>

// //                 <tr className="h-[38px] border-b border-gray-100 bg-[#fafbfc] text-left">

// //                   <th className="w-[45px] px-4">

// //                     <input
// //                       type="checkbox"
// //                       className="accent-[#18b894]"
// //                     />

// //                   </th>

// //                   <TableHeading>
// //                     PARTNER
// //                   </TableHeading>

// //                   <TableHeading>
// //                     LOCATION
// //                   </TableHeading>

// //                   <TableHeading>
// //                     PARTNER TYPE
// //                   </TableHeading>

// //                   <TableHeading>
// //                     CONTACT
// //                   </TableHeading>

// //                   <TableHeading>
// //                     VERIFICATION
// //                   </TableHeading>

// //                   <TableHeading>
// //                     STATUS
// //                   </TableHeading>

// //                   <TableHeading align="right">
// //                     ACTIONS
// //                   </TableHeading>

// //                 </tr>

// //               </thead> */}

// //               <thead>
// //                 <tr className="h-[42px] border-b border-gray-100 bg-[#fafbfc] text-left">
// //                   <th className="w-[4%] px-3">
// //                     <input type="checkbox" className="accent-[#18b894]" />
// //                   </th>

// //                   <TableHeading width="18%">PARTNER</TableHeading>

// //                   <TableHeading width="17%">LOCATION</TableHeading>

// //                   <TableHeading width="12%">PARTNER TYPE</TableHeading>

// //                   <TableHeading width="20%">CONTACT</TableHeading>

// //                   <TableHeading width="12%">VERIFICATION</TableHeading>

// //                   {/* <TableHeading width="10%">
// //       STATUS
// //     </TableHeading> */}

// //                   <TableHeading width="7%" align="center">
// //                     ACTION
// //                   </TableHeading>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {loading ? (
// //                   <tr>
// //                     <td colSpan="8" className="h-[230px] text-center">
// //                       <div className="flex flex-col items-center gap-3 text-gray-400">
// //                         <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-200 border-t-[#18b894]" />

// //                         <span className="text-xs">Loading partners...</span>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ) : error ? (
// //                   <tr>
// //                     <td colSpan="8" className="h-[230px] text-center">
// //                       <p className="text-xs text-red-500">{error}</p>

// //                       <button
// //                         onClick={fetchPartners}
// //                         className="mt-3 rounded bg-[#183a56] px-4 py-2 text-[10px] text-white"
// //                       >
// //                         Try Again
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ) : currentPartners.length === 0 ? (
// //                   <tr>
// //                     <td
// //                       colSpan="8"
// //                       className="h-[230px] text-center text-xs text-gray-400"
// //                     >
// //                       No partners found.
// //                     </td>
// //                   </tr>
// //                 ) : (
// //                   currentPartners.map((partner) => (
// //                     <PartnerRow
// //                       key={partner._id}
// //                       partner={partner}
// //                       actionLoading={actionLoading}
// //                       openActionMenu={openActionMenu}
// //                       setOpenActionMenu={setOpenActionMenu}
// //                       onClick={() => {
// //                         if (embedded) {
// //                           // Partner Dashboard ke andar sirf drawer open karo.
// //                           // URL change mat karo.
// //                           handleGetPartnerById(partner._id);
// //                           return;
// //                         }

// //                         // Standalone Partner Management me route maintain rakho.
// //                         navigate(`/partners/${partner._id}`);
// //                       }}
// //                       onVerify={() => handleVerifyPartner(partner)}
// //                       onBlacklist={() => handleBlacklistPartner(partner)}
// //                       onDelete={() => handleDeletePartner(partner)}
// //                     />
// //                   ))
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* PAGINATION */}

// //           <div className="flex min-h-[52px] flex-col items-center justify-between gap-3 border-t border-gray-100 px-4 py-3 sm:flex-row">
// //             <p className="text-[10px] text-gray-400">
// //               Showing{" "}
// //               <span className="font-medium text-gray-600">
// //                 {filteredPartners.length ? startIndex + 1 : 0}
// //               </span>{" "}
// //               to{" "}
// //               <span className="font-medium text-gray-600">
// //                 {Math.min(startIndex + itemsPerPage, filteredPartners.length)}
// //               </span>{" "}
// //               of{" "}
// //               <span className="font-medium text-gray-600">
// //                 {filteredPartners.length}
// //               </span>{" "}
// //               partners
// //             </p>

// //             <div className="flex items-center gap-1">
// //               <button
// //                 disabled={currentPage === 1}
// //                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //                 className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 text-gray-400 disabled:opacity-40"
// //               >
// //                 <ChevronLeft size={13} />
// //               </button>

// //               {Array.from(
// //                 {
// //                   length: totalPages,
// //                 },
// //                 (_, index) => index + 1,
// //               ).map((page) => (
// //                 <button
// //                   key={page}
// //                   onClick={() => setCurrentPage(page)}
// //                   className={`h-7 min-w-7 rounded px-2 text-[10px] font-medium ${
// //                     currentPage === page
// //                       ? "bg-[#183a56] text-white"
// //                       : "text-gray-500 hover:bg-gray-100"
// //                   }`}
// //                 >
// //                   {page}
// //                 </button>
// //               ))}

// //               <button
// //                 disabled={currentPage === totalPages}
// //                 onClick={() =>
// //                   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
// //                 }
// //                 className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 text-gray-400 disabled:opacity-40"
// //               >
// //                 <ChevronRight size={13} />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* DRAWER */}

// //       {(selectedPartner || partnerDetailsLoading) && (
// //         // <PartnerDetailsDrawer
// //         //   partner={selectedPartner}
// //         //   loading={partnerDetailsLoading}
// //         //   partnerVisits={partnerVisits}
// //         //   onViewProperty={(property) => {
// //         //     const propertyMongoId =
// //         //       property?.propertyId ||
// //         //       (typeof property?.propertyId === "string"
// //         //         ? property.propertyId
// //         //         : null);

// //         //     if (propertyMongoId) {
// //         //       navigate(`/property-management/${propertyMongoId}`);
// //         //     }
// //         //   }}
// //         //   onViewVisit={(visit) => {
// //         //     if (!visit?._id) {
// //         //       return;
// //         //     }

// //         //     // Close current partner detail state before switching section
// //         //     setSelectedPartner(null);
// //         //     setPartnerVisits([]);
// //         //     setShowAssignProperty(false);
// //         //     setPropertyId("");

// //         //     // Always open visit inside Partner Dashboard,
// //         //     // not the standalone Visit Management route.
// //         //     navigate(
// //         //       `/partnerdashboard?tab=visit&visitId=${visit._id}`
// //         //     );
// //         //   }}
// //         //   showAssignProperty={showAssignProperty}
// //         //   setShowAssignProperty={setShowAssignProperty}
// //         //   propertyId={propertyId}
// //         //   setPropertyId={setPropertyId}
// //         //   actionLoading={actionLoading}
// //         //   onAssignProperty={() => handleAssignProperty(selectedPartner)}
// //         //   onClose={() => {
// //         //     setSelectedPartner(null);

// //         //     setShowAssignProperty(false);

// //         //     setPropertyId("");
// //         //     setPartnerVisits([]);

// //         //     if (routePartnerId) {
// //         //       navigate("/partners");
// //         //     }
// //         //   }}
// //         // />
// //         <PartnerDetailsDrawer
// //   partner={selectedPartner}
// //   loading={partnerDetailsLoading}
// //   partnerVisits={partnerVisits}

// //   showAssignProperty={showAssignProperty}
// //   setShowAssignProperty={setShowAssignProperty}

// //   propertyId={propertyId}
// //   setPropertyId={setPropertyId}

// //   actionLoading={actionLoading}

// //   onAssignProperty={() =>
// //     handleAssignProperty(selectedPartner)
// //   }

// //   onGoToAssignment={() => {
// //     setSelectedPartner(null);
// //     setPartnerVisits([]);
// //     setShowAssignProperty(false);
// //     setPropertyId("");

// //     navigate("/partnerdashboard?tab=assignment");
// //   }}

// //   onViewProperty={(property) => {
// //     // Assigned Properties se explicit Mongo _id milegi.
// //     const propertyMongoId =
// //       property?.propertyMongoId ||
// //       property?._id ||
// //       null;

// //     if (!propertyMongoId) {
// //       console.error(
// //         "Property Mongo _id missing:",
// //         property
// //       );
// //       return;
// //     }

// //     navigate(
// //       `/property-management/${propertyMongoId}`
// //     );
// //   }}

// //   onViewVisit={(visit) => {
// //     if (!visit?._id) {
// //       return;
// //     }

// //     setSelectedPartner(null);
// //     setPartnerVisits([]);
// //     setShowAssignProperty(false);
// //     setPropertyId("");

// //     navigate(
// //       `/partnerdashboard?tab=visit&visitId=${visit._id}`
// //     );
// //   }}

// //   onClose={() => {
// //     setSelectedPartner(null);
// //     setPartnerVisits([]);
// //     setShowAssignProperty(false);
// //     setPropertyId("");

// //     // Embedded Partner Dashboard:
// //     // sirf drawer close hoga, route same rahega.
// //     if (embedded) {
// //       // Agar Visit Management se partnerId query ke saath aaye the,
// //       // query clean karke Partner Dashboard ke Dashboard tab par hi raho.
// //       if (initialPartnerId) {
// //         onEmbeddedDetailClose?.();
// //       }
// //       return;
// //     }

// //     // Standalone /partners/:id:
// //     // close ke baad /partners list.
// //     if (routePartnerId) {
// //       navigate("/partners", {
// //         replace: true,
// //       });
// //     }
// //   }}
// // />
// //       )}
// //     </div>
// //   );
// // };

// // const StatCard = ({ icon, title, value, badge, subText, color = "blue" }) => {
// //   const styles = {
// //     blue: {
// //       icon: "bg-[#eef7ff] text-[#4089c9]",
// //       badge: "bg-[#eaf9f5] text-[#17a988]",
// //     },

// //     orange: {
// //       icon: "bg-[#fff6e9] text-[#de9126]",
// //       badge: "bg-[#fff5e5] text-[#d68d20]",
// //     },

// //     green: {
// //       icon: "bg-[#eafaf6] text-[#15ad8d]",
// //       badge: "bg-[#eaf9f5] text-[#17a988]",
// //     },

// //     red: {
// //       icon: "bg-[#fff1f1] text-[#dc6262]",
// //       badge: "bg-[#fff0f0] text-[#dc6262]",
// //     },
// //   };

// //   const current = styles[color] || styles.blue;

// //   return (
// //     <div className="min-h-[105px] rounded-lg border border-[#e1e5ea] bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,0.04)]">
// //       <div className="flex items-start justify-between">
// //         <div
// //           className={`flex h-8 w-8 items-center justify-center rounded-md ${current.icon}`}
// //         >
// //           {icon}
// //         </div>

// //         {badge && (
// //           <span
// //             className={`rounded-full px-2 py-[3px] text-[8px] font-semibold ${current.badge}`}
// //           >
// //             {badge}
// //           </span>
// //         )}
// //       </div>

// //       <p className="mt-4 text-[9px] font-semibold uppercase tracking-wide text-gray-400">
// //         {title}
// //       </p>

// //       <div className="mt-1 flex items-end gap-2">
// //         <h2
// //           className={`text-[22px] font-semibold ${
// //             color === "red" ? "text-[#e34747]" : "text-[#14213d]"
// //           }`}
// //         >
// //           {Number(value || 0).toLocaleString()}
// //         </h2>

// //         {subText && (
// //           <span className="text-[8px] text-[#d98b29]">{subText}</span>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // const TableHeading = ({ children, align = "left", width }) => (
// //   <th
// //     style={{
// //       width,
// //     }}
// //     className={`px-3 text-[8px] font-semibold uppercase tracking-[0.6px] text-gray-400 ${
// //       align === "right"
// //         ? "text-right"
// //         : align === "center"
// //           ? "text-center"
// //           : "text-left"
// //     }`}
// //   >
// //     {children}
// //   </th>
// // );

// // const FilterSelect = ({ label, value, onChange, options }) => (
// //   <div className="relative">
// //     <select
// //       value={value}
// //       onChange={(e) => onChange(e.target.value)}
// //       className="h-[34px] appearance-none rounded-md border border-gray-200 bg-white pl-3 pr-8 text-[10px] text-gray-500 outline-none"
// //     >
// //       <option value="">{label}</option>

// //       {options.map((option) => (
// //         <option key={option} value={option}>
// //           {option}
// //         </option>
// //       ))}
// //     </select>

// //     <ChevronDown
// //       size={12}
// //       className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
// //     />
// //   </div>
// // );

// // const PartnerRow = ({
// //   partner,
// //   onClick,
// //   onVerify,
// //   onBlacklist,
// //   onDelete,
// //   actionLoading,
// //   openActionMenu,
// //   setOpenActionMenu,
// // }) => {
// //   const initials =
// //     partner?.name
// //       ?.split(" ")
// //       .filter(Boolean)
// //       .map((word) => word.charAt(0).toUpperCase())
// //       .join("")
// //       .slice(0, 2) || "P";

// //   const isBlacklisted = partner?.isBlacklisted || partner?.isBlocked;

// //   const isVerified = partner?.isVerified || partner?.isPhoneVerified;

// //   const status = isBlacklisted
// //     ? "Blacklisted"
// //     : isVerified
// //       ? "Verified"
// //       : "Pending";

// //   const statusStyles = {
// //     Verified: "bg-[#eaf9f5] text-[#11977c] border-[#d3f2e9]",

// //     Pending: "bg-[#fff6e8] text-[#c47a16] border-[#f7e2c4]",

// //     Blacklisted: "bg-[#fff1f1] text-[#d54c4c] border-[#f5dada]",
// //   };

// //   const locationText =
// //     [partner?.location?.city, partner?.location?.state]
// //       .filter(Boolean)
// //       .join(", ") || "-";

// //   return (
// //     <tr
// //       onClick={onClick}
// //       className="h-[78px] cursor-pointer border-b border-gray-100 transition hover:bg-[#fbfcfd]"
// //     >
// //       <td className="px-4" onClick={(e) => e.stopPropagation()}>
// //         <input type="checkbox" className="accent-[#18b894]" />
// //       </td>

// //       {/* PARTNER */}

// //       <td className="px-3">
// //         <div className="flex items-center gap-2.5">
// //           <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f5f2] text-[10px] font-semibold text-[#168b75]">
// //             {initials}

// //             <span
// //               className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${
// //                 isBlacklisted
// //                   ? "bg-red-500"
// //                   : isVerified
// //                     ? "bg-[#18b894]"
// //                     : "bg-[#f5a623]"
// //               }`}
// //             />
// //           </div>

// //           <div>
// //             <p className="max-w-[155px] truncate text-[10px] font-semibold text-[#26374a]">
// //               {partner?.name || "Unknown Partner"}
// //             </p>

// //             <p className="mt-1 text-[8px] font-semibold text-[#18a88b]">
// //               {partner?.partnerId || "-"}
// //             </p>
// //           </div>
// //         </div>
// //       </td>

// //       {/* LOCATION */}

// //       <td className="px-3">
// //         <div className="flex max-w-[160px] gap-1.5">
// //           <MapPin size={10} className="mt-0.5 shrink-0 text-gray-400" />

// //           <div>
// //             <p className="text-[9px] font-medium text-gray-600">
// //               {locationText}
// //             </p>

// //             {partner?.location?.address && (
// //               <p className="mt-0.5 max-w-[150px] truncate text-[8px] text-gray-400">
// //                 {partner.location.address}
// //               </p>
// //             )}
// //           </div>
// //         </div>
// //       </td>

// //       {/* PARTNER TYPE */}

// //       <td className="px-3">
// //         <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d5eee8] bg-[#f0faf7] px-2.5 py-1 text-[8px] font-semibold capitalize text-[#168b75]">
// //           {partner?.partnerType === "team" ? (
// //             <UsersRound size={10} />
// //           ) : (
// //             <UserRound size={10} />
// //           )}

// //           {partner?.partnerType || "single"}
// //         </span>
// //       </td>

// //       {/* CONTACT */}

// //       <td className="px-3">
// //         <p className="flex items-center gap-1.5 text-[9px] text-gray-600">
// //           <Phone size={9} />

// //           {partner?.phone || "-"}
// //         </p>

// //         <p className="mt-1 flex max-w-[170px] items-center gap-1.5 truncate text-[8px] text-gray-400">
// //           <Mail size={9} />

// //           {partner?.email || "-"}
// //         </p>
// //       </td>

// //       {/* VERIFICATION */}

// //       {/* <td className="px-3">

// //         <span
// //           className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[8px] ${
// //             isVerified
// //               ? "border-[#d3f2e9] bg-[#eaf9f5] text-[#11977c]"
// //               : "border-[#f7e2c4] bg-[#fff6e8] text-[#c47a16]"
// //           }`}
// //         >

// //           <BadgeCheck
// //             size={9}
// //           />

// //           {isVerified
// //             ? "Verified"
// //             : "Pending"}

// //         </span>

// //       </td> */}

// //       {/* STATUS */}

// //       <td className="px-3">
// //         <span
// //           className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[8px] ${statusStyles[status]}`}
// //         >
// //           <span className="h-1.5 w-1.5 rounded-full bg-current" />

// //           {status}
// //         </span>
// //       </td>

// //       {/* ACTION */}

// //       {/* <td
// //         className="relative px-4 text-right"
// //         onClick={(e) =>
// //           e.stopPropagation()
// //         }
// //       > */}
// //       <td
// //         className="relative px-2 text-center"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         {/* <button
// //           disabled={
// //             actionLoading ===
// //             partner._id
// //           }
// //           onClick={() =>
// //             setOpenActionMenu(
// //               openActionMenu ===
// //                 partner._id
// //                 ? null
// //                 : partner._id
// //             )
// //           }
// //           className="rounded-md p-2 text-gray-400 hover:bg-gray-100"
// //         >

// //           {actionLoading ===
// //           partner._id ? (

// //             <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-200 border-t-[#18b894]" />

// //           ) : (

// //             <MoreVertical
// //               size={16}
// //             />

// //           )}

// //         </button> */}
// //         <button
// //           type="button"
// //           disabled={actionLoading === partner._id}
// //           onClick={() =>
// //             setOpenActionMenu(
// //               openActionMenu === partner._id ? null : partner._id,
// //             )
// //           }
// //           className="
// //     mx-auto
// //     flex
// //     h-8
// //     w-8
// //     items-center
// //     justify-center
// //     rounded-lg
// //     border
// //     border-gray-200
// //     bg-white
// //     text-[#344054]
// //     shadow-sm
// //     transition
// //     hover:border-[#18b894]/40
// //     hover:bg-[#f0faf7]
// //     hover:text-[#18a88b]
// //     disabled:opacity-50
// //   "
// //         >
// //           {actionLoading === partner._id ? (
// //             <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-200 border-t-[#18b894]" />
// //           ) : (
// //             <MoreVertical size={17} strokeWidth={2} />
// //           )}
// //         </button>
// //         {/* {openActionMenu ===
// //           partner._id && (

// //           <div className="absolute right-5 top-11 z-[100] w-[190px] overflow-hidden rounded-lg border border-gray-100 bg-white py-1 text-left shadow-xl">

// //             <button
// //               onClick={
// //                 onClick
// //               }
// //               className="flex w-full items-center gap-2 px-3 py-2.5 text-[10px] text-gray-600 hover:bg-gray-50"
// //             >

// //               <UserRound
// //                 size={13}
// //               />

// //               View Details

// //             </button>

// //             {!isVerified && (

// //               <button
// //                 onClick={
// //                   onVerify
// //                 }
// //                 className="flex w-full items-center gap-2 px-3 py-2.5 text-[10px] text-[#11977c] hover:bg-[#f0faf7]"
// //               >

// //                 <ShieldCheck
// //                   size={13}
// //                 />

// //                 Verify Partner

// //               </button>

// //             )}

// //             <button
// //               onClick={
// //                 onBlacklist
// //               }
// //               className={`flex w-full items-center gap-2 px-3 py-2.5 text-[10px] ${
// //                 isBlacklisted
// //                   ? "text-[#11977c]"
// //                   : "text-orange-600"
// //               } hover:bg-gray-50`}
// //             >

// //               <Ban
// //                 size={13}
// //               />

// //               {isBlacklisted
// //                 ? "Remove Blacklist"
// //                 : "Blacklist Partner"}

// //             </button>

// //             <div className="my-1 border-t border-gray-100" />

// //             <button
// //               onClick={
// //                 onDelete
// //               }
// //               className="flex w-full items-center gap-2 px-3 py-2.5 text-[10px] text-red-500 hover:bg-red-50"
// //             >

// //               <Trash2
// //                 size={13}
// //               />

// //               Delete Partner

// //             </button>

// //           </div>

// //         )} */}
// //         {openActionMenu === partner._id && (
// //           <div
// //             className="
// //       absolute
// //       right-2
// //       top-10
// //       z-[9999]
// //       w-[190px]
// //       overflow-hidden
// //       rounded-xl
// //       border
// //       border-gray-200
// //       bg-white
// //       py-1.5
// //       text-left
// //       shadow-[0_12px_35px_rgba(15,23,42,0.16)]
// //     "
// //           >
// //             {/* VIEW */}

// //             <button
// //               type="button"
// //               onClick={onClick}
// //               className="
// //         flex
// //         w-full
// //         items-center
// //         gap-2.5
// //         px-3.5
// //         py-2.5
// //         text-[10px]
// //         font-medium
// //         text-gray-600
// //         transition
// //         hover:bg-gray-50
// //         hover:text-[#172b4d]
// //       "
// //             >
// //               <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#eef4f8] text-[#315875]">
// //                 <UserRound size={13} strokeWidth={2} />
// //               </div>
// //               View Details
// //             </button>

// //             {/* VERIFY */}

// //             {!isVerified && (
// //               <button
// //                 type="button"
// //                 onClick={onVerify}
// //                 className="
// //           flex
// //           w-full
// //           items-center
// //           gap-2.5
// //           px-3.5
// //           py-2.5
// //           text-[10px]
// //           font-medium
// //           text-[#11977c]
// //           transition
// //           hover:bg-[#f0faf7]
// //         "
// //               >
// //                 <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#eaf9f5] text-[#11977c]">
// //                   <ShieldCheck size={13} strokeWidth={2} />
// //                 </div>
// //                 Verify Partner
// //               </button>
// //             )}

// //             {/* BLACKLIST */}

// //             <button
// //               type="button"
// //               onClick={onBlacklist}
// //               className={`
// //         flex
// //         w-full
// //         items-center
// //         gap-2.5
// //         px-3.5
// //         py-2.5
// //         text-[10px]
// //         font-medium
// //         transition
// //         hover:bg-[#fff8ee]

// //         ${isBlacklisted ? "text-[#11977c]" : "text-[#e67e22]"}
// //       `}
// //             >
// //               <div
// //                 className={`flex h-6 w-6 items-center justify-center rounded-md ${
// //                   isBlacklisted
// //                     ? "bg-[#eaf9f5] text-[#11977c]"
// //                     : "bg-[#fff4e8] text-[#e67e22]"
// //                 }`}
// //               >
// //                 <Ban size={13} strokeWidth={2} />
// //               </div>

// //               {isBlacklisted ? "Remove Blacklist" : "Blacklist Partner"}
// //             </button>

// //             <div className="my-1 border-t border-gray-100" />

// //             {/* DELETE */}

// //             <button
// //               type="button"
// //               onClick={onDelete}
// //               className="
// //         flex
// //         w-full
// //         items-center
// //         gap-2.5
// //         px-3.5
// //         py-2.5
// //         text-[10px]
// //         font-medium
// //         text-red-500
// //         transition
// //         hover:bg-red-50
// //       "
// //             >
// //               <div className="flex h-6 w-6 items-center justify-center rounded-md bg-red-50 text-red-500">
// //                 <Trash2 size={13} strokeWidth={2} />
// //               </div>
// //               Delete Partner
// //             </button>
// //           </div>
// //         )}
// //       </td>
// //     </tr>
// //   );
// // };

// // const PartnerDetailsDrawer = ({
// //   partner,
// //   loading,
// //   onClose,
// //   partnerVisits = [],
// //   onViewProperty,
// //   onViewVisit,

// //   showAssignProperty,
// //   setShowAssignProperty,

// //   propertyId,
// //   setPropertyId,

// //   onAssignProperty,
// //   actionLoading,
// //   onGoToAssignment,
// // }) => {
// //   const assignedProperties = Array.isArray(partner?.assignedProperties)
// //     ? partner.assignedProperties
// //     : [];

// //   const addedProperties = Array.isArray(partner?.addedProperties)
// //     ? partner.addedProperties
// //     : [];

// //   const locationText =
// //     [
// //       partner?.location?.city,

// //       partner?.location?.state,

// //       partner?.location?.country,
// //     ]
// //       .filter(Boolean)
// //       .join(", ") || "-";

// //   return (
// //     <div className="fixed inset-0 z-[999]">
// //       <div
// //         onClick={onClose}
// //         className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
// //       />

// //       <div className="absolute bottom-0 right-0 top-0 w-full max-w-[520px] overflow-y-auto bg-[#f8fafb] shadow-[-10px_0_35px_rgba(0,0,0,0.08)]">
// //         {/* HEADER */}

// //         <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4">
// //           <div>
// //             <h2 className="text-base font-semibold text-[#172b4d]">
// //               Partner Details
// //             </h2>

// //             <p className="mt-0.5 text-[10px] text-gray-400">
// //               Partner profile, location and assigned properties
// //             </p>
// //           </div>

// //           <button
// //             onClick={onClose}
// //             className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100"
// //           >
// //             <X size={16} />
// //           </button>
// //         </div>

// //         {loading ? (
// //           <div className="flex h-[400px] items-center justify-center">
// //             <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-[#18b894]" />
// //           </div>
// //         ) : partner ? (
// //           <div className="space-y-4 p-5">
// //             {/* PROFILE */}

// //             <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
// //               <div className="flex items-center gap-4">
// //                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f8f4] text-lg font-semibold text-[#169277]">
// //                   {partner?.name
// //                     ?.split(" ")
// //                     .filter(Boolean)
// //                     .map((item) => item.charAt(0).toUpperCase())
// //                     .join("")
// //                     .slice(0, 2) || "P"}
// //                 </div>

// //                 <div>
// //                   <h3 className="text-[17px] font-semibold text-[#172b4d]">
// //                     {partner?.name || "Partner"}
// //                   </h3>

// //                   <p className="mt-1 text-[10px] font-semibold text-[#18a88b]">
// //                     {partner?.partnerId || "-"}
// //                   </p>

// //                   <div className="mt-2 flex gap-2">
// //                     <span className="rounded-full bg-[#eef8f5] px-2.5 py-1 text-[8px] font-semibold capitalize text-[#138d77]">
// //                       {partner?.partnerType === "team"
// //                         ? "Team Partner"
// //                         : "Single Partner"}
// //                     </span>

// //                     <span className="rounded-full bg-[#eef7ff] px-2.5 py-1 text-[8px] text-[#427ba6]">
// //                       {partner?.role || "partner"}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* INFORMATION */}

// //             <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
// //               <SectionTitle>Partner Information</SectionTitle>

// //               <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
// //                 <DetailRow
// //                   icon={<Mail size={14} />}
// //                   label="Email"
// //                   value={partner?.email}
// //                 />

// //                 <DetailRow
// //                   icon={<Phone size={14} />}
// //                   label="Phone"
// //                   value={partner?.phone}
// //                 />

// //                 <DetailRow
// //                   icon={<BadgeCheck size={14} />}
// //                   label="Partner ID"
// //                   value={partner?.partnerId}
// //                 />

// //                 <DetailRow
// //                   icon={
// //                     partner?.partnerType === "team" ? (
// //                       <UsersRound size={14} />
// //                     ) : (
// //                       <UserRound size={14} />
// //                     )
// //                   }
// //                   label="Partner Type"
// //                   value={partner?.partnerType || "single"}
// //                 />

// //                 <DetailRow
// //                   icon={<CalendarDays size={14} />}
// //                   label="Joined On"
// //                   value={
// //                     partner?.createdAt
// //                       ? new Date(partner.createdAt).toLocaleDateString(
// //                           "en-IN",
// //                           {
// //                             day: "2-digit",
// //                             month: "short",
// //                             year: "numeric",
// //                           },
// //                         )
// //                       : "-"
// //                   }
// //                 />

// //                 <DetailRow
// //                   icon={<ShieldCheck size={14} />}
// //                   label="Verification"
// //                   value={
// //                     partner?.isVerified || partner?.isPhoneVerified
// //                       ? "Verified"
// //                       : "Pending"
// //                   }
// //                 />
// //               </div>
// //             </div>

// //             {/* LOCATION */}

// //             <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
// //               <SectionTitle>Location</SectionTitle>

// //               <div className="flex gap-3">
// //                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef8f5] text-[#18a88b]">
// //                   <MapPin size={16} />
// //                 </div>

// //                 <div>
// //                   <p className="text-[11px] font-semibold text-gray-700">
// //                     {locationText}
// //                   </p>

// //                   <p className="mt-1 text-[9px] text-gray-400">
// //                     {partner?.location?.address || "Address not available"}
// //                   </p>

// //                   {Array.isArray(
// //                     partner?.location?.coordinates?.coordinates,
// //                   ) && (
// //                     <p className="mt-2 text-[8px] text-gray-400">
// //                       Longitude: {partner.location.coordinates.coordinates[0]}
// //                       {" • "}
// //                       Latitude: {partner.location.coordinates.coordinates[1]}
// //                     </p>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ASSIGNED PROPERTY */}

// //             <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
// //               <div className="mb-4 flex items-center justify-between">
// //                 <div>
// //                   <h4 className="text-[12px] font-semibold text-[#26374a]">
// //                     Assigned Properties
// //                   </h4>

// //                   <p className="mt-1 text-[9px] text-gray-400">
// //                     {assignedProperties.length} properties assigned
// //                   </p>
// //                 </div>

// //                 <button
// //                   type="button"
// //                   onClick={() => onGoToAssignment?.()}
// //                   className="flex h-8 items-center gap-1.5 rounded-md bg-[#18b894] px-3 text-[9px] font-semibold text-white"
// //                 >
// //                   <Plus size={12} />
// //                   Assign Property
// //                 </button>
// //               </div>

// //               {showAssignProperty && (
// //                 <div className="mb-4 rounded-lg border border-[#ccece4] bg-[#f5fcfa] p-3">
// //                   <label className="mb-2 block text-[9px] font-semibold uppercase text-gray-500">
// //                     Property ID
// //                   </label>

// //                   <div className="flex gap-2">
// //                     <input
// //                       value={propertyId}
// //                       onChange={(e) => setPropertyId(e.target.value)}
// //                       placeholder="Enter Property ID"
// //                       className="h-9 min-w-0 flex-1 rounded-md border border-gray-200 bg-white px-3 text-[10px] outline-none focus:border-[#18b894]"
// //                     />

// //                     <button
// //                       disabled={actionLoading === "assign-property"}
// //                       onClick={onAssignProperty}
// //                       className="flex h-9 items-center gap-1.5 rounded-md bg-[#183a56] px-3 text-[9px] font-semibold text-white disabled:opacity-50"
// //                     >
// //                       <CheckCircle2 size={12} />

// //                       {actionLoading === "assign-property"
// //                         ? "Assigning..."
// //                         : "Assign"}
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}

// //               {assignedProperties.length > 0 ? (
// //                 <div className="space-y-2">
// //                   {/* {assignedProperties.map((property, index) => (
// //                     <button
// //                       type="button"
// //                       key={property?._id || property?.propertyId?._id || index}
// //                       onClick={() => onViewProperty?.(property)}
// //                       className="w-full rounded-lg border border-gray-100 bg-[#fafbfc] p-3 text-left transition hover:border-[#18b894] hover:bg-[#f4fbf9] hover:shadow-sm"
// //                     >
// //                       <div className="flex items-start gap-3">
// //                         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef7ff] text-[#4383b4]">
// //                           <Building2 size={15} />
// //                         </div>

// //                         <div className="min-w-0 flex-1">
// //                           <p className="truncate text-[10px] font-semibold text-[#26374a]">
// //                             {property?.title ||
// //                               property?.propertyName ||
// //                               property?.projectName ||
// //                               `Property ${index + 1}`}
// //                           </p>

// //                           <p className="mt-1 text-[8px] font-medium text-[#18a88b]">
// //                             {property?.propertyId || property?._id || "-"}
// //                           </p>

// //                           <p className="mt-1 text-[8px] text-gray-400">
// //                             {[property?.locality, property?.city]
// //                               .filter(Boolean)
// //                               .join(", ") ||
// //                               property?.location ||
// //                               "Location not available"}
// //                           </p>
// //                         </div>

// //                         <span className="rounded-full bg-[#eaf9f5] px-2 py-1 text-[7px] font-semibold text-[#11977c]">
// //                           Assigned
// //                         </span>
// //                       </div>
// //                     </button>
// //                   ))} */}
// //                   {assignedProperties.map((property, index) => {
// //   // IMPORTANT:
// //   // Screen par propertyCode show hoga,
// //   // click par ONLY property._id route me jayegi.
// //   const propertyMongoId =
// //     property?._id || null;

// //   const propertyCode =
// //     property?.propertyCode ||
// //     property?.propertyId?.propertyId ||
// //     property?.propertyId ||
// //     "-";

// //   const propertyTitle =
// //     property?.propertyId?.title ||
// //     property?.title ||
// //     `Property ${index + 1}`;

// //   const propertyLocation =
// //     [
// //       property?.propertyId?.locality || property?.locality,
// //       property?.propertyId?.city || property?.city,
// //     ]
// //       .filter(Boolean)
// //       .join(", ") || "Location not available";

// //   return (
// //     <button
// //       type="button"
// //       key={property?._id || propertyMongoId || index}
// //       // onClick={() => {
// //       //   if (!propertyMongoId) return;

// //       //   navigate(
// //       //     `/property-management/${propertyMongoId}`
// //       //   );
// //       // }}
// //       onClick={() => {
// //         if (!propertyMongoId) {
// //           console.error(
// //             "Assigned property _id missing:",
// //             property
// //           );
// //           return;
// //         }

// //         onViewProperty?.({
// //           ...property,
// //           propertyMongoId,
// //         });
// //       }}
// //       className="
// //         w-full
// //         rounded-lg
// //         border
// //         border-gray-100
// //         bg-[#fafbfc]
// //         p-3
// //         text-left
// //         transition
// //         hover:border-[#18b894]
// //         hover:bg-[#f4fbf9]
// //         hover:shadow-sm
// //       "
// //     >
// //       <div className="flex items-start gap-3">

// //         <div
// //           className="
// //             flex
// //             h-9
// //             w-9
// //             shrink-0
// //             items-center
// //             justify-center
// //             rounded-lg
// //             bg-[#eef7ff]
// //             text-[#4383b4]
// //           "
// //         >
// //           <Building2 size={15} />
// //         </div>

// //         <div className="min-w-0 flex-1">

// //           <p className="truncate text-[10px] font-semibold text-[#26374a]">
// //             {propertyTitle}
// //           </p>

// //           {/* DISPLAY PROPERTY CODE */}
// //           <p className="mt-1 text-[8px] font-semibold text-[#18a88b]">
// //             {propertyCode}
// //           </p>

// //           <p className="mt-1 text-[8px] text-gray-400">
// //             {propertyLocation}
// //           </p>

// //         </div>

// //         <div className="flex flex-col items-end gap-2">

// //           <span
// //             className="
// //               rounded-full
// //               bg-[#eaf9f5]
// //               px-2
// //               py-1
// //               text-[7px]
// //               font-semibold
// //               text-[#11977c]
// //             "
// //           >
// //             {property?.status || "Assigned"}
// //           </span>

// //           <Eye
// //             size={13}
// //             className="text-[#18a88b]"
// //           />

// //         </div>

// //       </div>
// //     </button>
// //   );
// // })}
// //                 </div>
// //               ) : (
// //                 <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 p-7 text-center">
// //                   <Building2 size={24} className="mx-auto text-gray-300" />

// //                   <p className="mt-2 text-[10px] font-medium text-gray-500">
// //                     No properties assigned
// //                   </p>

// //                   <p className="mt-1 text-[8px] text-gray-400">
// //                     Click Assign Property to assign property.
// //                   </p>
// //                 </div>
// //               )}
// //             </div>

// //             {/* PARTNER ADDED PROPERTIES */}
// //             <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
// //               <div className="mb-4 flex items-center justify-between gap-3">
// //                 <div>
// //                   <h4 className="text-[12px] font-semibold text-[#26374a]">
// //                     Properties Added By Partner
// //                   </h4>
// //                   <p className="mt-1 text-[9px] text-gray-400">
// //                     {addedProperties.length} properties created by this partner
// //                   </p>
// //                 </div>
// //                 <span className="rounded-full bg-[#eaf9f5] px-2.5 py-1 text-[8px] font-semibold text-[#11977c]">
// //                   Partner Added
// //                 </span>
// //               </div>

// //               {addedProperties.length ? (
// //                 <div className="space-y-3">
// //                   {addedProperties.map((property, index) => (
// //                     <div
// //                       key={property?._id || index}
// //                       className="rounded-lg border border-[#e4ecea] bg-[#fbfdfc] p-3"
// //                     >
// //                       <div className="flex items-start gap-3">
// //                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eaf8f4] text-[#11977c]">
// //                           <Building2 size={16} />
// //                         </div>

// //                         <div className="min-w-0 flex-1">
// //                           <p className="truncate text-[11px] font-semibold text-[#26374a]">
// //                             {property?.title || "Untitled Property"}
// //                           </p>
// //                           <p className="mt-1 text-[8px] font-semibold text-[#18a88b]">
// //                             {property?.propertyId || "-"}
// //                           </p>
// //                           <p className="mt-1 text-[8px] text-gray-400">
// //                             {[property?.locality, property?.city]
// //                               .filter(Boolean)
// //                               .join(", ") || "Location unavailable"}
// //                           </p>
// //                         </div>

// //                         <PropertyStatusBadge status={property?.status} />
// //                       </div>

// //                       <div className="mt-3 grid grid-cols-2 gap-2">
// //                         <MiniInfo label="Category" value={property?.category} />
// //                         <MiniInfo
// //                           label="Type"
// //                           value={property?.transactionType}
// //                         />
// //                         <MiniInfo
// //                           label="Price"
// //                           value={
// //                             property?.price
// //                               ? `₹${Number(property.price).toLocaleString("en-IN")}`
// //                               : "-"
// //                           }
// //                         />
// //                         <MiniInfo
// //                           label="Created"
// //                           value={
// //                             property?.createdAt
// //                               ? new Date(property.createdAt).toLocaleDateString(
// //                                   "en-IN",
// //                                 )
// //                               : "-"
// //                           }
// //                         />
// //                       </div>

// //                       <div className="mt-4 border-t border-gray-100 pt-3">
// //                         <div className="mb-3 flex items-center gap-2">
// //                           <History size={12} className="text-[#18a88b]" />
// //                           <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
// //                             Status History
// //                           </p>
// //                         </div>

// //                         {Array.isArray(property?.statusHistory) &&
// //                         property.statusHistory.length ? (
// //                           <div className="space-y-3">
// //                             {property.statusHistory
// //                               .slice()
// //                               .reverse()
// //                               .map((history, historyIndex) => (
// //                                 <div
// //                                   key={history?._id || historyIndex}
// //                                   className="flex gap-3"
// //                                 >
// //                                   <div className="flex flex-col items-center">
// //                                     <span className="mt-1 h-2 w-2 rounded-full bg-[#18b894]" />
// //                                     {historyIndex <
// //                                       property.statusHistory.length - 1 && (
// //                                       <span className="mt-1 h-full min-h-7 w-px bg-[#dceae6]" />
// //                                     )}
// //                                   </div>

// //                                   <div className="pb-1">
// //                                     <p className="text-[9px] font-semibold text-[#40545a]">
// //                                       {history?.status || "-"}
// //                                     </p>
// //                                     <p className="mt-1 text-[8px] text-gray-400">
// //                                       {history?.updatedBy?.name || "System"} •{" "}
// //                                       {history?.updatedBy?.role || "-"}
// //                                     </p>
// //                                     <p className="mt-1 text-[8px] text-gray-400">
// //                                       {history?.updatedAt
// //                                         ? new Date(
// //                                             history.updatedAt,
// //                                           ).toLocaleString("en-IN")
// //                                         : "-"}
// //                                     </p>
// //                                     {history?.remarks && (
// //                                       <p className="mt-1 text-[8px] leading-relaxed text-gray-500">
// //                                         {history.remarks}
// //                                       </p>
// //                                     )}
// //                                   </div>
// //                                 </div>
// //                               ))}
// //                           </div>
// //                         ) : (
// //                           <p className="py-3 text-center text-[8px] text-gray-400">
// //                             No status history available.
// //                           </p>
// //                         )}
// //                       </div>

// //                       <button
// //                         type="button"
// //                         onClick={() => onViewProperty?.(property)}
// //                         className="mt-4 flex h-9 w-full items-center justify-center gap-1.5 rounded-md bg-[#073c5c] text-[9px] font-semibold text-white transition hover:bg-[#052f49]"
// //                       >
// //                         <Eye size={12} />
// //                         View Full Property
// //                       </button>
// //                     </div>
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 p-7 text-center">
// //                   <Building2 size={24} className="mx-auto text-gray-300" />
// //                   <p className="mt-2 text-[10px] font-medium text-gray-500">
// //                     No properties added by partner
// //                   </p>
// //                 </div>
// //               )}
// //             </div>

// //             {/* PARTNER VISIT REQUESTS */}
// //             <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
// //               <div className="mb-4">
// //                 <h4 className="text-[12px] font-semibold text-[#26374a]">
// //                   Visit Requests
// //                 </h4>
// //                 <p className="mt-1 text-[9px] text-gray-400">
// //                   {partnerVisits.length} requests from this partner
// //                 </p>
// //               </div>

// //               {partnerVisits.length ? (
// //                 <div className="space-y-2">
// //                   {partnerVisits.map((visit) => (
// //                     <div
// //                       key={visit?._id || visit?.visitId}
// //                       className="rounded-lg border border-[#e3ecea] bg-[#fbfdfc] p-3"
// //                     >
// //                       <div className="flex items-start justify-between gap-3">
// //                         <div className="min-w-0">
// //                           <p className="truncate text-[10px] font-semibold text-[#26374a]">
// //                             {visit?.propertySnapshot?.title || "Property Visit"}
// //                           </p>
// //                           <p className="mt-1 text-[8px] font-semibold text-[#18a88b]">
// //                             {visit?.visitId || "-"}
// //                           </p>
// //                           <p className="mt-1 text-[8px] text-gray-400">
// //                             Property:{" "}
// //                             {visit?.propertySnapshot?.propertyCode || "-"}
// //                           </p>
// //                         </div>

// //                         <div className="flex flex-col items-end gap-1">
// //                           <span className="rounded-full bg-[#fff8e8] px-2 py-1 text-[7px] font-semibold text-[#b87818]">
// //                             {visit?.status || "Requested"}
// //                           </span>
// //                           <span className="rounded-full bg-[#eef7ff] px-2 py-1 text-[7px] font-semibold text-[#3978a8]">
// //                             {visit?.approvalStatus || "Pending"}
// //                           </span>
// //                         </div>
// //                       </div>

// //                       <div className="mt-3 rounded-md bg-[#f7faf9] p-2.5">
// //                         <p className="text-[7px] uppercase tracking-wide text-gray-400">
// //                           Requested Visit
// //                         </p>
// //                         <p className="mt-1 text-[9px] font-medium text-gray-600">
// //                           {visit?.requestedVisitAt
// //                             ? new Date(visit.requestedVisitAt).toLocaleString(
// //                                 "en-IN",
// //                               )
// //                             : "-"}
// //                         </p>
// //                       </div>

// //                       {visit?.requestNotes && (
// //                         <p className="mt-2 text-[8px] text-gray-500">
// //                           Notes: {visit.requestNotes}
// //                         </p>
// //                       )}

// //                       <button
// //                         type="button"
// //                         onClick={() => onViewVisit?.(visit)}
// //                         className="mt-3 flex h-9 w-full items-center justify-center gap-1.5 rounded-md bg-[#073c5c] text-[9px] font-semibold text-white"
// //                       >
// //                         <Eye size={12} />
// //                         View Full Visit Details
// //                       </button>
// //                     </div>
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 p-7 text-center">
// //                   <CalendarDays size={23} className="mx-auto text-gray-300" />
// //                   <p className="mt-2 text-[10px] font-medium text-gray-500">
// //                     No visit requests
// //                   </p>
// //                   <p className="mt-1 text-[8px] text-gray-400">
// //                     This partner has not submitted any visit request.
// //                   </p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="flex h-[400px] items-center justify-center text-xs text-gray-400">
// //             Partner data not available.
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // const MiniInfo = ({ label, value }) => (
// //   <div className="rounded-md bg-[#f7faf9] p-2">
// //     <p className="text-[7px] uppercase tracking-wide text-gray-400">{label}</p>
// //     <p className="mt-1 truncate text-[9px] font-medium text-gray-600">
// //       {value || "-"}
// //     </p>
// //   </div>
// // );

// // const PropertyStatusBadge = ({ status }) => {
// //   const styles = {
// //     Draft: "bg-gray-100 text-gray-600",
// //     Submitted: "bg-blue-50 text-blue-600",
// //     Assigned_To_Partner: "bg-cyan-50 text-cyan-700",
// //     Reviewing: "bg-amber-50 text-amber-700",
// //     Verified: "bg-emerald-50 text-emerald-700",
// //     Live: "bg-green-50 text-green-700",
// //     Rejected: "bg-red-50 text-red-600",
// //     Sold: "bg-purple-50 text-purple-700",
// //     Rented: "bg-indigo-50 text-indigo-700",
// //   };

// //   return (
// //     <span
// //       className={`shrink-0 rounded-full px-2 py-1 text-[7px] font-semibold ${
// //         styles[status] || styles.Draft
// //       }`}
// //     >
// //       {status || "Draft"}
// //     </span>
// //   );
// // };

// // const SectionTitle = ({ children }) => (
// //   <div className="mb-3 flex items-center gap-2">
// //     <h4 className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-[#26374a]">
// //       {children}
// //     </h4>

// //     <div className="h-px flex-1 bg-gray-100" />
// //   </div>
// // );

// // const DetailRow = ({ icon, label, value }) => (
// //   <div className="rounded-lg border border-gray-100 bg-[#fafbfc] p-3.5">
// //     <div className="flex gap-3">
// //       <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#18a88b] shadow-sm">
// //         {icon}
// //       </div>

// //       <div className="min-w-0">
// //         <p className="text-[9px] uppercase tracking-wide text-gray-400">
// //           {label}
// //         </p>

// //         <p className="mt-1 break-all text-[11px] font-medium capitalize text-gray-700">
// //           {value || "-"}
// //         </p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // export default PartnerManagement;

// import React, { useEffect, useMemo, useState } from "react";

// import { useNavigate, useParams } from "react-router-dom";

// import {
//   Search,
//   SlidersHorizontal,
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   MoreVertical,
//   Download,
//   UserPlus,
//   Users,
//   BadgeCheck,
//   BriefcaseBusiness,
//   UserRoundCheck,
//   X,
//   Mail,
//   Phone,
//   CalendarDays,
//   RefreshCw,
//   MapPin,
//   ShieldCheck,
//   Ban,
//   Trash2,
//   Building2,
//   UserRound,
//   UsersRound,
//   Plus,
//   CheckCircle2,
//   Eye,
//   History,
// } from "lucide-react";

// import Swal from "sweetalert2";

// import {
//   getAllPartnersApi,
//   getPartnerByIdApi,
//   verifyPartnerApi,
//   blacklistPartnerApi,
//   deletePartnerApi,
//   assignPropertyToPartnerApi,
// } from "../../../Services/partnerService";

// import { getPartnerVisitsApi } from "../../../Services/visitService";

// const PartnerManagement = ({
//   embedded = false,
//   initialPartnerId = null,
//   onEmbeddedDetailClose,
// }) => {
//   const navigate = useNavigate();
//   const { id: routePartnerId } = useParams();
//   // ======================================================
//   // STATES
//   // ======================================================

//   const [partners, setPartners] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");

//   const [activeTab, setActiveTab] = useState("All");

//   const [verificationFilter, setVerificationFilter] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);

//   const [itemsPerPage] = useState(8);

//   const [selectedPartner, setSelectedPartner] = useState(null);

//   const [partnerDetailsLoading, setPartnerDetailsLoading] = useState(false);

//   const [actionLoading, setActionLoading] = useState("");

//   const [openActionMenu, setOpenActionMenu] = useState(null);

//   const [showAssignProperty, setShowAssignProperty] = useState(false);

//   const [propertyId, setPropertyId] = useState("");

//   const [partnerVisits, setPartnerVisits] = useState([]);

//   // ======================================================
//   // GET ALL PARTNERS
//   // ======================================================

//   const fetchPartners = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await getAllPartnersApi();

//       console.log("GET ALL PARTNERS RESPONSE:", response);

//       if (response?.success === true && Array.isArray(response?.data)) {
//         setPartners(response.data);
//       } else {
//         setPartners([]);

//         setError(response?.message || "Unable to fetch partners");
//       }
//     } catch (err) {
//       console.error("GET ALL PARTNERS ERROR:", err);

//       setError(
//         err?.response?.data?.message ||
//           err?.message ||
//           "Unable to fetch partners",
//       );

//       setPartners([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ======================================================
//   // GET PARTNER BY ID
//   // ======================================================

//   const handleGetPartnerById = async (id) => {
//     try {
//       setPartnerDetailsLoading(true);
//       setSelectedPartner(null);
//       setPartnerVisits([]);
//       setShowAssignProperty(false);
//       setPropertyId("");
//       setOpenActionMenu(null);

//       const [partnerResult, visitResult] = await Promise.allSettled([
//         getPartnerByIdApi(id),
//         getPartnerVisitsApi(id),
//       ]);

//       if (
//         partnerResult.status === "fulfilled" &&
//         partnerResult.value?.success &&
//         partnerResult.value?.data
//       ) {
//         setSelectedPartner(partnerResult.value.data);
//       } else {
//         const message =
//           partnerResult.status === "rejected"
//             ? partnerResult.reason?.response?.data?.message ||
//               partnerResult.reason?.message
//             : partnerResult.value?.message;
//         throw new Error(message || "Unable to load partner details");
//       }

//       if (visitResult.status === "fulfilled" && visitResult.value?.success) {
//         const visitData = visitResult.value?.data;
//         setPartnerVisits(
//           Array.isArray(visitData)
//             ? visitData
//             : Array.isArray(visitData?.visits)
//               ? visitData.visits
//               : [],
//         );
//       } else {
//         setPartnerVisits([]);
//       }
//     } catch (err) {
//       console.error("GET PARTNER DETAIL ERROR:", err);
//       setSelectedPartner(null);
//       setPartnerVisits([]);

//       await Swal.fire({
//         title: "Error",
//         text:
//           err?.response?.data?.message ||
//           err?.message ||
//           "Unable to load partner details",
//         icon: "error",
//       });
//     } finally {
//       setPartnerDetailsLoading(false);
//     }
//   };

//   // ======================================================
//   // INITIAL LOAD
//   // ======================================================

//   useEffect(() => {
//     fetchPartners();
//   }, []);

//   useEffect(() => {
//     // Partner Dashboard ke embedded mode me URL params use nahi karne.
//     if (embedded) {
//       return;
//     }

//     if (routePartnerId) {
//       handleGetPartnerById(routePartnerId);
//     }
//   }, [routePartnerId, embedded]);

//   // Visit Management se Partner Dashboard par aane par
//   // selected partner drawer automatically open karo.
//   useEffect(() => {
//     if (!embedded || !initialPartnerId) {
//       return;
//     }

//     handleGetPartnerById(initialPartnerId);
//   }, [embedded, initialPartnerId]);

//   // ======================================================
//   // STATUS
//   // ======================================================

//   const getPartnerStatus = (partner) => {
//     if (partner?.isBlacklisted || partner?.isBlocked) {
//       return "Blacklisted";
//     }

//     if (partner?.isSuspended) {
//       return "Suspended";
//     }

//     if (partner?.isVerified || partner?.isPhoneVerified) {
//       return "Verified";
//     }

//     return "Pending";
//   };

//   // ======================================================
//   // VERIFY PARTNER
//   // ======================================================

//   // const handleVerifyPartner =
//   //   async (partner) => {
//   //     const result =
//   //       await Swal.fire({
//   //         title:
//   //           "Verify Partner?",

//   //         text: `${
//   //           partner?.name ||
//   //           "This partner"
//   //         } will be marked as verified.`,

//   //         icon: "question",

//   //         showCancelButton:
//   //           true,

//   //         confirmButtonText:
//   //           "Yes, Verify",

//   //         cancelButtonText:
//   //           "Cancel",

//   //         confirmButtonColor:
//   //           "#35C99A",
//   //       });

//   //     if (
//   //       !result.isConfirmed
//   //     ) {
//   //       return;
//   //     }

//   //     try {
//   //       setActionLoading(
//   //         partner._id
//   //       );

//   //       const response =
//   //         await verifyPartnerApi(
//   //           partner._id
//   //         );

//   //       if (
//   //         response?.success
//   //       ) {
//   //         await Swal.fire({
//   //           title:
//   //             "Partner Verified!",

//   //           text:
//   //             response?.message ||
//   //             "Partner verified successfully.",

//   //           icon: "success",

//   //           confirmButtonColor:
//   //             "#35C99A",
//   //         });

//   //         await fetchPartners();

//   //         if (
//   //           selectedPartner?._id ===
//   //           partner._id
//   //         ) {
//   //           await handleGetPartnerById(
//   //             partner._id
//   //           );
//   //         }
//   //       } else {
//   //         throw new Error(
//   //           response?.message ||
//   //             "Unable to verify partner"
//   //         );
//   //       }
//   //     } catch (error) {
//   //       await Swal.fire({
//   //         title: "Error",

//   //         text:
//   //           error?.response?.data
//   //             ?.message ||
//   //           error?.message ||
//   //           "Unable to verify partner.",

//   //         icon: "error",
//   //       });
//   //     } finally {
//   //       setActionLoading("");
//   //       setOpenActionMenu(
//   //         null
//   //       );
//   //     }
//   //   };
//   const handleVerifyPartner = async (partner) => {
//     const result = await Swal.fire({
//       title: "Verify Partner?",
//       text: `${partner?.name || "This partner"} will be marked as verified.`,
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonText: "Yes, Verify",
//       cancelButtonText: "Cancel",
//       confirmButtonColor: "#35C99A",
//     });

//     if (!result.isConfirmed) {
//       return;
//     }

//     try {
//       setActionLoading(partner._id);

//       // Body me isVerified: true bhejne ke liye second argument true add kiya
//       const response = await verifyPartnerApi(partner._id, true);

//       if (response?.success) {
//         await Swal.fire({
//           title: "Partner Verified!",
//           text: response?.message || "Partner verified successfully.",
//           icon: "success",
//           confirmButtonColor: "#35C99A",
//         });

//         await fetchPartners();

//         if (selectedPartner?._id === partner._id) {
//           await handleGetPartnerById(partner._id);
//         }
//       } else {
//         throw new Error(response?.message || "Unable to verify partner");
//       }
//     } catch (error) {
//       await Swal.fire({
//         title: "Error",
//         text:
//           error?.response?.data?.message ||
//           error?.message ||
//           "Unable to verify partner.",
//         icon: "error",
//       });
//     } finally {
//       setActionLoading("");
//       setOpenActionMenu(null);
//     }
//   };

//   // ======================================================
//   // BLACKLIST PARTNER
//   // ======================================================

//   const handleBlacklistPartner = async (partner) => {
//     const currentlyBlocked = partner?.isBlocked;

//     const result = await Swal.fire({
//       title: currentlyBlocked ? "Unblock Partner?" : "Block Partner?",
//       text: currentlyBlocked
//         ? `${partner?.name || "This partner"} will be unblocked.`
//         : `${partner?.name || "This partner"} will be blocked from access.`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: currentlyBlocked ? "Yes, Unblock" : "Yes, Block",
//       cancelButtonText: "Cancel",
//       confirmButtonColor: currentlyBlocked ? "#35C99A" : "#dc2626",
//     });

//     if (!result.isConfirmed) {
//       return;
//     }

//     try {
//       setActionLoading(partner._id);

//       // Toggles status: sends true if currently unblocked, false if currently blocked
//       const response = await blacklistPartnerApi(
//         partner._id,
//         !currentlyBlocked,
//       );

//       if (response?.success) {
//         await Swal.fire({
//           title: currentlyBlocked ? "Partner Unblocked!" : "Partner Blocked!",
//           text: response?.message || "Partner status updated successfully.",
//           icon: "success",
//           confirmButtonColor: "#35C99A",
//         });

//         await fetchPartners();

//         if (selectedPartner?._id === partner._id) {
//           await handleGetPartnerById(partner._id);
//         }
//       } else {
//         throw new Error(response?.message || "Unable to update partner status");
//       }
//     } catch (error) {
//       await Swal.fire({
//         title: "Error",
//         text:
//           error?.response?.data?.message ||
//           error?.message ||
//           "Unable to update partner status.",
//         icon: "error",
//       });
//     } finally {
//       setActionLoading("");
//       setOpenActionMenu(null);
//     }
//   };

//   // ======================================================
//   // DELETE PARTNER
//   // ======================================================

//   const handleDeletePartner = async (partner) => {
//     const result = await Swal.fire({
//       title: "Delete Partner?",

//       html: `
//             <div style="
//               font-size:13px;
//               color:#64748b;
//               line-height:1.7;
//             ">
//               You are about to permanently delete
//               <strong>
//                 ${partner?.name || "this partner"}
//               </strong>.
              
//               <br/><br/>
              
//               Type
//               <strong>DELETE</strong>
//               below to confirm.
//             </div>
//           `,

//       icon: "warning",

//       input: "text",

//       inputPlaceholder: "Type DELETE",

//       showCancelButton: true,

//       confirmButtonText: "Delete Partner",

//       cancelButtonText: "Cancel",

//       confirmButtonColor: "#dc2626",

//       preConfirm: (value) => {
//         if (value?.trim() !== "DELETE") {
//           Swal.showValidationMessage("Please type DELETE exactly.");

//           return false;
//         }

//         return value;
//       },
//     });

//     if (!result.isConfirmed) {
//       return;
//     }

//     try {
//       setActionLoading(partner._id);

//       const response = await deletePartnerApi(partner._id);

//       if (response?.success) {
//         await Swal.fire({
//           title: "Partner Deleted!",

//           text: response?.message || "Partner deleted successfully.",

//           icon: "success",

//           confirmButtonColor: "#35C99A",
//         });

//         if (selectedPartner?._id === partner._id) {
//           setSelectedPartner(null);
//         }

//         await fetchPartners();
//       } else {
//         throw new Error(response?.message || "Unable to delete partner");
//       }
//     } catch (error) {
//       await Swal.fire({
//         title: "Unable to Delete",

//         text:
//           error?.response?.data?.message ||
//           error?.message ||
//           "Partner could not be deleted.",

//         icon: "error",
//       });
//     } finally {
//       setActionLoading("");
//       setOpenActionMenu(null);
//     }
//   };

//   // ======================================================
//   // ASSIGN PROPERTY
//   // ======================================================

//   const handleAssignProperty = async (partner) => {
//     if (!propertyId.trim()) {
//       await Swal.fire({
//         title: "Property Required",

//         text: "Please enter a property ID.",

//         icon: "warning",

//         confirmButtonColor: "#35C99A",
//       });

//       return;
//     }

//     const result = await Swal.fire({
//       title: "Assign Property?",

//       html: `
//             <div style="
//               font-size:13px;
//               color:#64748b;
//             ">
//               Assign property
//               <strong>
//                 ${propertyId}
//               </strong>
//               to
//               <strong>
//                 ${partner?.name || "Partner"}
//               </strong>?
//             </div>
//           `,

//       icon: "question",

//       showCancelButton: true,

//       confirmButtonText: "Assign Property",

//       cancelButtonText: "Cancel",

//       confirmButtonColor: "#35C99A",
//     });

//     if (!result.isConfirmed) {
//       return;
//     }

//     try {
//       setActionLoading("assign-property");

//       const response = await assignPropertyToPartnerApi(
//         partner._id,
//         propertyId.trim(),
//       );

//       if (response?.success) {
//         await Swal.fire({
//           title: "Property Assigned!",

//           text: response?.message || "Property assigned successfully.",

//           icon: "success",

//           confirmButtonColor: "#35C99A",
//         });

//         setPropertyId("");

//         setShowAssignProperty(false);

//         await handleGetPartnerById(partner._id);

//         await fetchPartners();
//       } else {
//         throw new Error(response?.message || "Unable to assign property");
//       }
//     } catch (error) {
//       await Swal.fire({
//         title: "Error",

//         text:
//           error?.response?.data?.message ||
//           error?.message ||
//           "Unable to assign property.",

//         icon: "error",
//       });
//     } finally {
//       setActionLoading("");
//     }
//   };

//   // ======================================================
//   // STATS
//   // ======================================================

//   const stats = useMemo(() => {
//     const total = partners.length;

//     const verified = partners.filter(
//       (partner) => getPartnerStatus(partner) === "Verified",
//     ).length;

//     const pending = partners.filter(
//       (partner) => getPartnerStatus(partner) === "Pending",
//     ).length;

//     const suspended = partners.filter(
//       (partner) => getPartnerStatus(partner) === "Suspended",
//     ).length;

//     const blacklisted = partners.filter(
//       (partner) => getPartnerStatus(partner) === "Blacklisted",
//     ).length;

//     return {
//       total,
//       verified,
//       pending,
//       suspended,
//       blacklisted,
//     };
//   }, [partners]);

//   // ======================================================
//   // TABS
//   // ======================================================

//   const tabs = [
//     {
//       label: "All",
//       count: stats.total,
//     },

//     {
//       label: "Verified",
//       count: stats.verified,
//     },

//     {
//       label: "Pending",
//       count: stats.pending,
//     },

//     // {
//     //   label: "Suspended",
//     //   count: stats.suspended,
//     // },

//     {
//       label: "Blacklisted",
//       count: stats.blacklisted,
//     },
//   ];

//   // ======================================================
//   // FILTER
//   // ======================================================

//   const filteredPartners = useMemo(() => {
//     let data = [...partners];

//     // STATUS
//     if (activeTab && activeTab !== "All") {
//       data = data.filter((partner) => getPartnerStatus(partner) === activeTab);
//     }

//     // SEARCH
//     if (search.trim()) {
//       const value = search.trim().toLowerCase();

//       data = data.filter((partner) => {
//         const name = partner?.name?.toLowerCase() || "";

//         const email = partner?.email?.toLowerCase() || "";

//         const phone = String(partner?.phone || "").toLowerCase();

//         const partnerId = partner?.partnerId?.toLowerCase() || "";

//         const mongoId = partner?._id?.toLowerCase() || "";

//         const city = partner?.location?.city?.toLowerCase() || "";

//         const state = partner?.location?.state?.toLowerCase() || "";

//         const address = partner?.location?.address?.toLowerCase() || "";

//         const type = partner?.partnerType?.toLowerCase() || "";

//         return (
//           name.includes(value) ||
//           email.includes(value) ||
//           phone.includes(value) ||
//           partnerId.includes(value) ||
//           mongoId.includes(value) ||
//           city.includes(value) ||
//           state.includes(value) ||
//           address.includes(value) ||
//           type.includes(value)
//         );
//       });
//     }

//     // VERIFICATION
//     if (verificationFilter === "Verified") {
//       data = data.filter(
//         (partner) => partner?.isVerified || partner?.isPhoneVerified,
//       );
//     }

//     if (verificationFilter === "Not Verified") {
//       data = data.filter(
//         (partner) => !partner?.isVerified && !partner?.isPhoneVerified,
//       );
//     }

//     return data;
//   }, [partners, search, activeTab, verificationFilter]);

//   // ======================================================
//   // PAGINATION
//   // ======================================================

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredPartners.length / itemsPerPage),
//   );

//   const startIndex = (currentPage - 1) * itemsPerPage;

//   const currentPartners = filteredPartners.slice(
//     startIndex,
//     startIndex + itemsPerPage,
//   );

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, activeTab, verificationFilter]);

//   // ======================================================
//   // CLEAR
//   // ======================================================

//   const clearFilters = () => {
//     setSearch("");

//     setVerificationFilter("");

//     setActiveTab("All");
//   };

//   // ======================================================
//   // EXPORT
//   // ======================================================

//   const exportPartners = () => {
//     if (filteredPartners.length === 0) {
//       Swal.fire({
//         title: "No Data",
//         text: "No partner data available.",
//         icon: "info",
//       });

//       return;
//     }

//     const headings = [
//       "Partner ID",
//       "Name",
//       "Email",
//       "Phone",
//       "Partner Type",
//       "City",
//       "State",
//       "Country",
//       "Status",
//       "Created At",
//     ];

//     const rows = filteredPartners.map((partner) => [
//       partner?.partnerId || "",
//       partner?.name || "",
//       partner?.email || "",
//       partner?.phone || "",
//       partner?.partnerType || "",
//       partner?.location?.city || "",
//       partner?.location?.state || "",
//       partner?.location?.country || "",
//       getPartnerStatus(partner),
//       partner?.createdAt
//         ? new Date(partner.createdAt).toLocaleDateString("en-IN")
//         : "",
//     ]);

//     const csv = [
//       headings.join(","),

//       ...rows.map((row) =>
//         row.map((item) => `"${String(item).replace(/"/g, '""')}"`).join(","),
//       ),
//     ].join("\n");

//     const blob = new Blob([csv], {
//       type: "text/csv;charset=utf-8;",
//     });

//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");

//     link.href = url;

//     link.download = "partners.csv";

//     document.body.appendChild(link);

//     link.click();

//     document.body.removeChild(link);

//     URL.revokeObjectURL(url);
//   };

//   // ======================================================
//   // UI
//   // ======================================================

//   return (
//     <div className="min-h-screen bg-[#F4F7F8] px-3 py-3 font-sans text-[#173247] sm:px-4 lg:px-1">
//       <div className="mx-auto max-w-[1600px]">
//         {/* HEADER */}

//         <div className="mb-4 flex flex-col gap-3 px-1 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <h1 className="text-[21px] font-bold text-[#173247] sm:text-[23px]">
//               Partners Management
//             </h1>

//             <p className="mt-1 max-w-[720px] text-[10px] font-medium leading-5 text-[#8998AF] sm:text-[11px]">
//               Manage partner accounts, verification, property assignments,
//               location, partner type and account status.
//             </p>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               onClick={exportPartners}
//               className="flex h-[38px] items-center gap-2 rounded-lg border border-[#DBE3E9] bg-white px-4 text-[10px] font-semibold text-[#536779] shadow-[0_4px_18px_rgba(15,47,69,0.04)] transition hover:bg-[#F8FAFC]"
//             >
//               <Download size={14} />

//               <div className="leading-[13px]">
//                 <div>Export</div>
//                 <div>Partners</div>
//               </div>
//             </button>

//             {/* <button className="flex h-[39px] items-center gap-2 rounded-md bg-[#35C99A] px-4 text-[11px] font-medium text-white shadow-[0_4px_18px_rgba(15,47,69,0.04)] transition hover:bg-[#13a786]">
//               <UserPlus size={14} />

//               <div className="leading-[13px]">
//                 <div>Add</div>
//                 <div>Partner</div>
//               </div>
//             </button> */}
//           </div>
//         </div>

//         {/* STATS */}

//         <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           <StatCard
//             icon={<Users size={20} />}
//             title="TOTAL PARTNERS"
//             value={stats.total}
//             badge={`${stats.verified} Verified`}
//             color="blue"
//           />

//           <StatCard
//             icon={<BadgeCheck size={20} />}
//             title="PENDING VERIFICATION"
//             value={stats.pending}
//             subText="Requires Action"
//             color="orange"
//           />

//           <StatCard
//             icon={<UserRoundCheck size={20} />}
//             title="VERIFIED PARTNERS"
//             value={stats.verified}
//             badge="Verified"
//             color="green"
//           />

//           <StatCard
//             icon={<BriefcaseBusiness size={20} />}
//             title="BLACKLISTED / SUSPENDED"
//             value={stats.blacklisted + stats.suspended}
//             color="red"
//           />
//         </div>

//         {/* TABLE */}

//         {/* <div className="overflow-visible rounded-lg border border-[#e4e7ec] bg-white shadow-[0_1px_3px_rgba(16,24,40,0.05)]"> */}
//         <div className="relative overflow-visible rounded-[20px] border border-[#DCE5E9] bg-white shadow-[0_2px_5px_rgba(16,24,40,0.04)]">
//           {/* TABS */}

//           <div className="border-b border-[#E7EDF2] px-4">
//             <div className="flex gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.label}
//                   onClick={() => setActiveTab(tab.label)}
//                   className={`relative flex h-[46px] shrink-0 items-center gap-1.5 text-[11px] font-medium transition ${
//                     activeTab === tab.label ? "text-[#173247]" : "text-[#8B99AC]"
//                   }`}
//                 >
//                   {tab.label}

//                   <span
//                     className={`rounded px-1.5 py-[1px] text-[9px] ${
//                       activeTab === tab.label
//                         ? "bg-[#eef4f8] text-[#385269]"
//                         : "bg-gray-100 text-[#8B99AC]"
//                     }`}
//                   >
//                     {tab.count}
//                   </span>

//                   {activeTab === tab.label && (
//                     <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#1F3C50]" />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* FILTER */}

//           <div className="flex flex-col gap-3 border-b border-[#E7EDF2] px-4 py-3 xl:flex-row xl:items-center xl:justify-between">
//             <div className="flex flex-1 flex-wrap items-center gap-2">
//               <div className="relative min-w-[220px] flex-1 xl:max-w-[340px]">
//                 <Search
//                   size={14}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B99AC]"
//                 />

//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search Partner ID, Name, Email, Phone, Location..."
//                   className="h-[34px] w-full rounded-md border border-[#DBE3E9] bg-white pl-9 pr-3 text-[11px] text-[#536779] outline-none focus:border-[#25B98B]"
//                 />
//               </div>

//               <FilterSelect
//                 label="Verification"
//                 value={verificationFilter}
//                 onChange={setVerificationFilter}
//                 options={["Verified", "Not Verified"]}
//               />
//             </div>

//             <div className="flex items-center gap-3">
//               <button
//                 onClick={clearFilters}
//                 className="text-[9px] font-semibold uppercase tracking-wide text-[#8B99AC] hover:text-gray-700"
//               >
//                 CLEAR
//               </button>

//               <button className="flex h-[30px] items-center gap-1.5 rounded bg-[#1F3C50] px-3 text-[10px] font-medium text-white">
//                 <SlidersHorizontal size={12} />
//                 Apply Filters
//               </button>

//               <button
//                 onClick={fetchPartners}
//                 className="flex h-[30px] w-[30px] items-center justify-center rounded border border-[#DBE3E9] text-[#7D8C9C] hover:bg-[#F8FAFC]"
//               >
//                 <RefreshCw size={13} />
//               </button>
//             </div>
//           </div>

//           {/* TABLE */}

//           {/* <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

//             <table className="w-full min-w-[1100px] border-collapse"> */}
//           <div className="w-full overflow-visible">
//             <table className="w-full table-fixed border-collapse">
//               {/* <thead>

//                 <tr className="h-[38px] bg-[#1F3C50] text-left">

//                   <th className="w-[45px] px-4">

//                     <input
//                       type="checkbox"
//                       className="accent-[#35C99A]"
//                     />

//                   </th>

//                   <TableHeading>
//                     PARTNER
//                   </TableHeading>

//                   <TableHeading>
//                     LOCATION
//                   </TableHeading>

//                   <TableHeading>
//                     PARTNER TYPE
//                   </TableHeading>

//                   <TableHeading>
//                     CONTACT
//                   </TableHeading>

//                   <TableHeading>
//                     VERIFICATION
//                   </TableHeading>

//                   <TableHeading>
//                     STATUS
//                   </TableHeading>

//                   <TableHeading align="right">
//                     ACTIONS
//                   </TableHeading>

//                 </tr>

//               </thead> */}

//               <thead>
//                 <tr className="h-[52px] bg-[#1F3C50] text-left text-white">
//                   <th className="w-[4%] px-3">
//                     <input type="checkbox" className="accent-[#35C99A]" />
//                   </th>

//                   <TableHeading width="18%">PARTNER</TableHeading>

//                   <TableHeading width="17%">LOCATION</TableHeading>

//                   <TableHeading width="12%">PARTNER TYPE</TableHeading>

//                   <TableHeading width="20%">CONTACT</TableHeading>

//                   <TableHeading width="12%">VERIFICATION</TableHeading>

//                   {/* <TableHeading width="10%">
//       STATUS
//     </TableHeading> */}

//                   <TableHeading width="7%" align="center">
//                     ACTION
//                   </TableHeading>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan="8" className="h-[230px] text-center">
//                       <div className="flex flex-col items-center gap-3 text-[#8B99AC]">
//                         <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#DBE3E9] border-t-[#35C99A]" />

//                         <span className="text-xs">Loading partners...</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : error ? (
//                   <tr>
//                     <td colSpan="8" className="h-[230px] text-center">
//                       <p className="text-xs text-red-500">{error}</p>

//                       <button
//                         onClick={fetchPartners}
//                         className="mt-3 rounded bg-[#1F3C50] px-4 py-2 text-[10px] text-white"
//                       >
//                         Try Again
//                       </button>
//                     </td>
//                   </tr>
//                 ) : currentPartners.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan="8"
//                       className="h-[230px] text-center text-xs text-[#8B99AC]"
//                     >
//                       No partners found.
//                     </td>
//                   </tr>
//                 ) : (
//                   currentPartners.map((partner) => (
//                     <PartnerRow
//                       key={partner._id}
//                       partner={partner}
//                       actionLoading={actionLoading}
//                       openActionMenu={openActionMenu}
//                       setOpenActionMenu={setOpenActionMenu}
//                       onClick={() => {
//                         if (embedded) {
//                           // Partner Dashboard ke andar sirf drawer open karo.
//                           // URL change mat karo.
//                           handleGetPartnerById(partner._id);
//                           return;
//                         }

//                         // Standalone Partner Management me route maintain rakho.
//                         navigate(`/partners/${partner._id}`);
//                       }}
//                       onVerify={() => handleVerifyPartner(partner)}
//                       onBlacklist={() => handleBlacklistPartner(partner)}
//                       onDelete={() => handleDeletePartner(partner)}
//                     />
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* PAGINATION */}

//           <div className="flex min-h-[52px] flex-col items-center justify-between gap-3 border-t border-[#E7EDF2] px-4 py-3 sm:flex-row">
//             <p className="text-[10px] text-[#8B99AC]">
//               Showing{" "}
//               <span className="font-medium text-[#536779]">
//                 {filteredPartners.length ? startIndex + 1 : 0}
//               </span>{" "}
//               to{" "}
//               <span className="font-medium text-[#536779]">
//                 {Math.min(startIndex + itemsPerPage, filteredPartners.length)}
//               </span>{" "}
//               of{" "}
//               <span className="font-medium text-[#536779]">
//                 {filteredPartners.length}
//               </span>{" "}
//               partners
//             </p>

//             <div className="flex items-center gap-1">
//               <button
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 className="flex h-7 w-7 items-center justify-center rounded border border-[#DBE3E9] text-[#8B99AC] disabled:opacity-40"
//               >
//                 <ChevronLeft size={13} />
//               </button>

//               {Array.from(
//                 {
//                   length: totalPages,
//                 },
//                 (_, index) => index + 1,
//               ).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => setCurrentPage(page)}
//                   className={`h-7 min-w-7 rounded px-2 text-[10px] font-medium ${
//                     currentPage === page
//                       ? "bg-[#1F3C50] text-white"
//                       : "text-[#7D8C9C] hover:bg-gray-100"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}

//               <button
//                 disabled={currentPage === totalPages}
//                 onClick={() =>
//                   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                 }
//                 className="flex h-7 w-7 items-center justify-center rounded border border-[#DBE3E9] text-[#8B99AC] disabled:opacity-40"
//               >
//                 <ChevronRight size={13} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* DRAWER */}

//       {(selectedPartner || partnerDetailsLoading) && (
//         // <PartnerDetailsDrawer
//         //   partner={selectedPartner}
//         //   loading={partnerDetailsLoading}
//         //   partnerVisits={partnerVisits}
//         //   onViewProperty={(property) => {
//         //     const propertyMongoId =
//         //       property?.propertyId ||
//         //       (typeof property?.propertyId === "string"
//         //         ? property.propertyId
//         //         : null);

//         //     if (propertyMongoId) {
//         //       navigate(`/property-management/${propertyMongoId}`);
//         //     }
//         //   }}
//         //   onViewVisit={(visit) => {
//         //     if (!visit?._id) {
//         //       return;
//         //     }

//         //     // Close current partner detail state before switching section
//         //     setSelectedPartner(null);
//         //     setPartnerVisits([]);
//         //     setShowAssignProperty(false);
//         //     setPropertyId("");

//         //     // Always open visit inside Partner Dashboard,
//         //     // not the standalone Visit Management route.
//         //     navigate(
//         //       `/partnerdashboard?tab=visit&visitId=${visit._id}`
//         //     );
//         //   }}
//         //   showAssignProperty={showAssignProperty}
//         //   setShowAssignProperty={setShowAssignProperty}
//         //   propertyId={propertyId}
//         //   setPropertyId={setPropertyId}
//         //   actionLoading={actionLoading}
//         //   onAssignProperty={() => handleAssignProperty(selectedPartner)}
//         //   onClose={() => {
//         //     setSelectedPartner(null);

//         //     setShowAssignProperty(false);

//         //     setPropertyId("");
//         //     setPartnerVisits([]);

//         //     if (routePartnerId) {
//         //       navigate("/partners");
//         //     }
//         //   }}
//         // />
//         <PartnerDetailsDrawer
//   partner={selectedPartner}
//   loading={partnerDetailsLoading}
//   partnerVisits={partnerVisits}

//   showAssignProperty={showAssignProperty}
//   setShowAssignProperty={setShowAssignProperty}

//   propertyId={propertyId}
//   setPropertyId={setPropertyId}

//   actionLoading={actionLoading}

//   onAssignProperty={() =>
//     handleAssignProperty(selectedPartner)
//   }

//   onGoToAssignment={() => {
//     setSelectedPartner(null);
//     setPartnerVisits([]);
//     setShowAssignProperty(false);
//     setPropertyId("");

//     navigate("/partnerdashboard?tab=assignment");
//   }}

//   onViewProperty={(property) => {
//     // Assigned Properties se explicit Mongo _id milegi.
//     const propertyMongoId =
//       property?.propertyMongoId ||
//       property?._id ||
//       null;

//     if (!propertyMongoId) {
//       console.error(
//         "Property Mongo _id missing:",
//         property
//       );
//       return;
//     }

//     navigate(
//       `/property-management/${propertyMongoId}`
//     );
//   }}

//   onViewVisit={(visit) => {
//     if (!visit?._id) {
//       return;
//     }

//     setSelectedPartner(null);
//     setPartnerVisits([]);
//     setShowAssignProperty(false);
//     setPropertyId("");

//     navigate(
//       `/partnerdashboard?tab=visit&visitId=${visit._id}`
//     );
//   }}

//   onClose={() => {
//     setSelectedPartner(null);
//     setPartnerVisits([]);
//     setShowAssignProperty(false);
//     setPropertyId("");

//     // Embedded Partner Dashboard:
//     // sirf drawer close hoga, route same rahega.
//     if (embedded) {
//       // Agar Visit Management se partnerId query ke saath aaye the,
//       // query clean karke Partner Dashboard ke Dashboard tab par hi raho.
//       if (initialPartnerId) {
//         onEmbeddedDetailClose?.();
//       }
//       return;
//     }

//     // Standalone /partners/:id:
//     // close ke baad /partners list.
//     if (routePartnerId) {
//       navigate("/partners", {
//         replace: true,
//       });
//     }
//   }}
// />
//       )}
//     </div>
//   );
// };

// const StatCard = ({ icon, title, value, badge, subText, color = "blue" }) => {
//   const styles = {
//     blue: {
//       icon: "bg-[#EEF6FF] text-[#2E90FA]",
//       badge: "bg-[#EAF9F4] text-[#15966F]",
//     },
//     orange: {
//       icon: "bg-[#FFF5E8] text-[#F79009]",
//       badge: "bg-[#FFF5E8] text-[#D97706]",
//     },
//     green: {
//       icon: "bg-[#EAF9F4] text-[#25B98B]",
//       badge: "bg-[#EAF9F4] text-[#15966F]",
//     },
//     red: {
//       icon: "bg-[#FFF1F1] text-[#E05252]",
//       badge: "bg-[#FFF1F1] text-[#D94A4A]",
//     },
//   };

//   const current = styles[color] || styles.blue;

//   return (
//     <div className="min-h-[155px] rounded-[18px] border border-[#DCE5E9] bg-white p-6 shadow-[0_2px_5px_rgba(15,23,42,0.04)]">
//       <div className="flex items-start justify-between gap-3">
//         <p className="pt-2 text-[10px] font-bold uppercase tracking-[0.25px] text-[#576D86]">
//           {title}
//         </p>

//         <div
//           className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] ${current.icon}`}
//         >
//           {icon}
//         </div>
//       </div>

//       <div className="mt-5 flex items-end gap-2">
//         <h2
//           className={`text-[29px] font-bold leading-none ${
//             color === "red" ? "text-[#E05252]" : "text-[#173247]"
//           }`}
//         >
//           {Number(value || 0).toLocaleString()}
//         </h2>

//         {badge && (
//           <span
//             className={`mb-0.5 rounded-full px-2 py-[3px] text-[8px] font-semibold ${current.badge}`}
//           >
//             {badge}
//           </span>
//         )}
//       </div>

//       <p className="mt-3 text-[10px] font-medium text-[#95A3B5]">
//         {subText || (
//           color === "blue"
//             ? "Registered partners"
//             : color === "green"
//               ? "Verified partners"
//               : color === "red"
//                 ? "Restricted accounts"
//                 : "Requires action"
//         )}
//       </p>
//     </div>
//   );
// };

// const TableHeading = ({ children, align = "left", width }) => (
//   <th
//     style={{
//       width,
//     }}
//     className={`px-3 text-[10px] font-bold uppercase tracking-[0.2px] text-white ${
//       align === "right"
//         ? "text-right"
//         : align === "center"
//           ? "text-center"
//           : "text-left"
//     }`}
//   >
//     {children}
//   </th>
// );

// const FilterSelect = ({ label, value, onChange, options }) => (
//   <div className="relative">
//     <select
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="h-[34px] appearance-none rounded-md border border-[#DBE3E9] bg-white pl-3 pr-8 text-[10px] text-[#7D8C9C] outline-none"
//     >
//       <option value="">{label}</option>

//       {options.map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>

//     <ChevronDown
//       size={12}
//       className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8B99AC]"
//     />
//   </div>
// );

// const PartnerRow = ({
//   partner,
//   onClick,
//   onVerify,
//   onBlacklist,
//   onDelete,
//   actionLoading,
//   openActionMenu,
//   setOpenActionMenu,
// }) => {
//   const initials =
//     partner?.name
//       ?.split(" ")
//       .filter(Boolean)
//       .map((word) => word.charAt(0).toUpperCase())
//       .join("")
//       .slice(0, 2) || "P";

//   const isBlacklisted = partner?.isBlacklisted || partner?.isBlocked;

//   const isVerified = partner?.isVerified || partner?.isPhoneVerified;

//   const status = isBlacklisted
//     ? "Blacklisted"
//     : isVerified
//       ? "Verified"
//       : "Pending";

//   const statusStyles = {
//     Verified: "bg-[#eaf9f5] text-[#11977c] border-[#d3f2e9]",

//     Pending: "bg-[#fff6e8] text-[#c47a16] border-[#f7e2c4]",

//     Blacklisted: "bg-[#fff1f1] text-[#d54c4c] border-[#f5dada]",
//   };

//   const locationText =
//     [partner?.location?.city, partner?.location?.state]
//       .filter(Boolean)
//       .join(", ") || "-";

//   return (
//     <tr
//       onClick={onClick}
//       className="h-[78px] cursor-pointer border-b border-[#E7EDF2] transition hover:bg-[#fbfcfd]"
//     >
//       <td className="px-4" onClick={(e) => e.stopPropagation()}>
//         <input type="checkbox" className="accent-[#35C99A]" />
//       </td>

//       {/* PARTNER */}

//       <td className="px-3">
//         <div className="flex items-center gap-2.5">
//           <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f5f2] text-[10px] font-semibold text-[#168b75]">
//             {initials}

//             <span
//               className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${
//                 isBlacklisted
//                   ? "bg-red-500"
//                   : isVerified
//                     ? "bg-[#35C99A]"
//                     : "bg-[#f5a623]"
//               }`}
//             />
//           </div>

//           <div>
//             <p className="max-w-[155px] truncate text-[10px] font-semibold text-[#26374a]">
//               {partner?.name || "Unknown Partner"}
//             </p>

//             <p className="mt-1 text-[8px] font-semibold text-[#18a88b]">
//               {partner?.partnerId || "-"}
//             </p>
//           </div>
//         </div>
//       </td>

//       {/* LOCATION */}

//       <td className="px-3">
//         <div className="flex max-w-[160px] gap-1.5">
//           <MapPin size={10} className="mt-0.5 shrink-0 text-[#8B99AC]" />

//           <div>
//             <p className="text-[9px] font-medium text-[#536779]">
//               {locationText}
//             </p>

//             {partner?.location?.address && (
//               <p className="mt-0.5 max-w-[150px] truncate text-[8px] text-[#8B99AC]">
//                 {partner.location.address}
//               </p>
//             )}
//           </div>
//         </div>
//       </td>

//       {/* PARTNER TYPE */}

//       <td className="px-3">
//         <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d5eee8] bg-[#f0faf7] px-2.5 py-1 text-[8px] font-semibold capitalize text-[#168b75]">
//           {partner?.partnerType === "team" ? (
//             <UsersRound size={10} />
//           ) : (
//             <UserRound size={10} />
//           )}

//           {partner?.partnerType || "single"}
//         </span>
//       </td>

//       {/* CONTACT */}

//       <td className="px-3">
//         <p className="flex items-center gap-1.5 text-[9px] text-[#536779]">
//           <Phone size={9} />

//           {partner?.phone || "-"}
//         </p>

//         <p className="mt-1 flex max-w-[170px] items-center gap-1.5 truncate text-[8px] text-[#8B99AC]">
//           <Mail size={9} />

//           {partner?.email || "-"}
//         </p>
//       </td>

//       {/* VERIFICATION */}

//       {/* <td className="px-3">

//         <span
//           className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[8px] ${
//             isVerified
//               ? "border-[#d3f2e9] bg-[#eaf9f5] text-[#11977c]"
//               : "border-[#f7e2c4] bg-[#fff6e8] text-[#c47a16]"
//           }`}
//         >

//           <BadgeCheck
//             size={9}
//           />

//           {isVerified
//             ? "Verified"
//             : "Pending"}

//         </span>

//       </td> */}

//       {/* STATUS */}

//       <td className="px-3">
//         <span
//           className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[8px] ${statusStyles[status]}`}
//         >
//           <span className="h-1.5 w-1.5 rounded-full bg-current" />

//           {status}
//         </span>
//       </td>

//       {/* ACTION */}

//       {/* <td
//         className="relative px-4 text-right"
//         onClick={(e) =>
//           e.stopPropagation()
//         }
//       > */}
//       <td
//         className="relative px-2 text-center"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* <button
//           disabled={
//             actionLoading ===
//             partner._id
//           }
//           onClick={() =>
//             setOpenActionMenu(
//               openActionMenu ===
//                 partner._id
//                 ? null
//                 : partner._id
//             )
//           }
//           className="rounded-md p-2 text-[#8B99AC] hover:bg-gray-100"
//         >

//           {actionLoading ===
//           partner._id ? (

//             <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#DBE3E9] border-t-[#35C99A]" />

//           ) : (

//             <MoreVertical
//               size={16}
//             />

//           )}

//         </button> */}
//         <button
//           type="button"
//           disabled={actionLoading === partner._id}
//           onClick={() =>
//             setOpenActionMenu(
//               openActionMenu === partner._id ? null : partner._id,
//             )
//           }
//           className="
//     mx-auto
//     flex
//     h-8
//     w-8
//     items-center
//     justify-center
//     rounded-lg
//     border
//     border-[#DBE3E9]
//     bg-white
//     text-[#344054]
//     shadow-[0_4px_18px_rgba(15,47,69,0.04)]
//     transition
//     hover:border-[#35C99A]/40
//     hover:bg-[#f0faf7]
//     hover:text-[#18a88b]
//     disabled:opacity-50
//   "
//         >
//           {actionLoading === partner._id ? (
//             <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#DBE3E9] border-t-[#35C99A]" />
//           ) : (
//             <MoreVertical size={17} strokeWidth={2} />
//           )}
//         </button>
//         {/* {openActionMenu ===
//           partner._id && (

//           <div className="absolute right-5 top-11 z-[100] w-[190px] overflow-hidden rounded-lg border border-[#E7EDF2] bg-white py-1 text-left shadow-xl">

//             <button
//               onClick={
//                 onClick
//               }
//               className="flex w-full items-center gap-2 px-3 py-2.5 text-[10px] text-[#536779] hover:bg-[#F8FAFC]"
//             >

//               <UserRound
//                 size={13}
//               />

//               View Details

//             </button>

//             {!isVerified && (

//               <button
//                 onClick={
//                   onVerify
//                 }
//                 className="flex w-full items-center gap-2 px-3 py-2.5 text-[10px] text-[#11977c] hover:bg-[#f0faf7]"
//               >

//                 <ShieldCheck
//                   size={13}
//                 />

//                 Verify Partner

//               </button>

//             )}

//             <button
//               onClick={
//                 onBlacklist
//               }
//               className={`flex w-full items-center gap-2 px-3 py-2.5 text-[10px] ${
//                 isBlacklisted
//                   ? "text-[#11977c]"
//                   : "text-orange-600"
//               } hover:bg-[#F8FAFC]`}
//             >

//               <Ban
//                 size={13}
//               />

//               {isBlacklisted
//                 ? "Remove Blacklist"
//                 : "Blacklist Partner"}

//             </button>

//             <div className="my-1 border-t border-[#E7EDF2]" />

//             <button
//               onClick={
//                 onDelete
//               }
//               className="flex w-full items-center gap-2 px-3 py-2.5 text-[10px] text-red-500 hover:bg-red-50"
//             >

//               <Trash2
//                 size={13}
//               />

//               Delete Partner

//             </button>

//           </div>

//         )} */}
//         {openActionMenu === partner._id && (
//           <div
//             className="
//       absolute
//       right-2
//       top-10
//       z-[9999]
//       w-[190px]
//       overflow-hidden
//       rounded-xl
//       border
//       border-[#DBE3E9]
//       bg-white
//       py-1.5
//       text-left
//       shadow-[0_12px_35px_rgba(15,23,42,0.16)]
//     "
//           >
//             {/* VIEW */}

//             <button
//               type="button"
//               onClick={onClick}
//               className="
//         flex
//         w-full
//         items-center
//         gap-2.5
//         px-3.5
//         py-2.5
//         text-[10px]
//         font-medium
//         text-[#536779]
//         transition
//         hover:bg-[#F8FAFC]
//         hover:text-[#173247]
//       "
//             >
//               <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#eef4f8] text-[#315875]">
//                 <UserRound size={13} strokeWidth={2} />
//               </div>
//               View Details
//             </button>

//             {/* VERIFY */}

//             {!isVerified && (
//               <button
//                 type="button"
//                 onClick={onVerify}
//                 className="
//           flex
//           w-full
//           items-center
//           gap-2.5
//           px-3.5
//           py-2.5
//           text-[10px]
//           font-medium
//           text-[#11977c]
//           transition
//           hover:bg-[#f0faf7]
//         "
//               >
//                 <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#eaf9f5] text-[#11977c]">
//                   <ShieldCheck size={13} strokeWidth={2} />
//                 </div>
//                 Verify Partner
//               </button>
//             )}

//             {/* BLACKLIST */}

//             <button
//               type="button"
//               onClick={onBlacklist}
//               className={`
//         flex
//         w-full
//         items-center
//         gap-2.5
//         px-3.5
//         py-2.5
//         text-[10px]
//         font-medium
//         transition
//         hover:bg-[#fff8ee]

//         ${isBlacklisted ? "text-[#11977c]" : "text-[#e67e22]"}
//       `}
//             >
//               <div
//                 className={`flex h-6 w-6 items-center justify-center rounded-md ${
//                   isBlacklisted
//                     ? "bg-[#eaf9f5] text-[#11977c]"
//                     : "bg-[#fff4e8] text-[#e67e22]"
//                 }`}
//               >
//                 <Ban size={13} strokeWidth={2} />
//               </div>

//               {isBlacklisted ? "Remove Blacklist" : "Blacklist Partner"}
//             </button>

//             <div className="my-1 border-t border-[#E7EDF2]" />

//             {/* DELETE */}

//             <button
//               type="button"
//               onClick={onDelete}
//               className="
//         flex
//         w-full
//         items-center
//         gap-2.5
//         px-3.5
//         py-2.5
//         text-[10px]
//         font-medium
//         text-red-500
//         transition
//         hover:bg-red-50
//       "
//             >
//               <div className="flex h-6 w-6 items-center justify-center rounded-md bg-red-50 text-red-500">
//                 <Trash2 size={13} strokeWidth={2} />
//               </div>
//               Delete Partner
//             </button>
//           </div>
//         )}
//       </td>
//     </tr>
//   );
// };

// const PartnerDetailsDrawer = ({
//   partner,
//   loading,
//   onClose,
//   partnerVisits = [],
//   onViewProperty,
//   onViewVisit,

//   showAssignProperty,
//   setShowAssignProperty,

//   propertyId,
//   setPropertyId,

//   onAssignProperty,
//   actionLoading,
//   onGoToAssignment,
// }) => {
//   const assignedProperties = Array.isArray(partner?.assignedProperties)
//     ? partner.assignedProperties
//     : [];

//   const addedProperties = Array.isArray(partner?.addedProperties)
//     ? partner.addedProperties
//     : [];

//   const locationText =
//     [
//       partner?.location?.city,

//       partner?.location?.state,

//       partner?.location?.country,
//     ]
//       .filter(Boolean)
//       .join(", ") || "-";

//   return (
//     <div className="fixed inset-0 z-[999]">
//       <div
//         onClick={onClose}
//         className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
//       />

//       <div className="absolute bottom-0 right-0 top-0 w-full max-w-[520px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#f8fafb] shadow-[-10px_0_35px_rgba(0,0,0,0.08)]">
//         {/* HEADER */}

//         <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#E7EDF2] bg-white px-5 py-4">
//           <div>
//             <h2 className="text-base font-semibold text-[#173247]">
//               Partner Details
//             </h2>

//             <p className="mt-0.5 text-[10px] text-[#8B99AC]">
//               Partner profile, location and assigned properties
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-[#7D8C9C] hover:bg-gray-100"
//           >
//             <X size={16} />
//           </button>
//         </div>

//         {loading ? (
//           <div className="flex h-[400px] items-center justify-center">
//             <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#DBE3E9] border-t-[#35C99A]" />
//           </div>
//         ) : partner ? (
//           <div className="space-y-4 p-5">
//             {/* PROFILE */}

//             <div className="rounded-xl border border-[#E7EDF2] bg-white p-5 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f8f4] text-lg font-semibold text-[#169277]">
//                   {partner?.name
//                     ?.split(" ")
//                     .filter(Boolean)
//                     .map((item) => item.charAt(0).toUpperCase())
//                     .join("")
//                     .slice(0, 2) || "P"}
//                 </div>

//                 <div>
//                   <h3 className="text-[17px] font-semibold text-[#173247]">
//                     {partner?.name || "Partner"}
//                   </h3>

//                   <p className="mt-1 text-[10px] font-semibold text-[#18a88b]">
//                     {partner?.partnerId || "-"}
//                   </p>

//                   <div className="mt-2 flex gap-2">
//                     <span className="rounded-full bg-[#eef8f5] px-2.5 py-1 text-[8px] font-semibold capitalize text-[#138d77]">
//                       {partner?.partnerType === "team"
//                         ? "Team Partner"
//                         : "Single Partner"}
//                     </span>

//                     <span className="rounded-full bg-[#eef7ff] px-2.5 py-1 text-[8px] text-[#427ba6]">
//                       {partner?.role || "partner"}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* INFORMATION */}

//             <div className="rounded-xl border border-[#E7EDF2] bg-white p-4 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
//               <SectionTitle>Partner Information</SectionTitle>

//               <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 <DetailRow
//                   icon={<Mail size={14} />}
//                   label="Email"
//                   value={partner?.email}
//                 />

//                 <DetailRow
//                   icon={<Phone size={14} />}
//                   label="Phone"
//                   value={partner?.phone}
//                 />

//                 <DetailRow
//                   icon={<BadgeCheck size={14} />}
//                   label="Partner ID"
//                   value={partner?.partnerId}
//                 />

//                 <DetailRow
//                   icon={
//                     partner?.partnerType === "team" ? (
//                       <UsersRound size={14} />
//                     ) : (
//                       <UserRound size={14} />
//                     )
//                   }
//                   label="Partner Type"
//                   value={partner?.partnerType || "single"}
//                 />

//                 <DetailRow
//                   icon={<CalendarDays size={14} />}
//                   label="Joined On"
//                   value={
//                     partner?.createdAt
//                       ? new Date(partner.createdAt).toLocaleDateString(
//                           "en-IN",
//                           {
//                             day: "2-digit",
//                             month: "short",
//                             year: "numeric",
//                           },
//                         )
//                       : "-"
//                   }
//                 />

//                 <DetailRow
//                   icon={<ShieldCheck size={14} />}
//                   label="Verification"
//                   value={
//                     partner?.isVerified || partner?.isPhoneVerified
//                       ? "Verified"
//                       : "Pending"
//                   }
//                 />
//               </div>
//             </div>

//             {/* LOCATION */}

//             <div className="rounded-xl border border-[#E7EDF2] bg-white p-4 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
//               <SectionTitle>Location</SectionTitle>

//               <div className="flex gap-3">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef8f5] text-[#18a88b]">
//                   <MapPin size={16} />
//                 </div>

//                 <div>
//                   <p className="text-[11px] font-semibold text-gray-700">
//                     {locationText}
//                   </p>

//                   <p className="mt-1 text-[9px] text-[#8B99AC]">
//                     {partner?.location?.address || "Address not available"}
//                   </p>

//                   {Array.isArray(
//                     partner?.location?.coordinates?.coordinates,
//                   ) && (
//                     <p className="mt-2 text-[8px] text-[#8B99AC]">
//                       Longitude: {partner.location.coordinates.coordinates[0]}
//                       {" • "}
//                       Latitude: {partner.location.coordinates.coordinates[1]}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* ASSIGNED PROPERTY */}

//             <div className="rounded-xl border border-[#E7EDF2] bg-white p-4 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <h4 className="text-[12px] font-semibold text-[#26374a]">
//                     Assigned Properties
//                   </h4>

//                   <p className="mt-1 text-[9px] text-[#8B99AC]">
//                     {assignedProperties.length} properties assigned
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => onGoToAssignment?.()}
//                   className="flex h-8 items-center gap-1.5 rounded-md bg-[#35C99A] px-3 text-[9px] font-semibold text-white"
//                 >
//                   <Plus size={12} />
//                   Assign Property
//                 </button>
//               </div>

//               {showAssignProperty && (
//                 <div className="mb-4 rounded-lg border border-[#ccece4] bg-[#f5fcfa] p-3">
//                   <label className="mb-2 block text-[9px] font-semibold uppercase text-[#7D8C9C]">
//                     Property ID
//                   </label>

//                   <div className="flex gap-2">
//                     <input
//                       value={propertyId}
//                       onChange={(e) => setPropertyId(e.target.value)}
//                       placeholder="Enter Property ID"
//                       className="h-9 min-w-0 flex-1 rounded-md border border-[#DBE3E9] bg-white px-3 text-[10px] outline-none focus:border-[#25B98B]"
//                     />

//                     <button
//                       disabled={actionLoading === "assign-property"}
//                       onClick={onAssignProperty}
//                       className="flex h-9 items-center gap-1.5 rounded-md bg-[#1F3C50] px-3 text-[9px] font-semibold text-white disabled:opacity-50"
//                     >
//                       <CheckCircle2 size={12} />

//                       {actionLoading === "assign-property"
//                         ? "Assigning..."
//                         : "Assign"}
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {assignedProperties.length > 0 ? (
//                 <div className="space-y-2">
//                   {/* {assignedProperties.map((property, index) => (
//                     <button
//                       type="button"
//                       key={property?._id || property?.propertyId?._id || index}
//                       onClick={() => onViewProperty?.(property)}
//                       className="w-full rounded-lg border border-[#E7EDF2] bg-[#1F3C50] p-3 text-left transition hover:border-[#35C99A] hover:bg-[#f4fbf9] hover:shadow-[0_4px_18px_rgba(15,47,69,0.04)]"
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef7ff] text-[#4383b4]">
//                           <Building2 size={15} />
//                         </div>

//                         <div className="min-w-0 flex-1">
//                           <p className="truncate text-[10px] font-semibold text-[#26374a]">
//                             {property?.title ||
//                               property?.propertyName ||
//                               property?.projectName ||
//                               `Property ${index + 1}`}
//                           </p>

//                           <p className="mt-1 text-[8px] font-medium text-[#18a88b]">
//                             {property?.propertyId || property?._id || "-"}
//                           </p>

//                           <p className="mt-1 text-[8px] text-[#8B99AC]">
//                             {[property?.locality, property?.city]
//                               .filter(Boolean)
//                               .join(", ") ||
//                               property?.location ||
//                               "Location not available"}
//                           </p>
//                         </div>

//                         <span className="rounded-full bg-[#eaf9f5] px-2 py-1 text-[7px] font-semibold text-[#11977c]">
//                           Assigned
//                         </span>
//                       </div>
//                     </button>
//                   ))} */}
//                   {assignedProperties.map((property, index) => {
//   // IMPORTANT:
//   // Screen par propertyCode show hoga,
//   // click par ONLY property._id route me jayegi.
//   const propertyMongoId =
//     property?._id || null;

//   const propertyCode =
//     property?.propertyCode ||
//     property?.propertyId?.propertyId ||
//     property?.propertyId ||
//     "-";

//   const propertyTitle =
//     property?.propertyId?.title ||
//     property?.title ||
//     `Property ${index + 1}`;

//   const propertyLocation =
//     [
//       property?.propertyId?.locality || property?.locality,
//       property?.propertyId?.city || property?.city,
//     ]
//       .filter(Boolean)
//       .join(", ") || "Location not available";

//   return (
//     <button
//       type="button"
//       key={property?._id || propertyMongoId || index}
//       // onClick={() => {
//       //   if (!propertyMongoId) return;

//       //   navigate(
//       //     `/property-management/${propertyMongoId}`
//       //   );
//       // }}
//       onClick={() => {
//         if (!propertyMongoId) {
//           console.error(
//             "Assigned property _id missing:",
//             property
//           );
//           return;
//         }

//         onViewProperty?.({
//           ...property,
//           propertyMongoId,
//         });
//       }}
//       className="
//         w-full
//         rounded-lg
//         border
//         border-[#E7EDF2]
//         bg-[#1F3C50]
//         p-3
//         text-left
//         transition
//         hover:border-[#35C99A]
//         hover:bg-[#f4fbf9]
//         hover:shadow-[0_4px_18px_rgba(15,47,69,0.04)]
//       "
//     >
//       <div className="flex items-start gap-3">

//         <div
//           className="
//             flex
//             h-9
//             w-9
//             shrink-0
//             items-center
//             justify-center
//             rounded-lg
//             bg-[#eef7ff]
//             text-[#4383b4]
//           "
//         >
//           <Building2 size={15} />
//         </div>

//         <div className="min-w-0 flex-1">

//           <p className="truncate text-[10px] font-semibold text-[#26374a]">
//             {propertyTitle}
//           </p>

//           {/* DISPLAY PROPERTY CODE */}
//           <p className="mt-1 text-[8px] font-semibold text-[#18a88b]">
//             {propertyCode}
//           </p>

//           <p className="mt-1 text-[8px] text-[#8B99AC]">
//             {propertyLocation}
//           </p>

//         </div>

//         <div className="flex flex-col items-end gap-2">

//           <span
//             className="
//               rounded-full
//               bg-[#eaf9f5]
//               px-2
//               py-1
//               text-[7px]
//               font-semibold
//               text-[#11977c]
//             "
//           >
//             {property?.status || "Assigned"}
//           </span>

//           <Eye
//             size={13}
//             className="text-[#18a88b]"
//           />

//         </div>

//       </div>
//     </button>
//   );
// })}
//                 </div>
//               ) : (
//                 <div className="rounded-lg border border-dashed border-[#DBE3E9] bg-gray-50 p-7 text-center">
//                   <Building2 size={24} className="mx-auto text-gray-300" />

//                   <p className="mt-2 text-[10px] font-medium text-[#7D8C9C]">
//                     No properties assigned
//                   </p>

//                   <p className="mt-1 text-[8px] text-[#8B99AC]">
//                     Click Assign Property to assign property.
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* PARTNER ADDED PROPERTIES */}
//             <div className="rounded-xl border border-[#E7EDF2] bg-white p-4 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
//               <div className="mb-4 flex items-center justify-between gap-3">
//                 <div>
//                   <h4 className="text-[12px] font-semibold text-[#26374a]">
//                     Properties Added By Partner
//                   </h4>
//                   <p className="mt-1 text-[9px] text-[#8B99AC]">
//                     {addedProperties.length} properties created by this partner
//                   </p>
//                 </div>
//                 <span className="rounded-full bg-[#eaf9f5] px-2.5 py-1 text-[8px] font-semibold text-[#11977c]">
//                   Partner Added
//                 </span>
//               </div>

//               {addedProperties.length ? (
//                 <div className="space-y-3">
//                   {addedProperties.map((property, index) => (
//                     <div
//                       key={property?._id || index}
//                       className="rounded-lg border border-[#e4ecea] bg-[#F8FAFB] p-3"
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eaf8f4] text-[#11977c]">
//                           <Building2 size={16} />
//                         </div>

//                         <div className="min-w-0 flex-1">
//                           <p className="truncate text-[11px] font-semibold text-[#26374a]">
//                             {property?.title || "Untitled Property"}
//                           </p>
//                           <p className="mt-1 text-[8px] font-semibold text-[#18a88b]">
//                             {property?.propertyId || "-"}
//                           </p>
//                           <p className="mt-1 text-[8px] text-[#8B99AC]">
//                             {[property?.locality, property?.city]
//                               .filter(Boolean)
//                               .join(", ") || "Location unavailable"}
//                           </p>
//                         </div>

//                         <PropertyStatusBadge status={property?.status} />
//                       </div>

//                       <div className="mt-3 grid grid-cols-2 gap-2">
//                         <MiniInfo label="Category" value={property?.category} />
//                         <MiniInfo
//                           label="Type"
//                           value={property?.transactionType}
//                         />
//                         <MiniInfo
//                           label="Price"
//                           value={
//                             property?.price
//                               ? `₹${Number(property.price).toLocaleString("en-IN")}`
//                               : "-"
//                           }
//                         />
//                         <MiniInfo
//                           label="Created"
//                           value={
//                             property?.createdAt
//                               ? new Date(property.createdAt).toLocaleDateString(
//                                   "en-IN",
//                                 )
//                               : "-"
//                           }
//                         />
//                       </div>

//                       <div className="mt-4 border-t border-[#E7EDF2] pt-3">
//                         <div className="mb-3 flex items-center gap-2">
//                           <History size={12} className="text-[#18a88b]" />
//                           <p className="text-[9px] font-semibold uppercase tracking-wide text-[#7D8C9C]">
//                             Status History
//                           </p>
//                         </div>

//                         {Array.isArray(property?.statusHistory) &&
//                         property.statusHistory.length ? (
//                           <div className="space-y-3">
//                             {property.statusHistory
//                               .slice()
//                               .reverse()
//                               .map((history, historyIndex) => (
//                                 <div
//                                   key={history?._id || historyIndex}
//                                   className="flex gap-3"
//                                 >
//                                   <div className="flex flex-col items-center">
//                                     <span className="mt-1 h-2 w-2 rounded-full bg-[#35C99A]" />
//                                     {historyIndex <
//                                       property.statusHistory.length - 1 && (
//                                       <span className="mt-1 h-full min-h-7 w-px bg-[#dceae6]" />
//                                     )}
//                                   </div>

//                                   <div className="pb-1">
//                                     <p className="text-[9px] font-semibold text-[#40545a]">
//                                       {history?.status || "-"}
//                                     </p>
//                                     <p className="mt-1 text-[8px] text-[#8B99AC]">
//                                       {history?.updatedBy?.name || "System"} •{" "}
//                                       {history?.updatedBy?.role || "-"}
//                                     </p>
//                                     <p className="mt-1 text-[8px] text-[#8B99AC]">
//                                       {history?.updatedAt
//                                         ? new Date(
//                                             history.updatedAt,
//                                           ).toLocaleString("en-IN")
//                                         : "-"}
//                                     </p>
//                                     {history?.remarks && (
//                                       <p className="mt-1 text-[8px] leading-relaxed text-[#7D8C9C]">
//                                         {history.remarks}
//                                       </p>
//                                     )}
//                                   </div>
//                                 </div>
//                               ))}
//                           </div>
//                         ) : (
//                           <p className="py-3 text-center text-[8px] text-[#8B99AC]">
//                             No status history available.
//                           </p>
//                         )}
//                       </div>

//                       <button
//                         type="button"
//                         onClick={() => onViewProperty?.(property)}
//                         className="mt-4 flex h-9 w-full items-center justify-center gap-1.5 rounded-md bg-[#073c5c] text-[9px] font-semibold text-white transition hover:bg-[#052f49]"
//                       >
//                         <Eye size={12} />
//                         View Full Property
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="rounded-lg border border-dashed border-[#DBE3E9] bg-gray-50 p-7 text-center">
//                   <Building2 size={24} className="mx-auto text-gray-300" />
//                   <p className="mt-2 text-[10px] font-medium text-[#7D8C9C]">
//                     No properties added by partner
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* PARTNER VISIT REQUESTS */}
//             <div className="rounded-xl border border-[#E7EDF2] bg-white p-4 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
//               <div className="mb-4">
//                 <h4 className="text-[12px] font-semibold text-[#26374a]">
//                   Visit Requests
//                 </h4>
//                 <p className="mt-1 text-[9px] text-[#8B99AC]">
//                   {partnerVisits.length} requests from this partner
//                 </p>
//               </div>

//               {partnerVisits.length ? (
//                 <div className="space-y-2">
//                   {partnerVisits.map((visit) => (
//                     <div
//                       key={visit?._id || visit?.visitId}
//                       className="rounded-lg border border-[#e3ecea] bg-[#F8FAFB] p-3"
//                     >
//                       <div className="flex items-start justify-between gap-3">
//                         <div className="min-w-0">
//                           <p className="truncate text-[10px] font-semibold text-[#26374a]">
//                             {visit?.propertySnapshot?.title || "Property Visit"}
//                           </p>
//                           <p className="mt-1 text-[8px] font-semibold text-[#18a88b]">
//                             {visit?.visitId || "-"}
//                           </p>
//                           <p className="mt-1 text-[8px] text-[#8B99AC]">
//                             Property:{" "}
//                             {visit?.propertySnapshot?.propertyCode || "-"}
//                           </p>
//                         </div>

//                         <div className="flex flex-col items-end gap-1">
//                           <span className="rounded-full bg-[#fff8e8] px-2 py-1 text-[7px] font-semibold text-[#b87818]">
//                             {visit?.status || "Requested"}
//                           </span>
//                           <span className="rounded-full bg-[#eef7ff] px-2 py-1 text-[7px] font-semibold text-[#3978a8]">
//                             {visit?.approvalStatus || "Pending"}
//                           </span>
//                         </div>
//                       </div>

//                       <div className="mt-3 rounded-md bg-[#f7faf9] p-2.5">
//                         <p className="text-[7px] uppercase tracking-wide text-[#8B99AC]">
//                           Requested Visit
//                         </p>
//                         <p className="mt-1 text-[9px] font-medium text-[#536779]">
//                           {visit?.requestedVisitAt
//                             ? new Date(visit.requestedVisitAt).toLocaleString(
//                                 "en-IN",
//                               )
//                             : "-"}
//                         </p>
//                       </div>

//                       {visit?.requestNotes && (
//                         <p className="mt-2 text-[8px] text-[#7D8C9C]">
//                           Notes: {visit.requestNotes}
//                         </p>
//                       )}

//                       <button
//                         type="button"
//                         onClick={() => onViewVisit?.(visit)}
//                         className="mt-3 flex h-9 w-full items-center justify-center gap-1.5 rounded-md bg-[#073c5c] text-[9px] font-semibold text-white"
//                       >
//                         <Eye size={12} />
//                         View Full Visit Details
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="rounded-lg border border-dashed border-[#DBE3E9] bg-gray-50 p-7 text-center">
//                   <CalendarDays size={23} className="mx-auto text-gray-300" />
//                   <p className="mt-2 text-[10px] font-medium text-[#7D8C9C]">
//                     No visit requests
//                   </p>
//                   <p className="mt-1 text-[8px] text-[#8B99AC]">
//                     This partner has not submitted any visit request.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         ) : (
//           <div className="flex h-[400px] items-center justify-center text-xs text-[#8B99AC]">
//             Partner data not available.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const MiniInfo = ({ label, value }) => (
//   <div className="rounded-md bg-[#f7faf9] p-2">
//     <p className="text-[7px] uppercase tracking-wide text-[#8B99AC]">{label}</p>
//     <p className="mt-1 truncate text-[9px] font-medium text-[#536779]">
//       {value || "-"}
//     </p>
//   </div>
// );

// const PropertyStatusBadge = ({ status }) => {
//   const styles = {
//     Draft: "bg-gray-100 text-[#536779]",
//     Submitted: "bg-blue-50 text-blue-600",
//     Assigned_To_Partner: "bg-cyan-50 text-cyan-700",
//     Reviewing: "bg-amber-50 text-amber-700",
//     Verified: "bg-[#EAF9F4] text-emerald-700",
//     Live: "bg-green-50 text-green-700",
//     Rejected: "bg-red-50 text-red-600",
//     Sold: "bg-purple-50 text-purple-700",
//     Rented: "bg-indigo-50 text-indigo-700",
//   };

//   return (
//     <span
//       className={`shrink-0 rounded-full px-2 py-1 text-[7px] font-semibold ${
//         styles[status] || styles.Draft
//       }`}
//     >
//       {status || "Draft"}
//     </span>
//   );
// };

// const SectionTitle = ({ children }) => (
//   <div className="mb-3 flex items-center gap-2">
//     <h4 className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-[#26374a]">
//       {children}
//     </h4>

//     <div className="h-px flex-1 bg-gray-100" />
//   </div>
// );

// const DetailRow = ({ icon, label, value }) => (
//   <div className="rounded-lg border border-[#E7EDF2] bg-[#1F3C50] p-3.5">
//     <div className="flex gap-3">
//       <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#18a88b] shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
//         {icon}
//       </div>

//       <div className="min-w-0">
//         <p className="text-[9px] uppercase tracking-wide text-[#8B99AC]">
//           {label}
//         </p>

//         <p className="mt-1 break-all text-[11px] font-medium capitalize text-gray-700">
//           {value || "-"}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// export default PartnerManagement


import { useEffect, useMemo, useState } from "react";
import {
  Search,
  RefreshCw,
  BadgeCheck,
  Eye,
  Mail,
  Phone,
  MapPin,
  WalletCards,
  UsersRound,
} from "lucide-react";
import {
  getAllPartnersApi,
  getPartnerByIdApi,
} from "../../../Services/partnerService";

export default function PartnerManagement() {
  const [partners, setPartners] = useState([]),
    [search, setSearch] = useState(""),
    [loading, setLoading] = useState(true),
    [selected, setSelected] = useState(null);
  const load = async () => {
    try {
      setLoading(true);
      const r = await getAllPartnersApi({ search });
      setPartners(r?.data || []);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  const s = useMemo(
    () => ({
      total: partners.length,
      single: partners.filter((x) => x.accountType === "single").length,
      team: partners.filter((x) => x.accountType === "team" && !x.isSubPartner)
        .length,
      sub: partners.filter((x) => x.isSubPartner).length,
    }),
    [partners],
  );
  const open = async (id) => {
    const r = await getPartnerByIdApi(id);
    setSelected(r?.data || null);
  };
  return (
    <div className="min-h-screen bg-[#F4F7F8] p-2 md:p-1 text-[#173247]">
      {/* <div className="rounded-[20px] bg-[#1F3C50] px-5 py-5"> */}
        <div className="flex items-center justify-between gap-4">
          <div>
            {/* <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#35C99A]">
              Verified Network
            </p> */}
            <h1 className="mt-1 text-2xl font-extrabold text-[#173247]">
              Partner Management
            </h1>
            <p className="mt-1 text-xs text-[#8e9da5]">
              Only approved and fully verified partners are shown.
            </p>
          </div>
          <button
            onClick={load}
            className="flex h-10 items-center gap-2 rounded-xl bg-white px-4 text-xs font-bold"
          >
            <RefreshCw size={15} />
            Refresh
          </button>
        </div>
      {/* </div> */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Stat label="Verified Partners" value={s.total} />
        <Stat label="Single Partners" value={s.single} />
        <Stat label="Team Owners" value={s.team} />
        <Stat label="Sub Partners" value={s.sub} />
      </div>
      <div className="mt-3 rounded-[18px] border border-[#E0E8EC] bg-white p-3">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8BA0AA]"
            size={15}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load()}
            placeholder="Search verified partners..."
            className="h-10 w-full rounded-xl border border-[#DCE5E9] bg-[#FAFCFD] pl-9 pr-3 text-xs outline-none focus:border-[#35C99A]"
          />
        </div>
      </div>
      <div className="mt-3 overflow-hidden  border border-[#E0E8EC] bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#1F3C50] text-left text-[10px] uppercase tracking-wider text-[#ffff]">
              <tr>
                <th className="px-4 py-3">Partner</th>
                <th className="px-4 py-3">Account</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Credits</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDF2F4]">
              {loading ? (
                <tr>
                  <td colSpan="6" className="py-14 text-center text-xs">
                    Loading...
                  </td>
                </tr>
              ) : (
                partners.map((p) => (
                  <tr key={p._id}>
                    <td className="px-4 py-3">
                      <div className="text-[12px] font-extrabold">{p.name}</div>
                      <div className="mt-1 text-[10px] text-[#82949D]">
                        {p.partnerId} · {p.email}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[11px] font-semibold capitalize">
                      {p.isSubPartner ? p.teamRole : p.accountType}
                    </td>
                    <td className="px-4 py-3 text-[11px]">
                      {p.location?.city || "-"}, {p.location?.state || "-"}
                    </td>
                    <td className="px-4 py-3 text-[11px] font-extrabold text-[#08745F]">
                      {p.parentPartnerId
                        ? p.teamCreditAllocation?.availableLimit || 0
                        : p.creditWallet?.balance || 0}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F8F1] px-2.5 py-1 text-[9px] font-bold text-[#16825F]">
                        <BadgeCheck size={12} />
                        Verified
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => open(p._id)}
                        className="rounded-lg border border-[#DCE5E9] px-3 py-2 text-[10px] font-bold"
                      >
                        <Eye size={13} className="mr-1 inline" />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-[#0E2736]/45"
          onClick={() => setSelected(null)}
        >
          <div
            className="ml-auto h-full w-full max-w-[520px] overflow-y-auto bg-white p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase text-[#35A98C]">
                  Verified Partner
                </p>
                <h2 className="mt-1 text-xl font-extrabold">{selected.name}</h2>
                <p className="text-xs text-[#7A8F99]">{selected.partnerId}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-xl">
                ×
              </button>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Detail
                icon={<Mail size={15} />}
                label="Email"
                value={selected.email}
              />
              <Detail
                icon={<Phone size={15} />}
                label="Phone"
                value={selected.phone}
              />
              <Detail
                icon={<MapPin size={15} />}
                label="City"
                value={selected.location?.city}
              />
              <Detail
                icon={<WalletCards size={15} />}
                label="Wallet"
                value={`${selected.creditWallet?.balance || 0} Credits`}
              />
              <Detail
                icon={<UsersRound size={15} />}
                label="Account Type"
                value={selected.accountType}
              />
              <Detail
                icon={<BadgeCheck size={15} />}
                label="Status"
                value={selected.applicationStatus}
              />
            </div>
            {selected.teamMembers?.length > 0 && (
              <div className="mt-5">
                <h3 className="text-sm font-extrabold">Team Members</h3>
                <div className="mt-2 space-y-2">
                  {selected.teamMembers.map((m) => (
                    <div
                      key={m._id}
                      className="rounded-xl border border-[#E0E8EC] bg-[#FAFCFD] p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold">{m.name}</div>
                          <div className="text-[10px] text-[#7A8F99]">
                            {m.teamRole} · {m.partnerId}
                          </div>
                        </div>
                        <div className="text-xs font-extrabold text-[#08745F]">
                          {m.teamCreditAllocation?.availableLimit || 0} cr
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
const Stat = ({ label, value }) => (
  <div className="rounded-[16px] border border-[#E0E8EC] bg-white p-4">
    <p className="text-[10px] font-bold uppercase tracking-wider text-[#81939C]">
      {label}
    </p>
    <p className="mt-1 text-2xl font-extrabold">{value}</p>
  </div>
);
const Detail = ({ icon, label, value }) => (
  <div className="rounded-xl border border-[#E0E8EC] bg-[#F8FAFB] p-3">
    <div className="flex items-center gap-2 text-[#168B72]">
      {icon}
      <span className="text-[9px] font-bold uppercase text-[#84969E]">
        {label}
      </span>
    </div>
    <div className="mt-2 break-words text-[11px] font-semibold">
      {value || "-"}
    </div>
  </div>
);
