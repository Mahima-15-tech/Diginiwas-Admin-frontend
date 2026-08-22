// import React, { useState, useMemo } from 'react';
// import { 
//   Download, 
//   RotateCw, 
//   TrendingUp, 
//   Clock, 
//   ShieldCheck, 
//   UserCheck, 
//   AlertCircle, 
//   Globe, 
//   Filter, 
//   ChevronDown, 
//   ChevronLeft, 
//   ChevronRight,
//   Search
// } from 'lucide-react';

// // Initial Mock Data
// const INITIAL_PROPERTIES = [
//   {
//     id: 'PROP-8042-NL',
//     name: 'Skyline Residences Tower B',
//     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=100&q=80',
//     partnerInitials: 'EA',
//     partnerName: 'Elevate Associates',
//     partnerBg: 'bg-blue-100 text-blue-700',
//     status: 'Admin Approval',
//     statusType: 'dark',
//     submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
//     submittedText: '2 hours ago',
//     action: 'Review',
//     actionType: 'primary'
//   },
//   {
//     id: 'PROP-7731-MB',
//     name: 'Meadowbrook Estate Plot 44',
//     image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=100&q=80',
//     partnerInitials: 'PR',
//     partnerName: 'Prime Realty',
//     partnerBg: 'bg-emerald-100 text-emerald-700',
//     status: 'Action Req.',
//     statusType: 'danger',
//     submittedAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
//     submittedText: '5 hours ago',
//     action: 'Resolve',
//     actionType: 'outline'
//   },
//   {
//     id: 'PROP-9102-TH',
//     name: 'TechPark Hub Unit C',
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&q=80',
//     partnerInitials: 'CW',
//     partnerName: 'CoWork Spaces Inc.',
//     partnerBg: 'bg-amber-100 text-amber-700',
//     status: 'Admin Approval',
//     statusType: 'dark',
//     submittedAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
//     submittedText: 'Yesterday',
//     action: 'Review',
//     actionType: 'primary'
//   },
//   {
//     id: 'PROP-1204-GV',
//     name: 'Green Valley Villas',
//     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=100&q=80',
//     partnerInitials: 'GV',
//     partnerName: 'Green Valley Builders',
//     partnerBg: 'bg-purple-100 text-purple-700',
//     status: 'Pending Partner',
//     statusType: 'secondary',
//     submittedAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
//     submittedText: '2 days ago',
//     action: 'Review',
//     actionType: 'primary'
//   },
//   {
//     id: 'PROP-3310-PV',
//     name: 'Palm View Apartments',
//     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=100&q=80',
//     partnerInitials: 'PR',
//     partnerName: 'Prime Realty',
//     partnerBg: 'bg-emerald-100 text-emerald-700',
//     status: 'Partner Verified',
//     statusType: 'teal',
//     submittedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
//     submittedText: '3 hours ago',
//     action: 'Review',
//     actionType: 'primary'
//   },
//   {
//     id: 'PROP-5590-PB',
//     name: 'Ocean Heights Plaza',
//     image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=100&q=80',
//     partnerInitials: 'EA',
//     partnerName: 'Elevate Associates',
//     partnerBg: 'bg-blue-100 text-blue-700',
//     status: 'Published',
//     statusType: 'secondary',
//     submittedAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
//     submittedText: '3 days ago',
//     action: 'View',
//     actionType: 'outline'
//   }
// ];

// const PropertyDashboard = () => {
//   // Dynamic States
//   const [properties, setProperties] = useState(INITIAL_PROPERTIES);
//   const [selectedPipelineStep, setSelectedPipelineStep] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('newest'); // 'newest' or 'oldest'
//   const [statusFilter, setStatusFilter] = useState('All');
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;

//   // Pipeline Metrics dynamically calculated from properties
//   const pipelineCounts = useMemo(() => {
//     return {
//       'Pending Partner': properties.filter(p => p.status === 'Pending Partner').length + 45,
//       'Partner Verified': properties.filter(p => p.status === 'Partner Verified').length + 89,
//       'Admin Approval': properties.filter(p => p.status === 'Admin Approval').length + 140,
//       'Action Req.': properties.filter(p => p.status === 'Action Req.').length + 11,
//       'Published': properties.filter(p => p.status === 'Published').length + 1200,
//     };
//   }, [properties]);

