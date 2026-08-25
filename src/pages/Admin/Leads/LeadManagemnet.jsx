// // import React, { useState } from 'react';
// // import { 
// //   ArrowLeft, Download, RefreshCw, Plus, Search, Filter, 
// //   ChevronRight, ChevronLeft, Phone, MessageSquare, AlertTriangle, 
// //   CheckCircle, Calendar, User, Building, MapPin, Edit3, MoreVertical, Clock 
// // } from 'lucide-react';

// // // Sample Dynamic Data
// // const initialLeadsData = [
// //   {
// //     id: "LD-9001",
// //     source: "Web Form",
// //     buyer: "Rahul Sharma",
// //     phone: "+91 98765 43210",
// //     property: "Godrej Woods - 3BHK",
// //     location: "Sector 43, Noida",
// //     price: "₹1.8 Cr",
// //     seller: "Aarav Estates",
// //     partner: "Aakash Realty",
// //     partnerRole: "Premium Agent",
// //     created: "Oct 24, 2025 - 10:30 AM",
// //     status: "New",
// //     contactStatus: "Pending"
// //   },
// //   {
// //     id: "LD-9018",
// //     source: "App Ref",
// //     buyer: "Priya Desai",
// //     phone: "+91 99887 76655",
// //     property: "Prestige Falcon City",
// //     location: "Kanakapura Road, Blr",
// //     price: "₹1.5 Cr",
// //     seller: "Urban Homes",
// //     partner: "Direct",
// //     partnerRole: "Internal Sales",
// //     created: "Oct 23, 2025 - 04:15 PM",
// //     status: "Visit Scheduled",
// //     contactStatus: "Connected"
// //   },
// //   {
// //     id: "LD-8955",
// //     source: "Campaign",
// //     buyer: "Amit Patel",
// //     phone: "amit.p@email.com",
// //     property: "Lodha Altamount",
// //     location: "Altamount Rd, Mumbai",
// //     price: "₹4.2 Cr",
// //     seller: "Prime Realty",
// //     partner: "Mumbai Props",
// //     partnerRole: "Standard Agent",
// //     created: "Oct 20, 2025 - 09:00 AM",
// //     status: "Disputed",
// //     contactStatus: "Failed"
// //   },
// //   {
// //     id: "LD-8864",
// //     source: "Direct",
// //     buyer: "Neha Gupta",
// //     phone: "+91 91234 56789",
// //     property: "DLF Camellias",
// //     location: "Golf Course Rd, GGN",
// //     price: "₹8.5 Cr",
// //     seller: "DLF Ltd",
// //     partner: "Direct",
// //     partnerRole: "Internal Sales",
// //     created: "Oct 19, 2025 - 02:20 PM",
// //     status: "Completed",
// //     contactStatus: "Connected"
// //   }
// // ];

// // export default function LeadManagementApp() {
// //   const [selectedLead, setSelectedLead] = useState(null);
// //   const [activeTab, setActiveTab] = useState('All Leads');
// //   const [searchQuery, setSearchQuery] = useState('');

// //   // Status Badge Component
// //   const StatusBadge = ({ status }) => {
// //     const styles = {
// //       'New': 'bg-blue-50 text-blue-600 border-blue-200',
// //       'Assigned': 'bg-emerald-50 text-emerald-600 border-emerald-200',
// //       'Visit Scheduled': 'bg-orange-50 text-orange-600 border-orange-200',
// //       'Completed': 'bg-teal-50 text-teal-600 border-teal-200',
// //       'Disputed': 'bg-amber-50 text-amber-600 border-amber-200',
// //       'Unlocked': 'bg-purple-50 text-purple-600 border-purple-200'
// //     };

// //     return (
// //       <span className={`px-3 py-1 text-xs font-medium rounded-full border ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
// //         {status}
// //       </span>
// //     );
// //   };

// //   // Screening 1: Lead Management List View
// //   const renderListView = () => (
// //     <div className="p-6 bg-slate-50 min-h-screen text-slate-800">
// //       {/* Header */}
// //       <div className="flex justify-between items-start mb-6">
// //         <div>
// //           <h1 className="text-2xl font-bold text-slate-900">Lead Management</h1>
// //           <p className="text-sm text-slate-500 mt-1">
// //             Manage buyer enquiries, lead assignments, contact activity, visits, disputes, and outcomes.
// //           </p>
// //         </div>
// //         <div className="flex gap-3">
// //           <button className="flex items-center gap-2 px-3 py-1.5 border bg-white rounded-lg text-sm text-slate-600 hover:bg-slate-50">
// //             <Download size={14} /> Export
// //           </button>
// //           <button className="flex items-center gap-2 px-3 py-1.5 border bg-white rounded-lg text-sm text-slate-600 hover:bg-slate-50">
// //             <RefreshCw size={14} /> Refresh
// //           </button>
// //           <button className="flex items-center gap-2 px-4 py-1.5 bg-emerald-600 text-white font-medium rounded-lg text-sm hover:bg-emerald-700">
// //             <Plus size={16} /> Add Lead
// //           </button>
// //         </div>
// //       </div>

// //       {/* Top Metric Cards */}
// //       <div className="grid grid-cols-5 gap-4 mb-6">
// //         {[
// //           { label: 'NEW', count: '124', color: 'border-l-4 border-blue-500', text: 'text-slate-900' },
// //           { label: 'UNLOCKED', count: '89', color: 'border-l-4 border-purple-500', text: 'text-slate-900' },
// //           { label: 'ASSIGNED', count: '245', color: 'border-l-4 border-indigo-500', text: 'text-slate-900' },
// //           { label: 'COMPLETED', count: '1,432', color: 'border-l-4 border-emerald-500', text: 'text-slate-900' },
// //           { label: 'DISPUTED', count: '12', color: 'border-l-4 border-amber-500', text: 'text-amber-600' }
// //         ].map((metric, idx) => (
// //           <div key={idx} className={`bg-white p-4 rounded-xl shadow-sm border border-slate-100 ${metric.color}`}>
// //             <span className="text-xs font-semibold text-slate-400 tracking-wider">{metric.label}</span>
// //             <div className={`text-2xl font-bold mt-2 ${metric.text}`}>{metric.count}</div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Navigation Tabs */}
// //       <div className="flex border-b border-slate-200 mb-4 gap-6 text-sm">
// //         {['All Leads', 'New', 'Unlocked', 'Assigned', 'Contacted', 'Visit Scheduled', 'Completed', 'Disputed'].map((tab) => (
// //           <button
// //             key={tab}
// //             onClick={() => setActiveTab(tab)}
// //             className={`pb-3 font-medium transition-all ${
// //               activeTab === tab
// //                 ? 'border-b-2 border-emerald-600 text-emerald-600'
// //                 : 'text-slate-500 hover:text-slate-800'
// //             }`}
// //           >
// //             {tab}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Filter and Search Bar */}
// //       <div className="flex items-center justify-between gap-4 mb-4">
// //         <div className="flex items-center gap-3 flex-1">
// //           <div className="relative flex-1 max-w-xs">
// //             <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
// //             <input
// //               type="text"
// //               placeholder="Search Lead ID / Buyer"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
// //             />
// //           </div>
// //           <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-600">
// //             <option>Property</option>
// //           </select>
// //           <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-600">
// //             <option>Partner</option>
// //           </select>
// //           <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-600">
// //             <option>Status</option>
// //           </select>
// //           <button className="flex items-center gap-2 border bg-white rounded-lg px-3 py-1.5 text-sm text-slate-600">
// //             <Calendar size={14} /> Date Range
// //           </button>
// //         </div>
// //         <button className="text-xs text-slate-400 hover:text-slate-600 font-medium">Clear Filters</button>
// //       </div>

// //       {/* Table Area */}
// //       <div className="bg-slate-900 rounded-xl overflow-hidden shadow">
// //         <table className="w-full text-left text-sm text-slate-300">
// //           <thead className="bg-slate-950 text-slate-100 uppercase text-[11px] tracking-wider border-b border-slate-800">
// //             <tr>
// //               <th className="p-4">Lead ID</th>
// //               <th className="p-4">Buyer</th>
// //               <th className="p-4">Property</th>
// //               <th className="p-4">Partner</th>
// //               <th className="p-4">Created</th>
// //               <th className="p-4">Status</th>
// //               <th className="p-4">Contact</th>
// //               <th className="p-4">Action</th>
// //             </tr>
// //           </thead>
// //           <tbody className="bg-white text-slate-700 divide-y divide-slate-100">
// //             {initialLeadsData.map((lead) => (
// //               <tr 
// //                 key={lead.id} 
// //                 onClick={() => setSelectedLead(lead)} 
// //                 className="hover:bg-slate-50 cursor-pointer transition-colors"
// //               >
// //                 <td className="p-4">
// //                   <div className="font-semibold text-slate-900">{lead.id}</div>
// //                   <div className="text-xs text-slate-400">{lead.source}</div>
// //                 </td>
// //                 <td className="p-4">
// //                   <div className="font-medium text-slate-900">{lead.buyer}</div>
// //                   <div className="text-xs text-slate-400">{lead.phone}</div>
// //                 </td>
// //                 <td className="p-4">
// //                   <div className="font-medium text-slate-900">{lead.property}</div>
// //                   <div className="text-xs text-slate-400">{lead.location}</div>
// //                 </td>
// //                 <td className="p-4">
// //                   <div className="font-medium text-slate-900">{lead.partner}</div>
// //                   <div className="text-xs text-slate-400">{lead.partnerRole}</div>
// //                 </td>
// //                 <td className="p-4 text-xs text-slate-500 whitespace-pre-line">{lead.created}</td>
// //                 <td className="p-4">
// //                   <StatusBadge status={lead.status} />
// //                 </td>
// //                 <td className="p-4">
// //                   <span className="text-slate-400 font-bold">8</span>
// //                 </td>
// //                 <td className="p-4 text-slate-400 hover:text-slate-600">
// //                   <MoreVertical size={16} />
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>

