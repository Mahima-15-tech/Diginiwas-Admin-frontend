// // import React, {
// //   useEffect,
// //   useMemo,
// //   useState,
// // } from "react";

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
// //   Building2,
// //   Handshake,
// //   X,
// //   Mail,
// //   Phone,
// //   CalendarDays,
// //   RefreshCw,
// // } from "lucide-react";

// // import {
// //   getAllSellersApi,
// //   getSellerByIdApi,
// // } from "../../services/sellerService";

// // const SellersManagement = () => {
// //   const [sellers, setSellers] = useState([]);

// //   const [loading, setLoading] = useState(true);

// //   const [error, setError] = useState("");

// //   const [search, setSearch] = useState("");

// //   const [activeTab, setActiveTab] =
// //     useState("All");

// //   const [partnerFilter, setPartnerFilter] =
// //     useState("");

// //   const [locationFilter, setLocationFilter] =
// //     useState("");

// //   const [currentPage, setCurrentPage] =
// //     useState(1);

// //   const [itemsPerPage] = useState(8);

// //   const [
// //     selectedSeller,
// //     setSelectedSeller,
// //   ] = useState(null);

// //   const [
// //     sellerDetailsLoading,
// //     setSellerDetailsLoading,
// //   ] = useState(false);

// //   // ==========================================
// //   // GET ALL SELLERS
// //   // ==========================================

// //   const fetchSellers = async () => {
// //     try {
// //       setLoading(true);

// //       setError("");

// //       const response =
// //         await getAllSellersApi();

// //       console.log(
// //         "Seller API Response:",
// //         response
// //       );

// //       if (
// //         response?.success &&
// //         Array.isArray(response.data)
// //       ) {
// //         setSellers(response.data);
// //       } else if (
// //         Array.isArray(response)
// //       ) {
// //         setSellers(response);
// //       } else {
// //         setSellers([]);
// //       }
// //     } catch (err) {
// //       console.error(
// //         "Seller API Error:",
// //         err
// //       );

// //       setError(
// //         err.response?.data?.message ||
// //           "Unable to fetch sellers"
// //       );

// //       setSellers([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ==========================================
// //   // GET SELLER BY ID
// //   // ==========================================

// //   const handleGetSellerById = async (
// //     sellerId
// //   ) => {
// //     try {
// //       setSellerDetailsLoading(true);

// //       setSelectedSeller(null);

// //       const response =
// //         await getSellerByIdApi(
// //           sellerId
// //         );

// //       console.log(
// //         "Seller Detail Response:",
// //         response
// //       );

// //       if (response?.success) {
// //         setSelectedSeller(
// //           response.data
// //         );
// //       } else {
// //         setSelectedSeller(
// //           response
// //         );
// //       }
// //     } catch (err) {
// //       console.error(
// //         "Seller By ID Error:",
// //         err
// //       );

// //       alert(
// //         err.response?.data?.message ||
// //           "Unable to load seller details"
// //       );
// //     } finally {
// //       setSellerDetailsLoading(
// //         false
// //       );
// //     }
// //   };

// //   // ==========================================
// //   // FETCH ON LOAD
// //   // ==========================================

// //   useEffect(() => {
// //     fetchSellers();
// //   }, []);

// //   // ==========================================
// //   // SELLER STATUS
// //   // ==========================================

// //   const getSellerStatus = (
// //     seller
// //   ) => {
// //     if (seller?.isBlocked) {
// //       return "Blocked";
// //     }

// //     if (seller?.isSuspended) {
// //       return "Suspended";
// //     }

// //     if (
// //       seller?.isPhoneVerified
// //     ) {
// //       return "Active";
// //     }

// //     return "Pending";
// //   };

// //   // ==========================================
// //   // STATS
// //   // ==========================================

// //   const stats = useMemo(() => {
// //     const total = sellers.length;

// //     const active =
// //       sellers.filter(
// //         (seller) =>
// //           getSellerStatus(
// //             seller
// //           ) === "Active"
// //       ).length;

// //     const pending =
// //       sellers.filter(
// //         (seller) =>
// //           getSellerStatus(
// //             seller
// //           ) === "Pending"
// //       ).length;

// //     const suspended =
// //       sellers.filter(
// //         (seller) =>
// //           getSellerStatus(
// //             seller
// //           ) === "Suspended"
// //       ).length;

// //     const blocked =
// //       sellers.filter(
// //         (seller) =>
// //           getSellerStatus(
// //             seller
// //           ) === "Blocked"
// //       ).length;

// //     const verified =
// //       sellers.filter(
// //         (seller) =>
// //           seller.isPhoneVerified
// //       ).length;

// //     const unassigned =
// //       sellers.filter(
// //         (seller) =>
// //           !seller.partner
// //       ).length;

// //     const liveProperties =
// //       sellers.reduce(
// //         (total, seller) => {
// //           return (
// //             total +
// //             Number(
// //               seller.liveProperties ||
// //                 0
// //             )
// //           );
// //         },
// //         0
// //       );

// //     return {
// //       total,
// //       active,
// //       pending,
// //       suspended,
// //       blocked,
// //       verified,
// //       unassigned,
// //       liveProperties,
// //     };
// //   }, [sellers]);

// //   // ==========================================
// //   // TABS
// //   // ==========================================

// //   const tabs = [
// //     {
// //       label: "All",
// //       count: stats.total,
// //     },

// //     {
// //       label: "Active",
// //       count: stats.active,
// //     },

// //     {
// //       label: "Pending",
// //       count: stats.pending,
// //     },

// //     {
// //       label: "Suspended",
// //       count: stats.suspended,
// //     },

// //     {
// //       label: "Blocked",
// //       count: stats.blocked,
// //     },
// //   ];

// //   // ==========================================
// //   // FILTERED SELLERS
// //   // ==========================================

// //   const filteredSellers =
// //     useMemo(() => {
// //       let data = [...sellers];

// //       // STATUS TAB

// //       if (
// //         activeTab &&
// //         activeTab !== "All"
// //       ) {
// //         data = data.filter(
// //           (seller) =>
// //             getSellerStatus(
// //               seller
// //             ) === activeTab
// //         );
// //       }

// //       // SEARCH

// //       if (search.trim()) {
// //         const value =
// //           search
// //             .trim()
// //             .toLowerCase();

// //         data = data.filter(
// //           (seller) => {
// //             return (
// //               seller.name
// //                 ?.toLowerCase()
// //                 .includes(
// //                   value
// //                 ) ||
// //               seller.email
// //                 ?.toLowerCase()
// //                 .includes(
// //                   value
// //                 ) ||
// //               seller.phone
// //                 ?.toLowerCase()
// //                 .includes(
// //                   value
// //                 ) ||
// //               seller._id
// //                 ?.toLowerCase()
// //                 .includes(
// //                   value
// //                 )
// //             );
// //           }
// //         );
// //       }

// //       // PARTNER FILTER

// //       if (
// //         partnerFilter ===
// //         "Assigned"
// //       ) {
// //         data = data.filter(
// //           (seller) =>
// //             !!seller.partner
// //         );
// //       }

// //       if (
// //         partnerFilter ===
// //         "Unassigned"
// //       ) {
// //         data = data.filter(
// //           (seller) =>
// //             !seller.partner
// //         );
// //       }

// //       // LOCATION FILTER

// //       if (
// //         locationFilter
// //       ) {
// //         data = data.filter(
// //           (seller) =>
// //             seller.location
// //               ?.toLowerCase()
// //               .includes(
// //                 locationFilter.toLowerCase()
// //               )
// //         );
// //       }

// //       return data;
// //     }, [
// //       sellers,
// //       search,
// //       activeTab,
// //       partnerFilter,
// //       locationFilter,
// //     ]);

// //   // ==========================================
// //   // PAGINATION
// //   // ==========================================

// //   const totalPages =
// //     Math.max(
// //       1,
// //       Math.ceil(
// //         filteredSellers.length /
// //           itemsPerPage
// //       )
// //     );

// //   const startIndex =
// //     (currentPage - 1) *
// //     itemsPerPage;

// //   const currentSellers =
// //     filteredSellers.slice(
// //       startIndex,
// //       startIndex +
// //         itemsPerPage
// //     );

// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [
// //     search,
// //     activeTab,
// //     partnerFilter,
// //     locationFilter,
// //   ]);

// //   // ==========================================
// //   // EXPORT CSV
// //   // ==========================================

// //   const exportSellers = () => {
// //     if (
// //       filteredSellers.length ===
// //       0
// //     ) {
// //       alert(
// //         "No seller data available"
// //       );

// //       return;
// //     }

// //     const headings = [
// //       "Name",
// //       "Email",
// //       "Phone",
// //       "Role",
// //       "Phone Verified",
// //       "Status",
// //       "Created At",
// //     ];

// //     const rows =
// //       filteredSellers.map(
// //         (seller) => [
// //           seller.name || "",
// //           seller.email || "",
// //           seller.phone || "",
// //           seller.role || "",
// //           seller.isPhoneVerified
// //             ? "Yes"
// //             : "No",
// //           getSellerStatus(
// //             seller
// //           ),
// //           seller.createdAt
// //             ? new Date(
// //                 seller.createdAt
// //               ).toLocaleDateString(
// //                 "en-IN"
// //               )
// //             : "",
// //         ]
// //       );

// //     const csv = [
// //       headings.join(","),
// //       ...rows.map((row) =>
// //         row
// //           .map(
// //             (item) =>
// //               `"${String(
// //                 item
// //               ).replace(
// //                 /"/g,
// //                 '""'
// //               )}"`
// //           )
// //           .join(",")
// //       ),
// //     ].join("\n");

// //     const blob = new Blob(
// //       [csv],
// //       {
// //         type: "text/csv;charset=utf-8;",
// //       }
// //     );

// //     const url =
// //       URL.createObjectURL(blob);

// //     const link =
// //       document.createElement(
// //         "a"
// //       );

// //     link.href = url;

// //     link.download =
// //       "sellers.csv";

// //     document.body.appendChild(
// //       link
// //     );

// //     link.click();

// //     document.body.removeChild(
// //       link
// //     );

// //     URL.revokeObjectURL(
// //       url
// //     );
// //   };

// //   // ==========================================
// //   // CLEAR FILTERS
// //   // ==========================================

// //   const clearFilters = () => {
// //     setSearch("");

// //     setPartnerFilter("");

// //     setLocationFilter("");

// //     setActiveTab("All");
// //   };

// //   return (
// //     <div className="min-h-screen  p-3 sm:p-5 lg:p-1">
// //       <div className="mx-auto max-w-[1600px]">

// //         <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
// //           <div>
// //             <h1 className="text-[24px] font-semibold tracking-[-0.4px] text-[#14213d]">
// //               Sellers
// //               Management
// //             </h1>

// //             <p className="mt-1 max-w-[700px] text-[12px] leading-5 text-gray-500">
// //               Manage seller
// //               accounts, property
// //               portfolios,
// //               publishing
// //               activity, partner
// //               assignments,
// //               verification, and
// //               account status.
// //             </p>
// //           </div>

// //           <div className="flex items-center gap-2">
// //             <button
// //               onClick={
// //                 exportSellers
// //               }
// //               className="flex h-[39px] items-center gap-2 rounded-md border border-gray-200 bg-white px-4 text-[11px] font-medium text-gray-600 shadow-sm transition hover:bg-gray-50"
// //             >
// //               <Download
// //                 size={14}
// //               />

// //               <div className="leading-[13px]">
// //                 <div>
// //                   Export
// //                 </div>

// //                 <div>
// //                   Sellers
// //                 </div>
// //               </div>
// //             </button>

// //             <button className="flex h-[39px] items-center gap-2 rounded-md bg-[#18b894] px-4 text-[11px] font-medium text-white shadow-sm transition hover:bg-[#13a786]">
// //               <UserPlus
// //                 size={14}
// //               />

// //               <div className="leading-[13px]">
// //                 <div>
// //                   Add
// //                 </div>

// //                 <div>
// //                   Seller
// //                 </div>
// //               </div>
// //             </button>
// //           </div>
// //         </div>

// //         {/* STATS */}

// //         <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
// //           <StatCard
// //             icon={
// //               <Users
// //                 size={20}
// //               />
// //             }
// //             title="TOTAL SELLERS"
// //             value={
// //               stats.total
// //             }
// //             badge={`+${stats.active}`}
// //             color="blue"
// //           />

// //           <StatCard
// //             icon={
// //               <BadgeCheck
// //                 size={20}
// //               />
// //             }
// //             title="PENDING VERIFICATION"
// //             value={
// //               stats.pending
// //             }
// //             subText="Requires Action"
// //             color="orange"
// //           />

// //           <StatCard
// //             icon={
// //               <Building2
// //                 size={20}
// //               />
// //             }
// //             title="LIVE PROPERTIES FROM SELLERS"
// //             value={
// //               stats.liveProperties
// //             }
// //             badge={`Verified ${stats.verified}`}
// //             color="green"
// //           />

// //           <StatCard
// //             icon={
// //               <Handshake
// //                 size={20}
// //               />
// //             }
// //             title="UNASSIGNED PARTNERS"
// //             value={
// //               stats.unassigned
// //             }
// //             color="red"
// //           />
// //         </div>

// //         {/* TABLE CARD */}

// //         <div className="overflow-hidden rounded-lg border border-[#e4e7ec] bg-white shadow-[0_1px_3px_rgba(16,24,40,0.05)]">
// //           {/* TABS */}

// //           <div className="border-b border-gray-100 px-4">
// //             <div className="flex gap-6 overflow-x-auto">
// //               {tabs.map(
// //                 (tab) => (
// //                   <button
// //                     key={
// //                       tab.label
// //                     }
// //                     onClick={() =>
// //                       setActiveTab(
// //                         tab.label
// //                       )
// //                     }
// //                     className={`relative flex h-[46px] shrink-0 items-center gap-1.5 text-[11px] font-medium transition ${
// //                       activeTab ===
// //                       tab.label
// //                         ? "text-[#172b4d]"
// //                         : "text-gray-400"
// //                     }`}
// //                   >
// //                     {
// //                       tab.label
// //                     }

// //                     <span
// //                       className={`rounded px-1.5 py-[1px] text-[9px] ${
// //                         activeTab ===
// //                         tab.label
// //                           ? "bg-[#eef4f8] text-[#385269]"
// //                           : "bg-gray-100 text-gray-400"
// //                       }`}
// //                     >
// //                       {
// //                         tab.count
// //                       }
// //                     </span>

// //                     {activeTab ===
// //                       tab.label && (
// //                       <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#172b4d]" />
// //                     )}
// //                   </button>
// //                 )
// //               )}
// //             </div>
// //           </div>

// //           {/* FILTERS */}

// //           <div className="flex flex-col gap-3 border-b border-gray-100 px-4 py-3 xl:flex-row xl:items-center xl:justify-between">
// //             <div className="flex flex-1 flex-wrap items-center gap-2">
// //               <div className="relative min-w-[220px] flex-1 xl:max-w-[320px]">
// //                 <Search
// //                   size={14}
// //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
// //                 />

// //                 <input
// //                   type="text"
// //                   value={
// //                     search
// //                   }
// //                   onChange={(
// //                     e
// //                   ) =>
// //                     setSearch(
// //                       e.target
// //                         .value
// //                     )
// //                   }
// //                   placeholder="Search ID, Name, Email..."
// //                   className="h-[34px] w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-[11px] text-gray-600 outline-none transition placeholder:text-gray-400 focus:border-[#18b894]"
// //                 />
// //               </div>

// //               <FilterSelect
// //                 label="Partner Assignment"
// //                 value={
// //                   partnerFilter
// //                 }
// //                 onChange={
// //                   setPartnerFilter
// //                 }
// //                 options={[
// //                   "Assigned",
// //                   "Unassigned",
// //                 ]}
// //               />

// //               <FilterSelect
// //                 label="Location"
// //                 value={
// //                   locationFilter
// //                 }
// //                 onChange={
// //                   setLocationFilter
// //                 }
// //                 options={[
// //                   "Delhi",
// //                   "Mumbai",
// //                   "Jaipur",
// //                   "Bangalore",
// //                 ]}
// //               />
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <button
// //                 onClick={
// //                   clearFilters
// //                 }
// //                 className="text-[9px] font-semibold uppercase tracking-wide text-gray-400 hover:text-gray-700"
// //               >
// //                 CLEAR
// //               </button>

// //               <button className="flex h-[30px] items-center gap-1.5 rounded bg-[#183a56] px-3 text-[10px] font-medium text-white hover:bg-[#102e46]">
// //                 <SlidersHorizontal
// //                   size={12}
// //                 />

// //                 Apply Filters
// //               </button>

