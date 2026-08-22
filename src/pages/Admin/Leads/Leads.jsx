// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Download,
//   Plus,
//   TrendingUp,
//   WalletCards,
//   Timer,
//   Search,
//   SlidersHorizontal,
//   ArrowUpDown,
//   Eye,
//   MoreVertical,
//   ChevronLeft,
//   ChevronRight,
//   X,
//   Users,
//   Building2,
//   Clock3,
//   Phone,
//   Mail,
// } from "lucide-react";

// const API_URL = import.meta.env.VITE_API_URL;

// const demoDashboard = {
//   conversionRate: 14.2,
//   conversionChange: 2.4,
//   totalLeadValue: 42000000,
//   avgResponseTime: 14,
//   responseTimeChange: -2,
// };

// const demoPipeline = [
//   { status: "New", count: 450 },
//   { status: "Unpicked", count: 320 },
//   { status: "Assigned", count: 280 },
//   { status: "Contacted", count: 210 },
//   { status: "Visit Scheduled", count: 150 },
//   { status: "Converted", count: 64 },
// ];

// const demoLeads = [
//   {
//     _id: "lead_001",
//     leadId: "LD-8924",
//     name: "Rahul Sharma",
//     phone: "9876543210",
//     email: "rahul.sharma@gmail.com",
//     propertyInterest: "Prestige Falcon City",
//     status: "Visit Scheduled",
//     estimatedValue: 8500000,
//     assignedTo: { _id: "user_001", name: "Amit Kumar" },
//     lastContact: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
//     notes: "Customer is interested in a 3 BHK apartment. Site visit scheduled for Saturday.",
//   },
//   {
//     _id: "lead_002",
//     leadId: "LD-8923",
//     name: "Priya Patel",
//     phone: "9825675432",
//     email: "priya.patel@gmail.com",
//     propertyInterest: "Godrej Woodscapes",
//     status: "New",
//     estimatedValue: 7200000,
//     assignedTo: null,
//     lastContact: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
//     notes: "Lead received from website enquiry. Looking for a 2 BHK property.",
//   },
//   {
//     _id: "lead_003",
//     leadId: "LD-8919",
//     name: "Vikram Singh",
//     phone: "9958998899",
//     email: "vikram.singh@gmail.com",
//     propertyInterest: "Sobha Dream Acres",
//     status: "Contacted",
//     estimatedValue: 11000000,
//     assignedTo: { _id: "user_002", name: "Neha Sharma" },
//     lastContact: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
//     notes: "Customer contacted successfully. Asked for floor plans and payment details.",
//   },
//   {
//     _id: "lead_004",
//     leadId: "LD-8910",
//     name: "Ananya Gupta",
//     phone: "9811776622",
//     email: "ananya.gupta@gmail.com",
//     propertyInterest: "Brigade Gateway",
//     status: "Disputed",
//     estimatedValue: 9500000,
//     assignedTo: { _id: "user_001", name: "Amit Kumar" },
//     lastContact: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
//     notes: "Customer has raised concern regarding pricing information.",
//   },
//   {
//     _id: "lead_005",
//     leadId: "LD-8906",
//     name: "Arjun Mehta",
//     phone: "9898123456",
//     email: "arjun.mehta@gmail.com",
//     propertyInterest: "DLF Privana",
//     status: "Assigned",
//     estimatedValue: 22500000,
//     assignedTo: { _id: "user_003", name: "Karan Malhotra" },
//     lastContact: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
//     notes: "Premium lead. Interested in luxury property for self use.",
//   },
//   {
//     _id: "lead_006",
//     leadId: "LD-8902",
//     name: "Sneha Kapoor",
//     phone: "9765432198",
//     email: "sneha.kapoor@gmail.com",
//     propertyInterest: "Lodha Belmondo",
//     status: "Converted",
//     estimatedValue: 18500000,
//     assignedTo: { _id: "user_004", name: "Riya Verma" },
//     lastContact: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
//     notes: "Lead successfully converted. Booking amount received.",
//   },
//   {
//     _id: "lead_007",
//     leadId: "LD-8897",
//     name: "Rohit Jain",
//     phone: "9988776655",
//     email: "rohit.jain@gmail.com",
//     propertyInterest: "Mahindra Eden",
//     status: "Unpicked",
//     estimatedValue: 6200000,
//     assignedTo: null,
//     lastContact: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
//     notes: "New enquiry generated from campaign.",
//   },
//   {
//     _id: "lead_008",
//     leadId: "LD-8891",
//     name: "Meera Iyer",
//     phone: "9845012345",
//     email: "meera.iyer@gmail.com",
//     propertyInterest: "Prestige Lakeside Habitat",
//     status: "Visit Scheduled",
//     estimatedValue: 12500000,
//     assignedTo: { _id: "user_002", name: "Neha Sharma" },
//     lastContact: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
//     notes: "Site visit scheduled. Looking for ready-to-move property.",
//   },
//   {
//     _id: "lead_009",
//     leadId: "LD-8886",
//     name: "Akash Verma",
//     phone: "9911223344",
//     email: "akash.verma@gmail.com",
//     propertyInterest: "Godrej Ananda",
//     status: "Contacted",
//     estimatedValue: 5800000,
//     assignedTo: { _id: "user_003", name: "Karan Malhotra" },
//     lastContact: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
//     notes: "Customer requested EMI and loan information.",
//   },
//   {
//     _id: "lead_010",
//     leadId: "LD-8880",
//     name: "Nisha Agarwal",
//     phone: "9812345678",
//     email: "nisha.agarwal@gmail.com",
//     propertyInterest: "Tata New Haven",
//     status: "New",
//     estimatedValue: 4800000,
//     assignedTo: null,
//     lastContact: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
//     notes: "Interested in investment property with rental potential.",
//   },
// ];


// const statusStyles = {
//   "Visit Scheduled":
//     "bg-emerald-50 text-emerald-700 border-emerald-200",

//   New:
//     "bg-blue-50 text-blue-700 border-blue-200",

//   Unpicked:
//     "bg-slate-50 text-slate-600 border-slate-200",

//   Assigned:
//     "bg-amber-50 text-amber-700 border-amber-200",

//   Contacted:
//     "bg-violet-50 text-violet-700 border-violet-200",

//   Converted:
//     "bg-emerald-50 text-emerald-700 border-emerald-200",

//   Disputed:
//     "bg-red-50 text-red-600 border-red-200",
// };

// const pipelineStyles = {
//   New: {
//     header: "bg-[#eaf3ff] text-[#315c8b]",
//     border: "border-[#d7e8fb]",
//   },

//   Unpicked: {
//     header: "bg-[#eaf3ff] text-[#315c8b]",
//     border: "border-[#d7e8fb]",
//   },

//   Assigned: {
//     header: "bg-[#eaf3ff] text-[#315c8b]",
//     border: "border-[#d7e8fb]",
//   },

//   Contacted: {
//     header: "bg-[#eaf3ff] text-[#315c8b]",
//     border: "border-[#d7e8fb]",
//   },

//   "Visit Scheduled": {
//     header: "bg-[#e5faf4] text-[#07846d]",
//     border: "border-[#cbeee5]",
//   },

//   Converted: {
//     header: "bg-[#00796b] text-white",
//     border: "border-[#00796b]",
//   },
// };

// export default function LeadOperations() {
//   const [dashboard, setDashboard] = useState(demoDashboard);

//   const [pipeline, setPipeline] = useState(demoPipeline);
//   const [leads, setLeads] = useState(demoLeads);