// //         {/* Pagination */}
// //         <div className="bg-white p-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
// //           <div>Showing 1 to 10 of 2,451 entries</div>
// //           <div className="flex items-center gap-1">
// //             <button className="p-1 border rounded hover:bg-slate-50"><ChevronLeft size={14} /></button>
// //             <button className="px-2 py-1 bg-slate-900 text-white font-medium rounded">1</button>
// //             <button className="px-2 py-1 border rounded hover:bg-slate-50">2</button>
// //             <button className="px-2 py-1 border rounded hover:bg-slate-50">3</button>
// //             <span>...</span>
// //             <button className="p-1 border rounded hover:bg-slate-50"><ChevronRight size={14} /></button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   // Screen 2: Lead Details View
// //   const renderDetailView = () => (
// //     <div className="p-6 bg-slate-100 min-h-screen text-slate-800">
// //       {/* Top Bar Navigation */}
// //       <button 
// //         onClick={() => setSelectedLead(null)} 
// //         className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 mb-2 font-medium"
// //       >
// //         <ArrowLeft size={14} /> Back to Queue
// //       </button>

// //       <div className="flex justify-between items-center mb-6">
// //         <div>
// //           <h1 className="text-2xl font-bold text-slate-900">Lead: {selectedLead.id}</h1>
// //           <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
// //             <span className="flex items-center gap-1 text-emerald-600 font-semibold">
// //               <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {selectedLead.status}
// //             </span>
// //             <span>•</span>
// //             <span>Created: {selectedLead.created}</span>
// //           </div>
// //         </div>
// //         <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-700 font-medium hover:bg-slate-50">
// //           Edit Details
// //         </button>
// //       </div>

// //       {/* Main Details Grid */}
// //       <div className="grid grid-cols-12 gap-6">
        
// //         {/* Left Column (Buyer Profile & Property Card) */}
// //         <div className="col-span-3 space-y-6">
// //           {/* Buyer Card */}
// //           <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="font-semibold text-slate-900 text-sm">Buyer Profile</h3>
// //               <ChevronRight size={16} className="text-slate-400 rotate-90" />
// //             </div>
// //             <div className="space-y-3 text-xs">
// //               <div>
// //                 <p className="text-slate-400">Name</p>
// //                 <p className="font-medium text-slate-800 mt-0.5">{selectedLead.buyer}</p>
// //               </div>
// //               <div>
// //                 <p className="text-slate-400">Contact</p>
// //                 <p className="font-medium text-slate-800 mt-0.5">{selectedLead.phone}</p>
// //               </div>
// //               <div>
// //                 <p className="text-slate-400">Location</p>
// //                 <p className="font-medium text-slate-800 mt-0.5">{selectedLead.location}</p>
// //               </div>
// //               <div>
// //                 <p className="text-slate-400">Consent Status</p>
// //                 <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-semibold border border-emerald-200 rounded">
// //                   ✓ Verified
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Property Overview Card */}
// //           <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
// //             <div className="h-32 bg-slate-200 relative">
// //               <img 
// //                 src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80" 
// //                 alt="Property" 
// //                 className="w-full h-full object-cover"
// //               />
// //               <span className="absolute top-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">
// //                 PROP-8842
// //               </span>
// //             </div>
// //             <div className="p-4 space-y-2">
// //               <h4 className="font-bold text-slate-900 text-sm">{selectedLead.property}</h4>
// //               <p className="text-emerald-600 font-bold text-base">{selectedLead.price}</p>
// //               <div className="flex items-center gap-1 text-slate-400 text-xs">
// //                 <MapPin size={12} /> {selectedLead.location}
// //               </div>
// //               <div className="flex items-center gap-1 text-slate-400 text-xs pt-1 border-t">
// //                 <Building size={12} /> Seller: {selectedLead.seller}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Center Column (Lifecycle, Site Visit & Contact History) */}
// //         <div className="col-span-6 space-y-6">
// //           {/* Lifecycle & Site Visit Row */}
// //           <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
// //             <div className="grid grid-cols-2 gap-6">
// //               {/* Lifecycle Progress */}
// //               <div>
// //                 <h3 className="font-semibold text-slate-900 text-sm mb-4 flex items-center gap-2">
// //                   <span>📈</span> Lifecycle
// //                 </h3>
// //                 <div className="space-y-4 text-xs border-l-2 border-slate-100 pl-3 ml-1">
// //                   <div className="relative">
// //                     <span className="absolute -left-[17px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
// //                     <p className="text-slate-400 text-[10px]">18 Aug, 09:15 AM</p>
// //                     <p className="font-semibold text-slate-800">Assigned to Partner</p>
// //                   </div>
// //                   <div className="relative">
// //                     <span className="absolute -left-[17px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
// //                     <p className="text-slate-400 text-[10px]">17 Aug, 11:30 AM</p>
// //                     <p className="font-semibold text-slate-800">Unlocked by Buyer</p>
// //                   </div>
// //                   <div className="relative">
// //                     <span className="absolute -left-[17px] top-0 w-2.5 h-2.5 rounded-full bg-slate-300"></span>
// //                     <p className="text-slate-400 text-[10px]">17 Aug, 10:40 AM</p>
// //                     <p className="font-semibold text-slate-800">Lead Created</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Site Visit Info */}
// //               <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
// //                 <div>
// //                   <div className="flex justify-between items-center mb-2">
// //                     <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
// //                       <Calendar size={14} /> Site Visit
// //                     </span>
// //                     <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-semibold">
// //                       SCHEDULED
// //                     </span>
// //                   </div>
// //                   <div className="text-2xl font-black text-slate-900 mt-2">20 Aug</div>
// //                   <p className="text-xs text-slate-500 font-medium">4:00 PM</p>
// //                 </div>
// //                 <div className="flex gap-2 mt-4">
// //                   <button className="flex-1 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs rounded font-medium">Reschedule</button>
// //                   <button className="flex-1 py-1.5 bg-emerald-800 text-white text-xs rounded font-medium">Log Result</button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact History Table */}
// //           <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="font-semibold text-slate-900 text-sm">Contact History</h3>
// //               <button className="text-xs text-emerald-600 font-semibold hover:underline">Add Note</button>
// //             </div>
// //             <table className="w-full text-left text-xs">
// //               <thead className="text-slate-400 uppercase text-[10px] border-b pb-2">
// //                 <tr>
// //                   <th className="pb-2">Type</th>
// //                   <th className="pb-2">Timestamp</th>
// //                   <th className="pb-2">Status</th>
// //                   <th className="pb-2">Agent</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-slate-100">
// //                 <tr>
// //                   <td className="py-2.5 flex items-center gap-1.5 font-medium"><Phone size={12} /> Call</td>
// //                   <td className="py-2.5 text-slate-500">18 Aug, 02:15 PM</td>
// //                   <td className="py-2.5"><span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px]">Connected</span></td>
// //                   <td className="py-2.5 text-slate-500">Agent 4</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="py-2.5 flex items-center gap-1.5 font-medium"><MessageSquare size={12} /> SMS</td>
// //                   <td className="py-2.5 text-slate-500">18 Aug, 09:20 AM</td>
// //                   <td className="py-2.5"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px]">Sent</span></td>
// //                   <td className="py-2.5 text-slate-500">System</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="py-2.5 flex items-center gap-1.5 font-medium"><Phone size={12} /> Call</td>
// //                   <td className="py-2.5 text-slate-500">17 Aug, 06:00 PM</td>
// //                   <td className="py-2.5"><span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px]">Attempted</span></td>
// //                   <td className="py-2.5 text-slate-500">Agent 2</td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Right Column (Workflow State, Partner, Operational Actions) */}
// //         <div className="col-span-3 space-y-6">
// //           {/* Workflow State Selection */}
// //           <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
// //             <h3 className="font-semibold text-slate-900 text-sm mb-3">Workflow State</h3>
// //             <div className="space-y-2">
// //               {['New', 'Assigned', 'Contacted', 'Completed', 'Disputed'].map((state) => (
// //                 <label 
// //                   key={state} 
// //                   className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer ${
// //                     selectedLead.status === state 
// //                       ? 'border-emerald-500 bg-emerald-50/30 text-emerald-900 font-semibold' 
// //                       : 'border-slate-200 text-slate-600'
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-2">
// //                     <input 
// //                       type="radio" 
// //                       name="workflow" 
// //                       checked={selectedLead.status === state}
// //                       onChange={() => setSelectedLead({ ...selectedLead, status: state })}
// //                       className="text-emerald-600 focus:ring-emerald-500"
// //                     />
// //                     {state}
// //                   </div>
// //                   {selectedLead.status === state && <CheckCircle size={14} className="text-emerald-600" />}
// //                 </label>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Current Partner info */}
// //           <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
// //             <div className="flex justify-between items-center text-xs">
// //               <span className="text-slate-400 font-medium">CURRENT PARTNER</span>
// //               <span className="bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded">Assigned</span>
// //             </div>
// //             <p className="font-bold text-slate-900 text-sm mt-1">{selectedLead.partner}</p>
// //             <p className="text-xs text-slate-400 mt-0.5">Since 18 Aug 2025</p>
            
// //             <div className="mt-3 bg-red-50 text-red-600 text-xs p-2 rounded-lg flex items-center justify-between font-medium">
// //               <span>SLA Timer</span>
// //               <span className="flex items-center gap-1"><Clock size={12} /> 2h remaining</span>
// //             </div>
// //           </div>

