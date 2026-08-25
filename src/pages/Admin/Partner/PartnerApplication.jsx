// // // import React, { useMemo, useState } from "react";
// // // import {
// // //   Search,
// // //   ChevronDown,
// // //   X,
// // //   MoreVertical,
// // //   CheckCircle2,
// // //   AlertTriangle,
// // //   Clock3,
// // //   Building2,
// // //   MapPin,
// // //   FileCheck2,
// // //   ShieldCheck,
// // //   Store,
// // //   BadgeCheck,
// // //   Eye,
// // //   CalendarDays,
// // //   UserRound,
// // //   BriefcaseBusiness,
// // // } from "lucide-react";

// // // /* =========================================================
// // //    DYNAMIC DATA
// // // ========================================================= */

// // // const initialApplications = [
// // //   {
// // //     id: "APP-2026-1882",
// // //     companyName: "Global Estates",
// // //     initials: "GE",
// // //     businessType: "Real Estate",
// // //     submittedDate: "17 Aug 2026",
// // //     location: "Gurgaon, Haryana",
// // //     status: "Under Review",
// // //     verificationProgress: 67,
// // //     registrationNumber: "HRERA-GGM-125-2021",
// // //     expiryDate: "12 Oct 2028",
// // //     phone: "+91 98123 45678",
// // //     email: "contact@globalestates.in",
// // //     registeredAddress: "DLF Phase 3, Gurgaon, Haryana",
// // //     applicationOwner: "Rohit Sharma",

// // //     regulatoryStatus: {
// // //       title: "Regulatory Status",
// // //       status: "Verified",
// // //       description:
// // //         "Verified against active RERA database automatically.",
// // //     },

// // //     checks: [
// // //       {
// // //         id: 1,
// // //         title: "Identity Verification",
// // //         subtitle: "Aadhaar & PAN matched",
// // //         status: "verified",
// // //       },
// // //       {
// // //         id: 2,
// // //         title: "Business Registration",
// // //         subtitle: "GSTIN Active",
// // //         status: "verified",
// // //       },
// // //       {
// // //         id: 3,
// // //         title: "Office Address",
// // //         subtitle: "Utility bill illegible",
// // //         status: "review",
// // //       },
// // //     ],

// // //     reviewerNotes: "",
// // //   },

// // //   {
// // //     id: "APP-2026-1025",
// // //     companyName: "Skyline Realty",
// // //     initials: "SR",
// // //     businessType: "Business",
// // //     submittedDate: "16 Aug 2026",
// // //     location: "Noida, UP",
// // //     status: "Under Review",
// // //     verificationProgress: 34,
// // //     registrationNumber: "UPRERA-PRJ-08421",
// // //     expiryDate: "28 Dec 2027",
// // //     phone: "+91 98765 11220",
// // //     email: "info@skylinerealty.in",
// // //     registeredAddress: "Sector 62, Noida, Uttar Pradesh",
// // //     applicationOwner: "Ankit Mehra",

// // //     regulatoryStatus: {
// // //       title: "Regulatory Status",
// // //       status: "Pending",
// // //       description:
// // //         "Registration details are currently being validated.",
// // //     },

// // //     checks: [
// // //       {
// // //         id: 1,
// // //         title: "Identity Verification",
// // //         subtitle: "PAN verification completed",
// // //         status: "verified",
// // //       },
// // //       {
// // //         id: 2,
// // //         title: "Business Registration",
// // //         subtitle: "GSTIN validation pending",
// // //         status: "review",
// // //       },
// // //       {
// // //         id: 3,
// // //         title: "Office Address",
// // //         subtitle: "Address verification pending",
// // //         status: "review",
// // //       },
// // //     ],

// // //     reviewerNotes: "",
// // //   },

// // //   {
// // //     id: "APP-2026-1641",
// // //     companyName: "Urban Nest",
// // //     initials: "UN",
// // //     businessType: "Broker",
// // //     submittedDate: "15 Aug 2026",
// // //     location: "Delhi",
// // //     status: "Action Required",
// // //     verificationProgress: 48,
// // //     registrationNumber: "DL-RERA-66322",
// // //     expiryDate: "04 May 2027",
// // //     phone: "+91 99910 44228",
// // //     email: "admin@urbannest.in",
// // //     registeredAddress: "Saket, New Delhi",
// // //     applicationOwner: "Priya Kapoor",

// // //     regulatoryStatus: {
// // //       title: "Regulatory Status",
// // //       status: "Attention Required",
// // //       description:
// // //         "Some regulatory information requires manual verification.",
// // //     },

// // //     checks: [
// // //       {
// // //         id: 1,
// // //         title: "Identity Verification",
// // //         subtitle: "Identity successfully verified",
// // //         status: "verified",
// // //       },
// // //       {
// // //         id: 2,
// // //         title: "Business Registration",
// // //         subtitle: "Registration certificate unclear",
// // //         status: "review",
// // //       },
// // //       {
// // //         id: 3,
// // //         title: "Office Address",
// // //         subtitle: "Address proof missing",
// // //         status: "review",
// // //       },
// // //     ],

// // //     reviewerNotes: "",
// // //   },

// // //   {
// // //     id: "APP-2026-1799",
// // //     companyName: "Property Avenue",
// // //     initials: "PA",
// // //     businessType: "Real Estate",
// // //     submittedDate: "14 Aug 2026",
// // //     location: "Jaipur, Rajasthan",
// // //     status: "New",
// // //     verificationProgress: 12,
// // //     registrationNumber: "RAJ-RERA-88721",
// // //     expiryDate: "11 Feb 2029",
// // //     phone: "+91 88771 22339",
// // //     email: "hello@propertyavenue.in",
// // //     registeredAddress: "C-Scheme, Jaipur, Rajasthan",
// // //     applicationOwner: "Kunal Jain",

// // //     regulatoryStatus: {
// // //       title: "Regulatory Status",
// // //       status: "Pending",
// // //       description: "Application is waiting for verification.",
// // //     },

// // //     checks: [
// // //       {
// // //         id: 1,
// // //         title: "Identity Verification",
// // //         subtitle: "Waiting for verification",
// // //         status: "review",
// // //       },
// // //       {
// // //         id: 2,
// // //         title: "Business Registration",
// // //         subtitle: "Waiting for verification",
// // //         status: "review",
// // //       },
// // //       {
// // //         id: 3,
// // //         title: "Office Address",
// // //         subtitle: "Waiting for verification",
// // //         status: "review",
// // //       },
// // //     ],

// // //     reviewerNotes: "",
// // //   },
// // // ];

// // // /* =========================================================
// // //    HELPER COMPONENTS
// // // ========================================================= */

// // // const StatCard = ({
// // //   title,
// // //   value,
// // //   active,
// // //   warning,
// // //   icon: Icon,
// // //   onClick,
// // // }) => {
// // //   return (
// // //     <button
// // //       onClick={onClick}
// // //       className={`
// // //         relative w-full rounded-[10px] border bg-white
// // //         px-4 py-3 text-left transition-all duration-200
// // //         hover:-translate-y-[1px] hover:shadow-md

// // //         ${
// // //           active
// // //             ? "border-[#0b806d] shadow-[0_3px_12px_rgba(5,105,88,0.10)]"
// // //             : "border-[#dfe8e6]"
// // //         }
// // //       `}
// // //     >
// // //       <div className="flex items-start justify-between gap-3">
// // //         <div>
// // //           <p className="text-[10px] font-medium text-[#697c80]">
// // //             {title}
// // //           </p>

// // //           <p
// // //             className={`mt-2 text-[20px] font-semibold ${
// // //               warning ? "text-[#bc7a20]" : "text-[#183843]"
// // //             }`}
// // //           >
// // //             {value}
// // //           </p>
// // //         </div>

// // //         {Icon && (
// // //           <Icon
// // //             size={15}
// // //             className={
// // //               warning ? "text-[#d5952d]" : "text-[#147c70]"
// // //             }
// // //           />
// // //         )}
// // //       </div>
// // //     </button>
// // //   );
// // // };

// // // const StatusBadge = ({ status }) => {
// // //   const styles = {
// // //     New: "bg-[#edf5ff] text-[#4c76a5] border-[#dceafa]",

// // //     "Under Review":
// // //       "bg-[#e9f8f4] text-[#177f6f] border-[#c9ece3]",

// // //     "Action Required":
// // //       "bg-[#fff4df] text-[#bd7c22] border-[#f4deaf]",

// // //     Approved:
// // //       "bg-[#e7f7ef] text-[#16845d] border-[#c8e9d9]",

// // //     Rejected:
// // //       "bg-[#fff0f0] text-[#ca5b5b] border-[#f2d2d2]",
// // //   };

// // //   return (
// // //     <span
// // //       className={`
// // //         inline-flex items-center rounded-full border
// // //         px-2 py-[3px] text-[8px] font-medium
// // //         ${styles[status] || styles.New}
// // //       `}
// // //     >
// // //       {status}
// // //     </span>
// // //   );
// // // };

// // // /* =========================================================
// // //    APPLICATION CARD
// // // ========================================================= */

// // // const ApplicationCard = ({
// // //   application,
// // //   selected,
// // //   onClick,
// // // }) => {
// // //   return (
// // //     <button
// // //       onClick={() => onClick(application)}
// // //       className={`
// // //         relative w-full overflow-hidden rounded-[9px]
// // //         border bg-white text-left transition-all duration-200

// // //         ${
// // //           selected
// // //             ? "border-[#00836f] shadow-[0_5px_16px_rgba(0,115,96,0.12)]"
// // //             : "border-[#dfe8e6] hover:border-[#a9ccc5] hover:shadow-sm"
// // //         }
// // //       `}
// // //     >
// // //       {selected && (
// // //         <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#078b75]" />
// // //       )}

// // //       <div className="p-3">
// // //         <div className="flex items-start gap-2.5">
// // //           <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[5px] border border-[#cbded9] bg-[#f7fbfa] text-[9px] font-semibold text-[#24544d]">
// // //             {application.initials}
// // //           </div>

// // //           <div className="min-w-0 flex-1">
// // //             <p className="truncate text-[10px] font-semibold text-[#253c42]">
// // //               {application.companyName}
// // //             </p>

// // //             <p className="mt-[2px] text-[8px] text-[#849397]">
// // //               {application.id}
// // //             </p>
// // //           </div>

// // //           <MoreVertical
// // //             size={13}
// // //             className="shrink-0 text-[#809195]"
// // //           />
// // //         </div>

// // //         <div className="mt-3 flex items-center gap-1 text-[8px] text-[#687c81]">
// // //           <MapPin size={9} />

// // //           <span className="truncate">
// // //             {application.location}
// // //           </span>

// // //           <span className="mx-[2px] text-[#bec8ca]">•</span>

// // //           <CalendarDays size={9} />

// // //           <span>{application.submittedDate}</span>
// // //         </div>

// // //         <div className="mt-3">
// // //           <div className="mb-1 flex items-center justify-between">
// // //             <span className="text-[8px] text-[#74878b]">
// // //               Verification Progress
// // //             </span>

// // //             <span className="text-[8px] font-semibold text-[#254a47]">
// // //               {application.verificationProgress}%
// // //             </span>
// // //           </div>

// // //           <div className="h-[4px] overflow-hidden rounded-full bg-[#edf2f1]">
// // //             <div
// // //               style={{
// // //                 width: `${application.verificationProgress}%`,
// // //               }}
// // //               className="h-full rounded-full bg-[#078974]"
// // //             />
// // //           </div>
// // //         </div>

// // //         <div className="mt-3 flex items-center justify-between">
// // //           <StatusBadge status={application.status} />

// // //           <span className="text-[8px] text-[#9aa6a9]">
// // //             {application.businessType}
// // //           </span>
// // //         </div>

// // //         <button
// // //           type="button"
// // //           onClick={(e) => {
// // //             e.stopPropagation();
// // //             onClick(application);
// // //           }}
// // //           className={`
// // //             mt-3 flex h-[30px] w-full items-center justify-center
// // //             rounded-[5px] text-[9px] font-semibold transition

// // //             ${
// // //               selected
// // //                 ? "bg-[#007b69] text-white hover:bg-[#006d5e]"
// // //                 : "border border-[#d9e5e2] bg-white text-[#42615e] hover:bg-[#f4faf8]"
// // //             }
// // //           `}
// // //         >
// // //           {selected ? "Continue Review" : "Start Review"}
// // //         </button>
// // //       </div>
// // //     </button>
// // //   );
// // // };

// // // /* =========================================================
// // //    REVIEW PANEL
// // // ========================================================= */

// // // const ReviewPanel = ({
// // //   application,
// // //   onClose,
// // //   onStatusChange,
// // // }) => {
// // //   const [notes, setNotes] = useState(
// // //     application?.reviewerNotes || ""
// // //   );