//   const [loading, setLoading] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");

//   const [selectedRows, setSelectedRows] = useState([]);

//   const [page, setPage] = useState(1);
//   const [limit] = useState(10);

//   const [totalPages, setTotalPages] = useState(1);
//   const [totalLeads, setTotalLeads] = useState(demoLeads.length);

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedLead, setSelectedLead] = useState(null);

//   const fetchDashboard = async () => {
//     try {
//       if (!API_URL) {
//         setDashboard(demoDashboard);
//         setPipeline(demoPipeline);
//         return;
//       }

//       const res = await axios.get(
//         `${API_URL}/api/leads/dashboard`
//       );

//       if (res.data.success) {
//         setDashboard(res.data.dashboard || demoDashboard);
//         setPipeline(res.data.pipeline?.length ? res.data.pipeline : demoPipeline);
//       }
//     } catch (error) {
//       console.warn("Dashboard API unavailable, using demo data.");
//       setDashboard(demoDashboard);
//       setPipeline(demoPipeline);
//     }
//   };

//   const getFilteredDemoLeads = () => {
//     let filtered = [...demoLeads];

//     if (search.trim()) {
//       const keyword = search.trim().toLowerCase();

//       filtered = filtered.filter((lead) =>
//         [
//           lead.leadId,
//           lead.name,
//           lead.phone,
//           lead.email,
//           lead.propertyInterest,
//           lead.assignedTo?.name,
//         ].some((value) =>
//           String(value || "").toLowerCase().includes(keyword)
//         )
//       );
//     }

//     if (statusFilter) {
//       filtered = filtered.filter(
//         (lead) => lead.status === statusFilter
//       );
//     }

//     return filtered;
//   };

//   const applyDemoLeads = () => {
//     const filtered = getFilteredDemoLeads();
//     const demoTotalPages = Math.max(1, Math.ceil(filtered.length / limit));
//     const safePage = Math.min(page, demoTotalPages);
//     const start = (safePage - 1) * limit;

//     setLeads(filtered.slice(start, start + limit));
//     setTotalLeads(filtered.length);
//     setTotalPages(demoTotalPages);
//   };

//   const fetchLeads = async () => {
//     try {
//       setLoading(true);

//       if (!API_URL) {
//         applyDemoLeads();
//         return;
//       }

//       const res = await axios.get(`${API_URL}/api/leads`, {
//         params: {
//           search,
//           status: statusFilter,
//           page,
//           limit,
//         },
//       });

//       if (res.data.success) {
//         setLeads(res.data.leads?.length ? res.data.leads : getFilteredDemoLeads());
//         setTotalPages(res.data.totalPages || 1);
//         setTotalLeads(
//           typeof res.data.total === "number"
//             ? res.data.total
//             : getFilteredDemoLeads().length
//         );
//       } else {
//         applyDemoLeads();
//       }
//     } catch (error) {
//       console.warn("Lead API unavailable, using demo data.");
//       applyDemoLeads();
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchLeads();
//     }, 350);

//     return () => clearTimeout(timer);
//   }, [search, statusFilter, page]);

//   const refreshData = () => {
//     fetchDashboard();
//     fetchLeads();
//   };

//   const formatMoney = (amount = 0) => {
//     const value = Number(amount || 0);

//     if (value >= 10000000) {
//       return `₹${(value / 10000000).toFixed(1)}Cr`;
//     }

//     if (value >= 100000) {
//       return `₹${(value / 100000).toFixed(1)}L`;
//     }

//     return `₹${value.toLocaleString("en-IN")}`;
//   };

//   const formatDate = (value) => {
//     if (!value) return "Never";

//     const date = new Date(value);

//     if (Number.isNaN(date.getTime())) return "Never";

//     return date.toLocaleString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   const getInitials = (name = "") => {
//     return name
//       .split(" ")
//       .filter(Boolean)
//       .map((item) => item[0])
//       .join("")
//       .slice(0, 2)
//       .toUpperCase();
//   };

//   const toggleRow = (id) => {
//     setSelectedRows((prev) =>
//       prev.includes(id)
//         ? prev.filter((item) => item !== id)
//         : [...prev, id]
//     );
//   };

//   const toggleAll = () => {
//     const currentIds = leads.map((lead) => lead._id);

//     const allSelected =
//       currentIds.length > 0 &&
//       currentIds.every((id) => selectedRows.includes(id));

//     if (allSelected) {
//       setSelectedRows((prev) =>
//         prev.filter((id) => !currentIds.includes(id))
//       );
//     } else {
//       setSelectedRows((prev) => [
//         ...new Set([...prev, ...currentIds]),
//       ]);
//     }
//   };

//   const handleExport = () => {
//     if (!leads.length) return;

//     const headers = [
//       "Lead ID",
//       "Name",
//       "Phone",
//       "Email",
//       "Property Interest",
//       "Status",
//       "Assigned To",
//       "Last Contact",
//     ];

//     const rows = leads.map((lead) => [
//       lead.leadId || "",
//       lead.name || "",
//       lead.phone || "",
//       lead.email || "",
//       lead.propertyInterest || "",
//       lead.status || "",
//       lead.assignedTo?.name || "Unassigned",
//       lead.lastContact
//         ? new Date(lead.lastContact).toLocaleString()
//         : "",
//     ]);

//     const csvContent = [
//       headers,
//       ...rows,
//     ]
//       .map((row) =>
//         row
//           .map(
//             (value) =>
//               `"${String(value).replace(/"/g, '""')}"`
//           )
//           .join(",")
//       )
//       .join("\n");

//     const blob = new Blob([csvContent], {
//       type: "text/csv;charset=utf-8;",
//     });

//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");

//     link.href = url;
//     link.download = "leads.csv";

//     document.body.appendChild(link);

//     link.click();

//     document.body.removeChild(link);

//     URL.revokeObjectURL(url);
//   };

//   const paginationNumbers = () => {
//     if (totalPages <= 5) {
//       return Array.from(
//         { length: totalPages },
//         (_, index) => index + 1
//       );
//     }

//     let start = Math.max(page - 2, 1);
//     let end = Math.min(start + 4, totalPages);

//     if (end - start < 4) {
//       start = Math.max(end - 4, 1);
//     }

//     return Array.from(
//       { length: end - start + 1 },
//       (_, index) => start + index
//     );
//   };

//   return (
//     <div className="min-h-screen ">
//       <div className="mx-auto w-full max-w-[1700px] px-3 py-1 sm:px-4 sm:py-1 lg:px-1 xl:px-1">

//         {/* ================= HEADER ================= */}

//         <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div className="min-w-0">
//             <h1 className="text-[21px] font-semibold tracking-[-0.5px] text-[#101828] sm:text-[24px]">
//               Lead Operations
//             </h1>

//             <p className="mt-1 max-w-xl text-[11px] leading-5 text-[#7d8998] sm:text-xs">
//               Manage and track lead lifecycle, conversion,
//               and performance.
//             </p>
//           </div>

//           <div className="flex w-full items-center gap-2 sm:w-auto">
//             <button
//               onClick={handleExport}
//               className="
//                 flex h-9 flex-1 items-center justify-center gap-2
//                 rounded-md border border-[#b6c5cb]
//                 bg-white px-4 text-[11px] font-medium
//                 text-[#365d68]
//                 shadow-sm transition
//                 hover:border-[#8da9aa]
//                 hover:bg-[#f8fbfb]
//                 sm:flex-none
//               "
//             >
//               <Download size={14} />
//               Export
//             </button>

