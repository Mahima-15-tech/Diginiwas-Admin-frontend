// // // import React, { useEffect, useMemo, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import * as XLSX from "xlsx";
// // // import {
// // //   CalendarDays,
// // //   CheckCircle2,
// // //   Clock3,
// // //   Download,
// // //   MapPin,
// // //   Search,
// // //   SlidersHorizontal,
// // //   XCircle,
// // //   ChevronLeft,
// // //   ChevronRight,
// // //   Building2,
// // //   Eye,
// // //   UserRound,
// // //   History,
// // //   Check,
// // //   X,
// // //   MoreVertical,
// // //   RefreshCw,
// // //   CalendarClock,
// // //   UserX,
// // //   RotateCcw,
// // //   MessageSquareMore,
// // //   LoaderCircle,
// // //   Phone,
// // //   Mail,
// // //   ExternalLink,
// // // } from "lucide-react";
// // // import Swal from "sweetalert2";
// // // import {
// // //   getVisitSummaryApi,
// // //   getAdminVisitsApi,
// // //   getVisitByIdApi,
// // //   reviewVisitRequestApi,
// // //   updateVisitStatusApi,
// // // } from "../../../Services/visitService";

// // // const TAB_VALUES = [
// // //   "Today",
// // //   "Upcoming",
// // //   "Completed",
// // //   "Cancelled",
// // //   "No Show",
// // //   "Rescheduled",
// // //   "Follow-up",
// // // ];

// // // const STATUS_OPTIONS = [
// // //   "All",
// // //   "Requested",
// // //   "Upcoming",
// // //   "Completed",
// // //   "Cancelled",
// // //   "No Show",
// // //   "Rescheduled",
// // //   "Follow-up",
// // // ];

// // // const getLocalUser = () => {
// // //   try {
// // //     return JSON.parse(localStorage.getItem("user") || "{}");
// // //   } catch {
// // //     return {};
// // //   }
// // // };

// // // const getActor = () => {
// // //   const user = getLocalUser();
// // //   return {
// // //     userId: user?.id || null,
// // //     name: user?.name || "Admin",
// // //     role: user?.role
// // //       ? `${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`
// // //       : "Admin",
// // //   };
// // // };

// // // const formatDate = (value) => {
// // //   if (!value) return "-";
// // //   return new Date(value).toLocaleDateString("en-IN", {
// // //     day: "2-digit",
// // //     month: "short",
// // //     year: "numeric",
// // //   });
// // // };

// // // const formatTime = (value) => {
// // //   if (!value) return "-";
// // //   return new Date(value).toLocaleTimeString("en-IN", {
// // //     hour: "2-digit",
// // //     minute: "2-digit",
// // //     hour12: true,
// // //   });
// // // };

// // // const StatusBadge = ({ status }) => {
// // //   const styles = {
// // //     Requested: "bg-[#fff8e8] text-[#b87818] border-[#f2dfb8]",
// // //     Upcoming: "bg-[#eaf5ff] text-[#3978a8] border-[#cfe4f4]",
// // //     Completed: "bg-[#e8f8f1] text-[#16825f] border-[#ccebdd]",
// // //     Cancelled: "bg-[#fff0f0] text-[#d24a4a] border-[#efd0d0]",
// // //     "No Show": "bg-[#fff5e8] text-[#bc7622] border-[#edd8b7]",
// // //     Rescheduled: "bg-[#f2efff] text-[#7458b1] border-[#dfd7f5]",
// // //     "Follow-up": "bg-[#eefbf7] text-[#117c68] border-[#cae9df]",
// // //   };
// // //   return (
// // //     <span
// // //       className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap ${styles[status] || "bg-gray-50 text-gray-500 border-gray-200"}`}
// // //     >
// // //       {status || "-"}
// // //     </span>
// // //   );
// // // };

// // // const ApprovalBadge = ({ status }) => {
// // //   const normalizedStatus = status || "Pending";

// // //   const styles = {
// // //     Pending: "bg-[#fff8e8] text-[#b87818] border-[#f2dfb8]",

// // //     Approved: "bg-[#e8f8f1] text-[#16825f] border-[#ccebdd]",

// // //     Rejected: "bg-[#fff0f0] text-[#d24a4a] border-[#efd0d0]",
// // //   };

// // //   const labels = {
// // //     Pending: "Pending",
// // //     Approved: "Approved",
// // //     Rejected: "Rejected",
// // //   };

// // //   return (
// // //     <span
// // //       className={`
// // //         inline-flex
// // //         items-center
// // //         gap-1
// // //         rounded-full
// // //         border
// // //         px-2.5
// // //         py-1
// // //         text-[11px]
// // //         font-semibold
// // //         whitespace-nowrap
// // //         ${styles[normalizedStatus] || styles.Pending}
// // //       `}
// // //     >
// // //       {normalizedStatus === "Approved" && <Check size={9} />}

// // //       {normalizedStatus === "Rejected" && <X size={9} />}

// // //       {normalizedStatus === "Pending" && <Clock3 size={9} />}

// // //       {labels[normalizedStatus] || normalizedStatus}
// // //     </span>
// // //   );
// // // };
// // // const StatCard = ({
// // //   title,
// // //   value,
// // //   subtitle,
// // //   icon: Icon,
// // //   type = "default",
// // //   onClick,
// // // }) => {
// // //   const styles = {
// // //     default: {
// // //       border: "border-[#dce8e5]",
// // //       iconBg: "bg-[#ecf8f4]",
// // //       icon: "text-[#139278]",
// // //       value: "text-[#183d47]",
// // //     },
// // //     blue: {
// // //       border: "border-[#dce8ef]",
// // //       iconBg: "bg-[#eef5ff]",
// // //       icon: "text-[#4a84c1]",
// // //       value: "text-[#294d5a]",
// // //     },
// // //     amber: {
// // //       border: "border-[#eedfbd]",
// // //       iconBg: "bg-[#fff3d7]",
// // //       icon: "text-[#c78c2d]",
// // //       value: "text-[#795c25]",
// // //     },
// // //   };
// // //   const current = styles[type] || styles.default;
// // //   return (
// // //     <button
// // //       onClick={onClick}
// // //       className={`w-full rounded-[9px] border ${current.border} bg-white px-4 py-3 text-left transition hover:-translate-y-[1px] hover:shadow-sm`}
// // //     >
// // //       <div className="flex items-start justify-between">
// // //         <div>
// // //           <p className="text-[8px] font-semibold uppercase tracking-[0.3px] text-[#7f9094]">
// // //             {title}
// // //           </p>
// // //           <p
// // //             className={`mt-2 text-[24px] font-semibold leading-none ${current.value}`}
// // //           >
// // //             {value}
// // //           </p>
// // //           {subtitle && (
// // //             <p className="mt-1.5 text-[11px] text-[#96a2a5]">{subtitle}</p>
// // //           )}
// // //         </div>
// // //         <div
// // //           className={`flex h-8 w-8 items-center justify-center rounded-[7px] ${current.iconBg}`}
// // //         >
// // //           <Icon size={14} className={current.icon} />
// // //         </div>
// // //       </div>
// // //     </button>
// // //   );
// // // };

// // // const MiniMetric = ({ label, value, danger, onClick }) => (
// // //   <button
// // //     onClick={onClick}
// // //     className="rounded-[7px] border border-[#e2ebe9] bg-white px-3 py-2 text-left transition hover:bg-[#fbfdfc]"
// // //   >
// // //     <p className="text-[7px] uppercase tracking-[0.2px] text-[#8c9a9d]">
// // //       {label}
// // //     </p>
// // //     <p
// // //       className={`mt-1 text-[14px] font-semibold ${danger ? "text-[#d45353]" : "text-[#34525a]"}`}
// // //     >
// // //       {value}
// // //     </p>
// // //   </button>
// // // );

// // // const SelectFilter = ({ value, onChange, options, label }) => (
// // //   <select
// // //     value={value}
// // //     onChange={(e) => onChange(e.target.value)}
// // //     className="h-9 min-w-[125px] rounded-[6px] border border-[#dce6e4] bg-white px-3 text-[12px] text-[#63767b] outline-none focus:border-[#7ab9ac]"
// // //   >
// // //     {options.map((item) => (
// // //       <option key={item} value={item}>
// // //         {item === "All" ? label : item}
// // //       </option>
// // //     ))}
// // //   </select>
// // // );

// // // export default function VisitManagement() {
// // //   const navigate = useNavigate();
// // //   const [visits, setVisits] = useState([]);
// // //   const [summary, setSummary] = useState({
// // //     today: 0,
// // //     upcoming: 0,
// // //     completed: 0,
// // //     cancelled: 0,
// // //     noShow: 0,
// // //     rescheduled: 0,
// // //     followUp: 0,
// // //     pendingApproval: 0,
// // //     locations: [],
// // //   });
// // //   const [activeTab, setActiveTab] = useState("Today");
// // //   const [search, setSearch] = useState("");
// // //   const [statusFilter, setStatusFilter] = useState("All");
// // //   const [approvalFilter, setApprovalFilter] = useState("All");
// // //   const [locationFilter, setLocationFilter] = useState("All");
// // //   const [selectedRows, setSelectedRows] = useState([]);
// // //   const [page, setPage] = useState(1);
// // //   const [totalPages, setTotalPages] = useState(1);
// // //   const [total, setTotal] = useState(0);
// // //   const [loading, setLoading] = useState(true);
// // //   const [selectedVisit, setSelectedVisit] = useState(null);
// // //   const [detailLoading, setDetailLoading] = useState(false);
// // //   const [actionMenu, setActionMenu] = useState(null);
// // //   const [actionLoading, setActionLoading] = useState("");
// // //   const itemsPerPage = 10;

// // //   // Close action menu when user clicks anywhere outside it or presses Escape
// // //   useEffect(() => {
// // //     const handleOutsideClick = (event) => {
// // //       if (!event.target.closest("[data-visit-action-menu]")) {
// // //         setActionMenu(null);
// // //       }
// // //     };

// // //     const handleEscape = (event) => {
// // //       if (event.key === "Escape") setActionMenu(null);
// // //     };

// // //     document.addEventListener("mousedown", handleOutsideClick);
// // //     document.addEventListener("keydown", handleEscape);

// // //     return () => {
// // //       document.removeEventListener("mousedown", handleOutsideClick);
// // //       document.removeEventListener("keydown", handleEscape);
// // //     };
// // //   }, []);

// // //   const fetchSummary = async () => {
// // //     try {
// // //       const response = await getVisitSummaryApi();
// // //       if (response?.success) setSummary(response.data || {});
// // //     } catch (error) {
// // //       console.error("Visit summary error:", error);
// // //     }
// // //   };

// // //   const fetchVisits = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const response = await getAdminVisitsApi({
// // //         tab: activeTab,
// // //         search: search.trim(),
// // //         status: statusFilter,
// // //         approvalStatus: approvalFilter,
// // //         location: locationFilter,
// // //         page,
// // //         limit: itemsPerPage,
// // //       });
// // //       if (response?.success) {
// // //         setVisits(response.data || []);
// // //         setTotal(response.total || 0);
// // //         setTotalPages(response.totalPages || 1);
// // //       } else {
// // //         setVisits([]);
// // //       }
// // //     } catch (error) {
// // //       setVisits([]);
// // //       Swal.fire({
// // //         icon: "error",
// // //         title: "Unable to load visits",
// // //         text: error?.response?.data?.message || "Failed to fetch visit data.",
// // //         confirmButtonColor: "#0ca77e",
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchSummary();
// // //   }, []);

// // //   useEffect(() => {
// // //     const timer = setTimeout(fetchVisits, 250);
// // //     return () => clearTimeout(timer);
// // //   }, [activeTab, search, statusFilter, approvalFilter, locationFilter, page]);

// // //   useEffect(() => {
// // //     setPage(1);
// // //   }, [activeTab, search, statusFilter, approvalFilter, locationFilter]);

// // //   const openVisitDetail = async (id) => {
// // //     try {
// // //       setDetailLoading(true);
// // //       setSelectedVisit(null);
// // //       const response = await getVisitByIdApi(id);
// // //       if (response?.success) setSelectedVisit(response.data);
// // //     } catch (error) {
// // //       Swal.fire({
// // //         icon: "error",
// // //         title: "Unable to load details",
// // //         text: error?.response?.data?.message || "Visit details not available.",
// // //         confirmButtonColor: "#0ca77e",
// // //       });
// // //     } finally {
// // //       setDetailLoading(false);
// // //       setActionMenu(null);
// // //     }
// // //   };

// // //   const refreshAll = async () => {
// // //     await Promise.all([fetchVisits(), fetchSummary()]);
// // //     if (selectedVisit?.visit?._id)
// // //       await openVisitDetail(selectedVisit.visit._id);
// // //   };

// // //   const reviewVisit = async (visit, action) => {
// // //     let remarks = "";
// // //     let approvedVisitAt;

// // //     if (action === "approve") {
// // //       const result = await Swal.fire({
// // //         title: "Approve Visit Request?",
// // //         html: `<div style="font-size:12px;color:#667085;line-height:1.6">Approve <strong>${visit.visitId}</strong> for <strong>${visit.propertySnapshot?.title || "property"}</strong>?</div>`,
// // //         input: "datetime-local",
// // //         inputValue: new Date(visit.requestedVisitAt).toISOString().slice(0, 16),
// // //         showCancelButton: true,
// // //         confirmButtonText: "Approve Visit",
// // //         confirmButtonColor: "#0ca77e",
// // //       });
// // //       if (!result.isConfirmed) return;
// // //       approvedVisitAt = result.value || visit.requestedVisitAt;
// // //     } else {
// // //       const result = await Swal.fire({
// // //         title: "Reject Visit Request?",
// // //         input: "textarea",
// // //         inputPlaceholder: "Reason for rejection...",
// // //         showCancelButton: true,
// // //         confirmButtonText: "Reject Request",
// // //         confirmButtonColor: "#d24a4a",
// // //         inputValidator: (value) =>
// // //           !value?.trim() ? "Please enter a reason." : undefined,
// // //       });
// // //       if (!result.isConfirmed) return;
// // //       remarks = result.value;
// // //     }

// // //     try {
// // //       setActionLoading(visit._id);
// // //       const response = await reviewVisitRequestApi(visit._id, {
// // //         action,
// // //         actor: getActor(),
// // //         remarks,
// // //         approvedVisitAt,
// // //       });
// // //       if (response?.success) {
// // //         await Swal.fire({
// // //           icon: "success",
// // //           title: action === "approve" ? "Visit Approved" : "Visit Rejected",
// // //           text: response.message,
// // //           confirmButtonColor: "#0ca77e",
// // //         });
// // //         await refreshAll();
// // //       }
// // //     } catch (error) {
// // //       Swal.fire({
// // //         icon: "error",
// // //         title: "Action failed",
// // //         text: error?.response?.data?.message || "Unable to update visit.",
// // //         confirmButtonColor: "#0ca77e",
// // //       });
// // //     } finally {
// // //       setActionLoading("");
// // //     }
// // //   };

// // //   const updateStatus = async (visit, newStatus) => {
// // //     let payload = { status: newStatus, actor: getActor(), remarks: "" };

// // //     if (newStatus === "Rescheduled") {
// // //       const result = await Swal.fire({
// // //         title: "Reschedule Visit",
// // //         input: "datetime-local",
// // //         showCancelButton: true,
// // //         confirmButtonText: "Reschedule",
// // //         confirmButtonColor: "#7458b1",
// // //         inputValidator: (value) =>
// // //           !value ? "Select a new date/time." : undefined,
// // //       });
// // //       if (!result.isConfirmed) return;
// // //       payload.nextVisitAt = result.value;
// // //       payload.remarks = "Visit rescheduled by admin";
// // //     } else if (newStatus === "Follow-up") {
// // //       const result = await Swal.fire({
// // //         title: "Schedule Follow-up",
// // //         input: "datetime-local",
// // //         showCancelButton: true,
// // //         confirmButtonText: "Set Follow-up",
// // //         confirmButtonColor: "#0ca77e",
// // //       });
// // //       if (!result.isConfirmed) return;
// // //       payload.followUpAt = result.value || null;
// // //       payload.outcome = "Need Follow-up";
// // //       payload.remarks = "Follow-up required";
// // //     } else if (newStatus === "Completed") {
// // //       const result = await Swal.fire({
// // //         title: "Complete Visit",
// // //         input: "select",
// // //         inputOptions: {
// // //           Completed: "Completed",
// // //           Positive: "Positive",
// // //           "Strong Interest": "Strong Interest",
// // //           "Not Interested": "Not Interested",
// // //           "Need Follow-up": "Need Follow-up",
// // //         },
// // //         showCancelButton: true,
// // //         confirmButtonText: "Mark Completed",
// // //         confirmButtonColor: "#0ca77e",
// // //       });
// // //       if (!result.isConfirmed) return;
// // //       payload.outcome = result.value || "Completed";
// // //       payload.remarks = `Visit completed: ${payload.outcome}`;
// // //     } else {
// // //       const result = await Swal.fire({
// // //         title: `Mark as ${newStatus}?`,
// // //         input: "textarea",
// // //         inputPlaceholder: "Optional remarks...",
// // //         showCancelButton: true,
// // //         confirmButtonText: `Mark ${newStatus}`,
// // //         confirmButtonColor:
// // //           newStatus === "Cancelled" || newStatus === "No Show"
// // //             ? "#d24a4a"
// // //             : "#0ca77e",
// // //       });
// // //       if (!result.isConfirmed) return;
// // //       payload.remarks = result.value || "";
// // //     }

// // //     try {
// // //       setActionLoading(visit._id);
// // //       const response = await updateVisitStatusApi(visit._id, payload);
// // //       if (response?.success) {
// // //         await Swal.fire({
// // //           icon: "success",
// // //           title: "Visit Updated",
// // //           text: response.message,
// // //           confirmButtonColor: "#0ca77e",
// // //         });
// // //         await refreshAll();
// // //       }
// // //     } catch (error) {
// // //       Swal.fire({
// // //         icon: "error",
// // //         title: "Update failed",
// // //         text:
// // //           error?.response?.data?.message || "Unable to update visit status.",
// // //         confirmButtonColor: "#0ca77e",
// // //       });
// // //     } finally {
// // //       setActionLoading("");
// // //       setActionMenu(null);
// // //     }
// // //   };

// // //   const toggleRow = (id) =>
// // //     setSelectedRows((prev) =>
// // //       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
// // //     );
// // //   const toggleAll = () => {
// // //     const ids = visits.map((v) => v._id);
// // //     const all = ids.length > 0 && ids.every((id) => selectedRows.includes(id));
// // //     setSelectedRows((prev) =>
// // //       all
// // //         ? prev.filter((id) => !ids.includes(id))
// // //         : [...new Set([...prev, ...ids])],
// // //     );
// // //   };

// // //   const exportReport = async () => {
// // //     try {
// // //       // Export the complete result for the CURRENT filters, not only the visible page.
// // //       const response = await getAdminVisitsApi({
// // //         tab: activeTab,
// // //         search: search.trim(),
// // //         status: statusFilter,
// // //         approvalStatus: approvalFilter,
// // //         location: locationFilter,
// // //         page: 1,
// // //         limit: 5000,
// // //       });

// // //       const exportVisits = response?.success ? response.data || [] : [];

// // //       if (!exportVisits.length) {
// // //         await Swal.fire({
// // //           icon: "info",
// // //           title: "No Data to Export",
// // //           text: "No visit records match the selected filters.",
// // //           confirmButtonColor: "#0ca77e",
// // //         });
// // //         return;
// // //       }

// // //       const rows = exportVisits.map((v) => ({
// // //         "Visit ID": v.visitId || "",
// // //         "Property Name": v.propertySnapshot?.title || "",
// // //         "Property ID": v.propertySnapshot?.propertyCode || "",
// // //         "Partner Name": v.partnerSnapshot?.name || "",
// // //         "Partner ID": v.partnerSnapshot?.partnerCode || "",
// // //         "Partner Type": v.partnerSnapshot?.partnerType || "",
// // //         Date: formatDate(v.requestedVisitAt),
// // //         Time: formatTime(v.requestedVisitAt),
// // //         City: v.propertySnapshot?.city || "",
// // //         Locality: v.propertySnapshot?.locality || "",
// // //         Approval: v.approvalStatus || "",
// // //         Status: v.status || "",
// // //         Outcome: v.outcome || "Pending",
// // //         "Request Notes": v.requestNotes || "",
// // //         "Admin Remarks": v.adminRemarks || "",
// // //       }));

// // //       const worksheet = XLSX.utils.json_to_sheet(rows);
// // //       worksheet["!cols"] = [
// // //         { wch: 14 },
// // //         { wch: 28 },
// // //         { wch: 15 },
// // //         { wch: 24 },
// // //         { wch: 15 },
// // //         { wch: 14 },
// // //         { wch: 14 },
// // //         { wch: 12 },
// // //         { wch: 18 },
// // //         { wch: 22 },
// // //         { wch: 15 },
// // //         { wch: 16 },
// // //         { wch: 22 },
// // //         { wch: 30 },
// // //         { wch: 30 },
// // //       ];

// // //       const workbook = XLSX.utils.book_new();
// // //       XLSX.utils.book_append_sheet(workbook, worksheet, "Visits");

// // //       const safeTab = activeTab.replace(/[^a-z0-9]/gi, "-").toLowerCase();
// // //       XLSX.writeFile(
// // //         workbook,
// // //         `visit-management-${safeTab}-${new Date().toISOString().slice(0, 10)}.xlsx`,
// // //       );
// // //     } catch (error) {
// // //       console.error("Excel export error:", error);
// // //       await Swal.fire({
// // //         icon: "error",
// // //         title: "Export Failed",
// // //         text:
// // //           error?.response?.data?.message || "Unable to export Excel report.",
// // //         confirmButtonColor: "#0ca77e",
// // //       });
// // //     }
// // //   };

// // //   const locations = ["All", ...(summary.locations || [])];