// // //   if (!application) return null;

// // //   const handleApprove = () => {
// // //     onStatusChange(application.id, "Approved");
// // //   };

// // //   const handleReject = () => {
// // //     onStatusChange(application.id, "Rejected");
// // //   };

// // //   const handleRequestChanges = () => {
// // //     onStatusChange(application.id, "Action Required");
// // //   };

// // //   return (
// // //     /*
// // //        IMPORTANT:
// // //        Existing navbar = 64px assumed.

// // //        top-[64px]
// // //        h-[calc(100vh-64px)]

// // //        Agar navbar 72px hai:
// // //        top-[72px]
// // //        h-[calc(100vh-72px)]
// // //     */
// // //     <aside
// // //       className="
// // //         sticky top-[64px]
// // //         h-[calc(100vh-64px)]
// // //         w-full
// // //         overflow-hidden
// // //         border-l border-[#d5e2df]
// // //         bg-white
// // //         shadow-[-6px_0_18px_rgba(20,50,50,0.06)]
// // //       "
// // //     >
// // //       {/* PANEL HEADER */}

// // //       <div className="flex h-[58px] items-center justify-between border-b border-[#dae5e2] px-4">
// // //         <div>
// // //           <h2 className="text-[12px] font-semibold text-[#153b43]">
// // //             Application Review
// // //           </h2>

// // //           <p className="mt-[2px] text-[8px] text-[#71868b]">
// // //             {application.id}
// // //           </p>
// // //         </div>

// // //         <button
// // //           onClick={onClose}
// // //           className="
// // //             flex h-7 w-7 items-center justify-center
// // //             rounded-md text-[#50666a]
// // //             transition hover:bg-[#f0f5f4]
// // //           "
// // //         >
// // //           <X size={15} />
// // //         </button>
// // //       </div>

// // //       {/* =================================================
// // //           INDEPENDENT SCROLL

// // //           scrollbar hidden
// // //       ================================================== */}

// // //       <div
// // //         className="
// // //           h-[calc(100%-58px)]
// // //           overflow-y-auto
// // //           px-4 pb-8 pt-4

// // //           [scrollbar-width:none]
// // //           [-ms-overflow-style:none]
// // //           [&::-webkit-scrollbar]:hidden
// // //         "
// // //       >
// // //         {/* PARTNER BASIC INFO */}

// // //         <div className="flex items-start gap-3">
// // //           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[7px] border border-[#cddbd8] bg-[#f4f9f8] text-[10px] font-semibold text-[#395c58]">
// // //             {application.initials}
// // //           </div>

// // //           <div className="min-w-0 flex-1">
// // //             <h3 className="text-[11px] font-semibold text-[#233f45]">
// // //               {application.companyName}
// // //             </h3>

// // //             <p className="mt-[2px] text-[8px] text-[#7d9094]">
// // //               {application.businessType} Agency •{" "}
// // //               {application.location}
// // //             </p>

// // //             <span className="mt-2 inline-flex rounded-[4px] bg-[#e3f8f1] px-2 py-1 text-[8px] font-medium text-[#128169]">
// // //               Compliance Review Stage
// // //             </span>
// // //           </div>
// // //         </div>

// // //         {/* REGULATORY STATUS */}

// // //         <div className="mt-4 rounded-[7px] border border-[#c8ded9] bg-[#fbfefd]">
// // //           <div className="flex items-center gap-2 border-b border-[#e1ebe9] px-3 py-2.5">
// // //             <ShieldCheck
// // //               size={13}
// // //               className="text-[#406b67]"
// // //             />

// // //             <p className="text-[9px] font-semibold text-[#34545a]">
// // //               Regulatory Status
// // //             </p>
// // //           </div>

// // //           <div className="px-3 py-3">
// // //             <div className="grid grid-cols-2 gap-3">
// // //               <div>
// // //                 <p className="text-[7px] text-[#879699]">
// // //                   Registration No.
// // //                 </p>

// // //                 <p className="mt-[2px] text-[8px] font-medium text-[#36535a]">
// // //                   {application.registrationNumber}
// // //                 </p>
// // //               </div>

// // //               <div>
// // //                 <p className="text-[7px] text-[#879699]">
// // //                   Expiry Date
// // //                 </p>

// // //                 <p className="mt-[2px] text-[8px] font-medium text-[#36535a]">
// // //                   {application.expiryDate}
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             <div className="mt-3 rounded-[5px] border border-[#bfe7dc] bg-[#e7f8f3] p-2.5">
// // //               <div className="flex gap-2">
// // //                 <CheckCircle2
// // //                   size={12}
// // //                   className="mt-[1px] shrink-0 text-[#0f9278]"
// // //                 />

// // //                 <p className="text-[8px] leading-[1.5] text-[#30736a]">
// // //                   {application.regulatoryStatus.description}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* VERIFICATION CHECKLIST */}

// // //         <div className="mt-5">
// // //           <h4 className="text-[9px] font-semibold text-[#304a50]">
// // //             Verification Checklist
// // //           </h4>

// // //           <div className="mt-2 space-y-2">
// // //             {application.checks.map((check) => {
// // //               const verified = check.status === "verified";

// // //               return (
// // //                 <div
// // //                   key={check.id}
// // //                   className="
// // //                     flex items-center gap-2 rounded-[6px]
// // //                     border border-[#dce6e4]
// // //                     bg-white px-3 py-3
// // //                   "
// // //                 >
// // //                   <div
// // //                     className={`
// // //                       flex h-6 w-6 shrink-0 items-center justify-center rounded-full

// // //                       ${
// // //                         verified
// // //                           ? "bg-[#e5f6f1] text-[#13856f]"
// // //                           : "bg-[#fff5df] text-[#d29027]"
// // //                       }
// // //                     `}
// // //                   >
// // //                     {verified ? (
// // //                       <CheckCircle2 size={13} />
// // //                     ) : (
// // //                       <AlertTriangle size={12} />
// // //                     )}
// // //                   </div>

// // //                   <div className="min-w-0 flex-1">
// // //                     <p className="text-[8px] font-semibold text-[#395158]">
// // //                       {check.title}
// // //                     </p>

// // //                     <p
// // //                       className={`mt-[2px] text-[7px] ${
// // //                         verified
// // //                           ? "text-[#829195]"
// // //                           : "text-[#c18a31]"
// // //                       }`}
// // //                     >
// // //                       {check.subtitle}
// // //                     </p>
// // //                   </div>

// // //                   <button
// // //                     className={`
// // //                       text-[7px] font-medium

// // //                       ${
// // //                         verified
// // //                           ? "text-[#14836d]"
// // //                           : "text-[#bd7f26]"
// // //                       }
// // //                     `}
// // //                   >
// // //                     {verified ? "View" : "Review"}
// // //                   </button>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         {/* APPLICANT DETAILS */}

// // //         <div className="mt-5">
// // //           <h4 className="text-[9px] font-semibold text-[#304a50]">
// // //             Applicant Information
// // //           </h4>

// // //           <div className="mt-2 rounded-[7px] border border-[#dce6e4]">
// // //             <InfoRow
// // //               icon={UserRound}
// // //               title="Application Owner"
// // //               value={application.applicationOwner}
// // //             />

// // //             <InfoRow
// // //               icon={BriefcaseBusiness}
// // //               title="Business Type"
// // //               value={application.businessType}
// // //             />

// // //             <InfoRow
// // //               icon={MapPin}
// // //               title="Registered Address"
// // //               value={application.registeredAddress}
// // //             />

// // //             <InfoRow
// // //               icon={Building2}
// // //               title="Contact"
// // //               value={application.phone}
// // //               last
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* REVIEWER NOTES */}

// // //         <div className="mt-5">
// // //           <label className="text-[9px] font-semibold text-[#304a50]">
// // //             Reviewer Notes
// // //           </label>

// // //           <textarea
// // //             value={notes}
// // //             onChange={(e) => setNotes(e.target.value)}
// // //             placeholder="Add private notes regarding this application..."
// // //             rows={4}
// // //             className="
// // //               mt-2 w-full resize-none rounded-[6px]
// // //               border border-[#d8e3e0]
// // //               bg-[#fcfdfd]
// // //               px-3 py-2.5
// // //               text-[8px] text-[#42585e]
// // //               outline-none
// // //               placeholder:text-[#a2adaf]
// // //               focus:border-[#6eb5a7]
// // //               focus:ring-2 focus:ring-[#6eb5a7]/10
// // //             "
// // //           />
// // //         </div>

// // //         {/* ACTION BUTTONS */}

// // //         <div className="mt-4 grid grid-cols-2 gap-2">
// // //           <button
// // //             onClick={handleReject}
// // //             className="
// // //               h-8 rounded-[5px]
// // //               border border-[#d7e1df]
// // //               bg-white text-[8px] font-medium
// // //               text-[#42575c]
// // //               transition hover:bg-[#f7f9f9]
// // //             "
// // //           >
// // //             Reject
// // //           </button>

// // //           <button
// // //             onClick={handleRequestChanges}
// // //             className="
// // //               h-8 rounded-[5px]
// // //               border border-[#e6cb96]
// // //               bg-[#fff7e8]
// // //               text-[8px] font-medium
// // //               text-[#b97919]
// // //               transition hover:bg-[#fff1d2]
// // //             "
// // //           >
// // //             Request Changes
// // //           </button>
// // //         </div>

// // //         <button
// // //           onClick={handleApprove}
// // //           className="
// // //             mt-2 h-8 w-full rounded-[5px]
// // //             bg-[#087c6b]
// // //             text-[8px] font-semibold text-white
// // //             transition hover:bg-[#066f61]
// // //           "
// // //         >
// // //           Approve Application
// // //         </button>

// // //         <p className="mt-2 text-center text-[7px] leading-4 text-[#7f9296]">
// // //           Cannot approve until all Action Required items are
// // //           resolved.
// // //         </p>
// // //       </div>
// // //     </aside>
// // //   );
// // // };

// // // const InfoRow = ({
// // //   icon: Icon,
// // //   title,
// // //   value,
// // //   last = false,
// // // }) => {
// // //   return (
// // //     <div
// // //       className={`
// // //         flex items-center gap-3 px-3 py-2.5

// // //         ${!last ? "border-b border-[#edf2f1]" : ""}
// // //       `}
// // //     >
// // //       <Icon size={12} className="shrink-0 text-[#6c8582]" />

// // //       <div className="min-w-0">
// // //         <p className="text-[7px] text-[#8b999c]">
// // //           {title}
// // //         </p>

// // //         <p className="mt-[2px] truncate text-[8px] font-medium text-[#41565c]">
// // //           {value}
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // /* =========================================================
// // //    MAIN PAGE
// // // ========================================================= */

// // // export default function PartnerApplications() {
// // //   const [applications, setApplications] =
// // //     useState(initialApplications);

// // //   const [selectedApplication, setSelectedApplication] =
// // //     useState(initialApplications[0]);

// // //   const [activeTab, setActiveTab] = useState("Under Review");

// // //   const [search, setSearch] = useState("");

// // //   const [businessType, setBusinessType] = useState("All");

// // //   /* ======================================================
// // //      DYNAMIC COUNTS
// // //   ====================================================== */

// // //   const counts = useMemo(() => {
// // //     return {
// // //       new: applications.filter((item) => item.status === "New")
// // //         .length,

// // //       review: applications.filter(
// // //         (item) => item.status === "Under Review"
// // //       ).length,

// // //       action: applications.filter(
// // //         (item) => item.status === "Action Required"
// // //       ).length,
// // //     };
// // //   }, [applications]);

// // //   /* ======================================================
// // //      FILTERING
// // //   ====================================================== */

// // //   const filteredApplications = useMemo(() => {
// // //     return applications.filter((application) => {
// // //       const value = search.trim().toLowerCase();

// // //       const matchesSearch =
// // //         application.companyName
// // //           .toLowerCase()
// // //           .includes(value) ||
// // //         application.id.toLowerCase().includes(value) ||
// // //         application.location.toLowerCase().includes(value);

// // //       const matchesBusinessType =
// // //         businessType === "All" ||
// // //         application.businessType === businessType;

// // //       const matchesTab =
// // //         activeTab === "All" ||
// // //         application.status === activeTab;

// // //       return (
// // //         matchesSearch &&
// // //         matchesBusinessType &&
// // //         matchesTab
// // //       );
// // //     });
// // //   }, [
// // //     applications,
// // //     search,
// // //     businessType,
// // //     activeTab,
// // //   ]);

// // //   /* ======================================================
// // //      UPDATE STATUS
// // //   ====================================================== */