//             <button
//               onClick={() => setShowAddModal(true)}
//               className="
//                 flex h-9 flex-1 items-center justify-center gap-2
//                 rounded-md bg-[#006b5e]
//                 px-4 text-[11px] font-medium
//                 text-white shadow-sm
//                 transition
//                 hover:bg-[#00594f]
//                 sm:flex-none
//               "
//             >
//               <Plus size={15} />
//               New Lead
//             </button>
//           </div>
//         </div>

//         {/* ================= METRICS ================= */}

//         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-4">
//           <MetricCard
//             title="Conversion Rate"
//             value={`${dashboard.conversionRate || 0}%`}
//             description={`${dashboard.conversionChange || 0}% from last month`}
//             icon={<TrendingUp size={19} />}
//             iconClass="bg-[#d7faf0] text-[#049a76]"
//             descriptionClass="text-[#07856a]"
//           />

//           <MetricCard
//             title="Total Lead Value"
//             value={formatMoney(dashboard.totalLeadValue)}
//             description="Active pipeline value"
//             icon={<WalletCards size={19} />}
//             iconClass="bg-[#e8efff] text-[#315fc7]"
//           />

//           <MetricCard
//             title="Avg Response Time"
//             value={`${dashboard.avgResponseTime || 0}m`}
//             description={`${Math.abs(
//               dashboard.responseTimeChange || 0
//             )}m from last week`}
//             icon={<Timer size={19} />}
//             iconClass="bg-[#fff0e4] text-[#dc711d]"
//             descriptionClass={
//               Number(dashboard.responseTimeChange) <= 0
//                 ? "text-[#07856a]"
//                 : "text-[#e04b4b]"
//             }
//           />
//         </div>

//         {/* ================= PIPELINE ================= */}

//         <section className="mt-4 overflow-hidden rounded-lg border border-[#dce3e8] bg-white shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:mt-5">
//           <div className="border-b border-[#edf0f2] px-4 py-3.5 sm:px-5">
//             <div className="flex items-center justify-between gap-3">
//               <h2 className="text-[12px] font-semibold text-[#24364b] sm:text-[13px]">
//                 Lead Lifecycle Pipeline
//               </h2>

//               <span className="hidden text-[10px] text-[#8a96a5] sm:block">
//                 Current lead distribution
//               </span>
//             </div>
//           </div>

//           {pipeline.length === 0 ? (
//             <div className="px-5 py-10 text-center text-xs text-gray-400">
//               No pipeline data available.
//             </div>
//           ) : (
//             <>
//               {/* MOBILE PIPELINE */}

//               <div className="grid grid-cols-2 gap-2 p-3 sm:hidden">
//                 {pipeline.map((item) => {
//                   const style =
//                     pipelineStyles[item.status] || {
//                       header:
//                         "bg-slate-50 text-slate-600",
//                       border: "border-slate-200",
//                     };

//                   return (
//                     <div
//                       key={item.status}
//                       className={`overflow-hidden rounded-md border ${style.border}`}
//                     >
//                       <div
//                         className={`px-2 py-2.5 text-center text-[10px] font-medium ${style.header}`}
//                       >
//                         {item.status}
//                       </div>

//                       <div className="bg-white py-2.5 text-center text-sm font-semibold text-[#1d3046]">
//                         {item.count || 0}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* TABLET/DESKTOP PIPELINE */}

//               <div className="hidden overflow-x-auto px-4 py-4 sm:block sm:px-5">
//                 <div className="flex min-w-[720px] items-center">
//                   {pipeline.map((item, index) => {
//                     const style =
//                       pipelineStyles[item.status] || {
//                         header:
//                           "bg-slate-50 text-slate-600",
//                         border: "border-slate-200",
//                       };

//                     return (
//                       <React.Fragment key={item.status}>
//                         <div className="min-w-[112px] flex-1">
//                           <div
//                             className={`overflow-hidden rounded-[5px] border ${style.border}`}
//                           >
//                             <div
//                               className={`px-2 py-2.5 text-center text-[10px] font-medium ${style.header}`}
//                             >
//                               {item.status}
//                             </div>

//                             <div className="bg-white py-2.5 text-center text-[12px] font-semibold text-[#24364b]">
//                               {item.count || 0}
//                             </div>
//                           </div>
//                         </div>

//                         {index !== pipeline.length - 1 && (
//                           <div className="flex w-7 shrink-0 items-center justify-center text-lg font-light text-[#b6bec8]">
//                             ›
//                           </div>
//                         )}
//                       </React.Fragment>
//                     );
//                   })}
//                 </div>
//               </div>
//             </>
//           )}
//         </section>

//         {/* ================= LEAD ROSTER ================= */}

//         <section className="mt-4 overflow-hidden rounded-lg border border-[#dce3e8] bg-white shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:mt-5">

//           {/* TOOLBAR */}

//           <div className="border-b border-[#e8edf0] px-3 py-3 sm:px-4">
//             <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">

//               <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
//                 <div className="flex items-center justify-between">
//                   <h2 className="whitespace-nowrap text-[12px] font-semibold text-[#24364b] sm:text-[13px]">
//                     Lead Roster
//                   </h2>

//                   <span className="ml-2 rounded-full bg-[#edf4f6] px-2 py-0.5 text-[9px] font-medium text-[#48616d]">
//                     {totalLeads}
//                   </span>
//                 </div>

//                 <div className="relative w-full sm:w-[260px] lg:w-[300px]">
//                   <Search
//                     size={14}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa5b2]"
//                   />

//                   <input
//                     type="text"
//                     value={search}
//                     onChange={(e) => {
//                       setSearch(e.target.value);
//                       setPage(1);
//                     }}
//                     placeholder="Search by name, ID, property..."
//                     className="
//                       h-9 w-full rounded-md
//                       border border-[#d6dde3]
//                       bg-white pl-9 pr-3
//                       text-[11px] text-[#354657]
//                       outline-none transition
//                       placeholder:text-[#a8b0ba]
//                       focus:border-[#4b9990]
//                       focus:ring-2
//                       focus:ring-[#00796b]/10
//                     "
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
//                 <select
//                   value={statusFilter}
//                   onChange={(e) => {
//                     setStatusFilter(e.target.value);
//                     setPage(1);
//                   }}
//                   className="
//                     h-9 min-w-0 rounded-md
//                     border border-[#d6dde3]
//                     bg-white px-3
//                     text-[10px] text-[#526271]
//                     outline-none
//                     focus:border-[#4b9990]
//                     sm:min-w-[130px]
//                   "
//                 >
//                   <option value="">All Status</option>
//                   <option value="New">New</option>
//                   <option value="Unpicked">
//                     Unpicked
//                   </option>
//                   <option value="Assigned">
//                     Assigned
//                   </option>
//                   <option value="Contacted">
//                     Contacted
//                   </option>
//                   <option value="Visit Scheduled">
//                     Visit Scheduled
//                   </option>
//                   <option value="Converted">
//                     Converted
//                   </option>
//                   <option value="Disputed">
//                     Disputed
//                   </option>
//                 </select>

//                 <button
//                   className="
//                     flex h-9 items-center justify-center gap-1.5
//                     rounded-md border border-[#d6dde3]
//                     bg-white px-3
//                     text-[10px] font-medium text-[#536271]
//                     transition hover:bg-gray-50
//                   "
//                 >
//                   <SlidersHorizontal size={13} />
//                   Filter
//                 </button>