// //           {/* Operational Actions Grid */}
// //           <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
// //             <p className="text-xs text-slate-400 font-medium mb-3">Operational Actions</p>
// //             <div className="grid grid-cols-2 gap-2 text-xs">
// //               <button className="p-3 border border-slate-200 rounded-lg text-slate-700 font-medium flex flex-col items-center gap-1 hover:bg-slate-50">
// //                 <RefreshCw size={14} /> Reassign Partner
// //               </button>
// //               <button className="p-3 border border-slate-200 rounded-lg text-slate-700 font-medium flex flex-col items-center gap-1 hover:bg-slate-50">
// //                 <Calendar size={14} /> Schedule Visit
// //               </button>
// //               <button className="p-3 border border-slate-200 rounded-lg text-slate-700 font-medium flex flex-col items-center gap-1 hover:bg-slate-50">
// //                 <User size={14} /> Mark Contacted
// //               </button>
// //               <button className="p-3 border border-slate-200 rounded-lg text-slate-700 font-medium flex flex-col items-center gap-1 hover:bg-slate-50">
// //                 <CheckCircle size={14} /> Mark Completed
// //               </button>
// //             </div>
            
// //             <button className="w-full mt-3 py-2 border border-red-200 bg-red-50 text-red-600 font-medium rounded-lg text-xs flex items-center justify-center gap-1 hover:bg-red-100">
// //               <AlertTriangle size={14} /> Open Dispute
// //             </button>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );

// //   return selectedLead ? renderDetailView() : renderListView();
// // }


// import React, {
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

// import {
//   ArrowLeft,
//   Building2,
//   CalendarDays,
//   CheckCircle2,
//   ChevronLeft,
//   ChevronRight,
//   Clock3,
//   Eye,
//   Mail,
//   MapPin,
//   MessageSquare,
//   Phone,
//   RefreshCw,
//   Search,
//   ShieldCheck,
//   UserRound,
//   UserRoundCheck,
//   XCircle,
// } from "lucide-react";

// import {
//   useNavigate,
// } from "react-router-dom";

// import Swal from "sweetalert2";

// import {
//   addLeadContactHistoryApi,
//   assignLeadPartnerApi,
//   closeLeadApi,
//   convertLeadApi,
//   getLeadByIdApi,
//   getLeadsApi,
//   rejectLeadApi,
//   reviewLeadApi,
//   updateLeadStatusApi,
// } from "../../../Services/leadservice";


// const STATUSES = [
//   "Lead_Created",
//   "Lead_Assigned",
//   "Lead_Viewed",
//   "Lead_Reviewing",
//   "Lead_Rejected",
//   "Lead_Closed",
//   "Successfully_Converted",
// ];

// const STATUS_LABELS = {
//   Lead_Created:
//     "Lead Created",
//   Lead_Assigned:
//     "Lead Assigned",
//   Lead_Viewed:
//     "Lead Viewed",
//   Lead_Reviewing:
//     "Lead Reviewing",
//   Lead_Rejected:
//     "Lead Rejected",
//   Lead_Closed:
//     "Lead Closed",
//   Successfully_Converted:
//     "Successfully Converted",
// };

// const STATUS_CLASS = {
//   Lead_Created:
//     "border-blue-200 bg-blue-50 text-blue-700",
//   Lead_Assigned:
//     "border-amber-200 bg-amber-50 text-amber-700",
//   Lead_Viewed:
//     "border-cyan-200 bg-cyan-50 text-cyan-700",
//   Lead_Reviewing:
//     "border-orange-200 bg-orange-50 text-orange-700",
//   Lead_Rejected:
//     "border-red-200 bg-red-50 text-red-700",
//   Lead_Closed:
//     "border-slate-200 bg-slate-100 text-slate-700",
//   Successfully_Converted:
//     "border-emerald-200 bg-emerald-50 text-emerald-700",
// };

// const formatDateTime = (
//   value
// ) => {
//   if (!value) return "-";

//   return new Date(
//     value
//   ).toLocaleString(
//     "en-IN",
//     {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     }
//   );
// };

// const formatPrice = (
//   value
// ) => {
//   const amount =
//     Number(value || 0);

//   if (amount >= 10000000) {
//     return `₹${(
//       amount / 10000000
//     ).toFixed(2)} Cr`;
//   }

//   if (amount >= 100000) {
//     return `₹${(
//       amount / 100000
//     ).toFixed(2)} L`;
//   }

//   return `₹${amount.toLocaleString(
//     "en-IN"
//   )}`;
// };

// const StatusBadge = ({
//   status,
// }) => (
//   <span
//     className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-semibold ${
//       STATUS_CLASS[
//         status
//       ] ||
//       "border-slate-200 bg-slate-50 text-slate-600"
//     }`}
//   >
//     {STATUS_LABELS[
//       status
//     ] ||
//       status ||
//       "-"}
//   </span>
// );

// export default function LeadManagement() {
//   const navigate =
//     useNavigate();

//   const [
//     leads,
//     setLeads,
//   ] = useState([]);

//   const [
//     selectedLead,
//     setSelectedLead,
//   ] = useState(null);

//   const [
//     loading,
//     setLoading,
//   ] = useState(true);

//   const [
//     detailLoading,
//     setDetailLoading,
//   ] = useState(false);

//   const [
//     actionLoading,
//     setActionLoading,
//   ] = useState(false);

//   const [
//     search,
//     setSearch,
//   ] = useState("");

//   const [
//     statusFilter,
//     setStatusFilter,
//   ] = useState("");

//   const [
//     page,
//     setPage,
//   ] = useState(1);

//   const limit = 10;

//   const [
//     total,
//     setTotal,
//   ] = useState(0);

//   const [
//     totalPages,
//     setTotalPages,
//   ] = useState(1);



//   const [
//     contactForm,
//     setContactForm,
//   ] = useState({
//     type: "Call",
//     status: "Attempted",
//     notes: "",
//   });

//   const fetchLeads =
//     async () => {
//       try {
//         setLoading(true);

//         const response =
//           await getLeadsApi({
//             search,
//             status:
//               statusFilter,
//             page,
//             limit,
//           });

//         const data =
//           response?.data ||
//           response?.leads ||
//           [];

//         setLeads(
//           Array.isArray(data)
//             ? data
//             : []
//         );

//         const pagination =
//           response?.pagination ||
//           {};

//         setTotal(
//           pagination.total ??
//             response?.total ??
//             0
//         );

//         setTotalPages(
//           pagination.totalPages ??
//             response?.totalPages ??
//             1
//         );
//       } catch (error) {
//         console.error(
//           "GET LEADS ERROR:",
//           error
//         );

//         setLeads([]);
//       } finally {
//         setLoading(false);
//       }
//     };


//   useEffect(() => {
//     const timer =
//       setTimeout(
//         fetchLeads,
//         300
//       );

//     return () =>
//       clearTimeout(timer);
//   }, [
//     search,
//     statusFilter,
//     page,
//   ]);


//   useEffect(() => {
//     setPage(1);
//   }, [
//     search,
//     statusFilter,
//   ]);

//   const openLead =
//     async (id) => {
//       try {
//         setDetailLoading(
//           true
//         );

//         const response =
//           await getLeadByIdApi(
//             id
//           );

//         setSelectedLead(
//           response?.data ||
//             null
//         );
//       } catch (error) {
//         Swal.fire({
//           icon: "error",
//           title:
//             "Lead not found",
//           text:
//             error?.response
//               ?.data
//               ?.message ||
//             "Unable to load lead.",
//         });
//       } finally {
//         setDetailLoading(
//           false
//         );
//       }
//     };

//   const refreshSelected =
//     async () => {
//       if (
//         selectedLead?._id
//       ) {
//         await openLead(
//           selectedLead._id
//         );
//       }

//       await fetchLeads();
//     };

//   const runAction =
//     async (
//       fn,
//       successMessage
//     ) => {
//       try {
//         setActionLoading(
//           true
//         );

//         await fn();

//         await Swal.fire({
//           icon: "success",
//           title:
//             successMessage,
//           timer: 1200,
//           showConfirmButton:
//             false,
//         });

//         await refreshSelected();
//       } catch (error) {
//         Swal.fire({
//           icon: "error",
//           title:
//             "Action failed",
//           text:
//             error?.response
//               ?.data
//               ?.message ||
//             error?.message ||
//             "Unable to update lead.",
//         });
//       } finally {
//         setActionLoading(
//           false
//         );
//       }
//     };


//   const handleStatus =
//     async (status) => {
//       if (!selectedLead?._id)
//         return;

//       await runAction(
//         () =>
//           updateLeadStatusApi(
//             selectedLead._id,
//             {
//               status,
//               actor: {
//                 name: "Admin",
//                 role: "Admin",
//               },
//             }
//           ),
//         "Status Updated"
//       );
//     };

//   const handleReview =
//     async () => {
//       const {
//         value: notes,
//       } = await Swal.fire({
//         title:
//           "Review Lead",
//         input: "textarea",
//         inputLabel:
//           "Review notes",
//         showCancelButton:
//           true,
//         confirmButtonColor:
//           "#08786b",
//       });

//       if (notes === undefined)
//         return;

//       await runAction(
//         () =>
//           reviewLeadApi(
//             selectedLead._id,
//             {
//               notes,
//               actor: {
//                 name: "Admin",
//                 role: "Admin",
//               },
//             }
//           ),
//         "Lead In Review"
//       );
//     };

//   const handleReject =
//     async () => {
//       const {
//         value: reason,
//       } = await Swal.fire({
//         title:
//           "Reject Lead",
//         input: "textarea",
//         inputLabel:
//           "Reason",
//         showCancelButton:
//           true,
//         confirmButtonColor:
//           "#dc2626",
//       });

//       if (!reason) return;

//       await runAction(
//         () =>
//           rejectLeadApi(
//             selectedLead._id,
//             {
//               reason,
//               actor: {
//                 name: "Admin",
//                 role: "Admin",
//               },
//             }
//           ),
//         "Lead Rejected"
//       );
//     };