//   // Dynamic Filtering & Sorting Logic
//   const filteredProperties = useMemo(() => {
//     return properties
//       .filter((item) => {
//         // Step or Dropdown Filter
//         const matchesPipeline = selectedPipelineStep === 'All' || item.status === selectedPipelineStep;
//         const matchesStatusFilter = statusFilter === 'All' || item.status === statusFilter;
        
//         // Search Filter
//         const matchesSearch = 
//           item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.partnerName.toLowerCase().includes(searchQuery.toLowerCase());

//         return matchesPipeline && matchesStatusFilter && matchesSearch;
//       })
//       .sort((a, b) => {
//         if (sortBy === 'newest') return b.submittedAt - a.submittedAt;
//         if (sortBy === 'oldest') return a.submittedAt - b.submittedAt;
//         return 0;
//       });
//   }, [properties, selectedPipelineStep, statusFilter, searchQuery, sortBy]);

//   // Dynamic Pagination Calculations
//   const totalPages = Math.ceil(filteredProperties.length / itemsPerPage) || 1;
//   const paginatedProperties = useMemo(() => {
//     const start = (currentPage - 1) * itemsPerPage;
//     return filteredProperties.slice(start, start + itemsPerPage);
//   }, [filteredProperties, currentPage]);

//   // Select / Unselect Checkbox Handlers
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelectedIds(paginatedProperties.map((p) => p.id));
//     } else {
//       setSelectedIds([]);
//     }
//   };

//   const handleSelectOne = (id) => {
//     setSelectedIds((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   // Button Action Handler (Dynamic State Update)
//   const handleAction = (id, currentAction) => {
//     setProperties((prev) =>
//       prev.map((item) => {
//         if (item.id === id) {
//           if (currentAction === 'Resolve') {
//             return { ...item, status: 'Admin Approval', statusType: 'dark', action: 'Review', actionType: 'primary' };
//           }
//           if (currentAction === 'Review') {
//             return { ...item, status: 'Published', statusType: 'secondary', action: 'View', actionType: 'outline' };
//           }
//         }
//         return item;
//       })
//     );
//     alert(`Property ${id} updated standard flow!`);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50/50 p-6 md:p-1 font-sans text-slate-800">
//       <div className="max-w-7xl mx-auto space-y-6">
        
//         {/* Top Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Property Approval Command Center</h1>
//             <p className="text-sm text-slate-500 mt-1">Manage and review property submissions through the operational pipeline.</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <button 
//               onClick={() => alert(`Exporting ${selectedIds.length > 0 ? selectedIds.length : 'all'} properties...`)}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg border border-teal-600/30 text-teal-700 bg-white hover:bg-teal-50/50 font-medium text-sm transition-all shadow-sm"
//             >
//               <Download className="w-4 h-4" />
//               Export {selectedIds.length > 0 && `(${selectedIds.length})`}
//             </button>
//             <button 
//               onClick={() => alert('Syncing data with server...')}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-800 hover:bg-teal-900 text-white font-medium text-sm transition-all shadow-sm"
//             >
//               <RotateCw className="w-4 h-4" />
//               Sync Data
//             </button>
//           </div>
//         </div>

//         {/* Metric Cards Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
//           {/* Stat Card */}
//           <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
//             <div>
//               <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
//                 <Clock className="w-4 h-4 text-slate-400" />
//                 Awaiting Review
//               </div>
//               <div className="text-4xl font-extrabold text-slate-900 mt-4">
//                 {pipelineCounts['Admin Approval']}
//               </div>
//             </div>
//             <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium mt-6">
//               <TrendingUp className="w-3.5 h-3.5" />
//               <span>+12% vs last week</span>
//             </div>
//           </div>

//           {/* Operational Pipeline Card */}
//           <div className="lg:col-span-8 bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-base font-bold text-slate-900">Operational Pipeline</h2>
//               {selectedPipelineStep !== 'All' && (
//                 <button 
//                   onClick={() => setSelectedPipelineStep('All')} 
//                   className="text-xs text-teal-700 font-medium hover:underline"
//                 >
//                   Clear Filter
//                 </button>
//               )}
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
              
