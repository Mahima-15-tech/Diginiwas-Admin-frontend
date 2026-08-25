// // // import { useEffect, useState } from "react";
// // // import axios from "../../Services/axios";
// // // import { FiFilter, FiUpload, FiEye, FiEdit2, FiChevronDown, FiChevronUp, FiInfo, FiTrash2 } from "react-icons/fi"; // FiTrash2 add kiya yahan
// // // import { MdOutlineCheckCircle, MdOutlineAutoAwesome, MdTrendingUp } from "react-icons/md";
// // // import { BsRobot } from "react-icons/bs";


// // // import {
// // //   FiX,
// // //   FiMapPin,
// // //   FiHeart,
// // //   FiShare2,
// // //   FiChevronLeft,
// // //   FiChevronRight,
// // // } from "react-icons/fi";

// // // import {
// // //   MdVerified,
// // //   MdOutlinePhotoLibrary,
// // // } from "react-icons/md";

// // // const DARK = "#0d2d2a";

// // // function StatusBadge({ status }) {
// // //   const isVerified = status === "VERIFIED";
// // //   return (
// // //     <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full border ${isVerified ? "text-teal-700 border-teal-400 bg-white" : "text-yellow-600 border-yellow-400 bg-white"}`}>
// // //       {status}
// // //     </span>
// // //   );
// // // }

// // // function AIAssistant({ open, onClose }) {
// // //   if (!open) return null;
// // //   return (
// // //     <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
// // //       <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "#f0faf8" }}>
// // //         <div className="flex items-center gap-2.5">
// // //           <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: DARK }}>
// // //             <BsRobot size={16} />
// // //           </div>
// // //           <span className="text-sm font-bold" style={{ color: DARK }}>AI Property Assistant</span>
// // //         </div>
// // //         <div className="flex items-center gap-2">
// // //           <FiChevronDown size={16} className="text-gray-500" />
// // //           <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
// // //             <FiX size={15} className="text-gray-500" />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="px-4 py-4">
// // //         <p className="text-xs text-gray-500 italic mb-4">Select a property from the table to unlock AI workflows.</p>

// // //         <button className="w-full flex items-center justify-between text-sm font-semibold text-white px-4 py-3 rounded-xl mb-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#10b981" }}>
// // //           Generate Description
// // //           <MdOutlineAutoAwesome size={16} className="text-white" />
// // //         </button>

// // //         <button className="w-full flex items-center justify-between text-sm font-semibold px-4 py-3 rounded-xl border-2 mb-4 hover:bg-teal-50 transition-colors" style={{ borderColor: "#10b981", color: "#10b981", backgroundColor: "white" }}>
// // //           Suggest Price
// // //           <MdTrendingUp size={16} />
// // //         </button>

// // //         <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-start gap-2.5">
// // //           <FiInfo size={15} className="text-gray-400 flex-shrink-0 mt-0.5" />
// // //           <p className="text-xs text-gray-600 leading-relaxed">
// // //             DIGINIWAS AI analyzed <span className="font-bold text-gray-900">market volatility</span>. Recommendation: Increase lead capture requirements for premium estates.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default function PropertyManagement() {
// // //   const [chatOpen, setChatOpen] = useState(false);
// // //   const [properties, setProperties] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [previewOpen, setPreviewOpen] = useState(false);
// // //   const [selectedProperty, setSelectedProperty] = useState(null);
// // //   const [currentImage, setCurrentImage] = useState(0);

// // //   const getProperties = async () => {
// // //     try {
// // //       const res = await axios.get("/properties");
// // //       setProperties(res.data.properties);
// // //     } catch (err) {
// // //       console.log(err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Delete Property Handler function add kiya
// // //   const handleDeleteProperty = async (id) => {
// // //     if (window.confirm("Kya aap sach me is property ko delete karna chahte hain?")) {
// // //       try {
// // //         const res = await axios.delete(`/properties/${id}`);
// // //         if (res.data.success) {
// // //           alert("Property Deleted Successfully!");
// // //           // UI se deleted property remove karne ke liye state update ki
// // //           setProperties(properties.filter((property) => property._id !== id));
// // //         }
// // //       } catch (err) {
// // //         console.log(err);
// // //         alert(err.response?.data?.message || "Property delete karne me dikkat aayi.");
// // //       }
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getProperties();
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 font-sans relative">
// // //       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">