//   const handleClose =
//     async () => {
//       const {
//         value: reason,
//       } = await Swal.fire({
//         title:
//           "Close Lead",
//         input: "textarea",
//         inputLabel:
//           "Closure reason",
//         showCancelButton:
//           true,
//         confirmButtonColor:
//           "#475569",
//       });

//       if (!reason) return;

//       await runAction(
//         () =>
//           closeLeadApi(
//             selectedLead._id,
//             {
//               reason,
//               actor: {
//                 name: "Admin",
//                 role: "Admin",
//               },
//             }
//           ),
//         "Lead Closed"
//       );
//     };

//   const handleConvert =
//     async () => {
//       const result =
//         await Swal.fire({
//           title:
//             "Convert Lead",
//           html: `
//             <input
//               id="conversion-amount"
//               class="swal2-input"
//               type="number"
//               placeholder="Conversion amount"
//             />
//             <textarea
//               id="conversion-notes"
//               class="swal2-textarea"
//               placeholder="Conversion notes"
//             ></textarea>
//           `,
//           showCancelButton:
//             true,
//           confirmButtonColor:
//             "#08786b",
//           preConfirm: () => ({
//             amount:
//               document.getElementById(
//                 "conversion-amount"
//               )?.value || 0,
//             notes:
//               document.getElementById(
//                 "conversion-notes"
//               )?.value || "",
//           }),
//         });

//       if (!result.isConfirmed)
//         return;

//       await runAction(
//         () =>
//           convertLeadApi(
//             selectedLead._id,
//             {
//               ...result.value,
//               actor: {
//                 name: "Admin",
//                 role: "Admin",
//               },
//             }
//           ),
//         "Lead Converted"
//       );
//     };

//   const handleContact =
//     async () => {
//       if (
//         !selectedLead?._id
//       ) {
//         return;
//       }

//       await runAction(
//         () =>
//           addLeadContactHistoryApi(
//             selectedLead._id,
//             {
//               ...contactForm,
//               doneBy: {
//                 name: "Admin",
//                 role: "Admin",
//               },
//             }
//           ),
//         "Contact Added"
//       );

//       setContactForm({
//         type: "Call",
//         status:
//           "Attempted",
//         notes: "",
//       });
//     };

//   if (
//     selectedLead ||
//     detailLoading
//   ) {
//     return (
//       <div className="min-h-screen p-1">
//         <button
//           type="button"
//           onClick={() =>
//             setSelectedLead(
//               null
//             )
//           }
//           className="mb-3 flex items-center gap-1 text-[11px] font-semibold text-slate-500"
//         >
//           <ArrowLeft
//             size={14}
//           />
//           Back to Lead Queue
//         </button>

//         {detailLoading ? (
//           <div className="flex min-h-[500px] items-center justify-center">
//             <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-emerald-500" />
//           </div>
//         ) : (
//           <LeadDetail
//             lead={
//               selectedLead
//             }
//             handleStatus={
//               handleStatus
//             }
//             handleReview={
//               handleReview
//             }
//             handleReject={
//               handleReject
//             }
//             handleClose={
//               handleClose
//             }
//             handleConvert={
//               handleConvert
//             }
//             actionLoading={
//               actionLoading
//             }
//             navigate={
//               navigate
//             }
//             contactForm={
//               contactForm
//             }
//             setContactForm={
//               setContactForm
//             }
//             handleContact={
//               handleContact
//             }
//           />
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen p-1">
//       <div className="mb-5 flex flex-col justify-between gap-3 lg:flex-row lg:items-start">
//         <div>
//           <h1 className="text-[23px] font-semibold text-[#14213d]">
//             Lead Management
//           </h1>

//           <p className="mt-1 text-[11px] text-slate-500">
//             Manage buyer enquiries, assignments, reviews, contact history and conversion.
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={
//             fetchLeads
//           }
//           className="flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-600"
//         >
//           <RefreshCw
//             size={13}
//           />
//           Refresh
//         </button>
//       </div>

//       <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
//         <div className="flex flex-col gap-3 border-b border-slate-100 p-4 lg:flex-row lg:items-center">
//           <div className="relative flex-1">
//             <Search
//               size={14}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//             />

//             <input
//               value={search}
//               onChange={(e) =>
//                 setSearch(
//                   e.target.value
//                 )
//               }
//               placeholder="Search lead, buyer, property, partner..."
//               className="h-9 w-full rounded-lg border border-slate-200 pl-9 pr-3 text-[11px] outline-none focus:border-emerald-500"
//             />
//           </div>

//           <select
//             value={
//               statusFilter
//             }
//             onChange={(e) =>
//               setStatusFilter(
//                 e.target.value
//               )
//             }
//             className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-[10px]"
//           >
//             <option value="">
//               All Statuses
//             </option>

//             {STATUSES.map(
//               (status) => (
//                 <option
//                   key={status}
//                   value={status}
//                 >
//                   {
//                     STATUS_LABELS[
//                       status
//                     ]
//                   }
//                 </option>
//               )
//             )}
//           </select>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[980px] border-collapse">
//             <thead>
//               <tr className="bg-[#082f49] text-left text-white">
//                 <th className="px-4 py-3 text-[9px]">
//                   LEAD
//                 </th>
//                 <th className="px-3 py-3 text-[9px]">
//                   BUYER
//                 </th>
//                 <th className="px-3 py-3 text-[9px]">
//                   PROPERTY
//                 </th>
//                 <th className="px-3 py-3 text-[9px]">
//                   PARTNER
//                 </th>
//                 <th className="px-3 py-3 text-[9px]">
//                   STATUS
//                 </th>
//                 <th className="px-3 py-3 text-[9px]">
//                   LAST CONTACT
//                 </th>
//                 <th className="px-3 py-3 text-[9px]">
//                   ACTION
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td
//                     colSpan="7"
//                     className="h-48 text-center text-xs text-slate-400"
//                   >
//                     Loading leads...
//                   </td>
//                 </tr>
//               ) : leads.length ===
//                 0 ? (
//                 <tr>
//                   <td
//                     colSpan="7"
//                     className="h-48 text-center text-xs text-slate-400"
//                   >
//                     No leads found.
//                   </td>
//                 </tr>
//               ) : (
//                 leads.map(
//                   (lead) => (
//                     <tr
//                       key={
//                         lead._id
//                       }
//                       className="border-b border-slate-100 hover:bg-slate-50"
//                     >
//                       <td className="px-4 py-3">
//                         <p className="text-[10px] font-bold text-slate-800">
//                           {
//                             lead.leadId
//                           }
//                         </p>
//                         <p className="mt-1 text-[8px] text-slate-400">
//                           {
//                             lead.source
//                           }
//                         </p>
//                       </td>

//                       <td className="px-3 py-3">
//                         <p className="text-[10px] font-semibold text-slate-700">
//                           {
//                             lead
//                               ?.buyer
//                               ?.name
//                           }
//                         </p>
//                         <p className="mt-1 text-[8px] text-slate-400">
//                           {lead
//                             ?.buyer
//                             ?.phone ||
//                             lead
//                               ?.buyer
//                               ?.email ||
//                             "-"}
//                         </p>
//                       </td>

//                       <td className="px-3 py-3">
//                         <p className="max-w-[190px] truncate text-[10px] font-semibold text-slate-700">
//                           {lead
//                             ?.property
//                             ?.title ||
//                             "-"}
//                         </p>
//                         <p className="mt-1 text-[8px] font-semibold text-emerald-600">
//                           {lead
//                             ?.property
//                             ?.propertyCode ||
//                             "-"}
//                         </p>
//                       </td>

//                       <td className="px-3 py-3">
//                         <p className="text-[10px] text-slate-600">
//                           {lead
//                             ?.assignedPartner
//                             ?.name ||
//                             "Unassigned"}
//                         </p>
//                       </td>

//                       <td className="px-3 py-3">
//                         <StatusBadge
//                           status={
//                             lead.status
//                           }
//                         />
//                       </td>

//                       <td className="px-3 py-3 text-[9px] text-slate-500">
//                         {formatDateTime(
//                           lead.lastContactAt
//                         )}
//                       </td>

//                       <td className="px-3 py-3">
//                         <button
//                           type="button"
//                           onClick={() =>
//                             openLead(
//                               lead._id
//                             )
//                           }
//                           className="flex h-8 items-center gap-1 rounded-md border border-emerald-200 px-2.5 text-[9px] font-semibold text-emerald-700"
//                         >
//                           <Eye
//                             size={11}
//                           />
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   )
//                 )
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
//           <p className="text-[9px] text-slate-400">
//             {total} lead(s)
//           </p>

//           <div className="flex items-center gap-1">
//             <button
//               disabled={
//                 page === 1
//               }
//               onClick={() =>
//                 setPage(
//                   (prev) =>
//                     Math.max(
//                       1,
//                       prev - 1
//                     )
//                 )
//               }
//               className="flex h-7 w-7 items-center justify-center rounded border border-slate-200 disabled:opacity-40"
//             >
//               <ChevronLeft
//                 size={12}
//               />
//             </button>

//             {Array.from(
//               {
//                 length:
//                   totalPages,
//               },
//               (_, index) =>
//                 index + 1
//             ).map(
//               (item) => (
//                 <button
//                   key={item}
//                   onClick={() =>
//                     setPage(
//                       item
//                     )
//                   }
//                   className={`h-7 min-w-7 rounded px-2 text-[9px] ${
//                     item ===
//                     page
//                       ? "bg-[#082f49] text-white"
//                       : "border border-slate-200 text-slate-600"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               )
//             )}