//                 <button
//                   className="
//                     flex h-9 items-center justify-center gap-1.5
//                     rounded-md border border-[#d6dde3]
//                     bg-white px-3
//                     text-[10px] font-medium text-[#536271]
//                     transition hover:bg-gray-50
//                   "
//                 >
//                   <ArrowUpDown size={13} />
//                   Sort
//                 </button>

//                 <button
//                   disabled={!selectedRows.length}
//                   className="
//                     h-9 rounded-md
//                     border border-[#a7c9c3]
//                     bg-[#f2faf8]
//                     px-3 text-[10px] font-medium
//                     text-[#08786b]
//                     transition
//                     hover:bg-[#e7f6f2]
//                     disabled:cursor-not-allowed
//                     disabled:opacity-40
//                   "
//                 >
//                   Bulk Actions
//                   {selectedRows.length > 0 &&
//                     ` (${selectedRows.length})`}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* ================= DESKTOP TABLE ================= */}

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[850px] border-collapse">
//               <thead>
//                 <tr className="bg-[#08293b] text-white">
//                   <th className="w-12 px-4 py-3 text-left">
//                     <input
//                       type="checkbox"
//                       checked={
//                         leads.length > 0 &&
//                         leads.every((lead) =>
//                           selectedRows.includes(lead._id)
//                         )
//                       }
//                       onChange={toggleAll}
//                       className="h-3.5 w-3.5 cursor-pointer rounded accent-[#008875]"
//                     />
//                   </th>

//                   <TableHeading>
//                     Lead ID / Name
//                   </TableHeading>

//                   <TableHeading>
//                     Property Interest
//                   </TableHeading>

//                   <TableHeading>Status</TableHeading>

//                   <TableHeading>
//                     Assigned To
//                   </TableHeading>

//                   <TableHeading>
//                     Last Contact
//                   </TableHeading>

//                   <th className="w-[100px] px-3 py-3 text-center text-[9px] font-semibold uppercase tracking-wide">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {loading ? (
//                   <LoadingRows />
//                 ) : leads.length === 0 ? (
//                   <EmptyTable />
//                 ) : (
//                   leads.map((lead) => (
//                     <tr
//                       key={lead._id}
//                       className="
//                         border-b border-[#edf0f2]
//                         bg-white transition
//                         last:border-b-0
//                         hover:bg-[#f8fbfc]
//                       "
//                     >
//                       <td className="px-4 py-3.5">
//                         <input
//                           type="checkbox"
//                           checked={selectedRows.includes(
//                             lead._id
//                           )}
//                           onChange={() =>
//                             toggleRow(lead._id)
//                           }
//                           className="h-3.5 w-3.5 cursor-pointer rounded accent-[#008875]"
//                         />
//                       </td>

//                       <td className="px-3 py-3.5">
//                         <div className="min-w-[130px]">
//                           <p className="text-[10px] font-semibold text-[#19364a]">
//                             {lead.leadId || "—"}
//                           </p>

//                           <p className="mt-0.5 max-w-[160px] truncate text-[10px] text-[#687889]">
//                             {lead.name || "Unnamed Lead"}
//                           </p>
//                         </div>
//                       </td>

//                       <td className="px-3 py-3.5">
//                         <div className="flex max-w-[190px] items-center gap-2">
//                           <Building2
//                             size={13}
//                             className="shrink-0 text-[#8293a4]"
//                           />

//                           <span className="truncate text-[10px] text-[#536475]">
//                             {lead.propertyInterest ||
//                               "Not specified"}
//                           </span>
//                         </div>
//                       </td>

//                       <td className="px-3 py-3.5">
//                         <StatusBadge
//                           status={lead.status}
//                         />
//                       </td>

//                       <td className="px-3 py-3.5">
//                         {lead.assignedTo?.name ? (
//                           <div className="flex items-center gap-2.5">
//                             <div
//                               className="
//                                 flex h-7 w-7 shrink-0
//                                 items-center justify-center
//                                 rounded-full bg-[#123d57]
//                                 text-[8px] font-semibold
//                                 text-white
//                               "
//                             >
//                               {getInitials(
//                                 lead.assignedTo.name
//                               )}
//                             </div>