// // //   const updateApplicationStatus = (id, newStatus) => {
// // //     setApplications((previous) =>
// // //       previous.map((application) =>
// // //         application.id === id
// // //           ? {
// // //               ...application,
// // //               status: newStatus,
// // //             }
// // //           : application
// // //       )
// // //     );

// // //     setSelectedApplication((previous) =>
// // //       previous?.id === id
// // //         ? {
// // //             ...previous,
// // //             status: newStatus,
// // //           }
// // //         : previous
// // //     );
// // //   };

// // //   return (
// // //     /*
// // //       NAVBAR intentionally NOT included.

// // //       Is component ko apne existing dashboard layout ke
// // //       navbar/sidebar ke andar render karo.
// // //     */
// // //     <div className="min-h-full bg-[#f5faf8]">
// // //       <div
// // //         className={`
// // //           grid w-full

// // //           ${
// // //             selectedApplication
// // //               ? "xl:grid-cols-[minmax(0,1fr)_360px]"
// // //               : "grid-cols-1"
// // //           }
// // //         `}
// // //       >
// // //         {/* =================================================
// // //             LEFT CONTENT
// // //         ================================================== */}

// // //         <main className="min-w-0 px-4 py-4 sm:px-5 lg:px-6">
// // //           {/* BREADCRUMB */}

// // //           <div className="flex items-center gap-1.5 text-[8px] text-[#7c8c90]">
// // //             <span>Users</span>
// // //             <span>›</span>
// // //             <span>Partners</span>
// // //             <span>›</span>

// // //             <span className="font-medium text-[#375159]">
// // //               Applications
// // //             </span>
// // //           </div>

// // //           {/* TITLE */}

// // //           <div className="mt-3">
// // //             <h1 className="text-[19px] font-semibold tracking-[-0.3px] text-[#153840]">
// // //               Partner Applications
// // //             </h1>

// // //             <p className="mt-1 max-w-[620px] text-[9px] leading-[1.55] text-[#7f9094]">
// // //               Review partner onboarding, verification,
// // //               compliance, approval, rejection, and suspension
// // //               workflows.
// // //             </p>
// // //           </div>

// // //           {/* =================================================
// // //               STATS
// // //           ================================================== */}

// // //           <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
// // //             <StatCard
// // //               title="New Apps"
// // //               value={counts.new}
// // //               icon={FileCheck2}
// // //               active={activeTab === "New"}
// // //               onClick={() => setActiveTab("New")}
// // //             />

// // //             <StatCard
// // //               title="Under Review"
// // //               value={counts.review}
// // //               icon={ShieldCheck}
// // //               active={activeTab === "Under Review"}
// // //               onClick={() =>
// // //                 setActiveTab("Under Review")
// // //               }
// // //             />

// // //             <StatCard
// // //               title="Action Required"
// // //               value={counts.action}
// // //               icon={AlertTriangle}
// // //               warning
// // //               active={activeTab === "Action Required"}
// // //               onClick={() =>
// // //                 setActiveTab("Action Required")
// // //               }
// // //             />
// // //           </div>

// // //           {/* =================================================
// // //               TAB BAR
// // //           ================================================== */}

// // //           <div className="mt-4 overflow-x-auto border-b border-[#dbe5e3] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// // //             <div className="flex min-w-max items-center gap-5">
// // //               {[
// // //                 {
// // //                   label: "New Applications",
// // //                   status: "New",
// // //                   count: counts.new,
// // //                 },
// // //                 {
// // //                   label: "Under Review",
// // //                   status: "Under Review",
// // //                   count: counts.review,
// // //                 },
// // //                 {
// // //                   label: "Action Required",
// // //                   status: "Action Required",
// // //                   count: counts.action,
// // //                 },
// // //                 {
// // //                   label: "All",
// // //                   status: "All",
// // //                   count: applications.length,
// // //                 },
// // //               ].map((tab) => (
// // //                 <button
// // //                   key={tab.status}
// // //                   onClick={() =>
// // //                     setActiveTab(tab.status)
// // //                   }
// // //                   className={`
// // //                     relative pb-2.5 text-[8px] font-medium

// // //                     ${
// // //                       activeTab === tab.status
// // //                         ? "text-[#126f62]"
// // //                         : "text-[#849397]"
// // //                     }
// // //                   `}
// // //                 >
// // //                   {tab.label} ({tab.count})

// // //                   {activeTab === tab.status && (
// // //                     <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#087e6c]" />
// // //                   )}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* =================================================
// // //               SEARCH/FILTERS
// // //           ================================================== */}

// // //           <div className="mt-3 flex flex-col gap-2 sm:flex-row">
// // //             <div className="relative flex-1">
// // //               <Search
// // //                 size={12}
// // //                 className="absolute left-3 top-1/2 -translate-y-1/2 text-[#829296]"
// // //               />

// // //               <input
// // //                 value={search}
// // //                 onChange={(e) =>
// // //                   setSearch(e.target.value)
// // //                 }
// // //                 placeholder="Search partner name, ID or RERA"
// // //                 className="
// // //                   h-8 w-full rounded-[5px]
// // //                   border border-[#d9e4e1]
// // //                   bg-white
// // //                   pl-8 pr-3
// // //                   text-[8px] text-[#465d62]
// // //                   outline-none
// // //                   placeholder:text-[#9eaaac]
// // //                   focus:border-[#78b5a8]
// // //                 "
// // //               />
// // //             </div>

// // //             <div className="relative min-w-[130px]">
// // //               <select
// // //                 value={businessType}
// // //                 onChange={(e) =>
// // //                   setBusinessType(e.target.value)
// // //                 }
// // //                 className="
// // //                   h-8 w-full appearance-none
// // //                   rounded-[5px]
// // //                   border border-[#d9e4e1]
// // //                   bg-white
// // //                   px-3 pr-8
// // //                   text-[8px] text-[#5c7075]
// // //                   outline-none
// // //                 "
// // //               >
// // //                 <option value="All">
// // //                   Business Type
// // //                 </option>

// // //                 <option value="Real Estate">
// // //                   Real Estate
// // //                 </option>

// // //                 <option value="Business">
// // //                   Business
// // //                 </option>

// // //                 <option value="Broker">
// // //                   Broker
// // //                 </option>
// // //               </select>

// // //               <ChevronDown
// // //                 size={11}
// // //                 className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#75878b]"
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* =================================================
// // //               APPLICATION CARDS
// // //           ================================================== */}

// // //           <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2 2xl:grid-cols-3">
// // //             {filteredApplications.length > 0 ? (
// // //               filteredApplications.map(
// // //                 (application) => (
// // //                   <ApplicationCard
// // //                     key={application.id}
// // //                     application={application}
// // //                     selected={
// // //                       selectedApplication?.id ===
// // //                       application.id
// // //                     }
// // //                     onClick={
// // //                       setSelectedApplication
// // //                     }
// // //                   />
// // //                 )
// // //               )
// // //             ) : (
// // //               <div className="col-span-full rounded-[8px] border border-dashed border-[#cbdad7] bg-white px-5 py-14 text-center">
// // //                 <Search
// // //                   size={22}
// // //                   className="mx-auto text-[#9aabaa]"
// // //                 />

// // //                 <p className="mt-3 text-[10px] font-medium text-[#496168]">
// // //                   No applications found
// // //                 </p>

// // //                 <p className="mt-1 text-[8px] text-[#91a0a3]">
// // //                   Try changing your search or filters.
// // //                 </p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </main>

// // //         {/* =================================================
// // //             RIGHT SIDE PANEL
// // //         ================================================== */}

// // //         {selectedApplication && (
// // //           <div className="hidden xl:block">
// // //             <ReviewPanel
// // //               key={selectedApplication.id}
// // //               application={selectedApplication}
// // //               onClose={() =>
// // //                 setSelectedApplication(null)
// // //               }
// // //               onStatusChange={
// // //                 updateApplicationStatus
// // //               }
// // //             />
// // //           </div>
// // //         )}

// // //         {/* =================================================
// // //             MOBILE/TABLET REVIEW DRAWER
// // //         ================================================== */}

// // //         {selectedApplication && (
// // //           <div className="fixed inset-0 z-50 xl:hidden">
// // //             <button
// // //               aria-label="Close review"
// // //               onClick={() =>
// // //                 setSelectedApplication(null)
// // //               }
// // //               className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
// // //             />

// // //             <div
// // //               className="
// // //                 absolute bottom-0 right-0 top-[64px]
// // //                 w-[92%] max-w-[390px]
// // //               "
// // //             >
// // //               <ReviewPanel
// // //                 key={`mobile-${selectedApplication.id}`}
// // //                 application={selectedApplication}
// // //                 onClose={() =>
// // //                   setSelectedApplication(null)
// // //                 }
// // //                 onStatusChange={
// // //                   updateApplicationStatus
// // //                 }
// // //               />
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useMemo, useState } from "react";
// // import {
// //   Search,
// //   ChevronDown,
// //   X,
// //   MoreVertical,
// //   CheckCircle2,
// //   AlertTriangle,
// //   Clock3,
// //   Building2,
// //   MapPin,
// //   FileCheck2,
// //   ShieldCheck,
// //   Store,
// //   BadgeCheck,
// //   Eye,
// //   CalendarDays,
// //   UserRound,
// //   BriefcaseBusiness,
// // } from "lucide-react";

// // /* =========================================================
// //    DYNAMIC DATA
// // ========================================================= */

// // const initialApplications = [
// //   {
// //     id: "APP-2026-1882",
// //     companyName: "Global Estates",
// //     initials: "GE",
// //     businessType: "Real Estate",
// //     submittedDate: "17 Aug 2026",
// //     location: "Gurgaon, Haryana",
// //     status: "Under Review",
// //     verificationProgress: 67,
// //     registrationNumber: "HRERA-GGM-125-2021",
// //     expiryDate: "12 Oct 2028",
// //     phone: "+91 98123 45678",
// //     email: "contact@globalestates.in",
// //     registeredAddress: "DLF Phase 3, Gurgaon, Haryana",
// //     applicationOwner: "Rohit Sharma",

// //     regulatoryStatus: {
// //       title: "Regulatory Status",
// //       status: "Verified",
// //       description:
// //         "Verified against active RERA database automatically.",
// //     },

// //     checks: [
// //       {
// //         id: 1,
// //         title: "Identity Verification",
// //         subtitle: "Aadhaar & PAN matched",
// //         status: "verified",
// //       },
// //       {
// //         id: 2,
// //         title: "Business Registration",
// //         subtitle: "GSTIN Active",
// //         status: "verified",
// //       },
// //       {
// //         id: 3,
// //         title: "Office Address",
// //         subtitle: "Utility bill illegible",
// //         status: "review",
// //       },
// //     ],

// //     reviewerNotes: "",
// //   },

// //   {
// //     id: "APP-2026-1025",
// //     companyName: "Skyline Realty",
// //     initials: "SR",
// //     businessType: "Business",
// //     submittedDate: "16 Aug 2026",
// //     location: "Noida, UP",
// //     status: "Under Review",
// //     verificationProgress: 34,
// //     registrationNumber: "UPRERA-PRJ-08421",
// //     expiryDate: "28 Dec 2027",
// //     phone: "+91 98765 11220",
// //     email: "info@skylinerealty.in",
// //     registeredAddress: "Sector 62, Noida, Uttar Pradesh",
// //     applicationOwner: "Ankit Mehra",

// //     regulatoryStatus: {
// //       title: "Regulatory Status",
// //       status: "Pending",
// //       description:
// //         "Registration details are currently being validated.",
// //     },

// //     checks: [
// //       {
// //         id: 1,
// //         title: "Identity Verification",
// //         subtitle: "PAN verification completed",
// //         status: "verified",
// //       },
// //       {
// //         id: 2,
// //         title: "Business Registration",
// //         subtitle: "GSTIN validation pending",
// //         status: "review",
// //       },
// //       {
// //         id: 3,
// //         title: "Office Address",
// //         subtitle: "Address verification pending",
// //         status: "review",
// //       },
// //     ],

// //     reviewerNotes: "",
// //   },

// //   {
// //     id: "APP-2026-1641",
// //     companyName: "Urban Nest",
// //     initials: "UN",
// //     businessType: "Broker",
// //     submittedDate: "15 Aug 2026",
// //     location: "Delhi",
// //     status: "Action Required",
// //     verificationProgress: 48,
// //     registrationNumber: "DL-RERA-66322",
// //     expiryDate: "04 May 2027",
// //     phone: "+91 99910 44228",
// //     email: "admin@urbannest.in",
// //     registeredAddress: "Saket, New Delhi",
// //     applicationOwner: "Priya Kapoor",

// //     regulatoryStatus: {
// //       title: "Regulatory Status",
// //       status: "Attention Required",
// //       description:
// //         "Some regulatory information requires manual verification.",
// //     },

