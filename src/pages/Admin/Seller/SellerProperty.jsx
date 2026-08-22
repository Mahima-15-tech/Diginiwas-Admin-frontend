// import React from "react";
// import {
//   Bell,
//   HelpCircle,
//   Mail,
//   Pencil,
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
// } from "lucide-react";

// const stats = [
//   {
//     label: "TOTAL PROP.",
//     value: 42,
//     type: "default",
//   },
//   {
//     label: "LIVE",
//     value: 28,
//     type: "success",
//   },
//   {
//     label: "PENDING",
//     value: 6,
//     type: "default",
//   },
//   {
//     label: "ACTION REQ.",
//     value: 3,
//     type: "danger",
//   },
//   {
//     label: "REJECTED",
//     value: 2,
//     type: "default",
//   },
//   {
//     label: "WITHDRAWN",
//     value: 1,
//     type: "default",
//   },
//   {
//     label: "EXPIRED",
//     value: 2,
//     type: "default",
//   },
// ];

// const lifecycle = [
//   {
//     label: "Draft",
//     value: 0,
//     icon: Play,
//     status: "default",
//   },
//   {
//     label: "Submitted",
//     value: 2,
//     icon: FastForward,
//     status: "default",
//   },
//   {
//     label: "Partner Review",
//     value: 4,
//     icon: ShieldCheck,
//     status: "active",
//   },
//   {
//     label: "Action Required",
//     value: 3,
//     icon: AlertTriangle,
//     status: "danger",
//   },
//   {
//     label: "Approved",
//     value: 1,
//     icon: CheckCircle2,
//     status: "default",
//   },
//   {
//     label: "Published",
//     value: 28,
//     icon: Globe2,
//     status: "success",
//   },
// ];

// const properties = [
//   {
//     id: "PRP-9021",
//     name: "Luxury Villa, Bandra West",
//     location: "Mumbai, MI",
//     price: "₹ 12.5 Cr",
//     status: "ACTION REQ.",
//   },
//   {
//     id: "PRP-8842",
//     name: "Seaview Apartment, Worli",
//     location: "Mumbai, MI",
//     price: "₹ 8.2 Cr",
//     status: "PARTNER REVIEW",
//   },
//   {
//     id: "PRP-7701",
//     name: "Commercial Space, Andheri E",
//     location: "Mumbai, MI",
//     price: "₹ 4.1 Cr",
//     status: "LIVE",
//   },
// ];

// const StatusBadge = ({ status }) => {
//   const classes = {
//     "ACTION REQ.":
//       "bg-red-100 text-red-600",
//     "PARTNER REVIEW":
//       "bg-blue-100 text-blue-700",
//     LIVE:
//       "bg-emerald-100 text-emerald-700",
//   };

//   return (
//     <span
//       className={`inline-flex rounded px-2 py-1 text-[9px] font-semibold ${
//         classes[status] ||
//         "bg-slate-100 text-slate-600"
//       }`}
//     >
//       {status}
//     </span>
//   );
// };

// export default function SellerControlTower() {
//   return (
//     <div className="min-h-screen bg-[#fbfcff] text-[#0c2736]">
//       {/* Top Bar */}
//       <header className="flex h-[58px] items-center justify-between border-b border-slate-200 bg-white px-5">
//         <h1 className="text-[15px] font-extrabold text-[#07384a]">
//           DigiNiwas Control Tower
//         </h1>

//         <div className="flex items-center gap-5">
//           <Bell
//             size={15}
//             className="text-slate-600"
//           />

//           <HelpCircle
//             size={16}
//             className="text-slate-600"
//           />

//           <div className="h-7 w-7 overflow-hidden rounded-full bg-slate-200">
//             <img
//               src="https://i.pravatar.cc/100?img=12"
//               alt=""
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1500px] px-4 py-4">
//         {/* Breadcrumb */}
//         <div className="mb-4 flex items-center gap-2 text-[9px] text-slate-500">
//           <span>Users</span>
//           <span>›</span>
//           <span>Sellers</span>
//           <span>›</span>
//           <span className="font-semibold text-[#173848]">
//             SEL-10442
//           </span>
//         </div>