// //               <button
// //                 onClick={
// //                   fetchSellers
// //                 }
// //                 title="Refresh sellers"
// //                 className="flex h-[30px] w-[30px] items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50"
// //               >
// //                 <RefreshCw
// //                   size={13}
// //                 />
// //               </button>
// //             </div>
// //           </div>

// //           {/* TABLE */}

// //           <div className="overflow-x-auto">
// //             <table className="w-full min-w-[1000px] border-collapse">
// //               <thead>
// //                 <tr className="h-[38px] border-b border-gray-100 bg-[#fafbfc] text-left">
// //                   <th className="w-[45px] px-4">
// //                     <input
// //                       type="checkbox"
// //                       className="accent-[#18b894]"
// //                     />
// //                   </th>

// //                   <TableHeading>
// //                     SELLER
// //                   </TableHeading>

// //                   <TableHeading>
// //                     CONTACT
// //                   </TableHeading>

// //                   <TableHeading>
// //                     PORTFOLIO
// //                   </TableHeading>

// //                   <TableHeading>
// //                     PARTNER
// //                   </TableHeading>

// //                   <TableHeading>
// //                     STATUS
// //                   </TableHeading>

// //                   <TableHeading align="right">
// //                     ACTIONS
// //                   </TableHeading>
// //                 </tr>
// //               </thead>

// //               <tbody>
// //                 {loading ? (
// //                   <tr>
// //                     <td
// //                       colSpan="7"
// //                       className="h-[230px] text-center"
// //                     >
// //                       <div className="flex flex-col items-center gap-3 text-gray-400">
// //                         <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-200 border-t-[#18b894]" />

// //                         <span className="text-xs">
// //                           Loading
// //                           sellers...
// //                         </span>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ) : error ? (
// //                   <tr>
// //                     <td
// //                       colSpan="7"
// //                       className="h-[230px] text-center"
// //                     >
// //                       <p className="text-xs text-red-500">
// //                         {
// //                           error
// //                         }
// //                       </p>

// //                       <button
// //                         onClick={
// //                           fetchSellers
// //                         }
// //                         className="mt-3 rounded bg-[#183a56] px-4 py-2 text-[10px] text-white"
// //                       >
// //                         Try Again
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ) : currentSellers.length ===
// //                   0 ? (
// //                   <tr>
// //                     <td
// //                       colSpan="7"
// //                       className="h-[230px] text-center text-xs text-gray-400"
// //                     >
// //                       No sellers
// //                       found.
// //                     </td>
// //                   </tr>
// //                 ) : (
// //                   currentSellers.map(
// //                     (
// //                       seller
// //                     ) => (
// //                       <SellerRow
// //                         key={
// //                           seller._id
// //                         }
// //                         seller={
// //                           seller
// //                         }
// //                         onClick={() =>
// //                           handleGetSellerById(
// //                             seller._id
// //                           )
// //                         }
// //                       />
// //                     )
// //                   )
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* PAGINATION */}

// //           <div className="flex min-h-[52px] flex-col items-center justify-between gap-3 border-t border-gray-100 px-4 py-3 sm:flex-row">
// //             <p className="text-[10px] text-gray-400">
// //               Showing{" "}
// //               <span className="font-medium text-gray-600">
// //                 {filteredSellers.length
// //                   ? startIndex +
// //                     1
// //                   : 0}
// //               </span>{" "}
// //               to{" "}
// //               <span className="font-medium text-gray-600">
// //                 {Math.min(
// //                   startIndex +
// //                     itemsPerPage,
// //                   filteredSellers.length
// //                 )}
// //               </span>{" "}
// //               of{" "}
// //               <span className="font-medium text-gray-600">
// //                 {
// //                   filteredSellers.length
// //                 }
// //               </span>{" "}
// //               sellers
// //             </p>

// //             <div className="flex items-center gap-1">
// //               <button
// //                 disabled={
// //                   currentPage ===
// //                   1
// //                 }
// //                 onClick={() =>
// //                   setCurrentPage(
// //                     (
// //                       prev
// //                     ) =>
// //                       Math.max(
// //                         prev -
// //                           1,
// //                         1
// //                       )
// //                   )
// //                 }
// //                 className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 text-gray-400 disabled:cursor-not-allowed disabled:opacity-40"
// //               >
// //                 <ChevronLeft
// //                   size={13}
// //                 />
// //               </button>

// //               {Array.from(
// //                 {
// //                   length:
// //                     totalPages,
// //                 },
// //                 (
// //                   _,
// //                   index
// //                 ) =>
// //                   index + 1
// //               ).map(
// //                 (page) => (
// //                   <button
// //                     key={
// //                       page
// //                     }
// //                     onClick={() =>
// //                       setCurrentPage(
// //                         page
// //                       )
// //                     }
// //                     className={`h-7 min-w-7 rounded px-2 text-[10px] font-medium ${
// //                       currentPage ===
// //                       page
// //                         ? "bg-[#183a56] text-white"
// //                         : "text-gray-500 hover:bg-gray-100"
// //                     }`}
// //                   >
// //                     {
// //                       page
// //                     }
// //                   </button>
// //                 )
// //               )}

// //               <button
// //                 disabled={
// //                   currentPage ===
// //                   totalPages
// //                 }
// //                 onClick={() =>
// //                   setCurrentPage(
// //                     (
// //                       prev
// //                     ) =>
// //                       Math.min(
// //                         prev +
// //                           1,
// //                         totalPages
// //                       )
// //                   )
// //                 }
// //                 className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 text-gray-400 disabled:cursor-not-allowed disabled:opacity-40"
// //               >
// //                 <ChevronRight
// //                   size={13}
// //                 />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* SELLER DETAIL DRAWER */}

// //       {(selectedSeller ||
// //         sellerDetailsLoading) && (
// //         <SellerDetailsDrawer
// //           seller={
// //             selectedSeller
// //           }
// //           loading={
// //             sellerDetailsLoading
// //           }
// //           onClose={() =>
// //             setSelectedSeller(
// //               null
// //             )
// //           }
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // // ==========================================
// // // STAT CARD
// // // ==========================================

// // const StatCard = ({
// //   icon,
// //   title,
// //   value,
// //   badge,
// //   subText,
// //   color = "blue",
// // }) => {
// //   const styles = {
// //     blue: {
// //       icon: "bg-[#eef7ff] text-[#4089c9]",
// //       badge:
// //         "bg-[#eaf9f5] text-[#17a988]",
// //     },

// //     orange: {
// //       icon: "bg-[#fff6e9] text-[#de9126]",
// //       badge:
// //         "bg-[#fff5e5] text-[#d68d20]",
// //     },

// //     green: {
// //       icon: "bg-[#eafaf6] text-[#15ad8d]",
// //       badge:
// //         "bg-[#eaf9f5] text-[#17a988]",
// //     },

// //     red: {
// //       icon: "bg-[#fff1f1] text-[#dc6262]",
// //       badge:
// //         "bg-[#fff0f0] text-[#dc6262]",
// //     },
// //   };

// //   const current =
// //     styles[color] ||
// //     styles.blue;

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
// //           className={`text-[22px] font-semibold leading-none ${
// //             color === "red"
// //               ? "text-[#e34747]"
// //               : "text-[#14213d]"
// //           }`}
// //         >
// //           {Number(
// //             value || 0
// //           ).toLocaleString()}
// //         </h2>

// //         {subText && (
// //           <span className="mb-[1px] text-[8px] text-[#d98b29]">
// //             {subText}
// //           </span>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // ==========================================
// // // TABLE HEADING
// // // ==========================================

// // const TableHeading = ({
// //   children,
// //   align = "left",
// // }) => {
// //   return (
// //     <th
// //       className={`px-3 text-[8px] font-semibold uppercase tracking-[0.6px] text-gray-400 ${
// //         align === "right"
// //           ? "text-right"
// //           : "text-left"
// //       }`}
// //     >
// //       {children}
// //     </th>
// //   );
// // };

// // // ==========================================
// // // FILTER SELECT
// // // ==========================================

// // const FilterSelect = ({
// //   label,
// //   value,
// //   onChange,
// //   options,
// // }) => {
// //   return (
// //     <div className="relative">
// //       <select
// //         value={value}
// //         onChange={(e) =>
// //           onChange(
// //             e.target.value
// //           )
// //         }
// //         className="h-[34px] appearance-none rounded-md border border-gray-200 bg-white pl-3 pr-8 text-[10px] text-gray-500 outline-none transition focus:border-[#18b894]"
// //       >
// //         <option value="">
// //           {label}
// //         </option>

// //         {options.map(
// //           (option) => (
// //             <option
// //               key={
// //                 option
// //               }
// //               value={
// //                 option
// //               }
// //             >
// //               {option}
// //             </option>
// //           )
// //         )}
// //       </select>

// //       <ChevronDown
// //         size={12}
// //         className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
// //       />
// //     </div>
// //   );
// // };

// // // ==========================================
// // // SELLER ROW
// // // ==========================================

// // const SellerRow = ({
// //   seller,
// //   onClick,
// // }) => {
// //   const initials =
// //     seller.name
// //       ?.split(" ")
// //       .filter(Boolean)
// //       .map((word) =>
// //         word
// //           .charAt(0)
// //           .toUpperCase()
// //       )
// //       .join("")
// //       .slice(0, 2) ||
// //     "S";

// //   const status =
// //     seller.isBlocked
// //       ? "Blocked"
// //       : seller.isSuspended
// //       ? "Suspended"
// //       : seller.isPhoneVerified
// //       ? "Active"
// //       : "Pending";

// //   const statusStyles = {
// //     Active:
// //       "bg-[#eaf9f5] text-[#11977c] border-[#d3f2e9]",

// //     Pending:
// //       "bg-[#fff6e8] text-[#c47a16] border-[#f7e2c4]",

// //     Suspended:
// //       "bg-[#fff0f0] text-[#cf5d5d] border-[#f4d9d9]",

// //     Blocked:
// //       "bg-[#f1f2f4] text-gray-500 border-gray-200",
// //   };

// //   return (
// //     <tr
// //       onClick={onClick}
// //       className="h-[72px] cursor-pointer border-b border-gray-100 transition hover:bg-[#fbfcfd]"
// //     >
// //       <td
// //         className="px-4"
// //         onClick={(e) =>
// //           e.stopPropagation()
// //         }
// //       >
// //         <input
// //           type="checkbox"
// //           className="accent-[#18b894]"
// //         />
// //       </td>

// //       {/* SELLER */}

// //       <td className="px-3">
// //         <div className="flex items-center gap-2.5">
// //           <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f5f2] text-[10px] font-semibold text-[#168b75]">
// //             {seller.avatar ? (
// //               <img
// //                 src={
// //                   seller.avatar
// //                 }
// //                 alt={
// //                   seller.name ||
// //                   "Seller"
// //                 }
// //                 className="h-full w-full rounded-full object-cover"
// //               />
// //             ) : (
// //               initials
// //             )}

// //             <span
// //               className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${
// //                 status ===
// //                 "Active"
// //                   ? "bg-[#18b894]"
// //                   : status ===
// //                     "Pending"
// //                   ? "bg-[#f5a623]"
// //                   : "bg-gray-400"
// //               }`}
// //             />
// //           </div>

// //           <div>
// //             <p className="max-w-[150px] truncate text-[10px] font-semibold text-[#26374a]">
// //               {seller.name ||
// //                 "Unknown Seller"}
// //             </p>

// //             <p className="mt-0.5 max-w-[130px] truncate text-[8px] text-gray-400">
// //               {seller._id
// //                 ? `#${seller._id
// //                     .slice(
// //                       -6
// //                     )
// //                     .toUpperCase()}`
// //                 : "-"}
// //             </p>
// //           </div>
// //         </div>
// //       </td>

// //       {/* CONTACT */}

// //       <td className="px-3">
// //         <div className="space-y-1">
// //           <p className="flex items-center gap-1.5 text-[9px] text-gray-600">
// //             <Phone
// //               size={9}
// //               className="text-gray-400"
// //             />

// //             {seller.phone ||
// //               "-"}
// //           </p>

// //           <p className="flex max-w-[180px] items-center gap-1.5 truncate text-[8px] text-gray-400">
// //             <Mail
// //               size={9}
// //             />

// //             {seller.email ||
// //               "-"}
// //           </p>
// //         </div>
// //       </td>

// //       {/* PORTFOLIO */}

// //       <td className="px-3">
// //         <div className="flex items-center gap-1.5">
// //           <div>
// //             <p className="text-[10px] font-semibold text-gray-600">
// //               {seller.propertyCount ||
// //                 seller.properties
// //                   ?.length ||
// //                 0}
// //             </p>

// //             <span className="text-[7px] uppercase text-gray-400">
// //               Total
// //             </span>
// //           </div>

// //           <span className="rounded bg-[#ecfaf6] px-2 py-1 text-[8px] text-[#15a98b]">
// //             {seller.liveProperties ||
// //               0}

// //             <span className="ml-1 text-[6px]">
// //               Live
// //             </span>
// //           </span>

// //           <span className="rounded bg-[#fff5e8] px-2 py-1 text-[8px] text-[#d38c31]">
// //             {seller.pendingProperties ||
// //               0}

// //             <span className="ml-1 text-[6px]">
// //               Pending
// //             </span>
// //           </span>
// //         </div>
// //       </td>

// //       {/* PARTNER */}

// //       <td className="px-3">
// //         {seller.partner ? (
// //           <div className="flex items-center gap-2">
// //             <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef0ff] text-[8px] font-semibold text-[#6868b2]">
// //               {typeof seller.partner ===
// //               "string"
// //                 ? seller.partner
// //                     .charAt(0)
// //                     .toUpperCase()
// //                 : seller.partner
// //                     ?.name
// //                     ?.charAt(0)
// //                     ?.toUpperCase() ||
// //                   "P"}
// //             </div>

// //             <span className="text-[9px] text-gray-600">
// //               {typeof seller.partner ===
// //               "string"
// //                 ? seller.partner
// //                 : seller.partner
// //                     ?.name ||
// //                   "Assigned"}
// //             </span>
// //           </div>
// //         ) : (
// //           <span className="text-[9px] font-medium text-[#db6666]">
// //             Unassigned
// //           </span>
// //         )}
// //       </td>

// //       {/* STATUS */}

// //       <td className="px-3">
// //         <span
// //           className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[8px] font-medium ${
// //             statusStyles[
// //               status
// //             ]
// //           }`}
// //         >
// //           <span className="h-1 w-1 rounded-full bg-current" />

// //           {status}
// //         </span>
// //       </td>

// //       {/* ACTION */}

// //       <td
// //         className="px-4 text-right"
// //         onClick={(e) =>
// //           e.stopPropagation()
// //         }
// //       >
// //         <button
// //           onClick={onClick}
// //           title="View seller"
// //           className="rounded p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
// //         >
// //           <MoreVertical
// //             size={15}
// //           />
// //         </button>
// //       </td>
// //     </tr>
// //   );
// // };

// // // ==========================================
// // // SELLER DETAILS DRAWER
// // // ==========================================

// // const SellerDetailsDrawer = ({
// //   seller,
// //   loading,
// //   onClose,
// // }) => {
// //   return (
// //     <div className="fixed inset-0 z-[999]">
// //       <div
// //         onClick={
// //           onClose
// //         }
// //         className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
// //       />

// //       <div className="absolute bottom-0 right-0 top-0 w-full max-w-[420px] overflow-y-auto bg-white shadow-[-10px_0_35px_rgba(0,0,0,0.08)]">
// //         <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4">
// //           <div>
// //             <h2 className="text-base font-semibold text-[#172b4d]">
// //               Seller
// //               Details
// //             </h2>

// //             <p className="mt-0.5 text-[10px] text-gray-400">
// //               Complete
// //               seller account
// //               information
// //             </p>
// //           </div>

// //           <button
// //             onClick={
// //               onClose
// //             }
// //             className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition hover:bg-gray-100"
// //           >
// //             <X
// //               size={16}
// //             />
// //           </button>
// //         </div>

// //         {loading ? (
// //           <div className="flex h-[400px] items-center justify-center">
// //             <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-[#18b894]" />
// //           </div>
// //         ) : seller ? (
// //           <div className="p-5">
// //             <div className="flex flex-col items-center border-b border-gray-100 pb-6">
// //               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f8f4] text-xl font-semibold text-[#169277]">
// //                 {seller.name
// //                   ?.split(
// //                     " "
// //                   )
// //                   .filter(
// //                     Boolean
// //                   )
// //                   .map(
// //                     (
// //                       item
// //                     ) =>
// //                       item
// //                         .charAt(
// //                           0
// //                         )
// //                         .toUpperCase()
// //                   )
// //                   .join("")
// //                   .slice(
// //                     0,
// //                     2
// //                   ) ||
// //                   "S"}
// //               </div>

// //               <h3 className="mt-3 text-[17px] font-semibold text-[#172b4d]">
// //                 {seller.name ||
// //                   "Seller"}
// //               </h3>