// // //   return (
// // //     <div className="min-h-screen overflow-x-hidden  px-4 py-4 sm:px-5 lg:px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// // //       <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
// // //         <div>
// // //           <h1 className="text-[20px] font-semibold tracking-[-0.3px] text-[#123942]">
// // //             Visit Management
// // //           </h1>
// // //           <p className="mt-1 text-[12px] text-[#849497]">
// // //             Approve partner visit requests and manage scheduled visits,
// // //             attendance, outcomes, reschedules and follow-ups.
// // //           </p>
// // //         </div>
// // //         <div className="flex items-center gap-2">
// // //           <button
// // //             onClick={refreshAll}
// // //             className="flex h-9 items-center gap-1.5 rounded-[6px] border border-[#bdd8d2] bg-white px-3 text-[12px] font-medium text-[#267d6d] hover:bg-[#f6fbfa]"
// // //           >
// // //             <RefreshCw size={11} /> Refresh
// // //           </button>
// // //           <button
// // //             onClick={exportReport}
// // //             className="flex h-9 items-center gap-1.5 rounded-[6px] bg-[#0ca77e] px-3 text-[12px] font-semibold text-white hover:bg-[#078f6d]"
// // //           >
// // //             <Download size={11} /> Export Report
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="mt-4 grid gap-2 xl:grid-cols-[1fr_1fr_1fr_2fr]">
// // //         <StatCard
// // //           title="Today's Visits"
// // //           value={summary.today || 0}
// // //           subtitle={`${summary.pendingApproval || 0} pending approvals`}
// // //           icon={CalendarDays}
// // //           onClick={() => setActiveTab("Today")}
// // //         />
// // //         <StatCard
// // //           title="Upcoming"
// // //           value={summary.upcoming || 0}
// // //           subtitle="Approved / requested future visits"
// // //           icon={Clock3}
// // //           type="blue"
// // //           onClick={() => setActiveTab("Upcoming")}
// // //         />
// // //         <StatCard
// // //           title="Completed"
// // //           value={summary.completed || 0}
// // //           subtitle="All completed visits"
// // //           icon={CheckCircle2}
// // //           onClick={() => setActiveTab("Completed")}
// // //         />
// // //         <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
// // //           <MiniMetric
// // //             label="Cancelled"
// // //             value={summary.cancelled || 0}
// // //             danger
// // //             onClick={() => setActiveTab("Cancelled")}
// // //           />
// // //           <MiniMetric
// // //             label="No Show"
// // //             value={summary.noShow || 0}
// // //             danger
// // //             onClick={() => setActiveTab("No Show")}
// // //           />
// // //           <MiniMetric
// // //             label="Rescheduled"
// // //             value={summary.rescheduled || 0}
// // //             onClick={() => setActiveTab("Rescheduled")}
// // //           />
// // //           <MiniMetric
// // //             label="Follow-up"
// // //             value={summary.followUp || 0}
// // //             onClick={() => setActiveTab("Follow-up")}
// // //           />
// // //         </div>
// // //       </div>

// // //       <div className="mt-4 flex items-center justify-between gap-3 border-b border-[#dde7e5]">
// // //         <div className="flex min-w-0 gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// // //           {TAB_VALUES.map((tab) => (
// // //             <button
// // //               key={tab}
// // //               onClick={() => {
// // //                 setActiveTab(tab);
// // //                 setPage(1);
// // //               }}
// // //               className={`relative min-w-max pb-2.5 text-[12px] font-medium ${activeTab === tab ? "text-[#107866]" : "text-[#8b999c]"}`}
// // //             >
// // //               {tab}
// // //               {activeTab === tab && (
// // //                 <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#087f6c]" />
// // //               )}
// // //             </button>
// // //           ))}
// // //         </div>
// // //         <div className="mb-2 flex items-center gap-1.5 rounded-[4px] border border-[#dce5e3] bg-white px-2.5 py-1.5 text-[11px] text-[#667a7e]">
// // //           <SlidersHorizontal size={9} /> Filters
// // //         </div>
// // //       </div>

// // //       <div className="mt-3 flex flex-col gap-2 lg:flex-row">
// // //         <div className="relative flex-1">
// // //           <Search
// // //             size={12}
// // //             className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8d9b9e]"
// // //           />
// // //           <input
// // //             value={search}
// // //             onChange={(e) => setSearch(e.target.value)}
// // //             placeholder="Search visit ID, property, partner, location..."
// // //             className="h-9 w-full rounded-[6px] border border-[#dce6e4] bg-white pl-8 pr-3 text-[12px] text-[#42595f] outline-none placeholder:text-[#a1adaf] focus:border-[#78b8ab]"
// // //           />
// // //         </div>
// // //         <SelectFilter
// // //           value={statusFilter}
// // //           onChange={setStatusFilter}
// // //           options={STATUS_OPTIONS}
// // //           label="All Statuses"
// // //         />
// // //         <SelectFilter
// // //           value={approvalFilter}
// // //           onChange={setApprovalFilter}
// // //           options={["All", "Pending", "Approved", "Rejected"]}
// // //           label="All Approvals"
// // //         />
// // //         <SelectFilter
// // //           value={locationFilter}
// // //           onChange={setLocationFilter}
// // //           options={locations}
// // //           label="All Locations"
// // //         />
// // //       </div>