//               {/* Step 1: Pending Partner */}
//               <div 
//                 onClick={() => setSelectedPipelineStep('Pending Partner')} 
//                 className={`flex flex-col items-center cursor-pointer p-2 rounded-xl transition-all ${selectedPipelineStep === 'Pending Partner' ? 'bg-slate-100 ring-2 ring-slate-900' : 'hover:bg-slate-50'}`}
//               >
//                 <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-2">
//                   <Clock className="w-5 h-5" />
//                 </div>
//                 <span className="text-xs text-slate-500 font-medium">Pending Partner</span>
//                 <span className="text-base font-bold text-slate-800 mt-1">{pipelineCounts['Pending Partner']}</span>
//               </div>

//               {/* Step 2: Partner Verified */}
//               <div 
//                 onClick={() => setSelectedPipelineStep('Partner Verified')} 
//                 className={`flex flex-col items-center cursor-pointer p-2 rounded-xl transition-all ${selectedPipelineStep === 'Partner Verified' ? 'bg-teal-50 ring-2 ring-teal-600' : 'hover:bg-slate-50'}`}
//               >
//                 <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-2">
//                   <ShieldCheck className="w-5 h-5" />
//                 </div>
//                 <span className="text-xs text-slate-500 font-medium">Partner Verified</span>
//                 <span className="text-base font-bold text-slate-800 mt-1">{pipelineCounts['Partner Verified']}</span>
//               </div>

//               {/* Step 3: Admin Approval */}
//               <div 
//                 onClick={() => setSelectedPipelineStep('Admin Approval')} 
//                 className={`flex flex-col items-center cursor-pointer p-2 rounded-xl transition-all ${selectedPipelineStep === 'Admin Approval' ? 'bg-slate-100 ring-2 ring-slate-900' : 'hover:bg-slate-50'}`}
//               >
//                 <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mb-2 shadow-sm">
//                   <UserCheck className="w-5 h-5" />
//                 </div>
//                 <span className="text-xs text-slate-900 font-bold">Admin Approval</span>
//                 <span className="text-base font-bold text-slate-900 mt-1">{pipelineCounts['Admin Approval']}</span>
//               </div>

//               {/* Step 4: Action Required */}
//               <div 
//                 onClick={() => setSelectedPipelineStep('Action Req.')} 
//                 className={`flex flex-col items-center cursor-pointer p-2 rounded-xl transition-all ${selectedPipelineStep === 'Action Req.' ? 'bg-rose-50 ring-2 ring-rose-500' : 'hover:bg-slate-50'}`}
//               >
//                 <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center mb-2">
//                   <AlertCircle className="w-5 h-5" />
//                 </div>
//                 <span className="text-xs text-slate-500 font-medium">Action Req.</span>
//                 <span className="text-base font-bold text-rose-600 mt-1">{pipelineCounts['Action Req.']}</span>
//               </div>

//               {/* Step 5: Published */}
//               <div 
//                 onClick={() => setSelectedPipelineStep('Published')} 
//                 className={`flex flex-col items-center cursor-pointer p-2 rounded-xl transition-all ${selectedPipelineStep === 'Published' ? 'bg-slate-100 ring-2 ring-slate-900' : 'hover:bg-slate-50'}`}
//               >
//                 <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-2">
//                   <Globe className="w-5 h-5" />
//                 </div>
//                 <span className="text-xs text-slate-500 font-medium">Published</span>
//                 <span className="text-base font-bold text-slate-800 mt-1">{pipelineCounts['Published']}</span>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Table Section */}
//         <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
          
//           {/* Table Controls Header */}
//           <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100">
//             <h3 className="text-lg font-bold text-slate-900">
//               Approval Queue {selectedPipelineStep !== 'All' && <span className="text-xs font-normal text-slate-500">({selectedPipelineStep})</span>}
//             </h3>
            
//             <div className="flex flex-wrap items-center gap-3">
//               {/* Dynamic Search */}
//               <div className="relative flex-1 sm:w-48">
//                 <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
//                 <input 
//                   type="text" 
//                   placeholder="Search..." 
//                   value={searchQuery}
//                   onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
//                   className="w-full pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
//                 />
//               </div>

//               {/* Status Dropdown Filter */}
//               <div className="relative">
//                 <select 
//                   value={statusFilter}
//                   onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
//                   className="appearance-none pl-8 pr-8 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none"
//                 >
//                   <option value="All">All Statuses</option>
//                   <option value="Admin Approval">Admin Approval</option>
//                   <option value="Action Req.">Action Req.</option>
//                   <option value="Pending Partner">Pending Partner</option>
//                   <option value="Partner Verified">Partner Verified</option>
//                   <option value="Published">Published</option>
//                 </select>
//                 <Filter className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
//                 <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
//               </div>