// //               <span className="mt-2 rounded-full bg-[#eaf9f5] px-3 py-1 text-[9px] font-medium capitalize text-[#139a7e]">
// //                 {seller.role ||
// //                   "seller"}
// //               </span>

// //               <p className="mt-2 text-[9px] text-gray-400">
// //                 ID:{" "}
// //                 {seller._id ||
// //                   "-"}
// //               </p>
// //             </div>

// //             <div className="space-y-3 py-5">
// //               <DetailRow
// //                 icon={
// //                   <Mail
// //                     size={
// //                       14
// //                     }
// //                   />
// //                 }
// //                 label="Email"
// //                 value={
// //                   seller.email
// //                 }
// //               />

// //               <DetailRow
// //                 icon={
// //                   <Phone
// //                     size={
// //                       14
// //                     }
// //                   />
// //                 }
// //                 label="Phone"
// //                 value={
// //                   seller.phone
// //                 }
// //               />

// //               <DetailRow
// //                 icon={
// //                   <BadgeCheck
// //                     size={
// //                       14
// //                     }
// //                   />
// //                 }
// //                 label="Phone Verification"
// //                 value={
// //                   seller.isPhoneVerified
// //                     ? "Verified"
// //                     : "Not Verified"
// //                 }
// //               />

// //               <DetailRow
// //                 icon={
// //                   <CalendarDays
// //                     size={
// //                       14
// //                     }
// //                   />
// //                 }
// //                 label="Joined On"
// //                 value={
// //                   seller.createdAt
// //                     ? new Date(
// //                         seller.createdAt
// //                       ).toLocaleDateString(
// //                         "en-IN",
// //                         {
// //                           day: "2-digit",
// //                           month:
// //                             "short",
// //                           year: "numeric",
// //                         }
// //                       )
// //                     : "-"
// //                 }
// //               />

// //               <DetailRow
// //                 icon={
// //                   <CalendarDays
// //                     size={
// //                       14
// //                     }
// //                   />
// //                 }
// //                 label="Last Updated"
// //                 value={
// //                   seller.updatedAt
// //                     ? new Date(
// //                         seller.updatedAt
// //                       ).toLocaleDateString(
// //                         "en-IN",
// //                         {
// //                           day: "2-digit",
// //                           month:
// //                             "short",
// //                           year: "numeric",
// //                         }
// //                       )
// //                     : "-"
// //                 }
// //               />
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="flex h-[400px] items-center justify-center text-xs text-gray-400">
// //             Seller data
// //             not available.
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // ==========================================
// // // DETAIL ROW
// // // ==========================================

// // const DetailRow = ({
// //   icon,
// //   label,
// //   value,
// // }) => {
// //   return (
// //     <div className="rounded-lg border border-gray-100 bg-[#fafbfc] p-3.5">
// //       <div className="flex gap-3">
// //         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#18a88b] shadow-sm">
// //           {icon}
// //         </div>

// //         <div className="min-w-0">
// //           <p className="text-[9px] uppercase tracking-wide text-gray-400">
// //             {label}
// //           </p>

// //           <p className="mt-1 break-all text-[11px] font-medium text-gray-700">
// //             {value || "-"}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SellersManagement;


// import React, {
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

// import {
//   Search,
//   ChevronLeft,
//   ChevronRight,
//   Download,
//   Users,
//   BadgeCheck,
//   Building2,
//   Mail,
//   Phone,
//   MapPin,
//   BriefcaseBusiness,
//   ShieldCheck,
//   AlertTriangle,
//   CheckCircle2,
//   Clock3,
//   Play,
//   FastForward,
//   Globe2,
//   Filter,
//   ArrowRightLeft,
//   CalendarDays,
//   CalendarCheck2,
//   XCircle,
//   RotateCcw,
//   Eye,
//   Loader2,
// } from "lucide-react";

// import {
//   getAllSellersApi,
//   getSellerByIdApi,
//   getSellerPropertyByIdApi,
//   verifySellerApi,
// } from "../../../Services/sellerService";

// /* ======================================================
//    HELPERS
// ====================================================== */

// const formatPrice = (price) => {
//   const value =
//     Number(price || 0);

//   if (value >= 10000000) {
//     return `₹ ${(
//       value / 10000000
//     ).toFixed(1)} Cr`;
//   }

//   if (value >= 100000) {
//     return `₹ ${(
//       value / 100000
//     ).toFixed(1)} L`;
//   }

//   return `₹ ${value.toLocaleString(
//     "en-IN"
//   )}`;
// };

// const formatDateTime = (value) => {
//   if (!value) {
//     return "Not scheduled";
//   }

//   return new Date(
//     value
//   ).toLocaleString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//   });
// };

// const statusClass = {
//   Draft:
//     "bg-slate-100 text-slate-600 border-slate-200",

//   Submitted:
//     "bg-amber-50 text-amber-700 border-amber-200",

//   Assigned_To_Partner:
//     "bg-blue-50 text-blue-700 border-blue-200",

//   Reviewing:
//     "bg-orange-50 text-orange-700 border-orange-200",

//   Verified:
//     "bg-emerald-50 text-emerald-700 border-emerald-200",

//   Live:
//     "bg-teal-50 text-teal-700 border-teal-200",

//   Rejected:
//     "bg-red-50 text-red-700 border-red-200",

//   Sold:
//     "bg-purple-50 text-purple-700 border-purple-200",

//   Rented:
//     "bg-indigo-50 text-indigo-700 border-indigo-200",
// };

// const StatusBadge = ({
//   status,
// }) => (
//   <span
//     className={`inline-flex rounded border px-2 py-1 text-[8px] font-semibold ${
//       statusClass[status] ||
//       "bg-slate-50 text-slate-600 border-slate-200"
//     }`}
//   >
//     {status
//       ?.replaceAll("_", " ") ||
//       "Unknown"}
//   </span>
// );

// const lifecycleIcons = {
//   Draft: Play,
//   Submitted: FastForward,
//   Assigned_To_Partner:
//     ShieldCheck,
//   Reviewing: AlertTriangle,
//   Verified: CheckCircle2,
//   Live: Globe2,
// };

// /* ======================================================
//    SELLER MANAGEMENT LIST
// ====================================================== */

// function SellerManagementList({
//   onSelectSeller,
// }) {
//   const [
//     sellers,
//     setSellers,
//   ] = useState([]);

//   const [
//     loading,
//     setLoading,
//   ] = useState(true);

//   const [
//     error,
//     setError,
//   ] = useState("");

//   const [
//     search,
//     setSearch,
//   ] = useState("");

//   const [
//     activeTab,
//     setActiveTab,
//   ] = useState("All");

//   const [
//     currentPage,
//     setCurrentPage,
//   ] = useState(1);

//   const itemsPerPage = 8;

//   const fetchSellers =
//     async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response =
//           await getAllSellersApi({
//             search:
//               search.trim() ||
//               undefined,

//             verified:
//               activeTab ===
//               "Verified"
//                 ? "true"
//                 : activeTab ===
//                   "Pending"
//                 ? "false"
//                 : undefined,
//           });

//         setSellers(
//           response?.data || []
//         );
//       } catch (error) {
//         setError(
//           error?.response?.data
//             ?.message ||
//             "Unable to fetch sellers."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   useEffect(() => {
//     const timer =
//       setTimeout(() => {
//         fetchSellers();
//       }, 250);

//     return () =>
//       clearTimeout(timer);
//   }, [search, activeTab]);

//   const stats = useMemo(() => {
//     return {
//       total:
//         sellers.length,

//       verified:
//         sellers.filter(
//           (seller) =>
//             seller.isVerified
//         ).length,

//       pending:
//         sellers.filter(
//           (seller) =>
//             !seller.isVerified
//         ).length,

//       liveProperties:
//         sellers.reduce(
//           (sum, seller) =>
//             sum +
//             Number(
//               seller.propertyStats
//                 ?.live || 0
//             ),
//           0
//         ),
//     };
//   }, [sellers]);

//   const totalPages =
//     Math.max(
//       1,
//       Math.ceil(
//         sellers.length /
//           itemsPerPage
//       )
//     );

//   const currentRows =
//     sellers.slice(
//       (currentPage - 1) *
//         itemsPerPage,

//       currentPage *
//         itemsPerPage
//     );

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, activeTab]);

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
//   ];

//   return (
//     <div className="min-h-screen bg-[#f7f9fb] p-4 sm:p-5">
//       <div className="mx-auto max-w-[1600px]">
//         <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <h1 className="text-[24px] font-semibold text-[#14213d]">
//               Seller Management
//             </h1>

//             <p className="mt-1 text-[11px] text-gray-500">
//               All seller accounts,
//               verification and seller
//               property portfolios.
//             </p>
//           </div>

//           <button className="flex h-9 items-center gap-2 rounded-md border border-gray-200 bg-white px-4 text-[10px] font-semibold text-gray-600">
//             <Download size={13} />
//             Export Sellers
//           </button>
//         </div>

//         <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
//           {[
//             [
//               "Total Sellers",
//               stats.total,
//               Users,
//             ],

//             [
//               "Verified Sellers",
//               stats.verified,
//               BadgeCheck,
//             ],

//             [
//               "Pending Verification",
//               stats.pending,
//               Clock3,
//             ],

//             [
//               "Live Properties",
//               stats.liveProperties,
//               Building2,
//             ],
//           ].map(
//             ([
//               label,
//               value,
//               Icon,
//             ]) => (
//               <div
//                 key={label}
//                 className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-[8px] font-semibold uppercase tracking-wide text-gray-400">
//                       {label}
//                     </p>

//                     <p className="mt-3 text-[22px] font-semibold text-[#14213d]">
//                       {value}
//                     </p>
//                   </div>

//                   <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#eaf8f4] text-[#11977c]">
//                     <Icon
//                       size={16}
//                     />
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>

//         <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
//           <div className="border-b border-gray-100 px-4">
//             <div className="flex gap-6">
//               {tabs.map(
//                 (tab) => (
//                   <button
//                     key={
//                       tab.label
//                     }
//                     onClick={() => {
//                       setActiveTab(
//                         tab.label
//                       );

//                       setCurrentPage(
//                         1
//                       );
//                     }}
//                     className={`relative flex h-11 items-center gap-2 text-[10px] font-semibold ${
//                       activeTab ===
//                       tab.label
//                         ? "text-[#17384a]"
//                         : "text-gray-400"
//                     }`}
//                   >
//                     {tab.label}

//                     <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px]">
//                       {tab.count}
//                     </span>

//                     {activeTab ===
//                       tab.label && (
//                       <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#17384a]" />
//                     )}
//                   </button>
//                 )
//               )}
//             </div>
//           </div>

//           <div className="border-b border-gray-100 p-3">
//             <div className="relative max-w-[380px]">
//               <Search
//                 size={13}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//               />

//               <input
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(
//                     e.target.value
//                   )
//                 }
//                 placeholder="Search seller ID, name, email, phone, city..."
//                 className="h-9 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[10px] outline-none focus:border-[#18b894]"
//               />
//             </div>
//           </div>

//           {error && (
//             <div className="border-b border-red-100 bg-red-50 px-4 py-3 text-[10px] text-red-600">
//               {error}
//             </div>
//           )}

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px]">
//               <thead>
//                 <tr className="h-10 border-b border-gray-100 bg-[#fafbfc] text-left">
//                   <th className="px-4 text-[8px] uppercase tracking-wide text-gray-400">
//                     Seller
//                   </th>

//                   <th className="px-3 text-[8px] uppercase tracking-wide text-gray-400">
//                     Contact
//                   </th>

//                   <th className="px-3 text-[8px] uppercase tracking-wide text-gray-400">
//                     Portfolio
//                   </th>

//                   <th className="px-3 text-[8px] uppercase tracking-wide text-gray-400">
//                     Partners
//                   </th>

//                   <th className="px-3 text-[8px] uppercase tracking-wide text-gray-400">
//                     Status
//                   </th>

//                   <th className="px-4 text-right text-[8px] uppercase tracking-wide text-gray-400">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="h-[220px] text-center"
//                     >
//                       <Loader2 className="mx-auto animate-spin text-[#18b894]" />
//                     </td>
//                   </tr>
//                 ) : currentRows.length ? (
//                   currentRows.map(
//                     (seller) => {
//                       const stats =
//                         seller.propertyStats ||
//                         {};

//                       return (
//                         <tr
//                           key={
//                             seller._id
//                           }
//                           onClick={() =>
//                             onSelectSeller(
//                               seller._id
//                             )
//                           }
//                           className="h-[76px] cursor-pointer border-b border-gray-100 hover:bg-[#fbfcfd]"
//                         >
//                           <td className="px-4">
//                             <div className="flex items-center gap-3">
//                               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f5f2] text-[10px] font-bold text-[#168b75]">
//                                 {(seller.name ||
//                                   "S")
//                                   .split(" ")
//                                   .map(
//                                     (
//                                       word
//                                     ) =>
//                                       word[0]
//                                   )
//                                   .join("")
//                                   .slice(
//                                     0,
//                                     2
//                                   )}
//                               </div>

//                               <div>
//                                 <p className="text-[10px] font-semibold text-[#26374a]">
//                                   {
//                                     seller.name
//                                   }
//                                 </p>

//                                 <p className="mt-0.5 text-[8px] text-gray-400">
//                                   {
//                                     seller.sellerId
//                                   }
//                                 </p>
//                               </div>
//                             </div>
//                           </td>

//                           <td className="px-3">
//                             <p className="flex items-center gap-1.5 text-[9px] text-gray-600">
//                               <Phone
//                                 size={
//                                   9
//                                 }
//                               />

//                               {
//                                 seller.phone
//                               }
//                             </p>

//                             <p className="mt-1 flex items-center gap-1.5 text-[8px] text-gray-400">
//                               <Mail
//                                 size={
//                                   9
//                                 }
//                               />

//                               {
//                                 seller.email
//                               }
//                             </p>
//                           </td>

//                           <td className="px-3">
//                             <div className="flex flex-wrap gap-1.5">
//                               <span className="rounded bg-slate-100 px-2 py-1 text-[8px]">
//                                 {stats.total ||
//                                   0}{" "}
//                                 Total
//                               </span>

//                               <span className="rounded bg-emerald-50 px-2 py-1 text-[8px] text-emerald-700">
//                                 {stats.live ||
//                                   0}{" "}
//                                 Live
//                               </span>

//                               <span className="rounded bg-amber-50 px-2 py-1 text-[8px] text-amber-700">
//                                 {stats.pending ||
//                                   0}{" "}
//                                 Pending
//                               </span>

//                               <span className="rounded bg-red-50 px-2 py-1 text-[8px] text-red-600">
//                                 {stats.rejected ||
//                                   0}{" "}
//                                 Rejected
//                               </span>
//                             </div>
//                           </td>

//                           <td className="px-3">
//                             <p className="text-[9px] font-semibold text-gray-600">
//                               {stats.assignedPartnerCount ||
//                                 0}{" "}
//                               Partner(s)
//                             </p>
//                           </td>

//                           <td className="px-3">
//                             <span
//                               className={`rounded-full border px-2 py-1 text-[8px] font-semibold ${
//                                 seller.isVerified
//                                   ? "border-emerald-200 bg-emerald-50 text-emerald-700"
//                                   : "border-amber-200 bg-amber-50 text-amber-700"
//                               }`}
//                             >
//                               {seller.isVerified
//                                 ? "Verified"
//                                 : "Pending"}
//                             </span>
//                           </td>

//                           <td className="px-4 text-right">
//                             <button
//                               onClick={(
//                                 e
//                               ) => {
//                                 e.stopPropagation();

//                                 onSelectSeller(
//                                   seller._id
//                                 );
//                               }}
//                               className="inline-flex items-center gap-1 rounded px-2 py-1.5 text-[9px] font-semibold text-[#17384a] hover:bg-gray-100"
//                             >
//                               <Eye
//                                 size={
//                                   12
//                                 }
//                               />
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="h-[220px] text-center text-[10px] text-gray-400"
//                     >
//                       No sellers found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
//             <p className="text-[9px] text-gray-400">
//               {sellers.length} seller(s)
//             </p>

//             <div className="flex items-center gap-1">
//               <button
//                 disabled={
//                   currentPage === 1
//                 }
//                 onClick={() =>
//                   setCurrentPage(
//                     (page) =>
//                       Math.max(
//                         1,
//                         page - 1
//                       )
//                   )
//                 }
//                 className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 disabled:opacity-40"
//               >
//                 <ChevronLeft
//                   size={12}
//                 />
//               </button>

//               <span className="px-2 text-[9px] text-gray-500">
//                 {currentPage} /{" "}
//                 {totalPages}
//               </span>