// //     checks: [
// //       {
// //         id: 1,
// //         title: "Identity Verification",
// //         subtitle: "Identity successfully verified",
// //         status: "verified",
// //       },
// //       {
// //         id: 2,
// //         title: "Business Registration",
// //         subtitle: "Registration certificate unclear",
// //         status: "review",
// //       },
// //       {
// //         id: 3,
// //         title: "Office Address",
// //         subtitle: "Address proof missing",
// //         status: "review",
// //       },
// //     ],

// //     reviewerNotes: "",
// //   },

// //   {
// //     id: "APP-2026-1799",
// //     companyName: "Property Avenue",
// //     initials: "PA",
// //     businessType: "Real Estate",
// //     submittedDate: "14 Aug 2026",
// //     location: "Jaipur, Rajasthan",
// //     status: "New",
// //     verificationProgress: 12,
// //     registrationNumber: "RAJ-RERA-88721",
// //     expiryDate: "11 Feb 2029",
// //     phone: "+91 88771 22339",
// //     email: "hello@propertyavenue.in",
// //     registeredAddress: "C-Scheme, Jaipur, Rajasthan",
// //     applicationOwner: "Kunal Jain",

// //     regulatoryStatus: {
// //       title: "Regulatory Status",
// //       status: "Pending",
// //       description: "Application is waiting for verification.",
// //     },

// //     checks: [
// //       {
// //         id: 1,
// //         title: "Identity Verification",
// //         subtitle: "Waiting for verification",
// //         status: "review",
// //       },
// //       {
// //         id: 2,
// //         title: "Business Registration",
// //         subtitle: "Waiting for verification",
// //         status: "review",
// //       },
// //       {
// //         id: 3,
// //         title: "Office Address",
// //         subtitle: "Waiting for verification",
// //         status: "review",
// //       },
// //     ],

// //     reviewerNotes: "",
// //   },
// // ];

// // /* =========================================================
// //    HELPER COMPONENTS
// // ========================================================= */

// // const StatCard = ({
// //   title,
// //   value,
// //   active,
// //   warning,
// //   icon: Icon,
// //   onClick,
// // }) => {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className={`min-h-[155px] w-full rounded-[18px] border bg-white p-6 text-left shadow-[0_2px_5px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md ${
// //         active
// //           ? "border-[#35C99A] shadow-[0_3px_12px_rgba(5,105,88,0.10)]"
// //           : "border-[#DCE5E9]"
// //       }`}
// //     >
// //       <div className="flex items-start justify-between gap-3">
// //         <p className="pt-2 text-[10px] font-bold uppercase tracking-[0.25px] text-[#576D86]">
// //           {title}
// //         </p>

// //         {Icon && (
// //           <div
// //             className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] ${
// //               warning
// //                 ? "bg-[#FFF5E8] text-[#F79009]"
// //                 : "bg-[#EAF9F4] text-[#25B98B]"
// //             }`}
// //           >
// //             <Icon size={22} />
// //           </div>
// //         )}
// //       </div>

// //       <p
// //         className={`mt-5 text-[29px] font-bold leading-none ${
// //           warning ? "text-[#D97706]" : "text-[#173247]"
// //         }`}
// //       >
// //         {value}
// //       </p>

// //       <p className="mt-3 text-[10px] font-medium text-[#95A3B5]">
// //         {warning ? "Requires review" : "Partner applications"}
// //       </p>
// //     </button>
// //   );
// // };

// // const StatusBadge = ({ status }) => {
// //   const styles = {
// //     New: "bg-[#edf5ff] text-[#4c76a5] border-[#dceafa]",

// //     "Under Review":
// //       "bg-[#EAF9F4] text-[#15966F] border-[#CDEFE4]",

// //     "Action Required":
// //       "bg-[#fff4df] text-[#bd7c22] border-[#f4deaf]",

// //     Approved:
// //       "bg-[#EAF9F4] text-[#15966F] border-[#CDEFE4]",

// //     Rejected:
// //       "bg-[#fff0f0] text-[#ca5b5b] border-[#f2d2d2]",
// //   };

// //   return (
// //     <span
// //       className={`
// //         inline-flex items-center rounded-full border
// //         px-2 py-[3px] text-[10px] font-medium
// //         ${styles[status] || styles.New}
// //       `}
// //     >
// //       {status}
// //     </span>
// //   );
// // };

// // /* =========================================================
// //    APPLICATION CARD
// // ========================================================= */

// // const ApplicationCard = ({
// //   application,
// //   selected,
// //   onClick,
// // }) => {
// //   return (
// //     <button
// //       onClick={() => onClick(application)}
// //       className={`
// //         relative w-full overflow-hidden rounded-[9px]
// //         border bg-white text-left transition-all duration-200

// //         ${
// //           selected
// //             ? "border-[#35C99A] shadow-[0_5px_16px_rgba(0,115,96,0.12)]"
// //             : "border-[#DCE5E9] hover:border-[#A8DCCB] hover:shadow-[0_4px_18px_rgba(15,47,69,0.04)]"
// //         }
// //       `}
// //     >
// //       {selected && (
// //         <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#35C99A]" />
// //       )}

// //       <div className="p-3">
// //         <div className="flex items-start gap-2.5">
// //           <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#DCE5E9] bg-[#F8FAFB] text-[10px] font-semibold text-[#526A78]">
// //             {application.initials}
// //           </div>

// //           <div className="min-w-0 flex-1">
// //             <p className="truncate text-[10px] font-semibold text-[#173247]">
// //               {application.companyName}
// //             </p>

// //             <p className="mt-[2px] text-[8px] text-[#91A2AC]">
// //               {application.id}
// //             </p>
// //           </div>

// //           <MoreVertical
// //             size={13}
// //             className="shrink-0 text-[#91A2AC]"
// //           />
// //         </div>

// //         <div className="mt-3 flex items-center gap-1 text-[8px] text-[#607681]">
// //           <MapPin size={9} />

// //           <span className="truncate">
// //             {application.location}
// //           </span>

// //           <span className="mx-[2px] text-[#bec8ca]">•</span>

// //           <CalendarDays size={9} />

// //           <span>{application.submittedDate}</span>
// //         </div>

// //         <div className="mt-3">
// //           <div className="mb-1 flex items-center justify-between">
// //             <span className="text-[8px] text-[#607681]">
// //               Verification Progress
// //             </span>

// //             <span className="text-[10px] font-semibold text-[#526A78]">
// //               {application.verificationProgress}%
// //             </span>
// //           </div>

// //           <div className="h-[4px] overflow-hidden rounded-full bg-[#EEF3F5]">
// //             <div
// //               style={{
// //                 width: `${application.verificationProgress}%`,
// //               }}
// //               className="h-full rounded-full bg-[#35C99A]"
// //             />
// //           </div>
// //         </div>

// //         <div className="mt-3 flex items-center justify-between">
// //           <StatusBadge status={application.status} />

// //           <span className="text-[8px] text-[#91A2AC]">
// //             {application.businessType}
// //           </span>
// //         </div>

// //         <button
// //           type="button"
// //           onClick={(e) => {
// //             e.stopPropagation();
// //             onClick(application);
// //           }}
// //           className={`
// //             mt-3 flex h-[30px] w-full items-center justify-center
// //             rounded-lg text-[10px] font-semibold transition

// //             ${
// //               selected
// //                 ? "bg-[#007b69] text-white hover:bg-[#006d5e]"
// //                 : "border border-[#d9e5e2] bg-white text-[#42615e] hover:bg-[#f4faf8]"
// //             }
// //           `}
// //         >
// //           {selected ? "Continue Review" : "Start Review"}
// //         </button>
// //       </div>
// //     </button>
// //   );
// // };

// // /* =========================================================
// //    REVIEW PANEL
// // ========================================================= */

// // const ReviewPanel = ({
// //   application,
// //   onClose,
// //   onStatusChange,
// // }) => {
// //   const [notes, setNotes] = useState(
// //     application?.reviewerNotes || ""
// //   );

// //   if (!application) return null;

// //   const handleApprove = () => {
// //     onStatusChange(application.id, "Approved");
// //   };

// //   const handleReject = () => {
// //     onStatusChange(application.id, "Rejected");
// //   };

// //   const handleRequestChanges = () => {
// //     onStatusChange(application.id, "Action Required");
// //   };

// //   return (
// //     /*
// //        IMPORTANT:
// //        Existing navbar = 64px assumed.

// //        top-[64px]
// //        h-[calc(100vh-64px)]

// //        Agar navbar 72px hai:
// //        top-[72px]
// //        h-[calc(100vh-72px)]
// //     */
// //     <aside
// //       className="
// //         sticky top-[64px]
// //         h-[calc(100vh-64px)]
// //         w-full
// //         overflow-hidden
// //         border-l border-[#d5e2df]
// //         bg-white
// //         shadow-[-6px_0_18px_rgba(20,50,50,0.06)]
// //       "
// //     >
// //       {/* PANEL HEADER */}

// //       <div className="flex h-[58px] items-center justify-between border-b border-[#dae5e2] px-4">
// //         <div>
// //           <h2 className="text-[12px] font-semibold text-[#153b43]">
// //             Application Review
// //           </h2>

// //           <p className="mt-[2px] text-[8px] text-[#71868b]">
// //             {application.id}
// //           </p>
// //         </div>

// //         <button
// //           onClick={onClose}
// //           className="
// //             flex h-7 w-7 items-center justify-center
// //             rounded-md text-[#50666a]
// //             transition hover:bg-[#f0f5f4]
// //           "
// //         >
// //           <X size={15} />
// //         </button>
// //       </div>

// //       {/* =================================================
// //           INDEPENDENT SCROLL

// //           scrollbar hidden
// //       ================================================== */}

// //       <div
// //         className="
// //           h-[calc(100%-58px)]
// //           overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
// //           px-4 pb-8 pt-4

// //           [scrollbar-width:none]
// //           [-ms-overflow-style:none]
// //           [&::-webkit-scrollbar]:hidden
// //         "
// //       >
// //         {/* PARTNER BASIC INFO */}

// //         <div className="flex items-start gap-3">
// //           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[7px] border border-[#cddbd8] bg-[#f4f9f8] text-[10px] font-semibold text-[#395c58]">
// //             {application.initials}
// //           </div>

// //           <div className="min-w-0 flex-1">
// //             <h3 className="text-[11px] font-semibold text-[#233f45]">
// //               {application.companyName}
// //             </h3>

// //             <p className="mt-[2px] text-[8px] text-[#7d9094]">
// //               {application.businessType} Agency •{" "}
// //               {application.location}
// //             </p>

// //             <span className="mt-2 inline-flex rounded-[4px] bg-[#e3f8f1] px-2 py-1 text-[10px] font-medium text-[#128169]">
// //               Compliance Review Stage
// //             </span>
// //           </div>
// //         </div>

// //         {/* REGULATORY STATUS */}

// //         <div className="mt-4 rounded-[7px] border border-[#c8ded9] bg-[#fbfefd]">
// //           <div className="flex items-center gap-2 border-b border-[#e1ebe9] px-3 py-2.5">
// //             <ShieldCheck
// //               size={13}
// //               className="text-[#406b67]"
// //             />

// //             <p className="text-[10px] font-semibold text-[#34545a]">
// //               Regulatory Status
// //             </p>
// //           </div>

// //           <div className="px-3 py-3">
// //             <div className="grid grid-cols-2 gap-3">
// //               <div>
// //                 <p className="text-[7px] text-[#879699]">
// //                   Registration No.
// //                 </p>

// //                 <p className="mt-[2px] text-[10px] font-medium text-[#36535a]">
// //                   {application.registrationNumber}
// //                 </p>
// //               </div>

// //               <div>
// //                 <p className="text-[7px] text-[#879699]">
// //                   Expiry Date
// //                 </p>

// //                 <p className="mt-[2px] text-[10px] font-medium text-[#36535a]">
// //                   {application.expiryDate}
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="mt-3 rounded-lg border border-[#bfe7dc] bg-[#e7f8f3] p-2.5">
// //               <div className="flex gap-2">
// //                 <CheckCircle2
// //                   size={12}
// //                   className="mt-[1px] shrink-0 text-[#0f9278]"
// //                 />

// //                 <p className="text-[8px] leading-[1.5] text-[#30736a]">
// //                   {application.regulatoryStatus.description}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* VERIFICATION CHECKLIST */}

// //         <div className="mt-5">
// //           <h4 className="text-[10px] font-semibold text-[#304a50]">
// //             Verification Checklist
// //           </h4>

// //           <div className="mt-2 space-y-2">
// //             {application.checks.map((check) => {
// //               const verified = check.status === "verified";