//               {/* Sort Filter */}
//               <div className="relative">
//                 <select 
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="appearance-none pl-8 pr-8 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none"
//                 >
//                   <option value="newest">Newest First</option>
//                   <option value="oldest">Oldest First</option>
//                 </select>
//                 <Filter className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
//                 <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
//               </div>
//             </div>
//           </div>

//           {/* Table Content */}
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-slate-50/70 text-slate-500 font-semibold text-xs border-b border-slate-100">
//                 <tr>
//                   <th className="p-4 w-10 text-center">
//                     <input 
//                       type="checkbox" 
//                       onChange={handleSelectAll}
//                       checked={paginatedProperties.length > 0 && selectedIds.length === paginatedProperties.length}
//                       className="rounded border-slate-300 text-teal-700 focus:ring-teal-500 cursor-pointer" 
//                     />
//                   </th>
//                   <th className="p-4">Property</th>
//                   <th className="p-4">Partner</th>
//                   <th className="p-4">Verification Status</th>
//                   <th className="p-4">Submitted</th>
//                   <th className="p-4 text-right">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 text-slate-700">
//                 {paginatedProperties.length > 0 ? (
//                   paginatedProperties.map((item) => (
//                     <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
//                       {/* Checkbox */}
//                       <td className="p-4 text-center">
//                         <input 
//                           type="checkbox" 
//                           checked={selectedIds.includes(item.id)}
//                           onChange={() => handleSelectOne(item.id)}
//                           className="rounded border-slate-300 text-teal-700 focus:ring-teal-500 cursor-pointer" 
//                         />
//                       </td>

//                       {/* Property */}
//                       <td className="p-4">
//                         <div className="flex items-center gap-3">
//                           <img 
//                             src={item.image} 
//                             alt={item.name} 
//                             className="w-10 h-10 rounded-lg object-cover border border-slate-200" 
//                           />
//                           <div>
//                             <p className="font-semibold text-slate-900 text-xs sm:text-sm">{item.name}</p>
//                             <p className="text-[11px] text-slate-400 font-mono mt-0.5">ID: {item.id}</p>
//                           </div>
//                         </div>
//                       </td>

//                       {/* Partner */}
//                       <td className="p-4">
//                         <div className="flex items-center gap-2">
//                           <span className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold ${item.partnerBg}`}>
//                             {item.partnerInitials}
//                           </span>
//                           <span className="text-xs font-medium text-slate-700">{item.partnerName}</span>
//                         </div>
//                       </td>

//                       {/* Status */}
//                       <td className="p-4">
//                         {item.statusType === 'dark' && (
//                           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-white">
//                             <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
//                             {item.status}
//                           </span>
//                         )}
//                         {item.statusType === 'danger' && (
//                           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-600">
//                             <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
//                             {item.status}
//                           </span>
//                         )}
//                         {item.statusType === 'teal' && (
//                           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-700">
//                             <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
//                             {item.status}
//                           </span>
//                         )}
//                         {item.statusType === 'secondary' && (
//                           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
//                             <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
//                             {item.status}
//                           </span>
//                         )}
//                       </td>

//                       {/* Time */}
//                       <td className="p-4 text-xs text-slate-500">
//                         {item.submittedText}
//                       </td>

//                       {/* Action */}
//                       <td className="p-4 text-right">
//                         <button 
//                           onClick={() => handleAction(item.id, item.action)}
//                           className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
//                             item.actionType === 'primary' 
//                               ? 'bg-slate-900 hover:bg-slate-800 text-white' 
//                               : 'border border-teal-600/40 text-teal-700 hover:bg-teal-50'
//                           }`}
//                         >
//                           {item.action}
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="text-center py-8 text-slate-400 text-xs">
//                       No properties found matching your filter criteria.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Dynamic Pagination Footer */}
//           <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//             <span>
//               Showing {filteredProperties.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-
//               {Math.min(currentPage * itemsPerPage, filteredProperties.length)} of {filteredProperties.length}
//             </span>
            