//               <button
//                 disabled={
//                   currentPage ===
//                   totalPages
//                 }
//                 onClick={() =>
//                   setCurrentPage(
//                     (page) =>
//                       Math.min(
//                         totalPages,
//                         page + 1
//                       )
//                   )
//                 }
//                 className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 disabled:opacity-40"
//               >
//                 <ChevronRight
//                   size={12}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ======================================================
//    SELLER CONTROL TOWER
// ====================================================== */

// function SellerControlTower({
//   sellerId,
//   onBack,
// }) {
//   const [
//     sellerData,
//     setSellerData,
//   ] = useState(null);

//   const [
//     loading,
//     setLoading,
//   ] = useState(true);

//   const [
//     selectedProperty,
//     setSelectedProperty,
//   ] = useState(null);

//   const [
//     verifyLoading,
//     setVerifyLoading,
//   ] = useState(false);

//   const fetchSeller =
//     async () => {
//       try {
//         setLoading(true);

//         const response =
//           await getSellerByIdApi(
//             sellerId
//           );

//         setSellerData(
//           response.data
//         );

//         setSelectedProperty(
//           response.data.properties?.[0] ||
//             null
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   useEffect(() => {
//     fetchSeller();
//   }, [sellerId]);

//   const openProperty =
//     async (property) => {
//       try {
//         const response =
//           await getSellerPropertyByIdApi(
//             sellerId,
//             property._id
//           );

//         setSelectedProperty(
//           response.data
//         );
//       } catch (error) {
//         console.error(error);
//       }
//     };

//   const handleVerify =
//     async () => {
//       if (!sellerData?.seller) {
//         return;
//       }

//       try {
//         setVerifyLoading(true);

//         await verifySellerApi(
//           sellerId,
//           {
//             isVerified:
//               !sellerData.seller
//                 .isVerified,

//             remarks:
//               sellerData.seller
//                 .isVerified
//                 ? "Seller verification removed by admin."
//                 : "Seller verified by admin.",
//           }
//         );

//         await fetchSeller();
//       } finally {
//         setVerifyLoading(false);
//       }
//     };

//   if (loading) {
//     return (
//       <div className="flex min-h-[500px] items-center justify-center">
//         <Loader2 className="animate-spin text-[#18b894]" />
//       </div>
//     );
//   }

//   if (!sellerData) {
//     return null;
//   }

//   const {
//     seller,
//     propertyStats,
//     assignedPartners,
//     properties,
//   } = sellerData;

//   return (
//     <div className="min-h-screen bg-[#fbfcff] text-[#0c2736]">
//       <div className="mx-auto max-w-[1500px] px-4 py-4">
//         <div className="mb-4 flex items-center justify-between">
//           <button
//             onClick={onBack}
//             className="flex items-center gap-1 text-[9px] font-semibold text-[#0a6a61]"
//           >
//             <ChevronLeft
//               size={12}
//             />
//             Seller Management
//           </button>

//           <button
//             onClick={onBack}
//             className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[9px]"
//           >
//             Back to Sellers
//           </button>
//         </div>

//         <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//             <div className="flex items-start gap-4">
//               <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-lg font-bold text-slate-500">
//                 {(seller.name ||
//                   "S")
//                   .split(" ")
//                   .map(
//                     (word) =>
//                       word[0]
//                   )
//                   .join("")
//                   .slice(0, 2)}
//               </div>

//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <h2 className="text-[18px] font-extrabold">
//                     {seller.name}
//                   </h2>

//                   <span
//                     className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${
//                       seller.isVerified
//                         ? "bg-emerald-100 text-emerald-700"
//                         : "bg-amber-100 text-amber-700"
//                     }`}
//                   >
//                     ●{" "}
//                     {seller.isVerified
//                       ? "Verified"
//                       : "Pending"}
//                   </span>
//                 </div>

//                 <div className="mt-3 flex flex-wrap items-center gap-4 text-[9px] text-slate-500">
//                   <span>
//                     ID{" "}
//                     {seller.sellerId}
//                   </span>

//                   <span className="flex items-center gap-1">
//                     <ShieldCheck
//                       size={12}
//                     />

//                     {seller.isPhoneVerified
//                       ? "Phone Verified"
//                       : "Phone Pending"}
//                   </span>

//                   <span className="flex items-center gap-1">
//                     <BriefcaseBusiness
//                       size={12}
//                     />
//                     Seller
//                   </span>

//                   <span className="flex items-center gap-1">
//                     <MapPin
//                       size={12}
//                     />

//                     {seller.location?.city ||
//                       "—"}
//                     {seller.location
//                       ?.state
//                       ? `, ${seller.location.state}`
//                       : ""}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <button
//               disabled={
//                 verifyLoading
//               }
//               onClick={
//                 handleVerify
//               }
//               className="flex h-9 items-center gap-2 rounded-md bg-[#003f52] px-4 text-[10px] font-semibold text-white disabled:opacity-50"
//             >
//               <BadgeCheck
//                 size={13}
//               />

//               {seller.isVerified
//                 ? "Remove Verification"
//                 : "Verify Seller"}
//             </button>
//           </div>
//         </section>

//         <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
//           {[
//             [
//               "TOTAL PROP.",
//               propertyStats.total,
//               Building2,
//             ],

//             [
//               "LIVE",
//               propertyStats.live,
//               Globe2,
//             ],

//             [
//               "PENDING",
//               propertyStats.pending,
//               Clock3,
//             ],

//             [
//               "REVIEWING",
//               propertyStats.reviewing,
//               AlertTriangle,
//             ],

//             [
//               "REJECTED",
//               propertyStats.rejected,
//               XCircle,
//             ],

//             [
//               "SOLD",
//               propertyStats.sold,
//               CheckCircle2,
//             ],

//             [
//               "RENTED",
//               propertyStats.rented,
//               RotateCcw,
//             ],

//             [
//               "VISITS",
//               propertyStats.visitScheduled,
//               CalendarCheck2,
//             ],
//           ].map(
//             ([
//               label,
//               value,
//               Icon,
//             ]) => (
//               <div
//                 key={label}
//                 className="rounded-lg border border-slate-200 bg-white p-3"
//               >
//                 <Icon
//                   size={13}
//                   className="text-slate-400"
//                 />

//                 <p className="mt-2 text-[8px] text-slate-500">
//                   {label}
//                 </p>

//                 <p className="mt-2 text-[18px] font-bold text-[#102d3d]">
//                   {value || 0}
//                 </p>
//               </div>
//             )
//           )}
//         </section>

//         <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
//           <div className="space-y-4">
//             {selectedProperty && (
//               <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
//                 <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
//                   <div>
//                     <h3 className="text-[11px] font-bold">
//                       Selected Property
//                       Lifecycle
//                     </h3>

//                     <p className="mt-1 text-[8px] text-slate-400">
//                       {
//                         selectedProperty.propertyId
//                       }{" "}
//                       •{" "}
//                       {
//                         selectedProperty.title
//                       }
//                     </p>
//                   </div>

//                   <StatusBadge
//                     status={
//                       selectedProperty.status
//                     }
//                   />
//                 </div>

//                 <div className="overflow-x-auto px-4 py-5">
//                   <div className="flex min-w-[650px] items-start">
//                     {selectedProperty.lifecycle?.map(
//                       (
//                         step,
//                         index
//                       ) => {
//                         const Icon =
//                           lifecycleIcons[
//                             step.key
//                           ] ||
//                           Clock3;

//                         return (
//                           <div
//                             key={
//                               step.key
//                             }
//                             className="relative flex flex-1 flex-col items-center text-center"
//                           >
//                             {index <
//                               selectedProperty
//                                 .lifecycle
//                                 .length -
//                                 1 && (
//                               <div className="absolute left-[55%] top-[20px] h-px w-[90%] border-t border-dashed border-slate-300" />
//                             )}

//                             <div
//                               className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white ${
//                                 step.active
//                                   ? "border-[#123a50] text-[#123a50]"
//                                   : step.completed
//                                   ? "border-emerald-500 text-emerald-600"
//                                   : "border-slate-300 text-slate-400"
//                               }`}
//                             >
//                               <Icon
//                                 size={
//                                   15
//                                 }
//                               />
//                             </div>

//                             <p className="mt-2 text-[8px] text-slate-500">
//                               {
//                                 step.label
//                               }
//                             </p>

//                             <p className="mt-1 text-[7px] text-slate-400">
//                               {step.active
//                                 ? "Current"
//                                 : step.completed
//                                 ? "Completed"
//                                 : "Pending"}
//                             </p>
//                           </div>
//                         );
//                       }
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//               <div className="flex items-center justify-between px-4 py-3">
//                 <div>
//                   <h3 className="text-[11px] font-bold">
//                     Seller Properties
//                   </h3>

//                   <p className="mt-1 text-[8px] text-slate-400">
//                     Click a property to
//                     view lifecycle,
//                     verification and
//                     partner.
//                   </p>
//                 </div>

//                 <Filter size={12} />
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-[760px]">
//                   <thead>
//                     <tr className="bg-[#003f52] text-left text-white">
//                       <th className="px-4 py-3 text-[8px]">
//                         PROPERTY
//                       </th>

//                       <th className="px-4 py-3 text-[8px]">
//                         LOCATION
//                       </th>

//                       <th className="px-4 py-3 text-[8px]">
//                         PRICE
//                       </th>

//                       <th className="px-4 py-3 text-[8px]">
//                         STATUS
//                       </th>

//                       <th className="px-4 py-3 text-[8px]">
//                         PARTNER
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {properties.map(
//                       (property) => (
//                         <tr
//                           key={
//                             property._id
//                           }
//                           onClick={() =>
//                             openProperty(
//                               property
//                             )
//                           }
//                           className={`cursor-pointer border-b border-slate-100 ${
//                             selectedProperty?._id ===
//                             property._id
//                               ? "bg-[#f1faf7]"
//                               : "hover:bg-slate-50"
//                           }`}
//                         >
//                           <td className="px-4 py-3">
//                             <p className="text-[9px] font-bold">
//                               {
//                                 property.propertyId
//                               }
//                             </p>

//                             <p className="mt-1 text-[8px] text-slate-500">
//                               {
//                                 property.title
//                               }
//                             </p>
//                           </td>

//                           <td className="px-4 py-3 text-[8px] text-slate-500">
//                             {property.locality ||
//                               ""}
//                             {property.locality &&
//                             property.city
//                               ? ", "
//                               : ""}
//                             {property.city ||
//                               ""}
//                           </td>

//                           <td className="px-4 py-3 text-[9px] font-semibold">
//                             {formatPrice(
//                               property.price
//                             )}
//                           </td>

//                           <td className="px-4 py-3">
//                             <StatusBadge
//                               status={
//                                 property.status
//                               }
//                             />
//                           </td>

//                           <td className="px-4 py-3 text-[8px] text-slate-600">
//                             {property
//                               .assignedPartner
//                               ?.name ||
//                               "Not Assigned"}
//                           </td>
//                         </tr>
//                       )
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           <aside className="space-y-4">
//             {selectedProperty ? (
//               <>
//                 <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//                   <div className="flex items-center justify-between">
//                     <h4 className="text-[12px] font-bold">
//                       Property Verification
//                     </h4>

//                     <ShieldCheck
//                       size={16}
//                       className="text-emerald-600"
//                     />
//                   </div>

//                   <div className="mt-4 space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[9px] text-slate-500">
//                         Status
//                       </span>

//                       <span className="text-[9px] font-semibold text-[#087D6D]">
//                         {
//                           selectedProperty.currentVerificationStatus
//                         }
//                       </span>
//                     </div>

//                     <div>
//                       <span className="text-[9px] text-slate-500">
//                         Review Notes
//                       </span>

//                       <p className="mt-1 text-[8px] leading-4 text-slate-600">
//                         {selectedProperty
//                           .review
//                           ?.notes ||
//                           selectedProperty
//                             .assignedPartner
//                             ?.partnerRemarks ||
//                           "No review notes."}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//                   <h4 className="text-[12px] font-bold">
//                     Partner Assignment
//                   </h4>

//                   {selectedProperty
//                     .assignedPartner
//                     ?.partnerId ? (
//                     <>
//                       <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
//                         <p className="text-[9px] font-bold">
//                           {selectedProperty
//                             .assignedPartner
//                             .name ||
//                             selectedProperty
//                               .assignedPartner
//                               .partnerId
//                               ?.name}
//                         </p>

//                         <p className="mt-1 text-[8px] text-slate-500">
//                           {selectedProperty
//                             .assignedPartner
//                             .partnerCode ||
//                             selectedProperty
//                               .assignedPartner
//                               .partnerId
//                               ?.partnerId}
//                         </p>

//                         <p className="mt-1 text-[8px] text-slate-400">
//                           {
//                             selectedProperty
//                               .assignedPartner
//                               .verificationStatus
//                           }
//                         </p>
//                       </div>

//                       <button className="mt-4 flex w-full items-center justify-center gap-2 text-[9px] font-semibold text-[#194b62]">
//                         <ArrowRightLeft
//                           size={
//                             13
//                           }
//                         />
//                         Change Partner
//                       </button>
//                     </>
//                   ) : (
//                     <div className="mt-4 rounded-lg border border-dashed border-slate-200 p-4 text-center text-[9px] text-slate-400">
//                       No partner
//                       assigned.
//                     </div>
//                   )}
//                 </div>

//                 <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//                   <div className="flex items-center justify-between">
//                     <h4 className="text-[12px] font-bold">
//                       Visit Schedule
//                     </h4>

//                     <CalendarCheck2
//                       size={16}
//                       className="text-blue-600"
//                     />
//                   </div>

//                   {selectedProperty
//                     .assignedPartner
//                     ?.visitDate ? (
//                     <div className="mt-4 rounded-lg bg-blue-50 p-3">
//                       <p className="text-[9px] font-semibold text-blue-700">
//                         {formatDateTime(
//                           selectedProperty
//                             .assignedPartner
//                             .visitDate
//                         )}
//                       </p>
//                     </div>
//                   ) : (
//                     <p className="mt-4 text-[9px] text-slate-400">
//                       No visit
//                       scheduled.
//                     </p>
//                   )}
//                 </div>

//                 <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//                   <h4 className="text-[12px] font-bold">
//                     Status History
//                   </h4>

//                   <div className="mt-3 space-y-2">
//                     {selectedProperty.statusHistory
//                       ?.slice()
//                       .reverse()
//                       .map(
//                         (
//                           item,
//                           index
//                         ) => (
//                           <div
//                             key={
//                               item._id ||
//                               index
//                             }
//                             className="rounded-lg border border-slate-100 p-2.5"
//                           >
//                             <div className="flex items-center justify-between">
//                               <StatusBadge
//                                 status={
//                                   item.status
//                                 }
//                               />

//                               <span className="text-[7px] text-slate-400">
//                                 {item.updatedAt
//                                   ? new Date(
//                                       item.updatedAt
//                                     ).toLocaleDateString(
//                                       "en-IN"
//                                     )
//                                   : ""}
//                               </span>
//                             </div>

//                             <p className="mt-2 text-[8px] text-slate-600">
//                               {item.updatedBy
//                                 ?.name ||
//                                 "System"}{" "}
//                               •{" "}
//                               {item.updatedBy
//                                 ?.role ||
//                                 "System"}
//                             </p>

//                             {item.remarks && (
//                               <p className="mt-1 text-[8px] leading-4 text-slate-400">
//                                 {
//                                   item.remarks
//                                 }
//                               </p>
//                             )}
//                           </div>
//                         )
//                       )}
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-[9px] text-slate-400">
//                 Select a property.
//               </div>
//             )}

//             <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//               <h4 className="text-[12px] font-bold">
//                 Seller Partners
//               </h4>

//               <div className="mt-3 space-y-2">
//                 {assignedPartners?.length ? (
//                   assignedPartners.map(
//                     (
//                       partner,
//                       index
//                     ) => (
//                       <div
//                         key={
//                           partner.partnerCode ||
//                           index
//                         }
//                         className="rounded-lg border border-slate-100 p-2.5"
//                       >
//                         <p className="text-[9px] font-semibold">
//                           {partner.name ||
//                             partner.partnerDoc
//                               ?.name}
//                         </p>

//                         <p className="mt-1 text-[8px] text-slate-400">
//                           {partner.partnerCode ||
//                             partner.partnerDoc
//                               ?.partnerId ||
//                             "—"}
//                         </p>
//                       </div>
//                     )
//                   )
//                 ) : (
//                   <p className="text-[9px] text-slate-400">
//                     No assigned
//                     partners.
//                   </p>
//                 )}
//               </div>
//             </div>
//           </aside>
//         </section>
//       </div>
//     </div>
//   );
// }

// /* ======================================================
//    MAIN
// ====================================================== */

// export default function SellersManagement() {
//   const [
//     selectedSellerId,
//     setSelectedSellerId,
//   ] = useState(null);

//   if (selectedSellerId) {
//     return (
//       <SellerControlTower
//         sellerId={
//           selectedSellerId
//         }
//         onBack={() =>
//           setSelectedSellerId(
//             null
//           )
//         }
//       />
//     );
//   }

//   return (
//     <SellerManagementList
//       onSelectSeller={
//         setSelectedSellerId
//       }
//     />
//   );
// }



// import React, {
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

// import {
//   Search,
//   ChevronLeft,
//   ChevronRight,
//   Download,
//   Users,
//   BadgeCheck,
//   Building2,
//   Mail,
//   Phone,
//   MapPin,
//   BriefcaseBusiness,
//   ShieldCheck,
//   AlertTriangle,
//   CheckCircle2,
//   Clock3,
//   Play,
//   FastForward,
//   Globe2,
//   Filter,
//   ArrowRightLeft,
//   CalendarDays,
//   CalendarCheck2,
//   XCircle,
//   RotateCcw,
//   Eye,
//   Loader2,
// } from "lucide-react";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import {
//   getAllSellersApi,
//   getSellerByIdApi,
//   getSellerPropertyByIdApi,
//   verifySellerApi,
// } from "../../../Services/sellerService";

// /* ======================================================
//    HELPERS
// ====================================================== */

// const formatPrice = (price) => {
//   const value =
//     Number(price || 0);

//   if (value >= 10000000) {
//     return `₹ ${(
//       value / 10000000
//     ).toFixed(1)} Cr`;
//   }

//   if (value >= 100000) {
//     return `₹ ${(
//       value / 100000
//     ).toFixed(1)} L`;
//   }

//   return `₹ ${value.toLocaleString(
//     "en-IN"
//   )}`;
// };

// const formatDateTime = (value) => {
//   if (!value) {
//     return "Not scheduled";
//   }

//   return new Date(
//     value
//   ).toLocaleString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//   });
// };

// const statusClass = {
//   Draft:
//     "bg-slate-100 text-slate-600 border-slate-200",

//   Submitted:
//     "bg-amber-50 text-amber-700 border-amber-200",

//   Assigned_To_Partner:
//     "bg-blue-50 text-blue-700 border-blue-200",

//   Reviewing:
//     "bg-orange-50 text-orange-700 border-orange-200",

//   Verified:
//     "bg-emerald-50 text-emerald-700 border-emerald-200",

//   Live:
//     "bg-teal-50 text-teal-700 border-teal-200",

//   Rejected:
//     "bg-red-50 text-red-700 border-red-200",

//   Sold:
//     "bg-purple-50 text-purple-700 border-purple-200",

//   Rented:
//     "bg-indigo-50 text-indigo-700 border-indigo-200",
// };

// const StatusBadge = ({
//   status,
// }) => (
//   <span
//     className={`inline-flex rounded border px-2 py-1 text-[8px] font-semibold ${
//       statusClass[status] ||
//       "bg-slate-50 text-slate-600 border-slate-200"
//     }`}
//   >
//     {status
//       ?.replaceAll("_", " ") ||
//       "Unknown"}
//   </span>
// );

// const lifecycleIcons = {
//   Draft: Play,
//   Submitted: FastForward,
//   Assigned_To_Partner:
//     ShieldCheck,
//   Reviewing: AlertTriangle,
//   Verified: CheckCircle2,
//   Live: Globe2,
// };

// /* ======================================================
//    SELLER MANAGEMENT LIST
// ====================================================== */

// function SellerManagementList({
//   onSelectSeller,
// }) {
//   const [
//     sellers,
//     setSellers,
//   ] = useState([]);

//   const [
//     loading,
//     setLoading,
//   ] = useState(true);

//   const [
//     error,
//     setError,
//   ] = useState("");

//   const [
//     search,
//     setSearch,
//   ] = useState("");

//   const [
//     activeTab,
//     setActiveTab,
//   ] = useState("All");

//   const [
//     currentPage,
//     setCurrentPage,
//   ] = useState(1);

//   const itemsPerPage = 10;

//   const fetchSellers =
//     async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response =
//           await getAllSellersApi({
//             search:
//               search.trim() ||
//               undefined,

//             verified:
//               activeTab ===
//               "Verified"
//                 ? "true"
//                 : activeTab ===
//                   "Pending"
//                 ? "false"
//                 : undefined,
//           });

//         setSellers(
//           response?.data || []
//         );
//       } catch (error) {
//         setError(
//           error?.response?.data
//             ?.message ||
//             "Unable to fetch sellers."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   useEffect(() => {
//     const timer =
//       setTimeout(() => {
//         fetchSellers();
//       }, 250);

//     return () =>
//       clearTimeout(timer);
//   }, [search, activeTab]);

//   const stats = useMemo(() => {
//     return {
//       total:
//         sellers.length,

//       verified:
//         sellers.filter(
//           (seller) =>
//             seller.isVerified
//         ).length,

//       pending:
//         sellers.filter(
//           (seller) =>
//             !seller.isVerified
//         ).length,

//       liveProperties:
//         sellers.reduce(
//           (sum, seller) =>
//             sum +
//             Number(
//               seller.propertyStats
//                 ?.live || 0
//             ),
//           0
//         ),
//     };
//   }, [sellers]);

//   const totalPages =
//     Math.max(
//       1,
//       Math.ceil(
//         sellers.length /
//           itemsPerPage
//       )
//     );

//   const currentRows =
//     sellers.slice(
//       (currentPage - 1) *
//         itemsPerPage,

//       currentPage *
//         itemsPerPage
//     );

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, activeTab]);

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
//   ];

//   return (
//     <div className="min-h-screen ] p-4 sm:p-1">
//       <div className="mx-auto max-w-[1600px]">
//         <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <h1 className="text-[24px] font-semibold text-[#14213d]">
//               Seller Management
//             </h1>

//             <p className="mt-1 text-[11px] text-gray-500">
//               All seller accounts,
//               verification and seller
//               property portfolios.
//             </p>
//           </div>

//           <button className="flex h-9 items-center gap-2 rounded-md border border-gray-200 bg-white px-4 text-[10px] font-semibold text-gray-600">
//             <Download size={13} />
//             Export Sellers
//           </button>
//         </div>

//         <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
//           {[
//             [
//               "Total Sellers",
//               stats.total,
//               Users,
//             ],

//             [
//               "Verified Sellers",
//               stats.verified,
//               BadgeCheck,
//             ],

//             [
//               "Pending Verification",
//               stats.pending,
//               Clock3,
//             ],

//             [
//               "Live Properties",
//               stats.liveProperties,
//               Building2,
//             ],
//           ].map(
//             ([
//               label,
//               value,
//               Icon,
//             ]) => (
//               <div
//                 key={label}
//                 className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-[8px] font-semibold uppercase tracking-wide text-gray-400">
//                       {label}
//                     </p>

//                     <p className="mt-3 text-[22px] font-semibold text-[#14213d]">
//                       {value}
//                     </p>
//                   </div>

//                   <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#eaf8f4] text-[#11977c]">
//                     <Icon
//                       size={16}
//                     />
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>

//         <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
//           <div className="border-b border-gray-100 px-4">
//             <div className="flex gap-6">
//               {tabs.map(
//                 (tab) => (
//                   <button
//                     key={
//                       tab.label
//                     }
//                     onClick={() => {
//                       setActiveTab(
//                         tab.label
//                       );

//                       setCurrentPage(
//                         1
//                       );
//                     }}
//                     className={`relative flex h-11 items-center gap-2 text-[10px] font-semibold ${
//                       activeTab ===
//                       tab.label
//                         ? "text-[#17384a]"
//                         : "text-gray-400"
//                     }`}
//                   >
//                     {tab.label}

//                     <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px]">
//                       {tab.count}
//                     </span>

//                     {activeTab ===
//                       tab.label && (
//                       <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#17384a]" />
//                     )}
//                   </button>
//                 )
//               )}
//             </div>
//           </div>

//           <div className="border-b border-gray-100 p-3">
//             <div className="relative max-w-[380px]">
//               <Search
//                 size={13}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//               />

//               <input
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(
//                     e.target.value
//                   )
//                 }
//                 placeholder="Search seller ID, name, email, phone, city..."
//                 className="h-9 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[10px] outline-none focus:border-[#18b894]"
//               />
//             </div>
//           </div>

//           {error && (
//             <div className="border-b border-red-100 bg-red-50 px-4 py-3 text-[10px] text-red-600">
//               {error}
//             </div>
//           )}

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px]">
//               <thead>
//                 <tr className="h-10 border-b border-gray-100 bg-[#fafbfc] text-left">
//                   <th className="px-4 text-[8px] uppercase tracking-wide text-gray-400">
//                     Seller
//                   </th>

//                   <th className="px-3 text-[8px] uppercase tracking-wide text-gray-400">
//                     Contact
//                   </th>

//                   <th className="px-3 text-[8px] uppercase tracking-wide text-gray-400">
//                     Portfolio
//                   </th>

//                   <th className="px-3 text-[8px] uppercase tracking-wide text-gray-400">
//                     Partners
//                   </th>

//                   <th className="px-3 text-[8px] uppercase tracking-wide text-gray-400">
//                     Status
//                   </th>

//                   <th className="px-4 text-right text-[8px] uppercase tracking-wide text-gray-400">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="h-[220px] text-center"
//                     >
//                       <Loader2 className="mx-auto animate-spin text-[#18b894]" />
//                     </td>
//                   </tr>
//                 ) : currentRows.length ? (
//                   currentRows.map(
//                     (seller) => {
//                       const stats =
//                         seller.propertyStats ||
//                         {};

//                       return (
//                         <tr
//                           key={
//                             seller._id
//                           }
//                           onClick={() =>
//                             onSelectSeller(
//                               seller._id
//                             )
//                           }
//                           className="h-[76px] cursor-pointer border-b border-gray-100 hover:bg-[#fbfcfd]"
//                         >
//                           <td className="px-4">
//                             <div className="flex items-center gap-3">
//                               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f5f2] text-[10px] font-bold text-[#168b75]">
//                                 {(seller.name ||
//                                   "S")
//                                   .split(" ")
//                                   .map(
//                                     (
//                                       word
//                                     ) =>
//                                       word[0]
//                                   )
//                                   .join("")
//                                   .slice(
//                                     0,
//                                     2
//                                   )}
//                               </div>

//                               <div>
//                                 <p className="text-[10px] font-semibold text-[#26374a]">
//                                   {
//                                     seller.name
//                                   }
//                                 </p>

//                                 <p className="mt-0.5 text-[8px] text-gray-400">
//                                   {
//                                     seller.sellerId
//                                   }
//                                 </p>
//                               </div>
//                             </div>
//                           </td>

//                           <td className="px-3">
//                             <p className="flex items-center gap-1.5 text-[9px] text-gray-600">
//                               <Phone
//                                 size={
//                                   9
//                                 }
//                               />

//                               {
//                                 seller.phone
//                               }
//                             </p>

//                             <p className="mt-1 flex items-center gap-1.5 text-[8px] text-gray-400">
//                               <Mail
//                                 size={
//                                   9
//                                 }
//                               />

//                               {
//                                 seller.email
//                               }
//                             </p>
//                           </td>

//                           <td className="px-3">
//                             <div className="flex flex-wrap gap-1.5">
//                               <span className="rounded bg-slate-100 px-2 py-1 text-[8px]">
//                                 {stats.total ||
//                                   0}{" "}
//                                 Total
//                               </span>

//                               <span className="rounded bg-emerald-50 px-2 py-1 text-[8px] text-emerald-700">
//                                 {stats.live ||
//                                   0}{" "}
//                                 Live
//                               </span>

//                               <span className="rounded bg-amber-50 px-2 py-1 text-[8px] text-amber-700">
//                                 {stats.pending ||
//                                   0}{" "}
//                                 Pending
//                               </span>

//                               <span className="rounded bg-red-50 px-2 py-1 text-[8px] text-red-600">
//                                 {stats.rejected ||
//                                   0}{" "}
//                                 Rejected
//                               </span>
//                             </div>
//                           </td>

//                           <td className="px-3">
//                             <p className="text-[9px] font-semibold text-gray-600">
//                               {stats.assignedPartnerCount ||
//                                 0}{" "}
//                               Partner(s)
//                             </p>
//                           </td>

//                           <td className="px-3">
//                             <span
//                               className={`rounded-full border px-2 py-1 text-[8px] font-semibold ${
//                                 seller.isVerified
//                                   ? "border-emerald-200 bg-emerald-50 text-emerald-700"
//                                   : "border-amber-200 bg-amber-50 text-amber-700"
//                               }`}
//                             >
//                               {seller.isVerified
//                                 ? "Verified"
//                                 : "Pending"}
//                             </span>
//                           </td>

//                           <td className="px-4 text-right">
//                             <button
//                               onClick={(
//                                 e
//                               ) => {
//                                 e.stopPropagation();

//                                 onSelectSeller(
//                                   seller._id
//                                 );
//                               }}
//                               className="inline-flex items-center gap-1 rounded px-2 py-1.5 text-[9px] font-semibold text-[#17384a] hover:bg-gray-100"
//                             >
//                               <Eye
//                                 size={
//                                   12
//                                 }
//                               />
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="h-[220px] text-center text-[10px] text-gray-400"
//                     >
//                       No sellers found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
//             <p className="text-[9px] text-gray-400">
//               {sellers.length} seller(s)
//             </p>

//             <div className="flex items-center gap-1">
//               <button
//                 disabled={
//                   currentPage === 1
//                 }
//                 onClick={() =>
//                   setCurrentPage(
//                     (page) =>
//                       Math.max(
//                         1,
//                         page - 1
//                       )
//                   )
//                 }
//                 className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 disabled:opacity-40"
//               >
//                 <ChevronLeft
//                   size={12}
//                 />
//               </button>

//               <span className="px-2 text-[9px] text-gray-500">
//                 {currentPage} /{" "}
//                 {totalPages}
//               </span>

//               <button
//                 disabled={
//                   currentPage ===
//                   totalPages
//                 }
//                 onClick={() =>
//                   setCurrentPage(
//                     (page) =>
//                       Math.min(
//                         totalPages,
//                         page + 1
//                       )
//                   )
//                 }
//                 className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 disabled:opacity-40"
//               >
//                 <ChevronRight
//                   size={12}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ======================================================
//    SELLER CONTROL TOWER
// ====================================================== */

// function SellerControlTower({
//   sellerId,
//   onBack,
// }) {
//   const [
//     sellerData,
//     setSellerData,
//   ] = useState(null);

//   const [
//     loading,
//     setLoading,
//   ] = useState(true);

//   const [
//     selectedProperty,
//     setSelectedProperty,
//   ] = useState(null);

//   const [
//     verifyLoading,
//     setVerifyLoading,
//   ] = useState(false);

//   const [propertyPage, setPropertyPage] = useState(1);
//   const propertyItemsPerPage = 10;

//   const allowedPropertyStatuses = [
//     "Submitted",
//     "Assigned_To_Partner",
//     "Reviewing",
//     "Verified",
//     "Live",
//     "Rejected",
//     "Sold",
//     "Rented",
//   ];

//   const fetchSeller =
//     async () => {
//       try {
//         setLoading(true);

//         const response =
//           await getSellerByIdApi(
//             sellerId
//           );

//         const rawData = response.data || {};

//         const sortedProperties = Array.isArray(rawData.properties)
//           ? [...rawData.properties]
//               .filter((property) =>
//                 allowedPropertyStatuses.includes(property?.status)
//               )
//               .sort(
//                 (a, b) =>
//                   new Date(b?.createdAt || 0).getTime() -
//                   new Date(a?.createdAt || 0).getTime()
//               )
//           : [];

//         setSellerData({
//           ...rawData,
//           properties: sortedProperties,
//         });

//         setPropertyPage(1);

//         setSelectedProperty(
//           sortedProperties[0] || null
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   useEffect(() => {
//     fetchSeller();
//   }, [sellerId]);

//   const openProperty =
//     async (property) => {
//       try {
//         const response =
//           await getSellerPropertyByIdApi(
//             sellerId,
//             property._id
//           );

//         setSelectedProperty(
//           response.data
//         );
//       } catch (error) {
//         console.error(error);
//       }
//     };

//   const handleVerify =
//     async () => {
//       if (!sellerData?.seller) {
//         return;
//       }

//       try {
//         setVerifyLoading(true);

//         await verifySellerApi(
//           sellerId,
//           {
//             isVerified:
//               !sellerData.seller
//                 .isVerified,

//             remarks:
//               sellerData.seller
//                 .isVerified
//                 ? "Seller verification removed by admin."
//                 : "Seller verified by admin.",
//           }
//         );

//         await fetchSeller();
//       } finally {
//         setVerifyLoading(false);
//       }
//     };

//   if (loading) {
//     return (
//       <div className="flex min-h-[500px] items-center justify-center">
//         <Loader2 className="animate-spin text-[#18b894]" />
//       </div>
//     );
//   }

//   if (!sellerData) {
//     return null;
//   }

//   const {
//     seller,
//     propertyStats,
//     assignedPartners,
//     properties,
//   } = sellerData;

//   const totalPropertyPages = Math.max(
//     1,
//     Math.ceil((properties?.length || 0) / propertyItemsPerPage)
//   );

//   const propertyStartIndex =
//     (propertyPage - 1) * propertyItemsPerPage;

//   const currentProperties = (properties || []).slice(
//     propertyStartIndex,
//     propertyStartIndex + propertyItemsPerPage
//   );

//   return (
//     <div className="min-h-screen bg-[#fbfcff] text-[#0c2736]">
//       <div className="mx-auto max-w-[1500px] px-4 py-4">
//         <div className="mb-4 flex items-center justify-between">
//           <button
//             onClick={onBack}
//             className="flex items-center gap-1 text-[9px] font-semibold text-[#0a6a61]"
//           >
//             <ChevronLeft
//               size={12}
//             />
//             Seller Management
//           </button>

//           <button
//             onClick={onBack}
//             className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[9px]"
//           >
//             Back to Sellers
//           </button>
//         </div>

//         <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//             <div className="flex items-start gap-4">
//               <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-lg font-bold text-slate-500">
//                 {(seller.name ||
//                   "S")
//                   .split(" ")
//                   .map(
//                     (word) =>
//                       word[0]
//                   )
//                   .join("")
//                   .slice(0, 2)}
//               </div>

//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <h2 className="text-[18px] font-extrabold">
//                     {seller.name}
//                   </h2>

//                   <span
//                     className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${
//                       seller.isVerified
//                         ? "bg-emerald-100 text-emerald-700"
//                         : "bg-amber-100 text-amber-700"
//                     }`}
//                   >
//                     ●{" "}
//                     {seller.isVerified
//                       ? "Verified"
//                       : "Pending"}
//                   </span>
//                 </div>

//                 <div className="mt-3 flex flex-wrap items-center gap-4 text-[9px] text-slate-500">
//                   <span>
//                     ID{" "}
//                     {seller.sellerId}
//                   </span>

//                   <span className="flex items-center gap-1">
//                     <ShieldCheck
//                       size={12}
//                     />

//                     {seller.isPhoneVerified
//                       ? "Phone Verified"
//                       : "Phone Pending"}
//                   </span>

//                   <span className="flex items-center gap-1">
//                     <BriefcaseBusiness
//                       size={12}
//                     />
//                     Seller
//                   </span>

//                   <span className="flex items-center gap-1">
//                     <MapPin
//                       size={12}
//                     />

//                     {seller.location?.city ||
//                       "—"}
//                     {seller.location
//                       ?.state
//                       ? `, ${seller.location.state}`
//                       : ""}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <button
//               disabled={
//                 verifyLoading
//               }
//               onClick={
//                 handleVerify
//               }
//               className="flex h-9 items-center gap-2 rounded-md bg-[#003f52] px-4 text-[10px] font-semibold text-white disabled:opacity-50"
//             >
//               <BadgeCheck
//                 size={13}
//               />

//               {seller.isVerified
//                 ? "Remove Verification"
//                 : "Verify Seller"}
//             </button>
//           </div>
//         </section>

//         <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
//           {[
//             [
//               "TOTAL PROP.",
//               propertyStats.total,
//               Building2,
//             ],

//             [
//               "LIVE",
//               propertyStats.live,
//               Globe2,
//             ],

//             [
//               "PENDING",
//               propertyStats.pending,
//               Clock3,
//             ],

//             [
//               "REVIEWING",
//               propertyStats.reviewing,
//               AlertTriangle,
//             ],

//             [
//               "REJECTED",
//               propertyStats.rejected,
//               XCircle,
//             ],

//             [
//               "SOLD",
//               propertyStats.sold,
//               CheckCircle2,
//             ],

//             [
//               "RENTED",
//               propertyStats.rented,
//               RotateCcw,
//             ],

//             [
//               "VISITS",
//               propertyStats.visitScheduled,
//               CalendarCheck2,
//             ],
//           ].map(
//             ([
//               label,
//               value,
//               Icon,
//             ]) => (
//               <div
//                 key={label}
//                 className="rounded-lg border border-slate-200 bg-white p-3"
//               >
//                 <Icon
//                   size={13}
//                   className="text-slate-400"
//                 />

//                 <p className="mt-2 text-[8px] text-slate-500">
//                   {label}
//                 </p>

//                 <p className="mt-2 text-[18px] font-bold text-[#102d3d]">
//                   {value || 0}
//                 </p>
//               </div>
//             )
//           )}
//         </section>

//         <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
//           <div className="space-y-4">
//             {selectedProperty && (
//               <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
//                 <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
//                   <div>
//                     <h3 className="text-[11px] font-bold">
//                       Selected Property
//                       Lifecycle
//                     </h3>

//                     <p className="mt-1 text-[8px] text-slate-400">
//                       {
//                         selectedProperty.propertyId
//                       }{" "}
//                       •{" "}
//                       {
//                         selectedProperty.title
//                       }
//                     </p>
//                   </div>

//                   <StatusBadge
//                     status={
//                       selectedProperty.status
//                     }
//                   />
//                 </div>

//                 <div className="px-4 py-5">
//                   <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
//                     {selectedProperty.lifecycle?.map(
//                       (
//                         step,
//                         index
//                       ) => {
//                         const Icon =
//                           lifecycleIcons[
//                             step.key
//                           ] ||
//                           Clock3;

//                         return (
//                           <div
//                             key={
//                               step.key
//                             }
//                             className="relative flex flex-1 flex-col items-center text-center"
//                           >
//                             {index <
//                               selectedProperty
//                                 .lifecycle
//                                 .length -
//                                 1 && (
//                               <div className="absolute left-[65%] top-[20px] hidden h-px w-[70%] border-t border-dashed border-slate-300 lg:block" />
//                             )}

//                             <div
//                               className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white ${
//                                 step.active
//                                   ? "border-[#123a50] text-[#123a50]"
//                                   : step.completed
//                                   ? "border-emerald-500 text-emerald-600"
//                                   : "border-slate-300 text-slate-400"
//                               }`}
//                             >
//                               <Icon
//                                 size={
//                                   15
//                                 }
//                               />
//                             </div>

//                             <p className="mt-2 text-[8px] text-slate-500">
//                               {
//                                 step.label
//                               }
//                             </p>

//                             <p className="mt-1 text-[7px] text-slate-400">
//                               {step.active
//                                 ? "Current"
//                                 : step.completed
//                                 ? "Completed"
//                                 : "Pending"}
//                             </p>
//                           </div>
//                         );
//                       }
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//               <div className="flex items-center justify-between px-4 py-3">
//                 <div>
//                   <h3 className="text-[11px] font-bold">
//                     Seller Properties
//                   </h3>

//                   <p className="mt-1 text-[8px] text-slate-400">
//                     Click a property to
//                     view lifecycle,
//                     verification and
//                     partner.
//                   </p>
//                 </div>

//                 <Filter size={12} />
//               </div>

//               <div className="w-full overflow-hidden">
//                 <table className="w-full table-fixed">
//                   <thead>
//                     <tr className="bg-[#003f52] text-left text-white">
//                       <th className="px-4 py-3 text-[8px]">
//                         PROPERTY
//                       </th>

//                       <th className="px-4 py-3 text-[8px]">
//                         LOCATION
//                       </th>

//                       <th className="px-4 py-3 text-[8px]">
//                         PRICE
//                       </th>

//                       <th className="px-4 py-3 text-[8px]">
//                         STATUS
//                       </th>

//                       <th className="px-3 py-3 text-[8px]">
//                         PARTNER
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {currentProperties.map(
//                       (property) => (
//                         <tr
//                           key={
//                             property._id
//                           }
//                           onClick={() =>
//                             openProperty(
//                               property
//                             )
//                           }
//                           className={`cursor-pointer border-b border-slate-100 ${
//                             selectedProperty?._id ===
//                             property._id
//                               ? "bg-[#f1faf7]"
//                               : "hover:bg-slate-50"
//                           }`}
//                         >
//                           <td className="px-3 py-3">
//                             <p className="text-[9px] font-bold">
//                               {
//                                 property.propertyId
//                               }
//                             </p>

//                             <p className="mt-1 text-[8px] text-slate-500">
//                               {
//                                 property.title
//                               }
//                             </p>
//                           </td>

//                           <td className="px-4 py-3 text-[8px] text-slate-500">
//                             {property.locality ||
//                               ""}
//                             {property.locality &&
//                             property.city
//                               ? ", "
//                               : ""}
//                             {property.city ||
//                               ""}
//                           </td>

//                           <td className="px-4 py-3 text-[9px] font-semibold">
//                             {formatPrice(
//                               property.price
//                             )}
//                           </td>

//                           <td className="px-3 py-3">
//                             <StatusBadge
//                               status={
//                                 property.status
//                               }
//                             />
//                           </td>

//                           <td className="px-4 py-3 text-[8px] text-slate-600">
//                             {property
//                               .assignedPartner
//                               ?.name ||
//                               "Not Assigned"}
//                           </td>
//                         </tr>
//                       )
//                     )}
//                   </tbody>
//                 </table>
//               </div>

//               {(properties?.length || 0) > 0 && (
//                 <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
//                   <p className="text-[9px] text-slate-400">
//                     Showing{" "}
//                     <span className="font-semibold text-slate-600">
//                       {propertyStartIndex + 1}
//                     </span>{" "}
//                     to{" "}
//                     <span className="font-semibold text-slate-600">
//                       {Math.min(
//                         propertyStartIndex + propertyItemsPerPage,
//                         properties.length
//                       )}
//                     </span>{" "}
//                     of{" "}
//                     <span className="font-semibold text-slate-600">
//                       {properties.length}
//                     </span>
//                   </p>

//                   <div className="flex items-center gap-1">
//                     <button
//                       type="button"
//                       disabled={propertyPage === 1}
//                       onClick={() =>
//                         setPropertyPage((page) =>
//                           Math.max(1, page - 1)
//                         )
//                       }
//                       className="h-7 rounded-md border border-slate-200 px-2.5 text-[9px] font-semibold text-slate-500 disabled:opacity-40"
//                     >
//                       Prev
//                     </button>

//                     {Array.from(
//                       { length: totalPropertyPages },
//                       (_, index) => index + 1
//                     ).map((page) => (
//                       <button
//                         type="button"
//                         key={page}
//                         onClick={() => setPropertyPage(page)}
//                         className={`h-7 min-w-7 rounded-md px-2 text-[9px] font-semibold ${
//                           propertyPage === page
//                             ? "bg-[#003f52] text-white"
//                             : "border border-slate-200 bg-white text-slate-500"
//                         }`}
//                       >
//                         {page}
//                       </button>
//                     ))}

//                     <button
//                       type="button"
//                       disabled={propertyPage === totalPropertyPages}
//                       onClick={() =>
//                         setPropertyPage((page) =>
//                           Math.min(totalPropertyPages, page + 1)
//                         )
//                       }
//                       className="h-7 rounded-md border border-slate-200 px-2.5 text-[9px] font-semibold text-slate-500 disabled:opacity-40"
//                     >
//                       Next
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <aside className="space-y-4">
//             {selectedProperty ? (
//               <>
//                 <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//                   <div className="flex items-center justify-between">
//                     <h4 className="text-[12px] font-bold">
//                       Property Verification
//                     </h4>

//                     <ShieldCheck
//                       size={16}
//                       className="text-emerald-600"
//                     />
//                   </div>

//                   <div className="mt-4 space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[9px] text-slate-500">
//                         Status
//                       </span>

//                       <span className="text-[9px] font-semibold text-[#087D6D]">
//                         {
//                           selectedProperty.currentVerificationStatus
//                         }
//                       </span>
//                     </div>

//                     <div>
//                       <span className="text-[9px] text-slate-500">
//                         Review Notes
//                       </span>

//                       <p className="mt-1 text-[8px] leading-4 text-slate-600">
//                         {selectedProperty
//                           .review
//                           ?.notes ||
//                           selectedProperty
//                             .assignedPartner
//                             ?.partnerRemarks ||
//                           "No review notes."}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//                   <h4 className="text-[12px] font-bold">
//                     Partner Assignment
//                   </h4>

//                   {selectedProperty
//                     .assignedPartner
//                     ?.partnerId ? (
//                     <>
//                       <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
//                         <p className="text-[9px] font-bold">
//                           {selectedProperty
//                             .assignedPartner
//                             .name ||
//                             selectedProperty
//                               .assignedPartner
//                               .partnerId
//                               ?.name}
//                         </p>

//                         <p className="mt-1 text-[8px] text-slate-500">
//                           {selectedProperty
//                             .assignedPartner
//                             .partnerCode ||
//                             selectedProperty
//                               .assignedPartner
//                               .partnerId
//                               ?.partnerId}
//                         </p>

//                         <p className="mt-1 text-[8px] text-slate-400">
//                           {
//                             selectedProperty
//                               .assignedPartner
//                               .verificationStatus
//                           }
//                         </p>
//                       </div>

//                       <button className="mt-4 flex w-full items-center justify-center gap-2 text-[9px] font-semibold text-[#194b62]">
//                         <ArrowRightLeft
//                           size={
//                             13
//                           }
//                         />
//                         Change Partner
//                       </button>
//                     </>
//                   ) : (
//                     <div className="mt-4 rounded-lg border border-dashed border-slate-200 p-4 text-center text-[9px] text-slate-400">
//                       No partner
//                       assigned.
//                     </div>
//                   )}
//                 </div>

//                 <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//                   <div className="flex items-center justify-between">
//                     <h4 className="text-[12px] font-bold">
//                       Visit Schedule
//                     </h4>

//                     <CalendarCheck2
//                       size={16}
//                       className="text-blue-600"
//                     />
//                   </div>

//                   {selectedProperty
//                     .assignedPartner
//                     ?.visitDate ? (
//                     <div className="mt-4 rounded-lg bg-blue-50 p-3">
//                       <p className="text-[9px] font-semibold text-blue-700">
//                         {formatDateTime(
//                           selectedProperty
//                             .assignedPartner
//                             .visitDate
//                         )}
//                       </p>
//                     </div>
//                   ) : (
//                     <p className="mt-4 text-[9px] text-slate-400">
//                       No visit
//                       scheduled.
//                     </p>
//                   )}
//                 </div>

//                 <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//                   <h4 className="text-[12px] font-bold">
//                     Status History
//                   </h4>

//                   <div className="mt-3 space-y-2">
//                     {selectedProperty.statusHistory
//                       ?.slice()
//                       .reverse()
//                       .map(
//                         (
//                           item,
//                           index
//                         ) => (
//                           <div
//                             key={
//                               item._id ||
//                               index
//                             }
//                             className="rounded-lg border border-slate-100 p-2.5"
//                           >
//                             <div className="flex items-center justify-between">
//                               <StatusBadge
//                                 status={
//                                   item.status
//                                 }
//                               />

//                               <span className="text-[7px] text-slate-400">
//                                 {item.updatedAt
//                                   ? new Date(
//                                       item.updatedAt
//                                     ).toLocaleDateString(
//                                       "en-IN"
//                                     )
//                                   : ""}
//                               </span>
//                             </div>

//                             <p className="mt-2 text-[8px] text-slate-600">
//                               {item.updatedBy
//                                 ?.name ||
//                                 "System"}{" "}
//                               •{" "}
//                               {item.updatedBy
//                                 ?.role ||
//                                 "System"}
//                             </p>

//                             {item.remarks && (
//                               <p className="mt-1 text-[8px] leading-4 text-slate-400">
//                                 {
//                                   item.remarks
//                                 }
//                               </p>
//                             )}
//                           </div>
//                         )
//                       )}
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-[9px] text-slate-400">
//                 Select a property.
//               </div>
//             )}

//             <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//               <h4 className="text-[12px] font-bold">
//                 Seller Partners
//               </h4>

//               <div className="mt-3 space-y-2">
//                 {assignedPartners?.length ? (
//                   assignedPartners.map(
//                     (
//                       partner,
//                       index
//                     ) => (
//                       <div
//                         key={
//                           partner.partnerCode ||
//                           index
//                         }
//                         className="rounded-lg border border-slate-100 p-2.5"
//                       >
//                         <p className="text-[9px] font-semibold">
//                           {partner.name ||
//                             partner.partnerDoc
//                               ?.name}
//                         </p>

//                         <p className="mt-1 text-[8px] text-slate-400">
//                           {partner.partnerCode ||
//                             partner.partnerDoc
//                               ?.partnerId ||
//                             "—"}
//                         </p>
//                       </div>
//                     )
//                   )
//                 ) : (
//                   <p className="text-[9px] text-slate-400">
//                     No assigned
//                     partners.
//                   </p>
//                 )}
//               </div>
//             </div>
//           </aside>
//         </section>
//       </div>
//     </div>
//   );
// }

// /* ======================================================
//    MAIN
// ====================================================== */

// export default function SellersManagement({
//   embedded = false,
//   initialSellerId = null,
//   onEmbeddedDetailClose,
// }) {
//   const navigate = useNavigate();

//   const [
//     selectedSellerId,
//     setSelectedSellerId,
//   ] = useState(initialSellerId || null);

//   useEffect(() => {
//     if (embedded && initialSellerId) {
//       setSelectedSellerId(initialSellerId);
//     }
//   }, [embedded, initialSellerId]);

//   const handleSellerSelect = (sellerId) => {
//     if (embedded) {
//       setSelectedSellerId(sellerId);
//       return;
//     }

//     setSelectedSellerId(sellerId);
//   };

//   const handleBack = () => {
//     setSelectedSellerId(null);

//     if (embedded && initialSellerId) {
//       onEmbeddedDetailClose?.();
//     }
//   };

//   if (selectedSellerId) {
//     return (
//       <SellerControlTower
//         sellerId={selectedSellerId}
//         onBack={handleBack}
//       />
//     );
//   }

//   return (
//     <SellerManagementList
//       onSelectSeller={handleSellerSelect}
//     />
//   );
// }



import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Search,
  ChevronLeft,
  ChevronRight,
  Download,
  Users,
  BadgeCheck,
  Building2,
  Mail,
  Phone,
  MapPin,
  BriefcaseBusiness,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Play,
  FastForward,
  Globe2,
  Filter,
  ArrowRightLeft,
  CalendarDays,
  CalendarCheck2,
  XCircle,
  RotateCcw,
  Eye,
  Loader2,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  getAllSellersApi,
  getSellerByIdApi,
  getSellerPropertyByIdApi,
  verifySellerApi,
} from "../../../Services/sellerService";

/* ======================================================
   HELPERS
====================================================== */

const formatPrice = (price) => {
  const value =
    Number(price || 0);

  if (value >= 10000000) {
    return `₹ ${(
      value / 10000000
    ).toFixed(1)} Cr`;
  }

  if (value >= 100000) {
    return `₹ ${(
      value / 100000
    ).toFixed(1)} L`;
  }

  return `₹ ${value.toLocaleString(
    "en-IN"
  )}`;
};

const formatDateTime = (value) => {
  if (!value) {
    return "Not scheduled";
  }

  return new Date(
    value
  ).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const statusClass = {
  Draft:
    "bg-slate-100 text-slate-600 border-slate-200",

  Submitted:
    "bg-amber-50 text-amber-700 border-amber-200",

  Assigned_To_Partner:
    "bg-blue-50 text-blue-700 border-blue-200",

  Reviewing:
    "bg-orange-50 text-orange-700 border-orange-200",

  Verified:
    "bg-emerald-50 text-emerald-700 border-emerald-200",

  Live:
    "bg-teal-50 text-teal-700 border-teal-200",

  Rejected:
    "bg-red-50 text-red-700 border-red-200",

  Sold:
    "bg-purple-50 text-purple-700 border-purple-200",

  Rented:
    "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const StatusBadge = ({
  status,
}) => (
  <span
    className={`inline-flex rounded border px-2 py-1 text-[8px] font-semibold ${
      statusClass[status] ||
      "bg-slate-50 text-slate-600 border-slate-200"
    }`}
  >
    {status
      ?.replaceAll("_", " ") ||
      "Unknown"}
  </span>
);

const lifecycleIcons = {
  Draft: Play,
  Submitted: FastForward,
  Assigned_To_Partner:
    ShieldCheck,
  Reviewing: AlertTriangle,
  Verified: CheckCircle2,
  Live: Globe2,
};

/* ======================================================
   SELLER MANAGEMENT LIST
====================================================== */

function SellerManagementList({
  onSelectSeller,
}) {
  const [
    sellers,
    setSellers,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    activeTab,
    setActiveTab,
  ] = useState("All");

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const itemsPerPage = 10;

  const fetchSellers =
    async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await getAllSellersApi({
            search:
              search.trim() ||
              undefined,

            verified:
              activeTab ===
              "Verified"
                ? "true"
                : activeTab ===
                  "Pending"
                ? "false"
                : undefined,
          });

        setSellers(
          response?.data || []
        );
      } catch (error) {
        setError(
          error?.response?.data
            ?.message ||
            "Unable to fetch sellers."
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    const timer =
      setTimeout(() => {
        fetchSellers();
      }, 250);

    return () =>
      clearTimeout(timer);
  }, [search, activeTab]);

  const stats = useMemo(() => {
    return {
      total:
        sellers.length,

      verified:
        sellers.filter(
          (seller) =>
            seller.isVerified
        ).length,

      pending:
        sellers.filter(
          (seller) =>
            !seller.isVerified
        ).length,

      liveProperties:
        sellers.reduce(
          (sum, seller) =>
            sum +
            Number(
              seller.propertyStats
                ?.live || 0
            ),
          0
        ),
    };
  }, [sellers]);

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        sellers.length /
          itemsPerPage
      )
    );

  const currentRows =
    sellers.slice(
      (currentPage - 1) *
        itemsPerPage,

      currentPage *
        itemsPerPage
    );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, activeTab]);

  const tabs = [
    {
      label: "All",
      count: stats.total,
    },

    {
      label: "Verified",
      count: stats.verified,
    },

    {
      label: "Pending",
      count: stats.pending,
    },
  ];

  return (
    <div className="min-h-screen  p-4 sm:p-1">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h1 className="text-[24px] font-semibold text-[#14213d]">
              Seller Management
            </h1>

            <p className="mt-1 text-[11px] text-gray-500">
              All seller accounts,
              verification and seller
              property portfolios.
            </p>
          </div>

          <button className="flex h-9 items-center gap-2 rounded-md border border-gray-200 bg-white px-4 text-[10px] font-semibold text-gray-600">
            <Download size={13} />
            Export Sellers
          </button>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            [
              "Total Sellers",
              stats.total,
              Users,
            ],

            [
              "Verified Sellers",
              stats.verified,
              BadgeCheck,
            ],

            [
              "Pending Verification",
              stats.pending,
              Clock3,
            ],

            [
              "Live Properties",
              stats.liveProperties,
              Building2,
            ],
          ].map(
            ([
              label,
              value,
              Icon,
            ]) => (
              <div
                key={label}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-wide text-gray-400">
                      {label}
                    </p>

                    <p className="mt-3 text-[22px] font-semibold text-[#14213d]">
                      {value}
                    </p>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#eaf8f4] text-[#11977c]">
                    <Icon
                      size={16}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-4">
            <div className="flex gap-6">
              {tabs.map(
                (tab) => (
                  <button
                    key={
                      tab.label
                    }
                    onClick={() => {
                      setActiveTab(
                        tab.label
                      );

                      setCurrentPage(
                        1
                      );
                    }}
                    className={`relative flex h-11 items-center gap-2 text-[10px] font-semibold ${
                      activeTab ===
                      tab.label
                        ? "text-[#17384a]"
                        : "text-gray-400"
                    }`}
                  >
                    {tab.label}

                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px]">
                      {tab.count}
                    </span>

                    {activeTab ===
                      tab.label && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#17384a]" />
                    )}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="border-b border-gray-100 p-3">
            <div className="relative max-w-[380px]">
              <Search
                size={13}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search seller ID, name, email, phone, city..."
                className="h-9 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[10px] outline-none focus:border-[#18b894]"
              />
            </div>
          </div>

          {error && (
            <div className="border-b border-red-100 bg-red-50 px-4 py-3 text-[10px] text-red-600">
              {error}
            </div>
          )}

          <div className="w-full overflow-hidden">
            <table className="w-full table-fixed">
              <thead>
                <tr className="h-10 border-b border-gray-100 bg-[#fafbfc] text-left">
                  <th className="w-[20%] px-3 text-[8px] uppercase tracking-wide text-gray-400">
                    Seller
                  </th>

                  <th className="w-[22%] px-3 text-[8px] uppercase tracking-wide text-gray-400">
                    Contact
                  </th>

                  <th className="w-[25%] px-3 text-[8px] uppercase tracking-wide text-gray-400">
                    Portfolio
                  </th>

                  <th className="w-[13%] px-3 text-[8px] uppercase tracking-wide text-gray-400">
                    Partners
                  </th>

                  <th className="w-[12%] px-3 text-[8px] uppercase tracking-wide text-gray-400">
                    Status
                  </th>

                  <th className="w-[8%] px-3 text-right text-[8px] uppercase tracking-wide text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="h-[220px] text-center"
                    >
                      <Loader2 className="mx-auto animate-spin text-[#18b894]" />
                    </td>
                  </tr>
                ) : currentRows.length ? (
                  currentRows.map(
                    (seller) => {
                      const stats =
                        seller.propertyStats ||
                        {};

                      return (
                        <tr
                          key={
                            seller._id
                          }
                          onClick={() =>
                            onSelectSeller(
                              seller._id
                            )
                          }
                          className="h-[76px] cursor-pointer border-b border-gray-100 hover:bg-[#fbfcfd]"
                        >
                          <td className="px-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f5f2] text-[10px] font-bold text-[#168b75]">
                                {(seller.name ||
                                  "S")
                                  .split(" ")
                                  .map(
                                    (
                                      word
                                    ) =>
                                      word[0]
                                  )
                                  .join("")
                                  .slice(
                                    0,
                                    2
                                  )}
                              </div>

                              <div>
                                <p className="text-[10px] font-semibold text-[#26374a]">
                                  {
                                    seller.name
                                  }
                                </p>

                                <p className="mt-0.5 text-[8px] text-gray-400">
                                  {
                                    seller.sellerId
                                  }
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-3">
                            <p className="flex items-center gap-1.5 text-[9px] text-gray-600">
                              <Phone
                                size={
                                  9
                                }
                              />

                              {
                                seller.phone
                              }
                            </p>

                            <p className="mt-1 flex max-w-[180px] items-center gap-1.5 truncate text-[8px] text-gray-400">
                              <Mail
                                size={
                                  9
                                }
                              />

                              {
                                seller.email
                              }
                            </p>
                          </td>

                          <td className="px-3">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="rounded bg-slate-100 px-2 py-1 text-[8px]">
                                {stats.total ||
                                  0}{" "}
                                Total
                              </span>

                              <span className="rounded bg-emerald-50 px-2 py-1 text-[8px] text-emerald-700">
                                {stats.live ||
                                  0}{" "}
                                Live
                              </span>

                              <span className="rounded bg-amber-50 px-2 py-1 text-[8px] text-amber-700">
                                {stats.pending ||
                                  0}{" "}
                                Pending
                              </span>

                              <span className="rounded bg-red-50 px-2 py-1 text-[8px] text-red-600">
                                {stats.rejected ||
                                  0}{" "}
                                Rejected
                              </span>
                            </div>
                          </td>

                          <td className="px-3">
                            <p className="text-[9px] font-semibold text-gray-600">
                              {stats.assignedPartnerCount ||
                                0}{" "}
                              Partner(s)
                            </p>
                          </td>

                          <td className="px-3">
                            <span
                              className={`rounded-full border px-2 py-1 text-[8px] font-semibold ${
                                seller.isVerified
                                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                  : "border-amber-200 bg-amber-50 text-amber-700"
                              }`}
                            >
                              {seller.isVerified
                                ? "Verified"
                                : "Pending"}
                            </span>
                          </td>

                          <td className="px-4 text-right">
                            <button
                              onClick={(
                                e
                              ) => {
                                e.stopPropagation();

                                onSelectSeller(
                                  seller._id
                                );
                              }}
                              className="inline-flex items-center gap-1 rounded px-2 py-1.5 text-[9px] font-semibold text-[#17384a] hover:bg-gray-100"
                            >
                              <Eye
                                size={
                                  12
                                }
                              />
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  )
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="h-[220px] text-center text-[10px] text-gray-400"
                    >
                      No sellers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
            <p className="text-[9px] text-gray-400">
              {sellers.length} seller(s)
            </p>

            <div className="flex items-center gap-1">
              <button
                disabled={
                  currentPage === 1
                }
                onClick={() =>
                  setCurrentPage(
                    (page) =>
                      Math.max(
                        1,
                        page - 1
                      )
                  )
                }
                className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 disabled:opacity-40"
              >
                <ChevronLeft
                  size={12}
                />
              </button>

              <span className="px-2 text-[9px] text-gray-500">
                {currentPage} /{" "}
                {totalPages}
              </span>

              <button
                disabled={
                  currentPage ===
                  totalPages
                }
                onClick={() =>
                  setCurrentPage(
                    (page) =>
                      Math.min(
                        totalPages,
                        page + 1
                      )
                  )
                }
                className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 disabled:opacity-40"
              >
                <ChevronRight
                  size={12}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   SELLER CONTROL TOWER
====================================================== */

function SellerControlTower({
  sellerId,
  onBack,
}) {
  const navigate = useNavigate();

  const [
    sellerData,
    setSellerData,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    selectedProperty,
    setSelectedProperty,
  ] = useState(null);

  const [
    verifyLoading,
    setVerifyLoading,
  ] = useState(false);

  const [propertyPage, setPropertyPage] = useState(1);
  const propertyItemsPerPage = 10;

  const [propertyStatusFilter, setPropertyStatusFilter] =
    useState("All");

  const allowedPropertyStatuses = [
    "Submitted",
    "Assigned_To_Partner",
    "Reviewing",
    "Verified",
    "Live",
    "Rejected",
    "Sold",
    "Rented",
  ];

  const getAssignedPartnerMongoId = (
    property
  ) => {
    const partnerId =
      property?.assignedPartner
        ?.partnerId;

    if (
      partnerId &&
      typeof partnerId === "object"
    ) {
      return (
        partnerId?._id ||
        null
      );
    }

    return (
      property?.assignedPartner
        ?.partnerMongoId ||
      property?.assignedPartner
        ?.partnerIdMongo ||
      partnerId ||
      null
    );
  };

  const getSellerPartnerMongoId = (
    partner
  ) => {
    return (
      partner?.partnerDoc?._id ||
      partner?.partnerId?._id ||
      partner?.partnerMongoId ||
      partner?._id ||
      null
    );
  };

  const fetchSeller =
    async () => {
      try {
        setLoading(true);

        const response =
          await getSellerByIdApi(
            sellerId
          );

        const rawData = response.data || {};

        const sortedProperties = Array.isArray(rawData.properties)
          ? [...rawData.properties]
              .filter((property) =>
                allowedPropertyStatuses.includes(property?.status)
              )
              .sort(
                (a, b) =>
                  new Date(b?.createdAt || 0).getTime() -
                  new Date(a?.createdAt || 0).getTime()
              )
          : [];

        setSellerData({
          ...rawData,
          properties: sortedProperties,
        });

        setPropertyPage(1);

        setSelectedProperty(
          sortedProperties[0] || null
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchSeller();
  }, [sellerId]);

  const openProperty =
    async (property) => {
      try {
        const response =
          await getSellerPropertyByIdApi(
            sellerId,
            property._id
          );

        setSelectedProperty(
          response.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  const handleVerify =
    async () => {
      if (!sellerData?.seller) {
        return;
      }

      try {
        setVerifyLoading(true);

        await verifySellerApi(
          sellerId,
          {
            isVerified:
              !sellerData.seller
                .isVerified,

            remarks:
              sellerData.seller
                .isVerified
                ? "Seller verification removed by admin."
                : "Seller verified by admin.",
          }
        );

        await fetchSeller();
      } finally {
        setVerifyLoading(false);
      }
    };

  // ======================================================
  // IMPORTANT:
  // ALL hooks must run before any conditional return.
  // sellerData may be null on the first render, so use
  // safe fallback values here.
  // ======================================================

  const seller =
    sellerData?.seller || null;

  const propertyStats =
    sellerData?.propertyStats || {};

  const assignedPartners =
    Array.isArray(
      sellerData?.assignedPartners
    )
      ? sellerData.assignedPartners
      : [];

  const properties =
    Array.isArray(
      sellerData?.properties
    )
      ? sellerData.properties
      : [];

  const filteredSellerProperties = useMemo(() => {
    return [...properties]
      .filter((property) =>
        allowedPropertyStatuses.includes(
          property?.status
        )
      )
      .filter(
        (property) =>
          propertyStatusFilter === "All" ||
          property?.status ===
            propertyStatusFilter
      )
      .sort(
        (a, b) =>
          new Date(
            b?.createdAt || 0
          ).getTime() -
          new Date(
            a?.createdAt || 0
          ).getTime()
      );
  }, [
    properties,
    propertyStatusFilter,
  ]);

  useEffect(() => {
    setPropertyPage(1);
  }, [propertyStatusFilter]);

  const totalPropertyPages = Math.max(
    1,
    Math.ceil(
      filteredSellerProperties.length /
        propertyItemsPerPage
    )
  );

  const propertyStartIndex =
    (propertyPage - 1) *
    propertyItemsPerPage;

  const currentProperties =
    filteredSellerProperties.slice(
      propertyStartIndex,
      propertyStartIndex +
        propertyItemsPerPage
    );

  // ======================================================
  // CONDITIONAL RETURNS MUST COME AFTER ALL HOOKS
  // ======================================================

  if (loading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <Loader2 className="animate-spin text-[#18b894]" />
      </div>
    );
  }

  if (!sellerData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#fbfcff] text-[#0c2736]">
      <div className="mx-auto max-w-[1500px] px-4 py-4">
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-[9px] font-semibold text-[#0a6a61]"
          >
            <ChevronLeft
              size={12}
            />
            Seller Management
          </button>

          <button
            onClick={onBack}
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[9px]"
          >
            Back to Sellers
          </button>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-lg font-bold text-slate-500">
                {(seller.name ||
                  "S")
                  .split(" ")
                  .map(
                    (word) =>
                      word[0]
                  )
                  .join("")
                  .slice(0, 2)}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-[18px] font-extrabold">
                    {seller.name}
                  </h2>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${
                      seller.isVerified
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    ●{" "}
                    {seller.isVerified
                      ? "Verified"
                      : "Pending"}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-[9px] text-slate-500">
                  <span>
                    ID{" "}
                    {seller.sellerId}
                  </span>

                  <span className="flex items-center gap-1">
                    <ShieldCheck
                      size={12}
                    />

                    {seller.isPhoneVerified
                      ? "Phone Verified"
                      : "Phone Pending"}
                  </span>

                  <span className="flex items-center gap-1">
                    <BriefcaseBusiness
                      size={12}
                    />
                    Seller
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin
                      size={12}
                    />

                    {seller.location?.city ||
                      "—"}
                    {seller.location
                      ?.state
                      ? `, ${seller.location.state}`
                      : ""}
                  </span>
                </div>
              </div>
            </div>

            <button
              disabled={
                verifyLoading
              }
              onClick={
                handleVerify
              }
              className="flex h-9 items-center gap-2 rounded-md bg-[#003f52] px-4 text-[10px] font-semibold text-white disabled:opacity-50"
            >
              <BadgeCheck
                size={13}
              />

              {seller.isVerified
                ? "Remove Verification"
                : "Verify Seller"}
            </button>
          </div>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
          {[
            [
              "TOTAL PROP.",
              propertyStats.total,
              Building2,
            ],

            [
              "LIVE",
              propertyStats.live,
              Globe2,
            ],

            [
              "PENDING",
              propertyStats.pending,
              Clock3,
            ],

            [
              "REVIEWING",
              propertyStats.reviewing,
              AlertTriangle,
            ],

            [
              "REJECTED",
              propertyStats.rejected,
              XCircle,
            ],

            [
              "SOLD",
              propertyStats.sold,
              CheckCircle2,
            ],

            [
              "RENTED",
              propertyStats.rented,
              RotateCcw,
            ],

            [
              "VISITS",
              propertyStats.visitScheduled,
              CalendarCheck2,
            ],
          ].map(
            ([
              label,
              value,
              Icon,
            ]) => (
              <div
                key={label}
                className="rounded-lg border border-slate-200 bg-white p-3"
              >
                <Icon
                  size={13}
                  className="text-slate-400"
                />

                <p className="mt-2 text-[8px] text-slate-500">
                  {label}
                </p>

                <p className="mt-2 text-[18px] font-bold text-[#102d3d]">
                  {value || 0}
                </p>
              </div>
            )
          )}
        </section>

        <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
          <div className="space-y-4">
            {selectedProperty && (
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                  <div>
                    <h3 className="text-[11px] font-bold">
                      Selected Property
                      Lifecycle
                    </h3>

                    <p className="mt-1 text-[8px] text-slate-400">
                      {
                        selectedProperty.propertyId
                      }{" "}
                      •{" "}
                      {
                        selectedProperty.title
                      }
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <StatusBadge
                      status={
                        selectedProperty.status
                      }
                    />

                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/property-management/${selectedProperty._id}`
                        )
                      }
                      className="flex h-8 items-center gap-1.5 rounded-lg bg-[#123a50] px-3 text-[9px] font-semibold text-white transition hover:bg-[#0d2f41]"
                    >
                      <Eye size={11} />
                      View Property
                    </button>
                  </div>
                </div>

                <div className="px-4 py-5">
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
                    {selectedProperty.lifecycle?.map(
                      (
                        step,
                        index
                      ) => {
                        const Icon =
                          lifecycleIcons[
                            step.key
                          ] ||
                          Clock3;

                        return (
                          <div
                            key={
                              step.key
                            }
                            className="relative flex flex-1 flex-col items-center text-center"
                          >
                            {index <
                              selectedProperty
                                .lifecycle
                                .length -
                                1 && (
                              <div className="absolute left-[65%] top-[20px] hidden h-px w-[70%] border-t border-dashed border-slate-300 lg:block" />
                            )}

                            <div
                              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white ${
                                step.active
                                  ? "border-[#123a50] text-[#123a50]"
                                  : step.completed
                                  ? "border-emerald-500 text-emerald-600"
                                  : "border-slate-300 text-slate-400"
                              }`}
                            >
                              <Icon
                                size={
                                  15
                                }
                              />
                            </div>

                            <p className="mt-2 text-[8px] text-slate-500">
                              {
                                step.label
                              }
                            </p>

                            <p className="mt-1 text-[7px] text-slate-400">
                              {step.active
                                ? "Current"
                                : step.completed
                                ? "Completed"
                                : "Pending"}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <h3 className="text-[11px] font-bold">
                    Seller Properties
                  </h3>

                  <p className="mt-1 text-[8px] text-slate-400">
                    Click a property to
                    view lifecycle,
                    verification and
                    partner.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Filter
                    size={12}
                    className="text-slate-400"
                  />

                  <select
                    value={propertyStatusFilter}
                    onChange={(e) =>
                      setPropertyStatusFilter(
                        e.target.value
                      )
                    }
                    className="h-8 rounded-lg border border-slate-200 bg-white px-2.5 text-[9px] font-semibold text-slate-600 outline-none focus:border-emerald-400"
                  >
                    <option value="All">
                      All Statuses
                    </option>

                    {allowedPropertyStatuses.map(
                      (status) => (
                        <option
                          key={status}
                          value={status}
                        >
                          {status.replaceAll(
                            "_",
                            " "
                          )}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="w-full overflow-hidden">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-[#003f52] text-left text-white">
                      <th className="px-4 py-3 text-[8px]">
                        PROPERTY
                      </th>

                      <th className="px-4 py-3 text-[8px]">
                        LOCATION
                      </th>

                      <th className="px-4 py-3 text-[8px]">
                        PRICE
                      </th>

                      <th className="px-4 py-3 text-[8px]">
                        STATUS
                      </th>

                      <th className="px-3 py-3 text-[8px]">
                        PARTNER
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentProperties.map(
                      (property) => (
                        <tr
                          key={
                            property._id
                          }
                          onClick={() =>
                            openProperty(
                              property
                            )
                          }
                          className={`cursor-pointer border-b border-slate-100 ${
                            selectedProperty?._id ===
                            property._id
                              ? "bg-[#f1faf7]"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <td className="px-3 py-3">
                            <p className="text-[9px] font-bold">
                              {
                                property.propertyId
                              }
                            </p>

                            <p className="mt-1 text-[8px] text-slate-500">
                              {
                                property.title
                              }
                            </p>
                          </td>

                          <td className="px-4 py-3 text-[8px] text-slate-500">
                            {property.locality ||
                              ""}
                            {property.locality &&
                            property.city
                              ? ", "
                              : ""}
                            {property.city ||
                              ""}
                          </td>

                          <td className="px-4 py-3 text-[9px] font-semibold">
                            {formatPrice(
                              property.price
                            )}
                          </td>

                          <td className="px-3 py-3">
                            <StatusBadge
                              status={
                                property.status
                              }
                            />
                          </td>

                          <td className="px-4 py-3 text-[8px] text-slate-600">
                            {property
                              .assignedPartner
                              ?.name ||
                              "Not Assigned"}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {filteredSellerProperties.length > 0 && (
                <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[9px] text-slate-400">
                    Showing{" "}
                    <span className="font-semibold text-slate-600">
                      {propertyStartIndex + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-semibold text-slate-600">
                      {Math.min(
                        propertyStartIndex + propertyItemsPerPage,
                        filteredSellerProperties.length
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-slate-600">
                      {filteredSellerProperties.length}
                    </span>
                  </p>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      disabled={propertyPage === 1}
                      onClick={() =>
                        setPropertyPage((page) =>
                          Math.max(1, page - 1)
                        )
                      }
                      className="h-7 rounded-md border border-slate-200 px-2.5 text-[9px] font-semibold text-slate-500 disabled:opacity-40"
                    >
                      Prev
                    </button>

                    {Array.from(
                      { length: totalPropertyPages },
                      (_, index) => index + 1
                    ).map((page) => (
                      <button
                        type="button"
                        key={page}
                        onClick={() => setPropertyPage(page)}
                        className={`h-7 min-w-7 rounded-md px-2 text-[9px] font-semibold ${
                          propertyPage === page
                            ? "bg-[#003f52] text-white"
                            : "border border-slate-200 bg-white text-slate-500"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      type="button"
                      disabled={propertyPage === totalPropertyPages}
                      onClick={() =>
                        setPropertyPage((page) =>
                          Math.min(totalPropertyPages, page + 1)
                        )
                      }
                      className="h-7 rounded-md border border-slate-200 px-2.5 text-[9px] font-semibold text-slate-500 disabled:opacity-40"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            {selectedProperty ? (
              <>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[12px] font-bold">
                      Property Verification
                    </h4>

                    <ShieldCheck
                      size={16}
                      className="text-emerald-600"
                    />
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-500">
                        Status
                      </span>

                      <span className="text-[9px] font-semibold text-[#087D6D]">
                        {
                          selectedProperty.currentVerificationStatus
                        }
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] text-slate-500">
                        Review Notes
                      </span>

                      <p className="mt-1 text-[8px] leading-4 text-slate-600">
                        {selectedProperty
                          .review
                          ?.notes ||
                          selectedProperty
                            .assignedPartner
                            ?.partnerRemarks ||
                          "No review notes."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="text-[12px] font-bold">
                    Partner Assignment
                  </h4>

                  {selectedProperty
                    .assignedPartner
                    ?.partnerId ? (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          const partnerMongoId =
                            getAssignedPartnerMongoId(
                              selectedProperty
                            );

                          if (
                            partnerMongoId
                          ) {
                            navigate(
                              `/partnerdashboard?tab=dashboard&partnerId=${partnerMongoId}`
                            );
                          }
                        }}
                        className="mt-4 w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-left transition hover:border-emerald-300 hover:bg-emerald-50/40"
                      >
                        <p className="text-[9px] font-bold">
                          {selectedProperty
                            .assignedPartner
                            .name ||
                            selectedProperty
                              .assignedPartner
                              .partnerId
                              ?.name}
                        </p>

                        <p className="mt-1 text-[8px] text-slate-500">
                          {selectedProperty
                            .assignedPartner
                            .partnerCode ||
                            selectedProperty
                              .assignedPartner
                              .partnerId
                              ?.partnerId}
                        </p>

                        <p className="mt-1 text-[8px] text-slate-400">
                          {
                            selectedProperty
                              .assignedPartner
                              .verificationStatus
                          }
                        </p>

                        <p className="mt-2 text-[8px] font-semibold text-emerald-700">
                          View Partner →
                        </p>
                      </button>

                      <button className="mt-4 flex w-full items-center justify-center gap-2 text-[9px] font-semibold text-[#194b62]">
                        <ArrowRightLeft
                          size={
                            13
                          }
                        />
                        Change Partner
                      </button>
                    </>
                  ) : (
                    <div className="mt-4 rounded-lg border border-dashed border-slate-200 p-4 text-center text-[9px] text-slate-400">
                      No partner
                      assigned.
                    </div>
                  )}
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[12px] font-bold">
                      Visit Schedule
                    </h4>

                    <CalendarCheck2
                      size={16}
                      className="text-blue-600"
                    />
                  </div>

                  {selectedProperty
                    .assignedPartner
                    ?.visitDate ? (
                    <div className="mt-4 rounded-lg bg-blue-50 p-3">
                      <p className="text-[9px] font-semibold text-blue-700">
                        {formatDateTime(
                          selectedProperty
                            .assignedPartner
                            .visitDate
                        )}
                      </p>
                    </div>
                  ) : (
                    <p className="mt-4 text-[9px] text-slate-400">
                      No visit
                      scheduled.
                    </p>
                  )}
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="text-[12px] font-bold">
                    Status History
                  </h4>

                  <div className="mt-3 space-y-2">
                    {selectedProperty.statusHistory
                      ?.slice()
                      .reverse()
                      .map(
                        (
                          item,
                          index
                        ) => (
                          <div
                            key={
                              item._id ||
                              index
                            }
                            className="rounded-lg border border-slate-100 p-2.5"
                          >
                            <div className="flex items-center justify-between">
                              <StatusBadge
                                status={
                                  item.status
                                }
                              />

                              <span className="text-[7px] text-slate-400">
                                {item.updatedAt
                                  ? new Date(
                                      item.updatedAt
                                    ).toLocaleDateString(
                                      "en-IN"
                                    )
                                  : ""}
                              </span>
                            </div>

                            <p className="mt-2 text-[8px] text-slate-600">
                              {item.updatedBy
                                ?.name ||
                                "System"}{" "}
                              •{" "}
                              {item.updatedBy
                                ?.role ||
                                "System"}
                            </p>

                            {item.remarks && (
                              <p className="mt-1 text-[8px] leading-4 text-slate-400">
                                {
                                  item.remarks
                                }
                              </p>
                            )}
                          </div>
                        )
                      )}
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-[9px] text-slate-400">
                Select a property.
              </div>
            )}

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="text-[12px] font-bold">
                Seller Partners
              </h4>

              <div className="mt-3 space-y-2">
                {assignedPartners?.length ? (
                  assignedPartners.map(
                    (
                      partner,
                      index
                    ) => (
                      <button
                        type="button"
                        key={
                          partner.partnerCode ||
                          partner?._id ||
                          index
                        }
                        onClick={() => {
                          const partnerMongoId =
                            getSellerPartnerMongoId(
                              partner
                            );

                          if (
                            partnerMongoId
                          ) {
                            navigate(
                              `/partnerdashboard?tab=dashboard&partnerId=${partnerMongoId}`
                            );
                          }
                        }}
                        className="w-full rounded-lg border border-slate-100 p-2.5 text-left transition hover:border-emerald-300 hover:bg-emerald-50/40"
                      >
                        <p className="text-[9px] font-semibold">
                          {partner.name ||
                            partner.partnerDoc
                              ?.name}
                        </p>

                        <p className="mt-1 text-[8px] text-slate-400">
                          {partner.partnerCode ||
                            partner.partnerDoc
                              ?.partnerId ||
                            "—"}
                        </p>

                        <p className="mt-1.5 text-[8px] font-semibold text-emerald-700">
                          View Partner →
                        </p>
                      </button>
                    )
                  )
                ) : (
                  <p className="text-[9px] text-slate-400">
                    No assigned
                    partners.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

/* ======================================================
   MAIN
====================================================== */

export default function SellersManagement({
  embedded = false,
  initialSellerId = null,
  onEmbeddedDetailClose,
}) {
  const navigate = useNavigate();

  const [
    selectedSellerId,
    setSelectedSellerId,
  ] = useState(initialSellerId || null);

  useEffect(() => {
    if (embedded && initialSellerId) {
      setSelectedSellerId(initialSellerId);
    }
  }, [embedded, initialSellerId]);

  const handleSellerSelect = (sellerId) => {
    if (embedded) {
      setSelectedSellerId(sellerId);
      return;
    }

    setSelectedSellerId(sellerId);
  };

  const handleBack = () => {
    setSelectedSellerId(null);

    if (embedded && initialSellerId) {
      onEmbeddedDetailClose?.();
    }
  };

  if (selectedSellerId) {
    return (
      <SellerControlTower
        sellerId={selectedSellerId}
        onBack={handleBack}
      />
    );
  }

  return (
    <SellerManagementList
      onSelectSeller={handleSellerSelect}
    />
  );
}