// // //         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
// // //           <div>
// // //             <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Portfolio / <span className="text-gray-700">Properties</span></p>
// // //             <h1 className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: DARK, fontFamily: "Georgia, serif" }}>Property Management</h1>
// // //             <p className="text-sm text-gray-500">Oversee asset verification, lead distribution, and AI-driven valuation.</p>
// // //           </div>
// // //           <div className="flex items-center gap-3 self-start mt-1">
// // //             <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-xl px-4 py-2.5 bg-white hover:bg-gray-50 transition-colors">
// // //               <FiFilter size={15} /> Filter
// // //             </button>
// // //             <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-xl px-4 py-2.5 bg-white hover:bg-gray-50 transition-colors">
// // //               <FiUpload size={15} /> Export
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
// // //           <div className="overflow-x-auto">
// // //             <table className="w-full min-w-[700px]">
// // //               <thead>
// // //                 <tr className="border-b border-gray-100">
// // //                   {["Property Name", "Location", "Status", "Market Price", "Assigned Agent", "Leads", "Actions"].map((h) => (
// // //                     <th key={h} className="text-left text-[10px] font-bold tracking-widest text-gray-400 uppercase px-5 py-4 whitespace-nowrap">{h}</th>
// // //                   ))}
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {properties.map((p, i) => (
// // //                   <tr key={p._id || p.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i === properties.length - 1 ? "border-0" : ""}`}>
// // //                     <td className="px-5 py-4">
// // //                       <div className="flex items-center gap-3">
// // //                         <img
// // //                           src={p.images?.length ? p.images[0].url : "https://via.placeholder.com/120"}
// // //                           alt={p.title}
// // //                           className="w-12 h-12 rounded-xl object-cover shrink-0"
// // //                         />
// // //                         <div>
// // //                           <p className="text-sm font-bold text-gray-900">{p.title}</p>
// // //                           <p className="text-xs text-gray-400 mt-0.5">ID: {p.propertyId}</p>
// // //                         </div>
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-5 py-4 text-sm text-gray-600 whitespace-nowrap">{p.city}</td>
// // //                     <td className="px-5 py-4">
// // //                       <StatusBadge status={p.status} />
// // //                     </td>
// // //                     <td className="px-5 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">{p.price}</td>
// // //                     <td className="px-5 py-4">
// // //                       <div className="flex items-center gap-2">
// // //                         <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
// // //                           A
// // //                         </div>
// // //                         <span className="text-sm text-gray-700">Admin</span>
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-5 py-4 text-sm font-bold text-gray-900">{p.leads || 0}</td>
// // //                     <td className="px-5 py-4">
// // //                       <div className="flex items-center gap-3">
// // //                         <button
// // //                           onClick={() => {
// // //                             setSelectedProperty(p);
// // //                             setPreviewOpen(true);
// // //                           }}
// // //                           className="p-1 hover:bg-gray-100 rounded-full"
// // //                         >
// // //                           <FiEye size={17} className="text-gray-500" />
// // //                         </button>
// // //                         <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
// // //                           <FiEdit2 size={15} className="text-gray-500" />
// // //                         </button>
// // //                         <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
// // //                           <MdOutlineCheckCircle size={19} className="text-teal-500" />
// // //                         </button>
                        
// // //                         {/* DELETE BUTTON ADD KIYA YAHAN */}
// // //                         <button 
// // //                           onClick={() => handleDeleteProperty(p._id)} 
// // //                           className="p-1 hover:bg-red-50 rounded-full transition-colors"
// // //                           title="Delete Property"
// // //                         >
// // //                           <FiTrash2 size={16} className="text-red-500 hover:text-red-700" />
// // //                         </button>
// // //                       </div>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //           <div className="px-5 py-4 border-t border-gray-100">
// // //             <p className="text-sm font-semibold text-gray-500">Showing 1 to {properties.length} of {properties.length} Assets</p>
// // //           </div>
// // //         </div>

// // //       </div>

// // //       <AIAssistant open={chatOpen} onClose={() => setChatOpen(false)} />

// // //       <PropertyPreview
// // //         open={previewOpen}
// // //         property={selectedProperty}
// // //         onClose={() => setPreviewOpen(false)}
// // //       />

// // //       <button
// // //         onClick={() => setChatOpen(v => !v)}
// // //         className="fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity"
// // //         style={{ backgroundColor: DARK }}
// // //       >
// // //         {chatOpen ? <FiX size={22} /> : <BsRobot size={22} />}
// // //       </button>

// // //     </div>
// // //   );
// // // }



// // // function PropertyPreview({
// // //   open,
// // //   property,
// // //   onClose,
// // // }) {

// // //   const [selectedImage, setSelectedImage] = useState(0);

// // //   useEffect(() => {
// // //     setSelectedImage(0);
// // //   }, [property]);

// // //   if (!open || !property) return null;

// // //   const images =
// // //     property.images?.length
// // //       ? property.images
// // //       : [
// // //           {
// // //             url: "https://via.placeholder.com/1200x700",
// // //           },
// // //         ];

// // //   return (
// // //     <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm overflow-y-auto">

// // //       <div className="min-h-screen flex justify-center py-10 px-5">

// // //         <div className="bg-white rounded-[32px] w-full max-w-7xl shadow-2xl overflow-hidden">

// // //           {/* HEADER */}

// // //           <div className="sticky top-0 z-20 bg-white border-b px-8 py-5 flex items-center justify-between">

// // //             <div>

// // //               <h2 className="text-3xl font-bold text-gray-900">
// // //                 {property.title}
// // //               </h2>

// // //               <div className="flex items-center gap-2 mt-2 text-gray-500">

// // //                 <FiMapPin />

// // //                 <span>
// // //                   {property.address},{" "}
// // //                   {property.city}
// // //                 </span>

// // //               </div>

// // //             </div>

// // //             <div className="flex items-center gap-3">

// // //               <button className="w-11 h-11 rounded-full border hover:bg-gray-100">

// // //                 <FiHeart className="mx-auto"/>

// // //               </button>

// // //               <button className="w-11 h-11 rounded-full border hover:bg-gray-100">

// // //                 <FiShare2 className="mx-auto"/>

// // //               </button>

// // //               <button
// // //                 onClick={onClose}
// // //                 className="w-11 h-11 rounded-full bg-black text-white hover:bg-gray-800"
// // //               >

// // //                 <FiX className="mx-auto"/>

// // //               </button>

// // //             </div>

// // //           </div>

// // //           {/* HERO */}

// // //           <div className="grid lg:grid-cols-5 gap-8 p-8">

// // //             {/* LEFT */}

// // //             <div className="lg:col-span-3">

// // //               <div className="relative">

// // //                 <img
// // //                   src={images[selectedImage].url}
// // //                   className="w-full h-[520px] object-cover rounded-3xl"
// // //                 />

// // //                 <div className="absolute left-5 top-5">

// // //                   <span className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm flex items-center gap-2">

// // //                     <MdVerified />

// // //                     {property.status}

// // //                   </span>

// // //                 </div>

// // //                 <button
// // //                   onClick={() =>
// // //                     setSelectedImage((prev) =>
// // //                       prev === 0
// // //                         ? images.length - 1
// // //                         : prev - 1
// // //                     )
// // //                   }
// // //                   className="absolute left-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow"
// // //                 >

// // //                   <FiChevronLeft className="mx-auto"/>

// // //                 </button>

// // //                 <button
// // //                   onClick={() =>
// // //                     setSelectedImage((prev) =>
// // //                       prev === images.length - 1
// // //                         ? 0
// // //                         : prev + 1
// // //                     )
// // //                   }
// // //                   className="absolute right-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow"
// // //                 >

// // //                   <FiChevronRight className="mx-auto"/>

// // //                 </button>

// // //               </div>

// // //               {/* THUMBNAILS */}

// // //               <div className="flex gap-4 mt-5 overflow-x-auto pb-2">

// // //                 {images.map((img, index) => (

// // //                   <img
// // //                     key={index}
// // //                     src={img.url}
// // //                     onClick={() =>
// // //                       setSelectedImage(index)
// // //                     }
// // //                     className={`w-28 h-20 rounded-xl cursor-pointer object-cover border-4 transition

// // //                     ${
// // //                       selectedImage === index
// // //                         ? "border-emerald-600"
// // //                         : "border-transparent"
// // //                     }`}
// // //                   />

// // //                 ))}

// // //               </div>

// // //             </div>

// // //             {/* RIGHT */}

// // //             <div className="lg:col-span-2">

// // //               <div className="bg-gradient-to-br from-emerald-700 to-teal-900 rounded-3xl p-8 text-white">

// // //                 <p className="uppercase tracking-widest text-sm opacity-80">

// // //                   Premium Property

// // //                 </p>

// // //                 <h1 className="text-5xl font-bold mt-3">

// // //                   ₹ {Number(property.price).toLocaleString()}

// // //                 </h1>

// // //                 <p className="mt-2 text-white/80">

// // //                   ₹ {property.pricePerSqft} / Sq.Ft

// // //                 </p>

// // //                 <div className="mt-8 space-y-5">

// // //                   <div className="flex justify-between">

// // //                     <span>Property ID</span>

// // //                     <b>{property.propertyId}</b>

// // //                   </div>

// // //                   <div className="flex justify-between">

// // //                     <span>Category</span>

// // //                     <b>{property.category}</b>

// // //                   </div>

// // //                   <div className="flex justify-between">

// // //                     <span>Transaction</span>

// // //                     <b>{property.transactionType}</b>

// // //                   </div>

// // //                   <div className="flex justify-between">

// // //                     <span>Developer</span>

// // //                     <b>{property.developerName}</b>

// // //                   </div>

// // //                   <div className="flex justify-between">

// // //                     <span>Project</span>

// // //                     <b>{property.projectName}</b>

// // //                   </div>

// // //                 </div>

// // //                 <button className="mt-10 w-full py-4 rounded-2xl bg-white text-emerald-800 font-bold hover:bg-gray-100">

// // //                   Contact Sales Team

// // //                 </button>

// // //               </div>

// // //               <div className="mt-6 bg-gray-50 rounded-3xl p-6">

// // //                 <div className="flex items-center gap-3">

// // //                   <MdOutlinePhotoLibrary
// // //                     size={24}
// // //                     className="text-emerald-600"
// // //                   />

// // //                   <div>

// // //                     <p className="font-bold">

// // //                       {images.length} Property Images

// // //                     </p>

// // //                     <p className="text-gray-500 text-sm">

// // //                       High Resolution Gallery

// // //                     </p>

// // //                   </div>

// // //                 </div>

// // //               </div>

// // //             </div>

// // //           </div>

       


// // //       {/* ================= PROPERTY OVERVIEW ================= */}

// // // <div className="px-8 pb-10">

// // // <div className="grid xl:grid-cols-3 gap-8">

// // //   {/* LEFT */}

// // //   <div className="xl:col-span-2 space-y-8">

// // //     {/* Quick Stats */}

// // //     <div className="bg-white rounded-3xl border shadow-sm p-7">

// // //       <h2 className="text-2xl font-bold mb-6 text-gray-900">
// // //         Property Overview
// // //       </h2>

// // //       <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

// // //         <InfoCard
// // //           title="Bedrooms"
// // //           value={property.bedrooms || "-"}
// // //           icon="🛏"
// // //         />

// // //         <InfoCard
// // //           title="Bathrooms"
// // //           value={property.bathrooms || "-"}
// // //           icon="🚿"
// // //         />

// // //         <InfoCard
// // //           title="Balconies"
// // //           value={property.balconies || "-"}
// // //           icon="🌇"
// // //         />

// // //         <InfoCard
// // //           title="Parking"
// // //           value={property.parking || "-"}
// // //           icon="🚗"
// // //         />

// // //       </div>

// // //     </div>

// // //     {/* Property Details */}

// // //     <div className="bg-white rounded-3xl border shadow-sm p-7">

// // //       <h2 className="text-2xl font-bold mb-6">
// // //         Property Details
// // //       </h2>

// // //       <div className="grid md:grid-cols-2 gap-y-5 gap-x-10">

// // //         <DetailItem
// // //           label="Property ID"
// // //           value={property.propertyId}
// // //         />

// // //         <DetailItem
// // //           label="Category"
// // //           value={property.category}
// // //         />

// // //         <DetailItem
// // //           label="Transaction"
// // //           value={property.transactionType}
// // //         />

// // //         <DetailItem
// // //           label="Status"
// // //           value={property.status}
// // //         />

// // //         <DetailItem
// // //           label="Project"
// // //           value={property.projectName}
// // //         />

// // //         <DetailItem
// // //           label="Developer"
// // //           value={property.developerName}
// // //         />

// // //         <DetailItem
// // //           label="Facing"
// // //           value={property.facing}
// // //         />

// // //         <DetailItem
// // //           label="Furnishing"
// // //           value={property.furnishing}
// // //         />

// // //         <DetailItem
// // //           label="Floor"
// // //           value={property.floorNo}
// // //         />

// // //         <DetailItem
// // //           label="Total Floors"
// // //           value={property.totalFloors}
// // //         />

// // //       </div>

// // //     </div>

// // //     {/* Description */}

// // //     <div className="bg-white rounded-3xl border shadow-sm p-7">

// // //       <h2 className="text-2xl font-bold mb-5">
// // //         Property Description
// // //       </h2>

// // //       <p className="leading-8 text-gray-600">

// // //         {property.description ||

// // //           "No Description Added"}

// // //       </p>

// // //     </div>

// // //   </div>



// // //   {/* RIGHT */}

// // //   <div className="space-y-7">

// // //     {/* Pricing */}

// // //     <div className="bg-gradient-to-br from-emerald-600 to-teal-900 rounded-3xl p-6 text-white">

// // //       <h2 className="text-2xl font-bold">

// // //         Pricing

// // //       </h2>

// // //       <div className="space-y-5 mt-6">

// // //         <PriceRow
// // //           label="Property Price"
// // //           value={`₹ ${Number(property.price).toLocaleString()}`}
// // //         />

// // //         <PriceRow
// // //           label="Price / Sq.Ft"
// // //           value={`₹ ${property.pricePerSqft}`}
// // //         />

// // //         <PriceRow
// // //           label="Maintenance"
// // //           value={`₹ ${property.maintenance || 0}`}
// // //         />

// // //         <PriceRow
// // //           label="Booking Amount"
// // //           value={`₹ ${property.bookingAmount || 0}`}
// // //         />

// // //         <PriceRow
// // //           label="Negotiable"
// // //           value={property.negotiable ? "Yes" : "No"}
// // //         />

// // //       </div>

// // //     </div>

// // //     {/* Area */}

// // //     <div className="bg-white rounded-3xl border shadow-sm p-6">

// // //       <h2 className="text-xl font-bold mb-5">

// // //         Area Details

// // //       </h2>

// // //       <PriceRow
// // //         label="Super Built-up"
// // //         value={`${property.superBuiltupArea} Sq.Ft`}
// // //       />

// // //       <PriceRow
// // //         label="Carpet Area"
// // //         value={`${property.carpetArea} Sq.Ft`}
// // //       />

// // //     </div>

// // //   </div>

// // // </div>

// // // </div>

// // // {/* ================= LOCATION ================= */}

// // // <div className="px-8 pb-10">

// // //   <div className="bg-white rounded-3xl border shadow-sm p-7">

// // //     <h2 className="text-2xl font-bold mb-6">
// // //       Property Location
// // //     </h2>

// // //     <div className="grid lg:grid-cols-2 gap-8">

// // //       {/* Left */}

// // //       <div className="space-y-5">

// // //         <DetailItem
// // //           label="Address"
// // //           value={property.address}
// // //         />

// // //         <DetailItem
// // //           label="City"
// // //           value={property.city}
// // //         />

// // //         <DetailItem
// // //           label="Locality"
// // //           value={property.locality}
// // //         />

// // //         <DetailItem
// // //           label="Pincode"
// // //           value={property.pinCode}
// // //         />

// // //         <DetailItem
// // //           label="Latitude"
// // //           value={property.latitude}
// // //         />

// // //         <DetailItem
// // //           label="Longitude"
// // //           value={property.longitude}
// // //         />

// // //       </div>

// // //       {/* Map */}

// // //       <div>

// // //         {property.latitude && property.longitude ? (

// // //           <iframe
// // //             title="map"
// // //             width="100%"
// // //             height="350"
// // //             className="rounded-3xl border"
// // //             loading="lazy"
// // //             src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
// // //           />

// // //         ) : (

// // //           <div className="h-[350px] rounded-3xl bg-gray-100 flex items-center justify-center">

// // //             No Location Available

// // //           </div>

// // //         )}

// // //       </div>

// // //     </div>

// // //   </div>

// // // </div>

// // // {/* ================= Amenities ================= */}

// // // <div className="px-8 pb-10">

// // // <div className="bg-white rounded-3xl border shadow-sm p-7">

// // // <h2 className="text-2xl font-bold mb-6">

// // // Amenities

// // // </h2>

// // // <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">

// // // {property.amenities?.length ?

// // // property.amenities.map((item,index)=>(

// // // <div
// // // key={index}
// // // className="rounded-2xl border p-5 bg-gray-50 hover:shadow-md transition"
// // // >

// // // <div className="text-3xl">

// // // ✨

// // // </div>

// // // <p className="mt-3 font-semibold">

// // // {item}

// // // </p>

// // // </div>

// // // ))

// // // :

// // // <div>No Amenities Added</div>

// // // }

// // // </div>

// // // </div>

// // // </div>



// // // {/* Documents */}

// // // <div className="px-8 pb-10">

// // // <div className="bg-white rounded-3xl border shadow-sm p-7">

// // // <h2 className="text-2xl font-bold mb-6">

// // // Documents

// // // </h2>

// // // <div className="flex flex-wrap gap-4">

// // // {property.floorPlan && (

// // // <a
// // // href={property.floorPlan}
// // // target="_blank"
// // // className="bg-emerald-600 text-white px-6 py-3 rounded-xl"
// // // >

// // // Floor Plan

// // // </a>

// // // )}

// // // {property.reraCertificate && (

// // // <a
// // // href={property.reraCertificate}
// // // target="_blank"
// // // className="bg-blue-600 text-white px-6 py-3 rounded-xl"
// // // >

// // // RERA Certificate

// // // </a>

// // // )}

// // // </div>

// // // </div>

// // // </div>

// // // {property.videoLink && (

// // // <div className="px-8 pb-10">

// // // <div className="bg-white rounded-3xl border shadow-sm p-7">

// // // <h2 className="text-2xl font-bold mb-6">

// // // Property Walkthrough

// // // </h2>

// // // <video
// // // controls
// // // className="rounded-3xl w-full"
// // // src={property.videoLink}
// // // />

// // // </div>

// // // </div>

// // // )}


// // // {property.tags?.length > 0 && (

// // // <div className="px-8 pb-10">

// // // <div className="bg-white rounded-3xl border shadow-sm p-7">

// // // <h2 className="text-2xl font-bold mb-6">

// // // Intelligence Tags

// // // </h2>

// // // <div className="flex flex-wrap gap-3">

// // // {property.tags.map((tag,index)=>(

// // // <span
// // // key={index}
// // // className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full"
// // // >

// // // #{tag}

// // // </span>

// // // ))}

// // // </div>

// // // </div>

// // // </div>

// // // )}

// // // <div className="border-t bg-gray-50 px-8 py-6 flex justify-end gap-4">

// // // <button
// // // onClick={onClose}
// // // className="px-7 py-3 rounded-2xl border"
// // // >

// // // Close

// // // </button>


// // // </div>



// // //     </div>

// // //     </div>
// // //     </div>

    
// // //   );
// // // }
// // // function InfoCard({ title, value, icon }) {
// // //   return (
// // //     <div className="rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-lg transition-all p-5">
// // //       <div className="text-3xl">
// // //         {icon}
// // //       </div>

// // //       <p className="text-sm text-gray-500 mt-3">
// // //         {title}
// // //       </p>

// // //       <h3 className="text-2xl font-bold mt-1">
// // //         {value || "-"}
// // //       </h3>
// // //     </div>
// // //   );
// // // }

// // // function DetailItem({ label, value }) {

// // //   return (

// // //     <div className="flex justify-between border-b pb-3">

// // //       <span className="text-gray-500">

// // //         {label}

// // //       </span>

// // //       <span className="font-semibold text-gray-900">

// // //         {value || "-"}

// // //       </span>

// // //     </div>

// // //   );

// // // }


// // // function PriceRow({ label, value }) {

// // //   return (

// // //     <div className="flex justify-between">

// // //       <span className="text-white/70">

// // //         {label}

// // //       </span>

// // //       <span className="font-bold">

// // //         {value}

// // //       </span>

// // //     </div>

// // //   );

// // // }

// // import { useEffect, useState } from "react";
// // import {
// //   getAllPropertiesApi,
// //   getPropertyByIdApi,
// //   deletePropertyApi,
// //   updatePropertyApi,
// //   updatePropertyStatusApi,
// // } from "../../Services/propertyService";
// // import { FiFilter, FiUpload, FiEye, FiEdit2, FiChevronDown, FiChevronUp, FiInfo, FiTrash2 } from "react-icons/fi"; // FiTrash2 add kiya yahan
// // import { MdOutlineCheckCircle, MdOutlineAutoAwesome, MdTrendingUp } from "react-icons/md";
// // import { BsRobot } from "react-icons/bs";
// // import Swal from "sweetalert2";


// // import {
// //   FiX,
// //   FiMapPin,
// //   FiHeart,
// //   FiShare2,
// //   FiChevronLeft,
// //   FiChevronRight,
// // } from "react-icons/fi";

// // import {
// //   MdVerified,
// //   MdOutlinePhotoLibrary,
// // } from "react-icons/md";

// // const DARK = "#0d2d2a";

// // function StatusBadge({ status }) {
// //   const styles = {
// //     Draft: "bg-gray-50 text-gray-600 border-gray-200",
// //     Submitted: "bg-blue-50 text-blue-600 border-blue-200",
// //     Assigned_To_Partner: "bg-teal-50 text-teal-700 border-teal-200",
// //     Reviewing: "bg-amber-50 text-amber-700 border-amber-200",
// //     Verified: "bg-emerald-50 text-emerald-700 border-emerald-200",
// //     Live: "bg-green-50 text-green-700 border-green-200",
// //     Rejected: "bg-red-50 text-red-600 border-red-200",
// //     Sold: "bg-purple-50 text-purple-700 border-purple-200",
// //     Rented: "bg-indigo-50 text-indigo-700 border-indigo-200",
// //   };

// //   return (
// //     <span
// //       className={`inline-flex text-[10px] font-bold px-3 py-1.5 rounded-full border ${
// //         styles[status] || styles.Draft
// //       }`}
// //     >
// //       {String(status || "Draft").replaceAll("_", " ")}
// //     </span>
// //   );
// // }

// // function AIAssistant({ open, onClose }) {
// //   if (!open) return null;
// //   return (
// //     <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
// //       <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "#f0faf8" }}>
// //         <div className="flex items-center gap-2.5">
// //           <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: DARK }}>
// //             <BsRobot size={16} />
// //           </div>
// //           <span className="text-sm font-bold" style={{ color: DARK }}>AI Property Assistant</span>
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <FiChevronDown size={16} className="text-gray-500" />
// //           <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
// //             <FiX size={15} className="text-gray-500" />
// //           </button>
// //         </div>
// //       </div>

// //       <div className="px-4 py-4">
// //         <p className="text-xs text-gray-500 italic mb-4">Select a property from the table to unlock AI workflows.</p>

// //         <button className="w-full flex items-center justify-between text-sm font-semibold text-white px-4 py-3 rounded-xl mb-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#10b981" }}>
// //           Generate Description
// //           <MdOutlineAutoAwesome size={16} className="text-white" />
// //         </button>

// //         <button className="w-full flex items-center justify-between text-sm font-semibold px-4 py-3 rounded-xl border-2 mb-4 hover:bg-teal-50 transition-colors" style={{ borderColor: "#10b981", color: "#10b981", backgroundColor: "white" }}>
// //           Suggest Price
// //           <MdTrendingUp size={16} />
// //         </button>

// //         <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-start gap-2.5">
// //           <FiInfo size={15} className="text-gray-400 flex-shrink-0 mt-0.5" />
// //           <p className="text-xs text-gray-600 leading-relaxed">
// //             DIGINIWAS AI analyzed <span className="font-bold text-gray-900">market volatility</span>. Recommendation: Increase lead capture requirements for premium estates.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function PropertyManagement() {
// //   const [chatOpen, setChatOpen] = useState(false);
// //   const [properties, setProperties] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [previewOpen, setPreviewOpen] = useState(false);
// //   const [selectedProperty, setSelectedProperty] = useState(null);
// //   const [editOpen, setEditOpen] = useState(false);
// //   const [editingProperty, setEditingProperty] = useState(null);

// //   // =========================================================
// //   // FILTER STATES
// //   // =========================================================
// //   const [selectedRole, setSelectedRole] = useState("All");
// //   const [selectedStatus, setSelectedStatus] = useState("All");
// //   const [selectedCity, setSelectedCity] = useState("All");
// //   const [search, setSearch] = useState("");

// //   const [counts, setCounts] = useState({
// //     all: 0,
// //     admin: 0,
// //     partner: 0,
// //     seller: 0,
// //   });

// //   const [filterOpen, setFilterOpen] = useState(false);

// //   const statusOptions = [
// //     "All",
// //     "Submitted",
// //     "Assigned_To_Partner",
// //     "Reviewing",
// //     "Verified",
// //     "Live",
// //     "Rejected",
// //     "Sold",
// //     "Rented",
// //   ];

// //   // =========================================================
// //   // GET ALL PROPERTY API
// //   //
// //   // Backend route:
// //   // GET /api/newproperties/all
// //   //
// //   // Filters:
// //   // ?role=Admin
// //   // ?role=Partner
// //   // ?role=Seller
// //   // ?status=Live
// //   // ?city=Indore
// //   // ?search=DW-1001
// //   // =========================================================
// //   const getProperties = async () => {
// //     try {
// //       setLoading(true);

// //       const params = {};

// //       if (selectedRole !== "All") {
// //         params.role = selectedRole;
// //       }

// //       if (selectedStatus !== "All") {
// //         params.status = selectedStatus;
// //       }

// //       if (selectedCity !== "All") {
// //         params.city = selectedCity;
// //       }

// //       if (search.trim()) {
// //         params.search = search.trim();
// //       }

// //       const response = await getAllPropertiesApi({
// //         role:
// //           selectedRole === "All"
// //             ? ""
// //             : selectedRole,

// //         status:
// //           selectedStatus === "All"
// //             ? ""
// //             : selectedStatus,

// //         city:
// //           selectedCity === "All"
// //             ? ""
// //             : selectedCity,

// //         search:
// //           search.trim(),
// //       });

// //       console.log(
// //         "GET ALL PROPERTIES RESPONSE:",
// //         response
// //       );

// //       if (response?.success) {
// //         const apiProperties = Array.isArray(response?.data)
// //           ? response.data
// //           : [];

// //         // Draft properties should never appear in admin Property Management.
// //         const visibleProperties = apiProperties.filter(
// //           (item) =>
// //             String(item?.status || "")
// //               .trim()
// //               .toLowerCase() !== "draft"
// //         );

// //         setProperties(visibleProperties);

// //         setCounts({
// //           all:
// //             response?.counts?.all || 0,

// //           admin:
// //             response?.counts?.admin || 0,

// //           partner:
// //             response?.counts?.partner || 0,

// //           seller:
// //             response?.counts?.seller || 0,
// //         });
// //       } else {
// //         setProperties([]);
// //       }
// //     } catch (err) {
// //       console.error(
// //         "GET PROPERTIES ERROR:",
// //         err?.response?.data || err
// //       );

// //       setProperties([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // =========================================================
// //   // API CALL ON FILTER CHANGE
// //   // =========================================================
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       getProperties();
// //     }, 300);

// //     return () => clearTimeout(timer);
// //   }, [
// //     selectedRole,
// //     selectedStatus,
// //     selectedCity,
// //     search,
// //   ]);

// //   // =========================================================
// //   // CITY OPTIONS FROM CURRENT DATA
// //   // =========================================================
// //   const cityOptions = [
// //     "All",
// //     ...Array.from(
// //       new Set(
// //         properties
// //           .map((item) => item?.city)
// //           .filter(Boolean)
// //       )
// //     ).sort(),
// //   ];

// //   // =========================================================
// //   // DELETE PROPERTY
// //   // NOTE:
// //   // Isko tabhi use karo jab backend me
// //   // DELETE /api/newproperties/:id route available ho.
// //   // =========================================================
// //   const handleDeleteProperty = async (id) => {
// //     const property = properties.find((item) => item?._id === id);

// //     const result = await Swal.fire({
// //       icon: "warning",
// //       title: "Delete Property?",
// //       html: `
// //         <div style="font-size:13px;color:#64748b;line-height:1.6">
// //           Are you sure you want to delete
// //           <strong style="color:#0d2d2a">${property?.title || "this property"}</strong>
// //           ${property?.propertyId ? `(${property.propertyId})` : ""}?
// //           <br/>
// //           <span style="color:#dc2626;font-weight:600">
// //             This action cannot be undone.
// //           </span>
// //         </div>
// //       `,
// //       showCancelButton: true,
// //       confirmButtonText: "Yes, Delete",
// //       cancelButtonText: "Cancel",
// //       confirmButtonColor: "#dc2626",
// //       cancelButtonColor: "#64748b",
// //       reverseButtons: true,
// //     });

// //     if (!result.isConfirmed) return;

// //     try {
// //       const response = await deletePropertyApi(id);

// //       if (response?.success) {
// //         await Swal.fire({
// //           icon: "success",
// //           title: "Property Deleted",
// //           text: response?.message || "Property deleted successfully.",
// //           confirmButtonColor: DARK,
// //         });

// //         await getProperties();
// //       }
// //     } catch (err) {
// //       await Swal.fire({
// //         icon: "error",
// //         title: "Delete Failed",
// //         text:
// //           err?.response?.data?.message ||
// //           "Property delete karne me dikkat aayi.",
// //         confirmButtonColor: DARK,
// //       });
// //     }
// //   };

// //   const handleVerifyProperty = async (property) => {
// //     if (property?.status === "Verified") {
// //       await Swal.fire({
// //         icon: "info",
// //         title: "Already Verified",
// //         text: "This property is already verified.",
// //         confirmButtonColor: DARK,
// //       });
// //       return;
// //     }

// //     const result = await Swal.fire({
// //       icon: "question",
// //       title: "Verify Property?",
// //       html: `
// //         <div style="font-size:13px;color:#64748b;line-height:1.6">
// //           Verify
// //           <strong style="color:#0d2d2a">${property?.title || "this property"}</strong>
// //           ${property?.propertyId ? `(${property.propertyId})` : ""}?
// //           <br/>
// //           Status will be changed to <strong style="color:#059669">Verified</strong>.
// //         </div>
// //       `,
// //       showCancelButton: true,
// //       confirmButtonText: "Yes, Verify",
// //       cancelButtonText: "Cancel",
// //       confirmButtonColor: "#059669",
// //       cancelButtonColor: "#64748b",
// //       reverseButtons: true,
// //     });

// //     if (!result.isConfirmed) return;

// //     try {
// //       const response = await updatePropertyStatusApi(property._id, {
// //         status: "Verified",
// //         notes: "Property verified by admin from Property Management.",
// //       });

// //       if (response?.success) {
// //         await Swal.fire({
// //           icon: "success",
// //           title: "Property Verified",
// //           text: response?.message || "Property verified successfully.",
// //           confirmButtonColor: "#059669",
// //         });

// //         await getProperties();
// //       }
// //     } catch (err) {
// //       await Swal.fire({
// //         icon: "error",
// //         title: "Verification Failed",
// //         text:
// //           err?.response?.data?.message ||
// //           "Unable to verify property.",
// //         confirmButtonColor: DARK,
// //       });
// //     }
// //   };

// //   const handleOpenEdit = async (property) => {
// //     try {
// //       const response = await getPropertyByIdApi(property._id);
// //       setEditingProperty(response?.data || property);
// //     } catch (error) {
// //       setEditingProperty(property);
// //     }

// //     setEditOpen(true);
// //   };

// //   const handlePropertyUpdated = async () => {
// //     setEditOpen(false);
// //     setEditingProperty(null);
// //     await getProperties();
// //   };

// //   // =========================================================
// //   // CLEAR FILTERS
// //   // =========================================================
// //   const clearFilters = () => {
// //     setSelectedRole("All");
// //     setSelectedStatus("All");
// //     setSelectedCity("All");
// //     setSearch("");
// //   };

// //   const roleTabs = [
// //     {
// //       label: "All",
// //       count: counts.all,
// //     },
// //     {
// //       label: "Admin",
// //       count: counts.admin,
// //     },
// //     {
// //       label: "Partner",
// //       count: counts.partner,
// //     },
// //     {
// //       label: "Seller",
// //       count: counts.seller,
// //     },
// //   ];

// //   return (
// //     // <div className="min-h-screen bg-gray-50 font-sans relative">
// //     <div className="h-screen overflow-hidden bg-gray-50 font-sans relative">
// //       <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-6">

// //         {/* =====================================================
// //             HEADER
// //         ===================================================== */}
// //         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
// //           <div>
// //             <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
// //               Portfolio /{" "}
// //               <span className="text-gray-700">
// //                 Properties
// //               </span>
// //             </p>

// //             <h1
// //               className="text-3xl sm:text-4xl font-bold mb-1"
// //               style={{
// //                 color: DARK,
// //                 fontFamily: "Georgia, serif",
// //               }}
// //             >
// //               Property Management
// //             </h1>

// //             <p className="text-sm text-gray-500">
// //               Manage properties added by Admin, Partner and Seller.
// //             </p>
// //           </div>

// //           <div className="flex items-center gap-3 self-start mt-1">
// //             <button
// //               type="button"
// //               onClick={() => setFilterOpen((prev) => !prev)}
// //               className={`flex items-center gap-2 text-sm font-semibold border rounded-xl px-4 py-2.5 transition-colors ${
// //                 filterOpen
// //                   ? "bg-[#0d2d2a] text-white border-[#0d2d2a]"
// //                   : "text-gray-700 border-gray-300 bg-white hover:bg-gray-50"
// //               }`}
// //             >
// //               <FiFilter size={15} />
// //               Filter
// //               {filterOpen ? (
// //                 <FiChevronUp size={14} />
// //               ) : (
// //                 <FiChevronDown size={14} />
// //               )}
// //             </button>

// //             <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-xl px-4 py-2.5 bg-white hover:bg-gray-50 transition-colors">
// //               <FiUpload size={15} />
// //               Export
// //             </button>
// //           </div>
// //         </div>

// //         {/* =====================================================
// //             ROLE TABS
// //         ===================================================== */}
// //         <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 mb-4">
// //           <div className="flex flex-wrap gap-2">
// //             {roleTabs.map((item) => {
// //               const active =
// //                 selectedRole === item.label;

// //               return (
// //                 <button
// //                   key={item.label}
// //                   type="button"
// //                   onClick={() =>
// //                     setSelectedRole(item.label)
// //                   }
// //                   className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
// //                     active
// //                       ? "bg-[#0d2d2a] text-white shadow-md"
// //                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                   }`}
// //                 >
// //                   {item.label}

// //                   <span
// //                     className={`rounded-full px-2 py-0.5 text-xs ${
// //                       active
// //                         ? "bg-white/20 text-white"
// //                         : "bg-white text-gray-500"
// //                     }`}
// //                   >
// //                     {item.count}
// //                   </span>
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* =====================================================
// //             SEARCH + ADVANCED FILTERS
// //         ===================================================== */}
// //         <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 mb-5">
// //           <div className="flex flex-col lg:flex-row gap-3">

// //             <div className="flex-1">
// //               <input
// //                 type="text"
// //                 value={search}
// //                 onChange={(e) =>
// //                   setSearch(e.target.value)
// //                 }
// //                 placeholder="Search by Property ID, title, city, locality, creator..."
// //                 className="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none focus:border-teal-500 focus:bg-white"
// //               />
// //             </div>

// //             {filterOpen && (
// //               <>
// //                 <div className="w-full lg:w-[190px]">
// //                   <select
// //                     value={selectedStatus}
// //                     onChange={(e) =>
// //                       setSelectedStatus(
// //                         e.target.value
// //                       )
// //                     }
// //                     className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none focus:border-teal-500"
// //                   >
// //                     {statusOptions.map((item) => (
// //                       <option
// //                         key={item}
// //                         value={item}
// //                       >
// //                         {item === "All"
// //                           ? "All Status"
// //                           : item.replaceAll("_", " ")}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 <div className="w-full lg:w-[180px]">
// //                   <select
// //                     value={selectedCity}
// //                     onChange={(e) =>
// //                       setSelectedCity(
// //                         e.target.value
// //                       )
// //                     }
// //                     className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none focus:border-teal-500"
// //                   >
// //                     {cityOptions.map((item) => (
// //                       <option
// //                         key={item}
// //                         value={item}
// //                       >
// //                         {item === "All"
// //                           ? "All Cities"
// //                           : item}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 <button
// //                   type="button"
// //                   onClick={clearFilters}
// //                   className="h-11 px-4 rounded-xl border border-gray-300 text-sm font-semibold text-gray-600 hover:bg-gray-50"
// //                 >
// //                   Clear
// //                 </button>
// //               </>
// //             )}
// //           </div>
// //         </div>

// //         {/* =====================================================
// //             ACTIVE FILTER INFO
// //         ===================================================== */}
// //         <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-gray-500">
// //           <span className="font-semibold text-gray-700">
// //             Showing:
// //           </span>

// //           <span className="rounded-full bg-teal-50 text-teal-700 px-3 py-1 font-semibold">
// //             {selectedRole === "All"
// //               ? "All Creators"
// //               : `${selectedRole} Added`}
// //           </span>

// //           {selectedStatus !== "All" && (
// //             <span className="rounded-full bg-amber-50 text-amber-700 px-3 py-1 font-semibold">
// //               {selectedStatus.replaceAll(
// //                 "_",
// //                 " "
// //               )}
// //             </span>
// //           )}

// //           {selectedCity !== "All" && (
// //             <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 font-semibold">
// //               {selectedCity}
// //             </span>
// //           )}
// //         </div>

// //         {/* =====================================================
// //             TABLE
// //         ===================================================== */}
// //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //           {/* <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// //             <table className="w-full min-w-[1050px]"> */}
// //             <div className="w-full overflow-hidden">
// //   <table className="w-full table-fixed">
// //               <thead>
// //                 <tr className="border-b border-gray-100 bg-gray-50/80">
// //                   {[
// //                     "Property",
// //                     "Added By",
// //                     "Location",
// //                     "Status",
// //                     "Market Price",
// //                     "Assigned Partner",
// //                     "Actions",
// //                   ].map((h) => (
// //                     <th
// //                       key={h}
// //                       className="text-left text-[10px] font-bold tracking-widest text-gray-400 uppercase px-5 py-4 whitespace-nowrap"
// //                     >
// //                       {h}
// //                     </th>
// //                   ))}
// //                 </tr>
// //               </thead>

// //               <tbody>
// //                 {loading ? (
// //                   <tr>
// //                     <td
// //                       colSpan={7}
// //                       className="py-16 text-center text-sm text-gray-400"
// //                     >
// //                       Loading properties...
// //                     </td>
// //                   </tr>
// //                 ) : properties.length === 0 ? (
// //                   <tr>
// //                     <td
// //                       colSpan={7}
// //                       className="py-16 text-center"
// //                     >
// //                       <p className="text-base font-semibold text-gray-600">
// //                         No Property Found
// //                       </p>

// //                       <p className="text-xs text-gray-400 mt-1">
// //                         Try changing your creator or property filters.
// //                       </p>
// //                     </td>
// //                   </tr>
// //                 ) : (
// //                   properties.map((p, i) => {
// //                     const creator =
// //                       p?.addedBy || {};

// //                     const assignedPartner =
// //                       p?.assignedPartner || {};

// //                     const imageUrl =
// //                       p?.images?.[0]?.url ||
// //                       "https://via.placeholder.com/120";

// //                     return (
// //                       <tr
// //                         key={p._id || p.id}
// //                         className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${
// //                           i === properties.length - 1
// //                             ? "border-0"
// //                             : ""
// //                         }`}
// //                       >
// //                         {/* PROPERTY */}
// //                         <td className="px-5 py-4">
// //                           <div className="flex items-center gap-3">
// //                             <img
// //                               src={imageUrl}
// //                               alt={p.title}
// //                               className="w-12 h-12 rounded-xl object-cover shrink-0 bg-gray-100"
// //                             />

// //                             <div className="min-w-0">
// //                               <p className="text-sm font-bold text-gray-900 truncate max-w-[220px]">
// //                                 {p.title || "-"}
// //                               </p>

// //                               <p className="text-xs text-teal-600 font-semibold mt-0.5">
// //                                 {p.propertyId || "-"}
// //                               </p>

// //                               <p className="text-[10px] text-gray-400 mt-0.5">
// //                                 {p.category || "-"} •{" "}
// //                                 {p.transactionType || "-"}
// //                               </p>
// //                             </div>
// //                           </div>
// //                         </td>

// //                         {/* ADDED BY */}
// //                         <td className="px-5 py-4">
// //                           <div>
// //                             <p className="text-sm font-semibold text-gray-800">
// //                               {creator?.name || "-"}
// //                             </p>

// //                             <span
// //                               className={`inline-flex mt-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
// //                                 creator?.role === "Admin"
// //                                   ? "bg-blue-50 text-blue-600"
// //                                   : creator?.role === "Partner"
// //                                   ? "bg-teal-50 text-teal-600"
// //                                   : "bg-orange-50 text-orange-600"
// //                               }`}
// //                             >
// //                               {creator?.role || "-"}
// //                             </span>

// //                             {creator?.sellerId && (
// //                               <p className="text-[10px] text-gray-400 mt-1">
// //                                 {creator.sellerId}
// //                               </p>
// //                             )}

// //                             {creator?.partnerId && (
// //                               <p className="text-[10px] text-gray-400 mt-1">
// //                                 {creator.partnerId}
// //                               </p>
// //                             )}
// //                           </div>
// //                         </td>

// //                         {/* LOCATION */}
// //                         <td className="px-5 py-4">
// //                           <div className="flex items-start gap-2">
// //                             <FiMapPin
// //                               size={14}
// //                               className="text-gray-400 mt-0.5 shrink-0"
// //                             />

// //                             <div>
// //                               <p className="text-sm text-gray-700 font-medium">
// //                                 {p.locality || "-"}
// //                               </p>

// //                               <p className="text-xs text-gray-400">
// //                                 {[p.city, p.pinCode]
// //                                   .filter(Boolean)
// //                                   .join(" - ")}
// //                               </p>
// //                             </div>
// //                           </div>
// //                         </td>

// //                         {/* STATUS */}
// //                         <td className="px-5 py-4">
// //                           <StatusBadge
// //                             status={p.status}
// //                           />
// //                         </td>

// //                         {/* PRICE */}
// //                         <td className="px-5 py-4 whitespace-nowrap">
// //                           <p className="text-sm font-bold text-gray-900">
// //                             ₹{" "}
// //                             {Number(
// //                               p.price || 0
// //                             ).toLocaleString(
// //                               "en-IN"
// //                             )}
// //                           </p>

// //                           <p className="text-[10px] text-gray-400 mt-1">
// //                             {p.propertySize || "-"}{" "}
// //                             {p.sizeUnit || ""}
// //                           </p>
// //                         </td>

// //                         {/* ASSIGNED PARTNER */}
// //                         <td className="px-5 py-4">
// //                           {assignedPartner?.partnerId ? (
// //                             <div>
// //                               <p className="text-sm font-semibold text-gray-800">
// //                                 {assignedPartner?.name ||
// //                                   assignedPartner
// //                                     ?.partnerId
// //                                     ?.name ||
// //                                   "-"}
// //                               </p>

// //                               <p className="text-[10px] text-teal-600 font-semibold mt-1">
// //                                 {assignedPartner?.partnerCode ||
// //                                   assignedPartner
// //                                     ?.partnerId
// //                                     ?.partnerId ||
// //                                   "-"}
// //                               </p>

// //                               <p className="text-[10px] text-gray-400 capitalize mt-1">
// //                                 {assignedPartner?.partnerType ||
// //                                   assignedPartner
// //                                     ?.partnerId
// //                                     ?.partnerType ||
// //                                   ""}
// //                               </p>
// //                             </div>
// //                           ) : (
// //                             <span className="inline-flex rounded-full bg-orange-50 text-orange-600 px-2.5 py-1.5 text-[10px] font-semibold">
// //                               Not Assigned
// //                             </span>
// //                           )}
// //                         </td>

// //                         {/* ACTIONS */}
// //                         <td className="px-5 py-4">
// //                           <div className="flex items-center gap-2">
// //                             <button
// //                               type="button"
// //                               onClick={async () => {
// //                                 try {
// //                                   const response =
// //                                     await getPropertyByIdApi(
// //                                       p._id
// //                                     );

// //                                   setSelectedProperty(
// //                                     response?.data || p
// //                                   );

// //                                   setPreviewOpen(true);
// //                                 } catch (error) {
// //                                   console.error(
// //                                     "GET PROPERTY DETAIL ERROR:",
// //                                     error?.response?.data ||
// //                                       error
// //                                   );

// //                                   setSelectedProperty(p);
// //                                   setPreviewOpen(true);
// //                                 }
// //                               }}
// //                               className="w-8 h-8 flex items-center justify-center hover:bg-teal-50 rounded-lg transition-colors"
// //                               title="View Property"
// //                             >
// //                               <FiEye
// //                                 size={17}
// //                                 className="text-teal-600"
// //                               />
// //                             </button>

// //                             <button
// //                               type="button"
// //                               onClick={() => handleOpenEdit(p)}
// //                               className="w-8 h-8 flex items-center justify-center hover:bg-blue-50 rounded-lg transition-colors"
// //                               title="Edit Property"
// //                             >
// //                               <FiEdit2
// //                                 size={15}
// //                                 className="text-blue-500"
// //                               />
// //                             </button>

// //                             <button
// //                               type="button"
// //                               onClick={() => handleVerifyProperty(p)}
// //                               disabled={p?.status === "Verified"}
// //                               className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
// //                                 p?.status === "Verified"
// //                                   ? "cursor-not-allowed bg-emerald-50 opacity-50"
// //                                   : "hover:bg-emerald-50"
// //                               }`}
// //                               title={p?.status === "Verified" ? "Already Verified" : "Verify Property"}
// //                             >
// //                               <MdOutlineCheckCircle
// //                                 size={19}
// //                                 className="text-emerald-500"
// //                               />
// //                             </button>

// //                             <button
// //                               type="button"
// //                               onClick={() =>
// //                                 handleDeleteProperty(
// //                                   p._id
// //                                 )
// //                               }
// //                               className="w-8 h-8 flex items-center justify-center hover:bg-red-50 rounded-lg transition-colors"
// //                               title="Delete Property"
// //                             >
// //                               <FiTrash2
// //                                 size={16}
// //                                 className="text-red-500"
// //                               />
// //                             </button>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     );
// //                   })
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* FOOTER */}
// //           <div className="px-5 py-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
// //             <p className="text-sm font-semibold text-gray-500">
// //               Showing {properties.length} Properties
// //             </p>

// //             <p className="text-xs text-gray-400">
// //               Total: {counts.all} • Admin:{" "}
// //               {counts.admin} • Partner:{" "}
// //               {counts.partner} • Seller:{" "}
// //               {counts.seller}
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       <AIAssistant
// //         open={chatOpen}
// //         onClose={() =>
// //           setChatOpen(false)
// //         }
// //       />

// //       <EditPropertyModal
// //         open={editOpen}
// //         property={editingProperty}
// //         onClose={() => {
// //           setEditOpen(false);
// //           setEditingProperty(null);
// //         }}
// //         onUpdated={handlePropertyUpdated}
// //       />

// //       <PropertyPreview
// //         open={previewOpen}
// //         property={selectedProperty}
// //         onClose={() =>
// //           setPreviewOpen(false)
// //         }
// //       />

// //       <button
// //         onClick={() =>
// //           setChatOpen((v) => !v)
// //         }
// //         className="fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity"
// //         style={{
// //           backgroundColor: DARK,
// //         }}
// //       >
// //         {chatOpen ? (
// //           <FiX size={22} />
// //         ) : (
// //           <BsRobot size={22} />
// //         )}
// //       </button>
// //     </div>
// //   );
// // }



// // function EditPropertyModal({
// //   open,
// //   property,
// //   onClose,
// //   onUpdated,
// // }) {
// //   const [form, setForm] = useState({});
// //   const [existingImages, setExistingImages] = useState([]);
// //   const [newImages, setNewImages] = useState([]);
// //   const [floorPlan, setFloorPlan] = useState(null);
// //   const [reraCertificate, setReraCertificate] = useState(null);
// //   const [video, setVideo] = useState(null);
// //   const [saving, setSaving] = useState(false);

// //   useEffect(() => {
// //     if (!property) return;

// //     setForm({
// //       title: property.title || "",
// //       transactionType: property.transactionType || "Sale",
// //       category: property.category || "Residential",
// //       propertySize: property.propertySize || "",
// //       sizeUnit: property.sizeUnit || "sqft",
// //       price: property.price || "",
// //       projectName: property.projectName || "",
// //       developerName: property.developerName || "",
// //       description: property.description || "",
// //       city: property.city || "",
// //       locality: property.locality || "",
// //       pinCode: property.pinCode || "",
// //       address: property.address || "",
// //       latitude: property.latitude ?? "",
// //       longitude: property.longitude ?? "",
// //       maintenance: property.maintenance ?? "",
// //       bookingAmount: property.bookingAmount ?? "",
// //       negotiable: Boolean(property.negotiable),
// //       superBuiltupArea: property.superBuiltupArea ?? "",
// //       carpetArea: property.carpetArea ?? "",
// //       bedrooms: property.bedrooms || "",
// //       bathrooms: property.bathrooms || "",
// //       balconies: property.balconies || "",
// //       parking: property.parking || "",
// //       floorNo: property.floorNo ?? "",
// //       totalFloors: property.totalFloors ?? "",
// //       facing: property.facing || "",
// //       furnishing: property.furnishing || "",
// //       amenities: Array.isArray(property.amenities) ? property.amenities.join(", ") : "",
// //       tags: Array.isArray(property.tags) ? property.tags.join(", ") : "",
// //     });

// //     setExistingImages(property.images || []);
// //     setNewImages([]);
// //     setFloorPlan(null);
// //     setReraCertificate(null);
// //     setVideo(null);
// //   }, [property]);

// //   if (!open || !property) return null;

// //   const setField = (name, value) => {
// //     setForm((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const removeExistingImage = (index) => {
// //     setExistingImages((prev) =>
// //       prev.filter((_, imageIndex) => imageIndex !== index)
// //     );
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const confirm = await Swal.fire({
// //       icon: "question",
// //       title: "Update Property?",
// //       text: "Property details, images and documents will be updated.",
// //       showCancelButton: true,
// //       confirmButtonText: "Yes, Update",
// //       cancelButtonText: "Cancel",
// //       confirmButtonColor: DARK,
// //       cancelButtonColor: "#64748b",
// //     });

// //     if (!confirm.isConfirmed) return;

// //     try {
// //       setSaving(true);

// //       const payload = new FormData();

// //       Object.entries(form).forEach(([key, value]) => {
// //         if (key === "amenities" || key === "tags") return;

// //         if (typeof value === "boolean") {
// //           payload.append(key, value ? "true" : "false");
// //         } else if (value !== undefined && value !== null) {
// //           payload.append(key, value);
// //         }
// //       });

// //       payload.append(
// //         "amenities",
// //         JSON.stringify(
// //           String(form.amenities || "")
// //             .split(",")
// //             .map((item) => item.trim())
// //             .filter(Boolean)
// //         )
// //       );

// //       payload.append(
// //         "tags",
// //         JSON.stringify(
// //           String(form.tags || "")
// //             .split(",")
// //             .map((item) => item.trim())
// //             .filter(Boolean)
// //         )
// //       );

// //       payload.append(
// //         "existingImages",
// //         JSON.stringify(existingImages)
// //       );

// //       newImages.forEach((file) => {
// //         payload.append("images", file);
// //       });

// //       if (floorPlan) {
// //         payload.append("floorPlan", floorPlan);
// //       }

// //       if (reraCertificate) {
// //         payload.append("reraCertificate", reraCertificate);
// //       }

// //       if (video) {
// //         payload.append("video", video);
// //       }

// //       const response = await updatePropertyApi(
// //         property._id,
// //         payload
// //       );

// //       if (response?.success) {
// //         await Swal.fire({
// //           icon: "success",
// //           title: "Property Updated",
// //           text: response?.message || "Property updated successfully.",
// //           confirmButtonColor: DARK,
// //         });

// //         await onUpdated();
// //       }
// //     } catch (error) {
// //       await Swal.fire({
// //         icon: "error",
// //         title: "Update Failed",
// //         text:
// //           error?.response?.data?.message ||
// //           "Unable to update property.",
// //         confirmButtonColor: DARK,
// //       });
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   const inputClass =
// //     "h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none focus:border-teal-500";

// //   return (
// //     <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
// //       <div className="w-full max-w-6xl max-h-[92vh] rounded-3xl bg-white shadow-2xl overflow-hidden">
// //         <div className="flex items-center justify-between border-b px-6 py-4">
// //           <div>
// //             <h2 className="text-xl font-bold text-gray-900">
// //               Edit Property
// //             </h2>
// //             <p className="mt-1 text-xs text-gray-400">
// //               {property.propertyId} • Update details, images and documents
// //             </p>
// //           </div>

// //           <button
// //             type="button"
// //             onClick={onClose}
// //             className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center"
// //           >
// //             <FiX size={18} />
// //           </button>
// //         </div>

// //         <form
// //           onSubmit={handleSubmit}
// //           className="max-h-[calc(92vh-78px)] overflow-y-auto p-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
// //         >
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
// //             <EditField label="Title">
// //               <input className={inputClass} value={form.title || ""} onChange={(e) => setField("title", e.target.value)} />
// //             </EditField>

// //             <EditField label="Category">
// //               <select className={inputClass} value={form.category || ""} onChange={(e) => setField("category", e.target.value)}>
// //                 {["Residential", "Commercial", "Rental", "Sell", "Plot/Land"].map((item) => <option key={item}>{item}</option>)}
// //               </select>
// //             </EditField>

// //             <EditField label="Transaction">
// //               <select className={inputClass} value={form.transactionType || ""} onChange={(e) => setField("transactionType", e.target.value)}>
// //                 <option>Sale</option>
// //                 <option>Rent</option>
// //               </select>
// //             </EditField>

// //             {[
// //               ["price", "Price"],
// //               ["propertySize", "Property Size"],
// //               ["projectName", "Project Name"],
// //               ["developerName", "Developer Name"],
// //               ["city", "City"],
// //               ["locality", "Locality"],
// //               ["pinCode", "Pin Code"],
// //               ["address", "Address"],
// //               ["latitude", "Latitude"],
// //               ["longitude", "Longitude"],
// //               ["maintenance", "Maintenance"],
// //               ["bookingAmount", "Booking Amount"],
// //               ["superBuiltupArea", "Super Built-up Area"],
// //               ["carpetArea", "Carpet Area"],
// //               ["bedrooms", "Bedrooms"],
// //               ["bathrooms", "Bathrooms"],
// //               ["balconies", "Balconies"],
// //               ["parking", "Parking"],
// //               ["floorNo", "Floor No"],
// //               ["totalFloors", "Total Floors"],
// //               ["facing", "Facing"],
// //               ["furnishing", "Furnishing"],
// //             ].map(([name, label]) => (
// //               <EditField key={name} label={label}>
// //                 <input
// //                   className={inputClass}
// //                   value={form[name] ?? ""}
// //                   onChange={(e) => setField(name, e.target.value)}
// //                 />
// //               </EditField>
// //             ))}

// //             <EditField label="Size Unit">
// //               <select className={inputClass} value={form.sizeUnit || "sqft"} onChange={(e) => setField("sizeUnit", e.target.value)}>
// //                 {["sqft", "sqyd", "sqm", "acre", "bigha"].map((item) => <option key={item}>{item}</option>)}
// //               </select>
// //             </EditField>

// //             <EditField label="Negotiable">
// //               <select className={inputClass} value={form.negotiable ? "true" : "false"} onChange={(e) => setField("negotiable", e.target.value === "true")}>
// //                 <option value="false">No</option>
// //                 <option value="true">Yes</option>
// //               </select>
// //             </EditField>

// //             <EditField label="Amenities (comma separated)">
// //               <input className={inputClass} value={form.amenities || ""} onChange={(e) => setField("amenities", e.target.value)} />
// //             </EditField>

// //             <EditField label="Tags (comma separated)">
// //               <input className={inputClass} value={form.tags || ""} onChange={(e) => setField("tags", e.target.value)} />
// //             </EditField>

// //             <div className="md:col-span-2 lg:col-span-3">
// //               <EditField label="Description">
// //                 <textarea
// //                   rows={4}
// //                   className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none focus:border-teal-500"
// //                   value={form.description || ""}
// //                   onChange={(e) => setField("description", e.target.value)}
// //                 />
// //               </EditField>
// //             </div>
// //           </div>

// //           <div className="mt-7">
// //             <h3 className="font-bold text-gray-900">Existing Images</h3>
// //             <div className="mt-3 flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// //               {existingImages.length ? (
// //                 existingImages.map((image, index) => (
// //                   <div key={image?.public_id || index} className="relative shrink-0">
// //                     <img
// //                       src={image?.url}
// //                       alt=""
// //                       className="h-28 w-36 rounded-xl object-cover border"
// //                     />
// //                     <button
// //                       type="button"
// //                       onClick={() => removeExistingImage(index)}
// //                       className="absolute -right-2 -top-2 h-7 w-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow"
// //                     >
// //                       <FiX size={13} />
// //                     </button>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <p className="text-xs text-gray-400">No existing images.</p>
// //               )}
// //             </div>
// //           </div>

// //           <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
// //             <FileField label="Add Images">
// //               <input
// //                 type="file"
// //                 multiple
// //                 accept="image/*"
// //                 onChange={(e) =>
// //                   setNewImages(Array.from(e.target.files || []))
// //                 }
// //               />
// //             </FileField>

// //             <FileField label="Floor Plan">
// //               <input
// //                 type="file"
// //                 onChange={(e) =>
// //                   setFloorPlan(e.target.files?.[0] || null)
// //                 }
// //               />
// //             </FileField>

// //             <FileField label="RERA Certificate">
// //               <input
// //                 type="file"
// //                 onChange={(e) =>
// //                   setReraCertificate(e.target.files?.[0] || null)
// //                 }
// //               />
// //             </FileField>

// //             <FileField label="Video">
// //               <input
// //                 type="file"
// //                 accept="video/*"
// //                 onChange={(e) =>
// //                   setVideo(e.target.files?.[0] || null)
// //                 }
// //               />
// //             </FileField>
// //           </div>

// //           <div className="sticky bottom-0 mt-8 flex justify-end gap-3 border-t bg-white/95 py-4 backdrop-blur">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="h-11 rounded-xl border border-gray-300 px-6 text-sm font-semibold text-gray-600"
// //             >
// //               Cancel
// //             </button>

// //             <button
// //               type="submit"
// //               disabled={saving}
// //               className="h-11 rounded-xl bg-[#0d2d2a] px-7 text-sm font-semibold text-white disabled:opacity-50"
// //             >
// //               {saving ? "Updating..." : "Update Property"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // function EditField({ label, children }) {
// //   return (
// //     <label className="block">
// //       <span className="mb-1.5 block text-xs font-semibold text-gray-500">
// //         {label}
// //       </span>
// //       {children}
// //     </label>
// //   );
// // }

// // function FileField({ label, children }) {
// //   return (
// //     <div className="rounded-xl border border-dashed border-gray-300 p-4">
// //       <p className="mb-3 text-xs font-bold text-gray-600">
// //         {label}
// //       </p>
// //       <div className="text-xs text-gray-500">{children}</div>
// //     </div>
// //   );
// // }

// // function PropertyPreview({
// //   open,
// //   property,
// //   onClose,
// // }) {

// //   const [selectedImage, setSelectedImage] = useState(0);

// //   useEffect(() => {
// //     setSelectedImage(0);
// //   }, [property]);

// //   if (!open || !property) return null;

// //   const images =
// //     property.images?.length
// //       ? property.images
// //       : [
// //           {
// //             url: "https://via.placeholder.com/1200x700",
// //           },
// //         ];

// //   return (
// //     <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

// //       <div className="min-h-screen flex justify-center py-10 px-5">

// //         <div className="bg-white rounded-[32px] w-full max-w-7xl shadow-2xl overflow-hidden">

// //           {/* HEADER */}

// //           <div className="sticky top-0 z-20 bg-white border-b px-8 py-5 flex items-center justify-between">

// //             <div>

// //               <h2 className="text-3xl font-bold text-gray-900">
// //                 {property.title}
// //               </h2>

// //               <div className="flex items-center gap-2 mt-2 text-gray-500">

// //                 <FiMapPin />

// //                 <span>
// //                   {property.address},{" "}
// //                   {property.city}
// //                 </span>

// //               </div>

// //             </div>

// //             <div className="flex items-center gap-3">

// //               <button className="w-11 h-11 rounded-full border hover:bg-gray-100">

// //                 <FiHeart className="mx-auto"/>

// //               </button>

// //               <button className="w-11 h-11 rounded-full border hover:bg-gray-100">

// //                 <FiShare2 className="mx-auto"/>

// //               </button>

// //               <button
// //                 onClick={onClose}
// //                 className="w-11 h-11 rounded-full bg-black text-white hover:bg-gray-800"
// //               >

// //                 <FiX className="mx-auto"/>

// //               </button>

// //             </div>

// //           </div>

// //           {/* HERO */}

// //           <div className="grid lg:grid-cols-5 gap-8 p-8">

// //             {/* LEFT */}

// //             <div className="lg:col-span-3">

// //               <div className="relative">

// //                 <img
// //                   src={images[selectedImage].url}
// //                   className="w-full h-[520px] object-cover rounded-3xl"
// //                 />

// //                 <div className="absolute left-5 top-5">

// //                   <span className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm flex items-center gap-2">

// //                     <MdVerified />

// //                     {property.status}

// //                   </span>

// //                 </div>

// //                 <button
// //                   onClick={() =>
// //                     setSelectedImage((prev) =>
// //                       prev === 0
// //                         ? images.length - 1
// //                         : prev - 1
// //                     )
// //                   }
// //                   className="absolute left-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow"
// //                 >

// //                   <FiChevronLeft className="mx-auto"/>

// //                 </button>

// //                 <button
// //                   onClick={() =>
// //                     setSelectedImage((prev) =>
// //                       prev === images.length - 1
// //                         ? 0
// //                         : prev + 1
// //                     )
// //                   }
// //                   className="absolute right-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow"
// //                 >

// //                   <FiChevronRight className="mx-auto"/>

// //                 </button>

// //               </div>

// //               {/* THUMBNAILS */}

// //               <div className="flex gap-4 mt-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

// //                 {images.map((img, index) => (

// //                   <img
// //                     key={index}
// //                     src={img.url}
// //                     onClick={() =>
// //                       setSelectedImage(index)
// //                     }
// //                     className={`w-28 h-20 rounded-xl cursor-pointer object-cover border-4 transition

// //                     ${
// //                       selectedImage === index
// //                         ? "border-emerald-600"
// //                         : "border-transparent"
// //                     }`}
// //                   />

// //                 ))}

// //               </div>

// //             </div>

// //             {/* RIGHT */}

// //             <div className="lg:col-span-2">

// //               <div className="bg-gradient-to-br from-emerald-700 to-teal-900 rounded-3xl p-8 text-white">

// //                 <p className="uppercase tracking-widest text-sm opacity-80">

// //                   Premium Property

// //                 </p>

// //                 <h1 className="text-5xl font-bold mt-3">

// //                   ₹ {Number(property.price).toLocaleString()}

// //                 </h1>

// //                 <p className="mt-2 text-white/80">

// //                   ₹ {property.pricePerSqft} / Sq.Ft

// //                 </p>

// //                 <div className="mt-8 space-y-5">

// //                   <div className="flex justify-between">

// //                     <span>Property ID</span>

// //                     <b>{property.propertyId}</b>

// //                   </div>

// //                   <div className="flex justify-between">

// //                     <span>Category</span>

// //                     <b>{property.category}</b>

// //                   </div>

// //                   <div className="flex justify-between">

// //                     <span>Transaction</span>

// //                     <b>{property.transactionType}</b>

// //                   </div>

// //                   <div className="flex justify-between">

// //                     <span>Developer</span>

// //                     <b>{property.developerName}</b>

// //                   </div>

// //                   <div className="flex justify-between">

// //                     <span>Project</span>

// //                     <b>{property.projectName}</b>

// //                   </div>

// //                 </div>

// //                 <button className="mt-10 w-full py-4 rounded-2xl bg-white text-emerald-800 font-bold hover:bg-gray-100">

// //                   Contact Sales Team

// //                 </button>

// //               </div>

// //               <div className="mt-6 bg-gray-50 rounded-3xl p-6">

// //                 <div className="flex items-center gap-3">

// //                   <MdOutlinePhotoLibrary
// //                     size={24}
// //                     className="text-emerald-600"
// //                   />

// //                   <div>

// //                     <p className="font-bold">

// //                       {images.length} Property Images

// //                     </p>

// //                     <p className="text-gray-500 text-sm">

// //                       High Resolution Gallery

// //                     </p>

// //                   </div>

// //                 </div>

// //               </div>

// //             </div>

// //           </div>

       


// //       {/* ================= PROPERTY OVERVIEW ================= */}

// // <div className="px-8 pb-10">

// // <div className="grid xl:grid-cols-3 gap-8">

// //   {/* LEFT */}

// //   <div className="xl:col-span-2 space-y-8">

// //     {/* Quick Stats */}

// //     <div className="bg-white rounded-3xl border shadow-sm p-7">

// //       <h2 className="text-2xl font-bold mb-6 text-gray-900">
// //         Property Overview
// //       </h2>

// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

// //         <InfoCard
// //           title="Bedrooms"
// //           value={property.bedrooms || "-"}
// //           icon="🛏"
// //         />

// //         <InfoCard
// //           title="Bathrooms"
// //           value={property.bathrooms || "-"}
// //           icon="🚿"
// //         />

// //         <InfoCard
// //           title="Balconies"
// //           value={property.balconies || "-"}
// //           icon="🌇"
// //         />

// //         <InfoCard
// //           title="Parking"
// //           value={property.parking || "-"}
// //           icon="🚗"
// //         />

// //       </div>

// //     </div>

// //     {/* Property Details */}

// //     <div className="bg-white rounded-3xl border shadow-sm p-7">

// //       <h2 className="text-2xl font-bold mb-6">
// //         Property Details
// //       </h2>

// //       <div className="grid md:grid-cols-2 gap-y-5 gap-x-10">

// //         <DetailItem
// //           label="Property ID"
// //           value={property.propertyId}
// //         />

// //         <DetailItem
// //           label="Category"
// //           value={property.category}
// //         />

// //         <DetailItem
// //           label="Transaction"
// //           value={property.transactionType}
// //         />

// //         <DetailItem
// //           label="Status"
// //           value={property.status}
// //         />

// //         <DetailItem
// //           label="Project"
// //           value={property.projectName}
// //         />

// //         <DetailItem
// //           label="Developer"
// //           value={property.developerName}
// //         />

// //         <DetailItem
// //           label="Facing"
// //           value={property.facing}
// //         />

// //         <DetailItem
// //           label="Furnishing"
// //           value={property.furnishing}
// //         />

// //         <DetailItem
// //           label="Floor"
// //           value={property.floorNo}
// //         />

// //         <DetailItem
// //           label="Total Floors"
// //           value={property.totalFloors}
// //         />

// //       </div>

// //     </div>

// //     {/* Description */}

// //     <div className="bg-white rounded-3xl border shadow-sm p-7">

// //       <h2 className="text-2xl font-bold mb-5">
// //         Property Description
// //       </h2>

// //       <p className="leading-8 text-gray-600">

// //         {property.description ||

// //           "No Description Added"}

// //       </p>

// //     </div>

// //   </div>



// //   {/* RIGHT */}

// //   <div className="space-y-7">

// //     {/* Pricing */}

// //     <div className="bg-gradient-to-br from-emerald-600 to-teal-900 rounded-3xl p-6 text-white">

// //       <h2 className="text-2xl font-bold">

// //         Pricing

// //       </h2>

// //       <div className="space-y-5 mt-6">

// //         <PriceRow
// //           label="Property Price"
// //           value={`₹ ${Number(property.price).toLocaleString()}`}
// //         />

// //         <PriceRow
// //           label="Price / Sq.Ft"
// //           value={`₹ ${property.pricePerSqft}`}
// //         />

// //         <PriceRow
// //           label="Maintenance"
// //           value={`₹ ${property.maintenance || 0}`}
// //         />

// //         <PriceRow
// //           label="Booking Amount"
// //           value={`₹ ${property.bookingAmount || 0}`}
// //         />

// //         <PriceRow
// //           label="Negotiable"
// //           value={property.negotiable ? "Yes" : "No"}
// //         />

// //       </div>

// //     </div>

// //     {/* Area */}

// //     <div className="bg-white rounded-3xl border shadow-sm p-6">

// //       <h2 className="text-xl font-bold mb-5">

// //         Area Details

// //       </h2>

// //       <PriceRow
// //         label="Super Built-up"
// //         value={`${property.superBuiltupArea} Sq.Ft`}
// //       />

// //       <PriceRow
// //         label="Carpet Area"
// //         value={`${property.carpetArea} Sq.Ft`}
// //       />

// //     </div>

// //   </div>

// // </div>

// // </div>

// // {/* ================= LOCATION ================= */}

// // <div className="px-8 pb-10">

// //   <div className="bg-white rounded-3xl border shadow-sm p-7">

// //     <h2 className="text-2xl font-bold mb-6">
// //       Property Location
// //     </h2>

// //     <div className="grid lg:grid-cols-2 gap-8">

// //       {/* Left */}

// //       <div className="space-y-5">

// //         <DetailItem
// //           label="Address"
// //           value={property.address}
// //         />

// //         <DetailItem
// //           label="City"
// //           value={property.city}
// //         />

// //         <DetailItem
// //           label="Locality"
// //           value={property.locality}
// //         />

// //         <DetailItem
// //           label="Pincode"
// //           value={property.pinCode}
// //         />

// //         <DetailItem
// //           label="Latitude"
// //           value={property.latitude}
// //         />

// //         <DetailItem
// //           label="Longitude"
// //           value={property.longitude}
// //         />

// //       </div>

// //       {/* Map */}

// //       <div>

// //         {property.latitude && property.longitude ? (

// //           <iframe
// //             title="map"
// //             width="100%"
// //             height="350"
// //             className="rounded-3xl border"
// //             loading="lazy"
// //             src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
// //           />

// //         ) : (

// //           <div className="h-[350px] rounded-3xl bg-gray-100 flex items-center justify-center">

// //             No Location Available

// //           </div>

// //         )}

// //       </div>

// //     </div>

// //   </div>

// // </div>

// // {/* ================= Amenities ================= */}

// // <div className="px-8 pb-10">

// // <div className="bg-white rounded-3xl border shadow-sm p-7">

// // <h2 className="text-2xl font-bold mb-6">

// // Amenities

// // </h2>

// // <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">

// // {property.amenities?.length ?

// // property.amenities.map((item,index)=>(

// // <div
// // key={index}
// // className="rounded-2xl border p-5 bg-gray-50 hover:shadow-md transition"
// // >

// // <div className="text-3xl">

// // ✨

// // </div>

// // <p className="mt-3 font-semibold">

// // {item}

// // </p>

// // </div>

// // ))

// // :

// // <div>No Amenities Added</div>

// // }

// // </div>

// // </div>

// // </div>



// // {/* Documents */}

// // <div className="px-8 pb-10">

// // <div className="bg-white rounded-3xl border shadow-sm p-7">

// // <h2 className="text-2xl font-bold mb-6">

// // Documents

// // </h2>

// // <div className="flex flex-wrap gap-4">

// // {property.floorPlan && (

// // <a
// // href={property.floorPlan}
// // target="_blank"
// // className="bg-emerald-600 text-white px-6 py-3 rounded-xl"
// // >

// // Floor Plan

// // </a>

// // )}

// // {property.reraCertificate && (

// // <a
// // href={property.reraCertificate}
// // target="_blank"
// // className="bg-blue-600 text-white px-6 py-3 rounded-xl"
// // >

// // RERA Certificate

// // </a>

// // )}

// // </div>

// // </div>

// // </div>

// // {property.videoLink && (

// // <div className="px-8 pb-10">

// // <div className="bg-white rounded-3xl border shadow-sm p-7">

// // <h2 className="text-2xl font-bold mb-6">

// // Property Walkthrough

// // </h2>

// // <video
// // controls
// // className="rounded-3xl w-full"
// // src={property.videoLink}
// // />

// // </div>

// // </div>

// // )}


// // {property.tags?.length > 0 && (

// // <div className="px-8 pb-10">

// // <div className="bg-white rounded-3xl border shadow-sm p-7">

// // <h2 className="text-2xl font-bold mb-6">

// // Intelligence Tags

// // </h2>

// // <div className="flex flex-wrap gap-3">

// // {property.tags.map((tag,index)=>(

// // <span
// // key={index}
// // className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full"
// // >

// // #{tag}

// // </span>

// // ))}

// // </div>

// // </div>

// // </div>

// // )}

// // <div className="border-t bg-gray-50 px-8 py-6 flex justify-end gap-4">

// // <button
// // onClick={onClose}
// // className="px-7 py-3 rounded-2xl border"
// // >

// // Close

// // </button>


// // </div>



// //     </div>

// //     </div>
// //     </div>

    
// //   );
// // }
// // function InfoCard({ title, value, icon }) {
// //   return (
// //     <div className="rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-lg transition-all p-5">
// //       <div className="text-3xl">
// //         {icon}
// //       </div>

// //       <p className="text-sm text-gray-500 mt-3">
// //         {title}
// //       </p>

// //       <h3 className="text-2xl font-bold mt-1">
// //         {value || "-"}
// //       </h3>
// //     </div>
// //   );
// // }

// // function DetailItem({ label, value }) {

// //   return (

// //     <div className="flex justify-between border-b pb-3">

// //       <span className="text-gray-500">

// //         {label}

// //       </span>

// //       <span className="font-semibold text-gray-900">

// //         {value || "-"}

// //       </span>

// //     </div>

// //   );

// // }


// // function PriceRow({ label, value }) {

// //   return (

// //     <div className="flex justify-between">

// //       <span className="text-white/70">

// //         {label}

// //       </span>

// //       <span className="font-bold">

// //         {value}

// //       </span>

// //     </div>

// //   );

// // }


// // import { useEffect, useMemo, useState } from "react";
// // import {
// //   useNavigate,
// //   useParams,
// // } from "react-router-dom";
// // import {
// //   getAllPropertiesApi,
// //   getPropertyByIdApi,
// //   deletePropertyApi,
// //   updatePropertyApi,
// //   updatePropertyStatusApi,
// // } from "../../../Services/propertyService";
// // import {
// //   FiFilter,
// //   FiUpload,
// //   FiEye,
// //   FiEdit2,
// //   FiChevronDown,
// //   FiChevronUp,
// //   FiInfo,
// //   FiTrash2,
// //   FiX,
// //   FiMapPin,
// //   FiChevronLeft,
// //   FiChevronRight,
// //   FiSearch,
// //   FiHome,
// //   FiUser,
// //   FiCheckCircle,
// //   FiClock,
// //   FiGrid,
// //   FiImage,
// //   FiFileText,
// //   FiVideo,
// //   FiDollarSign,
// //   FiMaximize2,
// //   FiNavigation,
// // } from "react-icons/fi";

// // import {
// //   MdOutlineCheckCircle,
// //   MdOutlineAutoAwesome,
// //   MdTrendingUp,
// //   MdVerified,
// //   MdOutlinePhotoLibrary,
// // } from "react-icons/md";

// // import { BsRobot } from "react-icons/bs";
// // import Swal from "sweetalert2";

// // const DARK = "#0d2d2a";
// // const ACCENT = "#0f8f79";

// // const SCROLLBAR_HIDDEN =
// //   "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

// // /* =========================================================
// //    HELPERS
// // ========================================================= */

// // const formatCurrency = (value) =>
// //   `₹ ${Number(value || 0).toLocaleString("en-IN")}`;

// // const formatStatus = (value) =>
// //   String(value || "-").replaceAll("_", " ");

// // function StatusBadge({ status }) {
// //   const styles = {
// //     Draft: "bg-gray-50 text-gray-600 border-gray-200",
// //     Submitted: "bg-blue-50 text-blue-700 border-blue-200",
// //     Assigned_To_Partner:
// //       "bg-cyan-50 text-cyan-700 border-cyan-200",
// //     Reviewing:
// //       "bg-amber-50 text-amber-700 border-amber-200",
// //     Verified:
// //       "bg-emerald-50 text-emerald-700 border-emerald-200",
// //     Live:
// //       "bg-green-50 text-green-700 border-green-200",
// //     Rejected:
// //       "bg-red-50 text-red-700 border-red-200",
// //     Sold:
// //       "bg-purple-50 text-purple-700 border-purple-200",
// //     Rented:
// //       "bg-indigo-50 text-indigo-700 border-indigo-200",
// //   };

// //   return (
// //     <span
// //       className={`inline-flex max-w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-full border px-1.5 py-1 text-[8px] font-bold sm:px-2 sm:text-[9px] lg:px-2.5 lg:text-[10px] ${
// //         styles[status] || "bg-gray-50 text-gray-600 border-gray-200"
// //       }`}
// //     >
// //       {formatStatus(status)}
// //     </span>
// //   );
// // }

// // function CreatorBadge({ role }) {
// //   const styles = {
// //     Admin: "bg-blue-50 text-blue-700",
// //     Partner: "bg-teal-50 text-teal-700",
// //     Seller: "bg-orange-50 text-orange-700",
// //   };

// //   return (
// //     <span
// //       className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold ${
// //         styles[role] || "bg-gray-100 text-gray-600"
// //       }`}
// //     >
// //       {role || "Unknown"}
// //     </span>
// //   );
// // }


// // /* =========================================================
// //    CUSTOM HOVER TOOLTIP
// // ========================================================= */

// // function HoverTooltip({
// //   children,
// //   text,
// //   position = "top",
// //   className = "",
// // }) {
// //   if (!text) {
// //     return children;
// //   }

// //   const positions = {
// //     top:
// //       "bottom-full left-1/2 -translate-x-1/2 mb-2",
// //     bottom:
// //       "top-full left-1/2 -translate-x-1/2 mt-2",
// //     left:
// //       "right-full top-1/2 -translate-y-1/2 mr-2",
// //     right:
// //       "left-full top-1/2 -translate-y-1/2 ml-2",
// //   };

// //   const arrows = {
// //     top:
// //       "left-1/2 top-full -translate-x-1/2 border-x-[6px] border-x-transparent border-t-[6px] border-t-[#173c37]",
// //     bottom:
// //       "left-1/2 bottom-full -translate-x-1/2 border-x-[6px] border-x-transparent border-b-[6px] border-b-[#173c37]",
// //     left:
// //       "left-full top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-[#173c37]",
// //     right:
// //       "right-full top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-r-[6px] border-r-[#173c37]",
// //   };

// //   return (
// //     <div
// //       className={`group/tooltip relative min-w-0 ${className}`}
// //     >
// //       {children}

// //       <div
// //         className={`
// //           pointer-events-none
// //           absolute
// //           ${positions[position]}
// //           z-[99999]
// //           invisible
// //           w-max
// //           max-w-[300px]
// //           translate-y-1
// //           rounded-xl
// //           bg-[#173c37]
// //           px-3
// //           py-2
// //           text-[10px]
// //           font-semibold
// //           leading-4
// //           text-white
// //           opacity-0
// //           shadow-[0_10px_30px_rgba(15,23,42,0.25)]
// //           transition-all
// //           duration-150
// //           group-hover/tooltip:visible
// //           group-hover/tooltip:translate-y-0
// //           group-hover/tooltip:opacity-100
// //         `}
// //       >
// //         <span className="block break-words">
// //           {text}
// //         </span>

// //         <span
// //           className={`absolute h-0 w-0 ${arrows[position]}`}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // function useBodyScrollLock(locked) {
// //   useEffect(() => {
// //     if (!locked) return;

// //     const oldOverflow = document.body.style.overflow;
// //     document.body.style.overflow = "hidden";

// //     return () => {
// //       document.body.style.overflow = oldOverflow;
// //     };
// //   }, [locked]);
// // }

// // /* =========================================================
// //    AI ASSISTANT
// // ========================================================= */

// // function AIAssistant({ open, onClose }) {
// //   if (!open) return null;

// //   return (
// //     <div className="fixed bottom-20 right-4 z-50 w-[calc(100vw-2rem)] max-w-[370px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:right-6">
// //       <div className="flex items-center justify-between border-b border-slate-100 bg-[#f0faf8] px-4 py-3">
// //         <div className="flex items-center gap-2.5">
// //           <div
// //             className="flex h-8 w-8 items-center justify-center rounded-full text-white"
// //             style={{ backgroundColor: DARK }}
// //           >
// //             <BsRobot size={16} />
// //           </div>

// //           <div>
// //             <p className="text-xs font-extrabold text-[#183d38]">
// //               AI Property Assistant
// //             </p>
// //             <p className="text-[9px] text-slate-400">
// //               Smart listing workflows
// //             </p>
// //           </div>
// //         </div>

// //         <button
// //           onClick={onClose}
// //           className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white hover:text-slate-700"
// //         >
// //           <FiX size={15} />
// //         </button>
// //       </div>

// //       <div className="space-y-3 p-4">
// //         <p className="text-[11px] leading-5 text-slate-500">
// //           Select a property to unlock AI assisted listing workflows.
// //         </p>

// //         <button className="flex w-full items-center justify-between rounded-xl bg-emerald-600 px-4 py-3 text-xs font-semibold text-white transition hover:bg-emerald-700">
// //           Generate Description
// //           <MdOutlineAutoAwesome size={16} />
// //         </button>

// //         <button className="flex w-full items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100">
// //           Suggest Price
// //           <MdTrendingUp size={16} />
// //         </button>

// //         <div className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-3 py-3">
// //           <FiInfo
// //             size={14}
// //             className="mt-0.5 shrink-0 text-slate-400"
// //           />
// //           <p className="text-[10px] leading-4 text-slate-500">
// //             DIGINIWAS AI can help optimize descriptions, pricing,
// //             positioning and lead capture.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    MAIN PAGE
// // ========================================================= */

// // export default function PropertyManagement() {
// //     const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [chatOpen, setChatOpen] = useState(false);

// //   const [properties, setProperties] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const [previewOpen, setPreviewOpen] = useState(false);
// //   const [selectedProperty, setSelectedProperty] = useState(null);

// //   useEffect(() => {
// //   if (!id) return;

// //   const openPropertyFromRoute = async () => {
// //     try {
// //       const response =
// //         await getPropertyByIdApi(id);

// //       if (response?.success && response?.data) {
// //         setSelectedProperty(response.data);
// //         setPreviewOpen(true);
// //       }
// //     } catch (error) {
// //       console.error(
// //         "Property Detail Error:",
// //         error
// //       );

// //       Swal.fire({
// //         icon: "error",
// //         title: "Property Not Found",
// //         text:
// //           error?.response?.data?.message ||
// //           "Unable to load property details.",
// //       });
// //     }
// //   };

// //   openPropertyFromRoute();
// // }, [id]);

// //   const [editOpen, setEditOpen] = useState(false);
// //   const [editingProperty, setEditingProperty] = useState(null);

// //   const [selectedRole, setSelectedRole] = useState("All");
// //   const [selectedStatus, setSelectedStatus] = useState("All");
// //   const [selectedCity, setSelectedCity] = useState("All");
// //   const [search, setSearch] = useState("");
// //   const [filterOpen, setFilterOpen] = useState(false);

// //   const [counts, setCounts] = useState({
// //     all: 0,
// //     admin: 0,
// //     partner: 0,
// //     seller: 0,
// //   });

// //   const statusOptions = [
// //     "All",
// //     "Submitted",
// //     "Assigned_To_Partner",
// //     "Reviewing",
// //     "Verified",
// //     "Live",
// //     "Rejected",
// //     "Sold",
// //     "Rented",
// //   ];

// //   /* =========================================================
// //      FETCH
// //   ========================================================= */

// //   const getProperties = async () => {
// //     try {
// //       setLoading(true);

// //       const response = await getAllPropertiesApi({
// //         role: selectedRole === "All" ? "" : selectedRole,
// //         status: selectedStatus === "All" ? "" : selectedStatus,
// //         city: selectedCity === "All" ? "" : selectedCity,
// //         search: search.trim(),
// //       });

// //       if (response?.success) {
// //         const apiProperties = Array.isArray(response?.data)
// //           ? response.data
// //           : [];

// //         // Draft must never show in admin Property Management.
// //         const visibleProperties = apiProperties.filter(
// //           (item) =>
// //             String(item?.status || "")
// //               .trim()
// //               .toLowerCase() !== "draft"
// //         );

// //         setProperties(visibleProperties);

// //         // Prefer backend counts if available.
// //         // If backend still includes Draft in counts, list remains safe.
// //         setCounts({
// //           all: response?.counts?.all || visibleProperties.length,
// //           admin:
// //             response?.counts?.admin ||
// //             visibleProperties.filter(
// //               (p) => p?.addedBy?.role === "Admin"
// //             ).length,
// //           partner:
// //             response?.counts?.partner ||
// //             visibleProperties.filter(
// //               (p) => p?.addedBy?.role === "Partner"
// //             ).length,
// //           seller:
// //             response?.counts?.seller ||
// //             visibleProperties.filter(
// //               (p) => p?.addedBy?.role === "Seller"
// //             ).length,
// //         });
// //       } else {
// //         setProperties([]);
// //       }
// //     } catch (error) {
// //       console.error(
// //         "GET PROPERTIES ERROR:",
// //         error?.response?.data || error
// //       );
// //       setProperties([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       getProperties();
// //     }, 300);

// //     return () => clearTimeout(timer);
// //   }, [
// //     selectedRole,
// //     selectedStatus,
// //     selectedCity,
// //     search,
// //   ]);

// //   const cityOptions = useMemo(
// //     () => [
// //       "All",
// //       ...Array.from(
// //         new Set(
// //           properties
// //             .map((item) => item?.city)
// //             .filter(Boolean)
// //         )
// //       ).sort(),
// //     ],
// //     [properties]
// //   );

// //   const roleTabs = [
// //     { label: "All", count: counts.all, icon: FiGrid },
// //     { label: "Admin", count: counts.admin, icon: FiUser },
// //     { label: "Partner", count: counts.partner, icon: FiCheckCircle },
// //     { label: "Seller", count: counts.seller, icon: FiHome },
// //   ];

// //   const filteredSummary = useMemo(() => {
// //     return {
// //       verified: properties.filter(
// //         (p) => p.status === "Verified"
// //       ).length,
// //       live: properties.filter(
// //         (p) => p.status === "Live"
// //       ).length,
// //       reviewing: properties.filter(
// //         (p) =>
// //           p.status === "Reviewing" ||
// //           p.status === "Assigned_To_Partner"
// //       ).length,
// //     };
// //   }, [properties]);

// //   /* =========================================================
// //      ACTIONS
// //   ========================================================= */

// //   const handleDeleteProperty = async (id) => {
// //     const property = properties.find(
// //       (item) => item?._id === id
// //     );

// //     const result = await Swal.fire({
// //       icon: "warning",
// //       title: "Delete Property?",
// //       html: `
// //         <div style="font-size:13px;color:#64748b;line-height:1.6">
// //           Are you sure you want to delete
// //           <strong style="color:#0d2d2a">
// //             ${property?.title || "this property"}
// //           </strong>
// //           ${
// //             property?.propertyId
// //               ? `(${property.propertyId})`
// //               : ""
// //           }?
// //           <br/>
// //           <span style="color:#dc2626;font-weight:600">
// //             This action cannot be undone.
// //           </span>
// //         </div>
// //       `,
// //       showCancelButton: true,
// //       confirmButtonText: "Yes, Delete",
// //       cancelButtonText: "Cancel",
// //       confirmButtonColor: "#dc2626",
// //       cancelButtonColor: "#64748b",
// //       reverseButtons: true,
// //     });

// //     if (!result.isConfirmed) return;

// //     try {
// //       const response =
// //         await deletePropertyApi(id);

// //       if (response?.success) {
// //         await Swal.fire({
// //           icon: "success",
// //           title: "Property Deleted",
// //           text:
// //             response?.message ||
// //             "Property deleted successfully.",
// //           confirmButtonColor: DARK,
// //         });

// //         await getProperties();
// //       }
// //     } catch (error) {
// //       await Swal.fire({
// //         icon: "error",
// //         title: "Delete Failed",
// //         text:
// //           error?.response?.data?.message ||
// //           "Unable to delete property.",
// //         confirmButtonColor: DARK,
// //       });
// //     }
// //   };

// //   const handleVerifyProperty = async (property) => {
// //     if (property?.status === "Verified") {
// //       await Swal.fire({
// //         icon: "info",
// //         title: "Already Verified",
// //         text: "This property is already verified.",
// //         confirmButtonColor: DARK,
// //       });

// //       return;
// //     }

// //     const result = await Swal.fire({
// //       icon: "question",
// //       title: "Verify Property?",
// //       html: `
// //         <div style="font-size:13px;color:#64748b;line-height:1.6">
// //           Verify
// //           <strong style="color:#0d2d2a">
// //             ${property?.title || "this property"}
// //           </strong>
// //           ${
// //             property?.propertyId
// //               ? `(${property.propertyId})`
// //               : ""
// //           }?
// //           <br/>
// //           Status will be changed to
// //           <strong style="color:#059669">Verified</strong>.
// //         </div>
// //       `,
// //       showCancelButton: true,
// //       confirmButtonText: "Yes, Verify",
// //       cancelButtonText: "Cancel",
// //       confirmButtonColor: "#059669",
// //       cancelButtonColor: "#64748b",
// //       reverseButtons: true,
// //     });

// //     if (!result.isConfirmed) return;

// //     try {
// //       const response =
// //         await updatePropertyStatusApi(
// //           property._id,
// //           {
// //             status: "Verified",
// //             notes:
// //               "Property verified by admin from Property Management.",
// //           }
// //         );

// //       if (response?.success) {
// //         await Swal.fire({
// //           icon: "success",
// //           title: "Property Verified",
// //           text:
// //             response?.message ||
// //             "Property verified successfully.",
// //           confirmButtonColor: "#059669",
// //         });

// //         await getProperties();
// //       }
// //     } catch (error) {
// //       await Swal.fire({
// //         icon: "error",
// //         title: "Verification Failed",
// //         text:
// //           error?.response?.data?.message ||
// //           "Unable to verify property.",
// //         confirmButtonColor: DARK,
// //       });
// //     }
// //   };

// //   const handleOpenPreview = async (property) => {
// //     try {
// //       const response =
// //         await getPropertyByIdApi(
// //           property._id
// //         );

// //       setSelectedProperty(
// //         response?.data || property
// //       );
// //     } catch (error) {
// //       setSelectedProperty(property);
// //     }

// //     setPreviewOpen(true);
// //   };

// //   const handleOpenEdit = async (property) => {
// //     try {
// //       const response =
// //         await getPropertyByIdApi(
// //           property._id
// //         );

// //       setEditingProperty(
// //         response?.data || property
// //       );
// //     } catch (error) {
// //       setEditingProperty(property);
// //     }

// //     setEditOpen(true);
// //   };

// //   const handlePropertyUpdated = async () => {
// //     setEditOpen(false);
// //     setEditingProperty(null);
// //     await getProperties();
// //   };

// //   const clearFilters = () => {
// //     setSelectedRole("All");
// //     setSelectedStatus("All");
// //     setSelectedCity("All");
// //     setSearch("");
// //   };

// //   /* =========================================================
// //      UI
// //   ========================================================= */

// //   return (
// //     <div className="min-h-screen font-sans text-slate-800">
// //       <div className="mx-auto w-full max-w-[1500px] px-1 py-2 sm:px-1 lg:px-1">
// //         {/* HEADER */}
// //         <section className="mb-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-5">
// //           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
// //             <div>
// //               <div className="mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                 <span>Portfolio</span>
// //                 <span>/</span>
// //                 <span className="text-[#0f766e]">
// //                   Properties
// //                 </span>
// //               </div>

// //               <h1 className="text-2xl font-extrabold tracking-tight text-[#173c37] sm:text-3xl">
// //                 Property Management
// //               </h1>

// //               <p className="mt-1 text-xs text-slate-500">
// //                 Manage, verify and maintain properties added by
// //                 Admin, Partner and Seller.
// //               </p>
// //             </div>

// //             <div className="flex flex-wrap gap-2">
// //               <button
// //                 type="button"
// //                 onClick={() =>
// //                   setFilterOpen(
// //                     (prev) => !prev
// //                   )
// //                 }
// //                 className={`flex h-10 items-center gap-2 rounded-xl border px-4 text-xs font-semibold transition ${
// //                   filterOpen
// //                     ? "border-[#0d2d2a] bg-[#0d2d2a] text-white"
// //                     : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
// //                 }`}
// //               >
// //                 <FiFilter size={14} />
// //                 Filters
// //                 {filterOpen ? (
// //                   <FiChevronUp size={13} />
// //                 ) : (
// //                   <FiChevronDown size={13} />
// //                 )}
// //               </button>

// //               <button
// //                 type="button"
// //                 className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
// //               >
// //                 <FiUpload size={14} />
// //                 Export
// //               </button>
// //             </div>
// //           </div>
// //         </section>

// //         {/* SUMMARY */}
// //         <section className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
// //           <SummaryCard
// //             label="Visible Properties"
// //             value={properties.length}
// //             icon={<FiGrid />}
// //           />

// //           <SummaryCard
// //             label="Reviewing"
// //             value={filteredSummary.reviewing}
// //             icon={<FiClock />}
// //             tone="amber"
// //           />

// //           <SummaryCard
// //             label="Verified"
// //             value={filteredSummary.verified}
// //             icon={<FiCheckCircle />}
// //             tone="emerald"
// //           />

// //           <SummaryCard
// //             label="Live"
// //             value={filteredSummary.live}
// //             icon={<MdVerified />}
// //             tone="green"
// //           />
// //         </section>

// //         {/* CREATOR TABS */}
// //         <section className="mb-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
// //           <div
// //             className={`flex gap-2 overflow-x-auto ${SCROLLBAR_HIDDEN}`}
// //           >
// //             {roleTabs.map(
// //               ({ label, count, icon: Icon }) => {
// //                 const active =
// //                   selectedRole === label;

// //                 return (
// //                   <button
// //                     key={label}
// //                     type="button"
// //                     onClick={() =>
// //                       setSelectedRole(label)
// //                     }
// //                     className={`flex min-w-max items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
// //                       active
// //                         ? "bg-[#0d2d2a] text-white shadow-sm"
// //                         : "text-slate-500 hover:bg-slate-100"
// //                     }`}
// //                   >
// //                     <Icon size={13} />
// //                     {label}

// //                     <span
// //                       className={`rounded-full px-2 py-0.5 text-[9px] ${
// //                         active
// //                           ? "bg-white/15 text-white"
// //                           : "bg-slate-100 text-slate-500"
// //                       }`}
// //                     >
// //                       {count}
// //                     </span>
// //                   </button>
// //                 );
// //               }
// //             )}
// //           </div>
// //         </section>

// //         {/* SEARCH + FILTERS */}
// //         <section className="mb-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
// //           <div className="flex flex-col gap-3 lg:flex-row">
// //             <div className="relative flex-1">
// //               <FiSearch
// //                 size={15}
// //                 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
// //               />

// //               <input
// //                 type="text"
// //                 value={search}
// //                 onChange={(e) =>
// //                   setSearch(e.target.value)
// //                 }
// //                 placeholder="Search by property ID, title, city, locality or creator..."
// //                 className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 text-xs text-slate-700 outline-none transition focus:border-teal-400 focus:bg-white"
// //               />
// //             </div>

// //             {filterOpen && (
// //               <div className="flex flex-col gap-2 sm:flex-row">
// //                 <select
// //                   value={selectedStatus}
// //                   onChange={(e) =>
// //                     setSelectedStatus(
// //                       e.target.value
// //                     )
// //                   }
// //                   className="h-11 min-w-[180px] rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-teal-400"
// //                 >
// //                   {statusOptions.map(
// //                     (item) => (
// //                       <option
// //                         key={item}
// //                         value={item}
// //                       >
// //                         {item === "All"
// //                           ? "All Status"
// //                           : formatStatus(item)}
// //                       </option>
// //                     )
// //                   )}
// //                 </select>

// //                 <select
// //                   value={selectedCity}
// //                   onChange={(e) =>
// //                     setSelectedCity(
// //                       e.target.value
// //                     )
// //                   }
// //                   className="h-11 min-w-[165px] rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-teal-400"
// //                 >
// //                   {cityOptions.map(
// //                     (item) => (
// //                       <option
// //                         key={item}
// //                         value={item}
// //                       >
// //                         {item === "All"
// //                           ? "All Cities"
// //                           : item}
// //                       </option>
// //                     )
// //                   )}
// //                 </select>

// //                 <button
// //                   type="button"
// //                   onClick={clearFilters}
// //                   className="h-11 rounded-xl border border-slate-200 px-4 text-xs font-semibold text-slate-500 transition hover:bg-slate-50"
// //                 >
// //                   Clear
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </section>

// //         {/* ACTIVE FILTER CHIPS */}
// //         <div className="mb-3 flex flex-wrap items-center gap-2">
// //           <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
// //             Showing
// //           </span>

// //           <FilterChip>
// //             {selectedRole === "All"
// //               ? "All Creators"
// //               : `${selectedRole} Added`}
// //           </FilterChip>

// //           {selectedStatus !== "All" && (
// //             <FilterChip tone="amber">
// //               {formatStatus(selectedStatus)}
// //             </FilterChip>
// //           )}

// //           {selectedCity !== "All" && (
// //             <FilterChip tone="blue">
// //               {selectedCity}
// //             </FilterChip>
// //           )}
// //         </div>

// //         {/* TABLE CARD */}
// //         <section className="relative overflow-visible rounded-2xl border border-slate-200 bg-white shadow-sm">
// //           <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
// //             <div>
// //               <h2 className="text-sm font-bold text-[#173c37]">
// //                 Property Directory
// //               </h2>

// //               <p className="mt-0.5 text-[10px] text-slate-400">
// //                 Draft properties are hidden from this admin view.
// //               </p>
// //             </div>

// //             <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">
// //               {properties.length}
// //             </span>
// //           </div>

// //           {/* 
// //             RESPONSIVE PROPERTY DIRECTORY
// //             - No horizontal scrollbar
// //             - Table always fits available screen width
// //             - Less important columns hide on smaller screens
// //           */}
// //           <div className="relative w-full overflow-visible">
// //             <table className="w-full table-fixed">
// //               <colgroup>
// //                 <col className="w-[34%] sm:w-[29%] lg:w-[24%]" />
// //                 <col className="hidden sm:table-column sm:w-[17%] lg:w-[14%]" />
// //                 <col className="hidden lg:table-column lg:w-[15%]" />
// //                 <col className="w-[18%] sm:w-[15%] lg:w-[11%]" />
// //                 <col className="w-[24%] sm:w-[18%] lg:w-[13%]" />
// //                 <col className="hidden xl:table-column xl:w-[15%]" />
// //                 <col className="w-[24%] sm:w-[21%] lg:w-[13%] xl:w-[8%]" />
// //               </colgroup>

// //               <thead>
// //                 <tr className="border-b border-slate-100 bg-[#fafcfc]">
// //                   <th className="px-2 py-3.5 text-left text-[8px] font-extrabold uppercase tracking-[0.08em] text-slate-400 sm:px-3 sm:text-[9px]">
// //                     Property
// //                   </th>

// //                   <th className="hidden px-2 py-3.5 text-left text-[8px] font-extrabold uppercase tracking-[0.08em] text-slate-400 sm:table-cell sm:px-3 sm:text-[9px]">
// //                     Added By
// //                   </th>

// //                   <th className="hidden px-3 py-3.5 text-left text-[9px] font-extrabold uppercase tracking-[0.08em] text-slate-400 lg:table-cell">
// //                     Location
// //                   </th>

// //                   <th className="px-2 py-3.5 text-left text-[8px] font-extrabold uppercase tracking-[0.05em] text-slate-400 sm:px-3 sm:text-[9px]">
// //                     Status
// //                   </th>

// //                   <th className="px-2 py-3.5 text-left text-[8px] font-extrabold uppercase tracking-[0.05em] text-slate-400 sm:px-3 sm:text-[9px]">
// //                     Market Price
// //                   </th>

// //                   <th className="hidden px-3 py-3.5 text-left text-[9px] font-extrabold uppercase tracking-[0.08em] text-slate-400 xl:table-cell">
// //                     Assigned Partner
// //                   </th>

// //                   <th className="px-1 py-3.5 text-center text-[8px] font-extrabold uppercase tracking-[0.05em] text-slate-400 sm:px-2 sm:text-[9px]">
// //                     Actions
// //                   </th>
// //                 </tr>
// //               </thead>

// //               <tbody>
// //                 {loading ? (
// //                   <TableLoading />
// //                 ) : properties.length === 0 ? (
// //                   <TableEmpty />
// //                 ) : (
// //                   properties.map(
// //                     (property, index) => {
// //                       const creator =
// //                         property?.addedBy || {};

// //                       const assignedPartner =
// //                         property?.assignedPartner ||
// //                         {};

// //                       const imageUrl =
// //                         property?.images?.[0]
// //                           ?.url ||
// //                         "https://via.placeholder.com/120";

// //                       return (
// //                         <tr
// //                           key={
// //                             property._id ||
// //                             property.id
// //                           }
// //                           className={`transition hover:bg-[#f8fbfa] ${
// //                             index !==
// //                             properties.length - 1
// //                               ? "border-b border-slate-100"
// //                               : ""
// //                           }`}
// //                         >
// //                           <td className="px-2 py-3 sm:px-3 sm:py-3.5">
// //                             <div className="flex min-w-0 items-center gap-2 sm:gap-3">
// //                               <img
// //                                 src={imageUrl}
// //                                 alt={
// //                                   property.title ||
// //                                   "Property"
// //                                 }
// //                                 className="hidden h-10 w-10 shrink-0 rounded-xl border border-slate-100 bg-slate-100 object-cover sm:block lg:h-11 lg:w-11"
// //                               />

// //                               <div className="min-w-0 flex-1">
// //                                 <HoverTooltip
// //                                   text={property.title || "-"}
// //                                   position="top"
// //                                   className="w-full"
// //                                 >
// //                                   <p className="w-full cursor-help truncate text-[10px] font-extrabold text-slate-800 sm:text-[11px]">
// //                                     {property.title ||
// //                                       "-"}
// //                                   </p>
// //                                 </HoverTooltip>

// //                                 <p className="mt-0.5 truncate text-[9px] font-bold text-teal-600 sm:mt-1 sm:text-[10px]">
// //                                   {property.propertyId ||
// //                                     "-"}
// //                                 </p>

// //                                 <p className="mt-0.5 hidden truncate text-[8px] text-slate-400 sm:block sm:text-[9px]">
// //                                   {property.category ||
// //                                     "-"}{" "}
// //                                   •{" "}
// //                                   {property.transactionType ||
// //                                     "-"}
// //                                 </p>
// //                               </div>
// //                             </div>
// //                           </td>

// //                           <td className="hidden px-2 py-3 sm:table-cell sm:px-3 sm:py-3.5">
// //                             <HoverTooltip
// //                               text={creator?.name || "-"}
// //                               position="top"
// //                               className="w-full"
// //                             >
// //                               <p className="cursor-help truncate text-[10px] font-semibold text-slate-700 lg:text-[11px]">
// //                                 {creator?.name || "-"}
// //                               </p>
// //                             </HoverTooltip>

// //                             <div className="mt-1">
// //                               <CreatorBadge
// //                                 role={creator?.role}
// //                               />
// //                             </div>

// //                             {(creator?.sellerId ||
// //                               creator?.partnerId) && (
// //                               <p className="mt-1 text-[9px] text-slate-400">
// //                                 {creator?.sellerId ||
// //                                   creator?.partnerId}
// //                               </p>
// //                             )}
// //                           </td>

// //                           <td className="hidden px-3 py-3.5 lg:table-cell">
// //                             <div className="flex min-w-0 items-start gap-2">
// //                               <FiMapPin
// //                                 size={13}
// //                                 className="mt-0.5 shrink-0 text-slate-400"
// //                               />

// //                               <HoverTooltip
// //                                 text={
// //                                   [
// //                                     property.locality,
// //                                     property.city,
// //                                     property.pinCode,
// //                                   ]
// //                                     .filter(Boolean)
// //                                     .join(", ") || "-"
// //                                 }
// //                                 position="top"
// //                                 className="min-w-0 flex-1"
// //                               >
// //                                 <div className="min-w-0 cursor-help">
// //                                   <p className="truncate text-[10px] font-semibold text-slate-700 lg:text-[11px]">
// //                                     {property.locality ||
// //                                       "-"}
// //                                   </p>

// //                                   <p className="mt-1 truncate text-[9px] text-slate-400">
// //                                     {[
// //                                       property.city,
// //                                       property.pinCode,
// //                                     ]
// //                                       .filter(Boolean)
// //                                       .join(" • ")}
// //                                   </p>
// //                                 </div>
// //                               </HoverTooltip>
// //                             </div>
// //                           </td>

// //                           <td className="px-2 py-3 sm:px-3 sm:py-3.5">
// //                             <HoverTooltip
// //                               text={formatStatus(
// //                                 property.status
// //                               )}
// //                               position="top"
// //                               className="inline-block max-w-full"
// //                             >
// //                               <div className="cursor-help">
// //                                 <StatusBadge
// //                                   status={
// //                                     property.status
// //                                   }
// //                                 />
// //                               </div>
// //                             </HoverTooltip>
// //                           </td>

// //                           <td className="px-2 py-3 sm:px-3 sm:py-3.5">
// //                             <HoverTooltip
// //                               text={formatCurrency(
// //                                 property.price
// //                               )}
// //                               position="top"
// //                               className="w-full"
// //                             >
// //                               <p className="cursor-help truncate text-[9px] font-extrabold text-slate-800 sm:text-[10px] lg:text-[11px]">
// //                                 {formatCurrency(
// //                                   property.price
// //                                 )}
// //                               </p>
// //                             </HoverTooltip>

// //                             <p className="mt-0.5 hidden truncate text-[8px] text-slate-400 sm:block sm:text-[9px]">
// //                               {property.propertySize ||
// //                                 "-"}{" "}
// //                               {property.sizeUnit || ""}
// //                             </p>
// //                           </td>

// //                           <td className="hidden px-3 py-3.5 xl:table-cell">
// //                             {assignedPartner?.partnerId ? (
// //                               <div>
// //                                 <HoverTooltip
// //                                   text={
// //                                     assignedPartner?.name ||
// //                                     assignedPartner
// //                                       ?.partnerId?.name ||
// //                                     "-"
// //                                   }
// //                                   position="top"
// //                                   className="w-full"
// //                                 >
// //                                   <p className="cursor-help truncate text-[10px] font-semibold text-slate-700 lg:text-[11px]">
// //                                     {assignedPartner?.name ||
// //                                       assignedPartner
// //                                         ?.partnerId?.name ||
// //                                       "-"}
// //                                   </p>
// //                                 </HoverTooltip>

// //                                 <HoverTooltip
// //                                   text={
// //                                     assignedPartner?.partnerCode ||
// //                                     assignedPartner
// //                                       ?.partnerId
// //                                       ?.partnerId ||
// //                                     "-"
// //                                   }
// //                                   position="top"
// //                                   className="mt-1 w-full"
// //                                 >
// //                                   <p className="cursor-help truncate text-[9px] font-bold text-teal-600">
// //                                     {assignedPartner?.partnerCode ||
// //                                       assignedPartner
// //                                         ?.partnerId
// //                                         ?.partnerId ||
// //                                       "-"}
// //                                   </p>
// //                                 </HoverTooltip>

// //                                 <p className="mt-1 text-[9px] capitalize text-slate-400">
// //                                   {assignedPartner?.partnerType ||
// //                                     assignedPartner
// //                                       ?.partnerId
// //                                       ?.partnerType ||
// //                                     ""}
// //                                 </p>
// //                               </div>
// //                             ) : (
// //                               <HoverTooltip
// //                                 text="No partner has been assigned to this property."
// //                                 position="top"
// //                                 className="inline-block"
// //                               >
// //                                 <span className="inline-flex cursor-help rounded-full bg-orange-50 px-2.5 py-1 text-[9px] font-bold text-orange-600">
// //                                   Not Assigned
// //                                 </span>
// //                               </HoverTooltip>
// //                             )}
// //                           </td>

// //                           <td className="px-1 py-3 sm:px-2 sm:py-3.5">
// //                             <div className="flex flex-wrap items-center justify-center gap-0.5 sm:flex-nowrap">
// //                               <ActionButton
// //                                 title="View Property"
// //                                 tone="teal"
// //                                 onClick={() =>
// //                                   handleOpenPreview(
// //                                     property
// //                                   )
// //                                 }
// //                               >
// //                                 <FiEye size={15} />
// //                               </ActionButton>

// //                               <ActionButton
// //                                 title="Edit Property"
// //                                 tone="blue"
// //                                 onClick={() =>
// //                                   handleOpenEdit(
// //                                     property
// //                                   )
// //                                 }
// //                               >
// //                                 <FiEdit2
// //                                   size={14}
// //                                 />
// //                               </ActionButton>

// //                               <ActionButton
// //                                 title={
// //                                   property?.status ===
// //                                   "Verified"
// //                                     ? "Already Verified"
// //                                     : "Verify Property"
// //                                 }
// //                                 tone="green"
// //                                 disabled={
// //                                   property?.status ===
// //                                   "Verified"
// //                                 }
// //                                 onClick={() =>
// //                                   handleVerifyProperty(
// //                                     property
// //                                   )
// //                                 }
// //                               >
// //                                 <MdOutlineCheckCircle
// //                                   size={17}
// //                                 />
// //                               </ActionButton>

// //                               <ActionButton
// //                                 title="Delete Property"
// //                                 tone="red"
// //                                 onClick={() =>
// //                                   handleDeleteProperty(
// //                                     property._id
// //                                   )
// //                                 }
// //                               >
// //                                 <FiTrash2
// //                                   size={14}
// //                                 />
// //                               </ActionButton>
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       );
// //                     }
// //                   )
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>

// //           <div className="flex flex-col gap-2 border-t border-slate-100 bg-[#fcfdfd] px-4 py-3 text-[10px] sm:flex-row sm:items-center sm:justify-between sm:px-5">
// //             <p className="font-semibold text-slate-500">
// //               Showing {properties.length} properties
// //             </p>

// //             <p className="text-slate-400">
// //               Admin {counts.admin} • Partner{" "}
// //               {counts.partner} • Seller{" "}
// //               {counts.seller}
// //             </p>
// //           </div>
// //         </section>
// //       </div>

// //       <AIAssistant
// //         open={chatOpen}
// //         onClose={() =>
// //           setChatOpen(false)
// //         }
// //       />

// //       <EditPropertyModal
// //         open={editOpen}
// //         property={editingProperty}
// //         onClose={() => {
// //           setEditOpen(false);
// //           setEditingProperty(null);
// //         }}
// //         onUpdated={
// //           handlePropertyUpdated
// //         }
// //       />

// //       <PropertyPreview
// //         open={previewOpen}
// //         property={selectedProperty}
// //         onClose={() =>
// //           setPreviewOpen(false)
// //         }
// //       />

// //       <button
// //         onClick={() =>
// //           setChatOpen(
// //             (value) => !value
// //           )
// //         }
// //         className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d2d2a] text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:right-6"
// //       >
// //         {chatOpen ? (
// //           <FiX size={19} />
// //         ) : (
// //           <BsRobot size={19} />
// //         )}
// //       </button>
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    SMALL UI COMPONENTS
// // ========================================================= */

// // function SummaryCard({
// //   label,
// //   value,
// //   icon,
// //   tone = "slate",
// // }) {
// //   const tones = {
// //     slate:
// //       "bg-slate-50 text-slate-600",
// //     amber:
// //       "bg-amber-50 text-amber-600",
// //     emerald:
// //       "bg-emerald-50 text-emerald-600",
// //     green:
// //       "bg-green-50 text-green-600",
// //   };

// //   return (
// //     <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
// //       <div className="flex items-start justify-between gap-2">
// //         <div>
// //           <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
// //             {label}
// //           </p>

// //           <p className="mt-2 text-xl font-extrabold text-[#173c37]">
// //             {value || 0}
// //           </p>
// //         </div>

// //         <div
// //           className={`flex h-8 w-8 items-center justify-center rounded-xl ${tones[tone]}`}
// //         >
// //           {icon}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function FilterChip({
// //   children,
// //   tone = "teal",
// // }) {
// //   const tones = {
// //     teal:
// //       "bg-teal-50 text-teal-700 border-teal-100",
// //     amber:
// //       "bg-amber-50 text-amber-700 border-amber-100",
// //     blue:
// //       "bg-blue-50 text-blue-700 border-blue-100",
// //   };

// //   return (
// //     <span
// //       className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${tones[tone]}`}
// //     >
// //       {children}
// //     </span>
// //   );
// // }

// // function ActionButton({
// //   children,
// //   title,
// //   onClick,
// //   disabled = false,
// //   tone = "slate",
// // }) {
// //   const tones = {
// //     teal:
// //       "text-teal-600 hover:bg-teal-50",
// //     blue:
// //       "text-blue-600 hover:bg-blue-50",
// //     green:
// //       "text-emerald-600 hover:bg-emerald-50",
// //     red:
// //       "text-red-500 hover:bg-red-50",
// //     slate:
// //       "text-slate-500 hover:bg-slate-100",
// //   };

// //   return (
// //     <HoverTooltip
// //       text={title}
// //       position="top"
// //       className="inline-flex"
// //     >
// //       <button
// //         type="button"
// //         aria-label={title}
// //         disabled={disabled}
// //         onClick={onClick}
// //         className={`flex h-7 w-7 items-center justify-center rounded-md transition sm:h-7 sm:w-7 ${
// //           tones[tone]
// //         } ${
// //           disabled
// //             ? "cursor-not-allowed opacity-40"
// //             : ""
// //         }`}
// //       >
// //         {children}
// //       </button>
// //     </HoverTooltip>
// //   );
// // }

// // function TableLoading() {
// //   return (
// //     <tr>
// //       <td
// //         colSpan={7}
// //         className="py-16 text-center"
// //       >
// //         <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-slate-200 border-t-teal-600" />
// //         <p className="mt-3 text-xs text-slate-400">
// //           Loading properties...
// //         </p>
// //       </td>
// //     </tr>
// //   );
// // }

// // function TableEmpty() {
// //   return (
// //     <tr>
// //       <td
// //         colSpan={7}
// //         className="py-16 text-center"
// //       >
// //         <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
// //           <FiHome size={18} />
// //         </div>

// //         <p className="mt-3 text-sm font-bold text-slate-600">
// //           No Property Found
// //         </p>

// //         <p className="mt-1 text-[10px] text-slate-400">
// //           Try changing your filters or search.
// //         </p>
// //       </td>
// //     </tr>
// //   );
// // }

// // /* =========================================================
// //    EDIT MODAL
// // ========================================================= */

// // function EditPropertyModal({
// //   open,
// //   property,
// //   onClose,
// //   onUpdated,
// // }) {
// //   const [form, setForm] =
// //     useState({});

// //   const [
// //     existingImages,
// //     setExistingImages,
// //   ] = useState([]);

// //   const [
// //     newImages,
// //     setNewImages,
// //   ] = useState([]);

// //   const [
// //     floorPlan,
// //     setFloorPlan,
// //   ] = useState(null);

// //   const [
// //     reraCertificate,
// //     setReraCertificate,
// //   ] = useState(null);

// //   const [video, setVideo] =
// //     useState(null);

// //   const [saving, setSaving] =
// //     useState(false);

// //   useBodyScrollLock(open);

// //   useEffect(() => {
// //     if (!property) return;

// //     setForm({
// //       title: property.title || "",
// //       transactionType:
// //         property.transactionType ||
// //         "Sale",
// //       category:
// //         property.category ||
// //         "Residential",
// //       propertySize:
// //         property.propertySize || "",
// //       sizeUnit:
// //         property.sizeUnit ||
// //         "sqft",
// //       price:
// //         property.price || "",
// //       projectName:
// //         property.projectName ||
// //         "",
// //       developerName:
// //         property.developerName ||
// //         "",
// //       description:
// //         property.description ||
// //         "",
// //       city: property.city || "",
// //       locality:
// //         property.locality || "",
// //       pinCode:
// //         property.pinCode || "",
// //       address:
// //         property.address || "",
// //       latitude:
// //         property.latitude ?? "",
// //       longitude:
// //         property.longitude ?? "",
// //       maintenance:
// //         property.maintenance ?? "",
// //       bookingAmount:
// //         property.bookingAmount ?? "",
// //       negotiable:
// //         Boolean(
// //           property.negotiable
// //         ),
// //       superBuiltupArea:
// //         property.superBuiltupArea ??
// //         "",
// //       carpetArea:
// //         property.carpetArea ?? "",
// //       bedrooms:
// //         property.bedrooms || "",
// //       bathrooms:
// //         property.bathrooms || "",
// //       balconies:
// //         property.balconies || "",
// //       parking:
// //         property.parking || "",
// //       floorNo:
// //         property.floorNo ?? "",
// //       totalFloors:
// //         property.totalFloors ?? "",
// //       facing:
// //         property.facing || "",
// //       furnishing:
// //         property.furnishing || "",
// //       amenities:
// //         Array.isArray(
// //           property.amenities
// //         )
// //           ? property.amenities.join(
// //               ", "
// //             )
// //           : "",
// //       tags: Array.isArray(
// //         property.tags
// //       )
// //         ? property.tags.join(", ")
// //         : "",
// //     });

// //     setExistingImages(
// //       property.images || []
// //     );

// //     setNewImages([]);
// //     setFloorPlan(null);
// //     setReraCertificate(null);
// //     setVideo(null);
// //   }, [property]);

// //   if (!open || !property)
// //     return null;

// //   const setField = (
// //     name,
// //     value
// //   ) => {
// //     setForm((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const removeExistingImage = (
// //     index
// //   ) => {
// //     setExistingImages((prev) =>
// //       prev.filter(
// //         (_, imageIndex) =>
// //           imageIndex !== index
// //       )
// //     );
// //   };

// //   const handleSubmit = async (
// //     event
// //   ) => {
// //     event.preventDefault();

// //     const confirm =
// //       await Swal.fire({
// //         icon: "question",
// //         title: "Update Property?",
// //         text:
// //           "Property details, images and documents will be updated.",
// //         showCancelButton: true,
// //         confirmButtonText:
// //           "Yes, Update",
// //         cancelButtonText: "Cancel",
// //         confirmButtonColor: DARK,
// //         cancelButtonColor:
// //           "#64748b",
// //       });

// //     if (!confirm.isConfirmed)
// //       return;

// //     try {
// //       setSaving(true);

// //       const payload =
// //         new FormData();

// //       Object.entries(form).forEach(
// //         ([key, value]) => {
// //           if (
// //             key === "amenities" ||
// //             key === "tags"
// //           )
// //             return;

// //           if (
// //             typeof value ===
// //             "boolean"
// //           ) {
// //             payload.append(
// //               key,
// //               value
// //                 ? "true"
// //                 : "false"
// //             );
// //           } else if (
// //             value !== undefined &&
// //             value !== null
// //           ) {
// //             payload.append(
// //               key,
// //               value
// //             );
// //           }
// //         }
// //       );

// //       payload.append(
// //         "amenities",
// //         JSON.stringify(
// //           String(
// //             form.amenities || ""
// //           )
// //             .split(",")
// //             .map((item) =>
// //               item.trim()
// //             )
// //             .filter(Boolean)
// //         )
// //       );

// //       payload.append(
// //         "tags",
// //         JSON.stringify(
// //           String(form.tags || "")
// //             .split(",")
// //             .map((item) =>
// //               item.trim()
// //             )
// //             .filter(Boolean)
// //         )
// //       );

// //       payload.append(
// //         "existingImages",
// //         JSON.stringify(
// //           existingImages
// //         )
// //       );

// //       newImages.forEach(
// //         (file) => {
// //           payload.append(
// //             "images",
// //             file
// //           );
// //         }
// //       );

// //       if (floorPlan) {
// //         payload.append(
// //           "floorPlan",
// //           floorPlan
// //         );
// //       }

// //       if (reraCertificate) {
// //         payload.append(
// //           "reraCertificate",
// //           reraCertificate
// //         );
// //       }

// //       if (video) {
// //         payload.append(
// //           "video",
// //           video
// //         );
// //       }

// //       const response =
// //         await updatePropertyApi(
// //           property._id,
// //           payload
// //         );

// //       if (response?.success) {
// //         await Swal.fire({
// //           icon: "success",
// //           title: "Property Updated",
// //           text:
// //             response?.message ||
// //             "Property updated successfully.",
// //           confirmButtonColor: DARK,
// //         });

// //         await onUpdated();
// //       }
// //     } catch (error) {
// //       await Swal.fire({
// //         icon: "error",
// //         title: "Update Failed",
// //         text:
// //           error?.response?.data
// //             ?.message ||
// //           "Unable to update property.",
// //         confirmButtonColor: DARK,
// //       });
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   const inputClass =
// //     "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-50";

// //   return (
// //     <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5">
// //       <div className="flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
// //         {/* HEADER - NOT SCROLLING */}
// //         <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-6">
// //           <div>
// //             <div className="flex items-center gap-2">
// //               <FiEdit2 className="text-teal-600" />

// //               <h2 className="text-lg font-extrabold text-[#173c37]">
// //                 Edit Property
// //               </h2>
// //             </div>

// //             <p className="mt-1 text-[10px] text-slate-400">
// //               {property.propertyId} •
// //               Update details, images and documents
// //             </p>
// //           </div>

// //           <button
// //             type="button"
// //             onClick={onClose}
// //             className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
// //           >
// //             <FiX size={16} />
// //           </button>
// //         </div>

// //         <form
// //           onSubmit={handleSubmit}
// //           className="flex min-h-0 flex-1 flex-col"
// //         >
// //           {/* BODY - ONLY THIS SCROLLS */}
// //           <div
// //             className={`min-h-0 flex-1 overflow-y-auto bg-[#fbfcfc] p-4 sm:p-6 ${SCROLLBAR_HIDDEN}`}
// //           >
// //             <SectionCard
// //               title="Basic Information"
// //               subtitle="Core property information"
// //             >
// //               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
// //                 <EditField label="Title">
// //                   <input
// //                     className={
// //                       inputClass
// //                     }
// //                     value={
// //                       form.title || ""
// //                     }
// //                     onChange={(e) =>
// //                       setField(
// //                         "title",
// //                         e.target.value
// //                       )
// //                     }
// //                   />
// //                 </EditField>

// //                 <EditField label="Category">
// //                   <select
// //                     className={
// //                       inputClass
// //                     }
// //                     value={
// //                       form.category ||
// //                       ""
// //                     }
// //                     onChange={(e) =>
// //                       setField(
// //                         "category",
// //                         e.target.value
// //                       )
// //                     }
// //                   >
// //                     {[
// //                       "Residential",
// //                       "Commercial",
// //                       "Rental",
// //                       "Sell",
// //                       "Plot/Land",
// //                     ].map(
// //                       (item) => (
// //                         <option
// //                           key={item}
// //                         >
// //                           {item}
// //                         </option>
// //                       )
// //                     )}
// //                   </select>
// //                 </EditField>

// //                 <EditField label="Transaction">
// //                   <select
// //                     className={
// //                       inputClass
// //                     }
// //                     value={
// //                       form.transactionType ||
// //                       ""
// //                     }
// //                     onChange={(e) =>
// //                       setField(
// //                         "transactionType",
// //                         e.target.value
// //                       )
// //                     }
// //                   >
// //                     <option>
// //                       Sale
// //                     </option>
// //                     <option>
// //                       Rent
// //                     </option>
// //                   </select>
// //                 </EditField>

// //                 <EditField label="Price">
// //                   <input
// //                     className={
// //                       inputClass
// //                     }
// //                     value={
// //                       form.price || ""
// //                     }
// //                     onChange={(e) =>
// //                       setField(
// //                         "price",
// //                         e.target.value
// //                       )
// //                     }
// //                   />
// //                 </EditField>

// //                 <EditField label="Property Size">
// //                   <input
// //                     className={
// //                       inputClass
// //                     }
// //                     value={
// //                       form.propertySize ||
// //                       ""
// //                     }
// //                     onChange={(e) =>
// //                       setField(
// //                         "propertySize",
// //                         e.target.value
// //                       )
// //                     }
// //                   />
// //                 </EditField>

// //                 <EditField label="Size Unit">
// //                   <select
// //                     className={
// //                       inputClass
// //                     }
// //                     value={
// //                       form.sizeUnit ||
// //                       "sqft"
// //                     }
// //                     onChange={(e) =>
// //                       setField(
// //                         "sizeUnit",
// //                         e.target.value
// //                       )
// //                     }
// //                   >
// //                     {[
// //                       "sqft",
// //                       "sqyd",
// //                       "sqm",
// //                       "acre",
// //                       "bigha",
// //                     ].map(
// //                       (item) => (
// //                         <option
// //                           key={item}
// //                         >
// //                           {item}
// //                         </option>
// //                       )
// //                     )}
// //                   </select>
// //                 </EditField>
// //               </div>
// //             </SectionCard>

// //             <SectionCard
// //               title="Project & Location"
// //               subtitle="Project and map-related details"
// //             >
// //               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
// //                 {[
// //                   [
// //                     "projectName",
// //                     "Project Name",
// //                   ],
// //                   [
// //                     "developerName",
// //                     "Developer Name",
// //                   ],
// //                   ["city", "City"],
// //                   [
// //                     "locality",
// //                     "Locality",
// //                   ],
// //                   [
// //                     "pinCode",
// //                     "Pin Code",
// //                   ],
// //                   [
// //                     "address",
// //                     "Address",
// //                   ],
// //                   [
// //                     "latitude",
// //                     "Latitude",
// //                   ],
// //                   [
// //                     "longitude",
// //                     "Longitude",
// //                   ],
// //                 ].map(
// //                   ([name, label]) => (
// //                     <EditField
// //                       key={name}
// //                       label={label}
// //                     >
// //                       <input
// //                         className={
// //                           inputClass
// //                         }
// //                         value={
// //                           form[name] ??
// //                           ""
// //                         }
// //                         onChange={(
// //                           e
// //                         ) =>
// //                           setField(
// //                             name,
// //                             e.target
// //                               .value
// //                           )
// //                         }
// //                       />
// //                     </EditField>
// //                   )
// //                 )}
// //               </div>
// //             </SectionCard>

// //             <SectionCard
// //               title="Specifications"
// //               subtitle="Physical and pricing specifications"
// //             >
// //               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
// //                 {[
// //                   [
// //                     "maintenance",
// //                     "Maintenance",
// //                   ],
// //                   [
// //                     "bookingAmount",
// //                     "Booking Amount",
// //                   ],
// //                   [
// //                     "superBuiltupArea",
// //                     "Super Built-up Area",
// //                   ],
// //                   [
// //                     "carpetArea",
// //                     "Carpet Area",
// //                   ],
// //                   [
// //                     "bedrooms",
// //                     "Bedrooms",
// //                   ],
// //                   [
// //                     "bathrooms",
// //                     "Bathrooms",
// //                   ],
// //                   [
// //                     "balconies",
// //                     "Balconies",
// //                   ],
// //                   [
// //                     "parking",
// //                     "Parking",
// //                   ],
// //                   [
// //                     "floorNo",
// //                     "Floor No",
// //                   ],
// //                   [
// //                     "totalFloors",
// //                     "Total Floors",
// //                   ],
// //                   [
// //                     "facing",
// //                     "Facing",
// //                   ],
// //                   [
// //                     "furnishing",
// //                     "Furnishing",
// //                   ],
// //                 ].map(
// //                   ([name, label]) => (
// //                     <EditField
// //                       key={name}
// //                       label={label}
// //                     >
// //                       <input
// //                         className={
// //                           inputClass
// //                         }
// //                         value={
// //                           form[name] ??
// //                           ""
// //                         }
// //                         onChange={(
// //                           e
// //                         ) =>
// //                           setField(
// //                             name,
// //                             e.target
// //                               .value
// //                           )
// //                         }
// //                       />
// //                     </EditField>
// //                   )
// //                 )}

// //                 <EditField label="Negotiable">
// //                   <select
// //                     className={
// //                       inputClass
// //                     }
// //                     value={
// //                       form.negotiable
// //                         ? "true"
// //                         : "false"
// //                     }
// //                     onChange={(e) =>
// //                       setField(
// //                         "negotiable",
// //                         e.target
// //                           .value ===
// //                           "true"
// //                       )
// //                     }
// //                   >
// //                     <option value="false">
// //                       No
// //                     </option>
// //                     <option value="true">
// //                       Yes
// //                     </option>
// //                   </select>
// //                 </EditField>

// //                 <EditField label="Amenities (comma separated)">
// //                   <input
// //                     className={
// //                       inputClass
// //                     }
// //                     value={
// //                       form.amenities ||
// //                       ""
// //                     }
// //                     onChange={(e) =>
// //                       setField(
// //                         "amenities",
// //                         e.target.value
// //                       )
// //                     }
// //                   />
// //                 </EditField>

// //                 <EditField label="Tags (comma separated)">
// //                   <input
// //                     className={
// //                       inputClass
// //                     }
// //                     value={
// //                       form.tags || ""
// //                     }
// //                     onChange={(e) =>
// //                       setField(
// //                         "tags",
// //                         e.target.value
// //                       )
// //                     }
// //                   />
// //                 </EditField>

// //                 <div className="md:col-span-2 lg:col-span-3">
// //                   <EditField label="Description">
// //                     <textarea
// //                       rows={4}
// //                       className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-50"
// //                       value={
// //                         form.description ||
// //                         ""
// //                       }
// //                       onChange={(e) =>
// //                         setField(
// //                           "description",
// //                           e.target
// //                             .value
// //                         )
// //                       }
// //                     />
// //                   </EditField>
// //                 </div>
// //               </div>
// //             </SectionCard>

// //             <SectionCard
// //               title="Media & Documents"
// //               subtitle="Manage listing images and documents"
// //             >
// //               <div>
// //                 <p className="text-xs font-bold text-slate-700">
// //                   Existing Images
// //                 </p>

// //                 <div
// //                   className={`mt-3 flex gap-3 overflow-x-auto pb-1 ${SCROLLBAR_HIDDEN}`}
// //                 >
// //                   {existingImages.length ? (
// //                     existingImages.map(
// //                       (
// //                         image,
// //                         index
// //                       ) => (
// //                         <div
// //                           key={
// //                             image?.public_id ||
// //                             index
// //                           }
// //                           className="relative shrink-0"
// //                         >
// //                           <img
// //                             src={
// //                               image?.url
// //                             }
// //                             alt=""
// //                             className="h-24 w-32 rounded-xl border border-slate-200 object-cover"
// //                           />

// //                           <button
// //                             type="button"
// //                             onClick={() =>
// //                               removeExistingImage(
// //                                 index
// //                               )
// //                             }
// //                             className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-md"
// //                           >
// //                             <FiX
// //                               size={
// //                                 12
// //                               }
// //                             />
// //                           </button>
// //                         </div>
// //                       )
// //                     )
// //                   ) : (
// //                     <p className="text-[10px] text-slate-400">
// //                       No existing
// //                       images.
// //                     </p>
// //                   )}
// //                 </div>
// //               </div>

// //               <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
// //                 <UploadCard
// //                   icon={<FiImage />}
// //                   label="Add Images"
// //                   text={
// //                     newImages.length
// //                       ? `${newImages.length} selected`
// //                       : "Multiple images"
// //                   }
// //                 >
// //                   <input
// //                     type="file"
// //                     multiple
// //                     accept="image/*"
// //                     onChange={(e) =>
// //                       setNewImages(
// //                         Array.from(
// //                           e.target
// //                             .files || []
// //                         )
// //                       )
// //                     }
// //                     className="mt-3 block w-full text-[10px] text-slate-500"
// //                   />
// //                 </UploadCard>

// //                 <UploadCard
// //                   icon={
// //                     <FiFileText />
// //                   }
// //                   label="Floor Plan"
// //                   text={
// //                     floorPlan?.name ||
// //                     "Replace file"
// //                   }
// //                 >
// //                   <input
// //                     type="file"
// //                     onChange={(e) =>
// //                       setFloorPlan(
// //                         e.target
// //                           .files?.[0] ||
// //                           null
// //                       )
// //                     }
// //                     className="mt-3 block w-full text-[10px] text-slate-500"
// //                   />
// //                 </UploadCard>

// //                 <UploadCard
// //                   icon={
// //                     <FiFileText />
// //                   }
// //                   label="RERA"
// //                   text={
// //                     reraCertificate?.name ||
// //                     "Replace certificate"
// //                   }
// //                 >
// //                   <input
// //                     type="file"
// //                     onChange={(e) =>
// //                       setReraCertificate(
// //                         e.target
// //                           .files?.[0] ||
// //                           null
// //                       )
// //                     }
// //                     className="mt-3 block w-full text-[10px] text-slate-500"
// //                   />
// //                 </UploadCard>

// //                 <UploadCard
// //                   icon={<FiVideo />}
// //                   label="Video"
// //                   text={
// //                     video?.name ||
// //                     "Upload walkthrough"
// //                   }
// //                 >
// //                   <input
// //                     type="file"
// //                     accept="video/*"
// //                     onChange={(e) =>
// //                       setVideo(
// //                         e.target
// //                           .files?.[0] ||
// //                           null
// //                       )
// //                     }
// //                     className="mt-3 block w-full text-[10px] text-slate-500"
// //                   />
// //                 </UploadCard>
// //               </div>
// //             </SectionCard>
// //           </div>

// //           {/* FOOTER - ALWAYS VISIBLE */}
// //           <div className="flex shrink-0 items-center justify-end gap-2 border-t border-slate-100 bg-white px-5 py-3 sm:px-6">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="h-10 rounded-xl border border-slate-200 px-5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
// //             >
// //               Cancel
// //             </button>

// //             <button
// //               type="submit"
// //               disabled={saving}
// //               className="h-10 rounded-xl bg-[#0d2d2a] px-6 text-xs font-bold text-white transition hover:bg-[#123b36] disabled:opacity-50"
// //             >
// //               {saving
// //                 ? "Updating..."
// //                 : "Update Property"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // function EditField({
// //   label,
// //   children,
// // }) {
// //   return (
// //     <label className="block">
// //       <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-400">
// //         {label}
// //       </span>
// //       {children}
// //     </label>
// //   );
// // }

// // function SectionCard({
// //   title,
// //   subtitle,
// //   children,
// // }) {
// //   return (
// //     <section className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
// //       <div className="mb-4">
// //         <h3 className="text-sm font-extrabold text-[#173c37]">
// //           {title}
// //         </h3>
// //         <p className="mt-0.5 text-[10px] text-slate-400">
// //           {subtitle}
// //         </p>
// //       </div>

// //       {children}
// //     </section>
// //   );
// // }

// // function UploadCard({
// //   icon,
// //   label,
// //   text,
// //   children,
// // }) {
// //   return (
// //     <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
// //       <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm">
// //         {icon}
// //       </div>

// //       <p className="mt-3 text-xs font-bold text-slate-700">
// //         {label}
// //       </p>

// //       <p className="mt-1 truncate text-[9px] text-slate-400">
// //         {text}
// //       </p>

// //       {children}
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    PROPERTY PREVIEW
// // ========================================================= */

// // function PropertyPreview({
// //   open,
// //   property,
// //   onClose,
// // }) {
// //   const [
// //     selectedImage,
// //     setSelectedImage,
// //   ] = useState(0);

// //   useBodyScrollLock(open);

// //   useEffect(() => {
// //     setSelectedImage(0);
// //   }, [property]);

// //   if (!open || !property)
// //     return null;

// //   const images =
// //     property.images?.length
// //       ? property.images
// //       : [
// //           {
// //             url: "https://via.placeholder.com/1200x700",
// //           },
// //         ];

// //   const previousImage = () =>
// //     setSelectedImage((prev) =>
// //       prev === 0
// //         ? images.length - 1
// //         : prev - 1
// //     );

// //   const nextImage = () =>
// //     setSelectedImage((prev) =>
// //       prev === images.length - 1
// //         ? 0
// //         : prev + 1
// //     );

// //   return (
// //     <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/65 p-3 backdrop-blur-sm sm:p-5">
// //       <div className="flex h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
// //         {/* STICKY HEADER */}
// //         <header className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-6">
// //           <div className="min-w-0">
// //             <div className="flex flex-wrap items-center gap-2">
// //               <h2 className="truncate text-lg font-extrabold text-[#173c37] sm:text-xl">
// //                 {property.title}
// //               </h2>

// //               <StatusBadge
// //                 status={property.status}
// //               />
// //             </div>

// //             <div className="mt-1 flex items-center gap-1.5 text-[10px] text-slate-400">
// //               <FiMapPin />
// //               <span className="truncate">
// //                 {[
// //                   property.locality,
// //                   property.city,
// //                 ]
// //                   .filter(Boolean)
// //                   .join(", ") || "Location not available"}
// //               </span>
// //             </div>
// //           </div>

// //           <button
// //             onClick={onClose}
// //             className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
// //           >
// //             <FiX size={16} />
// //           </button>
// //         </header>

// //         {/* ONLY CONTENT AREA SCROLLS */}
// //         <div
// //           className={`min-h-0 flex-1 overflow-y-auto bg-[#f8faf9] ${SCROLLBAR_HIDDEN}`}
// //         >
// //           <div className="p-4 sm:p-6">
// //             {/* HERO */}
// //             <section className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)]">
// //               <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
// //                 <div className="relative overflow-hidden rounded-xl bg-slate-100">
// //                   <img
// //                     src={
// //                       images[
// //                         selectedImage
// //                       ]?.url
// //                     }
// //                     alt={
// //                       property.title
// //                     }
// //                     className="h-[300px] w-full object-cover sm:h-[420px]"
// //                   />

// //                   {images.length > 1 && (
// //                     <>
// //                       <button
// //                         onClick={
// //                           previousImage
// //                         }
// //                         className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow"
// //                       >
// //                         <FiChevronLeft />
// //                       </button>

// //                       <button
// //                         onClick={
// //                           nextImage
// //                         }
// //                         className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow"
// //                       >
// //                         <FiChevronRight />
// //                       </button>
// //                     </>
// //                   )}

// //                   <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white">
// //                     {selectedImage + 1} /{" "}
// //                     {images.length}
// //                   </div>
// //                 </div>

// //                 {images.length > 1 && (
// //                   <div
// //                     className={`mt-3 flex gap-2 overflow-x-auto ${SCROLLBAR_HIDDEN}`}
// //                   >
// //                     {images.map(
// //                       (
// //                         image,
// //                         index
// //                       ) => (
// //                         <button
// //                           key={
// //                             image?.public_id ||
// //                             index
// //                           }
// //                           onClick={() =>
// //                             setSelectedImage(
// //                               index
// //                             )
// //                           }
// //                           className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
// //                             selectedImage ===
// //                             index
// //                               ? "border-teal-500"
// //                               : "border-transparent"
// //                           }`}
// //                         >
// //                           <img
// //                             src={
// //                               image.url
// //                             }
// //                             alt=""
// //                             className="h-16 w-20 object-cover"
// //                           />
// //                         </button>
// //                       )
// //                     )}
// //                   </div>
// //                 )}
// //               </div>

// //               <div className="space-y-4">
// //                 <div className="rounded-2xl bg-[#0d2d2a] p-5 text-white shadow-sm">
// //                   <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
// //                     Market Price
// //                   </p>

// //                   <h3 className="mt-2 text-2xl font-extrabold">
// //                     {formatCurrency(
// //                       property.price
// //                     )}
// //                   </h3>

// //                   <p className="mt-1 text-xs text-white/60">
// //                     {property.pricePerSqft
// //                       ? `${formatCurrency(
// //                           property.pricePerSqft
// //                         )} / Sq.Ft`
// //                       : "Price per sq.ft unavailable"}
// //                   </p>

// //                   <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
// //                     <PreviewRow
// //                       label="Property ID"
// //                       value={
// //                         property.propertyId
// //                       }
// //                     />
// //                     <PreviewRow
// //                       label="Category"
// //                       value={
// //                         property.category
// //                       }
// //                     />
// //                     <PreviewRow
// //                       label="Transaction"
// //                       value={
// //                         property.transactionType
// //                       }
// //                     />
// //                     <PreviewRow
// //                       label="Project"
// //                       value={
// //                         property.projectName
// //                       }
// //                     />
// //                     <PreviewRow
// //                       label="Developer"
// //                       value={
// //                         property.developerName
// //                       }
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
// //                   <div className="flex items-center gap-3">
// //                     <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
// //                       <MdOutlinePhotoLibrary
// //                         size={18}
// //                       />
// //                     </div>

// //                     <div>
// //                       <p className="text-xs font-bold text-slate-700">
// //                         {images.length} Property Images
// //                       </p>
// //                       <p className="mt-0.5 text-[9px] text-slate-400">
// //                         High resolution gallery
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </section>

// //             {/* QUICK STATS */}
// //             <section className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
// //               <PropertyStat
// //                 label="Bedrooms"
// //                 value={
// //                   property.bedrooms ||
// //                   "-"
// //                 }
// //               />
// //               <PropertyStat
// //                 label="Bathrooms"
// //                 value={
// //                   property.bathrooms ||
// //                   "-"
// //                 }
// //               />
// //               <PropertyStat
// //                 label="Balconies"
// //                 value={
// //                   property.balconies ||
// //                   "-"
// //                 }
// //               />
// //               <PropertyStat
// //                 label="Parking"
// //                 value={
// //                   property.parking ||
// //                   "-"
// //                 }
// //               />
// //             </section>

// //             {/* DETAILS */}
// //             <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.6fr)]">
// //               <div className="space-y-4">
// //                 <InfoPanel
// //                   title="Property Details"
// //                   icon={<FiHome />}
// //                 >
// //                   <div className="grid gap-x-8 md:grid-cols-2">
// //                     <DetailItem
// //                       label="Property ID"
// //                       value={
// //                         property.propertyId
// //                       }
// //                     />
// //                     <DetailItem
// //                       label="Category"
// //                       value={
// //                         property.category
// //                       }
// //                     />
// //                     <DetailItem
// //                       label="Transaction"
// //                       value={
// //                         property.transactionType
// //                       }
// //                     />
// //                     <DetailItem
// //                       label="Status"
// //                       value={formatStatus(
// //                         property.status
// //                       )}
// //                     />
// //                     <DetailItem
// //                       label="Project"
// //                       value={
// //                         property.projectName
// //                       }
// //                     />
// //                     <DetailItem
// //                       label="Developer"
// //                       value={
// //                         property.developerName
// //                       }
// //                     />
// //                     <DetailItem
// //                       label="Facing"
// //                       value={
// //                         property.facing
// //                       }
// //                     />
// //                     <DetailItem
// //                       label="Furnishing"
// //                       value={
// //                         property.furnishing
// //                       }
// //                     />
// //                     <DetailItem
// //                       label="Floor"
// //                       value={
// //                         property.floorNo
// //                       }
// //                     />
// //                     <DetailItem
// //                       label="Total Floors"
// //                       value={
// //                         property.totalFloors
// //                       }
// //                     />
// //                   </div>
// //                 </InfoPanel>

// //                 <InfoPanel
// //                   title="Description"
// //                   icon={
// //                     <FiFileText />
// //                   }
// //                 >
// //                   <p className="text-xs leading-6 text-slate-500">
// //                     {property.description ||
// //                       "No description added."}
// //                   </p>
// //                 </InfoPanel>

// //                 <InfoPanel
// //                   title="Property Location"
// //                   icon={
// //                     <FiNavigation />
// //                   }
// //                 >
// //                   <div className="grid gap-4 lg:grid-cols-2">
// //                     <div>
// //                       <DetailItem
// //                         label="Address"
// //                         value={
// //                           property.address
// //                         }
// //                       />
// //                       <DetailItem
// //                         label="City"
// //                         value={
// //                           property.city
// //                         }
// //                       />
// //                       <DetailItem
// //                         label="Locality"
// //                         value={
// //                           property.locality
// //                         }
// //                       />
// //                       <DetailItem
// //                         label="Pincode"
// //                         value={
// //                           property.pinCode
// //                         }
// //                       />
// //                       <DetailItem
// //                         label="Latitude"
// //                         value={
// //                           property.latitude
// //                         }
// //                       />
// //                       <DetailItem
// //                         label="Longitude"
// //                         value={
// //                           property.longitude
// //                         }
// //                       />
// //                     </div>

// //                     <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
// //                       {property.latitude &&
// //                       property.longitude ? (
// //                         <iframe
// //                           title="map"
// //                           width="100%"
// //                           height="280"
// //                           loading="lazy"
// //                           src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
// //                         />
// //                       ) : (
// //                         <div className="flex h-[280px] items-center justify-center text-[10px] text-slate-400">
// //                           No location available
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </InfoPanel>

// //                 <InfoPanel
// //                   title="Amenities"
// //                   icon={<FiGrid />}
// //                 >
// //                   {property.amenities
// //                     ?.length ? (
// //                     <div className="flex flex-wrap gap-2">
// //                       {property.amenities.map(
// //                         (
// //                           item,
// //                           index
// //                         ) => (
// //                           <span
// //                             key={
// //                               index
// //                             }
// //                             className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-[10px] font-semibold text-teal-700"
// //                           >
// //                             {item}
// //                           </span>
// //                         )
// //                       )}
// //                     </div>
// //                   ) : (
// //                     <p className="text-[10px] text-slate-400">
// //                       No amenities added.
// //                     </p>
// //                   )}
// //                 </InfoPanel>
// //               </div>

// //               <div className="space-y-4">
// //                 <InfoPanel
// //                   title="Pricing"
// //                   icon={
// //                     <FiDollarSign />
// //                   }
// //                 >
// //                   <DetailItem
// //                     label="Property Price"
// //                     value={formatCurrency(
// //                       property.price
// //                     )}
// //                   />
// //                   <DetailItem
// //                     label="Price / Sq.Ft"
// //                     value={
// //                       property.pricePerSqft
// //                         ? formatCurrency(
// //                             property.pricePerSqft
// //                           )
// //                         : "-"
// //                     }
// //                   />
// //                   <DetailItem
// //                     label="Maintenance"
// //                     value={formatCurrency(
// //                       property.maintenance
// //                     )}
// //                   />
// //                   <DetailItem
// //                     label="Booking Amount"
// //                     value={formatCurrency(
// //                       property.bookingAmount
// //                     )}
// //                   />
// //                   <DetailItem
// //                     label="Negotiable"
// //                     value={
// //                       property.negotiable
// //                         ? "Yes"
// //                         : "No"
// //                     }
// //                   />
// //                 </InfoPanel>

// //                 <InfoPanel
// //                   title="Area"
// //                   icon={
// //                     <FiMaximize2 />
// //                   }
// //                 >
// //                   <DetailItem
// //                     label="Property Size"
// //                     value={`${
// //                       property.propertySize ||
// //                       "-"
// //                     } ${
// //                       property.sizeUnit ||
// //                       ""
// //                     }`}
// //                   />
// //                   <DetailItem
// //                     label="Super Built-up"
// //                     value={
// //                       property.superBuiltupArea
// //                         ? `${property.superBuiltupArea} Sq.Ft`
// //                         : "-"
// //                     }
// //                   />
// //                   <DetailItem
// //                     label="Carpet Area"
// //                     value={
// //                       property.carpetArea
// //                         ? `${property.carpetArea} Sq.Ft`
// //                         : "-"
// //                     }
// //                   />
// //                 </InfoPanel>

// //                 <InfoPanel
// //                   title="Documents"
// //                   icon={
// //                     <FiFileText />
// //                   }
// //                 >
// //                   <div className="space-y-2">
// //                     {property.floorPlan && (
// //                       <a
// //                         href={
// //                           property.floorPlan
// //                         }
// //                         target="_blank"
// //                         rel="noreferrer"
// //                         className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-[10px] font-semibold text-slate-600 transition hover:border-teal-200 hover:bg-teal-50"
// //                       >
// //                         Floor Plan
// //                         <FiFileText />
// //                       </a>
// //                     )}

// //                     {property.reraCertificate && (
// //                       <a
// //                         href={
// //                           property.reraCertificate
// //                         }
// //                         target="_blank"
// //                         rel="noreferrer"
// //                         className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-[10px] font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50"
// //                       >
// //                         RERA Certificate
// //                         <FiFileText />
// //                       </a>
// //                     )}

// //                     {!property.floorPlan &&
// //                       !property.reraCertificate && (
// //                         <p className="text-[10px] text-slate-400">
// //                           No documents uploaded.
// //                         </p>
// //                       )}
// //                   </div>
// //                 </InfoPanel>

// //                 {(property.videoLink ||
// //                   property.video) && (
// //                   <InfoPanel
// //                     title="Walkthrough"
// //                     icon={<FiVideo />}
// //                   >
// //                     <video
// //                       controls
// //                       className="w-full rounded-xl"
// //                       src={
// //                         property.videoLink ||
// //                         property.video
// //                       }
// //                     />
// //                   </InfoPanel>
// //                 )}
// //               </div>
// //             </section>

// //             {property.tags?.length >
// //               0 && (
// //               <InfoPanel
// //                 title="Intelligence Tags"
// //                 icon={
// //                   <MdOutlineAutoAwesome />
// //                 }
// //                 className="mt-4"
// //               >
// //                 <div className="flex flex-wrap gap-2">
// //                   {property.tags.map(
// //                     (tag, index) => (
// //                       <span
// //                         key={index}
// //                         className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700"
// //                       >
// //                         #{tag}
// //                       </span>
// //                     )
// //                   )}
// //                 </div>
// //               </InfoPanel>
// //             )}

// //             <div className="h-4" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function PreviewRow({
// //   label,
// //   value,
// // }) {
// //   return (
// //     <div className="flex items-center justify-between gap-4">
// //       <span className="text-[10px] text-white/55">
// //         {label}
// //       </span>
// //       <span className="max-w-[60%] truncate text-right text-[10px] font-bold text-white">
// //         {value || "-"}
// //       </span>
// //     </div>
// //   );
// // }

// // function PropertyStat({
// //   label,
// //   value,
// // }) {
// //   return (
// //     <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
// //       <p className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
// //         {label}
// //       </p>
// //       <p className="mt-2 text-lg font-extrabold text-[#173c37]">
// //         {value || "-"}
// //       </p>
// //     </div>
// //   );
// // }

// // function InfoPanel({
// //   title,
// //   icon,
// //   children,
// //   className = "",
// // }) {
// //   return (
// //     <section
// //       className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 ${className}`}
// //     >
// //       <div className="mb-4 flex items-center gap-2">
// //         <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
// //           {icon}
// //         </div>
// //         <h3 className="text-sm font-extrabold text-[#173c37]">
// //           {title}
// //         </h3>
// //       </div>

// //       {children}
// //     </section>
// //   );
// // }

// // function DetailItem({
// //   label,
// //   value,
// // }) {
// //   return (
// //     <div className="flex items-start justify-between gap-4 border-b border-slate-100 py-2.5 last:border-b-0">
// //       <span className="text-[10px] text-slate-400">
// //         {label}
// //       </span>
// //       <span className="max-w-[60%] break-words text-right text-[10px] font-bold text-slate-700">
// //         {value === 0
// //           ? 0
// //           : value || "-"}
// //       </span>
// //     </div>
// //   );
// // }



// import { useEffect, useMemo, useState } from "react";
// import {
//   useNavigate,
//   useParams,
// } from "react-router-dom";
// import {
//   getAllPropertiesApi,
//   getPropertyByIdApi,
//   deletePropertyApi,
//   updatePropertyApi,
//   updatePropertyStatusApi,
// } from "../../../Services/propertyService";
// import {
//   FiFilter,
//   FiUpload,
//   FiEye,
//   FiEdit2,
//   FiChevronDown,
//   FiChevronUp,
//   FiInfo,
//   FiTrash2,
//   FiX,
//   FiMapPin,
//   FiChevronLeft,
//   FiChevronRight,
//   FiSearch,
//   FiHome,
//   FiUser,
//   FiCheckCircle,
//   FiClock,
//   FiGrid,
//   FiImage,
//   FiFileText,
//   FiVideo,
//   FiDollarSign,
//   FiMaximize2,
//   FiNavigation,
// } from "react-icons/fi";

// import {
//   MdOutlineCheckCircle,
//   MdOutlineAutoAwesome,
//   MdTrendingUp,
//   MdVerified,
//   MdOutlinePhotoLibrary,
// } from "react-icons/md";

// import { BsRobot } from "react-icons/bs";
// import Swal from "sweetalert2";

// const DARK = "#0d2d2a";
// const ACCENT = "#0f8f79";

// const SCROLLBAR_HIDDEN =
//   "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

// /* =========================================================
//    HELPERS
// ========================================================= */

// const formatCurrency = (value) =>
//   `₹ ${Number(value || 0).toLocaleString("en-IN")}`;

// const formatStatus = (value) =>
//   String(value || "-").replaceAll("_", " ");

// function StatusBadge({ status }) {
//   const styles = {
//     Draft: "bg-gray-50 text-gray-600 border-gray-200",
//     Submitted: "bg-blue-50 text-blue-700 border-blue-200",
//     Assigned_To_Partner:
//       "bg-cyan-50 text-cyan-700 border-cyan-200",
//     Reviewing:
//       "bg-amber-50 text-amber-700 border-amber-200",
//     Verified:
//       "bg-emerald-50 text-emerald-700 border-emerald-200",
//     Live:
//       "bg-green-50 text-green-700 border-green-200",
//     Rejected:
//       "bg-red-50 text-red-700 border-red-200",
//     Sold:
//       "bg-purple-50 text-purple-700 border-purple-200",
//     Rented:
//       "bg-indigo-50 text-indigo-700 border-indigo-200",
//   };

//   return (
//     <span
//       className={`inline-flex max-w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-full border px-1.5 py-1 text-[8px] font-bold sm:px-2 sm:text-[9px] lg:px-2.5 lg:text-[10px] ${
//         styles[status] || "bg-gray-50 text-gray-600 border-gray-200"
//       }`}
//     >
//       {formatStatus(status)}
//     </span>
//   );
// }

// function CreatorBadge({ role }) {
//   const styles = {
//     Admin: "bg-blue-50 text-blue-700",
//     Partner: "bg-teal-50 text-teal-700",
//     Seller: "bg-orange-50 text-orange-700",
//   };

//   return (
//     <span
//       className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold ${
//         styles[role] || "bg-gray-100 text-gray-600"
//       }`}
//     >
//       {role || "Unknown"}
//     </span>
//   );
// }


// /* =========================================================
//    CUSTOM HOVER TOOLTIP
// ========================================================= */

// function HoverTooltip({
//   children,
//   text,
//   position = "top",
//   className = "",
// }) {
//   if (!text) {
//     return children;
//   }

//   const positions = {
//     top:
//       "bottom-full left-1/2 -translate-x-1/2 mb-2",
//     bottom:
//       "top-full left-1/2 -translate-x-1/2 mt-2",
//     left:
//       "right-full top-1/2 -translate-y-1/2 mr-2",
//     right:
//       "left-full top-1/2 -translate-y-1/2 ml-2",
//   };

//   const arrows = {
//     top:
//       "left-1/2 top-full -translate-x-1/2 border-x-[6px] border-x-transparent border-t-[6px] border-t-[#173c37]",
//     bottom:
//       "left-1/2 bottom-full -translate-x-1/2 border-x-[6px] border-x-transparent border-b-[6px] border-b-[#173c37]",
//     left:
//       "left-full top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-[#173c37]",
//     right:
//       "right-full top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-r-[6px] border-r-[#173c37]",
//   };

//   return (
//     <div
//       className={`group/tooltip relative min-w-0 ${className}`}
//     >
//       {children}

//       <div
//         className={`
//           pointer-events-none
//           absolute
//           ${positions[position]}
//           z-[99999]
//           invisible
//           w-max
//           max-w-[300px]
//           translate-y-1
//           rounded-xl
//           bg-[#173c37]
//           px-3
//           py-2
//           text-[10px]
//           font-semibold
//           leading-4
//           text-white
//           opacity-0
//           shadow-[0_10px_30px_rgba(15,23,42,0.25)]
//           transition-all
//           duration-150
//           group-hover/tooltip:visible
//           group-hover/tooltip:translate-y-0
//           group-hover/tooltip:opacity-100
//         `}
//       >
//         <span className="block break-words">
//           {text}
//         </span>

//         <span
//           className={`absolute h-0 w-0 ${arrows[position]}`}
//         />
//       </div>
//     </div>
//   );
// }

// function useBodyScrollLock(locked) {
//   useEffect(() => {
//     if (!locked) return;

//     const oldOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = oldOverflow;
//     };
//   }, [locked]);
// }

// /* =========================================================
//    AI ASSISTANT
// ========================================================= */

// function AIAssistant({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="fixed bottom-20 right-4 z-50 w-[calc(100vw-2rem)] max-w-[370px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:right-6">
//       <div className="flex items-center justify-between border-b border-slate-100 bg-[#f0faf8] px-4 py-3">
//         <div className="flex items-center gap-2.5">
//           <div
//             className="flex h-8 w-8 items-center justify-center rounded-full text-white"
//             style={{ backgroundColor: DARK }}
//           >
//             <BsRobot size={16} />
//           </div>

//           <div>
//             <p className="text-xs font-extrabold text-[#183d38]">
//               AI Property Assistant
//             </p>
//             <p className="text-[9px] text-slate-400">
//               Smart listing workflows
//             </p>
//           </div>
//         </div>

//         <button
//           onClick={onClose}
//           className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white hover:text-slate-700"
//         >
//           <FiX size={15} />
//         </button>
//       </div>

//       <div className="space-y-3 p-4">
//         <p className="text-[11px] leading-5 text-slate-500">
//           Select a property to unlock AI assisted listing workflows.
//         </p>

//         <button className="flex w-full items-center justify-between rounded-xl bg-emerald-600 px-4 py-3 text-xs font-semibold text-white transition hover:bg-emerald-700">
//           Generate Description
//           <MdOutlineAutoAwesome size={16} />
//         </button>

//         <button className="flex w-full items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100">
//           Suggest Price
//           <MdTrendingUp size={16} />
//         </button>

//         <div className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-3 py-3">
//           <FiInfo
//             size={14}
//             className="mt-0.5 shrink-0 text-slate-400"
//           />
//           <p className="text-[10px] leading-4 text-slate-500">
//             DIGINIWAS AI can help optimize descriptions, pricing,
//             positioning and lead capture.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN PAGE
// ========================================================= */

// export default function PropertyManagement() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [chatOpen, setChatOpen] = useState(false);

//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [selectedProperty, setSelectedProperty] = useState(null);

//   useEffect(() => {
//     if (!id) return;

//     let cancelled = false;

//     const openPropertyFromRoute = async () => {
//       try {
//         const response = await getPropertyByIdApi(id);

//         if (cancelled) return;

//         if (response?.success && response?.data) {
//           setSelectedProperty(response.data);
//           setPreviewOpen(true);
//         } else {
//           throw new Error("Property details were not returned by the API.");
//         }
//       } catch (error) {
//         if (cancelled) return;

//         console.error("Property Detail Error:", error);

//         await Swal.fire({
//           icon: "error",
//           title: "Property Not Found",
//           text:
//             error?.response?.data?.message ||
//             error?.message ||
//             "Unable to load property details.",
//           confirmButtonColor: DARK,
//         });

//         navigate("/property-management", { replace: true });
//       }
//     };

//     openPropertyFromRoute();

//     return () => {
//       cancelled = true;
//     };
//   }, [id, navigate]);

//   const [editOpen, setEditOpen] = useState(false);
//   const [editingProperty, setEditingProperty] = useState(null);

//   const [selectedRole, setSelectedRole] = useState("All");
//   const [selectedStatus, setSelectedStatus] = useState("All");
//   const [selectedCity, setSelectedCity] = useState("All");
//   const [search, setSearch] = useState("");
//   const [filterOpen, setFilterOpen] = useState(false);

//   const [counts, setCounts] = useState({
//     all: 0,
//     admin: 0,
//     partner: 0,
//     seller: 0,
//   });

//   const statusOptions = [
//     "All",
//     "Submitted",
//     "Assigned_To_Partner",
//     "Reviewing",
//     "Verified",
//     "Live",
//     "Rejected",
//     "Sold",
//     "Rented",
//   ];

//   /* =========================================================
//      FETCH
//   ========================================================= */

//   const getProperties = async () => {
//     try {
//       setLoading(true);

//       const response = await getAllPropertiesApi({
//         role: selectedRole === "All" ? "" : selectedRole,
//         status: selectedStatus === "All" ? "" : selectedStatus,
//         city: selectedCity === "All" ? "" : selectedCity,
//         search: search.trim(),
//       });

//       if (response?.success) {
//         const apiProperties = Array.isArray(response?.data)
//           ? response.data
//           : [];

//         // Draft must never show in admin Property Management.
//         const visibleProperties = apiProperties.filter(
//           (item) =>
//             String(item?.status || "")
//               .trim()
//               .toLowerCase() !== "draft"
//         );

//         setProperties(visibleProperties);

//         // Prefer backend counts if available.
//         // If backend still includes Draft in counts, list remains safe.
//         setCounts({
//           all: response?.counts?.all || visibleProperties.length,
//           admin:
//             response?.counts?.admin ||
//             visibleProperties.filter(
//               (p) => p?.addedBy?.role === "Admin"
//             ).length,
//           partner:
//             response?.counts?.partner ||
//             visibleProperties.filter(
//               (p) => p?.addedBy?.role === "Partner"
//             ).length,
//           seller:
//             response?.counts?.seller ||
//             visibleProperties.filter(
//               (p) => p?.addedBy?.role === "Seller"
//             ).length,
//         });
//       } else {
//         setProperties([]);
//       }
//     } catch (error) {
//       console.error(
//         "GET PROPERTIES ERROR:",
//         error?.response?.data || error
//       );
//       setProperties([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       getProperties();
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [
//     selectedRole,
//     selectedStatus,
//     selectedCity,
//     search,
//   ]);

//   const cityOptions = useMemo(
//     () => [
//       "All",
//       ...Array.from(
//         new Set(
//           properties
//             .map((item) => item?.city)
//             .filter(Boolean)
//         )
//       ).sort(),
//     ],
//     [properties]
//   );

//   const roleTabs = [
//     { label: "All", count: counts.all, icon: FiGrid },
//     { label: "Admin", count: counts.admin, icon: FiUser },
//     { label: "Partner", count: counts.partner, icon: FiCheckCircle },
//     { label: "Seller", count: counts.seller, icon: FiHome },
//   ];

//   const filteredSummary = useMemo(() => {
//     return {
//       verified: properties.filter(
//         (p) => p.status === "Verified"
//       ).length,
//       live: properties.filter(
//         (p) => p.status === "Live"
//       ).length,
//       reviewing: properties.filter(
//         (p) =>
//           p.status === "Reviewing" ||
//           p.status === "Assigned_To_Partner"
//       ).length,
//     };
//   }, [properties]);

//   /* =========================================================
//      ACTIONS
//   ========================================================= */

//   const handleDeleteProperty = async (id) => {
//     const property = properties.find(
//       (item) => item?._id === id
//     );

//     const result = await Swal.fire({
//       icon: "warning",
//       title: "Delete Property?",
//       html: `
//         <div style="font-size:13px;color:#64748b;line-height:1.6">
//           Are you sure you want to delete
//           <strong style="color:#0d2d2a">
//             ${property?.title || "this property"}
//           </strong>
//           ${
//             property?.propertyId
//               ? `(${property.propertyId})`
//               : ""
//           }?
//           <br/>
//           <span style="color:#dc2626;font-weight:600">
//             This action cannot be undone.
//           </span>
//         </div>
//       `,
//       showCancelButton: true,
//       confirmButtonText: "Yes, Delete",
//       cancelButtonText: "Cancel",
//       confirmButtonColor: "#dc2626",
//       cancelButtonColor: "#64748b",
//       reverseButtons: true,
//     });

//     if (!result.isConfirmed) return;

//     try {
//       const response =
//         await deletePropertyApi(id);

//       if (response?.success) {
//         await Swal.fire({
//           icon: "success",
//           title: "Property Deleted",
//           text:
//             response?.message ||
//             "Property deleted successfully.",
//           confirmButtonColor: DARK,
//         });

//         await getProperties();
//       }
//     } catch (error) {
//       await Swal.fire({
//         icon: "error",
//         title: "Delete Failed",
//         text:
//           error?.response?.data?.message ||
//           "Unable to delete property.",
//         confirmButtonColor: DARK,
//       });
//     }
//   };

//   const handleVerifyProperty = async (property) => {
//     if (property?.status === "Verified") {
//       await Swal.fire({
//         icon: "info",
//         title: "Already Verified",
//         text: "This property is already verified.",
//         confirmButtonColor: DARK,
//       });

//       return;
//     }

//     const result = await Swal.fire({
//       icon: "question",
//       title: "Verify Property?",
//       html: `
//         <div style="font-size:13px;color:#64748b;line-height:1.6">
//           Verify
//           <strong style="color:#0d2d2a">
//             ${property?.title || "this property"}
//           </strong>
//           ${
//             property?.propertyId
//               ? `(${property.propertyId})`
//               : ""
//           }?
//           <br/>
//           Status will be changed to
//           <strong style="color:#059669">Verified</strong>.
//         </div>
//       `,
//       showCancelButton: true,
//       confirmButtonText: "Yes, Verify",
//       cancelButtonText: "Cancel",
//       confirmButtonColor: "#059669",
//       cancelButtonColor: "#64748b",
//       reverseButtons: true,
//     });

//     if (!result.isConfirmed) return;

//     try {
//       const response =
//         await updatePropertyStatusApi(
//           property._id,
//           {
//             status: "Verified",
//             notes:
//               "Property verified by admin from Property Management.",
//           }
//         );

//       if (response?.success) {
//         await Swal.fire({
//           icon: "success",
//           title: "Property Verified",
//           text:
//             response?.message ||
//             "Property verified successfully.",
//           confirmButtonColor: "#059669",
//         });

//         await getProperties();
//       }
//     } catch (error) {
//       await Swal.fire({
//         icon: "error",
//         title: "Verification Failed",
//         text:
//           error?.response?.data?.message ||
//           "Unable to verify property.",
//         confirmButtonColor: DARK,
//       });
//     }
//   };

//   const handleOpenPreview = async (property) => {
//     try {
//       const response =
//         await getPropertyByIdApi(
//           property._id
//         );

//       setSelectedProperty(
//         response?.data || property
//       );
//     } catch (error) {
//       setSelectedProperty(property);
//     }

//     setPreviewOpen(true);
//   };

//   const handleOpenEdit = async (property) => {
//     try {
//       const response =
//         await getPropertyByIdApi(
//           property._id
//         );

//       setEditingProperty(
//         response?.data || property
//       );
//     } catch (error) {
//       setEditingProperty(property);
//     }

//     setEditOpen(true);
//   };

//   const handlePropertyUpdated = async () => {
//     setEditOpen(false);
//     setEditingProperty(null);
//     await getProperties();
//   };

//   const clearFilters = () => {
//     setSelectedRole("All");
//     setSelectedStatus("All");
//     setSelectedCity("All");
//     setSearch("");
//   };

//   /* =========================================================
//      UI
//   ========================================================= */

//   return (
//     <div className="min-h-screen font-sans text-slate-800">
//       <div className="mx-auto w-full max-w-[1500px] px-1 py-2 sm:px-1 lg:px-1">
//         {/* HEADER */}
//         <section className="mb-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
//                 <span>Portfolio</span>
//                 <span>/</span>
//                 <span className="text-[#0f766e]">
//                   Properties
//                 </span>
//               </div>

//               <h1 className="text-2xl font-extrabold tracking-tight text-[#173c37] sm:text-3xl">
//                 Property Management
//               </h1>

//               <p className="mt-1 text-xs text-slate-500">
//                 Manage, verify and maintain properties added by
//                 Admin, Partner and Seller.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 type="button"
//                 onClick={() =>
//                   setFilterOpen(
//                     (prev) => !prev
//                   )
//                 }
//                 className={`flex h-10 items-center gap-2 rounded-xl border px-4 text-xs font-semibold transition ${
//                   filterOpen
//                     ? "border-[#0d2d2a] bg-[#0d2d2a] text-white"
//                     : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                 }`}
//               >
//                 <FiFilter size={14} />
//                 Filters
//                 {filterOpen ? (
//                   <FiChevronUp size={13} />
//                 ) : (
//                   <FiChevronDown size={13} />
//                 )}
//               </button>

//               <button
//                 type="button"
//                 className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
//               >
//                 <FiUpload size={14} />
//                 Export
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* SUMMARY */}
//         <section className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
//           <SummaryCard
//             label="Visible Properties"
//             value={properties.length}
//             icon={<FiGrid />}
//           />

//           <SummaryCard
//             label="Reviewing"
//             value={filteredSummary.reviewing}
//             icon={<FiClock />}
//             tone="amber"
//           />

//           <SummaryCard
//             label="Verified"
//             value={filteredSummary.verified}
//             icon={<FiCheckCircle />}
//             tone="emerald"
//           />

//           <SummaryCard
//             label="Live"
//             value={filteredSummary.live}
//             icon={<MdVerified />}
//             tone="green"
//           />
//         </section>

//         {/* CREATOR TABS */}
//         <section className="mb-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
//           <div
//             className={`flex gap-2 overflow-x-auto ${SCROLLBAR_HIDDEN}`}
//           >
//             {roleTabs.map(
//               ({ label, count, icon: Icon }) => {
//                 const active =
//                   selectedRole === label;

//                 return (
//                   <button
//                     key={label}
//                     type="button"
//                     onClick={() =>
//                       setSelectedRole(label)
//                     }
//                     className={`flex min-w-max items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
//                       active
//                         ? "bg-[#0d2d2a] text-white shadow-sm"
//                         : "text-slate-500 hover:bg-slate-100"
//                     }`}
//                   >
//                     <Icon size={13} />
//                     {label}

//                     <span
//                       className={`rounded-full px-2 py-0.5 text-[9px] ${
//                         active
//                           ? "bg-white/15 text-white"
//                           : "bg-slate-100 text-slate-500"
//                       }`}
//                     >
//                       {count}
//                     </span>
//                   </button>
//                 );
//               }
//             )}
//           </div>
//         </section>

//         {/* SEARCH + FILTERS */}
//         <section className="mb-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <div className="relative flex-1">
//               <FiSearch
//                 size={15}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(e.target.value)
//                 }
//                 placeholder="Search by property ID, title, city, locality or creator..."
//                 className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 text-xs text-slate-700 outline-none transition focus:border-teal-400 focus:bg-white"
//               />
//             </div>

//             {filterOpen && (
//               <div className="flex flex-col gap-2 sm:flex-row">
//                 <select
//                   value={selectedStatus}
//                   onChange={(e) =>
//                     setSelectedStatus(
//                       e.target.value
//                     )
//                   }
//                   className="h-11 min-w-[180px] rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-teal-400"
//                 >
//                   {statusOptions.map(
//                     (item) => (
//                       <option
//                         key={item}
//                         value={item}
//                       >
//                         {item === "All"
//                           ? "All Status"
//                           : formatStatus(item)}
//                       </option>
//                     )
//                   )}
//                 </select>

//                 <select
//                   value={selectedCity}
//                   onChange={(e) =>
//                     setSelectedCity(
//                       e.target.value
//                     )
//                   }
//                   className="h-11 min-w-[165px] rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-teal-400"
//                 >
//                   {cityOptions.map(
//                     (item) => (
//                       <option
//                         key={item}
//                         value={item}
//                       >
//                         {item === "All"
//                           ? "All Cities"
//                           : item}
//                       </option>
//                     )
//                   )}
//                 </select>

//                 <button
//                   type="button"
//                   onClick={clearFilters}
//                   className="h-11 rounded-xl border border-slate-200 px-4 text-xs font-semibold text-slate-500 transition hover:bg-slate-50"
//                 >
//                   Clear
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ACTIVE FILTER CHIPS */}
//         <div className="mb-3 flex flex-wrap items-center gap-2">
//           <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
//             Showing
//           </span>

//           <FilterChip>
//             {selectedRole === "All"
//               ? "All Creators"
//               : `${selectedRole} Added`}
//           </FilterChip>

//           {selectedStatus !== "All" && (
//             <FilterChip tone="amber">
//               {formatStatus(selectedStatus)}
//             </FilterChip>
//           )}

//           {selectedCity !== "All" && (
//             <FilterChip tone="blue">
//               {selectedCity}
//             </FilterChip>
//           )}
//         </div>

//         {/* TABLE CARD */}
//         <section className="relative overflow-visible rounded-2xl border border-slate-200 bg-white shadow-sm">
//           <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
//             <div>
//               <h2 className="text-sm font-bold text-[#173c37]">
//                 Property Directory
//               </h2>

//               <p className="mt-0.5 text-[10px] text-slate-400">
//                 Draft properties are hidden from this admin view.
//               </p>
//             </div>

//             <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">
//               {properties.length}
//             </span>
//           </div>

//           {/* 
//             RESPONSIVE PROPERTY DIRECTORY
//             - No horizontal scrollbar
//             - Table always fits available screen width
//             - Less important columns hide on smaller screens
//           */}
//           <div className="relative w-full overflow-visible">
//             <table className="w-full table-fixed">
//               <colgroup>
//                 <col className="w-[34%] sm:w-[29%] lg:w-[24%]" />
//                 <col className="hidden sm:table-column sm:w-[17%] lg:w-[14%]" />
//                 <col className="hidden lg:table-column lg:w-[15%]" />
//                 <col className="w-[18%] sm:w-[15%] lg:w-[11%]" />
//                 <col className="w-[24%] sm:w-[18%] lg:w-[13%]" />
//                 <col className="hidden xl:table-column xl:w-[15%]" />
//                 <col className="w-[24%] sm:w-[21%] lg:w-[13%] xl:w-[8%]" />
//               </colgroup>

//               <thead>
//                 <tr className="border-b border-slate-100 bg-[#fafcfc]">
//                   <th className="px-2 py-3.5 text-left text-[8px] font-extrabold uppercase tracking-[0.08em] text-slate-400 sm:px-3 sm:text-[9px]">
//                     Property
//                   </th>

//                   <th className="hidden px-2 py-3.5 text-left text-[8px] font-extrabold uppercase tracking-[0.08em] text-slate-400 sm:table-cell sm:px-3 sm:text-[9px]">
//                     Added By
//                   </th>

//                   <th className="hidden px-3 py-3.5 text-left text-[9px] font-extrabold uppercase tracking-[0.08em] text-slate-400 lg:table-cell">
//                     Location
//                   </th>

//                   <th className="px-2 py-3.5 text-left text-[8px] font-extrabold uppercase tracking-[0.05em] text-slate-400 sm:px-3 sm:text-[9px]">
//                     Status
//                   </th>

//                   <th className="px-2 py-3.5 text-left text-[8px] font-extrabold uppercase tracking-[0.05em] text-slate-400 sm:px-3 sm:text-[9px]">
//                     Market Price
//                   </th>

//                   <th className="hidden px-3 py-3.5 text-left text-[9px] font-extrabold uppercase tracking-[0.08em] text-slate-400 xl:table-cell">
//                     Assigned Partner
//                   </th>

//                   <th className="px-1 py-3.5 text-center text-[8px] font-extrabold uppercase tracking-[0.05em] text-slate-400 sm:px-2 sm:text-[9px]">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {loading ? (
//                   <TableLoading />
//                 ) : properties.length === 0 ? (
//                   <TableEmpty />
//                 ) : (
//                   properties.map(
//                     (property, index) => {
//                       const creator =
//                         property?.addedBy || {};

//                       const assignedPartner =
//                         property?.assignedPartner ||
//                         {};

//                       const imageUrl =
//                         property?.images?.[0]
//                           ?.url ||
//                         "https://via.placeholder.com/120";

//                       return (
//                         <tr
//                           key={
//                             property._id ||
//                             property.id
//                           }
//                           className={`transition hover:bg-[#f8fbfa] ${
//                             index !==
//                             properties.length - 1
//                               ? "border-b border-slate-100"
//                               : ""
//                           }`}
//                         >
//                           <td className="px-2 py-3 sm:px-3 sm:py-3.5">
//                             <div className="flex min-w-0 items-center gap-2 sm:gap-3">
//                               <img
//                                 src={imageUrl}
//                                 alt={
//                                   property.title ||
//                                   "Property"
//                                 }
//                                 className="hidden h-10 w-10 shrink-0 rounded-xl border border-slate-100 bg-slate-100 object-cover sm:block lg:h-11 lg:w-11"
//                               />

//                               <div className="min-w-0 flex-1">
//                                 <HoverTooltip
//                                   text={property.title || "-"}
//                                   position="top"
//                                   className="w-full"
//                                 >
//                                   <p className="w-full cursor-help truncate text-[10px] font-extrabold text-slate-800 sm:text-[11px]">
//                                     {property.title ||
//                                       "-"}
//                                   </p>
//                                 </HoverTooltip>

//                                 <p className="mt-0.5 truncate text-[9px] font-bold text-teal-600 sm:mt-1 sm:text-[10px]">
//                                   {property.propertyId ||
//                                     "-"}
//                                 </p>

//                                 <p className="mt-0.5 hidden truncate text-[8px] text-slate-400 sm:block sm:text-[9px]">
//                                   {property.category ||
//                                     "-"}{" "}
//                                   •{" "}
//                                   {property.transactionType ||
//                                     "-"}
//                                 </p>
//                               </div>
//                             </div>
//                           </td>

//                           <td className="hidden px-2 py-3 sm:table-cell sm:px-3 sm:py-3.5">
//                             <HoverTooltip
//                               text={creator?.name || "-"}
//                               position="top"
//                               className="w-full"
//                             >
//                               <p className="cursor-help truncate text-[10px] font-semibold text-slate-700 lg:text-[11px]">
//                                 {creator?.name || "-"}
//                               </p>
//                             </HoverTooltip>

//                             <div className="mt-1">
//                               <CreatorBadge
//                                 role={creator?.role}
//                               />
//                             </div>

//                             {(creator?.sellerId ||
//                               creator?.partnerId) && (
//                               <p className="mt-1 text-[9px] text-slate-400">
//                                 {creator?.sellerId ||
//                                   creator?.partnerId}
//                               </p>
//                             )}
//                           </td>

//                           <td className="hidden px-3 py-3.5 lg:table-cell">
//                             <div className="flex min-w-0 items-start gap-2">
//                               <FiMapPin
//                                 size={13}
//                                 className="mt-0.5 shrink-0 text-slate-400"
//                               />

//                               <HoverTooltip
//                                 text={
//                                   [
//                                     property.locality,
//                                     property.city,
//                                     property.pinCode,
//                                   ]
//                                     .filter(Boolean)
//                                     .join(", ") || "-"
//                                 }
//                                 position="top"
//                                 className="min-w-0 flex-1"
//                               >
//                                 <div className="min-w-0 cursor-help">
//                                   <p className="truncate text-[10px] font-semibold text-slate-700 lg:text-[11px]">
//                                     {property.locality ||
//                                       "-"}
//                                   </p>

//                                   <p className="mt-1 truncate text-[9px] text-slate-400">
//                                     {[
//                                       property.city,
//                                       property.pinCode,
//                                     ]
//                                       .filter(Boolean)
//                                       .join(" • ")}
//                                   </p>
//                                 </div>
//                               </HoverTooltip>
//                             </div>
//                           </td>

//                           <td className="px-2 py-3 sm:px-3 sm:py-3.5">
//                             <HoverTooltip
//                               text={formatStatus(
//                                 property.status
//                               )}
//                               position="top"
//                               className="inline-block max-w-full"
//                             >
//                               <div className="cursor-help">
//                                 <StatusBadge
//                                   status={
//                                     property.status
//                                   }
//                                 />
//                               </div>
//                             </HoverTooltip>
//                           </td>

//                           <td className="px-2 py-3 sm:px-3 sm:py-3.5">
//                             <HoverTooltip
//                               text={formatCurrency(
//                                 property.price
//                               )}
//                               position="top"
//                               className="w-full"
//                             >
//                               <p className="cursor-help truncate text-[9px] font-extrabold text-slate-800 sm:text-[10px] lg:text-[11px]">
//                                 {formatCurrency(
//                                   property.price
//                                 )}
//                               </p>
//                             </HoverTooltip>

//                             <p className="mt-0.5 hidden truncate text-[8px] text-slate-400 sm:block sm:text-[9px]">
//                               {property.propertySize ||
//                                 "-"}{" "}
//                               {property.sizeUnit || ""}
//                             </p>
//                           </td>

//                           <td className="hidden px-3 py-3.5 xl:table-cell">
//                             {assignedPartner?.partnerId ? (
//                               <div>
//                                 <HoverTooltip
//                                   text={
//                                     assignedPartner?.name ||
//                                     assignedPartner
//                                       ?.partnerId?.name ||
//                                     "-"
//                                   }
//                                   position="top"
//                                   className="w-full"
//                                 >
//                                   <p className="cursor-help truncate text-[10px] font-semibold text-slate-700 lg:text-[11px]">
//                                     {assignedPartner?.name ||
//                                       assignedPartner
//                                         ?.partnerId?.name ||
//                                       "-"}
//                                   </p>
//                                 </HoverTooltip>

//                                 <HoverTooltip
//                                   text={
//                                     assignedPartner?.partnerCode ||
//                                     assignedPartner
//                                       ?.partnerId
//                                       ?.partnerId ||
//                                     "-"
//                                   }
//                                   position="top"
//                                   className="mt-1 w-full"
//                                 >
//                                   <p className="cursor-help truncate text-[9px] font-bold text-teal-600">
//                                     {assignedPartner?.partnerCode ||
//                                       assignedPartner
//                                         ?.partnerId
//                                         ?.partnerId ||
//                                       "-"}
//                                   </p>
//                                 </HoverTooltip>

//                                 <p className="mt-1 text-[9px] capitalize text-slate-400">
//                                   {assignedPartner?.partnerType ||
//                                     assignedPartner
//                                       ?.partnerId
//                                       ?.partnerType ||
//                                     ""}
//                                 </p>
//                               </div>
//                             ) : (
//                               <HoverTooltip
//                                 text="No partner has been assigned to this property."
//                                 position="top"
//                                 className="inline-block"
//                               >
//                                 <span className="inline-flex cursor-help rounded-full bg-orange-50 px-2.5 py-1 text-[9px] font-bold text-orange-600">
//                                   Not Assigned
//                                 </span>
//                               </HoverTooltip>
//                             )}
//                           </td>

//                           <td className="px-1 py-3 sm:px-2 sm:py-3.5">
//                             <div className="flex flex-wrap items-center justify-center gap-0.5 sm:flex-nowrap">
//                               <ActionButton
//                                 title="View Property"
//                                 tone="teal"
//                                 onClick={() =>
//                                   handleOpenPreview(
//                                     property
//                                   )
//                                 }
//                               >
//                                 <FiEye size={15} />
//                               </ActionButton>

//                               <ActionButton
//                                 title="Edit Property"
//                                 tone="blue"
//                                 onClick={() =>
//                                   handleOpenEdit(
//                                     property
//                                   )
//                                 }
//                               >
//                                 <FiEdit2
//                                   size={14}
//                                 />
//                               </ActionButton>

//                               <ActionButton
//                                 title={
//                                   property?.status ===
//                                   "Verified"
//                                     ? "Already Verified"
//                                     : "Verify Property"
//                                 }
//                                 tone="green"
//                                 disabled={
//                                   property?.status ===
//                                   "Verified"
//                                 }
//                                 onClick={() =>
//                                   handleVerifyProperty(
//                                     property
//                                   )
//                                 }
//                               >
//                                 <MdOutlineCheckCircle
//                                   size={17}
//                                 />
//                               </ActionButton>

//                               <ActionButton
//                                 title="Delete Property"
//                                 tone="red"
//                                 onClick={() =>
//                                   handleDeleteProperty(
//                                     property._id
//                                   )
//                                 }
//                               >
//                                 <FiTrash2
//                                   size={14}
//                                 />
//                               </ActionButton>
//                             </div>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex flex-col gap-2 border-t border-slate-100 bg-[#fcfdfd] px-4 py-3 text-[10px] sm:flex-row sm:items-center sm:justify-between sm:px-5">
//             <p className="font-semibold text-slate-500">
//               Showing {properties.length} properties
//             </p>

//             <p className="text-slate-400">
//               Admin {counts.admin} • Partner{" "}
//               {counts.partner} • Seller{" "}
//               {counts.seller}
//             </p>
//           </div>
//         </section>
//       </div>

//       <AIAssistant
//         open={chatOpen}
//         onClose={() =>
//           setChatOpen(false)
//         }
//       />

//       <EditPropertyModal
//         open={editOpen}
//         property={editingProperty}
//         onClose={() => {
//           setEditOpen(false);
//           setEditingProperty(null);
//         }}
//         onUpdated={
//           handlePropertyUpdated
//         }
//       />

//       <PropertyPreview
//         open={previewOpen}
//         property={selectedProperty}
//         onClose={() => {
//           setPreviewOpen(false);
//           setSelectedProperty(null);

//           // If preview was opened from /property-management/:id,
//           // remove the id from the URL when the preview closes.
//           if (id) {
//             navigate("/property-management", { replace: true });
//           }
//         }}
//       />

//       <button
//         onClick={() =>
//           setChatOpen(
//             (value) => !value
//           )
//         }
//         className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d2d2a] text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:right-6"
//       >
//         {chatOpen ? (
//           <FiX size={19} />
//         ) : (
//           <BsRobot size={19} />
//         )}
//       </button>
//     </div>
//   );
// }

// /* =========================================================
//    SMALL UI COMPONENTS
// ========================================================= */

// function SummaryCard({
//   label,
//   value,
//   icon,
//   tone = "slate",
// }) {
//   const tones = {
//     slate:
//       "bg-slate-50 text-slate-600",
//     amber:
//       "bg-amber-50 text-amber-600",
//     emerald:
//       "bg-emerald-50 text-emerald-600",
//     green:
//       "bg-green-50 text-green-600",
//   };

//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
//       <div className="flex items-start justify-between gap-2">
//         <div>
//           <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
//             {label}
//           </p>

//           <p className="mt-2 text-xl font-extrabold text-[#173c37]">
//             {value || 0}
//           </p>
//         </div>

//         <div
//           className={`flex h-8 w-8 items-center justify-center rounded-xl ${tones[tone]}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function FilterChip({
//   children,
//   tone = "teal",
// }) {
//   const tones = {
//     teal:
//       "bg-teal-50 text-teal-700 border-teal-100",
//     amber:
//       "bg-amber-50 text-amber-700 border-amber-100",
//     blue:
//       "bg-blue-50 text-blue-700 border-blue-100",
//   };

//   return (
//     <span
//       className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${tones[tone]}`}
//     >
//       {children}
//     </span>
//   );
// }

// function ActionButton({
//   children,
//   title,
//   onClick,
//   disabled = false,
//   tone = "slate",
// }) {
//   const tones = {
//     teal:
//       "text-teal-600 hover:bg-teal-50",
//     blue:
//       "text-blue-600 hover:bg-blue-50",
//     green:
//       "text-emerald-600 hover:bg-emerald-50",
//     red:
//       "text-red-500 hover:bg-red-50",
//     slate:
//       "text-slate-500 hover:bg-slate-100",
//   };

//   return (
//     <HoverTooltip
//       text={title}
//       position="top"
//       className="inline-flex"
//     >
//       <button
//         type="button"
//         aria-label={title}
//         disabled={disabled}
//         onClick={onClick}
//         className={`flex h-7 w-7 items-center justify-center rounded-md transition sm:h-7 sm:w-7 ${
//           tones[tone]
//         } ${
//           disabled
//             ? "cursor-not-allowed opacity-40"
//             : ""
//         }`}
//       >
//         {children}
//       </button>
//     </HoverTooltip>
//   );
// }

// function TableLoading() {
//   return (
//     <tr>
//       <td
//         colSpan={7}
//         className="py-16 text-center"
//       >
//         <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-slate-200 border-t-teal-600" />
//         <p className="mt-3 text-xs text-slate-400">
//           Loading properties...
//         </p>
//       </td>
//     </tr>
//   );
// }

// function TableEmpty() {
//   return (
//     <tr>
//       <td
//         colSpan={7}
//         className="py-16 text-center"
//       >
//         <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
//           <FiHome size={18} />
//         </div>

//         <p className="mt-3 text-sm font-bold text-slate-600">
//           No Property Found
//         </p>

//         <p className="mt-1 text-[10px] text-slate-400">
//           Try changing your filters or search.
//         </p>
//       </td>
//     </tr>
//   );
// }

// /* =========================================================
//    EDIT MODAL
// ========================================================= */

// function EditPropertyModal({
//   open,
//   property,
//   onClose,
//   onUpdated,
// }) {
//   const [form, setForm] =
//     useState({});

//   const [
//     existingImages,
//     setExistingImages,
//   ] = useState([]);

//   const [
//     newImages,
//     setNewImages,
//   ] = useState([]);

//   const [
//     floorPlan,
//     setFloorPlan,
//   ] = useState(null);

//   const [
//     reraCertificate,
//     setReraCertificate,
//   ] = useState(null);

//   const [video, setVideo] =
//     useState(null);

//   const [saving, setSaving] =
//     useState(false);

//   useBodyScrollLock(open);

//   useEffect(() => {
//     if (!property) return;

//     setForm({
//       title: property.title || "",
//       transactionType:
//         property.transactionType ||
//         "Sale",
//       category:
//         property.category ||
//         "Residential",
//       propertySize:
//         property.propertySize || "",
//       sizeUnit:
//         property.sizeUnit ||
//         "sqft",
//       price:
//         property.price || "",
//       projectName:
//         property.projectName ||
//         "",
//       developerName:
//         property.developerName ||
//         "",
//       description:
//         property.description ||
//         "",
//       city: property.city || "",
//       locality:
//         property.locality || "",
//       pinCode:
//         property.pinCode || "",
//       address:
//         property.address || "",
//       latitude:
//         property.latitude ?? "",
//       longitude:
//         property.longitude ?? "",
//       maintenance:
//         property.maintenance ?? "",
//       bookingAmount:
//         property.bookingAmount ?? "",
//       negotiable:
//         Boolean(
//           property.negotiable
//         ),
//       superBuiltupArea:
//         property.superBuiltupArea ??
//         "",
//       carpetArea:
//         property.carpetArea ?? "",
//       bedrooms:
//         property.bedrooms || "",
//       bathrooms:
//         property.bathrooms || "",
//       balconies:
//         property.balconies || "",
//       parking:
//         property.parking || "",
//       floorNo:
//         property.floorNo ?? "",
//       totalFloors:
//         property.totalFloors ?? "",
//       facing:
//         property.facing || "",
//       furnishing:
//         property.furnishing || "",
//       amenities:
//         Array.isArray(
//           property.amenities
//         )
//           ? property.amenities.join(
//               ", "
//             )
//           : "",
//       tags: Array.isArray(
//         property.tags
//       )
//         ? property.tags.join(", ")
//         : "",
//     });

//     setExistingImages(
//       property.images || []
//     );

//     setNewImages([]);
//     setFloorPlan(null);
//     setReraCertificate(null);
//     setVideo(null);
//   }, [property]);

//   if (!open || !property)
//     return null;

//   const setField = (
//     name,
//     value
//   ) => {
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const removeExistingImage = (
//     index
//   ) => {
//     setExistingImages((prev) =>
//       prev.filter(
//         (_, imageIndex) =>
//           imageIndex !== index
//       )
//     );
//   };

//   const handleSubmit = async (
//     event
//   ) => {
//     event.preventDefault();

//     const confirm =
//       await Swal.fire({
//         icon: "question",
//         title: "Update Property?",
//         text:
//           "Property details, images and documents will be updated.",
//         showCancelButton: true,
//         confirmButtonText:
//           "Yes, Update",
//         cancelButtonText: "Cancel",
//         confirmButtonColor: DARK,
//         cancelButtonColor:
//           "#64748b",
//       });

//     if (!confirm.isConfirmed)
//       return;

//     try {
//       setSaving(true);

//       const payload =
//         new FormData();

//       Object.entries(form).forEach(
//         ([key, value]) => {
//           if (
//             key === "amenities" ||
//             key === "tags"
//           )
//             return;

//           if (
//             typeof value ===
//             "boolean"
//           ) {
//             payload.append(
//               key,
//               value
//                 ? "true"
//                 : "false"
//             );
//           } else if (
//             value !== undefined &&
//             value !== null
//           ) {
//             payload.append(
//               key,
//               value
//             );
//           }
//         }
//       );

//       payload.append(
//         "amenities",
//         JSON.stringify(
//           String(
//             form.amenities || ""
//           )
//             .split(",")
//             .map((item) =>
//               item.trim()
//             )
//             .filter(Boolean)
//         )
//       );

//       payload.append(
//         "tags",
//         JSON.stringify(
//           String(form.tags || "")
//             .split(",")
//             .map((item) =>
//               item.trim()
//             )
//             .filter(Boolean)
//         )
//       );

//       payload.append(
//         "existingImages",
//         JSON.stringify(
//           existingImages
//         )
//       );

//       newImages.forEach(
//         (file) => {
//           payload.append(
//             "images",
//             file
//           );
//         }
//       );

//       if (floorPlan) {
//         payload.append(
//           "floorPlan",
//           floorPlan
//         );
//       }

//       if (reraCertificate) {
//         payload.append(
//           "reraCertificate",
//           reraCertificate
//         );
//       }

//       if (video) {
//         payload.append(
//           "video",
//           video
//         );
//       }

//       const response =
//         await updatePropertyApi(
//           property._id,
//           payload
//         );

//       if (response?.success) {
//         await Swal.fire({
//           icon: "success",
//           title: "Property Updated",
//           text:
//             response?.message ||
//             "Property updated successfully.",
//           confirmButtonColor: DARK,
//         });

//         await onUpdated();
//       }
//     } catch (error) {
//       await Swal.fire({
//         icon: "error",
//         title: "Update Failed",
//         text:
//           error?.response?.data
//             ?.message ||
//           "Unable to update property.",
//         confirmButtonColor: DARK,
//       });
//     } finally {
//       setSaving(false);
//     }
//   };

//   const inputClass =
//     "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-50";

//   return (
//     <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5">
//       <div className="flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
//         {/* HEADER - NOT SCROLLING */}
//         <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-6">
//           <div>
//             <div className="flex items-center gap-2">
//               <FiEdit2 className="text-teal-600" />

//               <h2 className="text-lg font-extrabold text-[#173c37]">
//                 Edit Property
//               </h2>
//             </div>

//             <p className="mt-1 text-[10px] text-slate-400">
//               {property.propertyId} •
//               Update details, images and documents
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
//           >
//             <FiX size={16} />
//           </button>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="flex min-h-0 flex-1 flex-col"
//         >
//           {/* BODY - ONLY THIS SCROLLS */}
//           <div
//             className={`min-h-0 flex-1 overflow-y-auto bg-[#fbfcfc] p-4 sm:p-6 ${SCROLLBAR_HIDDEN}`}
//           >
//             <SectionCard
//               title="Basic Information"
//               subtitle="Core property information"
//             >
//               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                 <EditField label="Title">
//                   <input
//                     className={
//                       inputClass
//                     }
//                     value={
//                       form.title || ""
//                     }
//                     onChange={(e) =>
//                       setField(
//                         "title",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </EditField>

//                 <EditField label="Category">
//                   <select
//                     className={
//                       inputClass
//                     }
//                     value={
//                       form.category ||
//                       ""
//                     }
//                     onChange={(e) =>
//                       setField(
//                         "category",
//                         e.target.value
//                       )
//                     }
//                   >
//                     {[
//                       "Residential",
//                       "Commercial",
//                       "Rental",
//                       "Sell",
//                       "Plot/Land",
//                     ].map(
//                       (item) => (
//                         <option
//                           key={item}
//                         >
//                           {item}
//                         </option>
//                       )
//                     )}
//                   </select>
//                 </EditField>

//                 <EditField label="Transaction">
//                   <select
//                     className={
//                       inputClass
//                     }
//                     value={
//                       form.transactionType ||
//                       ""
//                     }
//                     onChange={(e) =>
//                       setField(
//                         "transactionType",
//                         e.target.value
//                       )
//                     }
//                   >
//                     <option>
//                       Sale
//                     </option>
//                     <option>
//                       Rent
//                     </option>
//                   </select>
//                 </EditField>

//                 <EditField label="Price">
//                   <input
//                     className={
//                       inputClass
//                     }
//                     value={
//                       form.price || ""
//                     }
//                     onChange={(e) =>
//                       setField(
//                         "price",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </EditField>

//                 <EditField label="Property Size">
//                   <input
//                     className={
//                       inputClass
//                     }
//                     value={
//                       form.propertySize ||
//                       ""
//                     }
//                     onChange={(e) =>
//                       setField(
//                         "propertySize",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </EditField>

//                 <EditField label="Size Unit">
//                   <select
//                     className={
//                       inputClass
//                     }
//                     value={
//                       form.sizeUnit ||
//                       "sqft"
//                     }
//                     onChange={(e) =>
//                       setField(
//                         "sizeUnit",
//                         e.target.value
//                       )
//                     }
//                   >
//                     {[
//                       "sqft",
//                       "sqyd",
//                       "sqm",
//                       "acre",
//                       "bigha",
//                     ].map(
//                       (item) => (
//                         <option
//                           key={item}
//                         >
//                           {item}
//                         </option>
//                       )
//                     )}
//                   </select>
//                 </EditField>
//               </div>
//             </SectionCard>

//             <SectionCard
//               title="Project & Location"
//               subtitle="Project and map-related details"
//             >
//               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                 {[
//                   [
//                     "projectName",
//                     "Project Name",
//                   ],
//                   [
//                     "developerName",
//                     "Developer Name",
//                   ],
//                   ["city", "City"],
//                   [
//                     "locality",
//                     "Locality",
//                   ],
//                   [
//                     "pinCode",
//                     "Pin Code",
//                   ],
//                   [
//                     "address",
//                     "Address",
//                   ],
//                   [
//                     "latitude",
//                     "Latitude",
//                   ],
//                   [
//                     "longitude",
//                     "Longitude",
//                   ],
//                 ].map(
//                   ([name, label]) => (
//                     <EditField
//                       key={name}
//                       label={label}
//                     >
//                       <input
//                         className={
//                           inputClass
//                         }
//                         value={
//                           form[name] ??
//                           ""
//                         }
//                         onChange={(
//                           e
//                         ) =>
//                           setField(
//                             name,
//                             e.target
//                               .value
//                           )
//                         }
//                       />
//                     </EditField>
//                   )
//                 )}
//               </div>
//             </SectionCard>

//             <SectionCard
//               title="Specifications"
//               subtitle="Physical and pricing specifications"
//             >
//               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                 {[
//                   [
//                     "maintenance",
//                     "Maintenance",
//                   ],
//                   [
//                     "bookingAmount",
//                     "Booking Amount",
//                   ],
//                   [
//                     "superBuiltupArea",
//                     "Super Built-up Area",
//                   ],
//                   [
//                     "carpetArea",
//                     "Carpet Area",
//                   ],
//                   [
//                     "bedrooms",
//                     "Bedrooms",
//                   ],
//                   [
//                     "bathrooms",
//                     "Bathrooms",
//                   ],
//                   [
//                     "balconies",
//                     "Balconies",
//                   ],
//                   [
//                     "parking",
//                     "Parking",
//                   ],
//                   [
//                     "floorNo",
//                     "Floor No",
//                   ],
//                   [
//                     "totalFloors",
//                     "Total Floors",
//                   ],
//                   [
//                     "facing",
//                     "Facing",
//                   ],
//                   [
//                     "furnishing",
//                     "Furnishing",
//                   ],
//                 ].map(
//                   ([name, label]) => (
//                     <EditField
//                       key={name}
//                       label={label}
//                     >
//                       <input
//                         className={
//                           inputClass
//                         }
//                         value={
//                           form[name] ??
//                           ""
//                         }
//                         onChange={(
//                           e
//                         ) =>
//                           setField(
//                             name,
//                             e.target
//                               .value
//                           )
//                         }
//                       />
//                     </EditField>
//                   )
//                 )}

//                 <EditField label="Negotiable">
//                   <select
//                     className={
//                       inputClass
//                     }
//                     value={
//                       form.negotiable
//                         ? "true"
//                         : "false"
//                     }
//                     onChange={(e) =>
//                       setField(
//                         "negotiable",
//                         e.target
//                           .value ===
//                           "true"
//                       )
//                     }
//                   >
//                     <option value="false">
//                       No
//                     </option>
//                     <option value="true">
//                       Yes
//                     </option>
//                   </select>
//                 </EditField>

//                 <EditField label="Amenities (comma separated)">
//                   <input
//                     className={
//                       inputClass
//                     }
//                     value={
//                       form.amenities ||
//                       ""
//                     }
//                     onChange={(e) =>
//                       setField(
//                         "amenities",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </EditField>

//                 <EditField label="Tags (comma separated)">
//                   <input
//                     className={
//                       inputClass
//                     }
//                     value={
//                       form.tags || ""
//                     }
//                     onChange={(e) =>
//                       setField(
//                         "tags",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </EditField>

//                 <div className="md:col-span-2 lg:col-span-3">
//                   <EditField label="Description">
//                     <textarea
//                       rows={4}
//                       className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-50"
//                       value={
//                         form.description ||
//                         ""
//                       }
//                       onChange={(e) =>
//                         setField(
//                           "description",
//                           e.target
//                             .value
//                         )
//                       }
//                     />
//                   </EditField>
//                 </div>
//               </div>
//             </SectionCard>

//             <SectionCard
//               title="Media & Documents"
//               subtitle="Manage listing images and documents"
//             >
//               <div>
//                 <p className="text-xs font-bold text-slate-700">
//                   Existing Images
//                 </p>

//                 <div
//                   className={`mt-3 flex gap-3 overflow-x-auto pb-1 ${SCROLLBAR_HIDDEN}`}
//                 >
//                   {existingImages.length ? (
//                     existingImages.map(
//                       (
//                         image,
//                         index
//                       ) => (
//                         <div
//                           key={
//                             image?.public_id ||
//                             index
//                           }
//                           className="relative shrink-0"
//                         >
//                           <img
//                             src={
//                               image?.url
//                             }
//                             alt=""
//                             className="h-24 w-32 rounded-xl border border-slate-200 object-cover"
//                           />

//                           <button
//                             type="button"
//                             onClick={() =>
//                               removeExistingImage(
//                                 index
//                               )
//                             }
//                             className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-md"
//                           >
//                             <FiX
//                               size={
//                                 12
//                               }
//                             />
//                           </button>
//                         </div>
//                       )
//                     )
//                   ) : (
//                     <p className="text-[10px] text-slate-400">
//                       No existing
//                       images.
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
//                 <UploadCard
//                   icon={<FiImage />}
//                   label="Add Images"
//                   text={
//                     newImages.length
//                       ? `${newImages.length} selected`
//                       : "Multiple images"
//                   }
//                 >
//                   <input
//                     type="file"
//                     multiple
//                     accept="image/*"
//                     onChange={(e) =>
//                       setNewImages(
//                         Array.from(
//                           e.target
//                             .files || []
//                         )
//                       )
//                     }
//                     className="mt-3 block w-full text-[10px] text-slate-500"
//                   />
//                 </UploadCard>

//                 <UploadCard
//                   icon={
//                     <FiFileText />
//                   }
//                   label="Floor Plan"
//                   text={
//                     floorPlan?.name ||
//                     "Replace file"
//                   }
//                 >
//                   <input
//                     type="file"
//                     onChange={(e) =>
//                       setFloorPlan(
//                         e.target
//                           .files?.[0] ||
//                           null
//                       )
//                     }
//                     className="mt-3 block w-full text-[10px] text-slate-500"
//                   />
//                 </UploadCard>

//                 <UploadCard
//                   icon={
//                     <FiFileText />
//                   }
//                   label="RERA"
//                   text={
//                     reraCertificate?.name ||
//                     "Replace certificate"
//                   }
//                 >
//                   <input
//                     type="file"
//                     onChange={(e) =>
//                       setReraCertificate(
//                         e.target
//                           .files?.[0] ||
//                           null
//                       )
//                     }
//                     className="mt-3 block w-full text-[10px] text-slate-500"
//                   />
//                 </UploadCard>

//                 <UploadCard
//                   icon={<FiVideo />}
//                   label="Video"
//                   text={
//                     video?.name ||
//                     "Upload walkthrough"
//                   }
//                 >
//                   <input
//                     type="file"
//                     accept="video/*"
//                     onChange={(e) =>
//                       setVideo(
//                         e.target
//                           .files?.[0] ||
//                           null
//                       )
//                     }
//                     className="mt-3 block w-full text-[10px] text-slate-500"
//                   />
//                 </UploadCard>
//               </div>
//             </SectionCard>
//           </div>

//           {/* FOOTER - ALWAYS VISIBLE */}
//           <div className="flex shrink-0 items-center justify-end gap-2 border-t border-slate-100 bg-white px-5 py-3 sm:px-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="h-10 rounded-xl border border-slate-200 px-5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={saving}
//               className="h-10 rounded-xl bg-[#0d2d2a] px-6 text-xs font-bold text-white transition hover:bg-[#123b36] disabled:opacity-50"
//             >
//               {saving
//                 ? "Updating..."
//                 : "Update Property"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// function EditField({
//   label,
//   children,
// }) {
//   return (
//     <label className="block">
//       <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-400">
//         {label}
//       </span>
//       {children}
//     </label>
//   );
// }

// function SectionCard({
//   title,
//   subtitle,
//   children,
// }) {
//   return (
//     <section className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
//       <div className="mb-4">
//         <h3 className="text-sm font-extrabold text-[#173c37]">
//           {title}
//         </h3>
//         <p className="mt-0.5 text-[10px] text-slate-400">
//           {subtitle}
//         </p>
//       </div>

//       {children}
//     </section>
//   );
// }

// function UploadCard({
//   icon,
//   label,
//   text,
//   children,
// }) {
//   return (
//     <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
//       <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm">
//         {icon}
//       </div>

//       <p className="mt-3 text-xs font-bold text-slate-700">
//         {label}
//       </p>

//       <p className="mt-1 truncate text-[9px] text-slate-400">
//         {text}
//       </p>

//       {children}
//     </div>
//   );
// }

// /* =========================================================
//    PROPERTY PREVIEW
// ========================================================= */

// function PropertyPreview({
//   open,
//   property,
//   onClose,
// }) {
//   const [
//     selectedImage,
//     setSelectedImage,
//   ] = useState(0);

//   useBodyScrollLock(open);

//   useEffect(() => {
//     setSelectedImage(0);
//   }, [property]);

//   if (!open || !property)
//     return null;

//   const images =
//     property.images?.length
//       ? property.images
//       : [
//           {
//             url: "https://via.placeholder.com/1200x700",
//           },
//         ];

//   const previousImage = () =>
//     setSelectedImage((prev) =>
//       prev === 0
//         ? images.length - 1
//         : prev - 1
//     );

//   const nextImage = () =>
//     setSelectedImage((prev) =>
//       prev === images.length - 1
//         ? 0
//         : prev + 1
//     );

//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/65 p-3 backdrop-blur-sm sm:p-5">
//       <div className="flex h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
//         {/* STICKY HEADER */}
//         <header className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-6">
//           <div className="min-w-0">
//             <div className="flex flex-wrap items-center gap-2">
//               <h2 className="truncate text-lg font-extrabold text-[#173c37] sm:text-xl">
//                 {property.title}
//               </h2>

//               <StatusBadge
//                 status={property.status}
//               />
//             </div>

//             <div className="mt-1 flex items-center gap-1.5 text-[10px] text-slate-400">
//               <FiMapPin />
//               <span className="truncate">
//                 {[
//                   property.locality,
//                   property.city,
//                 ]
//                   .filter(Boolean)
//                   .join(", ") || "Location not available"}
//               </span>
//             </div>
//           </div>

//           <button
//             onClick={onClose}
//             className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
//           >
//             <FiX size={16} />
//           </button>
//         </header>

//         {/* ONLY CONTENT AREA SCROLLS */}
//         <div
//           className={`min-h-0 flex-1 overflow-y-auto bg-[#f8faf9] ${SCROLLBAR_HIDDEN}`}
//         >
//           <div className="p-4 sm:p-6">
//             {/* HERO */}
//             <section className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)]">
//               <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
//                 <div className="relative overflow-hidden rounded-xl bg-slate-100">
//                   <img
//                     src={
//                       images[
//                         selectedImage
//                       ]?.url
//                     }
//                     alt={
//                       property.title
//                     }
//                     className="h-[300px] w-full object-cover sm:h-[420px]"
//                   />

//                   {images.length > 1 && (
//                     <>
//                       <button
//                         onClick={
//                           previousImage
//                         }
//                         className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow"
//                       >
//                         <FiChevronLeft />
//                       </button>

//                       <button
//                         onClick={
//                           nextImage
//                         }
//                         className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow"
//                       >
//                         <FiChevronRight />
//                       </button>
//                     </>
//                   )}

//                   <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white">
//                     {selectedImage + 1} /{" "}
//                     {images.length}
//                   </div>
//                 </div>

//                 {images.length > 1 && (
//                   <div
//                     className={`mt-3 flex gap-2 overflow-x-auto ${SCROLLBAR_HIDDEN}`}
//                   >
//                     {images.map(
//                       (
//                         image,
//                         index
//                       ) => (
//                         <button
//                           key={
//                             image?.public_id ||
//                             index
//                           }
//                           onClick={() =>
//                             setSelectedImage(
//                               index
//                             )
//                           }
//                           className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
//                             selectedImage ===
//                             index
//                               ? "border-teal-500"
//                               : "border-transparent"
//                           }`}
//                         >
//                           <img
//                             src={
//                               image.url
//                             }
//                             alt=""
//                             className="h-16 w-20 object-cover"
//                           />
//                         </button>
//                       )
//                     )}
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-4">
//                 <div className="rounded-2xl bg-[#0d2d2a] p-5 text-white shadow-sm">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
//                     Market Price
//                   </p>

//                   <h3 className="mt-2 text-2xl font-extrabold">
//                     {formatCurrency(
//                       property.price
//                     )}
//                   </h3>

//                   <p className="mt-1 text-xs text-white/60">
//                     {property.pricePerSqft
//                       ? `${formatCurrency(
//                           property.pricePerSqft
//                         )} / Sq.Ft`
//                       : "Price per sq.ft unavailable"}
//                   </p>

//                   <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
//                     <PreviewRow
//                       label="Property ID"
//                       value={
//                         property.propertyId
//                       }
//                     />
//                     <PreviewRow
//                       label="Category"
//                       value={
//                         property.category
//                       }
//                     />
//                     <PreviewRow
//                       label="Transaction"
//                       value={
//                         property.transactionType
//                       }
//                     />
//                     <PreviewRow
//                       label="Project"
//                       value={
//                         property.projectName
//                       }
//                     />
//                     <PreviewRow
//                       label="Developer"
//                       value={
//                         property.developerName
//                       }
//                     />
//                   </div>
//                 </div>

//                 <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//                       <MdOutlinePhotoLibrary
//                         size={18}
//                       />
//                     </div>

//                     <div>
//                       <p className="text-xs font-bold text-slate-700">
//                         {images.length} Property Images
//                       </p>
//                       <p className="mt-0.5 text-[9px] text-slate-400">
//                         High resolution gallery
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* QUICK STATS */}
//             <section className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
//               <PropertyStat
//                 label="Bedrooms"
//                 value={
//                   property.bedrooms ||
//                   "-"
//                 }
//               />
//               <PropertyStat
//                 label="Bathrooms"
//                 value={
//                   property.bathrooms ||
//                   "-"
//                 }
//               />
//               <PropertyStat
//                 label="Balconies"
//                 value={
//                   property.balconies ||
//                   "-"
//                 }
//               />
//               <PropertyStat
//                 label="Parking"
//                 value={
//                   property.parking ||
//                   "-"
//                 }
//               />
//             </section>

//             {/* DETAILS */}
//             <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.6fr)]">
//               <div className="space-y-4">
//                 <InfoPanel
//                   title="Property Details"
//                   icon={<FiHome />}
//                 >
//                   <div className="grid gap-x-8 md:grid-cols-2">
//                     <DetailItem
//                       label="Property ID"
//                       value={
//                         property.propertyId
//                       }
//                     />
//                     <DetailItem
//                       label="Category"
//                       value={
//                         property.category
//                       }
//                     />
//                     <DetailItem
//                       label="Transaction"
//                       value={
//                         property.transactionType
//                       }
//                     />
//                     <DetailItem
//                       label="Status"
//                       value={formatStatus(
//                         property.status
//                       )}
//                     />
//                     <DetailItem
//                       label="Project"
//                       value={
//                         property.projectName
//                       }
//                     />
//                     <DetailItem
//                       label="Developer"
//                       value={
//                         property.developerName
//                       }
//                     />
//                     <DetailItem
//                       label="Facing"
//                       value={
//                         property.facing
//                       }
//                     />
//                     <DetailItem
//                       label="Furnishing"
//                       value={
//                         property.furnishing
//                       }
//                     />
//                     <DetailItem
//                       label="Floor"
//                       value={
//                         property.floorNo
//                       }
//                     />
//                     <DetailItem
//                       label="Total Floors"
//                       value={
//                         property.totalFloors
//                       }
//                     />
//                   </div>
//                 </InfoPanel>

//                 <InfoPanel
//                   title="Description"
//                   icon={
//                     <FiFileText />
//                   }
//                 >
//                   <p className="text-xs leading-6 text-slate-500">
//                     {property.description ||
//                       "No description added."}
//                   </p>
//                 </InfoPanel>

//                 <InfoPanel
//                   title="Property Location"
//                   icon={
//                     <FiNavigation />
//                   }
//                 >
//                   <div className="grid gap-4 lg:grid-cols-2">
//                     <div>
//                       <DetailItem
//                         label="Address"
//                         value={
//                           property.address
//                         }
//                       />
//                       <DetailItem
//                         label="City"
//                         value={
//                           property.city
//                         }
//                       />
//                       <DetailItem
//                         label="Locality"
//                         value={
//                           property.locality
//                         }
//                       />
//                       <DetailItem
//                         label="Pincode"
//                         value={
//                           property.pinCode
//                         }
//                       />
//                       <DetailItem
//                         label="Latitude"
//                         value={
//                           property.latitude
//                         }
//                       />
//                       <DetailItem
//                         label="Longitude"
//                         value={
//                           property.longitude
//                         }
//                       />
//                     </div>

//                     <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
//                       {property.latitude &&
//                       property.longitude ? (
//                         <iframe
//                           title="map"
//                           width="100%"
//                           height="280"
//                           loading="lazy"
//                           src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
//                         />
//                       ) : (
//                         <div className="flex h-[280px] items-center justify-center text-[10px] text-slate-400">
//                           No location available
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </InfoPanel>

//                 <InfoPanel
//                   title="Amenities"
//                   icon={<FiGrid />}
//                 >
//                   {property.amenities
//                     ?.length ? (
//                     <div className="flex flex-wrap gap-2">
//                       {property.amenities.map(
//                         (
//                           item,
//                           index
//                         ) => (
//                           <span
//                             key={
//                               index
//                             }
//                             className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-[10px] font-semibold text-teal-700"
//                           >
//                             {item}
//                           </span>
//                         )
//                       )}
//                     </div>
//                   ) : (
//                     <p className="text-[10px] text-slate-400">
//                       No amenities added.
//                     </p>
//                   )}
//                 </InfoPanel>
//               </div>

//               <div className="space-y-4">
//                 <InfoPanel
//                   title="Pricing"
//                   icon={
//                     <FiDollarSign />
//                   }
//                 >
//                   <DetailItem
//                     label="Property Price"
//                     value={formatCurrency(
//                       property.price
//                     )}
//                   />
//                   <DetailItem
//                     label="Price / Sq.Ft"
//                     value={
//                       property.pricePerSqft
//                         ? formatCurrency(
//                             property.pricePerSqft
//                           )
//                         : "-"
//                     }
//                   />
//                   <DetailItem
//                     label="Maintenance"
//                     value={formatCurrency(
//                       property.maintenance
//                     )}
//                   />
//                   <DetailItem
//                     label="Booking Amount"
//                     value={formatCurrency(
//                       property.bookingAmount
//                     )}
//                   />
//                   <DetailItem
//                     label="Negotiable"
//                     value={
//                       property.negotiable
//                         ? "Yes"
//                         : "No"
//                     }
//                   />
//                 </InfoPanel>

//                 <InfoPanel
//                   title="Area"
//                   icon={
//                     <FiMaximize2 />
//                   }
//                 >
//                   <DetailItem
//                     label="Property Size"
//                     value={`${
//                       property.propertySize ||
//                       "-"
//                     } ${
//                       property.sizeUnit ||
//                       ""
//                     }`}
//                   />
//                   <DetailItem
//                     label="Super Built-up"
//                     value={
//                       property.superBuiltupArea
//                         ? `${property.superBuiltupArea} Sq.Ft`
//                         : "-"
//                     }
//                   />
//                   <DetailItem
//                     label="Carpet Area"
//                     value={
//                       property.carpetArea
//                         ? `${property.carpetArea} Sq.Ft`
//                         : "-"
//                     }
//                   />
//                 </InfoPanel>

//                 <InfoPanel
//                   title="Documents"
//                   icon={
//                     <FiFileText />
//                   }
//                 >
//                   <div className="space-y-2">
//                     {property.floorPlan && (
//                       <a
//                         href={
//                           property.floorPlan
//                         }
//                         target="_blank"
//                         rel="noreferrer"
//                         className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-[10px] font-semibold text-slate-600 transition hover:border-teal-200 hover:bg-teal-50"
//                       >
//                         Floor Plan
//                         <FiFileText />
//                       </a>
//                     )}

//                     {property.reraCertificate && (
//                       <a
//                         href={
//                           property.reraCertificate
//                         }
//                         target="_blank"
//                         rel="noreferrer"
//                         className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-[10px] font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50"
//                       >
//                         RERA Certificate
//                         <FiFileText />
//                       </a>
//                     )}

//                     {!property.floorPlan &&
//                       !property.reraCertificate && (
//                         <p className="text-[10px] text-slate-400">
//                           No documents uploaded.
//                         </p>
//                       )}
//                   </div>
//                 </InfoPanel>

//                 {(property.videoLink ||
//                   property.video) && (
//                   <InfoPanel
//                     title="Walkthrough"
//                     icon={<FiVideo />}
//                   >
//                     <video
//                       controls
//                       className="w-full rounded-xl"
//                       src={
//                         property.videoLink ||
//                         property.video
//                       }
//                     />
//                   </InfoPanel>
//                 )}
//               </div>
//             </section>

//             {property.tags?.length >
//               0 && (
//               <InfoPanel
//                 title="Intelligence Tags"
//                 icon={
//                   <MdOutlineAutoAwesome />
//                 }
//                 className="mt-4"
//               >
//                 <div className="flex flex-wrap gap-2">
//                   {property.tags.map(
//                     (tag, index) => (
//                       <span
//                         key={index}
//                         className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700"
//                       >
//                         #{tag}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </InfoPanel>
//             )}

//             <div className="h-4" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PreviewRow({
//   label,
//   value,
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span className="text-[10px] text-white/55">
//         {label}
//       </span>
//       <span className="max-w-[60%] truncate text-right text-[10px] font-bold text-white">
//         {value || "-"}
//       </span>
//     </div>
//   );
// }

// function PropertyStat({
//   label,
//   value,
// }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//       <p className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
//         {label}
//       </p>
//       <p className="mt-2 text-lg font-extrabold text-[#173c37]">
//         {value || "-"}
//       </p>
//     </div>
//   );
// }

// function InfoPanel({
//   title,
//   icon,
//   children,
//   className = "",
// }) {
//   return (
//     <section
//       className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 ${className}`}
//     >
//       <div className="mb-4 flex items-center gap-2">
//         <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
//           {icon}
//         </div>
//         <h3 className="text-sm font-extrabold text-[#173c37]">
//           {title}
//         </h3>
//       </div>

//       {children}
//     </section>
//   );
// }

// function DetailItem({
//   label,
//   value,
// }) {
//   return (
//     <div className="flex items-start justify-between gap-4 border-b border-slate-100 py-2.5 last:border-b-0">
//       <span className="text-[10px] text-slate-400">
//         {label}
//       </span>
//       <span className="max-w-[60%] break-words text-right text-[10px] font-bold text-slate-700">
//         {value === 0
//           ? 0
//           : value || "-"}
//       </span>
//     </div>
//   );
// }
import { useEffect, useMemo, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  getAllPropertiesApi,
  getPropertyByIdApi,
  deletePropertyApi,
  updatePropertyApi,
  updatePropertyStatusApi,
} from "../../../Services/propertyService";
import {
  FiFilter,
  FiUpload,
  FiEye,
  FiEdit2,
  FiChevronDown,
  FiChevronUp,
  FiInfo,
  FiTrash2,
  FiX,
  FiMapPin,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiHome,
  FiUser,
  FiCheckCircle,
  FiClock,
  FiGrid,
  FiImage,
  FiFileText,
  FiVideo,
  FiDollarSign,
  FiMaximize2,
  FiNavigation,
} from "react-icons/fi";

import {
  MdOutlineCheckCircle,
  MdOutlineAutoAwesome,
  MdTrendingUp,
  MdVerified,
  MdOutlinePhotoLibrary,
} from "react-icons/md";

import { BsRobot } from "react-icons/bs";
import Swal from "sweetalert2";

const DARK = "#1F3C50";
const ACCENT = "#35C99A";

const SCROLLBAR_HIDDEN =
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

/* =========================================================
   HELPERS
========================================================= */

const formatCurrency = (value) =>
  `₹ ${Number(value || 0).toLocaleString("en-IN")}`;

const formatStatus = (value) =>
  String(value || "-").replaceAll("_", " ");

function StatusBadge({ status }) {
  const styles = {
    Draft: "bg-[#F4F7F8] text-[#536779] border-[#DCE5E9]",
    Submitted: "bg-[#EEF6FF] text-[#2E90FA] border-blue-200",
    Assigned_To_Partner:
      "bg-cyan-50 text-cyan-700 border-cyan-200",
    Reviewing:
      "bg-[#FFF5E8] text-[#D97706] border-amber-200",
    Verified:
      "bg-[#EAF9F4] text-[#15966F] border-[#35C99A]/30",
    Live:
      "bg-[#EAF9F4] text-[#15966F] border-green-200",
    Rejected:
      "bg-red-50 text-red-700 border-red-200",
    Sold:
      "bg-purple-50 text-purple-700 border-purple-200",
    Rented:
      "bg-indigo-50 text-indigo-700 border-indigo-200",
  };

  return (
    <span
      className={`inline-flex max-w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-full border px-1.5 py-1 text-[10px] font-bold sm:px-2 sm:text-[10px] lg:px-2.5 lg:text-[10px] ${
        styles[status] || "bg-[#F4F7F8] text-[#536779] border-[#DCE5E9]"
      }`}
    >
      {formatStatus(status)}
    </span>
  );
}

function CreatorBadge({ role }) {
  const styles = {
    Admin: "bg-[#EEF6FF] text-[#2E90FA]",
    Partner: "bg-[#EAF9F4] text-[#15966F]",
    Seller: "bg-orange-50 text-orange-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold ${
        styles[role] || "bg-gray-100 text-[#536779]"
      }`}
    >
      {role || "Unknown"}
    </span>
  );
}


/* =========================================================
   CUSTOM HOVER TOOLTIP
========================================================= */

function HoverTooltip({
  children,
  text,
  position = "top",
  className = "",
}) {
  if (!text) {
    return children;
  }

  const positions = {
    top:
      "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom:
      "top-full left-1/2 -translate-x-1/2 mt-2",
    left:
      "right-full top-1/2 -translate-y-1/2 mr-2",
    right:
      "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrows = {
    top:
      "left-1/2 top-full -translate-x-1/2 border-x-[6px] border-x-transparent border-t-[6px] border-t-[#173247]",
    bottom:
      "left-1/2 bottom-full -translate-x-1/2 border-x-[6px] border-x-transparent border-b-[6px] border-b-[#173247]",
    left:
      "left-full top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-[#173247]",
    right:
      "right-full top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-r-[6px] border-r-[#173247]",
  };

  return (
    <div
      className={`group/tooltip relative min-w-0 ${className}`}
    >
      {children}

      <div
        className={`
          pointer-events-none
          absolute
          ${positions[position]}
          z-[99999]
          invisible
          w-max
          max-w-[300px]
          translate-y-1
          rounded-xl
          bg-[#173247]
          px-3
          py-2
          text-[10px]
          font-semibold
          leading-4
          text-white
          opacity-0
          shadow-[0_10px_30px_rgba(15,23,42,0.25)]
          transition-all
          duration-150
          group-hover/tooltip:visible
          group-hover/tooltip:translate-y-0
          group-hover/tooltip:opacity-100
        `}
      >
        <span className="block break-words">
          {text}
        </span>

        <span
          className={`absolute h-0 w-0 ${arrows[position]}`}
        />
      </div>
    </div>
  );
}

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [locked]);
}

/* =========================================================
   AI ASSISTANT
========================================================= */

function AIAssistant({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 w-[calc(100vw-2rem)] max-w-[370px] overflow-hidden rounded-[16px] border border-[#DCE5E9] bg-white shadow-2xl sm:right-6">
      <div className="flex items-center justify-between border-b border-[#E7EDF0] bg-[#EAF9F4] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: DARK }}
          >
            <BsRobot size={16} />
          </div>

          <div>
            <p className="text-xs font-extrabold text-[#173247]">
              AI Property Assistant
            </p>
            <p className="text-[10px] text-[#91A2AC]">
              Smart listing workflows
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#91A2AC] transition hover:bg-white hover:text-[#425A70]"
        >
          <FiX size={15} />
        </button>
      </div>

      <div className="space-y-3 p-4">
        <p className="text-[11px] leading-5 text-[#7D8C9C]">
          Select a property to unlock AI assisted listing workflows.
        </p>

        <button className="flex w-full items-center justify-between rounded-xl bg-[#25B98B] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#15966F]">
          Generate Description
          <MdOutlineAutoAwesome size={16} />
        </button>

        <button className="flex w-full items-center justify-between rounded-xl border border-[#35C99A]/30 bg-[#EAF9F4] px-4 py-3 text-xs font-semibold text-[#15966F] transition hover:bg-[#EAF9F4]">
          Suggest Price
          <MdTrendingUp size={16} />
        </button>

        <div className="flex items-start gap-2.5 rounded-xl bg-[#F8FAFB] px-3 py-3">
          <FiInfo
            size={14}
            className="mt-0.5 shrink-0 text-[#91A2AC]"
          />
          <p className="text-[10px] leading-4 text-[#7D8C9C]">
            DIGINIWAS AI can help optimize descriptions, pricing,
            positioning and lead capture.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function PropertyManagement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    if (!id) return;

    let cancelled = false;

    const openPropertyFromRoute = async () => {
      try {
        const response = await getPropertyByIdApi(id);

        if (cancelled) return;

        if (response?.success && response?.data) {
          setSelectedProperty(response.data);
          setPreviewOpen(true);
        } else {
          throw new Error("Property details were not returned by the API.");
        }
      } catch (error) {
        if (cancelled) return;

        console.error("Property Detail Error:", error);

        await Swal.fire({
          icon: "error",
          title: "Property Not Found",
          text:
            error?.response?.data?.message ||
            error?.message ||
            "Unable to load property details.",
          confirmButtonColor: DARK,
        });

        navigate("/property-management", { replace: true });
      }
    };

    openPropertyFromRoute();

    return () => {
      cancelled = true;
    };
  }, [id, navigate]);

  const [editOpen, setEditOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);

  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const [counts, setCounts] = useState({
    all: 0,
    admin: 0,
    partner: 0,
    seller: 0,
  });

  const statusOptions = [
    "All",
    "Submitted",
    "Assigned_To_Partner",
    "Reviewing",
    "Verified",
    "Live",
    "Rejected",
    "Sold",
    "Rented",
  ];

  /* =========================================================
     FETCH
  ========================================================= */

  const getProperties = async () => {
    try {
      setLoading(true);

      const response = await getAllPropertiesApi({
        role: selectedRole === "All" ? "" : selectedRole,
        status: selectedStatus === "All" ? "" : selectedStatus,
        city: selectedCity === "All" ? "" : selectedCity,
        search: search.trim(),
      });

      if (response?.success) {
        const apiProperties = Array.isArray(response?.data)
          ? response.data
          : [];

        // Draft must never show in admin Property Management.
        const visibleProperties = apiProperties.filter(
          (item) =>
            String(item?.status || "")
              .trim()
              .toLowerCase() !== "draft"
        );

        setProperties(visibleProperties);

        // Prefer backend counts if available.
        // If backend still includes Draft in counts, list remains safe.
        setCounts({
          all: response?.counts?.all || visibleProperties.length,
          admin:
            response?.counts?.admin ||
            visibleProperties.filter(
              (p) => p?.addedBy?.role === "Admin"
            ).length,
          partner:
            response?.counts?.partner ||
            visibleProperties.filter(
              (p) => p?.addedBy?.role === "Partner"
            ).length,
          seller:
            response?.counts?.seller ||
            visibleProperties.filter(
              (p) => p?.addedBy?.role === "Seller"
            ).length,
        });
      } else {
        setProperties([]);
      }
    } catch (error) {
      console.error(
        "GET PROPERTIES ERROR:",
        error?.response?.data || error
      );
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getProperties();
    }, 300);

    return () => clearTimeout(timer);
  }, [
    selectedRole,
    selectedStatus,
    selectedCity,
    search,
  ]);

  const cityOptions = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          properties
            .map((item) => item?.city)
            .filter(Boolean)
        )
      ).sort(),
    ],
    [properties]
  );

  const roleTabs = [
    { label: "All", count: counts.all, icon: FiGrid },
    { label: "Admin", count: counts.admin, icon: FiUser },
    { label: "Partner", count: counts.partner, icon: FiCheckCircle },
    { label: "Seller", count: counts.seller, icon: FiHome },
  ];

  const filteredSummary = useMemo(() => {
    return {
      verified: properties.filter(
        (p) => p.status === "Verified"
      ).length,
      live: properties.filter(
        (p) => p.status === "Live"
      ).length,
      reviewing: properties.filter(
        (p) =>
          p.status === "Reviewing" ||
          p.status === "Assigned_To_Partner"
      ).length,
    };
  }, [properties]);

  /* =========================================================
     ACTIONS
  ========================================================= */

  const handleDeleteProperty = async (id) => {
    const property = properties.find(
      (item) => item?._id === id
    );

    const result = await Swal.fire({
      icon: "warning",
      title: "Delete Property?",
      html: `
        <div style="font-size:13px;color:#64748b;line-height:1.6">
          Are you sure you want to delete
          <strong style="color:#1F3C50">
            ${property?.title || "this property"}
          </strong>
          ${
            property?.propertyId
              ? `(${property.propertyId})`
              : ""
          }?
          <br/>
          <span style="color:#dc2626;font-weight:600">
            This action cannot be undone.
          </span>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#64748b",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      const response =
        await deletePropertyApi(id);

      if (response?.success) {
        await Swal.fire({
          icon: "success",
          title: "Property Deleted",
          text:
            response?.message ||
            "Property deleted successfully.",
          confirmButtonColor: DARK,
        });

        await getProperties();
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text:
          error?.response?.data?.message ||
          "Unable to delete property.",
        confirmButtonColor: DARK,
      });
    }
  };

  const handleVerifyProperty = async (property) => {
    if (property?.status === "Verified") {
      await Swal.fire({
        icon: "info",
        title: "Already Verified",
        text: "This property is already verified.",
        confirmButtonColor: DARK,
      });

      return;
    }

    const result = await Swal.fire({
      icon: "question",
      title: "Verify Property?",
      html: `
        <div style="font-size:13px;color:#64748b;line-height:1.6">
          Verify
          <strong style="color:#1F3C50">
            ${property?.title || "this property"}
          </strong>
          ${
            property?.propertyId
              ? `(${property.propertyId})`
              : ""
          }?
          <br/>
          Status will be changed to
          <strong style="color:#25B98B">Verified</strong>.
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Yes, Verify",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#25B98B",
      cancelButtonColor: "#64748b",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      const response =
        await updatePropertyStatusApi(
          property._id,
          {
            status: "Verified",
            notes:
              "Property verified by admin from Property Management.",
          }
        );

      if (response?.success) {
        await Swal.fire({
          icon: "success",
          title: "Property Verified",
          text:
            response?.message ||
            "Property verified successfully.",
          confirmButtonColor: "#25B98B",
        });

        await getProperties();
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Verification Failed",
        text:
          error?.response?.data?.message ||
          "Unable to verify property.",
        confirmButtonColor: DARK,
      });
    }
  };

  const handleOpenPreview = async (property) => {
    try {
      const response =
        await getPropertyByIdApi(
          property._id
        );

      setSelectedProperty(
        response?.data || property
      );
    } catch (error) {
      setSelectedProperty(property);
    }

    setPreviewOpen(true);
  };

  const handleOpenEdit = async (property) => {
    try {
      const response =
        await getPropertyByIdApi(
          property._id
        );

      setEditingProperty(
        response?.data || property
      );
    } catch (error) {
      setEditingProperty(property);
    }

    setEditOpen(true);
  };

  const handlePropertyUpdated = async () => {
    setEditOpen(false);
    setEditingProperty(null);
    await getProperties();
  };

  const clearFilters = () => {
    setSelectedRole("All");
    setSelectedStatus("All");
    setSelectedCity("All");
    setSearch("");
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div className="min-h-screen font-sans text-[#173247]">
      <div className="mx-auto w-full max-w-[1500px] px-1 py-2 sm:px-1 lg:px-1">
        {/* ================= DIGINIWAS HEADER ================= */}
        <section className="relative mb-3 overflow-hidden rounded-[20px] bg-[#1F3C50] px-5 py-5 shadow-sm md:px-7">
          <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#35C99A]/10" />
          <div className="pointer-events-none absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-white/5" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#35C99A] text-white shadow-sm">
                <FiHome size={20} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9FB3C0]">
                  DigiNiwas Admin
                </p>

                <h1 className="mt-0.5 text-xl font-bold tracking-tight text-white md:text-2xl">
                  Property Management
                </h1>

                <p className="mt-1 text-xs text-[#C3D0D8]">
                  Manage, verify and maintain properties added by Admin, Partner and Seller
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#35C99A]" />
              <div>
                <p className="text-[9px] font-medium uppercase tracking-wide text-[#AFC0CA]">
                  Current View
                </p>
                <p className="text-xs font-semibold text-white">
                  Property Directory
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ACTION BAR ================= */}
        <section className="mb-3 rounded-[18px] border border-[#DCE5E9] bg-white px-4 py-3 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-xl bg-[#1F3C50] px-4 py-2.5 text-xs font-semibold text-white shadow-sm">
                <FiGrid size={14} />
                Dashboard
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFilterOpen((prev) => !prev)}
                className={`flex h-[38px] items-center gap-2 rounded-lg border px-4 text-[10px] font-semibold transition ${
                  filterOpen
                    ? "border-[#1F3C50] bg-[#1F3C50] text-white"
                    : "border-[#DCE5E9] bg-white text-[#536779] hover:border-[#35C99A]/40 hover:bg-[#F8FAFB]"
                }`}
              >
                <FiFilter size={13} />
                Filters
                {filterOpen ? <FiChevronUp size={12} /> : <FiChevronDown size={12} />}
              </button>

              <button
                type="button"
                className="flex h-[38px] items-center gap-2 rounded-lg border border-[#DCE5E9] bg-white px-4 text-[10px] font-semibold text-[#536779] transition hover:border-[#35C99A]/40 hover:bg-[#F8FAFB]"
              >
                <FiUpload size={13} />
                Export
              </button>
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            label="Visible Properties"
            value={properties.length}
            icon={<FiGrid />}
          />

          <SummaryCard
            label="Reviewing"
            value={filteredSummary.reviewing}
            icon={<FiClock />}
            tone="amber"
          />

          <SummaryCard
            label="Verified"
            value={filteredSummary.verified}
            icon={<FiCheckCircle />}
            tone="emerald"
          />

          <SummaryCard
            label="Live"
            value={filteredSummary.live}
            icon={<MdVerified />}
            tone="green"
          />
        </section>

        {/* CREATOR TABS */}
        <section className="mb-3 rounded-[18px] border border-[#DCE5E9] bg-white p-3 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
          <div
            className={`flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${SCROLLBAR_HIDDEN}`}
          >
            {roleTabs.map(
              ({ label, count, icon: Icon }) => {
                const active =
                  selectedRole === label;

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() =>
                      setSelectedRole(label)
                    }
                    className={`flex min-w-max items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                      active
                        ? "bg-[#1F3C50] text-white shadow-sm"
                        : "bg-[#F2F6F7] text-[#667B88] hover:bg-[#EAF9F4] hover:text-[#15966F]"
                    }`}
                  >
                    <Icon size={13} />
                    {label}

                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] ${
                        active
                          ? "bg-white/15 text-white"
                          : "bg-[#F1F5F6] text-[#7D8C9C]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </section>

        {/* SEARCH + FILTERS */}
        <section className="mb-4 rounded-[18px] border border-[#DCE5E9] bg-white p-4 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <FiSearch
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#91A2AC]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search by property ID, title, city, locality or creator..."
                className="h-10 w-full rounded-xl border border-[#DCE5E9] bg-white pl-9 pr-4 text-xs font-medium text-[#173247] outline-none transition placeholder:text-[#9DABB3] focus:border-[#35C99A] focus:ring-2 focus:ring-[#35C99A]/10"
              />
            </div>

            {filterOpen && (
              <div className="flex flex-col gap-2 sm:flex-row">
                <select
                  value={selectedStatus}
                  onChange={(e) =>
                    setSelectedStatus(
                      e.target.value
                    )
                  }
                  className="h-10 min-w-[180px] rounded-xl border border-[#DCE5E9] bg-white px-3 text-xs font-semibold text-[#526A78] outline-none focus:border-[#35C99A]"
                >
                  {statusOptions.map(
                    (item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item === "All"
                          ? "All Status"
                          : formatStatus(item)}
                      </option>
                    )
                  )}
                </select>

                <select
                  value={selectedCity}
                  onChange={(e) =>
                    setSelectedCity(
                      e.target.value
                    )
                  }
                  className="h-10 min-w-[165px] rounded-xl border border-[#DCE5E9] bg-white px-3 text-xs font-semibold text-[#526A78] outline-none focus:border-[#35C99A]"
                >
                  {cityOptions.map(
                    (item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item === "All"
                          ? "All Cities"
                          : item}
                      </option>
                    )
                  )}
                </select>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="h-[38px] rounded-lg border border-[#DCE5E9] px-4 text-xs font-semibold text-[#7D8C9C] transition hover:bg-[#F8FAFB]"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ACTIVE FILTER CHIPS */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#91A2AC]">
            Showing
          </span>

          <FilterChip>
            {selectedRole === "All"
              ? "All Creators"
              : `${selectedRole} Added`}
          </FilterChip>

          {selectedStatus !== "All" && (
            <FilterChip tone="amber">
              {formatStatus(selectedStatus)}
            </FilterChip>
          )}

          {selectedCity !== "All" && (
            <FilterChip tone="blue">
              {selectedCity}
            </FilterChip>
          )}
        </div>

        {/* TABLE CARD */}
        <section className="relative overflow-visible rounded-[18px] border border-[#DCE5E9] bg-white shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
          <div className="flex items-center justify-between border-b border-[#E7EDF0] bg-[#F8FAFB] px-4 py-3 sm:px-5">
            <div>
              <h2 className="text-[11px] font-bold text-[#173247]">
                Property Directory
              </h2>

              <p className="mt-0.5 text-[10px] text-[#91A2AC]">
                Draft properties are hidden from this admin view.
              </p>
            </div>

            <span className="rounded-full bg-[#F1F5F6] px-2.5 py-1 text-[10px] font-bold text-[#7D8C9C]">
              {properties.length}
            </span>
          </div>

          {/* 
            RESPONSIVE PROPERTY DIRECTORY
            - No horizontal scrollbar
            - Table always fits available screen width
            - Less important columns hide on smaller screens
          */}
          <div className="relative w-full overflow-visible">
            <table className="w-full table-fixed">
              <colgroup>
                <col className="w-[34%] sm:w-[29%] lg:w-[24%]" />
                <col className="hidden sm:table-column sm:w-[17%] lg:w-[14%]" />
                <col className="hidden lg:table-column lg:w-[15%]" />
                <col className="w-[18%] sm:w-[15%] lg:w-[11%]" />
                <col className="w-[24%] sm:w-[18%] lg:w-[13%]" />
                <col className="hidden xl:table-column xl:w-[15%]" />
                <col className="w-[24%] sm:w-[21%] lg:w-[13%] xl:w-[8%]" />
              </colgroup>

              <thead>
                <tr className="bg-[#1F3C50] text-white">
                  <th className="px-2 py-3.5 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:px-3 sm:text-[10px]">
                    Property
                  </th>

                  <th className="hidden px-2 py-3.5 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:table-cell sm:px-3 sm:text-[10px]">
                    Added By
                  </th>

                  <th className="hidden px-3 py-3.5 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-white lg:table-cell">
                    Location
                  </th>

                  <th className="px-2 py-3.5 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:px-3 sm:text-[10px]">
                    Status
                  </th>

                  <th className="px-2 py-3.5 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:px-3 sm:text-[10px]">
                    Market Price
                  </th>

                  <th className="hidden px-3 py-3.5 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-white xl:table-cell">
                    Assigned Partner
                  </th>

                  <th className="px-1 py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:px-2 sm:text-[10px]">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <TableLoading />
                ) : properties.length === 0 ? (
                  <TableEmpty />
                ) : (
                  properties.map(
                    (property, index) => {
                      const creator =
                        property?.addedBy || {};

                      const assignedPartner =
                        property?.assignedPartner ||
                        {};

                      const imageUrl =
                        property?.images?.[0]
                          ?.url ||
                        "https://via.placeholder.com/120";

                      return (
                        <tr
                          key={
                            property._id ||
                            property.id
                          }
                          className={`transition hover:bg-[#f8fbfa] ${
                            index !==
                            properties.length - 1
                              ? "border-b border-[#E7EDF0]"
                              : ""
                          }`}
                        >
                          <td className="px-2 py-3 sm:px-3 sm:py-3.5">
                            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                              <img
                                src={imageUrl}
                                alt={
                                  property.title ||
                                  "Property"
                                }
                                className="hidden h-10 w-10 shrink-0 rounded-xl border border-[#E7EDF0] bg-[#F1F5F6] object-cover sm:block lg:h-11 lg:w-11"
                              />

                              <div className="min-w-0 flex-1">
                                <HoverTooltip
                                  text={property.title || "-"}
                                  position="top"
                                  className="w-full"
                                >
                                  <p className="w-full cursor-help truncate text-[10px] font-extrabold text-[#173247] sm:text-[11px]">
                                    {property.title ||
                                      "-"}
                                  </p>
                                </HoverTooltip>

                                <p className="mt-0.5 truncate text-[10px] font-bold text-[#25B98B] sm:mt-1 sm:text-[10px]">
                                  {property.propertyId ||
                                    "-"}
                                </p>

                                <p className="mt-0.5 hidden truncate text-[10px] text-[#91A2AC] sm:block sm:text-[10px]">
                                  {property.category ||
                                    "-"}{" "}
                                  •{" "}
                                  {property.transactionType ||
                                    "-"}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="hidden px-2 py-3 sm:table-cell sm:px-3 sm:py-3.5">
                            <HoverTooltip
                              text={creator?.name || "-"}
                              position="top"
                              className="w-full"
                            >
                              <p className="cursor-help truncate text-[10px] font-semibold text-[#425A70] lg:text-[11px]">
                                {creator?.name || "-"}
                              </p>
                            </HoverTooltip>

                            <div className="mt-1">
                              <CreatorBadge
                                role={creator?.role}
                              />
                            </div>

                            {(creator?.sellerId ||
                              creator?.partnerId) && (
                              <p className="mt-1 text-[10px] text-[#91A2AC]">
                                {creator?.sellerId ||
                                  creator?.partnerId}
                              </p>
                            )}
                          </td>

                          <td className="hidden px-3 py-3.5 lg:table-cell">
                            <div className="flex min-w-0 items-start gap-2">
                              <FiMapPin
                                size={13}
                                className="mt-0.5 shrink-0 text-[#91A2AC]"
                              />

                              <HoverTooltip
                                text={
                                  [
                                    property.locality,
                                    property.city,
                                    property.pinCode,
                                  ]
                                    .filter(Boolean)
                                    .join(", ") || "-"
                                }
                                position="top"
                                className="min-w-0 flex-1"
                              >
                                <div className="min-w-0 cursor-help">
                                  <p className="truncate text-[10px] font-semibold text-[#425A70] lg:text-[11px]">
                                    {property.locality ||
                                      "-"}
                                  </p>

                                  <p className="mt-1 truncate text-[10px] text-[#91A2AC]">
                                    {[
                                      property.city,
                                      property.pinCode,
                                    ]
                                      .filter(Boolean)
                                      .join(" • ")}
                                  </p>
                                </div>
                              </HoverTooltip>
                            </div>
                          </td>

                          <td className="px-2 py-3 sm:px-3 sm:py-3.5">
                            <HoverTooltip
                              text={formatStatus(
                                property.status
                              )}
                              position="top"
                              className="inline-block max-w-full"
                            >
                              <div className="cursor-help">
                                <StatusBadge
                                  status={
                                    property.status
                                  }
                                />
                              </div>
                            </HoverTooltip>
                          </td>

                          <td className="px-2 py-3 sm:px-3 sm:py-3.5">
                            <HoverTooltip
                              text={formatCurrency(
                                property.price
                              )}
                              position="top"
                              className="w-full"
                            >
                              <p className="cursor-help truncate text-[10px] font-extrabold text-[#173247] sm:text-[10px] lg:text-[11px]">
                                {formatCurrency(
                                  property.price
                                )}
                              </p>
                            </HoverTooltip>

                            <p className="mt-0.5 hidden truncate text-[10px] text-[#91A2AC] sm:block sm:text-[10px]">
                              {property.propertySize ||
                                "-"}{" "}
                              {property.sizeUnit || ""}
                            </p>
                          </td>

                          <td className="hidden px-3 py-3.5 xl:table-cell">
                            {assignedPartner?.partnerId ? (
                              <div>
                                <HoverTooltip
                                  text={
                                    assignedPartner?.name ||
                                    assignedPartner
                                      ?.partnerId?.name ||
                                    "-"
                                  }
                                  position="top"
                                  className="w-full"
                                >
                                  <p className="cursor-help truncate text-[10px] font-semibold text-[#425A70] lg:text-[11px]">
                                    {assignedPartner?.name ||
                                      assignedPartner
                                        ?.partnerId?.name ||
                                      "-"}
                                  </p>
                                </HoverTooltip>

                                <HoverTooltip
                                  text={
                                    assignedPartner?.partnerCode ||
                                    assignedPartner
                                      ?.partnerId
                                      ?.partnerId ||
                                    "-"
                                  }
                                  position="top"
                                  className="mt-1 w-full"
                                >
                                  <p className="cursor-help truncate text-[10px] font-bold text-[#25B98B]">
                                    {assignedPartner?.partnerCode ||
                                      assignedPartner
                                        ?.partnerId
                                        ?.partnerId ||
                                      "-"}
                                  </p>
                                </HoverTooltip>

                                <p className="mt-1 text-[10px] capitalize text-[#91A2AC]">
                                  {assignedPartner?.partnerType ||
                                    assignedPartner
                                      ?.partnerId
                                      ?.partnerType ||
                                    ""}
                                </p>
                              </div>
                            ) : (
                              <HoverTooltip
                                text="No partner has been assigned to this property."
                                position="top"
                                className="inline-block"
                              >
                                <span className="inline-flex cursor-help rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold text-orange-600">
                                  Not Assigned
                                </span>
                              </HoverTooltip>
                            )}
                          </td>

                          <td className="px-1 py-3 sm:px-2 sm:py-3.5">
                            <div className="flex flex-wrap items-center justify-center gap-0.5 sm:flex-nowrap">
                              <ActionButton
                                title="View Property"
                                tone="teal"
                                onClick={() =>
                                  handleOpenPreview(
                                    property
                                  )
                                }
                              >
                                <FiEye size={15} />
                              </ActionButton>

                              <ActionButton
                                title="Edit Property"
                                tone="blue"
                                onClick={() =>
                                  handleOpenEdit(
                                    property
                                  )
                                }
                              >
                                <FiEdit2
                                  size={14}
                                />
                              </ActionButton>

                              <ActionButton
                                title={
                                  property?.status ===
                                  "Verified"
                                    ? "Already Verified"
                                    : "Verify Property"
                                }
                                tone="green"
                                disabled={
                                  property?.status ===
                                  "Verified"
                                }
                                onClick={() =>
                                  handleVerifyProperty(
                                    property
                                  )
                                }
                              >
                                <MdOutlineCheckCircle
                                  size={17}
                                />
                              </ActionButton>

                              <ActionButton
                                title="Delete Property"
                                tone="red"
                                onClick={() =>
                                  handleDeleteProperty(
                                    property._id
                                  )
                                }
                              >
                                <FiTrash2
                                  size={14}
                                />
                              </ActionButton>
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-2 border-t border-[#E7EDF0] bg-[#fcfdfd] px-4 py-3 text-[10px] sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <p className="font-semibold text-[#7D8C9C]">
              Showing {properties.length} properties
            </p>

            <p className="text-[#91A2AC]">
              Admin {counts.admin} • Partner{" "}
              {counts.partner} • Seller{" "}
              {counts.seller}
            </p>
          </div>
        </section>
      </div>

      <AIAssistant
        open={chatOpen}
        onClose={() =>
          setChatOpen(false)
        }
      />

      <EditPropertyModal
        open={editOpen}
        property={editingProperty}
        onClose={() => {
          setEditOpen(false);
          setEditingProperty(null);
        }}
        onUpdated={
          handlePropertyUpdated
        }
      />

      <PropertyPreview
        open={previewOpen}
        property={selectedProperty}
        onClose={() => {
          setPreviewOpen(false);
          setSelectedProperty(null);

          // If preview was opened from /property-management/:id,
          // remove the id from the URL when the preview closes.
          if (id) {
            navigate("/property-management", { replace: true });
          }
        }}
      />

      <button
        onClick={() =>
          setChatOpen(
            (value) => !value
          )
        }
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#1F3C50] text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:right-6"
      >
        {chatOpen ? (
          <FiX size={19} />
        ) : (
          <BsRobot size={19} />
        )}
      </button>
    </div>
  );
}

/* =========================================================
   SMALL UI COMPONENTS
========================================================= */

function SummaryCard({
  label,
  value,
  icon,
  tone = "default",
}) {
  const tones = {
    default: {
      icon: "bg-[#EAF9F4] text-[#25B98B]",
      value: "text-[#173247]",
    },
    amber: {
      icon: "bg-[#FFF5E8] text-[#F79009]",
      value: "text-[#173247]",
    },
    emerald: {
      icon: "bg-[#EAF9F4] text-[#25B98B]",
      value: "text-[#173247]",
    },
    green: {
      icon: "bg-[#EAF9F4] text-[#25B98B]",
      value: "text-[#173247]",
    },
  };

  const current = tones[tone] || tones.default;

  return (
    <div className="group rounded-2xl border border-[#DCE5E9] bg-white p-4 shadow-[0_4px_18px_rgba(15,47,69,0.04)] transition-all duration-200 hover:-translate-y-[1px] hover:border-[#35C99A]/40 hover:shadow-[0_8px_24px_rgba(15,47,69,0.07)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7B8F9A]">
            {label}
          </p>

          <p className={`mt-3 text-2xl font-black ${current.value}`}>
            {Number(value || 0).toLocaleString()}
          </p>

          <p className="mt-1 text-[11px] font-medium text-[#94A4AD]">
            Property records
          </p>
        </div>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition group-hover:bg-[#35C99A] group-hover:text-white ${current.icon}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function FilterChip({
  children,
  tone = "teal",
}) {
  const tones = {
    teal:
      "bg-[#EAF9F4] text-[#15966F] border-teal-100",
    amber:
      "bg-[#FFF5E8] text-[#D97706] border-amber-100",
    blue:
      "bg-[#EEF6FF] text-[#2E90FA] border-blue-100",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function ActionButton({
  children,
  title,
  onClick,
  disabled = false,
  tone = "slate",
}) {
  const tones = {
    teal:
      "text-[#25B98B] hover:bg-[#EAF9F4]",
    blue:
      "text-blue-600 hover:bg-blue-50",
    green:
      "text-[#25B98B] hover:bg-[#EAF9F4]",
    red:
      "text-red-500 hover:bg-red-50",
    slate:
      "text-[#7D8C9C] hover:bg-[#F1F5F6]",
  };

  return (
    <HoverTooltip
      text={title}
      position="top"
      className="inline-flex"
    >
      <button
        type="button"
        aria-label={title}
        disabled={disabled}
        onClick={onClick}
        className={`flex h-7 w-7 items-center justify-center rounded-md transition sm:h-7 sm:w-7 ${
          tones[tone]
        } ${
          disabled
            ? "cursor-not-allowed opacity-40"
            : ""
        }`}
      >
        {children}
      </button>
    </HoverTooltip>
  );
}

function TableLoading() {
  return (
    <tr>
      <td
        colSpan={7}
        className="py-16 text-center"
      >
        <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-[#DCE5E9] border-t-teal-600" />
        <p className="mt-3 text-xs text-[#91A2AC]">
          Loading properties...
        </p>
      </td>
    </tr>
  );
}

function TableEmpty() {
  return (
    <tr>
      <td
        colSpan={7}
        className="py-16 text-center"
      >
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-[16px] bg-[#F1F5F6] text-[#91A2AC]">
          <FiHome size={18} />
        </div>

        <p className="mt-3 text-[11px] font-bold text-[#536779]">
          No Property Found
        </p>

        <p className="mt-1 text-[10px] text-[#91A2AC]">
          Try changing your filters or search.
        </p>
      </td>
    </tr>
  );
}

/* =========================================================
   EDIT MODAL
========================================================= */

function EditPropertyModal({
  open,
  property,
  onClose,
  onUpdated,
}) {
  const [form, setForm] =
    useState({});

  const [
    existingImages,
    setExistingImages,
  ] = useState([]);

  const [
    newImages,
    setNewImages,
  ] = useState([]);

  const [
    floorPlan,
    setFloorPlan,
  ] = useState(null);

  const [
    reraCertificate,
    setReraCertificate,
  ] = useState(null);

  const [video, setVideo] =
    useState(null);

  const [saving, setSaving] =
    useState(false);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!property) return;

    setForm({
      title: property.title || "",
      transactionType:
        property.transactionType ||
        "Sale",
      category:
        property.category ||
        "Residential",
      propertySize:
        property.propertySize || "",
      sizeUnit:
        property.sizeUnit ||
        "sqft",
      price:
        property.price || "",
      projectName:
        property.projectName ||
        "",
      developerName:
        property.developerName ||
        "",
      description:
        property.description ||
        "",
      city: property.city || "",
      locality:
        property.locality || "",
      pinCode:
        property.pinCode || "",
      address:
        property.address || "",
      latitude:
        property.latitude ?? "",
      longitude:
        property.longitude ?? "",
      maintenance:
        property.maintenance ?? "",
      bookingAmount:
        property.bookingAmount ?? "",
      negotiable:
        Boolean(
          property.negotiable
        ),
      superBuiltupArea:
        property.superBuiltupArea ??
        "",
      carpetArea:
        property.carpetArea ?? "",
      bedrooms:
        property.bedrooms || "",
      bathrooms:
        property.bathrooms || "",
      balconies:
        property.balconies || "",
      parking:
        property.parking || "",
      floorNo:
        property.floorNo ?? "",
      totalFloors:
        property.totalFloors ?? "",
      facing:
        property.facing || "",
      furnishing:
        property.furnishing || "",
      amenities:
        Array.isArray(
          property.amenities
        )
          ? property.amenities.join(
              ", "
            )
          : "",
      tags: Array.isArray(
        property.tags
      )
        ? property.tags.join(", ")
        : "",
    });

    setExistingImages(
      property.images || []
    );

    setNewImages([]);
    setFloorPlan(null);
    setReraCertificate(null);
    setVideo(null);
  }, [property]);

  if (!open || !property)
    return null;

  const setField = (
    name,
    value
  ) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const removeExistingImage = (
    index
  ) => {
    setExistingImages((prev) =>
      prev.filter(
        (_, imageIndex) =>
          imageIndex !== index
      )
    );
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    const confirm =
      await Swal.fire({
        icon: "question",
        title: "Update Property?",
        text:
          "Property details, images and documents will be updated.",
        showCancelButton: true,
        confirmButtonText:
          "Yes, Update",
        cancelButtonText: "Cancel",
        confirmButtonColor: DARK,
        cancelButtonColor:
          "#64748b",
      });

    if (!confirm.isConfirmed)
      return;

    try {
      setSaving(true);

      const payload =
        new FormData();

      Object.entries(form).forEach(
        ([key, value]) => {
          if (
            key === "amenities" ||
            key === "tags"
          )
            return;

          if (
            typeof value ===
            "boolean"
          ) {
            payload.append(
              key,
              value
                ? "true"
                : "false"
            );
          } else if (
            value !== undefined &&
            value !== null
          ) {
            payload.append(
              key,
              value
            );
          }
        }
      );

      payload.append(
        "amenities",
        JSON.stringify(
          String(
            form.amenities || ""
          )
            .split(",")
            .map((item) =>
              item.trim()
            )
            .filter(Boolean)
        )
      );

      payload.append(
        "tags",
        JSON.stringify(
          String(form.tags || "")
            .split(",")
            .map((item) =>
              item.trim()
            )
            .filter(Boolean)
        )
      );

      payload.append(
        "existingImages",
        JSON.stringify(
          existingImages
        )
      );

      newImages.forEach(
        (file) => {
          payload.append(
            "images",
            file
          );
        }
      );

      if (floorPlan) {
        payload.append(
          "floorPlan",
          floorPlan
        );
      }

      if (reraCertificate) {
        payload.append(
          "reraCertificate",
          reraCertificate
        );
      }

      if (video) {
        payload.append(
          "video",
          video
        );
      }

      const response =
        await updatePropertyApi(
          property._id,
          payload
        );

      if (response?.success) {
        await Swal.fire({
          icon: "success",
          title: "Property Updated",
          text:
            response?.message ||
            "Property updated successfully.",
          confirmButtonColor: DARK,
        });

        await onUpdated();
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Update Failed",
        text:
          error?.response?.data
            ?.message ||
          "Unable to update property.",
        confirmButtonColor: DARK,
      });
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    "h-10 w-full rounded-xl border border-[#DCE5E9] bg-white px-3 text-xs text-[#425A70] outline-none transition focus:border-[#35C99A]/50 focus:ring-2 focus:ring-teal-50";

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5">
      <div className="flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[18px] border border-white/20 bg-white shadow-2xl">
        {/* HEADER - NOT SCROLLING */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#E7EDF0] bg-white px-5 py-4 sm:px-6">
          <div>
            <div className="flex items-center gap-2">
              <FiEdit2 className="text-[#25B98B]" />

              <h2 className="text-lg font-extrabold text-[#173247]">
                Edit Property
              </h2>
            </div>

            <p className="mt-1 text-[10px] text-[#91A2AC]">
              {property.propertyId} •
              Update details, images and documents
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1F5F6] text-[#7D8C9C] transition hover:bg-slate-200"
          >
            <FiX size={16} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col"
        >
          {/* BODY - ONLY THIS SCROLLS */}
          <div
            className={`min-h-0 flex-1 overflow-y-auto bg-[#fbfcfc] p-4 sm:p-6 ${SCROLLBAR_HIDDEN}`}
          >
            <SectionCard
              title="Basic Information"
              subtitle="Core property information"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <EditField label="Title">
                  <input
                    className={
                      inputClass
                    }
                    value={
                      form.title || ""
                    }
                    onChange={(e) =>
                      setField(
                        "title",
                        e.target.value
                      )
                    }
                  />
                </EditField>

                <EditField label="Category">
                  <select
                    className={
                      inputClass
                    }
                    value={
                      form.category ||
                      ""
                    }
                    onChange={(e) =>
                      setField(
                        "category",
                        e.target.value
                      )
                    }
                  >
                    {[
                      "Residential",
                      "Commercial",
                      "Rental",
                      "Sell",
                      "Plot/Land",
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
                </EditField>

                <EditField label="Transaction">
                  <select
                    className={
                      inputClass
                    }
                    value={
                      form.transactionType ||
                      ""
                    }
                    onChange={(e) =>
                      setField(
                        "transactionType",
                        e.target.value
                      )
                    }
                  >
                    <option>
                      Sale
                    </option>
                    <option>
                      Rent
                    </option>
                  </select>
                </EditField>

                <EditField label="Price">
                  <input
                    className={
                      inputClass
                    }
                    value={
                      form.price || ""
                    }
                    onChange={(e) =>
                      setField(
                        "price",
                        e.target.value
                      )
                    }
                  />
                </EditField>

                <EditField label="Property Size">
                  <input
                    className={
                      inputClass
                    }
                    value={
                      form.propertySize ||
                      ""
                    }
                    onChange={(e) =>
                      setField(
                        "propertySize",
                        e.target.value
                      )
                    }
                  />
                </EditField>

                <EditField label="Size Unit">
                  <select
                    className={
                      inputClass
                    }
                    value={
                      form.sizeUnit ||
                      "sqft"
                    }
                    onChange={(e) =>
                      setField(
                        "sizeUnit",
                        e.target.value
                      )
                    }
                  >
                    {[
                      "sqft",
                      "sqyd",
                      "sqm",
                      "acre",
                      "bigha",
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
                </EditField>
              </div>
            </SectionCard>

            <SectionCard
              title="Project & Location"
              subtitle="Project and map-related details"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  [
                    "projectName",
                    "Project Name",
                  ],
                  [
                    "developerName",
                    "Developer Name",
                  ],
                  ["city", "City"],
                  [
                    "locality",
                    "Locality",
                  ],
                  [
                    "pinCode",
                    "Pin Code",
                  ],
                  [
                    "address",
                    "Address",
                  ],
                  [
                    "latitude",
                    "Latitude",
                  ],
                  [
                    "longitude",
                    "Longitude",
                  ],
                ].map(
                  ([name, label]) => (
                    <EditField
                      key={name}
                      label={label}
                    >
                      <input
                        className={
                          inputClass
                        }
                        value={
                          form[name] ??
                          ""
                        }
                        onChange={(
                          e
                        ) =>
                          setField(
                            name,
                            e.target
                              .value
                          )
                        }
                      />
                    </EditField>
                  )
                )}
              </div>
            </SectionCard>

            <SectionCard
              title="Specifications"
              subtitle="Physical and pricing specifications"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  [
                    "maintenance",
                    "Maintenance",
                  ],
                  [
                    "bookingAmount",
                    "Booking Amount",
                  ],
                  [
                    "superBuiltupArea",
                    "Super Built-up Area",
                  ],
                  [
                    "carpetArea",
                    "Carpet Area",
                  ],
                  [
                    "bedrooms",
                    "Bedrooms",
                  ],
                  [
                    "bathrooms",
                    "Bathrooms",
                  ],
                  [
                    "balconies",
                    "Balconies",
                  ],
                  [
                    "parking",
                    "Parking",
                  ],
                  [
                    "floorNo",
                    "Floor No",
                  ],
                  [
                    "totalFloors",
                    "Total Floors",
                  ],
                  [
                    "facing",
                    "Facing",
                  ],
                  [
                    "furnishing",
                    "Furnishing",
                  ],
                ].map(
                  ([name, label]) => (
                    <EditField
                      key={name}
                      label={label}
                    >
                      <input
                        className={
                          inputClass
                        }
                        value={
                          form[name] ??
                          ""
                        }
                        onChange={(
                          e
                        ) =>
                          setField(
                            name,
                            e.target
                              .value
                          )
                        }
                      />
                    </EditField>
                  )
                )}

                <EditField label="Negotiable">
                  <select
                    className={
                      inputClass
                    }
                    value={
                      form.negotiable
                        ? "true"
                        : "false"
                    }
                    onChange={(e) =>
                      setField(
                        "negotiable",
                        e.target
                          .value ===
                          "true"
                      )
                    }
                  >
                    <option value="false">
                      No
                    </option>
                    <option value="true">
                      Yes
                    </option>
                  </select>
                </EditField>

                <EditField label="Amenities (comma separated)">
                  <input
                    className={
                      inputClass
                    }
                    value={
                      form.amenities ||
                      ""
                    }
                    onChange={(e) =>
                      setField(
                        "amenities",
                        e.target.value
                      )
                    }
                  />
                </EditField>

                <EditField label="Tags (comma separated)">
                  <input
                    className={
                      inputClass
                    }
                    value={
                      form.tags || ""
                    }
                    onChange={(e) =>
                      setField(
                        "tags",
                        e.target.value
                      )
                    }
                  />
                </EditField>

                <div className="md:col-span-2 lg:col-span-3">
                  <EditField label="Description">
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-[#DCE5E9] bg-white p-3 text-xs text-[#425A70] outline-none transition focus:border-[#35C99A]/50 focus:ring-2 focus:ring-teal-50"
                      value={
                        form.description ||
                        ""
                      }
                      onChange={(e) =>
                        setField(
                          "description",
                          e.target
                            .value
                        )
                      }
                    />
                  </EditField>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              title="Media & Documents"
              subtitle="Manage listing images and documents"
            >
              <div>
                <p className="text-xs font-bold text-[#425A70]">
                  Existing Images
                </p>

                <div
                  className={`mt-3 flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-1 ${SCROLLBAR_HIDDEN}`}
                >
                  {existingImages.length ? (
                    existingImages.map(
                      (
                        image,
                        index
                      ) => (
                        <div
                          key={
                            image?.public_id ||
                            index
                          }
                          className="relative shrink-0"
                        >
                          <img
                            src={
                              image?.url
                            }
                            alt=""
                            className="h-24 w-32 rounded-xl border border-[#DCE5E9] object-cover"
                          />

                          <button
                            type="button"
                            onClick={() =>
                              removeExistingImage(
                                index
                              )
                            }
                            className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-md"
                          >
                            <FiX
                              size={
                                12
                              }
                            />
                          </button>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-[10px] text-[#91A2AC]">
                      No existing
                      images.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <UploadCard
                  icon={<FiImage />}
                  label="Add Images"
                  text={
                    newImages.length
                      ? `${newImages.length} selected`
                      : "Multiple images"
                  }
                >
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) =>
                      setNewImages(
                        Array.from(
                          e.target
                            .files || []
                        )
                      )
                    }
                    className="mt-3 block w-full text-[10px] text-[#7D8C9C]"
                  />
                </UploadCard>

                <UploadCard
                  icon={
                    <FiFileText />
                  }
                  label="Floor Plan"
                  text={
                    floorPlan?.name ||
                    "Replace file"
                  }
                >
                  <input
                    type="file"
                    onChange={(e) =>
                      setFloorPlan(
                        e.target
                          .files?.[0] ||
                          null
                      )
                    }
                    className="mt-3 block w-full text-[10px] text-[#7D8C9C]"
                  />
                </UploadCard>

                <UploadCard
                  icon={
                    <FiFileText />
                  }
                  label="RERA"
                  text={
                    reraCertificate?.name ||
                    "Replace certificate"
                  }
                >
                  <input
                    type="file"
                    onChange={(e) =>
                      setReraCertificate(
                        e.target
                          .files?.[0] ||
                          null
                      )
                    }
                    className="mt-3 block w-full text-[10px] text-[#7D8C9C]"
                  />
                </UploadCard>

                <UploadCard
                  icon={<FiVideo />}
                  label="Video"
                  text={
                    video?.name ||
                    "Upload walkthrough"
                  }
                >
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) =>
                      setVideo(
                        e.target
                          .files?.[0] ||
                          null
                      )
                    }
                    className="mt-3 block w-full text-[10px] text-[#7D8C9C]"
                  />
                </UploadCard>
              </div>
            </SectionCard>
          </div>

          {/* FOOTER - ALWAYS VISIBLE */}
          <div className="flex shrink-0 items-center justify-end gap-2 border-t border-[#E7EDF0] bg-white px-5 py-3 sm:px-6">
            <button
              type="button"
              onClick={onClose}
              className="h-[38px] rounded-lg border border-[#DCE5E9] px-5 text-xs font-semibold text-[#536779] transition hover:bg-[#F8FAFB]"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="h-[38px] rounded-lg bg-[#1F3C50] px-6 text-xs font-bold text-white transition hover:bg-[#123b36] disabled:opacity-50"
            >
              {saving
                ? "Updating..."
                : "Update Property"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function EditField({
  label,
  children,
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-[#91A2AC]">
        {label}
      </span>
      {children}
    </label>
  );
}

function SectionCard({
  title,
  subtitle,
  children,
}) {
  return (
    <section className="mb-4 rounded-[16px] border border-[#DCE5E9] bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4">
        <h3 className="text-sm font-extrabold text-[#173247]">
          {title}
        </h3>
        <p className="mt-0.5 text-[10px] text-[#91A2AC]">
          {subtitle}
        </p>
      </div>

      {children}
    </section>
  );
}

function UploadCard({
  icon,
  label,
  text,
  children,
}) {
  return (
    <div className="rounded-[16px] border border-dashed border-slate-300 bg-[#F8FAFB] p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#25B98B] shadow-sm">
        {icon}
      </div>

      <p className="mt-3 text-xs font-bold text-[#425A70]">
        {label}
      </p>

      <p className="mt-1 truncate text-[10px] text-[#91A2AC]">
        {text}
      </p>

      {children}
    </div>
  );
}

/* =========================================================
   PROPERTY PREVIEW
========================================================= */

function PropertyPreview({
  open,
  property,
  onClose,
}) {
  const [
    selectedImage,
    setSelectedImage,
  ] = useState(0);

  useBodyScrollLock(open);

  useEffect(() => {
    setSelectedImage(0);
  }, [property]);

  if (!open || !property)
    return null;

  const images =
    property.images?.length
      ? property.images
      : [
          {
            url: "https://via.placeholder.com/1200x700",
          },
        ];

  const previousImage = () =>
    setSelectedImage((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );

  const nextImage = () =>
    setSelectedImage((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/65 p-3 backdrop-blur-sm sm:p-5">
      <div className="flex h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-[18px] bg-white shadow-2xl">
        {/* STICKY HEADER */}
        <header className="flex shrink-0 items-center justify-between border-b border-[#E7EDF0] bg-white px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="truncate text-lg font-extrabold text-[#173247] sm:text-xl">
                {property.title}
              </h2>

              <StatusBadge
                status={property.status}
              />
            </div>

            <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#91A2AC]">
              <FiMapPin />
              <span className="truncate">
                {[
                  property.locality,
                  property.city,
                ]
                  .filter(Boolean)
                  .join(", ") || "Location not available"}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F6] text-[#7D8C9C] transition hover:bg-slate-200"
          >
            <FiX size={16} />
          </button>
        </header>

        {/* ONLY CONTENT AREA SCROLLS */}
        <div
          className={`min-h-0 flex-1 overflow-y-auto bg-[#f8faf9] ${SCROLLBAR_HIDDEN}`}
        >
          <div className="p-4 sm:p-6">
            {/* HERO */}
            <section className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)]">
              <div className="rounded-[16px] border border-[#DCE5E9] bg-white p-3 shadow-sm">
                <div className="relative overflow-hidden rounded-xl bg-[#F1F5F6]">
                  <img
                    src={
                      images[
                        selectedImage
                      ]?.url
                    }
                    alt={
                      property.title
                    }
                    className="h-[300px] w-full object-cover sm:h-[420px]"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={
                          previousImage
                        }
                        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#425A70] shadow"
                      >
                        <FiChevronLeft />
                      </button>

                      <button
                        onClick={
                          nextImage
                        }
                        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#425A70] shadow"
                      >
                        <FiChevronRight />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white">
                    {selectedImage + 1} /{" "}
                    {images.length}
                  </div>
                </div>

                {images.length > 1 && (
                  <div
                    className={`mt-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${SCROLLBAR_HIDDEN}`}
                  >
                    {images.map(
                      (
                        image,
                        index
                      ) => (
                        <button
                          key={
                            image?.public_id ||
                            index
                          }
                          onClick={() =>
                            setSelectedImage(
                              index
                            )
                          }
                          className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
                            selectedImage ===
                            index
                              ? "border-teal-500"
                              : "border-transparent"
                          }`}
                        >
                          <img
                            src={
                              image.url
                            }
                            alt=""
                            className="h-16 w-20 object-cover"
                          />
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="rounded-[16px] bg-[#1F3C50] p-5 text-white shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Market Price
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {formatCurrency(
                      property.price
                    )}
                  </h3>

                  <p className="mt-1 text-xs text-white/60">
                    {property.pricePerSqft
                      ? `${formatCurrency(
                          property.pricePerSqft
                        )} / Sq.Ft`
                      : "Price per sq.ft unavailable"}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
                    <PreviewRow
                      label="Property ID"
                      value={
                        property.propertyId
                      }
                    />
                    <PreviewRow
                      label="Category"
                      value={
                        property.category
                      }
                    />
                    <PreviewRow
                      label="Transaction"
                      value={
                        property.transactionType
                      }
                    />
                    <PreviewRow
                      label="Project"
                      value={
                        property.projectName
                      }
                    />
                    <PreviewRow
                      label="Developer"
                      value={
                        property.developerName
                      }
                    />
                  </div>
                </div>

                <div className="rounded-[16px] border border-[#DCE5E9] bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF9F4] text-[#25B98B]">
                      <MdOutlinePhotoLibrary
                        size={18}
                      />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#425A70]">
                        {images.length} Property Images
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#91A2AC]">
                        High resolution gallery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* QUICK STATS */}
            <section className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <PropertyStat
                label="Bedrooms"
                value={
                  property.bedrooms ||
                  "-"
                }
              />
              <PropertyStat
                label="Bathrooms"
                value={
                  property.bathrooms ||
                  "-"
                }
              />
              <PropertyStat
                label="Balconies"
                value={
                  property.balconies ||
                  "-"
                }
              />
              <PropertyStat
                label="Parking"
                value={
                  property.parking ||
                  "-"
                }
              />
            </section>

            {/* DETAILS */}
            <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.6fr)]">
              <div className="space-y-4">
                <InfoPanel
                  title="Property Details"
                  icon={<FiHome />}
                >
                  <div className="grid gap-x-8 md:grid-cols-2">
                    <DetailItem
                      label="Property ID"
                      value={
                        property.propertyId
                      }
                    />
                    <DetailItem
                      label="Category"
                      value={
                        property.category
                      }
                    />
                    <DetailItem
                      label="Transaction"
                      value={
                        property.transactionType
                      }
                    />
                    <DetailItem
                      label="Status"
                      value={formatStatus(
                        property.status
                      )}
                    />
                    <DetailItem
                      label="Project"
                      value={
                        property.projectName
                      }
                    />
                    <DetailItem
                      label="Developer"
                      value={
                        property.developerName
                      }
                    />
                    <DetailItem
                      label="Facing"
                      value={
                        property.facing
                      }
                    />
                    <DetailItem
                      label="Furnishing"
                      value={
                        property.furnishing
                      }
                    />
                    <DetailItem
                      label="Floor"
                      value={
                        property.floorNo
                      }
                    />
                    <DetailItem
                      label="Total Floors"
                      value={
                        property.totalFloors
                      }
                    />
                  </div>
                </InfoPanel>

                <InfoPanel
                  title="Description"
                  icon={
                    <FiFileText />
                  }
                >
                  <p className="text-xs leading-6 text-[#7D8C9C]">
                    {property.description ||
                      "No description added."}
                  </p>
                </InfoPanel>

                <InfoPanel
                  title="Property Location"
                  icon={
                    <FiNavigation />
                  }
                >
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div>
                      <DetailItem
                        label="Address"
                        value={
                          property.address
                        }
                      />
                      <DetailItem
                        label="City"
                        value={
                          property.city
                        }
                      />
                      <DetailItem
                        label="Locality"
                        value={
                          property.locality
                        }
                      />
                      <DetailItem
                        label="Pincode"
                        value={
                          property.pinCode
                        }
                      />
                      <DetailItem
                        label="Latitude"
                        value={
                          property.latitude
                        }
                      />
                      <DetailItem
                        label="Longitude"
                        value={
                          property.longitude
                        }
                      />
                    </div>

                    <div className="overflow-hidden rounded-xl border border-[#DCE5E9] bg-[#F1F5F6]">
                      {property.latitude &&
                      property.longitude ? (
                        <iframe
                          title="map"
                          width="100%"
                          height="280"
                          loading="lazy"
                          src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
                        />
                      ) : (
                        <div className="flex h-[280px] items-center justify-center text-[10px] text-[#91A2AC]">
                          No location available
                        </div>
                      )}
                    </div>
                  </div>
                </InfoPanel>

                <InfoPanel
                  title="Amenities"
                  icon={<FiGrid />}
                >
                  {property.amenities
                    ?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.map(
                        (
                          item,
                          index
                        ) => (
                          <span
                            key={
                              index
                            }
                            className="rounded-full border border-teal-100 bg-[#EAF9F4] px-3 py-1.5 text-[10px] font-semibold text-[#15966F]"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  ) : (
                    <p className="text-[10px] text-[#91A2AC]">
                      No amenities added.
                    </p>
                  )}
                </InfoPanel>
              </div>

              <div className="space-y-4">
                <InfoPanel
                  title="Pricing"
                  icon={
                    <FiDollarSign />
                  }
                >
                  <DetailItem
                    label="Property Price"
                    value={formatCurrency(
                      property.price
                    )}
                  />
                  <DetailItem
                    label="Price / Sq.Ft"
                    value={
                      property.pricePerSqft
                        ? formatCurrency(
                            property.pricePerSqft
                          )
                        : "-"
                    }
                  />
                  <DetailItem
                    label="Maintenance"
                    value={formatCurrency(
                      property.maintenance
                    )}
                  />
                  <DetailItem
                    label="Booking Amount"
                    value={formatCurrency(
                      property.bookingAmount
                    )}
                  />
                  <DetailItem
                    label="Negotiable"
                    value={
                      property.negotiable
                        ? "Yes"
                        : "No"
                    }
                  />
                </InfoPanel>

                <InfoPanel
                  title="Area"
                  icon={
                    <FiMaximize2 />
                  }
                >
                  <DetailItem
                    label="Property Size"
                    value={`${
                      property.propertySize ||
                      "-"
                    } ${
                      property.sizeUnit ||
                      ""
                    }`}
                  />
                  <DetailItem
                    label="Super Built-up"
                    value={
                      property.superBuiltupArea
                        ? `${property.superBuiltupArea} Sq.Ft`
                        : "-"
                    }
                  />
                  <DetailItem
                    label="Carpet Area"
                    value={
                      property.carpetArea
                        ? `${property.carpetArea} Sq.Ft`
                        : "-"
                    }
                  />
                </InfoPanel>

                <InfoPanel
                  title="Documents"
                  icon={
                    <FiFileText />
                  }
                >
                  <div className="space-y-2">
                    {property.floorPlan && (
                      <a
                        href={
                          property.floorPlan
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-xl border border-[#DCE5E9] px-3 py-2.5 text-[10px] font-semibold text-[#536779] transition hover:border-[#35C99A]/30 hover:bg-[#EAF9F4]"
                      >
                        Floor Plan
                        <FiFileText />
                      </a>
                    )}

                    {property.reraCertificate && (
                      <a
                        href={
                          property.reraCertificate
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-xl border border-[#DCE5E9] px-3 py-2.5 text-[10px] font-semibold text-[#536779] transition hover:border-blue-200 hover:bg-blue-50"
                      >
                        RERA Certificate
                        <FiFileText />
                      </a>
                    )}

                    {!property.floorPlan &&
                      !property.reraCertificate && (
                        <p className="text-[10px] text-[#91A2AC]">
                          No documents uploaded.
                        </p>
                      )}
                  </div>
                </InfoPanel>

                {(property.videoLink ||
                  property.video) && (
                  <InfoPanel
                    title="Walkthrough"
                    icon={<FiVideo />}
                  >
                    <video
                      controls
                      className="w-full rounded-xl"
                      src={
                        property.videoLink ||
                        property.video
                      }
                    />
                  </InfoPanel>
                )}
              </div>
            </section>

            {property.tags?.length >
              0 && (
              <InfoPanel
                title="Intelligence Tags"
                icon={
                  <MdOutlineAutoAwesome />
                }
                className="mt-4"
              >
                <div className="flex flex-wrap gap-2">
                  {property.tags.map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-[#EAF9F4] px-3 py-1.5 text-[10px] font-semibold text-[#15966F]"
                      >
                        #{tag}
                      </span>
                    )
                  )}
                </div>
              </InfoPanel>
            )}

            <div className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewRow({
  label,
  value,
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[10px] text-white/55">
        {label}
      </span>
      <span className="max-w-[60%] truncate text-right text-[10px] font-bold text-white">
        {value || "-"}
      </span>
    </div>
  );
}

function PropertyStat({
  label,
  value,
}) {
  return (
    <div className="rounded-[16px] border border-[#DCE5E9] bg-white p-4 shadow-sm">
      <p className="text-[10px] font-bold uppercase tracking-wide text-[#91A2AC]">
        {label}
      </p>
      <p className="mt-2 text-lg font-extrabold text-[#173247]">
        {value || "-"}
      </p>
    </div>
  );
}

function InfoPanel({
  title,
  icon,
  children,
  className = "",
}) {
  return (
    <section
      className={`rounded-[16px] border border-[#DCE5E9] bg-white p-4 shadow-sm sm:p-5 ${className}`}
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EAF9F4] text-[#25B98B]">
          {icon}
        </div>
        <h3 className="text-sm font-extrabold text-[#173247]">
          {title}
        </h3>
      </div>

      {children}
    </section>
  );
}

function DetailItem({
  label,
  value,
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[#E7EDF0] py-2.5 last:border-b-0">
      <span className="text-[10px] text-[#91A2AC]">
        {label}
      </span>
      <span className="max-w-[60%] break-words text-right text-[10px] font-bold text-[#425A70]">
        {value === 0
          ? 0
          : value || "-"}
      </span>
    </div>
  );
}