//             <div className="flex items-center gap-1">
//               <button 
//                 onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="p-1 rounded hover:bg-slate-100 text-slate-400 disabled:opacity-40"
//               >
//                 <ChevronLeft className="w-4 h-4" />
//               </button>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => setCurrentPage(page)}
//                   className={`w-7 h-7 rounded font-medium flex items-center justify-center transition-colors ${
//                     currentPage === page 
//                       ? 'bg-teal-800 text-white' 
//                       : 'hover:bg-slate-100 text-slate-600'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}

//               <button 
//                 onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//                 disabled={currentPage === totalPages || totalPages === 0}
//                 className="p-1 rounded hover:bg-slate-100 text-slate-400 disabled:opacity-40"
//               >
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default PropertyDashboard;


import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Download,
  RotateCw,
  Clock,
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import {
  getAllPropertiesApi,
  updatePropertyStatusApi,
} from "../../../Services/propertyService";

import Swal from "sweetalert2";

const APPROVAL_STATUSES = [
  "Submitted",
  "Assigned_To_Partner",
  "Reviewing",
  "Verified",
];

const UPDATE_STATUSES = [
  "Reviewing",
  "Verified",
  "Live",
  "Sold",
  "Rejected",
  "Rented",
];

const STATUS_STYLE = {
  Submitted:
    "bg-amber-50 text-amber-700 border-amber-200",

  Assigned_To_Partner:
    "bg-blue-50 text-blue-700 border-blue-200",

  Reviewing:
    "bg-purple-50 text-purple-700 border-purple-200",

  Verified:
    "bg-emerald-50 text-emerald-700 border-emerald-200",

  Live:
    "bg-teal-50 text-teal-700 border-teal-200",

  Sold:
    "bg-slate-100 text-slate-700 border-slate-200",

  Rented:
    "bg-cyan-50 text-cyan-700 border-cyan-200",

  Rejected:
    "bg-red-50 text-red-700 border-red-200",
};

