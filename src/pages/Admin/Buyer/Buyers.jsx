// import React, { useEffect, useMemo, useState } from "react";
// import {
//   Search,
//   Users,
//   TrendingUp,
//   UserCheck,
//   Building2,
//   SlidersHorizontal,
//   ChevronDown,
// } from "lucide-react";
// import { fetchAllBuyers } from "../../../services/buyerService";

// const Buyers = () => {
//   const [buyers, setBuyers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("All");
//   const [location, setLocation] = useState("All");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getBuyers();
//   }, []);

//   const getBuyers = async () => {
//     try {
//       setLoading(true);
//       const response = await fetchAllBuyers();

//       if (response && response.success) {
//         const mappedBuyers = response.data.map((item) => {
//           let calculatedStatus = "Active";
//           if (!item.isPhoneVerified) {
//             calculatedStatus = "Pending";
//           }
//           if (item.status) {
//             calculatedStatus = item.status;
//           }

//           return {
//             id: item._id,
//             name: item.name || "N/A",
//             buyerId: `BUY-${item._id.slice(-5).toUpperCase()}`,
//             phone: item.phone || "N/A",
//             email: item.email || "N/A",
//             location: item.location || "Not Provided",
//             visits: item.visits || 0,
//             inquiries: item.inquiries || 0,
//             status: calculatedStatus,
//             avatar: item.avatar || "",
//           };
//         });

//         setBuyers(mappedBuyers);
//       }
//     } catch (error) {
//       console.error("Buyers fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const locations = useMemo(() => {
//     return ["All", ...new Set(buyers.map((buyer) => buyer.location))];
//   }, [buyers]);

//   const filteredBuyers = useMemo(() => {
//     return buyers.filter((buyer) => {
//       const searchValue = search.toLowerCase();

//       const matchesSearch =
//         buyer.name.toLowerCase().includes(searchValue) ||
//         buyer.buyerId.toLowerCase().includes(searchValue) ||
//         buyer.phone.toLowerCase().includes(searchValue) ||
//         buyer.email.toLowerCase().includes(searchValue) ||
//         buyer.location.toLowerCase().includes(searchValue);

//       const matchesStatus =
//         status === "All" || buyer.status === status;

//       const matchesLocation =
//         location === "All" || buyer.location === location;

//       return matchesSearch && matchesStatus && matchesLocation;
//     });
//   }, [buyers, search, status, location]);

//   const totalBuyers = buyers.length;
//   const activeBuyers = buyers.filter((b) => b.status === "Active").length;
//   const suspendedBuyers = buyers.filter((b) => b.status === "Suspended").length;
//   const pendingBuyers = buyers.filter((b) => b.status === "Pending").length;

//   const statistics = [
//     {
//       title: "Total Buyers",
//       value: totalBuyers.toLocaleString(),
//       smallText: "Active registered users",
//       icon: Users,
//       badge: "+12.4%",
//     },
//     {
//       title: "New Buyers (30d)",
//       value: `+${totalBuyers}`,
//       smallText: "vs last month",
//       icon: TrendingUp,
//       badge: "+5.2%",
//     },
//     {
//       title: "Account Status",
//       value: activeBuyers,
//       smallText: "Pending / Suspended",
//       icon: UserCheck,
//       secondary: `${pendingBuyers} / ${suspendedBuyers}`,
//     },
//     {
//       title: "Current Inquiries",
//       value: buyers.reduce((total, buyer) => total + (buyer.inquiries || 0), 0),
//       smallText: "Total property inquiries",
//       icon: Building2,
//       badge: "",
//     },
//   ];

//   const getStatusStyle = (buyerStatus) => {
//     switch (buyerStatus) {
//       case "Active":
//         return "bg-[#e6fcf5] text-[#0ca678] border-[#20c997]/30";
//       case "Suspended":
//         return "bg-red-50 text-red-600 border-red-200";
//       case "Pending":
//         return "bg-amber-50 text-amber-600 border-amber-200";
//       default:
//         return "bg-slate-100 text-slate-600 border-slate-200";
//     }
//   };

//   return (
//     <div className="space-y-4 font-sans text-[#0f2c3f]">
//       {/* STATS CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//         {statistics.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#20c997]/40"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
//                   {item.title}
//                 </span>

//                 <div className="w-10 h-10 rounded-xl bg-[#e6fcf5] flex items-center justify-center text-[#20c997]">
//                   <Icon size={20} />
//                 </div>
//               </div>

//               <div className="mt-3 flex items-baseline gap-2">
//                 <h3 className="text-2xl font-black text-[#0f2c3f]">
//                   {item.value}
//                 </h3>

//                 {item.badge && (
//                   <span className="px-2 py-0.5 rounded-full bg-[#e6fcf5] text-[#0ca678] text-[10px] font-bold">
//                     {item.badge}
//                   </span>
//                 )}