//         {/* Profile */}
//         <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//             <div className="flex items-start gap-4">
//               <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-lg font-bold text-slate-500">
//                 AE
//               </div>

//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <h2 className="text-[18px] font-extrabold text-[#102d3d]">
//                     Aarav Estates
//                   </h2>

//                   <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[9px] font-semibold text-emerald-700">
//                     ● Active
//                   </span>
//                 </div>

//                 <div className="mt-3 flex flex-wrap items-center gap-4 text-[9px] text-slate-500">
//                   <span>
//                     ID SEL-10442
//                   </span>

//                   <span className="flex items-center gap-1">
//                     <ShieldCheck size={12} />
//                     Verified
//                   </span>

//                   <span className="flex items-center gap-1">
//                     <BriefcaseBusiness
//                       size={12}
//                     />
//                     Business
//                   </span>

//                   <span className="flex items-center gap-1">
//                     <MapPin size={12} />
//                     Mumbai, MI
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex gap-2">
//               <button className="flex h-9 items-center gap-2 rounded-md border border-slate-300 bg-white px-4 text-[10px] font-semibold text-[#183545]">
//                 <Mail size={13} />
//                 Message
//               </button>

//               <button className="flex h-9 items-center gap-2 rounded-md bg-[#003f52] px-4 text-[10px] font-semibold text-white">
//                 <Pencil size={13} />
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Stats */}
//         <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
//           {stats.map((item) => (
//             <div
//               key={item.label}
//               className={`relative rounded-lg border bg-white p-4 ${
//                 item.type === "success"
//                   ? "border-emerald-200"
//                   : item.type === "danger"
//                   ? "border-red-200"
//                   : "border-slate-200"
//               }`}
//             >
//               <p className="text-[8px] font-medium text-slate-500">
//                 {item.label}
//               </p>

//               <p
//                 className={`mt-3 text-[18px] font-extrabold ${
//                   item.type === "success"
//                     ? "text-emerald-600"
//                     : item.type === "danger"
//                     ? "text-red-600"
//                     : "text-[#102d3d]"
//                 }`}
//               >
//                 {item.value}
//               </p>

//               {item.type === "success" && (
//                 <div className="absolute bottom-0 left-0 h-[3px] w-full rounded-b-lg bg-emerald-600" />
//               )}

//               {item.type === "danger" && (
//                 <div className="absolute bottom-0 left-0 h-[3px] w-full rounded-b-lg bg-red-500" />
//               )}
//             </div>
//           ))}
//         </section>

//         {/* Main Grid */}
//         <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
//           {/* Left */}
//           <div className="space-y-4">
//             {/* Lifecycle */}
//             <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
//               <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
//                 <h3 className="text-[11px] font-bold text-[#193747]">
//                   Property Lifecycle
//                 </h3>

//                 <button className="text-[9px] font-semibold text-[#194b62]">
//                   View All Properties
//                 </button>
//               </div>

//               <div className="overflow-x-auto px-4 py-5">
//                 <div className="flex min-w-[650px] items-start justify-between">
//                   {lifecycle.map(
//                     (
//                       item,
//                       index
//                     ) => {
//                       const Icon =
//                         item.icon;

//                       return (
//                         <div
//                           key={
//                             item.label
//                           }
//                           className="relative flex flex-1 flex-col items-center text-center"
//                         >
//                           {index <
//                             lifecycle.length -
//                               1 && (
//                             <div className="absolute left-[55%] top-[20px] h-px w-[90%] border-t border-dashed border-slate-300" />
//                           )}