export default function PropertyApproval() {
  const navigate = useNavigate();

  const [properties, setProperties] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [updatingId, setUpdatingId] =
    useState(null);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("newest");

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 8;

  // =====================================================
  // GET APPROVAL PROPERTIES
  // =====================================================

  const getApprovalProperties =
    async () => {
      try {
        setLoading(true);

        const response =
          await getAllPropertiesApi();

        const allProperties =
          response?.data || [];

        // Only approval pipeline properties
        const approvalProperties =
          allProperties.filter((property) =>
            APPROVAL_STATUSES.includes(
              property.status
            )
          );

        setProperties(
          approvalProperties
        );
      } catch (error) {
        console.error(
          "Approval Properties Error:",
          error
        );

        Swal.fire({
          icon: "error",
          title:
            "Unable to load properties",
          text:
            error?.response?.data
              ?.message ||
            "Something went wrong while fetching properties.",
        });
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    getApprovalProperties();
  }, []);

  // =====================================================
  // STATUS COUNTS
  // =====================================================

  const pipelineCounts =
    useMemo(() => {
      return {
        Submitted:
          properties.filter(
            (p) =>
              p.status === "Submitted"
          ).length,

        Assigned_To_Partner:
          properties.filter(
            (p) =>
              p.status ===
              "Assigned_To_Partner"
          ).length,

        Reviewing:
          properties.filter(
            (p) =>
              p.status === "Reviewing"
          ).length,

        Verified:
          properties.filter(
            (p) =>
              p.status === "Verified"
          ).length,

        All: properties.length,
      };
    }, [properties]);

  // =====================================================
  // FILTER
  // =====================================================

  const filteredProperties =
    useMemo(() => {
      const result =
        properties.filter(
          (property) => {
            const search =
              searchQuery
                .trim()
                .toLowerCase();

            const matchesSearch =
              !search ||
              property?.title
                ?.toLowerCase()
                .includes(search) ||
              property?.propertyId
                ?.toLowerCase()
                .includes(search) ||
              property?.city
                ?.toLowerCase()
                .includes(search) ||
              property?.locality
                ?.toLowerCase()
                .includes(search) ||
              property?.addedBy?.name
                ?.toLowerCase()
                .includes(search);

            const matchesStatus =
              statusFilter ===
                "All" ||
              property.status ===
                statusFilter;

            return (
              matchesSearch &&
              matchesStatus
            );
          }
        );

      return result.sort((a, b) => {
        const dateA =
          new Date(
            a.createdAt || 0
          ).getTime();

        const dateB =
          new Date(
            b.createdAt || 0
          ).getTime();

        return sortBy === "newest"
          ? dateB - dateA
          : dateA - dateB;
      });
    }, [
      properties,
      searchQuery,
      statusFilter,
      sortBy,
    ]);

  // =====================================================
  // PAGINATION
  // =====================================================

  const totalPages =
    Math.ceil(
      filteredProperties.length /
        itemsPerPage
    ) || 1;

  const paginatedProperties =
    filteredProperties.slice(
      (currentPage - 1) *
        itemsPerPage,
      currentPage * itemsPerPage
    );

  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchQuery,
    statusFilter,
  ]);

  // =====================================================
  // UPDATE STATUS
  // =====================================================

  const handleStatusUpdate =
    async (
      property,
      newStatus
    ) => {
      if (
        !newStatus ||
        newStatus ===
          property.status
      ) {
        return;
      }

      let rejectionReason = "";

      if (
        newStatus === "Rejected"
      ) {
        const result =
          await Swal.fire({
            title:
              "Reject Property",
            text:
              "Please enter rejection reason.",
            input: "textarea",
            inputPlaceholder:
              "Enter rejection reason...",
            showCancelButton: true,
            confirmButtonText:
              "Reject Property",
            confirmButtonColor:
              "#dc2626",

            inputValidator: (
              value
            ) => {
              if (!value?.trim()) {
                return "Rejection reason is required.";
              }
            },
          });

        if (
          !result.isConfirmed
        ) {
          return;
        }

        rejectionReason =
          result.value;
      } else {
        const result =
          await Swal.fire({
            icon: "question",
            title:
              `Change status to ${newStatus}?`,
            html: `
              <div style="font-size:13px;color:#64748b">
                <strong>${property.title}</strong>
                <br/>
                ${property.propertyId || ""}
                <br/><br/>
                Current:
                <strong>${property.status}</strong>
                →
                <strong style="color:#059669">${newStatus}</strong>
              </div>
            `,
            showCancelButton: true,
            confirmButtonText:
              "Yes, Update",
            cancelButtonText:
              "Cancel",
            confirmButtonColor:
              "#0d2d2a",
          });

        if (
          !result.isConfirmed
        ) {
          return;
        }
      }

      try {
        setUpdatingId(
          property._id
        );

        const payload = {
          status: newStatus,

          notes:
            `Property status changed from ${property.status} to ${newStatus} from Property Approval.`,

          rejectionReason:
            newStatus ===
            "Rejected"
              ? rejectionReason
              : "",
        };

        const response =
          await updatePropertyStatusApi(
            property._id,
            payload
          );

        if (response?.success) {
          await Swal.fire({
            icon: "success",
            title:
              "Status Updated",
            text:
              response?.message ||
              `Property moved to ${newStatus}.`,
            timer: 1500,
            showConfirmButton: false,
          });

          /*
            Important:

            Reviewing / Verified approval page me
            reh sakte hain.

            Live / Sold / Rejected / Rented
            approval page se automatically
            remove ho jayenge because they are
            not in APPROVAL_STATUSES.
          */

          await getApprovalProperties();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title:
            "Status Update Failed",
          text:
            error?.response?.data
              ?.message ||
            "Unable to update property status.",
        });
      } finally {
        setUpdatingId(null);
      }
    };

  // =====================================================
  // VIEW PROPERTY
  // =====================================================