//                             <span className="max-w-[130px] truncate text-[10px] font-medium text-[#495b6c]">
//                               {lead.assignedTo.name}
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-[10px] italic text-[#929daa]">
//                             Unassigned
//                           </span>
//                         )}
//                       </td>

//                       <td className="px-3 py-3.5">
//                         <div className="flex items-center gap-1.5 text-[10px] text-[#687889]">
//                           <Clock3 size={12} />

//                           <span className="whitespace-nowrap">
//                             {formatDate(
//                               lead.lastContact
//                             )}
//                           </span>
//                         </div>
//                       </td>

//                       <td className="px-3 py-3.5">
//                         <div className="flex items-center justify-center gap-1">
//                           <button
//                             onClick={() =>
//                               setSelectedLead(lead)
//                             }
//                             title="View lead"
//                             className="
//                               flex h-7 w-7 items-center
//                               justify-center rounded-md
//                               text-[#3c6875]
//                               transition
//                               hover:bg-[#eaf5f3]
//                               hover:text-[#00796b]
//                             "
//                           >
//                             <Eye size={14} />
//                           </button>

//                           <button
//                             title="More actions"
//                             className="
//                               flex h-7 w-7 items-center
//                               justify-center rounded-md
//                               text-[#798794]
//                               transition
//                               hover:bg-gray-100
//                               hover:text-[#334155]
//                             "
//                           >
//                             <MoreVertical size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* ================= MOBILE LEAD CARDS ================= */}

//           <div className="md:hidden">
//             {loading ? (
//               <div className="space-y-3 p-3">
//                 {[1, 2, 3].map((item) => (
//                   <div
//                     key={item}
//                     className="h-36 animate-pulse rounded-lg bg-gray-100"
//                   />
//                 ))}
//               </div>
//             ) : leads.length === 0 ? (
//               <div className="px-4 py-12 text-center">
//                 <Users
//                   size={32}
//                   className="mx-auto text-gray-300"
//                 />

//                 <p className="mt-3 text-sm font-medium text-gray-500">
//                   No leads found
//                 </p>

//                 <p className="mt-1 text-xs text-gray-400">
//                   Try changing your search or filter.
//                 </p>
//               </div>
//             ) : (
//               <div className="divide-y divide-[#edf0f2]">
//                 {leads.map((lead) => (
//                   <div
//                     key={lead._id}
//                     className="p-3.5"
//                   >
//                     <div className="flex items-start gap-3">
//                       <input
//                         type="checkbox"
//                         checked={selectedRows.includes(
//                           lead._id
//                         )}
//                         onChange={() =>
//                           toggleRow(lead._id)
//                         }
//                         className="mt-1 h-4 w-4 shrink-0 accent-[#00796b]"
//                       />

//                       <div className="min-w-0 flex-1">
//                         <div className="flex items-start justify-between gap-2">
//                           <div className="min-w-0">
//                             <p className="text-[10px] font-semibold text-[#0e6e65]">
//                               {lead.leadId || "—"}
//                             </p>

//                             <h3 className="mt-0.5 truncate text-[13px] font-semibold text-[#1d3046]">
//                               {lead.name ||
//                                 "Unnamed Lead"}
//                             </h3>
//                           </div>

//                           <StatusBadge
//                             status={lead.status}
//                           />
//                         </div>

//                         <div className="mt-3 flex items-start gap-2">
//                           <Building2
//                             size={14}
//                             className="mt-0.5 shrink-0 text-[#8695a4]"
//                           />

//                           <p className="text-[11px] leading-4 text-[#617283]">
//                             {lead.propertyInterest ||
//                               "Property not specified"}
//                           </p>
//                         </div>

//                         <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#f0f2f4] pt-3">
//                           <div className="min-w-0">
//                             {lead.assignedTo?.name ? (
//                               <div className="flex items-center gap-2">
//                                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#123d57] text-[8px] font-semibold text-white">
//                                   {getInitials(
//                                     lead.assignedTo.name
//                                   )}
//                                 </div>

//                                 <div className="min-w-0">
//                                   <p className="text-[8px] uppercase tracking-wide text-[#9aa5b0]">
//                                     Assigned to
//                                   </p>

//                                   <p className="truncate text-[10px] font-medium text-[#4a5d6f]">
//                                     {
//                                       lead.assignedTo
//                                         .name
//                                     }
//                                   </p>
//                                 </div>
//                               </div>
//                             ) : (
//                               <div>
//                                 <p className="text-[8px] uppercase tracking-wide text-[#9aa5b0]">
//                                   Assigned to
//                                 </p>

//                                 <p className="text-[10px] italic text-[#8f9aa6]">
//                                   Unassigned
//                                 </p>
//                               </div>
//                             )}
//                           </div>

//                           <div className="flex shrink-0 items-center gap-1">
//                             <button
//                               onClick={() =>
//                                 setSelectedLead(lead)
//                               }
//                               className="flex h-8 w-8 items-center justify-center rounded-md border border-[#d8e2e2] text-[#337065]"
//                             >
//                               <Eye size={14} />
//                             </button>

//                             <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e1e5e8] text-[#6b7987]">
//                               <MoreVertical
//                                 size={14}
//                               />
//                             </button>
//                           </div>
//                         </div>

//                         <div className="mt-2 flex items-center gap-1.5 text-[9px] text-[#8a97a4]">
//                           <Clock3 size={11} />
//                           Last contact:
//                           <span className="font-medium text-[#667788]">
//                             {formatDate(
//                               lead.lastContact
//                             )}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* ================= PAGINATION ================= */}

//           <div className="flex flex-col gap-3 border-t border-[#edf0f2] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
//             <p className="text-center text-[10px] text-[#7c8997] sm:text-left">
//               Showing{" "}
//               <span className="font-medium text-[#435464]">
//                 {leads.length}
//               </span>{" "}
//               of{" "}
//               <span className="font-medium text-[#435464]">
//                 {totalLeads}
//               </span>{" "}
//               leads
//             </p>

//             <div className="flex items-center justify-center gap-1">
//               <PaginationButton
//                 disabled={page === 1}
//                 onClick={() =>
//                   setPage((prev) =>
//                     Math.max(prev - 1, 1)
//                   )
//                 }
//               >
//                 <ChevronLeft size={13} />
//               </PaginationButton>

//               {paginationNumbers().map(
//                 (pageNumber) => (
//                   <button
//                     key={pageNumber}
//                     onClick={() =>
//                       setPage(pageNumber)
//                     }
//                     className={`
//                       flex h-7 min-w-7
//                       items-center justify-center
//                       rounded-md px-2
//                       text-[10px] font-medium
//                       transition
//                       ${
//                         page === pageNumber
//                           ? "border border-[#00796b] bg-[#00796b] text-white"
//                           : "border border-[#dce2e7] bg-white text-[#596979] hover:bg-gray-50"
//                       }
//                     `}
//                   >
//                     {pageNumber}
//                   </button>
//                 )
//               )}

//               <PaginationButton
//                 disabled={
//                   page >= totalPages ||
//                   totalPages === 0
//                 }
//                 onClick={() =>
//                   setPage((prev) =>
//                     Math.min(
//                       prev + 1,
//                       totalPages
//                     )
//                   )
//                 }
//               >
//                 <ChevronRight size={13} />
//               </PaginationButton>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* ================= ADD MODAL ================= */}

//       {showAddModal && (
//         <AddLeadModal
//           onClose={() =>
//             setShowAddModal(false)
//           }
//           onSuccess={() => {
//             setShowAddModal(false);
//             refreshData();
//           }}
//         />
//       )}

//       {/* ================= VIEW MODAL ================= */}

//       {selectedLead && (
//         <ViewLeadModal
//           lead={selectedLead}
//           onClose={() =>
//             setSelectedLead(null)
//           }
//           formatMoney={formatMoney}
//           formatDate={formatDate}
//         />
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    METRIC CARD
// ========================================================= */

// function MetricCard({
//   title,
//   value,
//   description,
//   icon,
//   iconClass,
//   descriptionClass = "text-[#667085]",
// }) {
//   return (
//     <div
//       className="
//         group rounded-lg
//         border border-[#dce3e8]
//         bg-white p-4
//         shadow-[0_1px_3px_rgba(16,24,40,0.04)]
//         transition duration-200
//         hover:-translate-y-[1px]
//         hover:shadow-[0_4px_14px_rgba(16,24,40,0.07)]
//         sm:p-5
//       "
//     >
//       <div className="flex items-start justify-between gap-3">
//         <div className="min-w-0">
//           <p className="text-[9px] font-semibold uppercase tracking-[0.05em] text-[#748191] sm:text-[10px]">
//             {title}
//           </p>

//           <h2 className="mt-2 text-[24px] font-semibold leading-none tracking-[-0.7px] text-[#0c2337] sm:text-[27px]">
//             {value}
//           </h2>

//           <p
//             className={`mt-3 text-[9px] font-medium sm:text-[10px] ${descriptionClass}`}
//           >
//             {description}
//           </p>
//         </div>

//         <div
//           className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    TABLE HELPERS
// ========================================================= */

// function TableHeading({ children }) {
//   return (
//     <th className="px-3 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.03em]">
//       {children}
//     </th>
//   );
// }

// function StatusBadge({ status }) {
//   return (
//     <span
//       className={`
//         inline-flex whitespace-nowrap
//         rounded-full border px-2 py-[3px]
//         text-[8px] font-medium
//         ${
//           statusStyles[status] ||
//           "border-gray-200 bg-gray-50 text-gray-500"
//         }
//       `}
//     >
//       {status || "Unknown"}
//     </span>
//   );
// }

// function LoadingRows() {
//   return (
//     <>
//       {[1, 2, 3, 4].map((item) => (
//         <tr
//           key={item}
//           className="border-b border-[#edf0f2]"
//         >
//           <td colSpan={7} className="px-4 py-3">
//             <div className="h-9 animate-pulse rounded-md bg-gray-100" />
//           </td>
//         </tr>
//       ))}
//     </>
//   );
// }

// function EmptyTable() {
//   return (
//     <tr>
//       <td colSpan={7}>
//         <div className="flex flex-col items-center justify-center py-14">
//           <Users
//             size={34}
//             className="text-gray-300"
//           />

//           <p className="mt-3 text-xs font-medium text-gray-500">
//             No leads found
//           </p>

//           <p className="mt-1 text-[10px] text-gray-400">
//             Try changing your search or filters.
//           </p>
//         </div>
//       </td>
//     </tr>
//   );
// }

// function PaginationButton({
//   children,
//   disabled,
//   onClick,
// }) {
//   return (
//     <button
//       disabled={disabled}
//       onClick={onClick}
//       className="
//         flex h-7 w-7 items-center
//         justify-center rounded-md
//         border border-[#dce2e7]
//         bg-white text-[#667788]
//         transition
//         hover:bg-gray-50
//         disabled:cursor-not-allowed
//         disabled:opacity-35
//       "
//     >
//       {children}
//     </button>
//   );
// }

// /* =========================================================
//    ADD LEAD MODAL
// ========================================================= */

// function AddLeadModal({
//   onClose,
//   onSuccess,
// }) {
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     propertyInterest: "",
//     status: "New",
//     estimatedValue: "",
//     notes: "",
//   });

//   const handleChange = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         `${API_URL}/api/leads`,
//         form
//       );

//       if (res.data.success) {
//         onSuccess();
//       }
//     } catch (error) {
//       console.error(error);

//       alert(
//         error.response?.data?.message ||
//           "Unable to create lead"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="
//         fixed inset-0 z-[100]
//         flex items-end justify-center
//         bg-[#06131d]/50
//         p-0 backdrop-blur-[2px]
//         sm:items-center sm:p-4
//       "
//     >
//       <div
//         className="
//           flex max-h-[92vh] w-full
//           flex-col overflow-hidden
//           rounded-t-2xl bg-white
//           shadow-2xl
//           sm:max-w-[560px]
//           sm:rounded-xl
//         "
//       >
//         <div className="flex shrink-0 items-center justify-between border-b border-[#edf0f2] px-4 py-4 sm:px-5">
//           <div>
//             <h2 className="text-[15px] font-semibold text-[#172b3d]">
//               Create New Lead
//             </h2>

//             <p className="mt-0.5 text-[10px] text-[#8793a0]">
//               Add new lead information below.
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             className="flex h-8 w-8 items-center justify-center rounded-md text-[#6c7885] transition hover:bg-gray-100"
//           >
//             <X size={17} />
//           </button>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="overflow-y-auto"
//         >
//           <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-5">
//             <Input
//               label="Customer Name"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />

//             <Input
//               label="Phone Number"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               required
//             />

//             <Input
//               label="Email Address"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//             />

//             <Input
//               label="Estimated Lead Value"
//               name="estimatedValue"
//               type="number"
//               value={form.estimatedValue}
//               onChange={handleChange}
//             />

//             <div className="sm:col-span-2">
//               <Input
//                 label="Property Interest"
//                 name="propertyInterest"
//                 value={form.propertyInterest}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label className="mb-1.5 block text-[10px] font-semibold text-[#435365]">
//                 Status
//               </label>

//               <select
//                 name="status"
//                 value={form.status}
//                 onChange={handleChange}
//                 className="
//                   h-10 w-full rounded-md
//                   border border-[#d8dfe5]
//                   bg-white px-3
//                   text-[11px] text-[#3d4f60]
//                   outline-none
//                   focus:border-[#4e9a91]
//                   focus:ring-2
//                   focus:ring-[#00796b]/10
//                 "
//               >
//                 <option value="New">New</option>
//                 <option value="Unpicked">
//                   Unpicked
//                 </option>
//                 <option value="Assigned">
//                   Assigned
//                 </option>
//                 <option value="Contacted">
//                   Contacted
//                 </option>
//                 <option value="Visit Scheduled">
//                   Visit Scheduled
//                 </option>
//                 <option value="Converted">
//                   Converted
//                 </option>
//                 <option value="Disputed">
//                   Disputed
//                 </option>
//               </select>
//             </div>

//             <div className="sm:col-span-2">
//               <label className="mb-1.5 block text-[10px] font-semibold text-[#435365]">
//                 Notes
//               </label>

//               <textarea
//                 name="notes"
//                 value={form.notes}
//                 onChange={handleChange}
//                 rows={4}
//                 placeholder="Add lead notes..."
//                 className="
//                   w-full resize-none rounded-md
//                   border border-[#d8dfe5]
//                   px-3 py-2.5
//                   text-[11px] text-[#3d4f60]
//                   outline-none
//                   placeholder:text-[#a8b1bb]
//                   focus:border-[#4e9a91]
//                   focus:ring-2
//                   focus:ring-[#00796b]/10
//                 "
//               />
//             </div>
//           </div>

//           <div className="sticky bottom-0 flex items-center justify-end gap-2 border-t border-[#edf0f2] bg-white px-4 py-3 sm:px-5">
//             <button
//               type="button"
//               onClick={onClose}
//               className="
//                 h-9 rounded-md
//                 border border-[#d5dce2]
//                 bg-white px-4
//                 text-[11px] font-medium
//                 text-[#536271]
//                 hover:bg-gray-50
//               "
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={loading}
//               className="
//                 h-9 rounded-md
//                 bg-[#006b5e]
//                 px-5 text-[11px] font-medium
//                 text-white transition
//                 hover:bg-[#00594f]
//                 disabled:cursor-not-allowed
//                 disabled:opacity-50
//               "
//             >
//               {loading
//                 ? "Creating..."
//                 : "Create Lead"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    INPUT
// ========================================================= */

// function Input({
//   label,
//   name,
//   value,
//   onChange,
//   type = "text",
//   required = false,
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-[10px] font-semibold text-[#435365]">
//         {label}

//         {required && (
//           <span className="ml-0.5 text-red-500">
//             *
//           </span>
//         )}
//       </label>

//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         required={required}
//         className="
//           h-10 w-full rounded-md
//           border border-[#d8dfe5]
//           bg-white px-3
//           text-[11px] text-[#3d4f60]
//           outline-none transition
//           focus:border-[#4e9a91]
//           focus:ring-2
//           focus:ring-[#00796b]/10
//         "
//       />
//     </div>
//   );
// }

// /* =========================================================
//    VIEW LEAD MODAL
// ========================================================= */

// function ViewLeadModal({
//   lead,
//   onClose,
//   formatMoney,
//   formatDate,
// }) {
//   return (
//     <div
//       className="
//         fixed inset-0 z-[100]
//         flex items-end justify-center
//         bg-[#06131d]/50
//         p-0 backdrop-blur-[2px]
//         sm:items-center sm:p-4
//       "
//     >
//       <div
//         className="
//           max-h-[92vh] w-full
//           overflow-hidden rounded-t-2xl
//           bg-white shadow-2xl
//           sm:max-w-[520px]
//           sm:rounded-xl
//         "
//       >
//         <div className="flex items-center justify-between border-b border-[#edf0f2] px-4 py-4 sm:px-5">
//           <div className="min-w-0">
//             <p className="text-[9px] font-semibold uppercase tracking-wide text-[#008271]">
//               {lead.leadId || "Lead"}
//             </p>

//             <h2 className="mt-0.5 truncate text-[16px] font-semibold text-[#172b3d]">
//               {lead.name || "Unnamed Lead"}
//             </h2>
//           </div>

//           <button
//             onClick={onClose}
//             className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#6c7885] hover:bg-gray-100"
//           >
//             <X size={17} />
//           </button>
//         </div>

//         <div className="max-h-[70vh] overflow-y-auto p-4 sm:p-5">
//           <div className="mb-5 rounded-lg bg-[#f7fafb] p-4">
//             <div className="flex items-center justify-between gap-3">
//               <div>
//                 <p className="text-[9px] uppercase tracking-wide text-[#8a96a3]">
//                   Current Status
//                 </p>

//                 <div className="mt-1.5">
//                   <StatusBadge
//                     status={lead.status}
//                   />
//                 </div>
//               </div>

//               <div className="text-right">
//                 <p className="text-[9px] uppercase tracking-wide text-[#8a96a3]">
//                   Lead Value
//                 </p>

//                 <p className="mt-1 text-sm font-semibold text-[#173247]">
//                   {lead.estimatedValue
//                     ? formatMoney(
//                         lead.estimatedValue
//                       )
//                     : "—"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <LeadInfo
//               icon={<Phone size={14} />}
//               label="Phone"
//               value={lead.phone || "—"}
//             />

//             <LeadInfo
//               icon={<Mail size={14} />}
//               label="Email"
//               value={lead.email || "—"}
//             />

//             <LeadInfo
//               icon={<Building2 size={14} />}
//               label="Property Interest"
//               value={
//                 lead.propertyInterest || "—"
//               }
//             />

//             <LeadInfo
//               icon={<Users size={14} />}
//               label="Assigned To"
//               value={
//                 lead.assignedTo?.name ||
//                 "Unassigned"
//               }
//             />

//             <LeadInfo
//               icon={<Clock3 size={14} />}
//               label="Last Contact"
//               value={formatDate(
//                 lead.lastContact
//               )}
//             />

//             <div className="sm:col-span-2">
//               <LeadInfo
//                 label="Notes"
//                 value={lead.notes || "No notes added."}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function LeadInfo({
//   label,
//   value,
//   icon,
// }) {
//   return (
//     <div className="rounded-lg border border-[#edf0f2] bg-white p-3">
//       <div className="flex items-center gap-1.5 text-[#8895a2]">
//         {icon}

//         <p className="text-[9px] font-medium uppercase tracking-wide">
//           {label}
//         </p>
//       </div>

//       <p className="mt-1.5 break-words text-[11px] font-medium leading-5 text-[#34495b]">
//         {value}
//       </p>
//     </div>
//   );
// }

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  Plus,
  RefreshCw,
  Search,
  TrendingUp,
  UserRoundCheck,
  WalletCards,
} from "lucide-react";

import Swal from "sweetalert2";

import {
  createLeadApi,
  getLeadDashboardApi,
  getLeadsApi,
} from "../../../Services/leadservice";

const PIPELINE_STATUSES = [
  "Lead_Created",
  "Lead_Assigned",
  "Lead_Viewed",
  "Lead_Reviewing",
  "Lead_Rejected",
  "Lead_Closed",
  "Successfully_Converted",
];

const LABELS = {
  Lead_Created:
    "Created",
  Lead_Assigned:
    "Assigned",
  Lead_Viewed:
    "Viewed",
  Lead_Reviewing:
    "Reviewing",
  Lead_Rejected:
    "Rejected",
  Lead_Closed:
    "Closed",
  Successfully_Converted:
    "Converted",
};

const formatMoney = (
  amount = 0
) => {
  const value =
    Number(amount || 0);

  if (value >= 10000000) {
    return `₹${(
      value / 10000000
    ).toFixed(1)} Cr`;
  }

  if (value >= 100000) {
    return `₹${(
      value / 100000
    ).toFixed(1)} L`;
  }

  return `₹${value.toLocaleString(
    "en-IN"
  )}`;
};

export default function Leads() {
  const [
    dashboard,
    setDashboard,
  ] = useState({});

  const [
    pipeline,
    setPipeline,
  ] = useState([]);

  const [
    leads,
    setLeads,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    statusFilter,
    setStatusFilter,
  ] = useState("");

  const [
    page,
    setPage,
  ] = useState(1);

  const limit = 10;

  const [
    totalPages,
    setTotalPages,
  ] = useState(1);

  const [
    total,
    setTotal,
  ] = useState(0);

  const [
    showAdd,
    setShowAdd,
  ] = useState(false);

  const [
    form,
    setForm,
  ] = useState({
    buyerName: "",
    phone: "",
    email: "",
    propertyId: "",
    message: "",
    priority: "Medium",
  });

  const fetchDashboard =
    async () => {
      try {
        const response =
          await getLeadDashboardApi();

        setDashboard(
          response?.dashboard ||
            {}
        );

        setPipeline(
          Array.isArray(
            response?.pipeline
          )
            ? response.pipeline
            : []
        );
      } catch (error) {
        console.error(
          "LEAD DASHBOARD ERROR:",
          error
        );
      }
    };

  const fetchLeads =
    async () => {
      try {
        setLoading(true);

        const response =
          await getLeadsApi({
            search,
            status:
              statusFilter,
            page,
            limit,
          });

        setLeads(
          response?.data ||
            response?.leads ||
            []
        );

        setTotal(
          response?.pagination
            ?.total ??
            response?.total ??
            0
        );

        setTotalPages(
          response?.pagination
            ?.totalPages ??
            response?.totalPages ??
            1
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchDashboard();
  }, []);

  useEffect(() => {
    const timer =
      setTimeout(
        fetchLeads,
        250
      );

    return () =>
      clearTimeout(timer);
  }, [
    search,
    statusFilter,
    page,
  ]);

  useEffect(() => {
    setPage(1);
  }, [
    search,
    statusFilter,
  ]);

  const pipelineMap =
    useMemo(
      () =>
        Object.fromEntries(
          pipeline.map(
            (item) => [
              item.status,
              item.count,
            ]
          )
        ),
      [pipeline]
    );

  const createLead =
    async () => {
      if (
        !form.buyerName ||
        !form.propertyId
      ) {
        Swal.fire({
          icon: "warning",
          title:
            "Required fields missing",
          text:
            "Buyer name and property ID are required.",
        });

        return;
      }

      try {
        const response =
          await createLeadApi({
            buyer: {
              name:
                form.buyerName,
              phone:
                form.phone,
              email:
                form.email,
            },
            propertyId:
              form.propertyId,
            message:
              form.message,
            priority:
              form.priority,
            createdBy: {
              name: "Admin",
              role: "Admin",
            },
          });

        if (
          response?.success
        ) {
          setShowAdd(false);

          setForm({
            buyerName: "",
            phone: "",
            email: "",
            propertyId: "",
            message: "",
            priority: "Medium",
          });

          await Promise.all([
            fetchDashboard(),
            fetchLeads(),
          ]);

          Swal.fire({
            icon: "success",
            title:
              "Lead Created",
            timer: 1200,
            showConfirmButton:
              false,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title:
            "Unable to create lead",
          text:
            error?.response
              ?.data
              ?.message ||
            "Please check property ID and buyer details.",
        });
      }
    };

  return (
    <div className="min-h-screen p-1">
      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-[23px] font-semibold text-[#14213d]">
            Lead Operations
          </h1>

          <p className="mt-1 text-[11px] text-slate-500">
            Track lifecycle, assignment, unlock and conversion performance.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              fetchDashboard();
              fetchLeads();
            }}
            className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-600"
          >
            <RefreshCw
              size={13}
            />
            Refresh
          </button>

          <button
            onClick={() =>
              setShowAdd(true)
            }
            className="flex h-9 items-center gap-2 rounded-lg bg-emerald-600 px-3 text-[10px] font-semibold text-white"
          >
            <Plus size={14} />
            New Lead
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Metric
          label="Total Leads"
          value={
            dashboard.totalLeads ||
            0
          }
          icon={
            <TrendingUp
              size={17}
            />
          }
        />

        <Metric
          label="Conversion Rate"
          value={`${
            dashboard.conversionRate ||
            0
          }%`}
          icon={
            <TrendingUp
              size={17}
            />
          }
        />

        <Metric
          label="Active Lead Value"
          value={formatMoney(
            dashboard.totalLeadValue
          )}
          icon={
            <WalletCards
              size={17}
            />
          }
        />

        <Metric
          label="Unlocked By Partner"
          value={
            dashboard.unlocked ||
            0
          }
          icon={
            <UserRoundCheck
              size={17}
            />
          }
        />
      </div>

      <section className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-4 py-3">
          <h2 className="text-[12px] font-semibold text-slate-800">
            Lead Lifecycle Pipeline
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4 xl:grid-cols-7">
          {PIPELINE_STATUSES.map(
            (status) => (
              <button
                key={status}
                onClick={() => {
                  setStatusFilter(
                    status
                  );
                  setPage(1);
                }}
                className={`rounded-lg border p-3 text-left transition ${
                  statusFilter ===
                  status
                    ? "border-emerald-400 bg-emerald-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p className="text-[8px] uppercase tracking-wide text-slate-400">
                  {
                    LABELS[
                      status
                    ]
                  }
                </p>

                <p className="mt-2 text-xl font-bold text-slate-800">
                  {pipelineMap[
                    status
                  ] || 0}
                </p>
              </button>
            )
          )}
        </div>
      </section>

      <section className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search leads..."
              className="h-9 w-full rounded-lg border border-slate-200 pl-9 pr-3 text-[10px]"
            />
          </div>

          <select
            value={
              statusFilter
            }
            onChange={(e) =>
              setStatusFilter(
                e.target.value
              )
            }
            className="h-9 rounded-lg border border-slate-200 px-3 text-[10px]"
          >
            <option value="">
              All Statuses
            </option>

            {PIPELINE_STATUSES.map(
              (status) => (
                <option
                  key={status}
                  value={status}
                >
                  {
                    LABELS[
                      status
                    ]
                  }
                </option>
              )
            )}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead>
              <tr className="bg-[#082f49] text-left text-white">
                <th className="px-4 py-3 text-[9px]">
                  LEAD
                </th>
                <th className="px-3 py-3 text-[9px]">
                  BUYER
                </th>
                <th className="px-3 py-3 text-[9px]">
                  PROPERTY
                </th>
                <th className="px-3 py-3 text-[9px]">
                  STATUS
                </th>
                <th className="px-3 py-3 text-[9px]">
                  PARTNER
                </th>
                <th className="px-3 py-3 text-[9px]">
                  VALUE
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="h-44 text-center text-xs text-slate-400"
                  >
                    Loading...
                  </td>
                </tr>
              ) : (
                leads.map(
                  (lead) => (
                    <tr
                      key={
                        lead._id
                      }
                      className="border-b border-slate-100"
                    >
                      <td className="px-4 py-3 text-[10px] font-semibold text-slate-800">
                        {
                          lead.leadId
                        }
                      </td>

                      <td className="px-3 py-3">
                        <p className="text-[10px] font-semibold">
                          {lead
                            ?.buyer
                            ?.name ||
                            "-"}
                        </p>
                        <p className="text-[8px] text-slate-400">
                          {lead
                            ?.buyer
                            ?.phone ||
                            lead
                              ?.buyer
                              ?.email ||
                            "-"}
                        </p>
                      </td>

                      <td className="px-3 py-3">
                        <p className="max-w-[200px] truncate text-[10px]">
                          {lead
                            ?.property
                            ?.title ||
                            "-"}
                        </p>
                        <p className="text-[8px] font-semibold text-emerald-600">
                          {lead
                            ?.property
                            ?.propertyCode ||
                            "-"}
                        </p>
                      </td>

                      <td className="px-3 py-3 text-[9px]">
                        {
                          LABELS[
                            lead.status
                          ] ||
                          lead.status
                        }
                      </td>

                      <td className="px-3 py-3 text-[9px]">
                        {lead
                          ?.assignedPartner
                          ?.name ||
                          "Unassigned"}
                      </td>

                      <td className="px-3 py-3 text-[9px] font-semibold">
                        {formatMoney(
                          lead.estimatedValue
                        )}
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
          <p className="text-[9px] text-slate-400">
            {total} lead(s)
          </p>

          <div className="flex gap-1">
            <button
              disabled={
                page === 1
              }
              onClick={() =>
                setPage(
                  (prev) =>
                    Math.max(
                      1,
                      prev - 1
                    )
                )
              }
              className="flex h-7 w-7 items-center justify-center rounded border disabled:opacity-40"
            >
              <ChevronLeft
                size={12}
              />
            </button>

            <span className="flex h-7 min-w-8 items-center justify-center rounded bg-[#082f49] px-2 text-[9px] text-white">
              {page} /{" "}
              {totalPages}
            </span>

            <button
              disabled={
                page ===
                totalPages
              }
              onClick={() =>
                setPage(
                  (prev) =>
                    Math.min(
                      totalPages,
                      prev + 1
                    )
                )
              }
              className="flex h-7 w-7 items-center justify-center rounded border disabled:opacity-40"
            >
              <ChevronRight
                size={12}
              />
            </button>
          </div>
        </div>
      </section>

      {showAdd && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl">
            <h2 className="text-lg font-semibold text-slate-900">
              Create Lead
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Input
                label="Buyer Name"
                value={
                  form.buyerName
                }
                onChange={(
                  value
                ) =>
                  setForm(
                    (prev) => ({
                      ...prev,
                      buyerName:
                        value,
                    })
                  )
                }
              />

              <Input
                label="Phone"
                value={
                  form.phone
                }
                onChange={(
                  value
                ) =>
                  setForm(
                    (prev) => ({
                      ...prev,
                      phone:
                        value,
                    })
                  )
                }
              />

              <Input
                label="Email"
                value={
                  form.email
                }
                onChange={(
                  value
                ) =>
                  setForm(
                    (prev) => ({
                      ...prev,
                      email:
                        value,
                    })
                  )
                }
              />

              <Input
                label="Property Mongo ID / Code"
                value={
                  form.propertyId
                }
                onChange={(
                  value
                ) =>
                  setForm(
                    (prev) => ({
                      ...prev,
                      propertyId:
                        value,
                    })
                  )
                }
              />

              <select
                value={
                  form.priority
                }
                onChange={(e) =>
                  setForm(
                    (prev) => ({
                      ...prev,
                      priority:
                        e.target
                          .value,
                    })
                  )
                }
                className="h-10 rounded-lg border border-slate-200 px-3 text-[10px]"
              >
                {[
                  "Low",
                  "Medium",
                  "High",
                  "Urgent",
                ].map(
                  (item) => (
                    <option
                      key={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>

              <textarea
                value={
                  form.message
                }
                onChange={(e) =>
                  setForm(
                    (prev) => ({
                      ...prev,
                      message:
                        e.target
                          .value,
                    })
                  )
                }
                placeholder="Lead notes / enquiry..."
                className="min-h-24 rounded-lg border border-slate-200 p-3 text-[10px] sm:col-span-2"
              />
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() =>
                  setShowAdd(
                    false
                  )
                }
                className="h-9 rounded-lg border border-slate-200 px-4 text-[10px] font-semibold"
              >
                Cancel
              </button>

              <button
                onClick={
                  createLead
                }
                className="h-9 rounded-lg bg-emerald-600 px-4 text-[10px] font-semibold text-white"
              >
                Create Lead
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Metric({
  label,
  value,
  icon,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-[9px] uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <span className="text-emerald-600">
          {icon}
        </span>
      </div>

      <p className="mt-2 text-xl font-bold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}) {
  return (
    <label>
      <span className="mb-1 block text-[9px] font-semibold text-slate-500">
        {label}
      </span>

      <input
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        className="h-10 w-full rounded-lg border border-slate-200 px-3 text-[10px]"
      />
    </label>
  );
}