//                 {item.secondary && (
//                   <span className="text-xs font-bold text-amber-600">
//                     ({item.secondary})
//                   </span>
//                 )}
//               </div>

//               <p className="mt-1 text-xs text-slate-400 font-medium">
//                 {item.smallText}
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       {/* MAIN CONTAINER */}
//       <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden">
//         {/* FILTER BAR */}
//         <div className="p-4 border-b border-slate-100 bg-slate-50/50">
//           <div className="flex flex-col lg:flex-row gap-3">
//             {/* Search Input */}
//             <div className="relative flex-1 lg:max-w-xs">
//               <Search
//                 size={16}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search ID, Name, Mobile..."
//                 className="w-full h-10 rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-medium text-[#0f2c3f] outline-none focus:border-[#20c997] focus:ring-2 focus:ring-[#20c997]/15 transition"
//               />
//             </div>

//             {/* Status Dropdown */}
//             <div className="relative min-w-[130px]">
//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="appearance-none w-full h-10 rounded-xl border border-slate-200 bg-white px-3 pr-8 text-xs font-semibold text-slate-600 outline-none cursor-pointer focus:border-[#20c997]"
//               >
//                 <option value="All">All Status</option>
//                 <option value="Active">Active</option>
//                 <option value="Pending">Pending</option>
//                 <option value="Suspended">Suspended</option>
//               </select>
//               <ChevronDown
//                 size={14}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
//               />
//             </div>

//             {/* Location Dropdown */}
//             <div className="relative min-w-[140px]">
//               <select
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 className="appearance-none w-full h-10 rounded-xl border border-slate-200 bg-white px-3 pr-8 text-xs font-semibold text-slate-600 outline-none cursor-pointer focus:border-[#20c997]"
//               >
//                 {locations.map((item) => (
//                   <option key={item} value={item}>
//                     {item === "All" ? "All Locations" : item}
//                   </option>
//                 ))}
//               </select>
//               <ChevronDown
//                 size={14}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
//               />
//             </div>

//             {/* Filter Action Button */}
//             {/* <button className="h-10 px-4 rounded-xl border border-slate-200 bg-white flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition">
//               <SlidersHorizontal size={14} />
//               More Filters
//             </button> */}
//           </div>
//         </div>