const handleViewProperty = (property) => {
  console.log("VIEW PROPERTY:", property);
  console.log("PROPERTY ID:", property?._id);

  if (!property?._id) {
    Swal.fire({
      icon: "error",
      title: "Property ID Missing",
      text: "MongoDB property _id nahi mila.",
    });
    return;
  }

  navigate(
    `/property-management/${property._id}`
  );
};

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mx-auto max-w-[1500px] space-y-6">

        {/* HEADER */}

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Properties / Approval
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Property Approval
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Review, verify and publish property submissions.
            </p>
          </div>

          <button
            onClick={
              getApprovalProperties
            }
            className="flex items-center gap-2 self-start rounded-xl bg-[#0d2d2a] px-4 py-2.5 text-sm font-semibold text-white"
          >
            <RotateCw
              size={16}
            />

            Sync Properties
          </button>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">

          <StatCard
            label="Total Approval"
            value={
              pipelineCounts.All
            }
            active={
              statusFilter ===
              "All"
            }
            onClick={() =>
              setStatusFilter(
                "All"
              )
            }
          />

          <StatCard
            label="Submitted"
            value={
              pipelineCounts.Submitted
            }
            active={
              statusFilter ===
              "Submitted"
            }
            onClick={() =>
              setStatusFilter(
                "Submitted"
              )
            }
          />

          <StatCard
            label="Assigned"
            value={
              pipelineCounts.Assigned_To_Partner
            }
            active={
              statusFilter ===
              "Assigned_To_Partner"
            }
            onClick={() =>
              setStatusFilter(
                "Assigned_To_Partner"
              )
            }
          />

          <StatCard
            label="Reviewing"
            value={
              pipelineCounts.Reviewing
            }
            active={
              statusFilter ===
              "Reviewing"
            }
            onClick={() =>
              setStatusFilter(
                "Reviewing"
              )
            }
          />

          <StatCard
            label="Verified"
            value={
              pipelineCounts.Verified
            }
            active={
              statusFilter ===
              "Verified"
            }
            onClick={() =>
              setStatusFilter(
                "Verified"
              )
            }
          />

        </div>

        {/* TABLE CARD */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* FILTER BAR */}

          <div className="flex flex-col gap-3 border-b border-slate-100 p-4 md:flex-row md:items-center md:justify-between">

            <div className="relative w-full md:max-w-md">

              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={
                  searchQuery
                }
                onChange={(e) =>
                  setSearchQuery(
                    e.target.value
                  )
                }
                placeholder="Search title, property ID, city..."
                className="h-11 w-full rounded-xl border border-slate-200 pl-10 pr-4 text-sm outline-none focus:border-teal-600"
              />

            </div>

            <div className="flex gap-2">

              <select
                value={
                  statusFilter
                }
                onChange={(e) =>
                  setStatusFilter(
                    e.target.value
                  )
                }
                className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none"
              >
                <option value="All">
                  All Status
                </option>

                {APPROVAL_STATUSES.map(
                  (status) => (
                    <option
                      value={
                        status
                      }
                      key={
                        status
                      }
                    >
                      {status.replaceAll(
                        "_",
                        " "
                      )}
                    </option>
                  )
                )}
              </select>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value
                  )
                }
                className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none"
              >
                <option value="newest">
                  Newest
                </option>

                <option value="oldest">
                  Oldest
                </option>
              </select>

            </div>

          </div>

          {/* TABLE */}

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70">

                  {[
                    "Property",
                    "Added By",
                    "Location",
                    "Status",
                    "Created",
                    "Change Status",
                    "Action",
                  ].map(
                    (heading) => (
                      <th
                        key={
                          heading
                        }
                        className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400"
                      >
                        {
                          heading
                        }
                      </th>
                    )
                  )}

                </tr>
              </thead>

              <tbody>

                {loading ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="py-16 text-center text-sm text-slate-400"
                    >
                      Loading properties...
                    </td>
                  </tr>
                ) : paginatedProperties.length ===
                  0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="py-16 text-center"
                    >
                      <Clock
                        size={32}
                        className="mx-auto mb-3 text-slate-300"
                      />

                      <p className="font-semibold text-slate-600">
                        No approval properties found
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Submitted, Assigned, Reviewing and Verified properties will appear here.
                      </p>
                    </td>
                  </tr>
                ) : (
                  paginatedProperties.map(
                    (
                      property
                    ) => (
                      <tr
                        key={
                          property._id
                        }
                        className="border-b border-slate-50 transition hover:bg-slate-50/60"
                      >

                        {/* PROPERTY */}

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">

                            <img
                              src={
                                property
                                  ?.images?.[0]
                                  ?.url ||
                                "https://placehold.co/80x80?text=Property"
                              }
                              alt={
                                property.title
                              }
                              className="h-12 w-12 rounded-xl object-cover"
                            />

                            <div>
                              <p className="max-w-[220px] truncate text-sm font-bold text-slate-900">
                                {
                                  property.title
                                }
                              </p>

                              <p className="mt-0.5 text-[11px] text-slate-400">
                                ID:{" "}
                                {
                                  property.propertyId
                                }
                              </p>
                            </div>

                          </div>
                        </td>

                        {/* ADDED BY */}

                        <td className="px-5 py-4">

                          <p className="text-sm font-semibold text-slate-700">
                            {
                              property
                                ?.addedBy
                                ?.name ||
                              "-"
                            }
                          </p>

                          <p className="text-[10px] text-slate-400">
                            {
                              property
                                ?.addedBy
                                ?.role ||
                              "-"
                            }
                          </p>

                        </td>

                        {/* LOCATION */}

                        <td className="px-5 py-4">

                          <p className="text-sm text-slate-700">
                            {
                              property.city ||
                              "-"
                            }
                          </p>

                          <p className="text-[10px] text-slate-400">
                            {
                              property.locality ||
                              ""
                            }
                          </p>

                        </td>

                        {/* STATUS */}

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold ${
                              STATUS_STYLE[
                                property
                                  .status
                              ] ||
                              "border-slate-200 bg-slate-50 text-slate-600"
                            }`}
                          >
                            {property.status.replaceAll(
                              "_",
                              " "
                            )}
                          </span>
                        </td>

                        {/* CREATED */}

                        <td className="px-5 py-4 text-xs text-slate-500">
                          {property.createdAt
                            ? new Date(
                                property.createdAt
                              ).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "2-digit",
                                  month:
                                    "short",
                                  year: "numeric",
                                }
                              )
                            : "-"}
                        </td>

                        {/* STATUS SELECT */}

                        <td className="px-5 py-4">

                          <select
                            disabled={
                              updatingId ===
                              property._id
                            }
                            value={
                              property.status
                            }
                            onChange={(
                              e
                            ) =>
                              handleStatusUpdate(
                                property,
                                e.target
                                  .value
                              )
                            }
                            className="h-9 min-w-[145px] rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 outline-none focus:border-teal-600 disabled:opacity-50"
                          >
                            <option
                              value={
                                property.status
                              }
                            >
                              {property.status.replaceAll(
                                "_",
                                " "
                              )}
                            </option>

                            {UPDATE_STATUSES.filter(
                              (
                                status
                              ) =>
                                status !==
                                property.status
                            ).map(
                              (
                                status
                              ) => (
                                <option
                                  key={
                                    status
                                  }
                                  value={
                                    status
                                  }
                                >
                                  {status}
                                </option>
                              )
                            )}
                          </select>

                        </td>

                        {/* VIEW */}

                        <td className="px-5 py-4">

                          <button
                            onClick={() =>
                              handleViewProperty(
                                property
                              )
                            }
                            className="flex items-center gap-2 rounded-lg bg-[#0d2d2a] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#123b36]"
                          >
                            <Eye
                              size={
                                14
                              }
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

          {/* PAGINATION */}

          {!loading &&
            filteredProperties.length >
              0 && (
              <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">

                <p className="text-xs text-slate-400">
                  Showing{" "}
                  {
                    paginatedProperties.length
                  }{" "}
                  of{" "}
                  {
                    filteredProperties.length
                  }{" "}
                  properties
                </p>

                <div className="flex items-center gap-2">

                  <button
                    disabled={
                      currentPage ===
                      1
                    }
                    onClick={() =>
                      setCurrentPage(
                        (
                          page
                        ) =>
                          Math.max(
                            1,
                            page -
                              1
                          )
                      )
                    }
                    className="rounded-lg border border-slate-200 p-2 disabled:opacity-40"
                  >
                    <ChevronLeft
                      size={
                        15
                      }
                    />
                  </button>

                  <span className="text-xs font-semibold text-slate-600">
                    {
                      currentPage
                    }{" "}
                    /{" "}
                    {
                      totalPages
                    }
                  </span>

                  <button
                    disabled={
                      currentPage ===
                      totalPages
                    }
                    onClick={() =>
                      setCurrentPage(
                        (
                          page
                        ) =>
                          Math.min(
                            totalPages,
                            page +
                              1
                          )
                      )
                    }
                    className="rounded-lg border border-slate-200 p-2 disabled:opacity-40"
                  >
                    <ChevronRight
                      size={
                        15
                      }
                    />
                  </button>

                </div>

              </div>
            )}

        </div>

      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition ${
        active
          ? "border-teal-700 bg-teal-50 shadow-sm"
          : "border-slate-200 bg-white hover:border-teal-300"
      }`}
    >
      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-2xl font-extrabold text-slate-900">
        {value}
      </p>
    </button>
  );
}