//             <button
//               disabled={
//                 page ===
//                 totalPages
//               }
//               onClick={() =>
//                 setPage(
//                   (prev) =>
//                     Math.min(
//                       totalPages,
//                       prev + 1
//                     )
//                 )
//               }
//               className="flex h-7 w-7 items-center justify-center rounded border border-slate-200 disabled:opacity-40"
//             >
//               <ChevronRight
//                 size={12}
//               />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function LeadDetail({
//   lead,
//   handleStatus,
//   handleReview,
//   handleReject,
//   handleClose,
//   handleConvert,
//   actionLoading,
//   navigate,
//   contactForm,
//   setContactForm,
//   handleContact,
// }) {
//   const partnerMongoId =
//     lead?.assignedPartner
//       ?.partnerMongoId;

//   const propertyMongoId =
//     lead?.property
//       ?.propertyMongoId;

//   return (
//     <div>
//       <div className="mb-4 flex flex-col justify-between gap-3 rounded-xl border border-slate-200 bg-white p-5 lg:flex-row lg:items-center">
//         <div>
//           <div className="flex flex-wrap items-center gap-2">
//             <h1 className="text-xl font-bold text-slate-900">
//               Lead:{" "}
//               {lead.leadId}
//             </h1>

//             <StatusBadge
//               status={
//                 lead.status
//               }
//             />

//             {lead.isUnlockedByPartner && (
//               <span className="rounded-full border border-purple-200 bg-purple-50 px-2 py-1 text-[9px] font-semibold text-purple-700">
//                 Unlocked by Partner
//               </span>
//             )}
//           </div>

//           <p className="mt-1 text-[10px] text-slate-400">
//             Created{" "}
//             {formatDateTime(
//               lead.createdAt
//             )}
//           </p>
//         </div>

//         <div className="flex flex-wrap gap-2">
//           <button
//             disabled={
//               !propertyMongoId
//             }
//             onClick={() =>
//               propertyMongoId &&
//               navigate(
//                 `/property-management/${propertyMongoId}`
//               )
//             }
//             className="h-9 rounded-lg bg-[#082f49] px-3 text-[10px] font-semibold text-white disabled:opacity-40"
//           >
//             View Property
//           </button>

//           <button
//             disabled={
//               !partnerMongoId
//             }
//             onClick={() =>
//               partnerMongoId &&
//               navigate(
//                 `/partnerdashboard?tab=dashboard&partnerId=${partnerMongoId}`
//               )
//             }
//             className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-700 disabled:opacity-40"
//           >
//             View Partner
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-4 xl:grid-cols-[280px_minmax(0,1fr)_310px]">
//         <div className="space-y-4">
//           <InfoCard
//             title="Buyer Profile"
//             icon={
//               <UserRound
//                 size={15}
//               />
//             }
//           >
//             <InfoRow
//               label="Name"
//               value={
//                 lead?.buyer?.name
//               }
//             />
//             <InfoRow
//               label="Phone"
//               value={
//                 lead?.buyer?.phone
//               }
//             />
//             <InfoRow
//               label="Email"
//               value={
//                 lead?.buyer?.email
//               }
//             />
//             <InfoRow
//               label="City"
//               value={
//                 lead?.buyer?.city
//               }
//             />
//           </InfoCard>

//           <InfoCard
//             title="Property"
//             icon={
//               <Building2
//                 size={15}
//               />
//             }
//           >
//             {lead?.property
//               ?.image && (
//               <img
//                 src={
//                   lead.property
//                     .image
//                 }
//                 alt=""
//                 className="mb-3 h-32 w-full rounded-lg object-cover"
//               />
//             )}

//             <InfoRow
//               label="Code"
//               value={
//                 lead?.property
//                   ?.propertyCode
//               }
//             />

//             <InfoRow
//               label="Title"
//               value={
//                 lead?.property
//                   ?.title
//               }
//             />

//             <InfoRow
//               label="Price"
//               value={formatPrice(
//                 lead?.property
//                   ?.price
//               )}
//             />

//             <InfoRow
//               label="Location"
//               value={[
//                 lead?.property
//                   ?.locality,
//                 lead?.property
//                   ?.city,
//               ]
//                 .filter(Boolean)
//                 .join(", ")}
//             />

//             <InfoRow
//               label="Added By"
//               value={`${
//                 lead?.property
//                   ?.addedByName ||
//                 "-"
//               } (${
//                 lead?.property
//                   ?.addedByRole ||
//                 "-"
//               })`}
//             />
//           </InfoCard>
//         </div>

//         <div className="space-y-4">
//           <InfoCard
//             title="Lifecycle"
//             icon={
//               <Clock3
//                 size={15}
//               />
//             }
//           >
//             <div className="space-y-3">
//               {(lead.lifecycle ||
//                 [])
//                 .slice()
//                 .reverse()
//                 .map(
//                   (
//                     item,
//                     index
//                   ) => (
//                     <div
//                       key={
//                         item._id ||
//                         index
//                       }
//                       className="flex gap-3"
//                     >
//                       <div className="flex flex-col items-center">
//                         <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
//                         <span className="mt-1 min-h-8 w-px flex-1 bg-slate-200" />
//                       </div>

//                       <div className="pb-2">
//                         <p className="text-[10px] font-semibold text-slate-700">
//                           {item.event ||
//                             STATUS_LABELS[
//                               item
//                                 .status
//                             ] ||
//                             item.status}
//                         </p>

//                         <p className="mt-1 text-[8px] text-slate-400">
//                           {formatDateTime(
//                             item.createdAt
//                           )}
//                           {" • "}
//                           {item?.actor
//                             ?.name ||
//                             "System"}
//                         </p>

//                         {item.remarks && (
//                           <p className="mt-1 text-[9px] text-slate-500">
//                             {
//                               item.remarks
//                             }
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   )
//                 )}
//             </div>
//           </InfoCard>

//           <InfoCard
//             title="Contact History"
//             icon={
//               <MessageSquare
//                 size={15}
//               />
//             }
//           >
//             <div className="space-y-2">
//               {(lead.contactHistory ||
//                 [])
//                 .slice()
//                 .reverse()
//                 .map(
//                   (
//                     item,
//                     index
//                   ) => (
//                     <div
//                       key={
//                         item._id ||
//                         index
//                       }
//                       className="rounded-lg border border-slate-100 p-3"
//                     >
//                       <div className="flex items-center justify-between">
//                         <p className="text-[10px] font-semibold text-slate-700">
//                           {
//                             item.type
//                           }
//                         </p>

//                         <span className="text-[8px] text-slate-400">
//                           {
//                             item.status
//                           }
//                         </span>
//                       </div>

//                       <p className="mt-1 text-[8px] text-slate-400">
//                         {formatDateTime(
//                           item.contactedAt
//                         )}
//                       </p>

//                       {item.notes && (
//                         <p className="mt-2 text-[9px] text-slate-600">
//                           {
//                             item.notes
//                           }
//                         </p>
//                       )}
//                     </div>
//                   )
//                 )}

//               {!lead
//                 ?.contactHistory
//                 ?.length && (
//                 <p className="py-4 text-center text-[9px] text-slate-400">
//                   No contact history yet.
//                 </p>
//               )}
//             </div>

//             <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
//               <select
//                 value={
//                   contactForm.type
//                 }
//                 onChange={(e) =>
//                   setContactForm(
//                     (prev) => ({
//                       ...prev,
//                       type:
//                         e.target.value,
//                     })
//                   )
//                 }
//                 className="h-9 rounded-lg border border-slate-200 px-2 text-[9px]"
//               >
//                 {[
//                   "Call",
//                   "WhatsApp",
//                   "SMS",
//                   "Email",
//                   "Note",
//                   "Visit",
//                   "Other",
//                 ].map(
//                   (item) => (
//                     <option
//                       key={item}
//                     >
//                       {item}
//                     </option>
//                   )
//                 )}
//               </select>

//               <select
//                 value={
//                   contactForm.status
//                 }
//                 onChange={(e) =>
//                   setContactForm(
//                     (prev) => ({
//                       ...prev,
//                       status:
//                         e.target.value,
//                     })
//                   )
//                 }
//                 className="h-9 rounded-lg border border-slate-200 px-2 text-[9px]"
//               >
//                 {[
//                   "Attempted",
//                   "Connected",
//                   "No_Response",
//                   "Sent",
//                   "Received",
//                   "Scheduled",
//                   "Completed",
//                   "Cancelled",
//                   "Other",
//                 ].map(
//                   (item) => (
//                     <option
//                       key={item}
//                     >
//                       {item}
//                     </option>
//                   )
//                 )}
//               </select>

//               <textarea
//                 value={
//                   contactForm.notes
//                 }
//                 onChange={(e) =>
//                   setContactForm(
//                     (prev) => ({
//                       ...prev,
//                       notes:
//                         e.target.value,
//                     })
//                   )
//                 }
//                 placeholder="Contact notes..."
//                 className="col-span-2 min-h-20 rounded-lg border border-slate-200 p-2 text-[9px] outline-none"
//               />

//               <button
//                 disabled={
//                   actionLoading
//                 }
//                 onClick={
//                   handleContact
//                 }
//                 className="col-span-2 h-9 rounded-lg bg-emerald-600 text-[10px] font-semibold text-white"
//               >
//                 Add Contact
//               </button>
//             </div>
//           </InfoCard>
//         </div>

//         <div className="space-y-4">
//           <InfoCard
//             title="Partner Assignment"
//             icon={
//               <UserRoundCheck
//                 size={15}
//               />
//             }
//           >
//             {lead?.assignedPartner?.partnerMongoId ? (
//               <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
//                 <div className="flex items-start justify-between gap-3">
//                   <div className="flex min-w-0 items-center gap-3">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
//                       <UserRoundCheck size={18} />
//                     </div>

//                     <div className="min-w-0">
//                       <p className="truncate text-[11px] font-bold text-slate-800">
//                         {lead.assignedPartner.name || "Assigned Partner"}
//                       </p>

//                       <p className="mt-0.5 text-[9px] font-semibold text-emerald-700">
//                         {lead.assignedPartner.partnerCode || "-"}
//                       </p>