// //               return (
// //                 <div
// //                   key={check.id}
// //                   className="
// //                     flex items-center gap-2 rounded-[6px]
// //                     border border-[#DCE5E9]
// //                     bg-white px-3 py-3
// //                   "
// //                 >
// //                   <div
// //                     className={`
// //                       flex h-6 w-6 shrink-0 items-center justify-center rounded-full

// //                       ${
// //                         verified
// //                           ? "bg-[#e5f6f1] text-[#13856f]"
// //                           : "bg-[#fff5df] text-[#d29027]"
// //                       }
// //                     `}
// //                   >
// //                     {verified ? (
// //                       <CheckCircle2 size={13} />
// //                     ) : (
// //                       <AlertTriangle size={12} />
// //                     )}
// //                   </div>

// //                   <div className="min-w-0 flex-1">
// //                     <p className="text-[10px] font-semibold text-[#395158]">
// //                       {check.title}
// //                     </p>

// //                     <p
// //                       className={`mt-[2px] text-[7px] ${
// //                         verified
// //                           ? "text-[#829195]"
// //                           : "text-[#c18a31]"
// //                       }`}
// //                     >
// //                       {check.subtitle}
// //                     </p>
// //                   </div>

// //                   <button
// //                     className={`
// //                       text-[7px] font-medium

// //                       ${
// //                         verified
// //                           ? "text-[#14836d]"
// //                           : "text-[#bd7f26]"
// //                       }
// //                     `}
// //                   >
// //                     {verified ? "View" : "Review"}
// //                   </button>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* APPLICANT DETAILS */}

// //         <div className="mt-5">
// //           <h4 className="text-[10px] font-semibold text-[#304a50]">
// //             Applicant Information
// //           </h4>

// //           <div className="mt-2 rounded-[7px] border border-[#DCE5E9]">
// //             <InfoRow
// //               icon={UserRound}
// //               title="Application Owner"
// //               value={application.applicationOwner}
// //             />

// //             <InfoRow
// //               icon={BriefcaseBusiness}
// //               title="Business Type"
// //               value={application.businessType}
// //             />

// //             <InfoRow
// //               icon={MapPin}
// //               title="Registered Address"
// //               value={application.registeredAddress}
// //             />

// //             <InfoRow
// //               icon={Building2}
// //               title="Contact"
// //               value={application.phone}
// //               last
// //             />
// //           </div>
// //         </div>

// //         {/* REVIEWER NOTES */}

// //         <div className="mt-5">
// //           <label className="text-[10px] font-semibold text-[#304a50]">
// //             Reviewer Notes
// //           </label>

// //           <textarea
// //             value={notes}
// //             onChange={(e) => setNotes(e.target.value)}
// //             placeholder="Add private notes regarding this application..."
// //             rows={4}
// //             className="
// //               mt-2 w-full resize-none rounded-[6px]
// //               border border-[#d8e3e0]
// //               bg-[#fcfdfd]
// //               px-3 py-2.5
// //               text-[8px] text-[#42585e]
// //               outline-none
// //               placeholder:text-[#a2adaf]
// //               focus:border-[#6eb5a7]
// //               focus:ring-2 focus:ring-[#6eb5a7]/10
// //             "
// //           />
// //         </div>

// //         {/* ACTION BUTTONS */}

// //         <div className="mt-4 grid grid-cols-2 gap-2">
// //           <button
// //             onClick={handleReject}
// //             className="
// //               h-8 rounded-lg
// //               border border-[#d7e1df]
// //               bg-white text-[10px] font-medium
// //               text-[#42575c]
// //               transition hover:bg-[#f7f9f9]
// //             "
// //           >
// //             Reject
// //           </button>

// //           <button
// //             onClick={handleRequestChanges}
// //             className="
// //               h-8 rounded-lg
// //               border border-[#e6cb96]
// //               bg-[#fff7e8]
// //               text-[10px] font-medium
// //               text-[#b97919]
// //               transition hover:bg-[#fff1d2]
// //             "
// //           >
// //             Request Changes
// //           </button>
// //         </div>

// //         <button
// //           onClick={handleApprove}
// //           className="
// //             mt-2 h-[38px] w-full rounded-lg
// //             bg-[#087c6b]
// //             text-[10px] font-semibold text-white
// //             transition hover:bg-[#066f61]
// //           "
// //         >
// //           Approve Application
// //         </button>

// //         <p className="mt-2 text-center text-[7px] leading-4 text-[#7f9296]">
// //           Cannot approve until all Action Required items are
// //           resolved.
// //         </p>
// //       </div>
// //     </aside>
// //   );
// // };

// // const InfoRow = ({
// //   icon: Icon,
// //   title,
// //   value,
// //   last = false,
// // }) => {
// //   return (
// //     <div
// //       className={`
// //         flex items-center gap-3 px-3 py-2.5

// //         ${!last ? "border-b border-[#EEF3F5]" : ""}
// //       `}
// //     >
// //       <Icon size={12} className="shrink-0 text-[#6c8582]" />

// //       <div className="min-w-0">
// //         <p className="text-[7px] text-[#8b999c]">
// //           {title}
// //         </p>

// //         <p className="mt-[2px] truncate text-[10px] font-medium text-[#41565c]">
// //           {value}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // /* =========================================================
// //    MAIN PAGE
// // ========================================================= */

// // export default function PartnerApplications() {
// //   const [applications, setApplications] =
// //     useState(initialApplications);

// //   const [selectedApplication, setSelectedApplication] =
// //     useState(initialApplications[0]);

// //   const [activeTab, setActiveTab] = useState("Under Review");

// //   const [search, setSearch] = useState("");

// //   const [businessType, setBusinessType] = useState("All");

// //   /* ======================================================
// //      DYNAMIC COUNTS
// //   ====================================================== */

// //   const counts = useMemo(() => {
// //     return {
// //       new: applications.filter((item) => item.status === "New")
// //         .length,

// //       review: applications.filter(
// //         (item) => item.status === "Under Review"
// //       ).length,

// //       action: applications.filter(
// //         (item) => item.status === "Action Required"
// //       ).length,
// //     };
// //   }, [applications]);

// //   /* ======================================================
// //      FILTERING
// //   ====================================================== */

// //   const filteredApplications = useMemo(() => {
// //     return applications.filter((application) => {
// //       const value = search.trim().toLowerCase();

// //       const matchesSearch =
// //         application.companyName
// //           .toLowerCase()
// //           .includes(value) ||
// //         application.id.toLowerCase().includes(value) ||
// //         application.location.toLowerCase().includes(value);

// //       const matchesBusinessType =
// //         businessType === "All" ||
// //         application.businessType === businessType;

// //       const matchesTab =
// //         activeTab === "All" ||
// //         application.status === activeTab;

// //       return (
// //         matchesSearch &&
// //         matchesBusinessType &&
// //         matchesTab
// //       );
// //     });
// //   }, [
// //     applications,
// //     search,
// //     businessType,
// //     activeTab,
// //   ]);

// //   /* ======================================================
// //      UPDATE STATUS
// //   ====================================================== */

// //   const updateApplicationStatus = (id, newStatus) => {
// //     setApplications((previous) =>
// //       previous.map((application) =>
// //         application.id === id
// //           ? {
// //               ...application,
// //               status: newStatus,
// //             }
// //           : application
// //       )
// //     );

// //     setSelectedApplication((previous) =>
// //       previous?.id === id
// //         ? {
// //             ...previous,
// //             status: newStatus,
// //           }
// //         : previous
// //     );
// //   };

// //   return (
// //     /*
// //       NAVBAR intentionally NOT included.

// //       Is component ko apne existing dashboard layout ke
// //       navbar/sidebar ke andar render karo.
// //     */
// //     <div className="min-h-full bg-[#F4F7F8]">
// //       <div
// //         className={`
// //           grid w-full

// //           ${
// //             selectedApplication
// //               ? "xl:grid-cols-[minmax(0,1fr)_360px]"
// //               : "grid-cols-1"
// //           }
// //         `}
// //       >
// //         {/* =================================================
// //             LEFT CONTENT
// //         ================================================== */}

// //         <main className="min-w-0 px-4 py-4 sm:px-5 lg:px-6">
// //           {/* BREADCRUMB */}

// //           <div className="flex items-center gap-1.5 text-[8px] text-[#7c8c90]">
// //             <span>Users</span>
// //             <span>›</span>
// //             <span>Partners</span>
// //             <span>›</span>

// //             <span className="font-medium text-[#375159]">
// //               Applications
// //             </span>
// //           </div>

// //           {/* TITLE */}

// //           <div className="mt-3">
// //             <h1 className="text-[21px] font-bold text-[#173247] sm:text-[23px]">
// //               Partner Applications
// //             </h1>

// //             <p className="mt-1 max-w-[720px] text-[10px] font-medium leading-5 text-[#8998AF] sm:text-[11px]">
// //               Review partner onboarding, verification,
// //               compliance, approval, rejection, and suspension
// //               workflows.
// //             </p>
// //           </div>

// //           {/* =================================================
// //               STATS
// //           ================================================== */}

// //           <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
// //             <StatCard
// //               title="New Apps"
// //               value={counts.new}
// //               icon={FileCheck2}
// //               active={activeTab === "New"}
// //               onClick={() => setActiveTab("New")}
// //             />

// //             <StatCard
// //               title="Under Review"
// //               value={counts.review}
// //               icon={ShieldCheck}
// //               active={activeTab === "Under Review"}
// //               onClick={() =>
// //                 setActiveTab("Under Review")
// //               }
// //             />

// //             <StatCard
// //               title="Action Required"
// //               value={counts.action}
// //               icon={AlertTriangle}
// //               warning
// //               active={activeTab === "Action Required"}
// //               onClick={() =>
// //                 setActiveTab("Action Required")
// //               }
// //             />
// //           </div>

// //           {/* =================================================
// //               TAB BAR
// //           ================================================== */}

// //           <div className="mt-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-[#E7EDF2] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// //             <div className="flex min-w-max items-center gap-5">
// //               {[
// //                 {
// //                   label: "New Applications",
// //                   status: "New",
// //                   count: counts.new,
// //                 },
// //                 {
// //                   label: "Under Review",
// //                   status: "Under Review",
// //                   count: counts.review,
// //                 },
// //                 {
// //                   label: "Action Required",
// //                   status: "Action Required",
// //                   count: counts.action,
// //                 },
// //                 {
// //                   label: "All",
// //                   status: "All",
// //                   count: applications.length,
// //                 },
// //               ].map((tab) => (
// //                 <button
// //                   key={tab.status}
// //                   onClick={() =>
// //                     setActiveTab(tab.status)
// //                   }
// //                   className={`
// //                     relative pb-2.5 text-[10px] font-medium

// //                     ${
// //                       activeTab === tab.status
// //                         ? "text-[#25B98B]"
// //                         : "text-[#91A2AC]"
// //                     }
// //                   `}
// //                 >
// //                   {tab.label} ({tab.count})

// //                   {activeTab === tab.status && (
// //                     <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#25B98B]" />
// //                   )}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* =================================================
// //               SEARCH/FILTERS
// //           ================================================== */}

// //           <div className="mt-3 flex flex-col gap-2 sm:flex-row">
// //             <div className="relative flex-1">
// //               <Search
// //                 size={12}
// //                 className="absolute left-3 top-1/2 -translate-y-1/2 text-[#829296]"
// //               />

// //               <input
// //                 value={search}
// //                 onChange={(e) =>
// //                   setSearch(e.target.value)
// //                 }
// //                 placeholder="Search partner name, ID or RERA"
// //                 className="
// //                   h-[38px] w-full rounded-lg
// //                   border border-[#DCE5E9]
// //                   bg-white
// //                   pl-8 pr-3
// //                   text-[10px] text-[#425A70]
// //                   outline-none
// //                   placeholder:text-[#9eaaac]
// //                   focus:border-[#25B98B]
// //                 "
// //               />
// //             </div>

// //             <div className="relative min-w-[130px]">
// //               <select
// //                 value={businessType}
// //                 onChange={(e) =>
// //                   setBusinessType(e.target.value)
// //                 }
// //                 className="
// //                   h-[38px] w-full appearance-none
// //                   rounded-lg
// //                   border border-[#DCE5E9]
// //                   bg-white
// //                   px-3 pr-8
// //                   text-[10px] text-[#536779]
// //                   outline-none
// //                 "
// //               >
// //                 <option value="All">
// //                   Business Type
// //                 </option>

// //                 <option value="Real Estate">
// //                   Real Estate
// //                 </option>

// //                 <option value="Business">
// //                   Business
// //                 </option>

// //                 <option value="Broker">
// //                   Broker
// //                 </option>
// //               </select>