//                           <div
//                             className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white ${
//                               item.status ===
//                               "active"
//                                 ? "border-[#123a50] text-[#123a50]"
//                                 : item.status ===
//                                   "danger"
//                                 ? "border-red-500 text-red-500"
//                                 : item.status ===
//                                   "success"
//                                 ? "border-emerald-600 text-emerald-600"
//                                 : "border-slate-300 text-slate-400"
//                             }`}
//                           >
//                             <Icon
//                               size={
//                                 16
//                               }
//                             />
//                           </div>

//                           <p
//                             className={`mt-2 text-[9px] font-medium ${
//                               item.status ===
//                               "danger"
//                                 ? "text-red-500"
//                                 : item.status ===
//                                   "active"
//                                 ? "text-[#123a50]"
//                                 : "text-slate-500"
//                             }`}
//                           >
//                             {
//                               item.label
//                             }
//                           </p>

//                           <p
//                             className={`mt-2 text-[13px] font-bold ${
//                               item.status ===
//                               "danger"
//                                 ? "text-red-600"
//                                 : "text-[#183545]"
//                             }`}
//                           >
//                             {
//                               item.value
//                             }
//                           </p>
//                         </div>
//                       );
//                     }
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Recent Properties */}
//             <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//               <div className="flex items-center justify-between px-4 py-3">
//                 <h3 className="text-[11px] font-bold text-[#193747]">
//                   Recent Properties
//                 </h3>

//                 <button className="flex h-7 w-7 items-center justify-center rounded border border-slate-200">
//                   <Filter
//                     size={12}
//                     className="text-slate-500"
//                   />
//                 </button>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-[650px]">
//                   <thead>
//                     <tr className="bg-[#003f52] text-left text-white">
//                       <th className="px-4 py-3 text-[9px] font-semibold">
//                         Property ID / Name
//                       </th>

//                       <th className="px-4 py-3 text-[9px] font-semibold">
//                         Location
//                       </th>

//                       <th className="px-4 py-3 text-[9px] font-semibold">
//                         Price
//                       </th>

//                       <th className="px-4 py-3 text-[9px] font-semibold">
//                         Status
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {properties.map(
//                       (
//                         property
//                       ) => (
//                         <tr
//                           key={
//                             property.id
//                           }
//                           className="border-b border-slate-100 last:border-0"
//                         >
//                           <td className="px-4 py-3">
//                             <p className="text-[9px] font-bold text-[#16384a]">
//                               {
//                                 property.id
//                               }
//                             </p>

//                             <p className="mt-1 text-[8px] text-slate-500">
//                               {
//                                 property.name
//                               }
//                             </p>
//                           </td>

//                           <td className="px-4 py-3 text-[9px] text-slate-500">
//                             {
//                               property.location
//                             }
//                           </td>

//                           <td className="px-4 py-3 text-[9px] font-semibold text-[#183545]">
//                             {
//                               property.price
//                             }
//                           </td>

//                           <td className="px-4 py-3">
//                             <StatusBadge
//                               status={
//                                 property.status
//                               }
//                             />
//                           </td>
//                         </tr>
//                       )
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Right */}
//           <aside className="space-y-4">
//             {/* Action Required */}
//             <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
//               <div className="flex items-start gap-3">
//                 <AlertTriangle
//                   size={18}
//                   className="mt-0.5 shrink-0 text-red-500"
//                 />

//                 <div>
//                   <h4 className="text-[11px] font-bold text-red-600">
//                     Action Required
//                   </h4>

//                   <p className="mt-2 text-[9px] leading-4 text-slate-600">
//                     3 properties
//                     currently have
//                     outstanding flags
//                     and require seller
//                     intervention before
//                     publishing.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Verification */}
//             <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//               <div className="flex items-center justify-between">
//                 <h4 className="text-[12px] font-bold text-[#183545]">
//                   Verification
//                 </h4>

//                 <ShieldCheck
//                   size={17}
//                   className="text-emerald-600"
//                 />
//               </div>

//               <div className="mt-4 space-y-3">
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-3">
//                   <span className="text-[9px] text-slate-500">
//                     Status
//                   </span>

//                   <span className="text-[9px] font-semibold text-emerald-600">
//                     Verified Level 2
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between border-b border-slate-100 pb-3">
//                   <span className="text-[9px] text-slate-500">
//                     Last Review
//                   </span>

//                   <span className="text-[9px] text-[#183545]">
//                     17 Oct 2025
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <span className="text-[9px] text-slate-500">
//                     Expiry
//                   </span>

//                   <span className="text-[9px] text-[#183545]">
//                     12 Oct 2026
//                   </span>
//                 </div>
//               </div>

//               <button className="mt-4 h-9 w-full rounded-md border border-emerald-600 bg-white text-[9px] font-semibold text-emerald-700">
//                 Review Documents
//               </button>
//             </div>

//             {/* Partner Assignment */}
//             <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//               <h4 className="text-[12px] font-bold text-[#183545]">
//                 Partner Assignment
//               </h4>

//               <div className="mt-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded bg-[#003f52] text-[10px] font-bold text-white">
//                   SR
//                 </div>

//                 <div>
//                   <p className="text-[9px] font-bold text-[#183545]">
//                     Skyline Realty
//                   </p>

//                   <p className="mt-1 text-[8px] text-slate-500">
//                     ID PRT-2041 •
//                     Active
//                   </p>
//                 </div>
//               </div>

//               <button className="mt-4 flex w-full items-center justify-center gap-2 text-[9px] font-semibold text-[#194b62]">
//                 <ArrowRightLeft
//                   size={13}
//                 />
//                 Change Partner
//               </button>
//             </div>
//           </aside>
//         </section>
//       </main>
//     </div>
//   );
// }


import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Building2,
  MapPin,
  Eye,
  User,
  UserCheck,
  ShieldCheck,
  History,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getAllPropertiesApi,
  getPropertyByIdApi,
  updatePropertyStatusApi,
} from "../../../Services/propertyService";