// // //       <div className="mt-3 overflow-visible rounded-[8px] border border-[#dce7e4] bg-white">
// // //         <div className="w-full overflow-visible">
// // //           <table className="w-full table-fixed">
// // //             <colgroup>
// // //               <col style={{ width: "3%" }} />
// // //               <col style={{ width: "8%" }} />
// // //               <col style={{ width: "17%" }} />
// // //               <col style={{ width: "14%" }} />
// // //               <col style={{ width: "10%" }} />
// // //               <col style={{ width: "10%" }} />
// // //               <col style={{ width: "11%" }} />
// // //               <col style={{ width: "8%" }} />
// // //               <col style={{ width: "8%" }} />
// // //               <col style={{ width: "11%" }} />
// // //             </colgroup>
// // //             <thead>
// // //               <tr className="bg-[#073c5c] text-white">
// // //                 <th className="w-8 px-3 py-3 text-left">
// // //                   <input
// // //                     type="checkbox"
// // //                     onChange={toggleAll}
// // //                     checked={
// // //                       visits.length > 0 &&
// // //                       visits.every((v) => selectedRows.includes(v._id))
// // //                     }
// // //                   />
// // //                 </th>
// // //                 {[
// // //                   "Visit ID",
// // //                   "Property",
// // //                   "Partner",
// // //                   "Date / Time",
// // //                   "Location",
// // //                   "Approval",
// // //                   "Status",
// // //                   "Outcome",
// // //                   "Actions",
// // //                 ].map((h) => (
// // //                   <th
// // //                     key={h}
// // //                     className="px-2 py-3 text-left text-[12px] font-medium"
// // //                   >
// // //                     {h}
// // //                   </th>
// // //                 ))}
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {loading ? (
// // //                 <tr>
// // //                   <td colSpan={10} className="py-16">
// // //                     <div className="flex items-center justify-center gap-2 text-[12px] text-[#6d7f82]">
// // //                       <LoaderCircle
// // //                         size={17}
// // //                         className="animate-spin text-[#0ca77e]"
// // //                       />{" "}
// // //                       Loading visits...
// // //                     </div>
// // //                   </td>
// // //                 </tr>
// // //               ) : visits.length ? (
// // //                 visits.map((visit) => (
// // //                   <tr
// // //                     key={visit._id}
// // //                     className="border-b border-[#edf2f1] transition last:border-b-0 hover:bg-[#f9fcfb]"
// // //                   >
// // //                     <td className="px-3 py-3">
// // //                       <input
// // //                         type="checkbox"
// // //                         checked={selectedRows.includes(visit._id)}
// // //                         onChange={() => toggleRow(visit._id)}
// // //                       />
// // //                     </td>
// // //                     <td className="px-2 py-3">
// // //                       <p className="text-[12px] font-bold text-[#0a7a67]">
// // //                         {visit.visitId}
// // //                       </p>
// // //                       <p className="mt-1 text-[10px] text-[#98a5a8]">
// // //                         {visit.approvalStatus === "Pending"
// // //                           ? "Needs review"
// // //                           : "Visit record"}
// // //                       </p>
// // //                     </td>

// // //                     <td className="px-2 py-3">
// // //                       <div className="flex w-full items-start ">
// // //                         <div className="min-w-0">
// // //                           {/* PROPERTY NAME */}

// // //                           <p
// // //                             className="
// // //           line-clamp-2
// // //           break-words
// // //           text-[13px]
// // //           font-bold
// // //           text-[#3b555b]
// // //         "
// // //                           >
// // //                             {visit.propertySnapshot?.title || "-"}
// // //                           </p>

// // //                           {/* PROPERTY ID */}

// // //                           <p
// // //                             className="
// // //           mt-1
// // //           text-[11px]
// // //           font-bold
// // //           text-[#0a8d74]
// // //         "
// // //                           >
// // //                             {visit.propertySnapshot?.propertyCode || "-"}
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-2 py-3">
// // //                       <div className="w-full">
// // //                         <p className="line-clamp-2 break-words text-[13px] font-bold text-[#40585f]">
// // //                           {visit.partnerSnapshot?.name || "-"}
// // //                         </p>
// // //                         <p className="mt-1 text-[11px] font-bold text-[#0a8d74]">
// // //                           {visit.partnerSnapshot?.partnerCode || "-"}
// // //                         </p>
// // //                         <p className="mt-1 text-[10px] font-medium capitalize text-[#98a5a8]">
// // //                           {visit.partnerSnapshot?.partnerType || "-"}
// // //                         </p>
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-2 py-3">
// // //                       <p className="text-[12px] font-semibold text-[#465f64]">
// // //                         {formatDate(visit.requestedVisitAt)}
// // //                       </p>
// // //                       <p className="mt-1 text-[11px] text-[#98a5a8]">
// // //                         {formatTime(visit.requestedVisitAt)}
// // //                       </p>
// // //                     </td>
// // //                     <td className="px-2 py-3">
// // //                       <div className="flex w-full items-start gap-1">
// // //                         <MapPin size={9} className="mt-[1px] text-[#6c8984]" />
// // //                         <div>
// // //                           <p className="text-[12px] font-semibold text-[#4e676c]">
// // //                             {visit.propertySnapshot?.city || "-"}
// // //                           </p>
// // //                           <p className="mt-1 text-[11px] text-[#98a5a8]">
// // //                             {visit.propertySnapshot?.locality || "-"}
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-2 py-3">
// // //                       <ApprovalBadge status={visit.approvalStatus} />
// // //                     </td>
// // //                     <td className="px-2 py-3">
// // //                       <StatusBadge status={visit.status} />
// // //                     </td>
// // //                     <td className="px-2 py-3">
// // //                       <p className="break-words text-[12px] text-[#687b7f]">
// // //                         {visit.outcome || "Pending"}
// // //                       </p>
// // //                     </td>
// // //                     <td
// // //                       className="relative px-2 py-3"
// // //                       data-visit-action-menu
// // //                       onClick={(e) => e.stopPropagation()}
// // //                     >
// // //                       <div className="flex items-center gap-1">
// // //                         <button
// // //                           onClick={() => openVisitDetail(visit._id)}
// // //                           className="flex h-8 items-center gap-1.5 rounded-[6px] border border-[#cfe2de] bg-white px-2.5 text-[11px] font-semibold text-[#167c69] hover:bg-[#f1faf7]"
// // //                         >
// // //                           <Eye size={12} /> View
// // //                         </button>
// // //                         {visit.approvalStatus === "Pending" && (
// // //                           <>
// // //                             <button
// // //                               disabled={actionLoading === visit._id}
// // //                               onClick={() => reviewVisit(visit, "approve")}
// // //                               className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#e7f8f2] text-[#138266]"
// // //                               title="Approve"
// // //                             >
// // //                               <Check size={11} />
// // //                             </button>
// // //                             <button
// // //                               disabled={actionLoading === visit._id}
// // //                               onClick={() => reviewVisit(visit, "reject")}
// // //                               className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#fff0f0] text-[#cf4e4e]"
// // //                               title="Reject"
// // //                             >
// // //                               <X size={11} />
// // //                             </button>
// // //                           </>
// // //                         )}
// // //                         <button
// // //                           onClick={() =>
// // //                             setActionMenu(
// // //                               actionMenu === visit._id ? null : visit._id,
// // //                             )
// // //                           }
// // //                           className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#dce5e3] text-[#60777b] hover:bg-[#f5f8f7]"
// // //                         >
// // //                           <MoreVertical size={15} />
// // //                         </button>
// // //                       </div>
// // //                       {actionMenu === visit._id && (
// // //                         <div className="absolute right-2 top-11 z-[150] w-[190px] overflow-hidden rounded-[10px] border border-[#dfe7e5] bg-white py-1.5 shadow-[0_14px_35px_rgba(15,23,42,0.18)]">
// // //                           {[
// // //                             { label: "Completed", icon: CheckCircle2 },
// // //                             { label: "Cancelled", icon: XCircle },
// // //                             { label: "No Show", icon: UserX },
// // //                             { label: "Rescheduled", icon: RotateCcw },
// // //                             { label: "Follow-up", icon: MessageSquareMore },
// // //                           ].map(({ label, icon: Icon }) => (
// // //                             <button
// // //                               key={label}
// // //                               onClick={() => updateStatus(visit, label)}
// // //                               className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[12px] font-medium text-[#52686e] hover:bg-[#f5faf8]"
// // //                             >
// // //                               <Icon size={11} />
// // //                               {label}
// // //                             </button>
// // //                           ))}
// // //                         </div>
// // //                       )}
// // //                     </td>
// // //                   </tr>
// // //                 ))
// // //               ) : (
// // //                 <tr>
// // //                   <td colSpan={10} className="py-14 text-center">
// // //                     <Search size={20} className="mx-auto text-[#a1aeac]" />
// // //                     <p className="mt-2 text-[12px] font-medium text-[#50676c]">
// // //                       No visits found
// // //                     </p>
// // //                   </td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         <div className="flex flex-col gap-2 border-t border-[#e8efed] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
// // //           <p className="text-[8px] text-[#8f9c9f]">
// // //             Showing {total === 0 ? 0 : (page - 1) * itemsPerPage + 1} to{" "}
// // //             {Math.min(page * itemsPerPage, total)} of {total} entries
// // //           </p>
// // //           <div className="flex items-center gap-1">
// // //             <button
// // //               disabled={page === 1}
// // //               onClick={() => setPage((p) => Math.max(1, p - 1))}
// // //               className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#dce5e3] bg-white text-[#63777b] disabled:opacity-40"
// // //             >
// // //               <ChevronLeft size={11} />
// // //             </button>
// // //             <button className="flex h-7 min-w-7 items-center justify-center rounded-[4px] bg-[#073c5c] px-2 text-[12px] text-white">
// // //               {page}
// // //             </button>
// // //             <button
// // //               disabled={page >= totalPages}
// // //               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// // //               className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#dce5e3] bg-white text-[#63777b] disabled:opacity-40"
// // //             >
// // //               <ChevronRight size={11} />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {(selectedVisit || detailLoading) && (
// // //         <VisitDetailDrawer
// // //           data={selectedVisit}
// // //           loading={detailLoading}
// // //           onClose={() => setSelectedVisit(null)}
// // //           onRefresh={refreshAll}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // function VisitDetailDrawer({ data, loading, onClose }) {
// // //   const navigate = useNavigate();
// // //   const visit = data?.visit;
// // //   const property = data?.property;
// // //   const partner = data?.partner;
// // //   const history = data?.visitHistory || [];

// // //   const propertyMongoId =
// // //     property?._id || visit?.propertyId?._id || visit?.propertyId || null;

// // //   const partnerMongoId =
// // //     partner?._id || visit?.partnerId?._id || visit?.partnerId || null;

// // //   return (
// // //     <div className="fixed inset-0 z-[999]">
// // //       <div
// // //         onClick={onClose}
// // //         className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"
// // //       />
// // //       <div className="absolute bottom-0 right-0 top-0 w-full max-w-[580px] overflow-y-auto bg-[#f6faf9] shadow-[-12px_0_35px_rgba(15,23,42,0.13)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// // //         <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#e3ebe9] bg-white px-5 py-4">
// // //           <div>
// // //             <h2 className="text-[18px] font-semibold text-[#173b45]">
// // //               Visit Details
// // //             </h2>
// // //             <p className="mt-1 text-[12px] text-[#8a9a9d]">
// // //               Property, assigned partner and visit history
// // //             </p>
// // //           </div>
// // //           <button
// // //             onClick={onClose}
// // //             className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f6f5] text-[#63777b]"
// // //           >
// // //             <X size={15} />
// // //           </button>
// // //         </div>
// // //         {loading ? (
// // //           <div className="flex h-[400px] items-center justify-center">
// // //             <LoaderCircle size={26} className="animate-spin text-[#0ca77e]" />
// // //           </div>
// // //         ) : visit ? (
// // //           <div className="space-y-4 p-5">
// // //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// // //               <div className="flex items-start justify-between gap-3">
// // //                 <div>
// // //                   <p className="text-[11px] font-bold text-[#0b8a72]">
// // //                     {visit.visitId}
// // //                   </p>
// // //                   <h3 className="mt-1 text-[18px] font-semibold text-[#173c46]">
// // //                     {visit.propertySnapshot?.title || property?.title}
// // //                   </h3>
// // //                   <p className="mt-1 text-[12px] text-[#819194]">
// // //                     {formatDate(visit.requestedVisitAt)} •{" "}
// // //                     {formatTime(visit.requestedVisitAt)}
// // //                   </p>
// // //                 </div>
// // //                 <div className="flex flex-col items-end gap-2">
// // //                   <StatusBadge status={visit.status} />
// // //                   <ApprovalBadge status={visit.approvalStatus} />
// // //                 </div>
// // //               </div>
// // //               <div className="mt-4 grid grid-cols-2 gap-2">
// // //                 <DetailBox label="Outcome" value={visit.outcome} />
// // //                 <DetailBox
// // //                   label="Location"
// // //                   value={`${visit.propertySnapshot?.locality || ""}, ${visit.propertySnapshot?.city || ""}`}
// // //                 />
// // //                 <DetailBox
// // //                   label="Request Notes"
// // //                   value={visit.requestNotes || "-"}
// // //                 />
// // //                 <DetailBox
// // //                   label="Admin Remarks"
// // //                   value={visit.adminRemarks || "-"}
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// // //               <SectionTitle icon={Building2} title="View Property" />
// // //               <div className="flex gap-3">
// // //                 {property?.images?.[0]?.url ? (
// // //                   <img
// // //                     src={property.images[0].url}
// // //                     alt=""
// // //                     className="h-20 w-24 rounded-lg object-cover"
// // //                   />
// // //                 ) : (
// // //                   <div className="flex h-20 w-24 items-center justify-center rounded-lg bg-[#eef7f4] text-[#138b75]">
// // //                     <Building2 size={24} />
// // //                   </div>
// // //                 )}
// // //                 <div className="min-w-0 flex-1">
// // //                   <p className="text-[13px] font-semibold text-[#31515a]">
// // //                     {property?.title || visit.propertySnapshot?.title}
// // //                   </p>
// // //                   <p className="mt-1 text-[12px] font-semibold text-[#0b8a72]">
// // //                     {property?.propertyId ||
// // //                       visit.propertySnapshot?.propertyCode}
// // //                   </p>
// // //                   <p className="mt-2 text-[12px] text-[#7d8e92]">
// // //                     {property?.category || "-"} •{" "}
// // //                     {property?.propertySize || "-"} {property?.sizeUnit || ""}
// // //                   </p>
// // //                   <p className="mt-1 text-[12px] text-[#7d8e92]">
// // //                     {property?.address ||
// // //                       visit.propertySnapshot?.address ||
// // //                       "-"}
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               <button
// // //                 type="button"
// // //                 disabled={!propertyMongoId}
// // //                 onClick={() =>
// // //                   propertyMongoId && navigate(`/properties/${propertyMongoId}`)
// // //                 }
// // //                 className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#073c5c] px-4 text-[12px] font-semibold text-white transition hover:bg-[#052f49] disabled:cursor-not-allowed disabled:opacity-40"
// // //               >
// // //                 <ExternalLink size={14} />
// // //                 View Property
// // //               </button>
// // //             </div>

// // //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// // //               <SectionTitle icon={UserRound} title="View Partner" />
// // //               <div className="flex items-center gap-3">
// // //                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf8f4] text-[13px] font-bold text-[#138b75]">
// // //                   {getInitials(partner?.name || visit.partnerSnapshot?.name)}
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-[13px] font-semibold text-[#31515a]">
// // //                     {partner?.name || visit.partnerSnapshot?.name}
// // //                   </p>
// // //                   <p className="mt-1 text-[12px] font-semibold text-[#0b8a72]">
// // //                     {partner?.partnerId || visit.partnerSnapshot?.partnerCode}
// // //                   </p>
// // //                   <p className="mt-1 text-[12px] capitalize text-[#8a989c]">
// // //                     {partner?.partnerType || visit.partnerSnapshot?.partnerType}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-3 grid grid-cols-2 gap-2">
// // //                 <DetailBox
// // //                   icon={Phone}
// // //                   label="Phone"
// // //                   value={partner?.phone || visit.partnerSnapshot?.phone}
// // //                 />
// // //                 <DetailBox
// // //                   icon={Mail}
// // //                   label="Email"
// // //                   value={partner?.email || visit.partnerSnapshot?.email}
// // //                 />
// // //                 <DetailBox
// // //                   icon={MapPin}
// // //                   label="City"
// // //                   value={partner?.location?.city || "-"}
// // //                 />
// // //                 <DetailBox
// // //                   label="Verified"
// // //                   value={partner?.isVerified ? "Yes" : "No"}
// // //                 />
// // //               </div>

// // //               <button
// // //                 type="button"
// // //                 disabled={!partnerMongoId}
// // //                 onClick={() =>
// // //                   partnerMongoId && navigate(`/partners/${partnerMongoId}`)
// // //                 }
// // //                 className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#0ca77e] px-4 text-[12px] font-semibold text-white transition hover:bg-[#078f6d] disabled:cursor-not-allowed disabled:opacity-40"
// // //               >
// // //                 <ExternalLink size={14} />
// // //                 View Partner
// // //               </button>
// // //             </div>

// // //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// // //               <SectionTitle icon={History} title="Visit History" />
// // //               <div className="space-y-2">
// // //                 {history.length ? (
// // //                   history.map((item) => (
// // //                     <div
// // //                       key={item._id}
// // //                       className="rounded-lg border border-[#e8efed] bg-[#fbfdfc] p-3"
// // //                     >
// // //                       <div className="flex items-start justify-between gap-2">
// // //                         <div>
// // //                           <p className="text-[9px] font-semibold text-[#31515a]">
// // //                             {item.visitId}
// // //                           </p>
// // //                           <p className="mt-1 text-[11px] text-[#8b999c]">
// // //                             {formatDate(item.requestedVisitAt)} •{" "}
// // //                             {formatTime(item.requestedVisitAt)}
// // //                           </p>
// // //                         </div>
// // //                         <StatusBadge status={item.status} />
// // //                       </div>
// // //                       <p className="mt-2 text-[12px] text-[#63777b]">
// // //                         Outcome: {item.outcome || "Pending"}
// // //                       </p>
// // //                       {item.adminRemarks && (
// // //                         <p className="mt-1 text-[12px] text-[#8a999c]">
// // //                           {item.adminRemarks}
// // //                         </p>
// // //                       )}
// // //                     </div>
// // //                   ))
// // //                 ) : (
// // //                   <p className="py-6 text-center text-[12px] text-[#95a3a6]">
// // //                     No previous visit history.
// // //                   </p>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// // //               <SectionTitle icon={CalendarClock} title="Audit Timeline" />
// // //               <div className="space-y-3">
// // //                 {(visit.history || [])
// // //                   .slice()
// // //                   .reverse()
// // //                   .map((item) => (
// // //                     <div key={item._id} className="flex gap-3">
// // //                       <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0ca77e]" />
// // //                       <div>
// // //                         <p className="text-[9px] font-semibold text-[#40585f]">
// // //                           {item.action}
// // //                         </p>
// // //                         <p className="mt-1 text-[11px] text-[#8b999c]">
// // //                           {formatDate(item.updatedAt)} •{" "}
// // //                           {formatTime(item.updatedAt)} •{" "}
// // //                           {item.updatedBy?.name || "-"}
// // //                         </p>
// // //                         {item.remarks && (
// // //                           <p className="mt-1 text-[12px] text-[#63777b]">
// // //                             {item.remarks}
// // //                           </p>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           <div className="flex h-[400px] items-center justify-center text-[12px] text-[#8a999c]">
// // //             Visit detail not available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function SectionTitle({ icon: Icon, title }) {
// // //   return (
// // //     <div className="mb-3 flex items-center gap-2">
// // //       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eaf8f4] text-[#138b75]">
// // //         <Icon size={13} />
// // //       </div>
// // //       <h4 className="text-[12px] font-semibold text-[#31515a]">{title}</h4>
// // //       <div className="h-px flex-1 bg-[#edf2f1]" />
// // //     </div>
// // //   );
// // // }

// // // function DetailBox({ icon: Icon, label, value }) {
// // //   return (
// // //     <div className="rounded-lg border border-[#edf1f0] bg-[#fbfdfc] p-3">
// // //       <div className="flex gap-2">
// // //         {Icon && <Icon size={12} className="mt-0.5 text-[#159078]" />}
// // //         <div className="min-w-0">
// // //           <p className="text-[9px] uppercase tracking-wide text-[#98a5a8]">
// // //             {label}
// // //           </p>
// // //           <p className="mt-1 break-words text-[12px] font-medium text-[#52686e]">
// // //             {value || "-"}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function getInitials(name = "") {
// // //   return (
// // //     String(name)
// // //       .trim()
// // //       .split(" ")
// // //       .filter(Boolean)
// // //       .map((x) => x[0]?.toUpperCase())
// // //       .join("")
// // //       .slice(0, 2) || "P"
// // //   );
// // // }
// // import React, { useEffect, useMemo, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import * as XLSX from "xlsx";
// // import {
// //   CalendarDays,
// //   CheckCircle2,
// //   Clock3,
// //   Download,
// //   MapPin,
// //   Search,
// //   SlidersHorizontal,
// //   XCircle,
// //   ChevronLeft,
// //   ChevronRight,
// //   Building2,
// //   Eye,
// //   UserRound,
// //   History,
// //   Check,
// //   X,
// //   MoreVertical,
// //   RefreshCw,
// //   CalendarClock,
// //   UserX,
// //   RotateCcw,
// //   MessageSquareMore,
// //   LoaderCircle,
// //   Phone,
// //   Mail,
// //   ExternalLink,
// // } from "lucide-react";
// // import Swal from "sweetalert2";
// // import {
// //   getVisitSummaryApi,
// //   getAdminVisitsApi,
// //   getVisitByIdApi,
// //   reviewVisitRequestApi,
// //   updateVisitStatusApi,
// // } from "../../../Services/visitService";

// // const TAB_VALUES = [
// //   "Today",
// //   "Upcoming",
// //   "Completed",
// //   "Cancelled",
// //   "No Show",
// //   "Rescheduled",
// //   "Follow-up",
// // ];

// // const STATUS_OPTIONS = [
// //   "All",
// //   "Requested",
// //   "Upcoming",
// //   "Completed",
// //   "Cancelled",
// //   "No Show",
// //   "Rescheduled",
// //   "Follow-up",
// // ];

// // const getLocalUser = () => {
// //   try {
// //     return JSON.parse(localStorage.getItem("user") || "{}");
// //   } catch {
// //     return {};
// //   }
// // };

// // const getActor = () => {
// //   const user = getLocalUser();
// //   return {
// //     userId: user?.id || null,
// //     name: user?.name || "Admin",
// //     role: user?.role
// //       ? `${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`
// //       : "Admin",
// //   };
// // };

// // const formatDate = (value) => {
// //   if (!value) return "-";
// //   return new Date(value).toLocaleDateString("en-IN", {
// //     day: "2-digit",
// //     month: "short",
// //     year: "numeric",
// //   });
// // };

// // const formatTime = (value) => {
// //   if (!value) return "-";
// //   return new Date(value).toLocaleTimeString("en-IN", {
// //     hour: "2-digit",
// //     minute: "2-digit",
// //     hour12: true,
// //   });
// // };

// // const StatusBadge = ({ status }) => {
// //   const styles = {
// //     Requested: "bg-[#fff8e8] text-[#b87818] border-[#f2dfb8]",
// //     Upcoming: "bg-[#eaf5ff] text-[#3978a8] border-[#cfe4f4]",
// //     Completed: "bg-[#e8f8f1] text-[#16825f] border-[#ccebdd]",
// //     Cancelled: "bg-[#fff0f0] text-[#d24a4a] border-[#efd0d0]",
// //     "No Show": "bg-[#fff5e8] text-[#bc7622] border-[#edd8b7]",
// //     Rescheduled: "bg-[#f2efff] text-[#7458b1] border-[#dfd7f5]",
// //     "Follow-up": "bg-[#eefbf7] text-[#117c68] border-[#cae9df]",
// //   };
// //   return (
// //     <span
// //       className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap ${styles[status] || "bg-gray-50 text-gray-500 border-gray-200"}`}
// //     >
// //       {status || "-"}
// //     </span>
// //   );
// // };

// // const ApprovalBadge = ({ status }) => {
// //   const normalizedStatus = status || "Pending";

// //   const styles = {
// //     Pending: "bg-[#fff8e8] text-[#b87818] border-[#f2dfb8]",

// //     Approved: "bg-[#e8f8f1] text-[#16825f] border-[#ccebdd]",

// //     Rejected: "bg-[#fff0f0] text-[#d24a4a] border-[#efd0d0]",
// //   };

// //   const labels = {
// //     Pending: "Pending",
// //     Approved: "Approved",
// //     Rejected: "Rejected",
// //   };

// //   return (
// //     <span
// //       className={`
// //         inline-flex
// //         items-center
// //         gap-1
// //         rounded-full
// //         border
// //         px-2.5
// //         py-1
// //         text-[11px]
// //         font-semibold
// //         whitespace-nowrap
// //         ${styles[normalizedStatus] || styles.Pending}
// //       `}
// //     >
// //       {normalizedStatus === "Approved" && <Check size={9} />}

// //       {normalizedStatus === "Rejected" && <X size={9} />}

// //       {normalizedStatus === "Pending" && <Clock3 size={9} />}

// //       {labels[normalizedStatus] || normalizedStatus}
// //     </span>
// //   );
// // };
// // const StatCard = ({
// //   title,
// //   value,
// //   subtitle,
// //   icon: Icon,
// //   type = "default",
// //   onClick,
// // }) => {
// //   const styles = {
// //     default: {
// //       border: "border-[#dce8e5]",
// //       iconBg: "bg-[#ecf8f4]",
// //       icon: "text-[#139278]",
// //       value: "text-[#183d47]",
// //     },
// //     blue: {
// //       border: "border-[#dce8ef]",
// //       iconBg: "bg-[#eef5ff]",
// //       icon: "text-[#4a84c1]",
// //       value: "text-[#294d5a]",
// //     },
// //     amber: {
// //       border: "border-[#eedfbd]",
// //       iconBg: "bg-[#fff3d7]",
// //       icon: "text-[#c78c2d]",
// //       value: "text-[#795c25]",
// //     },
// //   };
// //   const current = styles[type] || styles.default;
// //   return (
// //     <button
// //       onClick={onClick}
// //       className={`w-full rounded-[9px] border ${current.border} bg-white px-4 py-3 text-left transition hover:-translate-y-[1px] hover:shadow-sm`}
// //     >
// //       <div className="flex items-start justify-between">
// //         <div>
// //           <p className="text-[8px] font-semibold uppercase tracking-[0.3px] text-[#7f9094]">
// //             {title}
// //           </p>
// //           <p
// //             className={`mt-2 text-[24px] font-semibold leading-none ${current.value}`}
// //           >
// //             {value}
// //           </p>
// //           {subtitle && (
// //             <p className="mt-1.5 text-[11px] text-[#96a2a5]">{subtitle}</p>
// //           )}
// //         </div>
// //         <div
// //           className={`flex h-8 w-8 items-center justify-center rounded-[7px] ${current.iconBg}`}
// //         >
// //           <Icon size={14} className={current.icon} />
// //         </div>
// //       </div>
// //     </button>
// //   );
// // };

// // const MiniMetric = ({ label, value, danger, onClick }) => (
// //   <button
// //     onClick={onClick}
// //     className="rounded-[7px] border border-[#e2ebe9] bg-white px-3 py-2 text-left transition hover:bg-[#fbfdfc]"
// //   >
// //     <p className="text-[7px] uppercase tracking-[0.2px] text-[#8c9a9d]">
// //       {label}
// //     </p>
// //     <p
// //       className={`mt-1 text-[14px] font-semibold ${danger ? "text-[#d45353]" : "text-[#34525a]"}`}
// //     >
// //       {value}
// //     </p>
// //   </button>
// // );

// // const SelectFilter = ({ value, onChange, options, label }) => (
// //   <select
// //     value={value}
// //     onChange={(e) => onChange(e.target.value)}
// //     className="h-9 min-w-[125px] rounded-[6px] border border-[#dce6e4] bg-white px-3 text-[12px] text-[#63767b] outline-none focus:border-[#7ab9ac]"
// //   >
// //     {options.map((item) => (
// //       <option key={item} value={item}>
// //         {item === "All" ? label : item}
// //       </option>
// //     ))}
// //   </select>
// // );

// // // export default function VisitManagement() {
// // //   const navigate = useNavigate();
// // //   const { id: routeVisitId } = useParams();
// // export default function VisitManagement({
// //   embedded = false,
// //   initialVisitId = null,
// //   onEmbeddedDetailClose,
// // }) {
// //   const navigate =
// //     useNavigate();

// //   const {
// //     id: routeVisitId,
// //   } = useParams();
// //   const [visits, setVisits] = useState([]);
// //   const [summary, setSummary] = useState({
// //     today: 0,
// //     upcoming: 0,
// //     completed: 0,
// //     cancelled: 0,
// //     noShow: 0,
// //     rescheduled: 0,
// //     followUp: 0,
// //     pendingApproval: 0,
// //     locations: [],
// //   });
// //   const [activeTab, setActiveTab] = useState("Today");
// //   const [search, setSearch] = useState("");
// //   const [statusFilter, setStatusFilter] = useState("All");
// //   const [approvalFilter, setApprovalFilter] = useState("All");
// //   const [locationFilter, setLocationFilter] = useState("All");
// //   const [selectedRows, setSelectedRows] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [total, setTotal] = useState(0);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedVisit, setSelectedVisit] = useState(null);
// //   const [detailLoading, setDetailLoading] = useState(false);
// //   const [actionMenu, setActionMenu] = useState(null);
// //   const [actionLoading, setActionLoading] = useState("");
// //   const itemsPerPage = 10;

// //   // Close action menu when user clicks anywhere outside it or presses Escape
// //   useEffect(() => {
// //     const handleOutsideClick = (event) => {
// //       if (!event.target.closest("[data-visit-action-menu]")) {
// //         setActionMenu(null);
// //       }
// //     };

// //     const handleEscape = (event) => {
// //       if (event.key === "Escape") setActionMenu(null);
// //     };

// //     document.addEventListener("mousedown", handleOutsideClick);
// //     document.addEventListener("keydown", handleEscape);

// //     return () => {
// //       document.removeEventListener("mousedown", handleOutsideClick);
// //       document.removeEventListener("keydown", handleEscape);
// //     };
// //   }, []);

// //   const fetchSummary = async () => {
// //     try {
// //       const response = await getVisitSummaryApi();
// //       if (response?.success) setSummary(response.data || {});
// //     } catch (error) {
// //       console.error("Visit summary error:", error);
// //     }
// //   };

// //   const fetchVisits = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await getAdminVisitsApi({
// //         tab: activeTab,
// //         search: search.trim(),
// //         status: statusFilter,
// //         approvalStatus: approvalFilter,
// //         location: locationFilter,
// //         page,
// //         limit: itemsPerPage,
// //       });
// //       if (response?.success) {
// //         setVisits(response.data || []);
// //         setTotal(response.total || 0);
// //         setTotalPages(response.totalPages || 1);
// //       } else {
// //         setVisits([]);
// //       }
// //     } catch (error) {
// //       setVisits([]);
// //       Swal.fire({
// //         icon: "error",
// //         title: "Unable to load visits",
// //         text: error?.response?.data?.message || "Failed to fetch visit data.",
// //         confirmButtonColor: "#0ca77e",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchSummary();
// //   }, []);

// //   useEffect(() => {
// //     const timer = setTimeout(fetchVisits, 250);
// //     return () => clearTimeout(timer);
// //   }, [activeTab, search, statusFilter, approvalFilter, locationFilter, page]);

// //   useEffect(() => {
// //     setPage(1);
// //   }, [activeTab, search, statusFilter, approvalFilter, locationFilter]);

// //   const openVisitDetail = async (id) => {
// //     try {
// //       setDetailLoading(true);
// //       setSelectedVisit(null);
// //       const response = await getVisitByIdApi(id);
// //       if (response?.success) setSelectedVisit(response.data);
// //     } catch (error) {
// //       Swal.fire({
// //         icon: "error",
// //         title: "Unable to load details",
// //         text: error?.response?.data?.message || "Visit details not available.",
// //         confirmButtonColor: "#0ca77e",
// //       });
// //     } finally {
// //       setDetailLoading(false);
// //       setActionMenu(null);
// //     }
// //   };

// //   // ======================================================
// // // PARTNER DASHBOARD SE SPECIFIC VISIT OPEN
// // // ======================================================

// // useEffect(() => {
// //   if (
// //     !embedded ||
// //     !initialVisitId
// //   ) {
// //     return;
// //   }

// //   openVisitDetail(
// //     initialVisitId
// //   );
// // }, [
// //   embedded,
// //   initialVisitId,
// // ]);

// //   const handleViewVisit = (visit) => {
// //     if (!visit?._id) {
// //       return;
// //     }

// //     // ==========================================
// //     // PARTNER DASHBOARD KE ANDAR
// //     // Route change nahi hoga
// //     // ==========================================

// //     if (embedded) {
// //       openVisitDetail(visit._id);

// //       return;
// //     }

// //     // ==========================================
// //     // STANDALONE VISIT MANAGEMENT
// //     // URL route maintain hoga
// //     // ==========================================

// //     navigate(`/visit-management/${visit._id}`);
// //   };

// //   // useEffect(() => {
// //   //   if (routeVisitId) {
// //   //     openVisitDetail(routeVisitId);
// //   //   }
// //   // }, [routeVisitId]);
// // useEffect(() => {

// //   // Embedded Partner Dashboard me
// //   // route based opening nahi chahiye
// //   if (embedded) {
// //     return;
// //   }

// //   if (routeVisitId) {
// //     openVisitDetail(
// //       routeVisitId
// //     );
// //   }

// // }, [
// //   routeVisitId,
// //   embedded,
// // ]);
// //   const refreshAll = async () => {
// //     await Promise.all([fetchVisits(), fetchSummary()]);
// //     if (selectedVisit?.visit?._id)
// //       await openVisitDetail(selectedVisit.visit._id);
// //   };

// //   const reviewVisit = async (visit, action) => {
// //     let remarks = "";
// //     let approvedVisitAt;

// //     if (action === "approve") {
// //       const result = await Swal.fire({
// //         title: "Approve Visit Request?",
// //         html: `<div style="font-size:12px;color:#667085;line-height:1.6">Approve <strong>${visit.visitId}</strong> for <strong>${visit.propertySnapshot?.title || "property"}</strong>?</div>`,
// //         input: "datetime-local",
// //         inputValue: new Date(visit.requestedVisitAt).toISOString().slice(0, 16),
// //         showCancelButton: true,
// //         confirmButtonText: "Approve Visit",
// //         confirmButtonColor: "#0ca77e",
// //       });
// //       if (!result.isConfirmed) return;
// //       approvedVisitAt = result.value || visit.requestedVisitAt;
// //     } else {
// //       const result = await Swal.fire({
// //         title: "Reject Visit Request?",
// //         input: "textarea",
// //         inputPlaceholder: "Reason for rejection...",
// //         showCancelButton: true,
// //         confirmButtonText: "Reject Request",
// //         confirmButtonColor: "#d24a4a",
// //         inputValidator: (value) =>
// //           !value?.trim() ? "Please enter a reason." : undefined,
// //       });
// //       if (!result.isConfirmed) return;
// //       remarks = result.value;
// //     }

// //     try {
// //       setActionLoading(visit._id);
// //       const response = await reviewVisitRequestApi(visit._id, {
// //         action,
// //         actor: getActor(),
// //         remarks,
// //         approvedVisitAt,
// //       });
// //       if (response?.success) {
// //         await Swal.fire({
// //           icon: "success",
// //           title: action === "approve" ? "Visit Approved" : "Visit Rejected",
// //           text: response.message,
// //           confirmButtonColor: "#0ca77e",
// //         });
// //         await refreshAll();
// //       }
// //     } catch (error) {
// //       Swal.fire({
// //         icon: "error",
// //         title: "Action failed",
// //         text: error?.response?.data?.message || "Unable to update visit.",
// //         confirmButtonColor: "#0ca77e",
// //       });
// //     } finally {
// //       setActionLoading("");
// //     }
// //   };

// //   const updateStatus = async (visit, newStatus) => {
// //     let payload = { status: newStatus, actor: getActor(), remarks: "" };

// //     if (newStatus === "Rescheduled") {
// //       const result = await Swal.fire({
// //         title: "Reschedule Visit",
// //         input: "datetime-local",
// //         showCancelButton: true,
// //         confirmButtonText: "Reschedule",
// //         confirmButtonColor: "#7458b1",
// //         inputValidator: (value) =>
// //           !value ? "Select a new date/time." : undefined,
// //       });
// //       if (!result.isConfirmed) return;
// //       payload.nextVisitAt = result.value;
// //       payload.remarks = "Visit rescheduled by admin";
// //     } else if (newStatus === "Follow-up") {
// //       const result = await Swal.fire({
// //         title: "Schedule Follow-up",
// //         input: "datetime-local",
// //         showCancelButton: true,
// //         confirmButtonText: "Set Follow-up",
// //         confirmButtonColor: "#0ca77e",
// //       });
// //       if (!result.isConfirmed) return;
// //       payload.followUpAt = result.value || null;
// //       payload.outcome = "Need Follow-up";
// //       payload.remarks = "Follow-up required";
// //     } else if (newStatus === "Completed") {
// //       const result = await Swal.fire({
// //         title: "Complete Visit",
// //         input: "select",
// //         inputOptions: {
// //           Completed: "Completed",
// //           Positive: "Positive",
// //           "Strong Interest": "Strong Interest",
// //           "Not Interested": "Not Interested",
// //           "Need Follow-up": "Need Follow-up",
// //         },
// //         showCancelButton: true,
// //         confirmButtonText: "Mark Completed",
// //         confirmButtonColor: "#0ca77e",
// //       });
// //       if (!result.isConfirmed) return;
// //       payload.outcome = result.value || "Completed";
// //       payload.remarks = `Visit completed: ${payload.outcome}`;
// //     } else {
// //       const result = await Swal.fire({
// //         title: `Mark as ${newStatus}?`,
// //         input: "textarea",
// //         inputPlaceholder: "Optional remarks...",
// //         showCancelButton: true,
// //         confirmButtonText: `Mark ${newStatus}`,
// //         confirmButtonColor:
// //           newStatus === "Cancelled" || newStatus === "No Show"
// //             ? "#d24a4a"
// //             : "#0ca77e",
// //       });
// //       if (!result.isConfirmed) return;
// //       payload.remarks = result.value || "";
// //     }

// //     try {
// //       setActionLoading(visit._id);
// //       const response = await updateVisitStatusApi(visit._id, payload);
// //       if (response?.success) {
// //         await Swal.fire({
// //           icon: "success",
// //           title: "Visit Updated",
// //           text: response.message,
// //           confirmButtonColor: "#0ca77e",
// //         });
// //         await refreshAll();
// //       }
// //     } catch (error) {
// //       Swal.fire({
// //         icon: "error",
// //         title: "Update failed",
// //         text:
// //           error?.response?.data?.message || "Unable to update visit status.",
// //         confirmButtonColor: "#0ca77e",
// //       });
// //     } finally {
// //       setActionLoading("");
// //       setActionMenu(null);
// //     }
// //   };

// //   const toggleRow = (id) =>
// //     setSelectedRows((prev) =>
// //       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
// //     );
// //   const toggleAll = () => {
// //     const ids = visits.map((v) => v._id);
// //     const all = ids.length > 0 && ids.every((id) => selectedRows.includes(id));
// //     setSelectedRows((prev) =>
// //       all
// //         ? prev.filter((id) => !ids.includes(id))
// //         : [...new Set([...prev, ...ids])],
// //     );
// //   };

// //   const exportReport = async () => {
// //     try {
// //       // Export the complete result for the CURRENT filters, not only the visible page.
// //       const response = await getAdminVisitsApi({
// //         tab: activeTab,
// //         search: search.trim(),
// //         status: statusFilter,
// //         approvalStatus: approvalFilter,
// //         location: locationFilter,
// //         page: 1,
// //         limit: 5000,
// //       });

// //       const exportVisits = response?.success ? response.data || [] : [];

// //       if (!exportVisits.length) {
// //         await Swal.fire({
// //           icon: "info",
// //           title: "No Data to Export",
// //           text: "No visit records match the selected filters.",
// //           confirmButtonColor: "#0ca77e",
// //         });
// //         return;
// //       }

// //       const rows = exportVisits.map((v) => ({
// //         "Visit ID": v.visitId || "",
// //         "Property Name": v.propertySnapshot?.title || "",
// //         "Property ID": v.propertySnapshot?.propertyCode || "",
// //         "Partner Name": v.partnerSnapshot?.name || "",
// //         "Partner ID": v.partnerSnapshot?.partnerCode || "",
// //         "Partner Type": v.partnerSnapshot?.partnerType || "",
// //         Date: formatDate(v.requestedVisitAt),
// //         Time: formatTime(v.requestedVisitAt),
// //         City: v.propertySnapshot?.city || "",
// //         Locality: v.propertySnapshot?.locality || "",
// //         Approval: v.approvalStatus || "",
// //         Status: v.status || "",
// //         Outcome: v.outcome || "Pending",
// //         "Request Notes": v.requestNotes || "",
// //         "Admin Remarks": v.adminRemarks || "",
// //       }));

// //       const worksheet = XLSX.utils.json_to_sheet(rows);
// //       worksheet["!cols"] = [
// //         { wch: 14 },
// //         { wch: 28 },
// //         { wch: 15 },
// //         { wch: 24 },
// //         { wch: 15 },
// //         { wch: 14 },
// //         { wch: 14 },
// //         { wch: 12 },
// //         { wch: 18 },
// //         { wch: 22 },
// //         { wch: 15 },
// //         { wch: 16 },
// //         { wch: 22 },
// //         { wch: 30 },
// //         { wch: 30 },
// //       ];

// //       const workbook = XLSX.utils.book_new();
// //       XLSX.utils.book_append_sheet(workbook, worksheet, "Visits");

// //       const safeTab = activeTab.replace(/[^a-z0-9]/gi, "-").toLowerCase();
// //       XLSX.writeFile(
// //         workbook,
// //         `visit-management-${safeTab}-${new Date().toISOString().slice(0, 10)}.xlsx`,
// //       );
// //     } catch (error) {
// //       console.error("Excel export error:", error);
// //       await Swal.fire({
// //         icon: "error",
// //         title: "Export Failed",
// //         text:
// //           error?.response?.data?.message || "Unable to export Excel report.",
// //         confirmButtonColor: "#0ca77e",
// //       });
// //     }
// //   };

// //   const locations = ["All", ...(summary.locations || [])];

// //   return (
// //     <div className="min-h-screen overflow-x-hidden  px-4 py-4 sm:px-5 lg:px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// //       <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
// //         <div>
// //           <h1 className="text-[20px] font-semibold tracking-[-0.3px] text-[#123942]">
// //             Visit Management
// //           </h1>
// //           <p className="mt-1 text-[12px] text-[#849497]">
// //             Approve partner visit requests and manage scheduled visits,
// //             attendance, outcomes, reschedules and follow-ups.
// //           </p>
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <button
// //             onClick={refreshAll}
// //             className="flex h-9 items-center gap-1.5 rounded-[6px] border border-[#bdd8d2] bg-white px-3 text-[12px] font-medium text-[#267d6d] hover:bg-[#f6fbfa]"
// //           >
// //             <RefreshCw size={11} /> Refresh
// //           </button>
// //           <button
// //             onClick={exportReport}
// //             className="flex h-9 items-center gap-1.5 rounded-[6px] bg-[#0ca77e] px-3 text-[12px] font-semibold text-white hover:bg-[#078f6d]"
// //           >
// //             <Download size={11} /> Export Report
// //           </button>
// //         </div>
// //       </div>

// //       <div className="mt-4 grid gap-2 xl:grid-cols-[1fr_1fr_1fr_2fr]">
// //         <StatCard
// //           title="Today's Visits"
// //           value={summary.today || 0}
// //           subtitle={`${summary.pendingApproval || 0} pending approvals`}
// //           icon={CalendarDays}
// //           onClick={() => setActiveTab("Today")}
// //         />
// //         <StatCard
// //           title="Upcoming"
// //           value={summary.upcoming || 0}
// //           subtitle="Approved / requested future visits"
// //           icon={Clock3}
// //           type="blue"
// //           onClick={() => setActiveTab("Upcoming")}
// //         />
// //         <StatCard
// //           title="Completed"
// //           value={summary.completed || 0}
// //           subtitle="All completed visits"
// //           icon={CheckCircle2}
// //           onClick={() => setActiveTab("Completed")}
// //         />
// //         <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
// //           <MiniMetric
// //             label="Cancelled"
// //             value={summary.cancelled || 0}
// //             danger
// //             onClick={() => setActiveTab("Cancelled")}
// //           />
// //           <MiniMetric
// //             label="No Show"
// //             value={summary.noShow || 0}
// //             danger
// //             onClick={() => setActiveTab("No Show")}
// //           />
// //           <MiniMetric
// //             label="Rescheduled"
// //             value={summary.rescheduled || 0}
// //             onClick={() => setActiveTab("Rescheduled")}
// //           />
// //           <MiniMetric
// //             label="Follow-up"
// //             value={summary.followUp || 0}
// //             onClick={() => setActiveTab("Follow-up")}
// //           />
// //         </div>
// //       </div>

// //       <div className="mt-4 flex items-center justify-between gap-3 border-b border-[#dde7e5]">
// //         <div className="flex min-w-0 gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// //           {TAB_VALUES.map((tab) => (
// //             <button
// //               key={tab}
// //               onClick={() => {
// //                 setActiveTab(tab);
// //                 setPage(1);
// //               }}
// //               className={`relative min-w-max pb-2.5 text-[12px] font-medium ${activeTab === tab ? "text-[#107866]" : "text-[#8b999c]"}`}
// //             >
// //               {tab}
// //               {activeTab === tab && (
// //                 <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#087f6c]" />
// //               )}
// //             </button>
// //           ))}
// //         </div>
// //         <div className="mb-2 flex items-center gap-1.5 rounded-[4px] border border-[#dce5e3] bg-white px-2.5 py-1.5 text-[11px] text-[#667a7e]">
// //           <SlidersHorizontal size={9} /> Filters
// //         </div>
// //       </div>

// //       <div className="mt-3 flex flex-col gap-2 lg:flex-row">
// //         <div className="relative flex-1">
// //           <Search
// //             size={12}
// //             className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8d9b9e]"
// //           />
// //           <input
// //             value={search}
// //             onChange={(e) => setSearch(e.target.value)}
// //             placeholder="Search visit ID, property, partner, location..."
// //             className="h-9 w-full rounded-[6px] border border-[#dce6e4] bg-white pl-8 pr-3 text-[12px] text-[#42595f] outline-none placeholder:text-[#a1adaf] focus:border-[#78b8ab]"
// //           />
// //         </div>
// //         <SelectFilter
// //           value={statusFilter}
// //           onChange={setStatusFilter}
// //           options={STATUS_OPTIONS}
// //           label="All Statuses"
// //         />
// //         <SelectFilter
// //           value={approvalFilter}
// //           onChange={setApprovalFilter}
// //           options={["All", "Pending", "Approved", "Rejected"]}
// //           label="All Approvals"
// //         />
// //         <SelectFilter
// //           value={locationFilter}
// //           onChange={setLocationFilter}
// //           options={locations}
// //           label="All Locations"
// //         />
// //       </div>

// //       <div className="mt-3 overflow-visible rounded-[8px] border border-[#dce7e4] bg-white">
// //         <div className="w-full overflow-visible">
// //           <table className="w-full table-fixed">
// //             <colgroup>
// //               <col style={{ width: "3%" }} />
// //               <col style={{ width: "8%" }} />
// //               <col style={{ width: "17%" }} />
// //               <col style={{ width: "14%" }} />
// //               <col style={{ width: "10%" }} />
// //               <col style={{ width: "10%" }} />
// //               <col style={{ width: "11%" }} />
// //               <col style={{ width: "8%" }} />
// //               <col style={{ width: "8%" }} />
// //               <col style={{ width: "11%" }} />
// //             </colgroup>
// //             <thead>
// //               <tr className="bg-[#073c5c] text-white">
// //                 <th className="w-8 px-3 py-3 text-left">
// //                   <input
// //                     type="checkbox"
// //                     onChange={toggleAll}
// //                     checked={
// //                       visits.length > 0 &&
// //                       visits.every((v) => selectedRows.includes(v._id))
// //                     }
// //                   />
// //                 </th>
// //                 {[
// //                   "Visit ID",
// //                   "Property",
// //                   "Requested By Partner",
// //                   "Requested Date / Time",
// //                   "Location",
// //                   "Approval",
// //                   "Status",
// //                   "Outcome",
// //                   "Actions",
// //                 ].map((h) => (
// //                   <th
// //                     key={h}
// //                     className="px-2 py-3 text-left text-[12px] font-medium"
// //                   >
// //                     {h}
// //                   </th>
// //                 ))}
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {loading ? (
// //                 <tr>
// //                   <td colSpan={10} className="py-16">
// //                     <div className="flex items-center justify-center gap-2 text-[12px] text-[#6d7f82]">
// //                       <LoaderCircle
// //                         size={17}
// //                         className="animate-spin text-[#0ca77e]"
// //                       />{" "}
// //                       Loading visits...
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ) : visits.length ? (
// //                 visits.map((visit) => (
// //                   <tr
// //                     key={visit._id}
// //                     className="border-b border-[#edf2f1] transition last:border-b-0 hover:bg-[#f9fcfb]"
// //                   >
// //                     <td className="px-3 py-3">
// //                       <input
// //                         type="checkbox"
// //                         checked={selectedRows.includes(visit._id)}
// //                         onChange={() => toggleRow(visit._id)}
// //                       />
// //                     </td>
// //                     <td className="px-2 py-3">
// //                       <p className="text-[12px] font-bold text-[#0a7a67]">
// //                         {visit.visitId}
// //                       </p>
// //                       <p className="mt-1 text-[10px] text-[#98a5a8]">
// //                         {visit.approvalStatus === "Pending"
// //                           ? "Needs review"
// //                           : "Visit record"}
// //                       </p>
// //                     </td>

// //                     <td className="px-2 py-3">
// //                       <div className="flex w-full items-start ">
// //                         <div className="min-w-0">
// //                           {/* PROPERTY NAME */}

// //                           <p
// //                             className="
// //           line-clamp-2
// //           break-words
// //           text-[13px]
// //           font-bold
// //           text-[#3b555b]
// //         "
// //                           >
// //                             {visit.propertySnapshot?.title || "-"}
// //                           </p>

// //                           {/* PROPERTY ID */}

// //                           <p
// //                             className="
// //           mt-1
// //           text-[11px]
// //           font-bold
// //           text-[#0a8d74]
// //         "
// //                           >
// //                             {visit.propertySnapshot?.propertyCode || "-"}
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </td>
// //                     <td className="px-2 py-3">
// //                       <div className="w-full">
// //                         <p className="line-clamp-2 break-words text-[13px] font-bold text-[#40585f]">
// //                           {visit.partnerSnapshot?.name || "-"}
// //                         </p>
// //                         <p className="mt-1 text-[11px] font-bold text-[#0a8d74]">
// //                           {visit.partnerSnapshot?.partnerCode || "-"}
// //                         </p>
// //                         <p className="mt-1 text-[10px] font-medium capitalize text-[#98a5a8]">
// //                           {visit.partnerSnapshot?.partnerType || "-"}
// //                         </p>
// //                       </div>
// //                     </td>
// //                     <td className="px-2 py-3">
// //                       <p className="text-[12px] font-semibold text-[#465f64]">
// //                         {formatDate(visit.requestedVisitAt)}
// //                       </p>
// //                       <p className="mt-1 text-[11px] text-[#98a5a8]">
// //                         {formatTime(visit.requestedVisitAt)}
// //                       </p>
// //                     </td>
// //                     <td className="px-2 py-3">
// //                       <div className="flex w-full items-start gap-1">
// //                         <MapPin size={9} className="mt-[1px] text-[#6c8984]" />
// //                         <div>
// //                           <p className="text-[12px] font-semibold text-[#4e676c]">
// //                             {visit.propertySnapshot?.city || "-"}
// //                           </p>
// //                           <p className="mt-1 text-[11px] text-[#98a5a8]">
// //                             {visit.propertySnapshot?.locality || "-"}
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </td>
// //                     <td className="px-2 py-3">
// //                       <ApprovalBadge status={visit.approvalStatus} />
// //                     </td>
// //                     <td className="px-2 py-3">
// //                       <StatusBadge status={visit.status} />
// //                     </td>
// //                     <td className="px-2 py-3">
// //                       <p className="break-words text-[12px] text-[#687b7f]">
// //                         {visit.outcome || "Pending"}
// //                       </p>
// //                     </td>
// //                     <td
// //                       className="relative px-2 py-3"
// //                       data-visit-action-menu
// //                       onClick={(e) => e.stopPropagation()}
// //                     >
// //                       <div className="flex items-center gap-1">
// //                         {/* <button
// //                           onClick={() => navigate(`/visit-management/${visit._id}`)}
// //                           className="flex h-8 items-center gap-1.5 rounded-[6px] border border-[#cfe2de] bg-white px-2.5 text-[11px] font-semibold text-[#167c69] hover:bg-[#f1faf7]"
// //                         >
// //                           <Eye size={12} /> View
// //                         </button> */}
// //                         <button
// //                           onClick={() => handleViewVisit(visit)}
// //                           className="flex h-8 items-center gap-1.5 rounded-[6px] border border-[#cfe2de] bg-white px-2.5 text-[11px] font-semibold text-[#167c69] hover:bg-[#f1faf7]"
// //                         >
// //                           <Eye size={12} />
// //                           View
// //                         </button>
// //                         {visit.approvalStatus === "Pending" && (
// //                           <>
// //                             <button
// //                               disabled={actionLoading === visit._id}
// //                               onClick={() => reviewVisit(visit, "approve")}
// //                               className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#e7f8f2] text-[#138266]"
// //                               title="Approve"
// //                             >
// //                               <Check size={11} />
// //                             </button>
// //                             <button
// //                               disabled={actionLoading === visit._id}
// //                               onClick={() => reviewVisit(visit, "reject")}
// //                               className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#fff0f0] text-[#cf4e4e]"
// //                               title="Reject"
// //                             >
// //                               <X size={11} />
// //                             </button>
// //                           </>
// //                         )}
// //                         <button
// //                           onClick={() =>
// //                             setActionMenu(
// //                               actionMenu === visit._id ? null : visit._id,
// //                             )
// //                           }
// //                           className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#dce5e3] text-[#60777b] hover:bg-[#f5f8f7]"
// //                         >
// //                           <MoreVertical size={15} />
// //                         </button>
// //                       </div>
// //                       {actionMenu === visit._id && (
// //                         <div className="absolute right-2 top-11 z-[150] w-[190px] overflow-hidden rounded-[10px] border border-[#dfe7e5] bg-white py-1.5 shadow-[0_14px_35px_rgba(15,23,42,0.18)]">
// //                           {[
// //                             { label: "Completed", icon: CheckCircle2 },
// //                             { label: "Cancelled", icon: XCircle },
// //                             { label: "No Show", icon: UserX },
// //                             { label: "Rescheduled", icon: RotateCcw },
// //                             { label: "Follow-up", icon: MessageSquareMore },
// //                           ].map(({ label, icon: Icon }) => (
// //                             <button
// //                               key={label}
// //                               onClick={() => updateStatus(visit, label)}
// //                               className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[12px] font-medium text-[#52686e] hover:bg-[#f5faf8]"
// //                             >
// //                               <Icon size={11} />
// //                               {label}
// //                             </button>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </td>
// //                   </tr>
// //                 ))
// //               ) : (
// //                 <tr>
// //                   <td colSpan={10} className="py-14 text-center">
// //                     <Search size={20} className="mx-auto text-[#a1aeac]" />
// //                     <p className="mt-2 text-[12px] font-medium text-[#50676c]">
// //                       No visits found
// //                     </p>
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         <div className="flex flex-col gap-2 border-t border-[#e8efed] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
// //           <p className="text-[8px] text-[#8f9c9f]">
// //             Showing {total === 0 ? 0 : (page - 1) * itemsPerPage + 1} to{" "}
// //             {Math.min(page * itemsPerPage, total)} of {total} entries
// //           </p>
// //           <div className="flex items-center gap-1">
// //             <button
// //               disabled={page === 1}
// //               onClick={() => setPage((p) => Math.max(1, p - 1))}
// //               className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#dce5e3] bg-white text-[#63777b] disabled:opacity-40"
// //             >
// //               <ChevronLeft size={11} />
// //             </button>
// //             <button className="flex h-7 min-w-7 items-center justify-center rounded-[4px] bg-[#073c5c] px-2 text-[12px] text-white">
// //               {page}
// //             </button>
// //             <button
// //               disabled={page >= totalPages}
// //               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// //               className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#dce5e3] bg-white text-[#63777b] disabled:opacity-40"
// //             >
// //               <ChevronRight size={11} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {(selectedVisit || detailLoading) && (
// //         // <VisitDetailDrawer
// //         //   data={selectedVisit}
// //         //   loading={detailLoading}
// //         //   onClose={() => {
// //         //     setSelectedVisit(null);
// //         //     if (routeVisitId) navigate("/visit-management");
// //         //   }}
// //         //   onRefresh={refreshAll}
// //         // />
// //         <VisitDetailDrawer
// //   data={
// //     selectedVisit
// //   }

// //   loading={
// //     detailLoading
// //   }

// //   onClose={() => {

// //     setSelectedVisit(
// //       null
// //     );

// //     // ========================================
// //     // Partner Dashboard me ho to
// //     // bilkul navigate mat karo
// //     // ========================================

// //     if (embedded) {
// //       return;
// //     }

// //     // ========================================
// //     // Standalone detail route se aaye ho
// //     // tab normal list par jao
// //     // ========================================

// //     if (routeVisitId) {
// //       navigate(
// //         "/visit-management",
// //         {
// //           replace: true,
// //         }
// //       );
// //     }

// //   }}

// //   onRefresh={
// //     refreshAll
// //   }
// // />
// //       )}
// //     </div>
// //   );
// // }

// // function VisitDetailDrawer({ data, loading, onClose }) {
// //   const navigate = useNavigate();
// //   const visit = data?.visit;
// //   const property = data?.property;
// //   const partner = data?.partner;
// //   const history = data?.visitHistory || [];

// //   const propertyMongoId =
// //     property?._id || visit?.propertyId?._id || visit?.propertyId || null;

// //   const partnerMongoId =
// //     partner?._id || visit?.partnerId?._id || visit?.partnerId || null;

// //   return (
// //     <div className="fixed inset-0 z-[999]">
// //       <div
// //         onClick={onClose}
// //         className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"
// //       />
// //       <div className="absolute bottom-0 right-0 top-0 w-full max-w-[580px] overflow-y-auto bg-[#f6faf9] shadow-[-12px_0_35px_rgba(15,23,42,0.13)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// //         <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#e3ebe9] bg-white px-5 py-4">
// //           <div>
// //             <h2 className="text-[18px] font-semibold text-[#173b45]">
// //               Visit Details
// //             </h2>
// //             <p className="mt-1 text-[12px] text-[#8a9a9d]">
// //               Property, assigned partner and visit history
// //             </p>
// //           </div>
// //           <button
// //             onClick={onClose}
// //             className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f6f5] text-[#63777b]"
// //           >
// //             <X size={15} />
// //           </button>
// //         </div>
// //         {loading ? (
// //           <div className="flex h-[400px] items-center justify-center">
// //             <LoaderCircle size={26} className="animate-spin text-[#0ca77e]" />
// //           </div>
// //         ) : visit ? (
// //           <div className="space-y-4 p-5">
// //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// //               <div className="flex items-start justify-between gap-3">
// //                 <div>
// //                   <p className="text-[11px] font-bold text-[#0b8a72]">
// //                     {visit.visitId}
// //                   </p>
// //                   <h3 className="mt-1 text-[18px] font-semibold text-[#173c46]">
// //                     {visit.propertySnapshot?.title || property?.title}
// //                   </h3>
// //                   <p className="mt-1 text-[12px] text-[#819194]">
// //                     {formatDate(visit.requestedVisitAt)} •{" "}
// //                     {formatTime(visit.requestedVisitAt)}
// //                   </p>
// //                 </div>
// //                 <div className="flex flex-col items-end gap-2">
// //                   <StatusBadge status={visit.status} />
// //                   <ApprovalBadge status={visit.approvalStatus} />
// //                 </div>
// //               </div>
// //               <div className="mt-4 grid grid-cols-2 gap-2">
// //                 <DetailBox label="Outcome" value={visit.outcome} />
// //                 <DetailBox
// //                   label="Location"
// //                   value={`${visit.propertySnapshot?.locality || ""}, ${visit.propertySnapshot?.city || ""}`}
// //                 />
// //                 <DetailBox
// //                   label="Request Notes"
// //                   value={visit.requestNotes || "-"}
// //                 />
// //                 <DetailBox
// //                   label="Admin Remarks"
// //                   value={visit.adminRemarks || "-"}
// //                 />
// //               </div>
// //             </div>

// //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// //               <SectionTitle icon={Building2} title="View Property" />
// //               <div className="flex gap-3">
// //                 {property?.images?.[0]?.url ? (
// //                   <img
// //                     src={property.images[0].url}
// //                     alt=""
// //                     className="h-20 w-24 rounded-lg object-cover"
// //                   />
// //                 ) : (
// //                   <div className="flex h-20 w-24 items-center justify-center rounded-lg bg-[#eef7f4] text-[#138b75]">
// //                     <Building2 size={24} />
// //                   </div>
// //                 )}
// //                 <div className="min-w-0 flex-1">
// //                   <p className="text-[13px] font-semibold text-[#31515a]">
// //                     {property?.title || visit.propertySnapshot?.title}
// //                   </p>
// //                   <p className="mt-1 text-[12px] font-semibold text-[#0b8a72]">
// //                     {property?.propertyId ||
// //                       visit.propertySnapshot?.propertyCode}
// //                   </p>
// //                   <p className="mt-2 text-[12px] text-[#7d8e92]">
// //                     {property?.category || "-"} •{" "}
// //                     {property?.propertySize || "-"} {property?.sizeUnit || ""}
// //                   </p>
// //                   <p className="mt-1 text-[12px] text-[#7d8e92]">
// //                     {property?.address ||
// //                       visit.propertySnapshot?.address ||
// //                       "-"}
// //                   </p>
// //                 </div>
// //               </div>

// //               <button
// //                 type="button"
// //                 disabled={!propertyMongoId}
// //                 onClick={() =>
// //                   propertyMongoId &&
// //                   navigate(`/property-management/${propertyMongoId}`)
// //                 }
// //                 className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#073c5c] px-4 text-[12px] font-semibold text-white transition hover:bg-[#052f49] disabled:cursor-not-allowed disabled:opacity-40"
// //               >
// //                 <ExternalLink size={14} />
// //                 View Property
// //               </button>
// //             </div>

// //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// //               <SectionTitle icon={UserRound} title="View Partner" />
// //               <div className="flex items-center gap-3">
// //                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf8f4] text-[13px] font-bold text-[#138b75]">
// //                   {getInitials(partner?.name || visit.partnerSnapshot?.name)}
// //                 </div>
// //                 <div>
// //                   <p className="text-[13px] font-semibold text-[#31515a]">
// //                     {partner?.name || visit.partnerSnapshot?.name}
// //                   </p>
// //                   <p className="mt-1 text-[12px] font-semibold text-[#0b8a72]">
// //                     {partner?.partnerId || visit.partnerSnapshot?.partnerCode}
// //                   </p>
// //                   <p className="mt-1 text-[12px] capitalize text-[#8a989c]">
// //                     {partner?.partnerType || visit.partnerSnapshot?.partnerType}
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="mt-3 grid grid-cols-2 gap-2">
// //                 <DetailBox
// //                   icon={Phone}
// //                   label="Phone"
// //                   value={partner?.phone || visit.partnerSnapshot?.phone}
// //                 />
// //                 <DetailBox
// //                   icon={Mail}
// //                   label="Email"
// //                   value={partner?.email || visit.partnerSnapshot?.email}
// //                 />
// //                 <DetailBox
// //                   icon={MapPin}
// //                   label="City"
// //                   value={partner?.location?.city || "-"}
// //                 />
// //                 <DetailBox
// //                   label="Verified"
// //                   value={partner?.isVerified ? "Yes" : "No"}
// //                 />
// //               </div>

// //               <button
// //                 type="button"
// //                 disabled={!partnerMongoId}
// //                 onClick={() =>
// //                   partnerMongoId && navigate(`/partners/${partnerMongoId}`)
// //                 }
// //                 className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#0ca77e] px-4 text-[12px] font-semibold text-white transition hover:bg-[#078f6d] disabled:cursor-not-allowed disabled:opacity-40"
// //               >
// //                 <ExternalLink size={14} />
// //                 View Partner
// //               </button>
// //             </div>

// //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// //               <SectionTitle icon={History} title="Visit History" />
// //               <div className="space-y-2">
// //                 {history.length ? (
// //                   history.map((item) => (
// //                     <div
// //                       key={item._id}
// //                       className="rounded-lg border border-[#e8efed] bg-[#fbfdfc] p-3"
// //                     >
// //                       <div className="flex items-start justify-between gap-2">
// //                         <div>
// //                           <p className="text-[9px] font-semibold text-[#31515a]">
// //                             {item.visitId}
// //                           </p>
// //                           <p className="mt-1 text-[11px] text-[#8b999c]">
// //                             {formatDate(item.requestedVisitAt)} •{" "}
// //                             {formatTime(item.requestedVisitAt)}
// //                           </p>
// //                         </div>
// //                         <StatusBadge status={item.status} />
// //                       </div>
// //                       <p className="mt-2 text-[12px] text-[#63777b]">
// //                         Outcome: {item.outcome || "Pending"}
// //                       </p>
// //                       {item.adminRemarks && (
// //                         <p className="mt-1 text-[12px] text-[#8a999c]">
// //                           {item.adminRemarks}
// //                         </p>
// //                       )}
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p className="py-6 text-center text-[12px] text-[#95a3a6]">
// //                     No previous visit history.
// //                   </p>
// //                 )}
// //               </div>
// //             </div>

// //             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
// //               <SectionTitle icon={CalendarClock} title="Audit Timeline" />
// //               <div className="space-y-3">
// //                 {(visit.history || [])
// //                   .slice()
// //                   .reverse()
// //                   .map((item) => (
// //                     <div key={item._id} className="flex gap-3">
// //                       <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0ca77e]" />
// //                       <div>
// //                         <p className="text-[9px] font-semibold text-[#40585f]">
// //                           {item.action}
// //                         </p>
// //                         <p className="mt-1 text-[11px] text-[#8b999c]">
// //                           {formatDate(item.updatedAt)} •{" "}
// //                           {formatTime(item.updatedAt)} •{" "}
// //                           {item.updatedBy?.name || "-"}
// //                         </p>
// //                         {item.remarks && (
// //                           <p className="mt-1 text-[12px] text-[#63777b]">
// //                             {item.remarks}
// //                           </p>
// //                         )}
// //                       </div>
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="flex h-[400px] items-center justify-center text-[12px] text-[#8a999c]">
// //             Visit detail not available.
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // function SectionTitle({ icon: Icon, title }) {
// //   return (
// //     <div className="mb-3 flex items-center gap-2">
// //       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eaf8f4] text-[#138b75]">
// //         <Icon size={13} />
// //       </div>
// //       <h4 className="text-[12px] font-semibold text-[#31515a]">{title}</h4>
// //       <div className="h-px flex-1 bg-[#edf2f1]" />
// //     </div>
// //   );
// // }

// // function DetailBox({ icon: Icon, label, value }) {
// //   return (
// //     <div className="rounded-lg border border-[#edf1f0] bg-[#fbfdfc] p-3">
// //       <div className="flex gap-2">
// //         {Icon && <Icon size={12} className="mt-0.5 text-[#159078]" />}
// //         <div className="min-w-0">
// //           <p className="text-[9px] uppercase tracking-wide text-[#98a5a8]">
// //             {label}
// //           </p>
// //           <p className="mt-1 break-words text-[12px] font-medium text-[#52686e]">
// //             {value || "-"}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function getInitials(name = "") {
// //   return (
// //     String(name)
// //       .trim()
// //       .split(" ")
// //       .filter(Boolean)
// //       .map((x) => x[0]?.toUpperCase())
// //       .join("")
// //       .slice(0, 2) || "P"
// //   );
// // }


// import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import * as XLSX from "xlsx";
// import {
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   Download,
//   MapPin,
//   Search,
//   SlidersHorizontal,
//   XCircle,
//   ChevronLeft,
//   ChevronRight,
//   Building2,
//   Eye,
//   UserRound,
//   History,
//   Check,
//   X,
//   MoreVertical,
//   RefreshCw,
//   CalendarClock,
//   UserX,
//   RotateCcw,
//   MessageSquareMore,
//   LoaderCircle,
//   Phone,
//   Mail,
//   ExternalLink,
// } from "lucide-react";
// import Swal from "sweetalert2";
// import {
//   getVisitSummaryApi,
//   getAdminVisitsApi,
//   getVisitByIdApi,
//   reviewVisitRequestApi,
//   updateVisitStatusApi,
// } from "../../../Services/visitService";

// const TAB_VALUES = [
//   "Today",
//   "Upcoming",
//   "Completed",
//   "Cancelled",
//   "No Show",
//   "Rescheduled",
//   "Follow-up",
// ];

// const STATUS_OPTIONS = [
//   "All",
//   "Requested",
//   "Upcoming",
//   "Completed",
//   "Cancelled",
//   "No Show",
//   "Rescheduled",
//   "Follow-up",
// ];

// const getLocalUser = () => {
//   try {
//     return JSON.parse(localStorage.getItem("user") || "{}");
//   } catch {
//     return {};
//   }
// };

// const getActor = () => {
//   const user = getLocalUser();
//   return {
//     userId: user?.id || null,
//     name: user?.name || "Admin",
//     role: user?.role
//       ? `${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`
//       : "Admin",
//   };
// };

// const formatDate = (value) => {
//   if (!value) return "-";
//   return new Date(value).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// };

// const formatTime = (value) => {
//   if (!value) return "-";
//   return new Date(value).toLocaleTimeString("en-IN", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });
// };

// const StatusBadge = ({ status }) => {
//   const styles = {
//     Requested: "bg-[#fff8e8] text-[#b87818] border-[#f2dfb8]",
//     Upcoming: "bg-[#eaf5ff] text-[#3978a8] border-[#cfe4f4]",
//     Completed: "bg-[#e8f8f1] text-[#16825f] border-[#ccebdd]",
//     Cancelled: "bg-[#fff0f0] text-[#d24a4a] border-[#efd0d0]",
//     "No Show": "bg-[#fff5e8] text-[#bc7622] border-[#edd8b7]",
//     Rescheduled: "bg-[#f2efff] text-[#7458b1] border-[#dfd7f5]",
//     "Follow-up": "bg-[#eefbf7] text-[#117c68] border-[#cae9df]",
//   };
//   return (
//     <span
//       className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap ${styles[status] || "bg-gray-50 text-gray-500 border-gray-200"}`}
//     >
//       {status || "-"}
//     </span>
//   );
// };

// const ApprovalBadge = ({ status }) => {
//   const normalizedStatus = status || "Pending";

//   const styles = {
//     Pending: "bg-[#fff8e8] text-[#b87818] border-[#f2dfb8]",

//     Approved: "bg-[#e8f8f1] text-[#16825f] border-[#ccebdd]",

//     Rejected: "bg-[#fff0f0] text-[#d24a4a] border-[#efd0d0]",
//   };

//   const labels = {
//     Pending: "Pending",
//     Approved: "Approved",
//     Rejected: "Rejected",
//   };

//   return (
//     <span
//       className={`
//         inline-flex
//         items-center
//         gap-1
//         rounded-full
//         border
//         px-2.5
//         py-1
//         text-[11px]
//         font-semibold
//         whitespace-nowrap
//         ${styles[normalizedStatus] || styles.Pending}
//       `}
//     >
//       {normalizedStatus === "Approved" && <Check size={9} />}

//       {normalizedStatus === "Rejected" && <X size={9} />}

//       {normalizedStatus === "Pending" && <Clock3 size={9} />}

//       {labels[normalizedStatus] || normalizedStatus}
//     </span>
//   );
// };
// const StatCard = ({
//   title,
//   value,
//   subtitle,
//   icon: Icon,
//   type = "default",
//   onClick,
// }) => {
//   const styles = {
//     default: {
//       border: "border-[#dce8e5]",
//       iconBg: "bg-[#ecf8f4]",
//       icon: "text-[#139278]",
//       value: "text-[#183d47]",
//     },
//     blue: {
//       border: "border-[#dce8ef]",
//       iconBg: "bg-[#eef5ff]",
//       icon: "text-[#4a84c1]",
//       value: "text-[#294d5a]",
//     },
//     amber: {
//       border: "border-[#eedfbd]",
//       iconBg: "bg-[#fff3d7]",
//       icon: "text-[#c78c2d]",
//       value: "text-[#795c25]",
//     },
//   };
//   const current = styles[type] || styles.default;
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full rounded-[9px] border ${current.border} bg-white px-4 py-3 text-left transition hover:-translate-y-[1px] hover:shadow-sm`}
//     >
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-[8px] font-semibold uppercase tracking-[0.3px] text-[#7f9094]">
//             {title}
//           </p>
//           <p
//             className={`mt-2 text-[24px] font-semibold leading-none ${current.value}`}
//           >
//             {value}
//           </p>
//           {subtitle && (
//             <p className="mt-1.5 text-[11px] text-[#96a2a5]">{subtitle}</p>
//           )}
//         </div>
//         <div
//           className={`flex h-8 w-8 items-center justify-center rounded-[7px] ${current.iconBg}`}
//         >
//           <Icon size={14} className={current.icon} />
//         </div>
//       </div>
//     </button>
//   );
// };

// const MiniMetric = ({ label, value, danger, onClick }) => (
//   <button
//     onClick={onClick}
//     className="rounded-[7px] border border-[#e2ebe9] bg-white px-3 py-2 text-left transition hover:bg-[#fbfdfc]"
//   >
//     <p className="text-[7px] uppercase tracking-[0.2px] text-[#8c9a9d]">
//       {label}
//     </p>
//     <p
//       className={`mt-1 text-[14px] font-semibold ${danger ? "text-[#d45353]" : "text-[#34525a]"}`}
//     >
//       {value}
//     </p>
//   </button>
// );

// const SelectFilter = ({ value, onChange, options, label }) => (
//   <select
//     value={value}
//     onChange={(e) => onChange(e.target.value)}
//     className="h-9 min-w-[125px] rounded-[6px] border border-[#dce6e4] bg-white px-3 text-[12px] text-[#63767b] outline-none focus:border-[#7ab9ac]"
//   >
//     {options.map((item) => (
//       <option key={item} value={item}>
//         {item === "All" ? label : item}
//       </option>
//     ))}
//   </select>
// );

// // export default function VisitManagement() {
// //   const navigate = useNavigate();
// //   const { id: routeVisitId } = useParams();
// export default function VisitManagement({
//   embedded = false,
//   initialVisitId = null,
//   onEmbeddedDetailClose,
// }) {
//   const navigate = useNavigate();

//   const { id: routeVisitId } = useParams();
//   const [visits, setVisits] = useState([]);
//   const [summary, setSummary] = useState({
//     today: 0,
//     upcoming: 0,
//     completed: 0,
//     cancelled: 0,
//     noShow: 0,
//     rescheduled: 0,
//     followUp: 0,
//     pendingApproval: 0,
//     locations: [],
//   });
//   const [activeTab, setActiveTab] = useState("Today");
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [approvalFilter, setApprovalFilter] = useState("All");
//   const [locationFilter, setLocationFilter] = useState("All");
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [selectedVisit, setSelectedVisit] = useState(null);
//   const [detailLoading, setDetailLoading] = useState(false);
//   const [actionMenu, setActionMenu] = useState(null);
//   const [actionLoading, setActionLoading] = useState("");
//   const itemsPerPage = 10;

//   // Close action menu when user clicks anywhere outside it or presses Escape
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (!event.target.closest("[data-visit-action-menu]")) {
//         setActionMenu(null);
//       }
//     };

//     const handleEscape = (event) => {
//       if (event.key === "Escape") setActionMenu(null);
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   const fetchSummary = async () => {
//     try {
//       const response = await getVisitSummaryApi();
//       if (response?.success) setSummary(response.data || {});
//     } catch (error) {
//       console.error("Visit summary error:", error);
//     }
//   };

//   const fetchVisits = async () => {
//     try {
//       setLoading(true);
//       const response = await getAdminVisitsApi({
//         tab: activeTab,
//         search: search.trim(),
//         status: statusFilter,
//         approvalStatus: approvalFilter,
//         location: locationFilter,
//         page,
//         limit: itemsPerPage,
//       });
//       if (response?.success) {
//         setVisits(response.data || []);
//         setTotal(response.total || 0);
//         setTotalPages(response.totalPages || 1);
//       } else {
//         setVisits([]);
//       }
//     } catch (error) {
//       setVisits([]);
//       Swal.fire({
//         icon: "error",
//         title: "Unable to load visits",
//         text: error?.response?.data?.message || "Failed to fetch visit data.",
//         confirmButtonColor: "#0ca77e",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSummary();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(fetchVisits, 250);
//     return () => clearTimeout(timer);
//   }, [activeTab, search, statusFilter, approvalFilter, locationFilter, page]);

//   useEffect(() => {
//     setPage(1);
//   }, [activeTab, search, statusFilter, approvalFilter, locationFilter]);

//   const openVisitDetail = async (id) => {
//     try {
//       setDetailLoading(true);
//       setSelectedVisit(null);
//       const response = await getVisitByIdApi(id);
//       if (response?.success) setSelectedVisit(response.data);
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Unable to load details",
//         text: error?.response?.data?.message || "Visit details not available.",
//         confirmButtonColor: "#0ca77e",
//       });
//     } finally {
//       setDetailLoading(false);
//       setActionMenu(null);
//     }
//   };

//   const handleViewVisit = (visit) => {
//     if (!visit?._id) {
//       return;
//     }

//     // ==========================================
//     // PARTNER DASHBOARD KE ANDAR
//     // Route change nahi hoga
//     // ==========================================

//     if (embedded) {
//       openVisitDetail(visit._id);

//       return;
//     }

//     // ==========================================
//     // STANDALONE VISIT MANAGEMENT
//     // URL route maintain hoga
//     // ==========================================

//     navigate(`/visit-management/${visit._id}`);
//   };

//   // useEffect(() => {
//   //   if (routeVisitId) {
//   //     openVisitDetail(routeVisitId);
//   //   }
//   // }, [routeVisitId]);
// useEffect(() => {
//   // Embedded Partner Dashboard me standalone route id use nahi karna
//   if (embedded) {
//     return;
//   }

//   if (routeVisitId) {
//     openVisitDetail(routeVisitId);
//   }
// }, [routeVisitId, embedded]);

// // ======================================================
// // PARTNER DASHBOARD SE SPECIFIC VISIT OPEN
// // Example:
// // /partnerdashboard?tab=visit&visitId=VISIT_MONGO_ID
// // ======================================================
// useEffect(() => {
//   if (!embedded || !initialVisitId) {
//     return;
//   }

//   openVisitDetail(initialVisitId);
// }, [embedded, initialVisitId]);
//   const refreshAll = async () => {
//     await Promise.all([fetchVisits(), fetchSummary()]);
//     if (selectedVisit?.visit?._id)
//       await openVisitDetail(selectedVisit.visit._id);
//   };

//   const reviewVisit = async (visit, action) => {
//     let remarks = "";
//     let approvedVisitAt;

//     if (action === "approve") {
//       const result = await Swal.fire({
//         title: "Approve Visit Request?",
//         html: `<div style="font-size:12px;color:#667085;line-height:1.6">Approve <strong>${visit.visitId}</strong> for <strong>${visit.propertySnapshot?.title || "property"}</strong>?</div>`,
//         input: "datetime-local",
//         inputValue: new Date(visit.requestedVisitAt).toISOString().slice(0, 16),
//         showCancelButton: true,
//         confirmButtonText: "Approve Visit",
//         confirmButtonColor: "#0ca77e",
//       });
//       if (!result.isConfirmed) return;
//       approvedVisitAt = result.value || visit.requestedVisitAt;
//     } else {
//       const result = await Swal.fire({
//         title: "Reject Visit Request?",
//         input: "textarea",
//         inputPlaceholder: "Reason for rejection...",
//         showCancelButton: true,
//         confirmButtonText: "Reject Request",
//         confirmButtonColor: "#d24a4a",
//         inputValidator: (value) =>
//           !value?.trim() ? "Please enter a reason." : undefined,
//       });
//       if (!result.isConfirmed) return;
//       remarks = result.value;
//     }

//     try {
//       setActionLoading(visit._id);
//       const response = await reviewVisitRequestApi(visit._id, {
//         action,
//         actor: getActor(),
//         remarks,
//         approvedVisitAt,
//       });
//       if (response?.success) {
//         await Swal.fire({
//           icon: "success",
//           title: action === "approve" ? "Visit Approved" : "Visit Rejected",
//           text: response.message,
//           confirmButtonColor: "#0ca77e",
//         });
//         await refreshAll();
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Action failed",
//         text: error?.response?.data?.message || "Unable to update visit.",
//         confirmButtonColor: "#0ca77e",
//       });
//     } finally {
//       setActionLoading("");
//     }
//   };

//   const updateStatus = async (visit, newStatus) => {
//     let payload = { status: newStatus, actor: getActor(), remarks: "" };

//     if (newStatus === "Rescheduled") {
//       const result = await Swal.fire({
//         title: "Reschedule Visit",
//         input: "datetime-local",
//         showCancelButton: true,
//         confirmButtonText: "Reschedule",
//         confirmButtonColor: "#7458b1",
//         inputValidator: (value) =>
//           !value ? "Select a new date/time." : undefined,
//       });
//       if (!result.isConfirmed) return;
//       payload.nextVisitAt = result.value;
//       payload.remarks = "Visit rescheduled by admin";
//     } else if (newStatus === "Follow-up") {
//       const result = await Swal.fire({
//         title: "Schedule Follow-up",
//         input: "datetime-local",
//         showCancelButton: true,
//         confirmButtonText: "Set Follow-up",
//         confirmButtonColor: "#0ca77e",
//       });
//       if (!result.isConfirmed) return;
//       payload.followUpAt = result.value || null;
//       payload.outcome = "Need Follow-up";
//       payload.remarks = "Follow-up required";
//     } else if (newStatus === "Completed") {
//       const result = await Swal.fire({
//         title: "Complete Visit",
//         input: "select",
//         inputOptions: {
//           Completed: "Completed",
//           Positive: "Positive",
//           "Strong Interest": "Strong Interest",
//           "Not Interested": "Not Interested",
//           "Need Follow-up": "Need Follow-up",
//         },
//         showCancelButton: true,
//         confirmButtonText: "Mark Completed",
//         confirmButtonColor: "#0ca77e",
//       });
//       if (!result.isConfirmed) return;
//       payload.outcome = result.value || "Completed";
//       payload.remarks = `Visit completed: ${payload.outcome}`;
//     } else {
//       const result = await Swal.fire({
//         title: `Mark as ${newStatus}?`,
//         input: "textarea",
//         inputPlaceholder: "Optional remarks...",
//         showCancelButton: true,
//         confirmButtonText: `Mark ${newStatus}`,
//         confirmButtonColor:
//           newStatus === "Cancelled" || newStatus === "No Show"
//             ? "#d24a4a"
//             : "#0ca77e",
//       });
//       if (!result.isConfirmed) return;
//       payload.remarks = result.value || "";
//     }

//     try {
//       setActionLoading(visit._id);
//       const response = await updateVisitStatusApi(visit._id, payload);
//       if (response?.success) {
//         await Swal.fire({
//           icon: "success",
//           title: "Visit Updated",
//           text: response.message,
//           confirmButtonColor: "#0ca77e",
//         });
//         await refreshAll();
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Update failed",
//         text:
//           error?.response?.data?.message || "Unable to update visit status.",
//         confirmButtonColor: "#0ca77e",
//       });
//     } finally {
//       setActionLoading("");
//       setActionMenu(null);
//     }
//   };

//   const toggleRow = (id) =>
//     setSelectedRows((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
//     );
//   const toggleAll = () => {
//     const ids = visits.map((v) => v._id);
//     const all = ids.length > 0 && ids.every((id) => selectedRows.includes(id));
//     setSelectedRows((prev) =>
//       all
//         ? prev.filter((id) => !ids.includes(id))
//         : [...new Set([...prev, ...ids])],
//     );
//   };

//   const exportReport = async () => {
//     try {
//       // Export the complete result for the CURRENT filters, not only the visible page.
//       const response = await getAdminVisitsApi({
//         tab: activeTab,
//         search: search.trim(),
//         status: statusFilter,
//         approvalStatus: approvalFilter,
//         location: locationFilter,
//         page: 1,
//         limit: 5000,
//       });

//       const exportVisits = response?.success ? response.data || [] : [];

//       if (!exportVisits.length) {
//         await Swal.fire({
//           icon: "info",
//           title: "No Data to Export",
//           text: "No visit records match the selected filters.",
//           confirmButtonColor: "#0ca77e",
//         });
//         return;
//       }

//       const rows = exportVisits.map((v) => ({
//         "Visit ID": v.visitId || "",
//         "Property Name": v.propertySnapshot?.title || "",
//         "Property ID": v.propertySnapshot?.propertyCode || "",
//         "Partner Name": v.partnerSnapshot?.name || "",
//         "Partner ID": v.partnerSnapshot?.partnerCode || "",
//         "Partner Type": v.partnerSnapshot?.partnerType || "",
//         Date: formatDate(v.requestedVisitAt),
//         Time: formatTime(v.requestedVisitAt),
//         City: v.propertySnapshot?.city || "",
//         Locality: v.propertySnapshot?.locality || "",
//         Approval: v.approvalStatus || "",
//         Status: v.status || "",
//         Outcome: v.outcome || "Pending",
//         "Request Notes": v.requestNotes || "",
//         "Admin Remarks": v.adminRemarks || "",
//       }));

//       const worksheet = XLSX.utils.json_to_sheet(rows);
//       worksheet["!cols"] = [
//         { wch: 14 },
//         { wch: 28 },
//         { wch: 15 },
//         { wch: 24 },
//         { wch: 15 },
//         { wch: 14 },
//         { wch: 14 },
//         { wch: 12 },
//         { wch: 18 },
//         { wch: 22 },
//         { wch: 15 },
//         { wch: 16 },
//         { wch: 22 },
//         { wch: 30 },
//         { wch: 30 },
//       ];

//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, "Visits");

//       const safeTab = activeTab.replace(/[^a-z0-9]/gi, "-").toLowerCase();
//       XLSX.writeFile(
//         workbook,
//         `visit-management-${safeTab}-${new Date().toISOString().slice(0, 10)}.xlsx`,
//       );
//     } catch (error) {
//       console.error("Excel export error:", error);
//       await Swal.fire({
//         icon: "error",
//         title: "Export Failed",
//         text:
//           error?.response?.data?.message || "Unable to export Excel report.",
//         confirmButtonColor: "#0ca77e",
//       });
//     }
//   };

//   const locations = ["All", ...(summary.locations || [])];

//   return (
//     <div className="min-h-screen overflow-x-hidden  px-4 py-4 sm:px-5 lg:px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//       <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
//         <div>
//           <h1 className="text-[20px] font-semibold tracking-[-0.3px] text-[#123942]">
//             Visit Management
//           </h1>
//           <p className="mt-1 text-[12px] text-[#849497]">
//             Approve partner visit requests and manage scheduled visits,
//             attendance, outcomes, reschedules and follow-ups.
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={refreshAll}
//             className="flex h-9 items-center gap-1.5 rounded-[6px] border border-[#bdd8d2] bg-white px-3 text-[12px] font-medium text-[#267d6d] hover:bg-[#f6fbfa]"
//           >
//             <RefreshCw size={11} /> Refresh
//           </button>
//           <button
//             onClick={exportReport}
//             className="flex h-9 items-center gap-1.5 rounded-[6px] bg-[#0ca77e] px-3 text-[12px] font-semibold text-white hover:bg-[#078f6d]"
//           >
//             <Download size={11} /> Export Report
//           </button>
//         </div>
//       </div>

//       <div className="mt-4 grid gap-2 xl:grid-cols-[1fr_1fr_1fr_2fr]">
//         <StatCard
//           title="Today's Visits"
//           value={summary.today || 0}
//           subtitle={`${summary.pendingApproval || 0} pending approvals`}
//           icon={CalendarDays}
//           onClick={() => setActiveTab("Today")}
//         />
//         <StatCard
//           title="Upcoming"
//           value={summary.upcoming || 0}
//           subtitle="Approved / requested future visits"
//           icon={Clock3}
//           type="blue"
//           onClick={() => setActiveTab("Upcoming")}
//         />
//         <StatCard
//           title="Completed"
//           value={summary.completed || 0}
//           subtitle="All completed visits"
//           icon={CheckCircle2}
//           onClick={() => setActiveTab("Completed")}
//         />
//         <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
//           <MiniMetric
//             label="Cancelled"
//             value={summary.cancelled || 0}
//             danger
//             onClick={() => setActiveTab("Cancelled")}
//           />
//           <MiniMetric
//             label="No Show"
//             value={summary.noShow || 0}
//             danger
//             onClick={() => setActiveTab("No Show")}
//           />
//           <MiniMetric
//             label="Rescheduled"
//             value={summary.rescheduled || 0}
//             onClick={() => setActiveTab("Rescheduled")}
//           />
//           <MiniMetric
//             label="Follow-up"
//             value={summary.followUp || 0}
//             onClick={() => setActiveTab("Follow-up")}
//           />
//         </div>
//       </div>

//       <div className="mt-4 flex items-center justify-between gap-3 border-b border-[#dde7e5]">
//         <div className="flex min-w-0 gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//           {TAB_VALUES.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => {
//                 setActiveTab(tab);
//                 setPage(1);
//               }}
//               className={`relative min-w-max pb-2.5 text-[12px] font-medium ${activeTab === tab ? "text-[#107866]" : "text-[#8b999c]"}`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#087f6c]" />
//               )}
//             </button>
//           ))}
//         </div>
//         <div className="mb-2 flex items-center gap-1.5 rounded-[4px] border border-[#dce5e3] bg-white px-2.5 py-1.5 text-[11px] text-[#667a7e]">
//           <SlidersHorizontal size={9} /> Filters
//         </div>
//       </div>

//       <div className="mt-3 flex flex-col gap-2 lg:flex-row">
//         <div className="relative flex-1">
//           <Search
//             size={12}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8d9b9e]"
//           />
//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search visit ID, property, partner, location..."
//             className="h-9 w-full rounded-[6px] border border-[#dce6e4] bg-white pl-8 pr-3 text-[12px] text-[#42595f] outline-none placeholder:text-[#a1adaf] focus:border-[#78b8ab]"
//           />
//         </div>
//         <SelectFilter
//           value={statusFilter}
//           onChange={setStatusFilter}
//           options={STATUS_OPTIONS}
//           label="All Statuses"
//         />
//         <SelectFilter
//           value={approvalFilter}
//           onChange={setApprovalFilter}
//           options={["All", "Pending", "Approved", "Rejected"]}
//           label="All Approvals"
//         />
//         <SelectFilter
//           value={locationFilter}
//           onChange={setLocationFilter}
//           options={locations}
//           label="All Locations"
//         />
//       </div>

//       <div className="mt-3 overflow-visible rounded-[8px] border border-[#dce7e4] bg-white">
//         <div className="w-full overflow-visible">
//           <table className="w-full table-fixed">
//             <colgroup>
//               <col style={{ width: "3%" }} />
//               <col style={{ width: "8%" }} />
//               <col style={{ width: "17%" }} />
//               <col style={{ width: "14%" }} />
//               <col style={{ width: "10%" }} />
//               <col style={{ width: "10%" }} />
//               <col style={{ width: "11%" }} />
//               <col style={{ width: "8%" }} />
//               <col style={{ width: "8%" }} />
//               <col style={{ width: "11%" }} />
//             </colgroup>
//             <thead>
//               <tr className="bg-[#073c5c] text-white">
//                 <th className="w-8 px-3 py-3 text-left">
//                   <input
//                     type="checkbox"
//                     onChange={toggleAll}
//                     checked={
//                       visits.length > 0 &&
//                       visits.every((v) => selectedRows.includes(v._id))
//                     }
//                   />
//                 </th>
//                 {[
//                   "Visit ID",
//                   "Property",
//                   "Requested By Partner",
//                   "Requested Date / Time",
//                   "Location",
//                   "Approval",
//                   "Status",
//                   "Outcome",
//                   "Actions",
//                 ].map((h) => (
//                   <th
//                     key={h}
//                     className="px-2 py-3 text-left text-[12px] font-medium"
//                   >
//                     {h}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan={10} className="py-16">
//                     <div className="flex items-center justify-center gap-2 text-[12px] text-[#6d7f82]">
//                       <LoaderCircle
//                         size={17}
//                         className="animate-spin text-[#0ca77e]"
//                       />{" "}
//                       Loading visits...
//                     </div>
//                   </td>
//                 </tr>
//               ) : visits.length ? (
//                 visits.map((visit) => (
//                   <tr
//                     key={visit._id}
//                     className="border-b border-[#edf2f1] transition last:border-b-0 hover:bg-[#f9fcfb]"
//                   >
//                     <td className="px-3 py-3">
//                       <input
//                         type="checkbox"
//                         checked={selectedRows.includes(visit._id)}
//                         onChange={() => toggleRow(visit._id)}
//                       />
//                     </td>
//                     <td className="px-2 py-3">
//                       <p className="text-[12px] font-bold text-[#0a7a67]">
//                         {visit.visitId}
//                       </p>
//                       <p className="mt-1 text-[10px] text-[#98a5a8]">
//                         {visit.approvalStatus === "Pending"
//                           ? "Needs review"
//                           : "Visit record"}
//                       </p>
//                     </td>

//                     <td className="px-2 py-3">
//                       <div className="flex w-full items-start ">
//                         <div className="min-w-0">
//                           {/* PROPERTY NAME */}

//                           <p
//                             className="
//           line-clamp-2
//           break-words
//           text-[13px]
//           font-bold
//           text-[#3b555b]
//         "
//                           >
//                             {visit.propertySnapshot?.title || "-"}
//                           </p>

//                           {/* PROPERTY ID */}

//                           <p
//                             className="
//           mt-1
//           text-[11px]
//           font-bold
//           text-[#0a8d74]
//         "
//                           >
//                             {visit.propertySnapshot?.propertyCode || "-"}
//                           </p>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-2 py-3">
//                       <div className="w-full">
//                         <p className="line-clamp-2 break-words text-[13px] font-bold text-[#40585f]">
//                           {visit.partnerSnapshot?.name || "-"}
//                         </p>
//                         <p className="mt-1 text-[11px] font-bold text-[#0a8d74]">
//                           {visit.partnerSnapshot?.partnerCode || "-"}
//                         </p>
//                         <p className="mt-1 text-[10px] font-medium capitalize text-[#98a5a8]">
//                           {visit.partnerSnapshot?.partnerType || "-"}
//                         </p>
//                       </div>
//                     </td>
//                     <td className="px-2 py-3">
//                       <p className="text-[12px] font-semibold text-[#465f64]">
//                         {formatDate(visit.requestedVisitAt)}
//                       </p>
//                       <p className="mt-1 text-[11px] text-[#98a5a8]">
//                         {formatTime(visit.requestedVisitAt)}
//                       </p>
//                     </td>
//                     <td className="px-2 py-3">
//                       <div className="flex w-full items-start gap-1">
//                         <MapPin size={9} className="mt-[1px] text-[#6c8984]" />
//                         <div>
//                           <p className="text-[12px] font-semibold text-[#4e676c]">
//                             {visit.propertySnapshot?.city || "-"}
//                           </p>
//                           <p className="mt-1 text-[11px] text-[#98a5a8]">
//                             {visit.propertySnapshot?.locality || "-"}
//                           </p>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-2 py-3">
//                       <ApprovalBadge status={visit.approvalStatus} />
//                     </td>
//                     <td className="px-2 py-3">
//                       <StatusBadge status={visit.status} />
//                     </td>
//                     <td className="px-2 py-3">
//                       <p className="break-words text-[12px] text-[#687b7f]">
//                         {visit.outcome || "Pending"}
//                       </p>
//                     </td>
//                     <td
//                       className="relative px-2 py-3"
//                       data-visit-action-menu
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <div className="flex items-center gap-1">
//                         {/* <button
//                           onClick={() => navigate(`/visit-management/${visit._id}`)}
//                           className="flex h-8 items-center gap-1.5 rounded-[6px] border border-[#cfe2de] bg-white px-2.5 text-[11px] font-semibold text-[#167c69] hover:bg-[#f1faf7]"
//                         >
//                           <Eye size={12} /> View
//                         </button> */}
//                         <button
//                           onClick={() => handleViewVisit(visit)}
//                           className="flex h-8 items-center gap-1.5 rounded-[6px] border border-[#cfe2de] bg-white px-2.5 text-[11px] font-semibold text-[#167c69] hover:bg-[#f1faf7]"
//                         >
//                           <Eye size={12} />
//                           View
//                         </button>
//                         {visit.approvalStatus === "Pending" && (
//                           <>
//                             <button
//                               disabled={actionLoading === visit._id}
//                               onClick={() => reviewVisit(visit, "approve")}
//                               className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#e7f8f2] text-[#138266]"
//                               title="Approve"
//                             >
//                               <Check size={11} />
//                             </button>
//                             <button
//                               disabled={actionLoading === visit._id}
//                               onClick={() => reviewVisit(visit, "reject")}
//                               className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#fff0f0] text-[#cf4e4e]"
//                               title="Reject"
//                             >
//                               <X size={11} />
//                             </button>
//                           </>
//                         )}
//                         <button
//                           onClick={() =>
//                             setActionMenu(
//                               actionMenu === visit._id ? null : visit._id,
//                             )
//                           }
//                           className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#dce5e3] text-[#60777b] hover:bg-[#f5f8f7]"
//                         >
//                           <MoreVertical size={15} />
//                         </button>
//                       </div>
//                       {actionMenu === visit._id && (
//                         <div className="absolute right-2 top-11 z-[150] w-[190px] overflow-hidden rounded-[10px] border border-[#dfe7e5] bg-white py-1.5 shadow-[0_14px_35px_rgba(15,23,42,0.18)]">
//                           {[
//                             { label: "Completed", icon: CheckCircle2 },
//                             { label: "Cancelled", icon: XCircle },
//                             { label: "No Show", icon: UserX },
//                             { label: "Rescheduled", icon: RotateCcw },
//                             { label: "Follow-up", icon: MessageSquareMore },
//                           ].map(({ label, icon: Icon }) => (
//                             <button
//                               key={label}
//                               onClick={() => updateStatus(visit, label)}
//                               className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[12px] font-medium text-[#52686e] hover:bg-[#f5faf8]"
//                             >
//                               <Icon size={11} />
//                               {label}
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={10} className="py-14 text-center">
//                     <Search size={20} className="mx-auto text-[#a1aeac]" />
//                     <p className="mt-2 text-[12px] font-medium text-[#50676c]">
//                       No visits found
//                     </p>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="flex flex-col gap-2 border-t border-[#e8efed] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-[8px] text-[#8f9c9f]">
//             Showing {total === 0 ? 0 : (page - 1) * itemsPerPage + 1} to{" "}
//             {Math.min(page * itemsPerPage, total)} of {total} entries
//           </p>
//           <div className="flex items-center gap-1">
//             <button
//               disabled={page === 1}
//               onClick={() => setPage((p) => Math.max(1, p - 1))}
//               className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#dce5e3] bg-white text-[#63777b] disabled:opacity-40"
//             >
//               <ChevronLeft size={11} />
//             </button>
//             <button className="flex h-7 min-w-7 items-center justify-center rounded-[4px] bg-[#073c5c] px-2 text-[12px] text-white">
//               {page}
//             </button>
//             <button
//               disabled={page >= totalPages}
//               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//               className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#dce5e3] bg-white text-[#63777b] disabled:opacity-40"
//             >
//               <ChevronRight size={11} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {(selectedVisit || detailLoading) && (
//         // <VisitDetailDrawer
//         //   data={selectedVisit}
//         //   loading={detailLoading}
//         //   onClose={() => {
//         //     setSelectedVisit(null);
//         //     if (routeVisitId) navigate("/visit-management");
//         //   }}
//         //   onRefresh={refreshAll}
//         // />
//         <VisitDetailDrawer
//   data={
//     selectedVisit
//   }

//   loading={
//     detailLoading
//   }

//   onClose={() => {

//     setSelectedVisit(
//       null
//     );

//     // ========================================
//     // Partner Dashboard me ho to
//     // bilkul navigate mat karo
//     // ========================================

//     if (embedded) {
//       onEmbeddedDetailClose?.();
//       return;
//     }

//     // ========================================
//     // Standalone detail route se aaye ho
//     // tab normal list par jao
//     // ========================================

//     if (routeVisitId) {
//       navigate(
//         "/visit-management",
//         {
//           replace: true,
//         }
//       );
//     }

//   }}

//   onRefresh={
//     refreshAll
//   }
// />
//       )}
//     </div>
//   );
// }

// function VisitDetailDrawer({ data, loading, onClose }) {
//   const navigate = useNavigate();
//   const visit = data?.visit;
//   const property = data?.property;
//   const partner = data?.partner;
//   const history = data?.visitHistory || [];

//   const propertyMongoId =
//     property?._id || visit?.propertyId?._id || visit?.propertyId || null;

//   const partnerMongoId =
//     partner?._id || visit?.partnerId?._id || visit?.partnerId || null;

//   return (
//     <div className="fixed inset-0 z-[999]">
//       <div
//         onClick={onClose}
//         className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"
//       />
//       <div className="absolute bottom-0 right-0 top-0 w-full max-w-[580px] overflow-y-auto bg-[#f6faf9] shadow-[-12px_0_35px_rgba(15,23,42,0.13)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//         <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#e3ebe9] bg-white px-5 py-4">
//           <div>
//             <h2 className="text-[18px] font-semibold text-[#173b45]">
//               Visit Details
//             </h2>
//             <p className="mt-1 text-[12px] text-[#8a9a9d]">
//               Property, assigned partner and visit history
//             </p>
//           </div>
//           <button
//             onClick={onClose}
//             className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f6f5] text-[#63777b]"
//           >
//             <X size={15} />
//           </button>
//         </div>
//         {loading ? (
//           <div className="flex h-[400px] items-center justify-center">
//             <LoaderCircle size={26} className="animate-spin text-[#0ca77e]" />
//           </div>
//         ) : visit ? (
//           <div className="space-y-4 p-5">
//             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
//               <div className="flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-[11px] font-bold text-[#0b8a72]">
//                     {visit.visitId}
//                   </p>
//                   <h3 className="mt-1 text-[18px] font-semibold text-[#173c46]">
//                     {visit.propertySnapshot?.title || property?.title}
//                   </h3>
//                   <p className="mt-1 text-[12px] text-[#819194]">
//                     {formatDate(visit.requestedVisitAt)} •{" "}
//                     {formatTime(visit.requestedVisitAt)}
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-end gap-2">
//                   <StatusBadge status={visit.status} />
//                   <ApprovalBadge status={visit.approvalStatus} />
//                 </div>
//               </div>
//               <div className="mt-4 grid grid-cols-2 gap-2">
//                 <DetailBox label="Outcome" value={visit.outcome} />
//                 <DetailBox
//                   label="Location"
//                   value={`${visit.propertySnapshot?.locality || ""}, ${visit.propertySnapshot?.city || ""}`}
//                 />
//                 <DetailBox
//                   label="Request Notes"
//                   value={visit.requestNotes || "-"}
//                 />
//                 <DetailBox
//                   label="Admin Remarks"
//                   value={visit.adminRemarks || "-"}
//                 />
//               </div>
//             </div>

//             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
//               <SectionTitle icon={Building2} title="View Property" />
//               <div className="flex gap-3">
//                 {property?.images?.[0]?.url ? (
//                   <img
//                     src={property.images[0].url}
//                     alt=""
//                     className="h-20 w-24 rounded-lg object-cover"
//                   />
//                 ) : (
//                   <div className="flex h-20 w-24 items-center justify-center rounded-lg bg-[#eef7f4] text-[#138b75]">
//                     <Building2 size={24} />
//                   </div>
//                 )}
//                 <div className="min-w-0 flex-1">
//                   <p className="text-[13px] font-semibold text-[#31515a]">
//                     {property?.title || visit.propertySnapshot?.title}
//                   </p>
//                   <p className="mt-1 text-[12px] font-semibold text-[#0b8a72]">
//                     {property?.propertyId ||
//                       visit.propertySnapshot?.propertyCode}
//                   </p>
//                   <p className="mt-2 text-[12px] text-[#7d8e92]">
//                     {property?.category || "-"} •{" "}
//                     {property?.propertySize || "-"} {property?.sizeUnit || ""}
//                   </p>
//                   <p className="mt-1 text-[12px] text-[#7d8e92]">
//                     {property?.address ||
//                       visit.propertySnapshot?.address ||
//                       "-"}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 disabled={!propertyMongoId}
//                 onClick={() =>
//                   propertyMongoId &&
//                   navigate(`/property-management/${propertyMongoId}`)
//                 }
//                 className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#073c5c] px-4 text-[12px] font-semibold text-white transition hover:bg-[#052f49] disabled:cursor-not-allowed disabled:opacity-40"
//               >
//                 <ExternalLink size={14} />
//                 View Property
//               </button>
//             </div>

//             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
//               <SectionTitle icon={UserRound} title="View Partner" />
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf8f4] text-[13px] font-bold text-[#138b75]">
//                   {getInitials(partner?.name || visit.partnerSnapshot?.name)}
//                 </div>
//                 <div>
//                   <p className="text-[13px] font-semibold text-[#31515a]">
//                     {partner?.name || visit.partnerSnapshot?.name}
//                   </p>
//                   <p className="mt-1 text-[12px] font-semibold text-[#0b8a72]">
//                     {partner?.partnerId || visit.partnerSnapshot?.partnerCode}
//                   </p>
//                   <p className="mt-1 text-[12px] capitalize text-[#8a989c]">
//                     {partner?.partnerType || visit.partnerSnapshot?.partnerType}
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-3 grid grid-cols-2 gap-2">
//                 <DetailBox
//                   icon={Phone}
//                   label="Phone"
//                   value={partner?.phone || visit.partnerSnapshot?.phone}
//                 />
//                 <DetailBox
//                   icon={Mail}
//                   label="Email"
//                   value={partner?.email || visit.partnerSnapshot?.email}
//                 />
//                 <DetailBox
//                   icon={MapPin}
//                   label="City"
//                   value={partner?.location?.city || "-"}
//                 />
//                 <DetailBox
//                   label="Verified"
//                   value={partner?.isVerified ? "Yes" : "No"}
//                 />
//               </div>

//               <button
//                 type="button"
//                 disabled={!partnerMongoId}
//                 onClick={() =>
//                   partnerMongoId && navigate(`/partners/${partnerMongoId}`)
//                 }
//                 className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#0ca77e] px-4 text-[12px] font-semibold text-white transition hover:bg-[#078f6d] disabled:cursor-not-allowed disabled:opacity-40"
//               >
//                 <ExternalLink size={14} />
//                 View Partner
//               </button>
//             </div>

//             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
//               <SectionTitle icon={History} title="Visit History" />
//               <div className="space-y-2">
//                 {history.length ? (
//                   history.map((item) => (
//                     <div
//                       key={item._id}
//                       className="rounded-lg border border-[#e8efed] bg-[#fbfdfc] p-3"
//                     >
//                       <div className="flex items-start justify-between gap-2">
//                         <div>
//                           <p className="text-[9px] font-semibold text-[#31515a]">
//                             {item.visitId}
//                           </p>
//                           <p className="mt-1 text-[11px] text-[#8b999c]">
//                             {formatDate(item.requestedVisitAt)} •{" "}
//                             {formatTime(item.requestedVisitAt)}
//                           </p>
//                         </div>
//                         <StatusBadge status={item.status} />
//                       </div>
//                       <p className="mt-2 text-[12px] text-[#63777b]">
//                         Outcome: {item.outcome || "Pending"}
//                       </p>
//                       {item.adminRemarks && (
//                         <p className="mt-1 text-[12px] text-[#8a999c]">
//                           {item.adminRemarks}
//                         </p>
//                       )}
//                     </div>
//                   ))
//                 ) : (
//                   <p className="py-6 text-center text-[12px] text-[#95a3a6]">
//                     No previous visit history.
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
//               <SectionTitle icon={CalendarClock} title="Audit Timeline" />
//               <div className="space-y-3">
//                 {(visit.history || [])
//                   .slice()
//                   .reverse()
//                   .map((item) => (
//                     <div key={item._id} className="flex gap-3">
//                       <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0ca77e]" />
//                       <div>
//                         <p className="text-[9px] font-semibold text-[#40585f]">
//                           {item.action}
//                         </p>
//                         <p className="mt-1 text-[11px] text-[#8b999c]">
//                           {formatDate(item.updatedAt)} •{" "}
//                           {formatTime(item.updatedAt)} •{" "}
//                           {item.updatedBy?.name || "-"}
//                         </p>
//                         {item.remarks && (
//                           <p className="mt-1 text-[12px] text-[#63777b]">
//                             {item.remarks}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex h-[400px] items-center justify-center text-[12px] text-[#8a999c]">
//             Visit detail not available.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function SectionTitle({ icon: Icon, title }) {
//   return (
//     <div className="mb-3 flex items-center gap-2">
//       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eaf8f4] text-[#138b75]">
//         <Icon size={13} />
//       </div>
//       <h4 className="text-[12px] font-semibold text-[#31515a]">{title}</h4>
//       <div className="h-px flex-1 bg-[#edf2f1]" />
//     </div>
//   );
// }

// function DetailBox({ icon: Icon, label, value }) {
//   return (
//     <div className="rounded-lg border border-[#edf1f0] bg-[#fbfdfc] p-3">
//       <div className="flex gap-2">
//         {Icon && <Icon size={12} className="mt-0.5 text-[#159078]" />}
//         <div className="min-w-0">
//           <p className="text-[9px] uppercase tracking-wide text-[#98a5a8]">
//             {label}
//           </p>
//           <p className="mt-1 break-words text-[12px] font-medium text-[#52686e]">
//             {value || "-"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function getInitials(name = "") {
//   return (
//     String(name)
//       .trim()
//       .split(" ")
//       .filter(Boolean)
//       .map((x) => x[0]?.toUpperCase())
//       .join("")
//       .slice(0, 2) || "P"
//   );
// }



import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as XLSX from "xlsx";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  MapPin,
  Search,
  SlidersHorizontal,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Building2,
  Eye,
  UserRound,
  History,
  Check,
  X,
  MoreVertical,
  RefreshCw,
  CalendarClock,
  UserX,
  RotateCcw,
  MessageSquareMore,
  LoaderCircle,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import Swal from "sweetalert2";
import {
  getVisitSummaryApi,
  getAdminVisitsApi,
  getVisitByIdApi,
  reviewVisitRequestApi,
  updateVisitStatusApi,
} from "../../../Services/visitService";

const TAB_VALUES = [
  "Today",
  "Upcoming",
  "Completed",
  "Cancelled",
  "No Show",
  "Rescheduled",
  "Follow-up",
];

const STATUS_OPTIONS = [
  "All",
  "Requested",
  "Upcoming",
  "Completed",
  "Cancelled",
  "No Show",
  "Rescheduled",
  "Follow-up",
];

const getLocalUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user") || "{}");
  } catch {
    return {};
  }
};

const getActor = () => {
  const user = getLocalUser();
  return {
    userId: user?.id || null,
    name: user?.name || "Admin",
    role: user?.role
      ? `${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`
      : "Admin",
  };
};

const formatDate = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatTime = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const StatusBadge = ({ status }) => {
  const styles = {
    Requested: "bg-[#fff8e8] text-[#b87818] border-[#f2dfb8]",
    Upcoming: "bg-[#eaf5ff] text-[#3978a8] border-[#cfe4f4]",
    Completed: "bg-[#e8f8f1] text-[#16825f] border-[#ccebdd]",
    Cancelled: "bg-[#fff0f0] text-[#d24a4a] border-[#efd0d0]",
    "No Show": "bg-[#fff5e8] text-[#bc7622] border-[#edd8b7]",
    Rescheduled: "bg-[#f2efff] text-[#7458b1] border-[#dfd7f5]",
    "Follow-up": "bg-[#eefbf7] text-[#117c68] border-[#cae9df]",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap ${styles[status] || "bg-gray-50 text-gray-500 border-gray-200"}`}
    >
      {status || "-"}
    </span>
  );
};

const ApprovalBadge = ({ status }) => {
  const normalizedStatus = status || "Pending";

  const styles = {
    Pending: "bg-[#fff8e8] text-[#b87818] border-[#f2dfb8]",

    Approved: "bg-[#e8f8f1] text-[#16825f] border-[#ccebdd]",

    Rejected: "bg-[#fff0f0] text-[#d24a4a] border-[#efd0d0]",
  };

  const labels = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1
        rounded-full
        border
        px-2.5
        py-1
        text-[11px]
        font-semibold
        whitespace-nowrap
        ${styles[normalizedStatus] || styles.Pending}
      `}
    >
      {normalizedStatus === "Approved" && <Check size={9} />}

      {normalizedStatus === "Rejected" && <X size={9} />}

      {normalizedStatus === "Pending" && <Clock3 size={9} />}

      {labels[normalizedStatus] || normalizedStatus}
    </span>
  );
};
const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  type = "default",
  onClick,
}) => {
  const styles = {
    default: {
      border: "border-[#dce8e5]",
      iconBg: "bg-[#ecf8f4]",
      icon: "text-[#139278]",
      value: "text-[#183d47]",
    },
    blue: {
      border: "border-[#dce8ef]",
      iconBg: "bg-[#eef5ff]",
      icon: "text-[#4a84c1]",
      value: "text-[#294d5a]",
    },
    amber: {
      border: "border-[#eedfbd]",
      iconBg: "bg-[#fff3d7]",
      icon: "text-[#c78c2d]",
      value: "text-[#795c25]",
    },
  };
  const current = styles[type] || styles.default;
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-[9px] border ${current.border} bg-white px-4 py-3 text-left transition hover:-translate-y-[1px] hover:shadow-sm`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[8px] font-semibold uppercase tracking-[0.3px] text-[#7f9094]">
            {title}
          </p>
          <p
            className={`mt-2 text-[24px] font-semibold leading-none ${current.value}`}
          >
            {value}
          </p>
          {subtitle && (
            <p className="mt-1.5 text-[11px] text-[#96a2a5]">{subtitle}</p>
          )}
        </div>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-[7px] ${current.iconBg}`}
        >
          <Icon size={14} className={current.icon} />
        </div>
      </div>
    </button>
  );
};

const MiniMetric = ({ label, value, danger, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-[7px] border border-[#e2ebe9] bg-white px-3 py-2 text-left transition hover:bg-[#fbfdfc]"
  >
    <p className="text-[7px] uppercase tracking-[0.2px] text-[#8c9a9d]">
      {label}
    </p>
    <p
      className={`mt-1 text-[14px] font-semibold ${danger ? "text-[#d45353]" : "text-[#34525a]"}`}
    >
      {value}
    </p>
  </button>
);

const SelectFilter = ({ value, onChange, options, label }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="h-9 min-w-[125px] rounded-[6px] border border-[#dce6e4] bg-white px-3 text-[12px] text-[#63767b] outline-none focus:border-[#7ab9ac]"
  >
    {options.map((item) => (
      <option key={item} value={item}>
        {item === "All" ? label : item}
      </option>
    ))}
  </select>
);

// export default function VisitManagement() {
//   const navigate = useNavigate();
//   const { id: routeVisitId } = useParams();
export default function VisitManagement({
  embedded = false,
  initialVisitId = null,
  onEmbeddedDetailClose,
}) {
  const navigate = useNavigate();

  const { id: routeVisitId } = useParams();
  const [visits, setVisits] = useState([]);
  const [summary, setSummary] = useState({
    today: 0,
    upcoming: 0,
    completed: 0,
    cancelled: 0,
    noShow: 0,
    rescheduled: 0,
    followUp: 0,
    pendingApproval: 0,
    locations: [],
  });
  const [activeTab, setActiveTab] = useState("Today");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [approvalFilter, setApprovalFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedVisit, setSelectedVisit] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [actionMenu, setActionMenu] = useState(null);
  const [actionLoading, setActionLoading] = useState("");
  const itemsPerPage = 10;

  // Close action menu when user clicks anywhere outside it or presses Escape
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("[data-visit-action-menu]")) {
        setActionMenu(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setActionMenu(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const fetchSummary = async () => {
    try {
      const response = await getVisitSummaryApi();
      if (response?.success) setSummary(response.data || {});
    } catch (error) {
      console.error("Visit summary error:", error);
    }
  };

  const fetchVisits = async () => {
    try {
      setLoading(true);
      const response = await getAdminVisitsApi({
        tab: activeTab,
        search: search.trim(),
        status: statusFilter,
        approvalStatus: approvalFilter,
        location: locationFilter,
        page,
        limit: itemsPerPage,
      });
      if (response?.success) {
        setVisits(response.data || []);
        setTotal(response.total || 0);
        setTotalPages(response.totalPages || 1);
      } else {
        setVisits([]);
      }
    } catch (error) {
      setVisits([]);
      Swal.fire({
        icon: "error",
        title: "Unable to load visits",
        text: error?.response?.data?.message || "Failed to fetch visit data.",
        confirmButtonColor: "#0ca77e",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  useEffect(() => {
    const timer = setTimeout(fetchVisits, 250);
    return () => clearTimeout(timer);
  }, [activeTab, search, statusFilter, approvalFilter, locationFilter, page]);

  useEffect(() => {
    setPage(1);
  }, [activeTab, search, statusFilter, approvalFilter, locationFilter]);

  const openVisitDetail = async (id) => {
    try {
      setDetailLoading(true);
      setSelectedVisit(null);
      const response = await getVisitByIdApi(id);
      if (response?.success) setSelectedVisit(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unable to load details",
        text: error?.response?.data?.message || "Visit details not available.",
        confirmButtonColor: "#0ca77e",
      });
    } finally {
      setDetailLoading(false);
      setActionMenu(null);
    }
  };

  const handleViewVisit = (visit) => {
    if (!visit?._id) {
      return;
    }

    // ==========================================
    // PARTNER DASHBOARD KE ANDAR
    // Route change nahi hoga
    // ==========================================

    if (embedded) {
      openVisitDetail(visit._id);

      return;
    }

    // ==========================================
    // STANDALONE VISIT MANAGEMENT
    // URL route maintain hoga
    // ==========================================

    navigate(`/visit-management/${visit._id}`);
  };

  // useEffect(() => {
  //   if (routeVisitId) {
  //     openVisitDetail(routeVisitId);
  //   }
  // }, [routeVisitId]);
useEffect(() => {
  // Embedded Partner Dashboard me standalone route id use nahi karna
  if (embedded) {
    return;
  }

  if (routeVisitId) {
    openVisitDetail(routeVisitId);
  }
}, [routeVisitId, embedded]);

// ======================================================
// PARTNER DASHBOARD SE SPECIFIC VISIT OPEN
// Example:
// /partnerdashboard?tab=visit&visitId=VISIT_MONGO_ID
// ======================================================
useEffect(() => {
  if (!embedded || !initialVisitId) {
    return;
  }

  openVisitDetail(initialVisitId);
}, [embedded, initialVisitId]);
  const refreshAll = async () => {
    await Promise.all([fetchVisits(), fetchSummary()]);
    if (selectedVisit?.visit?._id)
      await openVisitDetail(selectedVisit.visit._id);
  };

  const reviewVisit = async (visit, action) => {
    let remarks = "";
    let approvedVisitAt;

    if (action === "approve") {
      const result = await Swal.fire({
        title: "Approve Visit Request?",
        html: `<div style="font-size:12px;color:#667085;line-height:1.6">Approve <strong>${visit.visitId}</strong> for <strong>${visit.propertySnapshot?.title || "property"}</strong>?</div>`,
        input: "datetime-local",
        inputValue: new Date(visit.requestedVisitAt).toISOString().slice(0, 16),
        showCancelButton: true,
        confirmButtonText: "Approve Visit",
        confirmButtonColor: "#0ca77e",
      });
      if (!result.isConfirmed) return;
      approvedVisitAt = result.value || visit.requestedVisitAt;
    } else {
      const result = await Swal.fire({
        title: "Reject Visit Request?",
        input: "textarea",
        inputPlaceholder: "Reason for rejection...",
        showCancelButton: true,
        confirmButtonText: "Reject Request",
        confirmButtonColor: "#d24a4a",
        inputValidator: (value) =>
          !value?.trim() ? "Please enter a reason." : undefined,
      });
      if (!result.isConfirmed) return;
      remarks = result.value;
    }

    try {
      setActionLoading(visit._id);
      const response = await reviewVisitRequestApi(visit._id, {
        action,
        actor: getActor(),
        remarks,
        approvedVisitAt,
      });
      if (response?.success) {
        await Swal.fire({
          icon: "success",
          title: action === "approve" ? "Visit Approved" : "Visit Rejected",
          text: response.message,
          confirmButtonColor: "#0ca77e",
        });
        await refreshAll();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Action failed",
        text: error?.response?.data?.message || "Unable to update visit.",
        confirmButtonColor: "#0ca77e",
      });
    } finally {
      setActionLoading("");
    }
  };

  const updateStatus = async (visit, newStatus) => {
    let payload = { status: newStatus, actor: getActor(), remarks: "" };

    if (newStatus === "Rescheduled") {
      const result = await Swal.fire({
        title: "Reschedule Visit",
        input: "datetime-local",
        showCancelButton: true,
        confirmButtonText: "Reschedule",
        confirmButtonColor: "#7458b1",
        inputValidator: (value) =>
          !value ? "Select a new date/time." : undefined,
      });
      if (!result.isConfirmed) return;
      payload.nextVisitAt = result.value;
      payload.remarks = "Visit rescheduled by admin";
    } else if (newStatus === "Follow-up") {
      const result = await Swal.fire({
        title: "Schedule Follow-up",
        input: "datetime-local",
        showCancelButton: true,
        confirmButtonText: "Set Follow-up",
        confirmButtonColor: "#0ca77e",
      });
      if (!result.isConfirmed) return;
      payload.followUpAt = result.value || null;
      payload.outcome = "Need Follow-up";
      payload.remarks = "Follow-up required";
    } else if (newStatus === "Completed") {
      const result = await Swal.fire({
        title: "Complete Visit",
        input: "select",
        inputOptions: {
          Completed: "Completed",
          Positive: "Positive",
          "Strong Interest": "Strong Interest",
          "Not Interested": "Not Interested",
          "Need Follow-up": "Need Follow-up",
        },
        showCancelButton: true,
        confirmButtonText: "Mark Completed",
        confirmButtonColor: "#0ca77e",
      });
      if (!result.isConfirmed) return;
      payload.outcome = result.value || "Completed";
      payload.remarks = `Visit completed: ${payload.outcome}`;
    } else {
      const result = await Swal.fire({
        title: `Mark as ${newStatus}?`,
        input: "textarea",
        inputPlaceholder: "Optional remarks...",
        showCancelButton: true,
        confirmButtonText: `Mark ${newStatus}`,
        confirmButtonColor:
          newStatus === "Cancelled" || newStatus === "No Show"
            ? "#d24a4a"
            : "#0ca77e",
      });
      if (!result.isConfirmed) return;
      payload.remarks = result.value || "";
    }

    try {
      setActionLoading(visit._id);
      const response = await updateVisitStatusApi(visit._id, payload);
      if (response?.success) {
        await Swal.fire({
          icon: "success",
          title: "Visit Updated",
          text: response.message,
          confirmButtonColor: "#0ca77e",
        });
        await refreshAll();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update failed",
        text:
          error?.response?.data?.message || "Unable to update visit status.",
        confirmButtonColor: "#0ca77e",
      });
    } finally {
      setActionLoading("");
      setActionMenu(null);
    }
  };

  const toggleRow = (id) =>
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  const toggleAll = () => {
    const ids = visits.map((v) => v._id);
    const all = ids.length > 0 && ids.every((id) => selectedRows.includes(id));
    setSelectedRows((prev) =>
      all
        ? prev.filter((id) => !ids.includes(id))
        : [...new Set([...prev, ...ids])],
    );
  };

  const exportReport = async () => {
    try {
      // Export the complete result for the CURRENT filters, not only the visible page.
      const response = await getAdminVisitsApi({
        tab: activeTab,
        search: search.trim(),
        status: statusFilter,
        approvalStatus: approvalFilter,
        location: locationFilter,
        page: 1,
        limit: 5000,
      });

      const exportVisits = response?.success ? response.data || [] : [];

      if (!exportVisits.length) {
        await Swal.fire({
          icon: "info",
          title: "No Data to Export",
          text: "No visit records match the selected filters.",
          confirmButtonColor: "#0ca77e",
        });
        return;
      }

      const rows = exportVisits.map((v) => ({
        "Visit ID": v.visitId || "",
        "Property Name": v.propertySnapshot?.title || "",
        "Property ID": v.propertySnapshot?.propertyCode || "",
        "Partner Name": v.partnerSnapshot?.name || "",
        "Partner ID": v.partnerSnapshot?.partnerCode || "",
        "Partner Type": v.partnerSnapshot?.partnerType || "",
        Date: formatDate(v.requestedVisitAt),
        Time: formatTime(v.requestedVisitAt),
        City: v.propertySnapshot?.city || "",
        Locality: v.propertySnapshot?.locality || "",
        Approval: v.approvalStatus || "",
        Status: v.status || "",
        Outcome: v.outcome || "Pending",
        "Request Notes": v.requestNotes || "",
        "Admin Remarks": v.adminRemarks || "",
      }));

      const worksheet = XLSX.utils.json_to_sheet(rows);
      worksheet["!cols"] = [
        { wch: 14 },
        { wch: 28 },
        { wch: 15 },
        { wch: 24 },
        { wch: 15 },
        { wch: 14 },
        { wch: 14 },
        { wch: 12 },
        { wch: 18 },
        { wch: 22 },
        { wch: 15 },
        { wch: 16 },
        { wch: 22 },
        { wch: 30 },
        { wch: 30 },
      ];

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Visits");

      const safeTab = activeTab.replace(/[^a-z0-9]/gi, "-").toLowerCase();
      XLSX.writeFile(
        workbook,
        `visit-management-${safeTab}-${new Date().toISOString().slice(0, 10)}.xlsx`,
      );
    } catch (error) {
      console.error("Excel export error:", error);
      await Swal.fire({
        icon: "error",
        title: "Export Failed",
        text:
          error?.response?.data?.message || "Unable to export Excel report.",
        confirmButtonColor: "#0ca77e",
      });
    }
  };

  const locations = ["All", ...(summary.locations || [])];

  return (
    <div className="min-h-screen overflow-x-hidden  px-4 py-4 sm:px-5 lg:px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-[20px] font-semibold tracking-[-0.3px] text-[#123942]">
            Visit Management
          </h1>
          <p className="mt-1 text-[12px] text-[#849497]">
            Approve partner visit requests and manage scheduled visits,
            attendance, outcomes, reschedules and follow-ups.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={refreshAll}
            className="flex h-9 items-center gap-1.5 rounded-[6px] border border-[#bdd8d2] bg-white px-3 text-[12px] font-medium text-[#267d6d] hover:bg-[#f6fbfa]"
          >
            <RefreshCw size={11} /> Refresh
          </button>
          <button
            onClick={exportReport}
            className="flex h-9 items-center gap-1.5 rounded-[6px] bg-[#0ca77e] px-3 text-[12px] font-semibold text-white hover:bg-[#078f6d]"
          >
            <Download size={11} /> Export Report
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-2 xl:grid-cols-[1fr_1fr_1fr_2fr]">
        <StatCard
          title="Today's Visits"
          value={summary.today || 0}
          subtitle={`${summary.pendingApproval || 0} pending approvals`}
          icon={CalendarDays}
          onClick={() => setActiveTab("Today")}
        />
        <StatCard
          title="Upcoming"
          value={summary.upcoming || 0}
          subtitle="Approved / requested future visits"
          icon={Clock3}
          type="blue"
          onClick={() => setActiveTab("Upcoming")}
        />
        <StatCard
          title="Completed"
          value={summary.completed || 0}
          subtitle="All completed visits"
          icon={CheckCircle2}
          onClick={() => setActiveTab("Completed")}
        />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <MiniMetric
            label="Cancelled"
            value={summary.cancelled || 0}
            danger
            onClick={() => setActiveTab("Cancelled")}
          />
          <MiniMetric
            label="No Show"
            value={summary.noShow || 0}
            danger
            onClick={() => setActiveTab("No Show")}
          />
          <MiniMetric
            label="Rescheduled"
            value={summary.rescheduled || 0}
            onClick={() => setActiveTab("Rescheduled")}
          />
          <MiniMetric
            label="Follow-up"
            value={summary.followUp || 0}
            onClick={() => setActiveTab("Follow-up")}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-b border-[#dde7e5]">
        <div className="flex min-w-0 gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TAB_VALUES.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setPage(1);
              }}
              className={`relative min-w-max pb-2.5 text-[12px] font-medium ${activeTab === tab ? "text-[#107866]" : "text-[#8b999c]"}`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#087f6c]" />
              )}
            </button>
          ))}
        </div>
        <div className="mb-2 flex items-center gap-1.5 rounded-[4px] border border-[#dce5e3] bg-white px-2.5 py-1.5 text-[11px] text-[#667a7e]">
          <SlidersHorizontal size={9} /> Filters
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2 lg:flex-row">
        <div className="relative flex-1">
          <Search
            size={12}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8d9b9e]"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search visit ID, property, partner, location..."
            className="h-9 w-full rounded-[6px] border border-[#dce6e4] bg-white pl-8 pr-3 text-[12px] text-[#42595f] outline-none placeholder:text-[#a1adaf] focus:border-[#78b8ab]"
          />
        </div>
        <SelectFilter
          value={statusFilter}
          onChange={setStatusFilter}
          options={STATUS_OPTIONS}
          label="All Statuses"
        />
        <SelectFilter
          value={approvalFilter}
          onChange={setApprovalFilter}
          options={["All", "Pending", "Approved", "Rejected"]}
          label="All Approvals"
        />
        <SelectFilter
          value={locationFilter}
          onChange={setLocationFilter}
          options={locations}
          label="All Locations"
        />
      </div>

      <div className="mt-3 overflow-visible rounded-[8px] border border-[#dce7e4] bg-white">
        <div className="w-full overflow-visible">
          <table className="w-full table-fixed">
            <colgroup>
              <col style={{ width: "3%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "17%" }} />
              <col style={{ width: "14%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "11%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "11%" }} />
            </colgroup>
            <thead>
              <tr className="bg-[#073c5c] text-white">
                <th className="w-8 px-3 py-3 text-left">
                  <input
                    type="checkbox"
                    onChange={toggleAll}
                    checked={
                      visits.length > 0 &&
                      visits.every((v) => selectedRows.includes(v._id))
                    }
                  />
                </th>
                {[
                  "Visit ID",
                  "Property",
                  "Requested By Partner",
                  "Requested Date / Time",
                  "Location",
                  "Approval",
                  "Status",
                  "Outcome",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-2 py-3 text-left text-[12px] font-medium"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={10} className="py-16">
                    <div className="flex items-center justify-center gap-2 text-[12px] text-[#6d7f82]">
                      <LoaderCircle
                        size={17}
                        className="animate-spin text-[#0ca77e]"
                      />{" "}
                      Loading visits...
                    </div>
                  </td>
                </tr>
              ) : visits.length ? (
                visits.map((visit) => (
                  <tr
                    key={visit._id}
                    className="border-b border-[#edf2f1] transition last:border-b-0 hover:bg-[#f9fcfb]"
                  >
                    <td className="px-3 py-3">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(visit._id)}
                        onChange={() => toggleRow(visit._id)}
                      />
                    </td>
                    <td className="px-2 py-3">
                      <p className="text-[12px] font-bold text-[#0a7a67]">
                        {visit.visitId}
                      </p>
                      <p className="mt-1 text-[10px] text-[#98a5a8]">
                        {visit.approvalStatus === "Pending"
                          ? "Needs review"
                          : "Visit record"}
                      </p>
                    </td>

                    <td className="px-2 py-3">
                      <div className="flex w-full items-start ">
                        <div className="min-w-0">
                          {/* PROPERTY NAME */}

                          <p
                            className="
          line-clamp-2
          break-words
          text-[13px]
          font-bold
          text-[#3b555b]
        "
                          >
                            {visit.propertySnapshot?.title || "-"}
                          </p>

                          {/* PROPERTY ID */}

                          <p
                            className="
          mt-1
          text-[11px]
          font-bold
          text-[#0a8d74]
        "
                          >
                            {visit.propertySnapshot?.propertyCode || "-"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3">
                      <div className="w-full">
                        <p className="line-clamp-2 break-words text-[13px] font-bold text-[#40585f]">
                          {visit.partnerSnapshot?.name || "-"}
                        </p>
                        <p className="mt-1 text-[11px] font-bold text-[#0a8d74]">
                          {visit.partnerSnapshot?.partnerCode || "-"}
                        </p>
                        <p className="mt-1 text-[10px] font-medium capitalize text-[#98a5a8]">
                          {visit.partnerSnapshot?.partnerType || "-"}
                        </p>
                      </div>
                    </td>
                    <td className="px-2 py-3">
                      <p className="text-[12px] font-semibold text-[#465f64]">
                        {formatDate(visit.requestedVisitAt)}
                      </p>
                      <p className="mt-1 text-[11px] text-[#98a5a8]">
                        {formatTime(visit.requestedVisitAt)}
                      </p>
                    </td>
                    <td className="px-2 py-3">
                      <div className="flex w-full items-start gap-1">
                        <MapPin size={9} className="mt-[1px] text-[#6c8984]" />
                        <div>
                          <p className="text-[12px] font-semibold text-[#4e676c]">
                            {visit.propertySnapshot?.city || "-"}
                          </p>
                          <p className="mt-1 text-[11px] text-[#98a5a8]">
                            {visit.propertySnapshot?.locality || "-"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3">
                      <ApprovalBadge status={visit.approvalStatus} />
                    </td>
                    <td className="px-2 py-3">
                      <StatusBadge status={visit.status} />
                    </td>
                    <td className="px-2 py-3">
                      <p className="break-words text-[12px] text-[#687b7f]">
                        {visit.outcome || "Pending"}
                      </p>
                    </td>
                    <td
                      className="relative px-2 py-3"
                      data-visit-action-menu
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-1">
                        {/* <button
                          onClick={() => navigate(`/visit-management/${visit._id}`)}
                          className="flex h-8 items-center gap-1.5 rounded-[6px] border border-[#cfe2de] bg-white px-2.5 text-[11px] font-semibold text-[#167c69] hover:bg-[#f1faf7]"
                        >
                          <Eye size={12} /> View
                        </button> */}
                        <button
                          onClick={() => handleViewVisit(visit)}
                          className="flex h-8 items-center gap-1.5 rounded-[6px] border border-[#cfe2de] bg-white px-2.5 text-[11px] font-semibold text-[#167c69] hover:bg-[#f1faf7]"
                        >
                          <Eye size={12} />
                          View
                        </button>
                        {visit.approvalStatus === "Pending" && (
                          <>
                            <button
                              disabled={actionLoading === visit._id}
                              onClick={() => reviewVisit(visit, "approve")}
                              className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#e7f8f2] text-[#138266]"
                              title="Approve"
                            >
                              <Check size={11} />
                            </button>
                            <button
                              disabled={actionLoading === visit._id}
                              onClick={() => reviewVisit(visit, "reject")}
                              className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#fff0f0] text-[#cf4e4e]"
                              title="Reject"
                            >
                              <X size={11} />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() =>
                            setActionMenu(
                              actionMenu === visit._id ? null : visit._id,
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#dce5e3] text-[#60777b] hover:bg-[#f5f8f7]"
                        >
                          <MoreVertical size={15} />
                        </button>
                      </div>
                      {actionMenu === visit._id && (
                        <div className="absolute right-2 top-11 z-[150] w-[190px] overflow-hidden rounded-[10px] border border-[#dfe7e5] bg-white py-1.5 shadow-[0_14px_35px_rgba(15,23,42,0.18)]">
                          {[
                            { label: "Completed", icon: CheckCircle2 },
                            { label: "Cancelled", icon: XCircle },
                            { label: "No Show", icon: UserX },
                            { label: "Rescheduled", icon: RotateCcw },
                            { label: "Follow-up", icon: MessageSquareMore },
                          ].map(({ label, icon: Icon }) => (
                            <button
                              key={label}
                              onClick={() => updateStatus(visit, label)}
                              className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[12px] font-medium text-[#52686e] hover:bg-[#f5faf8]"
                            >
                              <Icon size={11} />
                              {label}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="py-14 text-center">
                    <Search size={20} className="mx-auto text-[#a1aeac]" />
                    <p className="mt-2 text-[12px] font-medium text-[#50676c]">
                      No visits found
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#e8efed] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[8px] text-[#8f9c9f]">
            Showing {total === 0 ? 0 : (page - 1) * itemsPerPage + 1} to{" "}
            {Math.min(page * itemsPerPage, total)} of {total} entries
          </p>
          <div className="flex items-center gap-1">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#dce5e3] bg-white text-[#63777b] disabled:opacity-40"
            >
              <ChevronLeft size={11} />
            </button>
            <button className="flex h-7 min-w-7 items-center justify-center rounded-[4px] bg-[#073c5c] px-2 text-[12px] text-white">
              {page}
            </button>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#dce5e3] bg-white text-[#63777b] disabled:opacity-40"
            >
              <ChevronRight size={11} />
            </button>
          </div>
        </div>
      </div>

      {(selectedVisit || detailLoading) && (
        // <VisitDetailDrawer
        //   data={selectedVisit}
        //   loading={detailLoading}
        //   onClose={() => {
        //     setSelectedVisit(null);
        //     if (routeVisitId) navigate("/visit-management");
        //   }}
        //   onRefresh={refreshAll}
        // />
        <VisitDetailDrawer
  data={
    selectedVisit
  }

  loading={
    detailLoading
  }

  onClose={() => {

    setSelectedVisit(
      null
    );

    // ========================================
    // Partner Dashboard me ho to
    // bilkul navigate mat karo
    // ========================================

    if (embedded) {
      onEmbeddedDetailClose?.();
      return;
    }

    // ========================================
    // Standalone detail route se aaye ho
    // tab normal list par jao
    // ========================================

    if (routeVisitId) {
      navigate(
        "/visit-management",
        {
          replace: true,
        }
      );
    }

  }}

  onRefresh={
    refreshAll
  }
/>
      )}
    </div>
  );
}

function VisitDetailDrawer({ data, loading, onClose }) {
  const navigate = useNavigate();
  const visit = data?.visit;
  const property = data?.property;
  const partner = data?.partner;
  const history = data?.visitHistory || [];

  const propertyMongoId =
    property?._id || visit?.propertyId?._id || visit?.propertyId || null;

  const partnerMongoId =
    partner?._id || visit?.partnerId?._id || visit?.partnerId || null;

  return (
    <div className="fixed inset-0 z-[999]">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"
      />
      <div className="absolute bottom-0 right-0 top-0 w-full max-w-[580px] overflow-y-auto bg-[#f6faf9] shadow-[-12px_0_35px_rgba(15,23,42,0.13)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#e3ebe9] bg-white px-5 py-4">
          <div>
            <h2 className="text-[18px] font-semibold text-[#173b45]">
              Visit Details
            </h2>
            <p className="mt-1 text-[12px] text-[#8a9a9d]">
              Property, assigned partner and visit history
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f6f5] text-[#63777b]"
          >
            <X size={15} />
          </button>
        </div>
        {loading ? (
          <div className="flex h-[400px] items-center justify-center">
            <LoaderCircle size={26} className="animate-spin text-[#0ca77e]" />
          </div>
        ) : visit ? (
          <div className="space-y-4 p-5">
            <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold text-[#0b8a72]">
                    {visit.visitId}
                  </p>
                  <h3 className="mt-1 text-[18px] font-semibold text-[#173c46]">
                    {visit.propertySnapshot?.title || property?.title}
                  </h3>
                  <p className="mt-1 text-[12px] text-[#819194]">
                    {formatDate(visit.requestedVisitAt)} •{" "}
                    {formatTime(visit.requestedVisitAt)}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <StatusBadge status={visit.status} />
                  <ApprovalBadge status={visit.approvalStatus} />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <DetailBox label="Outcome" value={visit.outcome} />
                <DetailBox
                  label="Location"
                  value={`${visit.propertySnapshot?.locality || ""}, ${visit.propertySnapshot?.city || ""}`}
                />
                <DetailBox
                  label="Request Notes"
                  value={visit.requestNotes || "-"}
                />
                <DetailBox
                  label="Admin Remarks"
                  value={visit.adminRemarks || "-"}
                />
              </div>
            </div>

            <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
              <SectionTitle icon={Building2} title="View Property" />
              <div className="flex gap-3">
                {property?.images?.[0]?.url ? (
                  <img
                    src={property.images[0].url}
                    alt=""
                    className="h-20 w-24 rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-24 items-center justify-center rounded-lg bg-[#eef7f4] text-[#138b75]">
                    <Building2 size={24} />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-[#31515a]">
                    {property?.title || visit.propertySnapshot?.title}
                  </p>
                  <p className="mt-1 text-[12px] font-semibold text-[#0b8a72]">
                    {property?.propertyId ||
                      visit.propertySnapshot?.propertyCode}
                  </p>
                  <p className="mt-2 text-[12px] text-[#7d8e92]">
                    {property?.category || "-"} •{" "}
                    {property?.propertySize || "-"} {property?.sizeUnit || ""}
                  </p>
                  <p className="mt-1 text-[12px] text-[#7d8e92]">
                    {property?.address ||
                      visit.propertySnapshot?.address ||
                      "-"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                disabled={!propertyMongoId}
                onClick={() =>
                  propertyMongoId &&
                  navigate(`/property-management/${propertyMongoId}`)
                }
                className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#073c5c] px-4 text-[12px] font-semibold text-white transition hover:bg-[#052f49] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ExternalLink size={14} />
                View Property
              </button>
            </div>

            <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
              <SectionTitle icon={UserRound} title="View Partner" />
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf8f4] text-[13px] font-bold text-[#138b75]">
                  {getInitials(partner?.name || visit.partnerSnapshot?.name)}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#31515a]">
                    {partner?.name || visit.partnerSnapshot?.name}
                  </p>
                  <p className="mt-1 text-[12px] font-semibold text-[#0b8a72]">
                    {partner?.partnerId || visit.partnerSnapshot?.partnerCode}
                  </p>
                  <p className="mt-1 text-[12px] capitalize text-[#8a989c]">
                    {partner?.partnerType || visit.partnerSnapshot?.partnerType}
                  </p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <DetailBox
                  icon={Phone}
                  label="Phone"
                  value={partner?.phone || visit.partnerSnapshot?.phone}
                />
                <DetailBox
                  icon={Mail}
                  label="Email"
                  value={partner?.email || visit.partnerSnapshot?.email}
                />
                <DetailBox
                  icon={MapPin}
                  label="City"
                  value={partner?.location?.city || "-"}
                />
                <DetailBox
                  label="Verified"
                  value={partner?.isVerified ? "Yes" : "No"}
                />
              </div>

              <button
                type="button"
                disabled={!partnerMongoId}
                onClick={() =>
                  partnerMongoId &&
                    navigate(
                      `/partnerdashboard?tab=dashboard&partnerId=${partnerMongoId}`
                    )
                }
                className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#0ca77e] px-4 text-[12px] font-semibold text-white transition hover:bg-[#078f6d] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ExternalLink size={14} />
                View Partner
              </button>
            </div>

            <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
              <SectionTitle icon={History} title="Visit History" />
              <div className="space-y-2">
                {history.length ? (
                  history.map((item) => (
                    <div
                      key={item._id}
                      className="rounded-lg border border-[#e8efed] bg-[#fbfdfc] p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[9px] font-semibold text-[#31515a]">
                            {item.visitId}
                          </p>
                          <p className="mt-1 text-[11px] text-[#8b999c]">
                            {formatDate(item.requestedVisitAt)} •{" "}
                            {formatTime(item.requestedVisitAt)}
                          </p>
                        </div>
                        <StatusBadge status={item.status} />
                      </div>
                      <p className="mt-2 text-[12px] text-[#63777b]">
                        Outcome: {item.outcome || "Pending"}
                      </p>
                      {item.adminRemarks && (
                        <p className="mt-1 text-[12px] text-[#8a999c]">
                          {item.adminRemarks}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="py-6 text-center text-[12px] text-[#95a3a6]">
                    No previous visit history.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-[#dde8e5] bg-white p-4 shadow-sm">
              <SectionTitle icon={CalendarClock} title="Audit Timeline" />
              <div className="space-y-3">
                {(visit.history || [])
                  .slice()
                  .reverse()
                  .map((item) => (
                    <div key={item._id} className="flex gap-3">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0ca77e]" />
                      <div>
                        <p className="text-[9px] font-semibold text-[#40585f]">
                          {item.action}
                        </p>
                        <p className="mt-1 text-[11px] text-[#8b999c]">
                          {formatDate(item.updatedAt)} •{" "}
                          {formatTime(item.updatedAt)} •{" "}
                          {item.updatedBy?.name || "-"}
                        </p>
                        {item.remarks && (
                          <p className="mt-1 text-[12px] text-[#63777b]">
                            {item.remarks}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-[400px] items-center justify-center text-[12px] text-[#8a999c]">
            Visit detail not available.
          </div>
        )}
      </div>
    </div>
  );
}

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eaf8f4] text-[#138b75]">
        <Icon size={13} />
      </div>
      <h4 className="text-[12px] font-semibold text-[#31515a]">{title}</h4>
      <div className="h-px flex-1 bg-[#edf2f1]" />
    </div>
  );
}

function DetailBox({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-[#edf1f0] bg-[#fbfdfc] p-3">
      <div className="flex gap-2">
        {Icon && <Icon size={12} className="mt-0.5 text-[#159078]" />}
        <div className="min-w-0">
          <p className="text-[9px] uppercase tracking-wide text-[#98a5a8]">
            {label}
          </p>
          <p className="mt-1 break-words text-[12px] font-medium text-[#52686e]">
            {value || "-"}
          </p>
        </div>
      </div>
    </div>
  );
}

function getInitials(name = "") {
  return (
    String(name)
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((x) => x[0]?.toUpperCase())
      .join("")
      .slice(0, 2) || "P"
  );
}