// //               <ChevronDown
// //                 size={11}
// //                 className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#75878b]"
// //               />
// //             </div>
// //           </div>

// //           {/* =================================================
// //               APPLICATION CARDS
// //           ================================================== */}

// //           <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2 2xl:grid-cols-3">
// //             {filteredApplications.length > 0 ? (
// //               filteredApplications.map(
// //                 (application) => (
// //                   <ApplicationCard
// //                     key={application.id}
// //                     application={application}
// //                     selected={
// //                       selectedApplication?.id ===
// //                       application.id
// //                     }
// //                     onClick={
// //                       setSelectedApplication
// //                     }
// //                   />
// //                 )
// //               )
// //             ) : (
// //               <div className="col-span-full rounded-[8px] border border-dashed border-[#cbdad7] bg-white px-5 py-14 text-center">
// //                 <Search
// //                   size={22}
// //                   className="mx-auto text-[#9aabaa]"
// //                 />

// //                 <p className="mt-3 text-[10px] font-medium text-[#496168]">
// //                   No applications found
// //                 </p>

// //                 <p className="mt-1 text-[8px] text-[#91a0a3]">
// //                   Try changing your search or filters.
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </main>

// //         {/* =================================================
// //             RIGHT SIDE PANEL
// //         ================================================== */}

// //         {selectedApplication && (
// //           <div className="hidden xl:block">
// //             <ReviewPanel
// //               key={selectedApplication.id}
// //               application={selectedApplication}
// //               onClose={() =>
// //                 setSelectedApplication(null)
// //               }
// //               onStatusChange={
// //                 updateApplicationStatus
// //               }
// //             />
// //           </div>
// //         )}

// //         {/* =================================================
// //             MOBILE/TABLET REVIEW DRAWER
// //         ================================================== */}

// //         {selectedApplication && (
// //           <div className="fixed inset-0 z-50 xl:hidden">
// //             <button
// //               aria-label="Close review"
// //               onClick={() =>
// //                 setSelectedApplication(null)
// //               }
// //               className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
// //             />