const ALLOWED_STATUSES = [
  "Submitted",
  "Assigned_To_Partner",
  "Reviewing",
  "Verified",
  "Live",
  "Rejected",
  "Sold",
  "Rented",
];

const CREATOR_FILTERS = ["All", "Admin", "Seller", "Partner"];

const STATUS_STYLES = {
  Submitted: "bg-amber-50 text-amber-700 border-amber-200",
  Assigned_To_Partner: "bg-blue-50 text-blue-700 border-blue-200",
  Reviewing: "bg-orange-50 text-orange-700 border-orange-200",
  Verified: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Live: "bg-teal-50 text-teal-700 border-teal-200",
  Rejected: "bg-red-50 text-red-700 border-red-200",
  Sold: "bg-purple-50 text-purple-700 border-purple-200",
  Rented: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const normalizeRole = (role = "") => {
  const value = String(role).trim().toLowerCase();
  if (value === "partner") return "Partner";
  if (value === "seller") return "Seller";
  if (value === "admin") return "Admin";
  return value ? value[0].toUpperCase() + value.slice(1) : "Unknown";
};

const getCreatorMongoId = (property) =>
  property?.addedBy?.userId?._id ||
  property?.addedBy?.userId ||
  null;

const getSellerRouteId = (property) =>
  property?.addedBy?.sellerMongoId ||
  property?.addedBy?.userId?._id ||
  property?.addedBy?.userId ||
  null;

const getPartnerRouteId = (property) =>
  property?.addedBy?.partnerMongoId ||
  property?.addedBy?.userId?._id ||
  property?.addedBy?.userId ||
  property?.assignedPartner?.partnerId?._id ||
  null;

const StatusBadge = ({ status }) => (
  <span
    className={`inline-flex rounded-full border px-2.5 py-1 text-[8px] font-bold ${
      STATUS_STYLES[status] ||
      "border-slate-200 bg-slate-50 text-slate-600"
    }`}
  >
    {String(status || "-").replaceAll("_", " ")}
  </span>
);

export default function SellerProperty() {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [creatorFilter, setCreatorFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchProperties = async () => {
    try {
      setLoading(true);

      const response = await getAllPropertiesApi();
      const data = Array.isArray(response?.data) ? response.data : [];

      const filtered = data
        .filter((property) => ALLOWED_STATUSES.includes(property?.status))
        .sort(
          (a, b) =>
            new Date(b?.createdAt || 0).getTime() -
            new Date(a?.createdAt || 0).getTime()
        );

      setProperties(filtered);

      if (filtered.length) {
        await openProperty(filtered[0]);
      } else {
        setSelectedProperty(null);
      }
    } catch (error) {
      console.error("ALL PROPERTY FETCH ERROR:", error);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const openProperty = async (property) => {
    if (!property?._id) return;

    try {
      setDetailLoading(true);

      const response = await getPropertyByIdApi(property._id);
      setSelectedProperty(response?.data || property);
    } catch (error) {
      console.error("PROPERTY DETAIL ERROR:", error);
      setSelectedProperty(property);
    } finally {
      setDetailLoading(false);
    }
  };

  const filteredProperties = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return properties.filter((property) => {
      const creatorRole = normalizeRole(property?.addedBy?.role);

      const matchesSearch =
        !keyword ||
        property?.propertyId?.toLowerCase().includes(keyword) ||
        property?.title?.toLowerCase().includes(keyword) ||
        property?.city?.toLowerCase().includes(keyword) ||
        property?.locality?.toLowerCase().includes(keyword) ||
        property?.addedBy?.name?.toLowerCase().includes(keyword);

      const matchesStatus =
        statusFilter === "All" || property?.status === statusFilter;

      const matchesCreator =
        creatorFilter === "All" || creatorRole === creatorFilter;

      return matchesSearch && matchesStatus && matchesCreator;
    });
  }, [properties, search, statusFilter, creatorFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter, creatorFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProperties.length / itemsPerPage)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProperties = filteredProperties.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCreatorView = (property) => {
    const role = normalizeRole(property?.addedBy?.role);

    if (role === "Partner") {
      const partnerId = getPartnerRouteId(property);

      if (!partnerId) {
        Swal.fire("Partner unavailable", "Partner Mongo ID is not available.", "info");
        return;
      }

      navigate(
        `/partnerdashboard?tab=dashboard&partnerId=${partnerId}`
      );
      return;
    }

    if (role === "Seller") {
      const sellerId = getSellerRouteId(property);

      if (!sellerId) {
        Swal.fire("Seller unavailable", "Seller Mongo ID is not available.", "info");
        return;
      }

      navigate(
        `/seller-dashboard?tab=dashboard&sellerId=${sellerId}`
      );
      return;
    }

    Swal.fire({
      icon: "info",
      title: "Added by Admin",
      text: "This property was added by an admin account.",
      confirmButtonColor: "#0d5c55",
    });
  };

  const updateStatus = async (status) => {
    if (!selectedProperty?._id || !status) return;

    try {
      setStatusUpdating(true);

      const response = await updatePropertyStatusApi(
        selectedProperty._id,
        {
          status,
          remarks: `Status changed to ${status} from Property Control Tower.`,
        }
      );

      if (!response?.success) {
        throw new Error(response?.message || "Unable to update status");
      }

      await Swal.fire({
        icon: "success",
        title: "Status Updated",
        text: `Property status changed to ${status.replaceAll("_", " ")}.`,
        confirmButtonColor: "#0d5c55",
      });

      await fetchProperties();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unable to update status",
        text:
          error?.response?.data?.message ||
          error?.message ||
          "Status update failed.",
      });
    } finally {
      setStatusUpdating(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-800">
      <section className="mb-4 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700">
          Properties / Control Tower
        </p>

        <h1 className="mt-1 text-2xl font-extrabold text-[#173c37]">
          Property Lifecycle & Management
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          Manage active workflow properties, update status and open the account that created each property.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[390px_minmax(0,1fr)]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-extrabold text-[#173c37]">
                  All Properties
                </h2>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  {filteredProperties.length} properties
                </p>
              </div>

              <Building2 size={19} className="text-teal-600" />
            </div>

            <div className="relative mt-4">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search property, city, creator..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none focus:border-teal-500"
              />
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-semibold outline-none"
              >
                <option value="All">All Statuses</option>

                {ALLOWED_STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status.replaceAll("_", " ")}
                  </option>
                ))}
              </select>

              <select
                value={creatorFilter}
                onChange={(e) => setCreatorFilter(e.target.value)}
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-semibold outline-none"
              >
                {CREATOR_FILTERS.map((creator) => (
                  <option key={creator} value={creator}>
                    {creator === "All" ? "All Creators" : creator}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            {loading ? (
              <div className="flex min-h-[360px] items-center justify-center">
                <Loader2 className="animate-spin text-teal-600" />
              </div>
            ) : currentProperties.length === 0 ? (
              <div className="p-10 text-center text-xs text-slate-400">
                No properties found.
              </div>
            ) : (
              currentProperties.map((property) => {
                const selected =
                  selectedProperty?._id === property._id;

                return (
                  <button
                    type="button"
                    key={property._id}
                    onClick={() => openProperty(property)}
                    className={`w-full border-b border-slate-100 p-4 text-left transition ${
                      selected
                        ? "bg-teal-50/70"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex gap-3">
                      <img
                        src={
                          property?.images?.[0]?.url ||
                          "https://placehold.co/100x100?text=Property"
                        }
                        alt=""
                        className="h-14 w-14 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="truncate text-xs font-extrabold text-slate-800">
                              {property?.title || "Untitled Property"}
                            </p>

                            <p className="mt-0.5 text-[9px] font-semibold text-teal-700">
                              {property?.propertyId || "-"}
                            </p>
                          </div>

                          <StatusBadge status={property?.status} />
                        </div>

                        <p className="mt-2 flex items-center gap-1 truncate text-[9px] text-slate-400">
                          <MapPin size={10} />
                          {[property?.locality, property?.city]
                            .filter(Boolean)
                            .join(", ") || "Location not added"}
                        </p>

                        <p className="mt-2 text-[9px] text-slate-400">
                          By{" "}
                          <strong className="text-slate-600">
                            {property?.addedBy?.name || "-"}
                          </strong>
                          {" • "}
                          {normalizeRole(property?.addedBy?.role)}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {!loading && filteredProperties.length > 0 && (
            <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[9px] text-slate-400">
                {startIndex + 1}-
                {Math.min(startIndex + itemsPerPage, filteredProperties.length)}
                {" "}of {filteredProperties.length}
              </p>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                  className="flex h-7 w-7 items-center justify-center rounded border border-slate-200 disabled:opacity-40"
                >
                  <ChevronLeft size={12} />
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`h-7 min-w-7 rounded px-2 text-[9px] font-semibold ${
                        page === currentPage
                          ? "bg-[#0d2d2a] text-white"
                          : "border border-slate-200 text-slate-500"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.min(totalPages, page + 1)
                    )
                  }
                  className="flex h-7 w-7 items-center justify-center rounded border border-slate-200 disabled:opacity-40"
                >
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          )}
        </section>

        <section>
          {!selectedProperty ? (
            <div className="flex min-h-[560px] items-center justify-center rounded-2xl border border-slate-200 bg-white">
              <p className="text-xs text-slate-400">Select a property.</p>
            </div>
          ) : (
            <>
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <img
                      src={
                        selectedProperty?.images?.[0]?.url ||
                        "https://placehold.co/120x120?text=Property"
                      }
                      alt=""
                      className="h-20 w-20 rounded-2xl object-cover"
                    />

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg font-extrabold text-[#173c37]">
                          {selectedProperty?.title}
                        </h2>

                        <StatusBadge status={selectedProperty?.status} />
                      </div>

                      <p className="mt-1 text-xs font-semibold text-teal-700">
                        {selectedProperty?.propertyId}
                      </p>

                      <p className="mt-2 text-[10px] text-slate-400">
                        {[selectedProperty?.locality, selectedProperty?.city]
                          .filter(Boolean)
                          .join(", ") || "-"}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(
                        `/property-management/${selectedProperty._id}`
                      )
                    }
                    className="flex h-10 items-center gap-2 rounded-xl bg-[#0d2d2a] px-4 text-xs font-bold text-white"
                  >
                    <Eye size={14} />
                    View Property
                  </button>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 sm:grid-cols-4">
                  <Info
                    label="Added By"
                    value={selectedProperty?.addedBy?.name || "-"}
                    secondary={normalizeRole(selectedProperty?.addedBy?.role)}
                  />

                  <Info
                    label="Created"
                    value={
                      selectedProperty?.createdAt
                        ? new Date(selectedProperty.createdAt).toLocaleDateString("en-IN")
                        : "-"
                    }
                  />

                  <Info
                    label="Status"
                    value={String(selectedProperty?.status || "-").replaceAll("_", " ")}
                  />

                  <Info
                    label="Partner"
                    value={
                      selectedProperty?.assignedPartner?.name ||
                      selectedProperty?.assignedPartner?.partnerId?.name ||
                      "Not Assigned"
                    }
                  />
                </div>
              </section>

              <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <User size={15} className="text-teal-700" />
                    <h3 className="text-sm font-extrabold text-[#173c37]">
                      Property Creator
                    </h3>
                  </div>

                  <p className="mt-4 text-sm font-bold text-slate-700">
                    {selectedProperty?.addedBy?.name || "-"}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    {normalizeRole(selectedProperty?.addedBy?.role)}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleCreatorView(selectedProperty)}
                    className="mt-4 flex h-9 w-full items-center justify-center gap-2 rounded-xl border border-teal-200 bg-teal-50 text-[10px] font-bold text-teal-700"
                  >
                    <UserCheck size={13} />
                    View {normalizeRole(selectedProperty?.addedBy?.role)}
                  </button>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={15} className="text-teal-700" />
                    <h3 className="text-sm font-extrabold text-[#173c37]">
                      Update Property Status
                    </h3>
                  </div>

                  <select
                    disabled={statusUpdating}
                    value={selectedProperty?.status || ""}
                    onChange={(e) => updateStatus(e.target.value)}
                    className="mt-4 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold outline-none disabled:opacity-50"
                  >
                    {ALLOWED_STATUSES.map((status) => (
                      <option key={status} value={status}>
                        {status.replaceAll("_", " ")}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <History size={15} className="text-teal-700" />
                  <h3 className="text-sm font-extrabold text-[#173c37]">
                    Status History
                  </h3>
                </div>

                <div className="mt-4 space-y-2">
                  {(selectedProperty?.statusHistory || [])
                    .slice()
                    .reverse()
                    .map((item, index) => (
                      <div
                        key={item?._id || index}
                        className="rounded-xl border border-slate-100 p-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <StatusBadge status={item?.status} />

                          <span className="text-[9px] text-slate-400">
                            {item?.updatedAt
                              ? new Date(item.updatedAt).toLocaleString("en-IN")
                              : "-"}
                          </span>
                        </div>

                        <p className="mt-2 text-[10px] text-slate-600">
                          {item?.updatedBy?.name || "System"}
                          {" • "}
                          {item?.updatedBy?.role || "System"}
                        </p>

                        {item?.remarks && (
                          <p className="mt-1 text-[9px] text-slate-400">
                            {item.remarks}
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              </section>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

function Info({ label, value, secondary }) {
  return (
    <div>
      <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-[10px] font-bold text-slate-700">
        {value || "-"}
      </p>

      {secondary && (
        <p className="mt-0.5 text-[8px] text-slate-400">
          {secondary}
        </p>
      )}
    </div>
  );
}