//                       <p className="mt-1 truncate text-[8px] text-slate-500">
//                         {lead.assignedPartner.phone || "-"}
//                       </p>

//                       <p className="truncate text-[8px] text-slate-500">
//                         {lead.assignedPartner.email || "-"}
//                       </p>

//                       {lead.assignedPartner.partnerType && (
//                         <p className="mt-1 text-[8px] capitalize text-slate-400">
//                           Type: {lead.assignedPartner.partnerType}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   <span className="shrink-0 rounded-full border border-emerald-200 bg-white px-2 py-1 text-[7px] font-bold text-emerald-700">
//                     PROPERTY PARTNER
//                   </span>
//                 </div>

//                 <div className="mt-3 border-t border-emerald-100 pt-3">
//                   <p className="text-[8px] uppercase tracking-wide text-slate-400">
//                     Assignment Source
//                   </p>

//                   <p className="mt-1 text-[9px] font-semibold text-slate-600">
//                     {lead.assignedPartner.assignmentSource === "Property"
//                       ? "Inherited from Property Assignment"
//                       : lead.assignedPartner.assignmentSource ||
//                         "Property Assignment"}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     navigate(
//                       `/partnerdashboard?tab=dashboard&partnerId=${lead.assignedPartner.partnerMongoId}`
//                     )
//                   }
//                   className="mt-3 flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-white text-[9px] font-semibold text-emerald-700 transition hover:bg-emerald-50"
//                 >
//                   <Eye size={11} />
//                   View Partner Profile
//                 </button>
//               </div>
//             ) : (
//               <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
//                 <UserRound
//                   size={21}
//                   className="mx-auto text-slate-400"
//                 />

//                 <p className="mt-2 text-[10px] font-semibold text-slate-600">
//                   No partner assigned to this property
//                 </p>

//                 <p className="mt-1 text-[8px] leading-4 text-slate-400">
//                   Assign a partner to the property first. The lead will automatically use that property partner.
//                 </p>
//               </div>
//             )}
//           </InfoCard>

//           <InfoCard
//             title="Workflow Actions"
//             icon={
//               <ShieldCheck
//                 size={15}
//               />
//             }
//           >
//             <div className="grid grid-cols-2 gap-2">
//               <ActionButton
//                 label="Mark Viewed"
//                 onClick={() =>
//                   handleStatus(
//                     "Lead_Viewed"
//                   )
//                 }
//               />

//               <ActionButton
//                 label="Review"
//                 onClick={
//                   handleReview
//                 }
//               />

//               <ActionButton
//                 label="Reject"
//                 danger
//                 onClick={
//                   handleReject
//                 }
//               />

//               <ActionButton
//                 label="Close"
//                 onClick={
//                   handleClose
//                 }
//               />

//               <button
//                 disabled={
//                   actionLoading
//                 }
//                 onClick={
//                   handleConvert
//                 }
//                 className="col-span-2 h-10 rounded-lg bg-emerald-600 text-[10px] font-semibold text-white disabled:opacity-40"
//               >
//                 Successfully Convert Lead
//               </button>
//             </div>
//           </InfoCard>

//           {lead
//             .enquiryMessage && (
//             <InfoCard
//               title="Buyer Enquiry"
//               icon={
//                 <Mail
//                   size={15}
//                 />
//               }
//             >
//               <p className="text-[10px] leading-5 text-slate-600">
//                 {
//                   lead.enquiryMessage
//                 }
//               </p>
//             </InfoCard>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function InfoCard({
//   title,
//   icon,
//   children,
// }) {
//   return (
//     <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//       <div className="mb-4 flex items-center gap-2">
//         <span className="text-emerald-600">
//           {icon}
//         </span>
//         <h3 className="text-[12px] font-semibold text-slate-800">
//           {title}
//         </h3>
//       </div>

//       {children}
//     </section>
//   );
// }

// function InfoRow({
//   label,
//   value,
// }) {
//   return (
//     <div className="mb-3">
//       <p className="text-[8px] uppercase tracking-wide text-slate-400">
//         {label}
//       </p>
//       <p className="mt-1 break-words text-[10px] font-medium text-slate-700">
//         {value || "-"}
//       </p>
//     </div>
//   );
// }

// function ActionButton({
//   label,
//   onClick,
//   danger = false,
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`h-9 rounded-lg border text-[9px] font-semibold ${
//         danger
//           ? "border-red-200 bg-red-50 text-red-600"
//           : "border-slate-200 bg-white text-slate-700"
//       }`}
//     >
//       {label}
//     </button>
//   );
// }


import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ArrowLeft,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Eye,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  UserRound,
  UserRoundCheck,
  XCircle,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import Swal from "sweetalert2";

import {
  addLeadContactHistoryApi,
  assignLeadPartnerApi,
  closeLeadApi,
  convertLeadApi,
  getLeadByIdApi,
  getLeadsApi,
  rejectLeadApi,
  reviewLeadApi,
  updateLeadStatusApi,
} from "../../../Services/leadservice";


const STATUSES = [
  "Lead_Created",
  "Lead_Assigned",
  "Lead_Viewed",
  "Lead_Reviewing",
  "Lead_Rejected",
  "Lead_Closed",
  "Successfully_Converted",
];

const STATUS_LABELS = {
  Lead_Created:
    "Lead Created",
  Lead_Assigned:
    "Lead Assigned",
  Lead_Viewed:
    "Lead Viewed",
  Lead_Reviewing:
    "Lead Reviewing",
  Lead_Rejected:
    "Lead Rejected",
  Lead_Closed:
    "Lead Closed",
  Successfully_Converted:
    "Successfully Converted",
};

const STATUS_CLASS = {
  Lead_Created:
    "border-blue-200 bg-blue-50 text-blue-700",
  Lead_Assigned:
    "border-amber-200 bg-amber-50 text-amber-700",
  Lead_Viewed:
    "border-cyan-200 bg-cyan-50 text-cyan-700",
  Lead_Reviewing:
    "border-orange-200 bg-orange-50 text-orange-700",
  Lead_Rejected:
    "border-red-200 bg-red-50 text-red-700",
  Lead_Closed:
    "border-slate-200 bg-slate-100 text-slate-700",
  Successfully_Converted:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
};

const formatDateTime = (
  value
) => {
  if (!value) return "-";

  return new Date(
    value
  ).toLocaleString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );
};

const formatPrice = (
  value
) => {
  const amount =
    Number(value || 0);

  if (amount >= 10000000) {
    return `₹${(
      amount / 10000000
    ).toFixed(2)} Cr`;
  }

  if (amount >= 100000) {
    return `₹${(
      amount / 100000
    ).toFixed(2)} L`;
  }

  return `₹${amount.toLocaleString(
    "en-IN"
  )}`;
};