//         {/* TABLE SECTION */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               {/* Table Header: Logo Navy Blue */}
//               <tr className="bg-[#0f2c3f] text-white text-xs font-bold uppercase tracking-wider">
//                 <th className="px-5 py-3.5">Buyer</th>
//                 <th className="px-5 py-3.5">Contact</th>
//                 <th className="px-5 py-3.5">Location</th>
//                 <th className="px-5 py-3.5">Activity</th>
//                 <th className="px-5 py-3.5">Status</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-slate-100 text-xs">
//               {loading ? (
//                 <tr>
//                   <td colSpan="5" className="text-center py-12 text-slate-400 font-medium">
//                     Loading buyers data...
//                   </td>
//                 </tr>
//               ) : filteredBuyers.length === 0 ? (
//                 <tr>
//                   <td colSpan="5" className="text-center py-12 text-slate-400 font-medium">
//                     No buyers found matching criteria.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredBuyers.map((buyer) => (
//                   <tr key={buyer.id} className="hover:bg-[#e6fcf5]/40 transition-colors">
//                     {/* Buyer Info */}
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         {buyer.avatar ? (
//                           <img
//                             src={buyer.avatar}
//                             alt={buyer.name}
//                             className="w-9 h-9 rounded-full object-cover border border-slate-200"
//                           />
//                         ) : (
//                           <div className="w-9 h-9 rounded-full bg-[#e6fcf5] text-[#20c997] font-bold flex items-center justify-center text-xs border border-[#20c997]/20">
//                             {buyer.name
//                               .split(" ")
//                               .map((w) => w[0])
//                               .join("")
//                               .slice(0, 2)}
//                           </div>
//                         )}
//                         <div>
//                           <p className="font-bold text-[#0f2c3f]">{buyer.name}</p>
//                           <p className="text-[10px] text-slate-400 font-semibold">{buyer.buyerId}</p>
//                         </div>
//                       </div>
//                     </td>

//                     {/* Contact */}
//                     <td className="px-5 py-4">
//                       <p className="font-semibold text-slate-700">{buyer.phone}</p>
//                       <p className="text-[11px] text-slate-400">{buyer.email}</p>
//                     </td>

//                     {/* Location */}
//                     <td className="px-5 py-4 font-medium text-slate-600">
//                       {buyer.location}
//                     </td>

//                     {/* Activity */}
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-2">
//                         <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-semibold text-[11px]">
//                           {buyer.visits} Visits
//                         </span>
//                         <span className="px-2.5 py-1 rounded-lg bg-[#e6fcf5] text-[#0ca678] font-semibold text-[11px]">
//                           {buyer.inquiries} Inq.
//                         </span>
//                       </div>
//                     </td>

//                     {/* Status */}
//                     <td className="px-5 py-4">
//                       <div className="flex flex-col items-start gap-1">
//                         <span
//                           className={`px-3 py-1 rounded-full border text-[11px] font-bold ${getStatusStyle(
//                             buyer.status
//                           )}`}
//                         >
//                           {buyer.status}
//                         </span>
//                         {buyer.status === "Suspended" && (
//                           <span className="text-[9px] font-bold text-red-500">
//                             ⚠ Review Req.
//                           </span>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* FOOTER */}
//         <div className="px-5 py-3.5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
//           <p>
//             Showing <span className="font-bold text-[#0f2c3f]">{filteredBuyers.length}</span> of{" "}
//             <span className="font-bold text-[#0f2c3f]">{buyers.length.toLocaleString()}</span> entries
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Buyers;


import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Users,
  TrendingUp,
  UserCheck,
  Building2,
  ChevronDown,
} from "lucide-react";
import { fetchAllBuyers } from "../../../services/buyerService";

const Buyers = () => {
  const [buyers, setBuyers] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [location, setLocation] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBuyers();
  }, []);

  const getBuyers = async () => {
    try {
      setLoading(true);
      const response = await fetchAllBuyers();

      if (response && response.success) {
        const mappedBuyers = response.data.map((item) => {
          let calculatedStatus = "Active";
          if (!item.isPhoneVerified) {
            calculatedStatus = "Pending";
          }
          if (item.status) {
            calculatedStatus = item.status;
          }

          // Safely Location Parsing (String vs Object handling)
          let parsedCity = "Not Provided";
          let fullLocationText = "Not Provided";

          if (typeof item.location === "object" && item.location !== null) {
            parsedCity = item.location.city || "Not Provided";
            const parts = [
              item.location.address,
              item.location.city,
              item.location.state,
            ].filter(Boolean);
            
            fullLocationText = parts.length > 0 ? parts.join(", ") : "Not Provided";
          } else if (typeof item.location === "string" && item.location.trim() !== "") {
            parsedCity = item.location;
            fullLocationText = item.location;
          }

          // Backend Buyer ID handling
          const generatedBuyerId = item.buyerId
            ? item.buyerId
            : `BUY-${(item._id || item.id || "").slice(-5).toUpperCase()}`;

          return {
            id: item._id || item.id,
            buyerId: generatedBuyerId,
            name: item.name || "N/A",
            phone: item.phone || "N/A",
            email: item.email || "N/A",
            city: parsedCity,
            locationText: fullLocationText,
            visits: item.visits || 0,
            inquiries: item.inquiries || 0,
            status: calculatedStatus,
            avatar: item.avatar || "",
          };
        });

        setBuyers(mappedBuyers);
      }
    } catch (error) {
      console.error("Buyers fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Locations dropdown setup (Cities basis)
  const locations = useMemo(() => {
    return ["All", ...new Set(buyers.map((buyer) => buyer.city).filter((c) => c !== "Not Provided"))];
  }, [buyers]);

  const filteredBuyers = useMemo(() => {
    return buyers.filter((buyer) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        buyer.name.toLowerCase().includes(searchValue) ||
        buyer.buyerId.toLowerCase().includes(searchValue) ||
        buyer.phone.toLowerCase().includes(searchValue) ||
        buyer.email.toLowerCase().includes(searchValue) ||
        buyer.locationText.toLowerCase().includes(searchValue);

      const matchesStatus =
        status === "All" || buyer.status === status;

      const matchesLocation =
        location === "All" || buyer.city === location;

      return matchesSearch && matchesStatus && matchesLocation;
    });
  }, [buyers, search, status, location]);

  const totalBuyers = buyers.length;
  const activeBuyers = buyers.filter((b) => b.status === "Active").length;
  const suspendedBuyers = buyers.filter((b) => b.status === "Suspended").length;
  const pendingBuyers = buyers.filter((b) => b.status === "Pending").length;

  const statistics = [
    {
      title: "Total Buyers",
      value: totalBuyers.toLocaleString(),
      smallText: "Active registered users",
      icon: Users,
      badge: "+12.4%",
    },
    {
      title: "New Buyers (30d)",
      value: `+${totalBuyers}`,
      smallText: "vs last month",
      icon: TrendingUp,
      badge: "+5.2%",
    },
    {
      title: "Account Status",
      value: activeBuyers,
      smallText: "Pending / Suspended",
      icon: UserCheck,
      secondary: `${pendingBuyers} / ${suspendedBuyers}`,
    },
    {
      title: "Current Inquiries",
      value: buyers.reduce((total, buyer) => total + (buyer.inquiries || 0), 0),
      smallText: "Total property inquiries",
      icon: Building2,
      badge: "",
    },
  ];

  const getStatusStyle = (buyerStatus) => {
    switch (buyerStatus) {
      case "Active":
        return "bg-[#e6fcf5] text-[#0ca678] border-[#20c997]/30";
      case "Suspended":
        return "bg-red-50 text-red-600 border-red-200";
      case "Pending":
        return "bg-amber-50 text-amber-600 border-amber-200";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <div className="space-y-4 font-sans text-[#0f2c3f]">
      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statistics.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#20c997]/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {item.title}
                </span>

                <div className="w-10 h-10 rounded-xl bg-[#e6fcf5] flex items-center justify-center text-[#20c997]">
                  <Icon size={20} />
                </div>
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <h3 className="text-2xl font-black text-[#0f2c3f]">
                  {item.value}
                </h3>

                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-[#e6fcf5] text-[#0ca678] text-[10px] font-bold">
                    {item.badge}
                  </span>
                )}

                {item.secondary && (
                  <span className="text-xs font-bold text-amber-600">
                    ({item.secondary})
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs text-slate-400 font-medium">
                {item.smallText}
              </p>
            </div>
          );
        })}
      </div>

      {/* MAIN CONTAINER */}
      <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden">
        {/* FILTER BAR */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1 lg:max-w-xs">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ID, Name, Mobile, City..."
                className="w-full h-10 rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-medium text-[#0f2c3f] outline-none focus:border-[#20c997] focus:ring-2 focus:ring-[#20c997]/15 transition"
              />
            </div>

            {/* Status Dropdown */}
            <div className="relative min-w-[130px]">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="appearance-none w-full h-10 rounded-xl border border-slate-200 bg-white px-3 pr-8 text-xs font-semibold text-slate-600 outline-none cursor-pointer focus:border-[#20c997]"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Suspended">Suspended</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
              />
            </div>

            {/* Location Dropdown */}
            <div className="relative min-w-[140px]">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="appearance-none w-full h-10 rounded-xl border border-slate-200 bg-white px-3 pr-8 text-xs font-semibold text-slate-600 outline-none cursor-pointer focus:border-[#20c997]"
              >
                {locations.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All Locations" : item}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0f2c3f] text-white text-xs font-bold uppercase tracking-wider">
                <th className="px-5 py-3.5">Buyer</th>
                <th className="px-5 py-3.5">Contact</th>
                <th className="px-5 py-3.5">Location</th>
                <th className="px-5 py-3.5">Activity</th>
                <th className="px-5 py-3.5">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-xs">
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-slate-400 font-medium">
                    Loading buyers data...
                  </td>
                </tr>
              ) : filteredBuyers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-slate-400 font-medium">
                    No buyers found matching criteria.
                  </td>
                </tr>
              ) : (
                filteredBuyers.map((buyer) => (
                  <tr key={buyer.id} className="hover:bg-[#e6fcf5]/40 transition-colors">
                    {/* Buyer Info */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        {buyer.avatar ? (
                          <img
                            src={buyer.avatar}
                            alt={buyer.name}
                            className="w-9 h-9 rounded-full object-cover border border-slate-200"
                          />
                        ) : (
                          <div className="w-9 h-9 rounded-full bg-[#e6fcf5] text-[#20c997] font-bold flex items-center justify-center text-xs border border-[#20c997]/20">
                            {buyer.name
                              .split(" ")
                              .map((w) => w[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-[#0f2c3f]">{buyer.name}</p>
                          <p className="text-[10px] text-slate-400 font-semibold">{buyer.buyerId}</p>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-700">{buyer.phone}</p>
                      <p className="text-[11px] text-slate-400">{buyer.email}</p>
                    </td>

                    {/* Location */}
                    <td className="px-5 py-4 font-medium text-slate-600">
                      {buyer.locationText}
                    </td>

                    {/* Activity */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-semibold text-[11px]">
                          {buyer.visits} Visits
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-[#e6fcf5] text-[#0ca678] font-semibold text-[11px]">
                          {buyer.inquiries} Inq.
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <div className="flex flex-col items-start gap-1">
                        <span
                          className={`px-3 py-1 rounded-full border text-[11px] font-bold ${getStatusStyle(
                            buyer.status
                          )}`}
                        >
                          {buyer.status}
                        </span>
                        {buyer.status === "Suspended" && (
                          <span className="text-[9px] font-bold text-red-500">
                            ⚠ Review Req.
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="px-5 py-3.5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
          <p>
            Showing <span className="font-bold text-[#0f2c3f]">{filteredBuyers.length}</span> of{" "}
            <span className="font-bold text-[#0f2c3f]">{buyers.length.toLocaleString()}</span> entries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Buyers;