// //             <div
// //               className="
// //                 absolute bottom-0 right-0 top-[64px]
// //                 w-[92%] max-w-[390px]
// //               "
// //             >
// //               <ReviewPanel
// //                 key={`mobile-${selectedApplication.id}`}
// //                 application={selectedApplication}
// //                 onClose={() =>
// //                   setSelectedApplication(null)
// //                 }
// //                 onStatusChange={
// //                   updateApplicationStatus
// //                 }
// //               />
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import {
//   Search,
//   RefreshCw,
//   Eye,
//   X,
//   FileCheck2,
//   ShieldCheck,
//   Building2,
// } from "lucide-react";
// import Swal from "sweetalert2";
// import {
//   getPartnerApplicationsApi,
//   approvePartnerApplicationApi,
//   verifyApprovedPartnerApi,
//   actionRequiredPartnerApi,
//   rejectPartnerApplicationApi,
// } from "../../../Services/partnerService";

// const TABS = [
//   ["Applications", "Submitted"],
//   ["Under Review", "Under_Review"],
//   ["Action Required", "Action_Required"],
//   ["Approved / Not Verified", "Approved_Not_Verified"],
//   ["Verified", "Verified"],
//   ["Rejected", "Rejected"],
// ];
// const statusClass = (s) =>
//   ({
//     Submitted: "bg-[#EAF5FF] text-[#3679A9]",
//     Under_Review: "bg-[#FFF7E8] text-[#B97614]",
//     Action_Required: "bg-[#FFF0EC] text-[#C35D42]",
//     Approved_Not_Verified: "bg-[#F1EEFF] text-[#6F59AF]",
//     Verified: "bg-[#E8F8F1] text-[#16825F]",
//     Rejected: "bg-[#FFF0F0] text-[#D24A4A]",
//   })[s] || "bg-slate-100 text-slate-600";

// export default function PartnerApplications() {
//   const [rows, setRows] = useState([]),
//     [active, setActive] = useState("Submitted"),
//     [search, setSearch] = useState(""),
//     [selected, setSelected] = useState(null),
//     [loading, setLoading] = useState(true);
//   const load = async () => {
//     try {
//       setLoading(true);
//       const r = await getPartnerApplicationsApi({
//         status: active,
//         search: search || undefined,
//       });
//       setRows(r?.data || []);
//     } catch (e) {
//       Swal.fire(
//         "Error",
//         e?.response?.data?.message || "Unable to load applications",
//         "error",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     load();
//   }, [active]);
//   const approve = async (p) => {
//     const x = await Swal.fire({
//       title: "Approve Partner?",
//       text: "Temporary credentials will be generated and emailed.",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#005F56",
//     });
//     if (!x.isConfirmed) return;
//     await approvePartnerApplicationApi(p._id, {
//       remarks: "Approved by DigiNiwas Admin",
//     });
//     await Swal.fire(
//       "Approved",
//       "Credentials sent to registered email.",
//       "success",
//     );
//     setSelected(null);
//     load();
//   };
//   const verify = async (p) => {
//     const x = await Swal.fire({
//       title: "Final Verify Partner?",
//       text: "Partner can then receive assignments, visits and spend credits.",
//       showCancelButton: true,
//       confirmButtonColor: "#005F56",
//     });
//     if (!x.isConfirmed) return;
//     await verifyApprovedPartnerApi(p._id, {
//       remarks: "KYC and business verification completed",
//     });
//     setSelected(null);
//     load();
//   };
//   const actionReq = async (p) => {
//     const x = await Swal.fire({
//       title: "Action Required",
//       input: "textarea",
//       inputPlaceholder: "What needs correction?",
//       showCancelButton: true,
//       confirmButtonColor: "#005F56",
//     });
//     if (!x.isConfirmed) return;
//     await actionRequiredPartnerApi(p._id, {
//       remarks: x.value || "Additional information required",
//     });
//     setSelected(null);
//     load();
//   };
//   const reject = async (p) => {
//     const x = await Swal.fire({
//       title: "Reject Application?",
//       input: "textarea",
//       inputPlaceholder: "Reason",
//       showCancelButton: true,
//       confirmButtonColor: "#D24A4A",
//     });
//     if (!x.isConfirmed) return;
//     await rejectPartnerApplicationApi(p._id, {
//       remarks: x.value || "Rejected by admin",
//     });
//     setSelected(null);
//     load();
//   };

//   return (
//     <div className="min-h-screen bg-[#F4F7F8] p-2 md:p-1 text-[#173247]">
//       {/* <section className="rounded-[20px] bg-[#1F3C50] px-5 py-5 shadow-sm"> */}
//         <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             {/* <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#35C99A]">
//               Partner Operations
//             </p> */}
//             <h1 className="mt-1 text-2xl font-extrabold text-[#1F3C50]">
//               Partner Applications
//             </h1>
//             <p className="mt-1 text-xs text-[#7a8991]">
//               Review onboarding, KYC, email/mobile verification and final
//               approval.
//             </p>
//           </div>
//           <button
//             onClick={load}
//             className="flex h-10 items-center gap-2 rounded-xl bg-white px-4 text-xs font-bold"
//           >
//             <RefreshCw size={15} />
//             Refresh
//           </button>
//         </div>
//       {/* </section> */}
//       <section className="mt-3 rounded-[18px] border border-[#E0E8EC] bg-white p-3">
//         <div className="flex flex-wrap gap-2">
//           {TABS.map(([label, value]) => (
//             <button
//               key={value}
//               onClick={() => setActive(value)}
//               className={`rounded-xl px-4 py-2.5 text-[11px] font-bold ${active === value ? "bg-[#005F56] text-white" : "bg-[#F4F7F8] text-[#6B808A] hover:bg-[#EAF9F4]"}`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//         <div className="mt-3 flex gap-2">
//           <div className="relative flex-1">
//             <Search
//               size={15}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8AA0AA]"
//             />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && load()}
//               placeholder="Search name, email, phone, Partner ID..."
//               className="h-10 w-full rounded-xl border border-[#DCE5E9] bg-[#FAFCFD] pl-9 pr-3 text-xs outline-none focus:border-[#35C99A]"
//             />
//           </div>
//           <button
//             onClick={load}
//             className="rounded-xl bg-[#35C99A] px-5 text-xs font-extrabold"
//           >
//             Search
//           </button>
//         </div>
//       </section>
//       <section className="mt-3 overflow-hidden  border border-[#E0E8EC] bg-white">
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left">
//             <thead className="bg-[#1F3C50] text-[10px] uppercase tracking-wider text-[white]">
//               <tr>
//                 <th className="px-4 py-3">Partner</th>
//                 <th className="px-4 py-3">Account</th>
//                 <th className="px-4 py-3">Verification</th>
//                 <th className="px-4 py-3">Location</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3 text-right">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-[#EDF2F4]">
//               {loading ? (
//                 <tr>
//                   <td colSpan="6" className="py-14 text-center text-xs">
//                     Loading...
//                   </td>
//                 </tr>
//               ) : rows.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="py-14 text-center text-xs text-[#71858E]"
//                   >
//                     No applications found.
//                   </td>
//                 </tr>
//               ) : (
//                 rows.map((p) => (
//                   <tr key={p._id} className="hover:bg-[#FAFCFD]">
//                     <td className="px-4 py-3">
//                       <div className="text-[12px] font-extrabold">{p.name}</div>
//                       <div className="mt-1 text-[10px] text-[#82949D]">
//                         {p.partnerId} · {p.email}
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-[11px] font-semibold capitalize">
//                       {p.accountType}
//                     </td>
//                     <td className="px-4 py-3 text-[10px]">
//                       <div
//                         className={
//                           p.emailVerification?.isVerified
//                             ? "text-[#16825F]"
//                             : "text-[#B97614]"
//                         }
//                       >
//                         Email:{" "}
//                         {p.emailVerification?.isVerified
//                           ? "Verified"
//                           : "Pending"}
//                       </div>
//                       <div
//                         className={
//                           p.phoneVerification?.isVerified
//                             ? "text-[#16825F]"
//                             : "text-[#B97614]"
//                         }
//                       >
//                         Mobile:{" "}
//                         {p.phoneVerification?.isVerified
//                           ? "Verified"
//                           : "Pending"}
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-[11px]">
//                       {p.location?.city || "-"}, {p.location?.state || "-"}
//                     </td>
//                     <td className="px-4 py-3">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${statusClass(p.applicationStatus)}`}
//                       >
//                         {p.applicationStatus?.replaceAll("_", " ")}
//                       </span>
//                     </td>
//                     <td className="px-4 py-3 text-right">
//                       <button
//                         onClick={() => setSelected(p)}
//                         className="inline-flex items-center gap-1 rounded-lg border border-[#DCE5E9] px-3 py-2 text-[10px] font-bold hover:bg-[#EAF9F4]"
//                       >
//                         <Eye size={13} />
//                         Review
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </section>
//       {selected && (
//         <div className="fixed inset-0 z-50 flex justify-end bg-[#0E2736]/50">
//           <div className="h-full w-full max-w-[620px] overflow-y-auto bg-[#F4F7F8]">
//             <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#DCE5E9] bg-white px-5 py-4">
//               <div>
//                 <p className="text-[10px] font-bold uppercase text-[#35A98C]">
//                   Application Review
//                 </p>
//                 <h2 className="text-lg font-extrabold">{selected.name}</h2>
//               </div>
//               <button onClick={() => setSelected(null)}>
//                 <X size={18} />
//               </button>
//             </div>
//             <div className="space-y-3 p-4">
//               <Section title="Verification" icon={<ShieldCheck size={16} />}>
//                 <Info
//                   label="Email"
//                   value={
//                     selected.emailVerification?.isVerified
//                       ? "Verified"
//                       : "Pending"
//                   }
//                 />
//                 <Info
//                   label="Mobile"
//                   value={
//                     selected.phoneVerification?.isVerified
//                       ? "Verified"
//                       : "Pending"
//                   }
//                 />
//                 <Info
//                   label="Admin Approved"
//                   value={selected.isApproved ? "Yes" : "No"}
//                 />
//                 <Info
//                   label="Final Verified"
//                   value={selected.isVerified ? "Yes" : "No"}
//                 />
//               </Section>
//               <Section title="Business" icon={<Building2 size={16} />}>
//                 <Info
//                   label="Business"
//                   value={selected.business?.businessName}
//                 />
//                 <Info label="GSTIN" value={selected.business?.gstin} />
//                 <Info label="City" value={selected.location?.city} />
//                 <Info
//                   label="RERA"
//                   value={
//                     selected.rera?.applicable
//                       ? selected.rera?.registrationNumber || "Applicable"
//                       : "Not Applicable"
//                   }
//                 />
//               </Section>
//               <Section
//                 title="Identity Documents"
//                 icon={<FileCheck2 size={16} />}
//               >
//                 <div className="col-span-2 space-y-2">
//                   {(selected.identityDocuments || []).map((d) => (
//                     <div
//                       key={d._id}
//                       className="rounded-xl border border-[#E0E8EC] bg-[#FAFCFD] p-3"
//                     >
//                       <div className="text-xs font-bold">{d.documentType}</div>
//                       <div className="mt-2 flex gap-2">
//                         {d.frontUrl && (
//                           <a
//                             href={d.frontUrl}
//                             target="_blank"
//                             rel="noreferrer"
//                             className="rounded-lg bg-[#EAF9F4] px-3 py-2 text-[10px] font-bold text-[#08745F]"
//                           >
//                             Front
//                           </a>
//                         )}
//                         {d.backUrl && (
//                           <a
//                             href={d.backUrl}
//                             target="_blank"
//                             rel="noreferrer"
//                             className="rounded-lg bg-[#EAF9F4] px-3 py-2 text-[10px] font-bold text-[#08745F]"
//                           >
//                             Back
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Section>
//             </div>
//             <div className="sticky bottom-0 border-t border-[#DCE5E9] bg-white p-4">
//               <div className="flex flex-wrap gap-2">
//                 {["Submitted", "Under_Review", "Action_Required"].includes(
//                   selected.applicationStatus,
//                 ) && (
//                   <>
//                     <button
//                       onClick={() => approve(selected)}
//                       className="rounded-xl bg-[#005F56] px-4 py-2.5 text-xs font-bold text-white"
//                     >
//                       Approve
//                     </button>
//                     <button
//                       onClick={() => actionReq(selected)}
//                       className="rounded-xl bg-[#FFF8EA] px-4 py-2.5 text-xs font-bold text-[#A76C18]"
//                     >
//                       Action Required
//                     </button>
//                     <button
//                       onClick={() => reject(selected)}
//                       className="rounded-xl bg-[#FFF2F2] px-4 py-2.5 text-xs font-bold text-[#C74949]"
//                     >
//                       Reject
//                     </button>
//                   </>
//                 )}
//                 {selected.applicationStatus === "Approved_Not_Verified" && (
//                   <button
//                     onClick={() => verify(selected)}
//                     className="rounded-xl bg-[#35C99A] px-4 py-2.5 text-xs font-extrabold"
//                   >
//                     Final Verify Partner
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// const Section = ({ title, icon, children }) => (
//   <div className="rounded-[16px] border border-[#E0E8EC] bg-white p-4">
//     <div className="mb-3 flex items-center gap-2 text-sm font-extrabold">
//       <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF9F4] text-[#168B72]">
//         {icon}
//       </span>
//       {title}
//     </div>
//     <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">{children}</div>
//   </div>
// );
// const Info = ({ label, value }) => (
//   <div className="rounded-xl bg-[#F7F9FA] p-3">
//     <p className="text-[9px] font-bold uppercase tracking-wider text-[#8A9AA2]">
//       {label}
//     </p>
//     <p className="mt-1 break-words text-[11px] font-semibold text-[#344D59]">
//       {value || "-"}
//     </p>
//   </div>
// );


import { useEffect, useState } from "react";
import {
  Search,
  RefreshCw,
  Eye,
  X,
  FileCheck2,
  ShieldCheck,
  Building2,
  Users,
} from "lucide-react";
import Swal from "sweetalert2";

import {
  getPartnerApplicationsApi,
  approvePartnerApplicationApi,
  verifyApprovedPartnerApi,
  actionRequiredPartnerApi,
  rejectPartnerApplicationApi,
} from "../../../Services/partnerService";

const TABS = [
  ["Applications", "Submitted"],
  ["Under Review", "Under_Review"],
  ["Action Required", "Action_Required"],
  ["Approved / Not Verified", "Approved_Not_Verified"],
  ["Verified", "Verified"],
  ["Rejected", "Rejected"],
];

const statusClass = (status) =>
  ({
    Submitted: "bg-[#EAF5FF] text-[#3679A9]",
    Under_Review: "bg-[#FFF7E8] text-[#B97614]",
    Action_Required: "bg-[#FFF0EC] text-[#C35D42]",
    Approved_Not_Verified: "bg-[#F1EEFF] text-[#6F59AF]",
    Verified: "bg-[#E8F8F1] text-[#16825F]",
    Rejected: "bg-[#FFF0F0] text-[#D24A4A]",
  })[status] || "bg-slate-100 text-slate-600";

const accountTypeLabel = (type) => {
  const labels = {
    single: "Single Partner",
    team: "Team / Agency Owner",
    subagent: "Sub Agent",
  };

  return labels[type] || type || "-";
};

const accountTypeClass = (type) => {
  const classes = {
    single: "bg-[#EAF5FF] text-[#3679A9]",
    team: "bg-[#F1EEFF] text-[#6F59AF]",
    subagent: "bg-[#EAF9F4] text-[#16825F]",
  };

  return classes[type] || "bg-[#F4F7F8] text-[#6B808A]";
};

export default function PartnerApplications() {
  const [rows, setRows] = useState([]);

  const [active, setActive] = useState("Submitted");

  const [search, setSearch] = useState("");

  const [accountTypeFilter, setAccountTypeFilter] =
    useState("All");

  const [selected, setSelected] = useState(null);

  const [loading, setLoading] = useState(true);

  const [actionLoading, setActionLoading] =
    useState(false);

  /* =========================================================
     LOAD APPLICATIONS
  ========================================================= */

  const load = async () => {
    try {
      setLoading(true);

      const response =
        await getPartnerApplicationsApi({
          status:
            active === "All"
              ? undefined
              : active,

          search:
            search.trim() || undefined,

          accountType:
            accountTypeFilter === "All"
              ? undefined
              : accountTypeFilter,
        });

      setRows(response?.data || []);
    } catch (error) {
      console.error(
        "Load Partner Applications Error:",
        error
      );

      Swal.fire(
        "Error",
        error?.response?.data?.message ||
          "Unable to load applications",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     AUTO RELOAD
  ========================================================= */

  useEffect(() => {
    load();
  }, [active, accountTypeFilter]);

  /* =========================================================
     APPROVE
     PATCH /api/partner-applications/:id/approve
  ========================================================= */

  const approve = async (partner) => {
    const confirmation = await Swal.fire({
      title: "Approve Partner?",
      text:
        partner.accountType === "subagent"
          ? "Approve this Sub Agent application?"
          : "Temporary credentials will be generated and emailed.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#005F56",
      confirmButtonText: "Approve",
    });

    if (!confirmation.isConfirmed) return;

    try {
      setActionLoading(true);

      await approvePartnerApplicationApi(
        partner._id,
        {
          remarks:
            "Approved by DigiNiwas Admin",
        }
      );

      await Swal.fire(
        "Approved",
        partner.accountType === "subagent"
          ? "Sub Agent application approved successfully."
          : "Credentials sent to registered email.",
        "success"
      );

      setSelected(null);

      await load();
    } catch (error) {
      console.error(
        "Approve Partner Error:",
        error
      );

      Swal.fire(
        "Error",
        error?.response?.data?.message ||
          "Unable to approve application",
        "error"
      );
    } finally {
      setActionLoading(false);
    }
  };

  /* =========================================================
     VERIFY
     PATCH /api/partner-applications/:id/verify
  ========================================================= */

  const verify = async (partner) => {
    const confirmation = await Swal.fire({
      title: "Final Verify Partner?",
      text:
        "Partner can then receive assignments, visits and spend credits.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#005F56",
      confirmButtonText: "Verify",
    });

    if (!confirmation.isConfirmed) return;

    try {
      setActionLoading(true);

      await verifyApprovedPartnerApi(
        partner._id,
        {
          remarks:
            "KYC and business verification completed",
        }
      );

      await Swal.fire(
        "Verified",
        partner.accountType === "subagent"
          ? "Sub Agent verified successfully."
          : "Partner verified successfully.",
        "success"
      );

      setSelected(null);

      await load();
    } catch (error) {
      console.error(
        "Verify Partner Error:",
        error
      );

      Swal.fire(
        "Error",
        error?.response?.data?.message ||
          "Unable to verify application",
        "error"
      );
    } finally {
      setActionLoading(false);
    }
  };

  /* =========================================================
     ACTION REQUIRED
     PATCH /api/partner-applications/:id/action-required
  ========================================================= */

  const actionReq = async (partner) => {
    const confirmation = await Swal.fire({
      title: "Action Required",
      input: "textarea",
      inputPlaceholder:
        "What needs correction?",
      showCancelButton: true,
      confirmButtonColor: "#005F56",
      confirmButtonText: "Send Request",
    });

    if (!confirmation.isConfirmed) return;

    try {
      setActionLoading(true);

      await actionRequiredPartnerApi(
        partner._id,
        {
          remarks:
            confirmation.value ||
            "Additional information required",
        }
      );

      await Swal.fire(
        "Updated",
        "Application marked as Action Required.",
        "success"
      );

      setSelected(null);

      await load();
    } catch (error) {
      console.error(
        "Action Required Error:",
        error
      );

      Swal.fire(
        "Error",
        error?.response?.data?.message ||
          "Unable to update application",
        "error"
      );
    } finally {
      setActionLoading(false);
    }
  };

  /* =========================================================
     REJECT
     PATCH /api/partner-applications/:id/reject
  ========================================================= */

  const reject = async (partner) => {
    const confirmation = await Swal.fire({
      title: "Reject Application?",
      input: "textarea",
      inputPlaceholder:
        "Enter rejection reason",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D24A4A",
      confirmButtonText: "Reject",
    });

    if (!confirmation.isConfirmed) return;

    try {
      setActionLoading(true);

      await rejectPartnerApplicationApi(
        partner._id,
        {
          remarks:
            confirmation.value ||
            "Rejected by admin",
        }
      );

      await Swal.fire(
        "Rejected",
        "Partner application rejected.",
        "success"
      );

      setSelected(null);

      await load();
    } catch (error) {
      console.error(
        "Reject Partner Error:",
        error
      );

      Swal.fire(
        "Error",
        error?.response?.data?.message ||
          "Unable to reject application",
        "error"
      );
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F8] p-2 text-[#173247] md:p-1">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="mt-1 text-2xl font-extrabold text-[#1F3C50]">
            Partner Applications
          </h1>

          <p className="mt-1 text-xs text-[#7a8991]">
            Review Single Partners, Agency Owners and
            Sub Agents with KYC and final verification.
          </p>
        </div>

        <button
          onClick={load}
          disabled={loading}
          className="flex h-10 items-center gap-2 rounded-xl bg-white px-4 text-xs font-bold transition hover:bg-[#EAF9F4] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <RefreshCw
            size={15}
            className={
              loading ? "animate-spin" : ""
            }
          />

          Refresh
        </button>
      </div>

      {/* =====================================================
          FILTER SECTION
      ===================================================== */}

      <section className="mt-3 rounded-[18px] border border-[#E0E8EC] bg-white p-3">

        {/* STATUS TABS */}

        <div className="flex flex-wrap gap-2">
          {TABS.map(([label, value]) => (
            <button
              key={value}
              onClick={() =>
                setActive(value)
              }
              className={`rounded-xl px-4 py-2.5 text-[11px] font-bold transition ${
                active === value
                  ? "bg-[#005F56] text-white"
                  : "bg-[#F4F7F8] text-[#6B808A] hover:bg-[#EAF9F4]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* SEARCH + ACCOUNT FILTER */}

        <div className="mt-3 flex flex-col gap-2 lg:flex-row">

          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8AA0AA]"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  load();
                }
              }}
              placeholder="Search name, email, phone, Partner ID..."
              className="h-10 w-full rounded-xl border border-[#DCE5E9] bg-[#FAFCFD] pl-9 pr-3 text-xs outline-none transition focus:border-[#35C99A]"
            />
          </div>

          {/* ACCOUNT TYPE FILTER */}

          <select
            value={accountTypeFilter}
            onChange={(e) =>
              setAccountTypeFilter(
                e.target.value
              )
            }
            className="h-10 min-w-[190px] rounded-xl border border-[#DCE5E9] bg-[#FAFCFD] px-3 text-xs font-semibold text-[#425A66] outline-none focus:border-[#35C99A]"
          >
            <option value="All">
              All Accounts
            </option>

            <option value="single">
              Single Partner
            </option>

            <option value="team">
              Team / Agency Owner
            </option>

            <option value="subagent">
              Sub Agent
            </option>
          </select>

          <button
            onClick={load}
            disabled={loading}
            className="h-10 rounded-xl bg-[#35C99A] px-5 text-xs font-extrabold text-[#173247] transition hover:bg-[#2FC091] disabled:opacity-60"
          >
            Search
          </button>
        </div>
      </section>

      {/* =====================================================
          TABLE
      ===================================================== */}

      <section className="mt-3 overflow-hidden border border-[#E0E8EC] bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">

            <thead className="bg-[#1F3C50] text-[10px] uppercase tracking-wider text-white">
              <tr>
                <th className="px-4 py-3">
                  Partner
                </th>

                <th className="px-4 py-3">
                  Account
                </th>

                <th className="px-4 py-3">
                  Verification
                </th>

                <th className="px-4 py-3">
                  Location
                </th>

                <th className="px-4 py-3">
                  Status
                </th>

                <th className="px-4 py-3 text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#EDF2F4]">

              {loading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="py-14 text-center text-xs text-[#71858E]"
                  >
                    Loading applications...
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="py-14 text-center text-xs text-[#71858E]"
                  >
                    No applications found.
                  </td>
                </tr>
              ) : (
                rows.map((partner) => (
                  <tr
                    key={partner._id}
                    className="transition hover:bg-[#FAFCFD]"
                  >
                    {/* PARTNER */}

                    <td className="px-4 py-3">
                      <div className="text-[12px] font-extrabold">
                        {partner.name || "-"}
                      </div>

                      <div className="mt-1 text-[10px] text-[#82949D]">
                        {partner.partnerId ||
                          "Partner ID Pending"}

                        {" · "}

                        {partner.email || "-"}
                      </div>

                      {partner.accountType ===
                        "subagent" &&
                        partner.agencyDetails
                          ?.agencyName && (
                          <div className="mt-1 text-[9px] font-semibold text-[#35A98C]">
                            Agency:{" "}
                            {
                              partner
                                .agencyDetails
                                .agencyName
                            }
                          </div>
                        )}
                    </td>

                    {/* ACCOUNT TYPE */}

                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[9px] font-bold ${accountTypeClass(
                          partner.accountType
                        )}`}
                      >
                        {accountTypeLabel(
                          partner.accountType
                        )}
                      </span>
                    </td>

                    {/* VERIFICATION */}

                    <td className="px-4 py-3 text-[10px]">

                      <div
                        className={
                          partner
                            .emailVerification
                            ?.isVerified
                            ? "font-semibold text-[#16825F]"
                            : "font-semibold text-[#B97614]"
                        }
                      >
                        Email:{" "}
                        {partner
                          .emailVerification
                          ?.isVerified
                          ? "Verified"
                          : "Pending"}
                      </div>

                      <div
                        className={
                          partner
                            .phoneVerification
                            ?.isVerified
                            ? "mt-1 font-semibold text-[#16825F]"
                            : "mt-1 font-semibold text-[#B97614]"
                        }
                      >
                        Mobile:{" "}
                        {partner
                          .phoneVerification
                          ?.isVerified
                          ? "Verified"
                          : "Pending"}
                      </div>
                    </td>

                    {/* LOCATION */}

                    <td className="px-4 py-3 text-[11px]">
                      {partner.location?.city ||
                        "-"}

                      {partner.location?.state
                        ? `, ${partner.location.state}`
                        : ""}
                    </td>

                    {/* STATUS */}

                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${statusClass(
                          partner.applicationStatus
                        )}`}
                      >
                        {partner.applicationStatus
                          ?.replaceAll("_", " ") ||
                          "-"}
                      </span>
                    </td>

                    {/* ACTION */}

                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() =>
                          setSelected(partner)
                        }
                        className="inline-flex items-center gap-1 rounded-lg border border-[#DCE5E9] px-3 py-2 text-[10px] font-bold transition hover:border-[#35C99A] hover:bg-[#EAF9F4]"
                      >
                        <Eye size={13} />
                        Review
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* =====================================================
          APPLICATION DETAILS DRAWER
      ===================================================== */}

      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#0E2736]/50">

          <div className="h-full w-full max-w-[620px] overflow-y-auto bg-[#F4F7F8]">

            {/* DRAWER HEADER */}

            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#DCE5E9] bg-white px-5 py-4">

              <div>
                <p className="text-[10px] font-bold uppercase text-[#35A98C]">
                  Application Review
                </p>

                <h2 className="text-lg font-extrabold">
                  {selected.name || "-"}
                </h2>

                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${accountTypeClass(
                      selected.accountType
                    )}`}
                  >
                    {accountTypeLabel(
                      selected.accountType
                    )}
                  </span>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${statusClass(
                      selected.applicationStatus
                    )}`}
                  >
                    {selected.applicationStatus
                      ?.replaceAll("_", " ")}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelected(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-xl transition hover:bg-[#F4F7F8]"
              >
                <X size={18} />
              </button>
            </div>

            {/* DRAWER CONTENT */}

            <div className="space-y-3 p-4">

              {/* ACCOUNT INFORMATION */}

              <Section
                title="Account Information"
                icon={<Users size={16} />}
              >
                <Info
                  label="Account Type"
                  value={accountTypeLabel(
                    selected.accountType
                  )}
                />

                <Info
                  label="Partner ID"
                  value={selected.partnerId}
                />

                <Info
                  label="Name"
                  value={selected.name}
                />

                <Info
                  label="Phone"
                  value={selected.phone}
                />
              </Section>

              {/* VERIFICATION */}

              <Section
                title="Verification"
                icon={
                  <ShieldCheck size={16} />
                }
              >
                <Info
                  label="Email"
                  value={
                    selected.emailVerification
                      ?.isVerified
                      ? "Verified"
                      : "Pending"
                  }
                />

                <Info
                  label="Mobile"
                  value={
                    selected.phoneVerification
                      ?.isVerified
                      ? "Verified"
                      : "Pending"
                  }
                />

                <Info
                  label="Admin Approved"
                  value={
                    selected.isApproved
                      ? "Yes"
                      : "No"
                  }
                />

                <Info
                  label="Final Verified"
                  value={
                    selected.isVerified
                      ? "Yes"
                      : "No"
                  }
                />
              </Section>

              {/* BUSINESS */}

              <Section
                title="Business"
                icon={<Building2 size={16} />}
              >
                <Info
                  label="Business"
                  value={
                    selected.business
                      ?.businessName
                  }
                />

                <Info
                  label="GSTIN"
                  value={
                    selected.business?.gstin
                  }
                />

                <Info
                  label="City"
                  value={
                    selected.location?.city
                  }
                />

                <Info
                  label="RERA"
                  value={
                    selected.rera?.applicable
                      ? selected.rera
                          ?.registrationNumber ||
                        "Applicable"
                      : "Not Applicable"
                  }
                />
              </Section>

              {/* =================================================
                  SUBAGENT AGENCY ASSOCIATION
              ================================================= */}

              {selected.accountType ===
                "subagent" && (
                <div className="rounded-[16px] border border-[#E0E8EC] bg-white p-4">

                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF9F4] text-[#168B72]">
                      <Users size={16} />
                    </span>

                    <h3 className="text-sm font-extrabold">
                      Agency Association
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">

                    <div className="rounded-xl bg-[#F7F9FA] p-3">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#83959E]">
                        Agency
                      </p>

                      <p className="mt-1 font-bold text-[#344D59]">
                        {selected
                          .agencyDetails
                          ?.agencyName ||
                          "-"}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#F7F9FA] p-3">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#83959E]">
                        Agency Code
                      </p>

                      <p className="mt-1 font-bold text-[#344D59]">
                        {selected
                          .agencyDetails
                          ?.agencyPartnerCode ||
                          "-"}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#F7F9FA] p-3">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#83959E]">
                        Owner
                      </p>

                      <p className="mt-1 font-bold text-[#344D59]">
                        {selected
                          .agencyDetails
                          ?.agencyOwnerName ||
                          "-"}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#F7F9FA] p-3">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#83959E]">
                        Team Role
                      </p>

                      <p className="mt-1 font-bold text-[#344D59]">
                        {selected.teamRole ||
                          "-"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* IDENTITY DOCUMENTS */}

              <Section
                title="Identity Documents"
                icon={
                  <FileCheck2 size={16} />
                }
              >
                <div className="col-span-1 space-y-2 sm:col-span-2">

                  {(
                    selected.identityDocuments ||
                    []
                  ).length === 0 ? (
                    <div className="rounded-xl bg-[#F7F9FA] p-4 text-center text-[10px] text-[#82949D]">
                      No identity documents
                      uploaded.
                    </div>
                  ) : (
                    (
                      selected.identityDocuments ||
                      []
                    ).map(
                      (document, index) => (
                        <div
                          key={
                            document._id ||
                            `${document.documentType}-${index}`
                          }
                          className="rounded-xl border border-[#E0E8EC] bg-[#FAFCFD] p-3"
                        >
                          <div className="text-xs font-bold capitalize">
                            {document.documentType ||
                              "Document"}
                          </div>

                          <div className="mt-2 flex flex-wrap gap-2">

                            {document.frontUrl && (
                              <a
                                href={
                                  document.frontUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg bg-[#EAF9F4] px-3 py-2 text-[10px] font-bold text-[#08745F]"
                              >
                                View Front
                              </a>
                            )}

                            {document.backUrl && (
                              <a
                                href={
                                  document.backUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg bg-[#EAF9F4] px-3 py-2 text-[10px] font-bold text-[#08745F]"
                              >
                                View Back
                              </a>
                            )}

                            {!document.frontUrl &&
                              !document.backUrl && (
                                <span className="text-[10px] text-[#8A9AA2]">
                                  No document URL
                                </span>
                              )}
                          </div>
                        </div>
                      )
                    )
                  )}
                </div>
              </Section>
            </div>

            {/* =================================================
                ADMIN ACTIONS
            ================================================= */}

            <div className="sticky bottom-0 border-t border-[#DCE5E9] bg-white p-4 shadow-[0_-5px_20px_rgba(15,23,42,0.04)]">

              <div className="flex flex-wrap gap-2">

                {[
                  "Submitted",
                  "Under_Review",
                  "Action_Required",
                ].includes(
                  selected.applicationStatus
                ) && (
                  <>
                    {/* APPROVE */}

                    <button
                      disabled={
                        actionLoading
                      }
                      onClick={() =>
                        approve(selected)
                      }
                      className="rounded-xl bg-[#005F56] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#004D46] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Approve
                    </button>

                    {/* ACTION REQUIRED */}

                    <button
                      disabled={
                        actionLoading
                      }
                      onClick={() =>
                        actionReq(selected)
                      }
                      className="rounded-xl bg-[#FFF8EA] px-4 py-2.5 text-xs font-bold text-[#A76C18] transition hover:bg-[#FFF1D3] disabled:opacity-50"
                    >
                      Action Required
                    </button>

                    {/* REJECT */}

                    <button
                      disabled={
                        actionLoading
                      }
                      onClick={() =>
                        reject(selected)
                      }
                      className="rounded-xl bg-[#FFF2F2] px-4 py-2.5 text-xs font-bold text-[#C74949] transition hover:bg-[#FFE5E5] disabled:opacity-50"
                    >
                      Reject
                    </button>
                  </>
                )}

                {/* FINAL VERIFY */}

                {selected.applicationStatus ===
                  "Approved_Not_Verified" && (
                  <button
                    disabled={actionLoading}
                    onClick={() =>
                      verify(selected)
                    }
                    className="rounded-xl bg-[#35C99A] px-4 py-2.5 text-xs font-extrabold text-[#173247] transition hover:bg-[#2EB98E] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Final Verify Partner
                  </button>
                )}

                {selected.applicationStatus ===
                  "Verified" && (
                  <div className="flex items-center gap-2 rounded-xl bg-[#E8F8F1] px-4 py-2.5 text-xs font-bold text-[#16825F]">
                    <ShieldCheck size={15} />

                    Partner Verified
                  </div>
                )}

                {selected.applicationStatus ===
                  "Rejected" && (
                  <div className="rounded-xl bg-[#FFF0F0] px-4 py-2.5 text-xs font-bold text-[#D24A4A]">
                    Application Rejected
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   SECTION
========================================================= */

const Section = ({
  title,
  icon,
  children,
}) => (
  <div className="rounded-[16px] border border-[#E0E8EC] bg-white p-4">
    <div className="mb-3 flex items-center gap-2 text-sm font-extrabold">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF9F4] text-[#168B72]">
        {icon}
      </span>

      {title}
    </div>

    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {children}
    </div>
  </div>
);

/* =========================================================
   INFO
========================================================= */

const Info = ({ label, value }) => (
  <div className="rounded-xl bg-[#F7F9FA] p-3">
    <p className="text-[9px] font-bold uppercase tracking-wider text-[#8A9AA2]">
      {label}
    </p>

    <p className="mt-1 break-words text-[11px] font-semibold text-[#344D59]">
      {value || "-"}
    </p>
  </div>
);