const StatusBadge = ({
  status,
}) => (
  <span
    className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-semibold ${
      STATUS_CLASS[
        status
      ] ||
      "border-slate-200 bg-slate-50 text-slate-600"
    }`}
  >
    {STATUS_LABELS[
      status
    ] ||
      status ||
      "-"}
  </span>
);

export default function LeadManagement({
  embedded = false,
  initialLeadId = null,
  onEmbeddedDetailClose,
}) {
  const navigate =
    useNavigate();

  const [
    leads,
    setLeads,
  ] = useState([]);

  const [
    selectedLead,
    setSelectedLead,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    detailLoading,
    setDetailLoading,
  ] = useState(false);

  const [
    actionLoading,
    setActionLoading,
  ] = useState(false);

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
    total,
    setTotal,
  ] = useState(0);

  const [
    totalPages,
    setTotalPages,
  ] = useState(1);



  const [
    contactForm,
    setContactForm,
  ] = useState({
    type: "Call",
    status: "Attempted",
    notes: "",
  });

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

        const data =
          response?.data ||
          response?.leads ||
          [];

        setLeads(
          Array.isArray(data)
            ? data
            : []
        );

        const pagination =
          response?.pagination ||
          {};

        setTotal(
          pagination.total ??
            response?.total ??
            0
        );

        setTotalPages(
          pagination.totalPages ??
            response?.totalPages ??
            1
        );
      } catch (error) {
        console.error(
          "GET LEADS ERROR:",
          error
        );

        setLeads([]);
      } finally {
        setLoading(false);
      }
    };


  useEffect(() => {
    const timer =
      setTimeout(
        fetchLeads,
        300
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

  const openLead =
    async (id) => {
      try {
        setDetailLoading(
          true
        );

        const response =
          await getLeadByIdApi(
            id
          );

        setSelectedLead(
          response?.data ||
            null
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title:
            "Lead not found",
          text:
            error?.response
              ?.data
              ?.message ||
            "Unable to load lead.",
        });
      } finally {
        setDetailLoading(
          false
        );
      }
    };

  // ======================================================
  // LEADS DASHBOARD SE SPECIFIC LEAD DETAIL OPEN
  // Example:
  // /leads-dashboard?tab=promotions&leadId=LEAD_MONGO_ID
  // ======================================================
  useEffect(() => {
    if (!embedded || !initialLeadId) {
      return;
    }

    openLead(initialLeadId);
  }, [embedded, initialLeadId]);

  const closeLeadDetail = () => {
    setSelectedLead(null);

    if (embedded) {
      onEmbeddedDetailClose?.();
    }
  };

  const refreshSelected =
    async () => {
      if (
        selectedLead?._id
      ) {
        await openLead(
          selectedLead._id
        );
      }

      await fetchLeads();
    };

  const runAction =
    async (
      fn,
      successMessage
    ) => {
      try {
        setActionLoading(
          true
        );

        await fn();

        await Swal.fire({
          icon: "success",
          title:
            successMessage,
          timer: 1200,
          showConfirmButton:
            false,
        });

        await refreshSelected();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title:
            "Action failed",
          text:
            error?.response
              ?.data
              ?.message ||
            error?.message ||
            "Unable to update lead.",
        });
      } finally {
        setActionLoading(
          false
        );
      }
    };


  const handleStatus =
    async (status) => {
      if (!selectedLead?._id)
        return;

      await runAction(
        () =>
          updateLeadStatusApi(
            selectedLead._id,
            {
              status,
              actor: {
                name: "Admin",
                role: "Admin",
              },
            }
          ),
        "Status Updated"
      );
    };

  const handleReview =
    async () => {
      const {
        value: notes,
      } = await Swal.fire({
        title:
          "Review Lead",
        input: "textarea",
        inputLabel:
          "Review notes",
        showCancelButton:
          true,
        confirmButtonColor:
          "#08786b",
      });

      if (notes === undefined)
        return;

      await runAction(
        () =>
          reviewLeadApi(
            selectedLead._id,
            {
              notes,
              actor: {
                name: "Admin",
                role: "Admin",
              },
            }
          ),
        "Lead In Review"
      );
    };

  const handleReject =
    async () => {
      const {
        value: reason,
      } = await Swal.fire({
        title:
          "Reject Lead",
        input: "textarea",
        inputLabel:
          "Reason",
        showCancelButton:
          true,
        confirmButtonColor:
          "#dc2626",
      });

      if (!reason) return;

      await runAction(
        () =>
          rejectLeadApi(
            selectedLead._id,
            {
              reason,
              actor: {
                name: "Admin",
                role: "Admin",
              },
            }
          ),
        "Lead Rejected"
      );
    };

  const handleClose =
    async () => {
      const {
        value: reason,
      } = await Swal.fire({
        title:
          "Close Lead",
        input: "textarea",
        inputLabel:
          "Closure reason",
        showCancelButton:
          true,
        confirmButtonColor:
          "#475569",
      });

      if (!reason) return;

      await runAction(
        () =>
          closeLeadApi(
            selectedLead._id,
            {
              reason,
              actor: {
                name: "Admin",
                role: "Admin",
              },
            }
          ),
        "Lead Closed"
      );
    };

  const handleConvert =
    async () => {
      const result =
        await Swal.fire({
          title:
            "Convert Lead",
          html: `
            <input
              id="conversion-amount"
              class="swal2-input"
              type="number"
              placeholder="Conversion amount"
            />
            <textarea
              id="conversion-notes"
              class="swal2-textarea"
              placeholder="Conversion notes"
            ></textarea>
          `,
          showCancelButton:
            true,
          confirmButtonColor:
            "#08786b",
          preConfirm: () => ({
            amount:
              document.getElementById(
                "conversion-amount"
              )?.value || 0,
            notes:
              document.getElementById(
                "conversion-notes"
              )?.value || "",
          }),
        });

      if (!result.isConfirmed)
        return;

      await runAction(
        () =>
          convertLeadApi(
            selectedLead._id,
            {
              ...result.value,
              actor: {
                name: "Admin",
                role: "Admin",
              },
            }
          ),
        "Lead Converted"
      );
    };

  const handleContact =
    async () => {
      if (
        !selectedLead?._id
      ) {
        return;
      }

      await runAction(
        () =>
          addLeadContactHistoryApi(
            selectedLead._id,
            {
              ...contactForm,
              doneBy: {
                name: "Admin",
                role: "Admin",
              },
            }
          ),
        "Contact Added"
      );

      setContactForm({
        type: "Call",
        status:
          "Attempted",
        notes: "",
      });
    };

  if (
    selectedLead ||
    detailLoading
  ) {
    return (
      <div className="min-h-screen p-1">
        <button
          type="button"
          onClick={closeLeadDetail}
          className="mb-3 flex items-center gap-1 text-[11px] font-semibold text-slate-500"
        >
          <ArrowLeft
            size={14}
          />
          Back to Lead Queue
        </button>

        {detailLoading ? (
          <div className="flex min-h-[500px] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-emerald-500" />
          </div>
        ) : (
          <LeadDetail
            lead={
              selectedLead
            }
            handleStatus={
              handleStatus
            }
            handleReview={
              handleReview
            }
            handleReject={
              handleReject
            }
            handleClose={
              handleClose
            }
            handleConvert={
              handleConvert
            }
            actionLoading={
              actionLoading
            }
            navigate={
              navigate
            }
            contactForm={
              contactForm
            }
            setContactForm={
              setContactForm
            }
            handleContact={
              handleContact
            }
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-1">
      <div className="mb-5 flex flex-col justify-between gap-3 lg:flex-row lg:items-start">
        <div>
          <h1 className="text-[23px] font-semibold text-[#14213d]">
            Lead Management
          </h1>

          <p className="mt-1 text-[11px] text-slate-500">
            Manage buyer enquiries, assignments, reviews, contact history and conversion.
          </p>
        </div>

        <button
          type="button"
          onClick={
            fetchLeads
          }
          className="flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-600"
        >
          <RefreshCw
            size={13}
          />
          Refresh
        </button>
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
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
              placeholder="Search lead, buyer, property, partner..."
              className="h-9 w-full rounded-lg border border-slate-200 pl-9 pr-3 text-[11px] outline-none focus:border-emerald-500"
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
            className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-[10px]"
          >
            <option value="">
              All Statuses
            </option>

            {STATUSES.map(
              (status) => (
                <option
                  key={status}
                  value={status}
                >
                  {
                    STATUS_LABELS[
                      status
                    ]
                  }
                </option>
              )
            )}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse">
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
                  PARTNER
                </th>
                <th className="px-3 py-3 text-[9px]">
                  STATUS
                </th>
                <th className="px-3 py-3 text-[9px]">
                  LAST CONTACT
                </th>
                <th className="px-3 py-3 text-[9px]">
                  ACTION
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="7"
                    className="h-48 text-center text-xs text-slate-400"
                  >
                    Loading leads...
                  </td>
                </tr>
              ) : leads.length ===
                0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="h-48 text-center text-xs text-slate-400"
                  >
                    No leads found.
                  </td>
                </tr>
              ) : (
                leads.map(
                  (lead) => (
                    <tr
                      key={
                        lead._id
                      }
                      className="border-b border-slate-100 hover:bg-slate-50"
                    >
                      <td className="px-4 py-3">
                        <p className="text-[10px] font-bold text-slate-800">
                          {
                            lead.leadId
                          }
                        </p>
                        <p className="mt-1 text-[8px] text-slate-400">
                          {
                            lead.source
                          }
                        </p>
                      </td>

                      <td className="px-3 py-3">
                        <p className="text-[10px] font-semibold text-slate-700">
                          {
                            lead
                              ?.buyer
                              ?.name
                          }
                        </p>
                        <p className="mt-1 text-[8px] text-slate-400">
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
                        <p className="max-w-[190px] truncate text-[10px] font-semibold text-slate-700">
                          {lead
                            ?.property
                            ?.title ||
                            "-"}
                        </p>
                        <p className="mt-1 text-[8px] font-semibold text-emerald-600">
                          {lead
                            ?.property
                            ?.propertyCode ||
                            "-"}
                        </p>
                      </td>

                      <td className="px-3 py-3">
                        <p className="text-[10px] text-slate-600">
                          {lead
                            ?.assignedPartner
                            ?.name ||
                            "Unassigned"}
                        </p>
                      </td>

                      <td className="px-3 py-3">
                        <StatusBadge
                          status={
                            lead.status
                          }
                        />
                      </td>

                      <td className="px-3 py-3 text-[9px] text-slate-500">
                        {formatDateTime(
                          lead.lastContactAt
                        )}
                      </td>

                      <td className="px-3 py-3">
                        <button
                          type="button"
                          onClick={() =>
                            openLead(
                              lead._id
                            )
                          }
                          className="flex h-8 items-center gap-1 rounded-md border border-emerald-200 px-2.5 text-[9px] font-semibold text-emerald-700"
                        >
                          <Eye
                            size={11}
                          />
                          View
                        </button>
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

          <div className="flex items-center gap-1">
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
              className="flex h-7 w-7 items-center justify-center rounded border border-slate-200 disabled:opacity-40"
            >
              <ChevronLeft
                size={12}
              />
            </button>

            {Array.from(
              {
                length:
                  totalPages,
              },
              (_, index) =>
                index + 1
            ).map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    setPage(
                      item
                    )
                  }
                  className={`h-7 min-w-7 rounded px-2 text-[9px] ${
                    item ===
                    page
                      ? "bg-[#082f49] text-white"
                      : "border border-slate-200 text-slate-600"
                  }`}
                >
                  {item}
                </button>
              )
            )}

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
              className="flex h-7 w-7 items-center justify-center rounded border border-slate-200 disabled:opacity-40"
            >
              <ChevronRight
                size={12}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function LeadDetail({
  lead,
  handleStatus,
  handleReview,
  handleReject,
  handleClose,
  handleConvert,
  actionLoading,
  navigate,
  contactForm,
  setContactForm,
  handleContact,
}) {
  const partnerMongoId =
    lead?.assignedPartner
      ?.partnerMongoId;

  const propertyMongoId =
    lead?.property
      ?.propertyMongoId;

  return (
    <div>
      <div className="mb-4 flex flex-col justify-between gap-3 rounded-xl border border-slate-200 bg-white p-5 lg:flex-row lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">
              Lead:{" "}
              {lead.leadId}
            </h1>

            <StatusBadge
              status={
                lead.status
              }
            />

            {lead.isUnlockedByPartner && (
              <span className="rounded-full border border-purple-200 bg-purple-50 px-2 py-1 text-[9px] font-semibold text-purple-700">
                Unlocked by Partner
              </span>
            )}
          </div>

          <p className="mt-1 text-[10px] text-slate-400">
            Created{" "}
            {formatDateTime(
              lead.createdAt
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            disabled={
              !propertyMongoId
            }
            onClick={() =>
              propertyMongoId &&
              navigate(
                `/property-management/${propertyMongoId}`
              )
            }
            className="h-9 rounded-lg bg-[#082f49] px-3 text-[10px] font-semibold text-white disabled:opacity-40"
          >
            View Property
          </button>

          <button
            disabled={
              !partnerMongoId
            }
            onClick={() =>
              partnerMongoId &&
              navigate(
                `/partnerdashboard?tab=dashboard&partnerId=${partnerMongoId}`
              )
            }
            className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-700 disabled:opacity-40"
          >
            View Partner
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[280px_minmax(0,1fr)_310px]">
        <div className="space-y-4">
          <InfoCard
            title="Buyer Profile"
            icon={
              <UserRound
                size={15}
              />
            }
          >
            <InfoRow
              label="Name"
              value={
                lead?.buyer?.name
              }
            />
            <InfoRow
              label="Phone"
              value={
                lead?.buyer?.phone
              }
            />
            <InfoRow
              label="Email"
              value={
                lead?.buyer?.email
              }
            />
            <InfoRow
              label="City"
              value={
                lead?.buyer?.city
              }
            />
          </InfoCard>

          <InfoCard
            title="Property"
            icon={
              <Building2
                size={15}
              />
            }
          >
            {lead?.property
              ?.image && (
              <img
                src={
                  lead.property
                    .image
                }
                alt=""
                className="mb-3 h-32 w-full rounded-lg object-cover"
              />
            )}

            <InfoRow
              label="Code"
              value={
                lead?.property
                  ?.propertyCode
              }
            />

            <InfoRow
              label="Title"
              value={
                lead?.property
                  ?.title
              }
            />

            <InfoRow
              label="Price"
              value={formatPrice(
                lead?.property
                  ?.price
              )}
            />

            <InfoRow
              label="Location"
              value={[
                lead?.property
                  ?.locality,
                lead?.property
                  ?.city,
              ]
                .filter(Boolean)
                .join(", ")}
            />

            <InfoRow
              label="Added By"
              value={`${
                lead?.property
                  ?.addedByName ||
                "-"
              } (${
                lead?.property
                  ?.addedByRole ||
                "-"
              })`}
            />
          </InfoCard>
        </div>

        <div className="space-y-4">
          <InfoCard
            title="Lifecycle"
            icon={
              <Clock3
                size={15}
              />
            }
          >
            <div className="space-y-3">
              {(lead.lifecycle ||
                [])
                .slice()
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
                      className="flex gap-3"
                    >
                      <div className="flex flex-col items-center">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="mt-1 min-h-8 w-px flex-1 bg-slate-200" />
                      </div>

                      <div className="pb-2">
                        <p className="text-[10px] font-semibold text-slate-700">
                          {item.event ||
                            STATUS_LABELS[
                              item
                                .status
                            ] ||
                            item.status}
                        </p>

                        <p className="mt-1 text-[8px] text-slate-400">
                          {formatDateTime(
                            item.createdAt
                          )}
                          {" • "}
                          {item?.actor
                            ?.name ||
                            "System"}
                        </p>

                        {item.remarks && (
                          <p className="mt-1 text-[9px] text-slate-500">
                            {
                              item.remarks
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  )
                )}
            </div>
          </InfoCard>

          <InfoCard
            title="Contact History"
            icon={
              <MessageSquare
                size={15}
              />
            }
          >
            <div className="space-y-2">
              {(lead.contactHistory ||
                [])
                .slice()
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
                      className="rounded-lg border border-slate-100 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-semibold text-slate-700">
                          {
                            item.type
                          }
                        </p>

                        <span className="text-[8px] text-slate-400">
                          {
                            item.status
                          }
                        </span>
                      </div>

                      <p className="mt-1 text-[8px] text-slate-400">
                        {formatDateTime(
                          item.contactedAt
                        )}
                      </p>

                      {item.notes && (
                        <p className="mt-2 text-[9px] text-slate-600">
                          {
                            item.notes
                          }
                        </p>
                      )}
                    </div>
                  )
                )}

              {!lead
                ?.contactHistory
                ?.length && (
                <p className="py-4 text-center text-[9px] text-slate-400">
                  No contact history yet.
                </p>
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
              <select
                value={
                  contactForm.type
                }
                onChange={(e) =>
                  setContactForm(
                    (prev) => ({
                      ...prev,
                      type:
                        e.target.value,
                    })
                  )
                }
                className="h-9 rounded-lg border border-slate-200 px-2 text-[9px]"
              >
                {[
                  "Call",
                  "WhatsApp",
                  "SMS",
                  "Email",
                  "Note",
                  "Visit",
                  "Other",
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

              <select
                value={
                  contactForm.status
                }
                onChange={(e) =>
                  setContactForm(
                    (prev) => ({
                      ...prev,
                      status:
                        e.target.value,
                    })
                  )
                }
                className="h-9 rounded-lg border border-slate-200 px-2 text-[9px]"
              >
                {[
                  "Attempted",
                  "Connected",
                  "No_Response",
                  "Sent",
                  "Received",
                  "Scheduled",
                  "Completed",
                  "Cancelled",
                  "Other",
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
                  contactForm.notes
                }
                onChange={(e) =>
                  setContactForm(
                    (prev) => ({
                      ...prev,
                      notes:
                        e.target.value,
                    })
                  )
                }
                placeholder="Contact notes..."
                className="col-span-2 min-h-20 rounded-lg border border-slate-200 p-2 text-[9px] outline-none"
              />

              <button
                disabled={
                  actionLoading
                }
                onClick={
                  handleContact
                }
                className="col-span-2 h-9 rounded-lg bg-emerald-600 text-[10px] font-semibold text-white"
              >
                Add Contact
              </button>
            </div>
          </InfoCard>
        </div>

        <div className="space-y-4">
          <InfoCard
            title="Partner Assignment"
            icon={
              <UserRoundCheck
                size={15}
              />
            }
          >
            {lead?.assignedPartner?.partnerMongoId ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <UserRoundCheck size={18} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-bold text-slate-800">
                        {lead.assignedPartner.name || "Assigned Partner"}
                      </p>

                      <p className="mt-0.5 text-[9px] font-semibold text-emerald-700">
                        {lead.assignedPartner.partnerCode || "-"}
                      </p>

                      <p className="mt-1 truncate text-[8px] text-slate-500">
                        {lead.assignedPartner.phone || "-"}
                      </p>

                      <p className="truncate text-[8px] text-slate-500">
                        {lead.assignedPartner.email || "-"}
                      </p>

                      {lead.assignedPartner.partnerType && (
                        <p className="mt-1 text-[8px] capitalize text-slate-400">
                          Type: {lead.assignedPartner.partnerType}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full border border-emerald-200 bg-white px-2 py-1 text-[7px] font-bold text-emerald-700">
                    PROPERTY PARTNER
                  </span>
                </div>

                <div className="mt-3 border-t border-emerald-100 pt-3">
                  <p className="text-[8px] uppercase tracking-wide text-slate-400">
                    Assignment Source
                  </p>

                  <p className="mt-1 text-[9px] font-semibold text-slate-600">
                    {lead.assignedPartner.assignmentSource === "Property"
                      ? "Inherited from Property Assignment"
                      : lead.assignedPartner.assignmentSource ||
                        "Property Assignment"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/partnerdashboard?tab=dashboard&partnerId=${lead.assignedPartner.partnerMongoId}`
                    )
                  }
                  className="mt-3 flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-white text-[9px] font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  <Eye size={11} />
                  View Partner Profile
                </button>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
                <UserRound
                  size={21}
                  className="mx-auto text-slate-400"
                />

                <p className="mt-2 text-[10px] font-semibold text-slate-600">
                  No partner assigned to this property
                </p>

                <p className="mt-1 text-[8px] leading-4 text-slate-400">
                  Assign a partner to the property first. The lead will automatically use that property partner.
                </p>
              </div>
            )}
          </InfoCard>

          <InfoCard
            title="Workflow Actions"
            icon={
              <ShieldCheck
                size={15}
              />
            }
          >
            <div className="grid grid-cols-2 gap-2">
              <ActionButton
                label="Mark Viewed"
                onClick={() =>
                  handleStatus(
                    "Lead_Viewed"
                  )
                }
              />

              <ActionButton
                label="Review"
                onClick={
                  handleReview
                }
              />

              <ActionButton
                label="Reject"
                danger
                onClick={
                  handleReject
                }
              />

              <ActionButton
                label="Close"
                onClick={
                  handleClose
                }
              />

              <button
                disabled={
                  actionLoading
                }
                onClick={
                  handleConvert
                }
                className="col-span-2 h-10 rounded-lg bg-emerald-600 text-[10px] font-semibold text-white disabled:opacity-40"
              >
                Successfully Convert Lead
              </button>
            </div>
          </InfoCard>

          {lead
            .enquiryMessage && (
            <InfoCard
              title="Buyer Enquiry"
              icon={
                <Mail
                  size={15}
                />
              }
            >
              <p className="text-[10px] leading-5 text-slate-600">
                {
                  lead.enquiryMessage
                }
              </p>
            </InfoCard>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  icon,
  children,
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-emerald-600">
          {icon}
        </span>
        <h3 className="text-[12px] font-semibold text-slate-800">
          {title}
        </h3>
      </div>

      {children}
    </section>
  );
}

function InfoRow({
  label,
  value,
}) {
  return (
    <div className="mb-3">
      <p className="text-[8px] uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="mt-1 break-words text-[10px] font-medium text-slate-700">
        {value || "-"}
      </p>
    </div>
  );
}

function ActionButton({
  label,
  onClick,
  danger = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-9 rounded-lg border text-[9px] font-semibold ${
        danger
          ? "border-red-200 bg-red-50 text-red-600"
          : "border-slate-200 bg-white text-slate-700"
      }`}
    >
      {label}
    </button>
  );
}
