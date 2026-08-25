// // import {
// //   useEffect,
// //   useState,
// // } from "react";

// // import {
// //   useLocation,
// //   useNavigate,
// // } from "react-router-dom";

// // import Partner from "./PartnerManagement";

// // import PartnerAssignmentQueue from "./PartnerAssigned";

// // import VisitManagement from "./VisitManagement";

// // export default function Dashboard() {
// //   const location =
// //     useLocation();

// //   const navigate =
// //     useNavigate();

// //   // ======================================================
// //   // URL QUERY
// //   // Example:
// //   // /partnerdashboard?tab=visit&visitId=xxxx
// //   // ======================================================

// //   const searchParams =
// //     new URLSearchParams(
// //       location.search
// //     );

// //   const requestedTab =
// //     searchParams.get(
// //       "tab"
// //     );

// //   const requestedVisitId =
// //     searchParams.get(
// //       "visitId"
// //     );

// //   const requestedPartnerId =
// //     searchParams.get(
// //       "partnerId"
// //     );

// //   // ======================================================
// //   // INITIAL TAB
// //   // ======================================================

// //   const getInitialTab = () => {
// //     if (
// //       requestedTab ===
// //       "visit"
// //     ) {
// //       return "visit";
// //     }

// //     if (
// //       requestedTab ===
// //       "assignment"
// //     ) {
// //       return "assignment";
// //     }

// //     return "promotions";
// //   };

// //   const getInitialSubTab =
// //     () => {
// //       if (
// //         requestedTab ===
// //         "visit"
// //       ) {
// //         return "visit";
// //       }

// //       if (
// //         requestedTab ===
// //         "assignment"
// //       ) {
// //         return "assignment";
// //       }

// //       return "dashboard";
// //     };

// //   const [
// //     activeTab,
// //     setActiveTab,
// //   ] = useState(
// //     getInitialTab
// //   );

// //   const [
// //     activeSubTab,
// //     setActiveSubTab,
// //   ] = useState(
// //     getInitialSubTab
// //   );

// //   // ======================================================
// //   // URL → ACTIVE TAB SYNC
// //   // ======================================================

// //   useEffect(() => {
// //     if (
// //       requestedTab ===
// //       "visit"
// //     ) {
// //       setActiveTab(
// //         "visit"
// //       );

// //       setActiveSubTab(
// //         "visit"
// //       );

// //       return;
// //     }

// //     if (
// //       requestedTab ===
// //       "assignment"
// //     ) {
// //       setActiveTab(
// //         "assignment"
// //       );

// //       setActiveSubTab(
// //         "assignment"
// //       );

// //       return;
// //     }

// //     if (
// //       requestedTab ===
// //       "dashboard"
// //     ) {
// //       setActiveTab(
// //         "promotions"
// //       );

// //       setActiveSubTab(
// //         "dashboard"
// //       );
// //     }
// //   }, [
// //     requestedTab,
// //   ]);

// //   // ======================================================
// //   // VISIT DRAWER CLOSE
// //   // ======================================================

// //   const handleEmbeddedVisitClose =
// //     () => {
// //       navigate(
// //         "/partnerdashboard?tab=visit",
// //         {
// //           replace: true,
// //         }
// //       );
// //     };

// //   // ======================================================
// //   // DYNAMIC NAVIGATION DATA
// //   // IMPORTANT:
// //   // component ko Dashboard ke andar rakha hai
// //   // because requestedVisitId dynamic hai.
// //   // ======================================================

// //   const navigationData = {
// //     promotions: {
// //       label:
// //         "Dashboard",

// //       subTabs: [
// //         {
// //           id: "dashboard",

// //           label:
// //             "Partner Management",

// //           component: (
// //             <Partner
// //               embedded={true}
// //               initialPartnerId={requestedPartnerId}
// //               onEmbeddedDetailClose={() => {
// //                 navigate(
// //                   "/partnerdashboard?tab=dashboard",
// //                   { replace: true }
// //                 );
// //               }}
// //             />
// //           ),
// //         },
// //       ],
// //     },

// //     assignment: {
// //       label:
// //         "Assignment",

// //       subTabs: [
// //         {
// //           id: "assignment",

// //           label:
// //             "Partner Assignment",

// //           component: (
// //             <PartnerAssignmentQueue />
// //           ),
// //         },
// //       ],
// //     },

// //     visit: {
// //       label:
// //         "Visit Management",

// //       subTabs: [
// //         {
// //           id: "visit",

// //           label:
// //             "Visit Management",

// //           component: (
// //             <VisitManagement
// //               embedded={
// //                 true
// //               }

// //               initialVisitId={
// //                 requestedVisitId
// //               }

// //               onEmbeddedDetailClose={
// //                 handleEmbeddedVisitClose
// //               }
// //             />
// //           ),
// //         },
// //       ],
// //     },
// //   };

// //   // ======================================================
// //   // CURRENT CATEGORY
// //   // ======================================================

// //   const currentCategory =
// //     navigationData[
// //       activeTab
// //     ] ||
// //     navigationData
// //       .promotions;

// //   const activeSubTabItem =
// //     currentCategory
// //       .subTabs
// //       .find(
// //         (subTab) =>
// //           subTab.id ===
// //           activeSubTab
// //       ) ||
// //     currentCategory
// //       .subTabs[0];

// //   const activeComponent =
// //     activeSubTabItem
// //       ?.component;

// //   // ======================================================
// //   // MAIN TAB CHANGE
// //   // ======================================================

// //   const handleMainTabChange =
// //     (key) => {
// //       const category =
// //         navigationData[key];

// //       if (!category) {
// //         return;
// //       }

// //       const firstSubTab =
// //         category
// //           .subTabs[0];

// //       setActiveTab(
// //         key
// //       );

// //       setActiveSubTab(
// //         firstSubTab.id
// //       );

// //       // URL bhi sync karo
// //       if (
// //         key ===
// //         "visit"
// //       ) {
// //         navigate(
// //           "/partnerdashboard?tab=visit",
// //           {
// //             replace: true,
// //           }
// //         );

// //         return;
// //       }

// //       if (
// //         key ===
// //         "assignment"
// //       ) {
// //         navigate(
// //           "/partnerdashboard?tab=assignment",
// //           {
// //             replace: true,
// //           }
// //         );

// //         return;
// //       }

// //       navigate(
// //         "/partnerdashboard?tab=dashboard",
// //         {
// //           replace: true,
// //         }
// //       );
// //     };

// //   // ======================================================
// //   // SUB TAB CHANGE
// //   // ======================================================

// //   const handleSubTabChange =
// //     (subTabId) => {
// //       setActiveSubTab(
// //         subTabId
// //       );
// //     };

// //   return (
// //     <div
// //       className="
// //         min-h-screen
// //         space-y-2
// //         p-1
// //         text-[#24413E]
// //       "
// //     >
// //       {/* ==========================================
// //           TOP HEADER
// //       ========================================== */}

// //       <div
// //         className="
// //           flex
// //           items-center
// //           justify-between
// //           rounded-2xl
// //           border
// //           border-slate-200/60
// //           bg-white
// //           p-6
// //           shadow-sm
// //         "
// //       >
// //         <div>
// //           <h1
// //             className="
// //               mt-0.5
// //               text-2xl
// //               font-extrabold
// //               text-[#005F56]
// //             "
// //           >
// //             PARTNERS SECTION
// //           </h1>
// //         </div>

// //         <div
// //           className="
// //             rounded-full
// //             bg-[#005F56]
// //             px-4
// //             py-1.5
// //             text-xs
// //             font-semibold
// //             tracking-wide
// //             text-white
// //             shadow-sm
// //           "
// //         >
// //           Active:{" "}
// //           {
// //             activeSubTabItem
// //               ?.label
// //           }
// //         </div>
// //       </div>

// //       {/* ==========================================
// //           NAVIGATION CARD
// //       ========================================== */}

// //       <div
// //         className="
// //           space-y-4
// //           rounded-2xl
// //           border
// //           border-slate-200/60
// //           bg-white
// //           p-5
// //           shadow-sm
// //         "
// //       >
// //         {/* MAIN TABS */}

// //         <div
// //           className="
// //             flex
// //             flex-wrap
// //             gap-2.5
// //             pb-2
// //           "
// //         >
// //           {Object.keys(
// //             navigationData
// //           ).map(
// //             (key) => {
// //               const isActive =
// //                 activeTab ===
// //                 key;

// //               return (
// //                 <button
// //                   key={
// //                     key
// //                   }

// //                   type="button"

// //                   onClick={() =>
// //                     handleMainTabChange(
// //                       key
// //                     )
// //                   }

// //                   className={`
// //                     rounded-xl
// //                     px-5
// //                     py-2.5
// //                     text-xs
// //                     font-bold
// //                     transition-all
// //                     duration-200

// //                     ${
// //                       isActive
// //                         ? `
// //                           bg-[#005F56]
// //                           text-white
// //                           shadow-md
// //                           shadow-[#005F56]/20
// //                         `
// //                         : `
// //                           bg-[#F4F4F5]
// //                           text-slate-600
// //                           hover:bg-slate-200/70
// //                         `
// //                     }
// //                   `}
// //                 >
// //                   {
// //                     navigationData[
// //                       key
// //                     ].label
// //                   }
// //                 </button>
// //               );
// //             }
// //           )}
// //         </div>

// //         {/* SUB TABS */}

// //         {currentCategory
// //           .subTabs
// //           .length >
// //           1 && (
// //           <div
// //             className="
// //               flex
// //               flex-wrap
// //               gap-2
// //               border-t
// //               border-slate-100
// //               pt-3
// //             "
// //           >
// //             {currentCategory
// //               .subTabs
// //               .map(
// //                 (
// //                   subTab
// //                 ) => {
// //                   const isSubActive =
// //                     activeSubTab ===
// //                     subTab.id;

// //                   return (
// //                     <button
// //                       key={
// //                         subTab.id
// //                       }

// //                       type="button"

// //                       onClick={() =>
// //                         handleSubTabChange(
// //                           subTab.id
// //                         )
// //                       }

// //                       className={`
// //                         rounded-xl
// //                         px-4
// //                         py-2
// //                         text-xs
// //                         font-semibold
// //                         transition-all
// //                         duration-200

// //                         ${
// //                           isSubActive
// //                             ? `
// //                               border
// //                               border-[#005F56]/30
// //                               bg-[#E6F4F1]
// //                               text-[#005F56]
// //                             `
// //                             : `
// //                               bg-[#F4F4F5]
// //                               text-slate-500
// //                               hover:bg-slate-200/60
// //                               hover:text-slate-800
// //                             `
// //                         }
// //                       `}
// //                     >
// //                       {
// //                         subTab.label
// //                       }
// //                     </button>
// //                   );
// //                 }
// //               )}
// //           </div>
// //         )}
// //       </div>

// //       {/* ==========================================
// //           DYNAMIC CONTENT
// //       ========================================== */}

// //       <div
// //         className="
// //           transition-all
// //           duration-300
// //         "
// //       >
// //         {
// //           activeComponent
// //         }
// //       </div>
// //     </div>
// //   );
// // }

// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import { LayoutDashboard, UsersRound, UserRoundCheck, CalendarDays } from "lucide-react";

// import Partner from "./PartnerManagement";

// import PartnerAssignmentQueue from "./PartnerAssigned";

// import VisitManagement from "./VisitManagement";

// export default function Dashboard() {
//   const location =
//     useLocation();

//   const navigate =
//     useNavigate();

//   // ======================================================
//   // URL QUERY
//   // Example:
//   // /partnerdashboard?tab=visit&visitId=xxxx
//   // ======================================================

//   const searchParams =
//     new URLSearchParams(
//       location.search
//     );

//   const requestedTab =
//     searchParams.get(
//       "tab"
//     );

//   const requestedVisitId =
//     searchParams.get(
//       "visitId"
//     );

//   const requestedPartnerId =
//     searchParams.get(
//       "partnerId"
//     );

//   // ======================================================
//   // INITIAL TAB
//   // ======================================================

//   const getInitialTab = () => {
//     if (
//       requestedTab ===
//       "visit"
//     ) {
//       return "visit";
//     }

//     if (
//       requestedTab ===
//       "assignment"
//     ) {
//       return "assignment";
//     }

//     return "promotions";
//   };

//   const getInitialSubTab =
//     () => {
//       if (
//         requestedTab ===
//         "visit"
//       ) {
//         return "visit";
//       }

//       if (
//         requestedTab ===
//         "assignment"
//       ) {
//         return "assignment";
//       }

//       return "dashboard";
//     };

//   const [
//     activeTab,
//     setActiveTab,
//   ] = useState(
//     getInitialTab
//   );

//   const [
//     activeSubTab,
//     setActiveSubTab,
//   ] = useState(
//     getInitialSubTab
//   );

//   // ======================================================
//   // URL → ACTIVE TAB SYNC
//   // ======================================================

//   useEffect(() => {
//     if (
//       requestedTab ===
//       "visit"
//     ) {
//       setActiveTab(
//         "visit"
//       );

//       setActiveSubTab(
//         "visit"
//       );

//       return;
//     }

//     if (
//       requestedTab ===
//       "assignment"
//     ) {
//       setActiveTab(
//         "assignment"
//       );

//       setActiveSubTab(
//         "assignment"
//       );

//       return;
//     }

//     if (
//       requestedTab ===
//       "dashboard"
//     ) {
//       setActiveTab(
//         "promotions"
//       );

//       setActiveSubTab(
//         "dashboard"
//       );
//     }
//   }, [
//     requestedTab,
//   ]);

//   // ======================================================
//   // VISIT DRAWER CLOSE
//   // ======================================================

//   const handleEmbeddedVisitClose =
//     () => {
//       navigate(
//         "/partnerdashboard?tab=visit",
//         {
//           replace: true,
//         }
//       );
//     };

//   // ======================================================
//   // DYNAMIC NAVIGATION DATA
//   // IMPORTANT:
//   // component ko Dashboard ke andar rakha hai
//   // because requestedVisitId dynamic hai.
//   // ======================================================

//   const navigationData = {
//     promotions: {
//       label:
//         "Dashboard",

//       subTabs: [
//         {
//           id: "dashboard",

//           label:
//             "Partner Management",

//           component: (
//             <Partner
//               embedded={true}
//               initialPartnerId={requestedPartnerId}
//               onEmbeddedDetailClose={() => {
//                 navigate(
//                   "/partnerdashboard?tab=dashboard",
//                   { replace: true }
//                 );
//               }}
//             />
//           ),
//         },
//       ],
//     },

//     assignment: {
//       label:
//         "Assignment",

//       subTabs: [
//         {
//           id: "assignment",

//           label:
//             "Partner Assignment",

//           component: (
//             <PartnerAssignmentQueue />
//           ),
//         },
//       ],
//     },

//     visit: {
//       label:
//         "Visit Management",

//       subTabs: [
//         {
//           id: "visit",

//           label:
//             "Visit Management",

//           component: (
//             <VisitManagement
//               embedded={
//                 true
//               }

//               initialVisitId={
//                 requestedVisitId
//               }

//               onEmbeddedDetailClose={
//                 handleEmbeddedVisitClose
//               }
//             />
//           ),
//         },
//       ],
//     },
//   };

//   // ======================================================
//   // CURRENT CATEGORY
//   // ======================================================

//   const currentCategory =
//     navigationData[
//       activeTab
//     ] ||
//     navigationData
//       .promotions;

//   const activeSubTabItem =
//     currentCategory
//       .subTabs
//       .find(
//         (subTab) =>
//           subTab.id ===
//           activeSubTab
//       ) ||
//     currentCategory
//       .subTabs[0];

//   const activeComponent =
//     activeSubTabItem
//       ?.component;

//   // ======================================================
//   // MAIN TAB CHANGE
//   // ======================================================

//   const handleMainTabChange =
//     (key) => {
//       const category =
//         navigationData[key];

//       if (!category) {
//         return;
//       }

//       const firstSubTab =
//         category
//           .subTabs[0];

//       setActiveTab(
//         key
//       );

//       setActiveSubTab(
//         firstSubTab.id
//       );

//       // URL bhi sync karo
//       if (
//         key ===
//         "visit"
//       ) {
//         navigate(
//           "/partnerdashboard?tab=visit",
//           {
//             replace: true,
//           }
//         );

//         return;
//       }

//       if (
//         key ===
//         "assignment"
//       ) {
//         navigate(
//           "/partnerdashboard?tab=assignment",
//           {
//             replace: true,
//           }
//         );

//         return;
//       }

//       navigate(
//         "/partnerdashboard?tab=dashboard",
//         {
//           replace: true,
//         }
//       );
//     };

//   // ======================================================
//   // SUB TAB CHANGE
//   // ======================================================

//   const handleSubTabChange =
//     (subTabId) => {
//       setActiveSubTab(
//         subTabId
//       );
//     };

//   const tabMeta = {
//     promotions: {
//       icon: UsersRound,
//       description: "Manage partner profiles and verification",
//     },
//     assignment: {
//       icon: UserRoundCheck,
//       description: "Assign verified partners to properties",
//     },
//     visit: {
//       icon: CalendarDays,
//       description: "Track and manage property visits",
//     },
//   };

//   return (
//     <div className="min-h-screen bg-[#F4F7F8] text-[#173247]">
//       <div className="space-y-3 p-2 md:p-3">
//         {/* ================= HEADER ================= */}
//         <div className="relative overflow-hidden rounded-[20px] bg-[#1F3C50] px-5 py-5 shadow-[0_4px_18px_rgba(15,47,69,0.08)] md:px-7">
//           <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#35C99A]/10" />
//           <div className="pointer-events-none absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-white/5" />

//           <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#35C99A] text-white shadow-sm">
//                 <UsersRound size={21} strokeWidth={2.2} />
//               </div>

//               <div>
//                 <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9FB3C0]">
//                   DigiNiwas Admin
//                 </p>
//                 <h1 className="mt-0.5 text-xl font-bold tracking-tight text-white md:text-2xl">
//                   Partner Management
//                 </h1>
//                 <p className="mt-1 text-xs text-[#C3D0D8]">
//                   Manage partners, assignments and property visits
//                 </p>
//               </div>
//             </div>

//             <div className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-sm">
//               <div className="h-2 w-2 rounded-full bg-[#35C99A]" />
//               <div>
//                 <p className="text-[9px] font-medium uppercase tracking-wide text-[#AFC0CA]">
//                   Current View
//                 </p>
//                 <p className="text-xs font-semibold text-white">
//                   {activeSubTabItem?.label}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= NAVIGATION ================= */}
//         <div className="rounded-[18px] border border-[#DCE5E9] bg-white px-4 py-3 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
//           <div className="flex flex-wrap items-center gap-2">
//             {Object.keys(navigationData).map((key) => {
//               const isActive = activeTab === key;
//               const Icon = tabMeta[key]?.icon || LayoutDashboard;

//               return (
//                 <button
//                   key={key}
//                   type="button"
//                   onClick={() => handleMainTabChange(key)}
//                   className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
//                     isActive
//                       ? "bg-[#1F3C50] text-white shadow-sm"
//                       : "bg-[#F2F6F7] text-[#667B88] hover:bg-[#EAF9F4] hover:text-[#15966F]"
//                   }`}
//                 >
//                   <Icon size={15} />
//                   {navigationData[key].label}
//                 </button>
//               );
//             })}
//           </div>

//           {currentCategory.subTabs.length > 1 && (
//             <div className="mt-3 flex flex-wrap gap-2 border-t border-[#E7EDF0] pt-3">
//               {currentCategory.subTabs.map((subTab) => {
//                 const isSubActive = activeSubTab === subTab.id;

//                 return (
//                   <button
//                     key={subTab.id}
//                     type="button"
//                     onClick={() => handleSubTabChange(subTab.id)}
//                     className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
//                       isSubActive
//                         ? "border border-[#35C99A]/30 bg-[#EAF9F4] text-[#15966F]"
//                         : "bg-[#F4F7F8] text-[#7B8F9A] hover:bg-[#EEF3F5] hover:text-[#173247]"
//                     }`}
//                   >
//                     {subTab.label}
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* ================= CONTENT ================= */}
//         <div className="min-w-0 transition-all duration-300">
//           {activeComponent}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  UsersRound,
  UserRoundCheck,
  CalendarDays,
  ClipboardCheck,
  Network,
} from "lucide-react";
import PartnerManagement from "./PartnerManagement";
import PartnerApplications from "./PartnerApplication";
import TeamPartnerManagement from "./TeamPartnerManagement";
import PartnerAssignmentQueue from "./PartnerAssigned";
import VisitManagement from "./VisitManagement";

export default function PartnerDashboard() {
  const location = useLocation(),
    navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const requestedTab = params.get("tab") || "management";
  const requestedVisitId = params.get("visitId");
  const [active, setActive] = useState(requestedTab);
  useEffect(() => setActive(requestedTab), [requestedTab]);

  const navigation = {
    management: {
      label: "Partner Management",
      description: "Approved and verified partners only",
      icon: UsersRound,
      component: <PartnerManagement />,
    },
    applications: {
      label: "Partner Applications",
      description: "Review onboarding, KYC and approval",
      icon: ClipboardCheck,
      component: <PartnerApplications />,
    },
    teams: {
      label: "Team Partners",
      description: "Shared wallets, sub partners and allocations",
      icon: Network,
      component: <TeamPartnerManagement />,
    },
    assignment: {
      label: "Partner Assignment",
      description: "Assign verified partners to properties",
      icon: UserRoundCheck,
      component: <PartnerAssignmentQueue />,
    },
    visit: {
      label: "Visit Management",
      description: "Verified-partner visit operations",
      icon: CalendarDays,
      component: (
        <VisitManagement
          embedded
          initialVisitId={requestedVisitId}
          onEmbeddedDetailClose={() =>
            navigate("/partnerdashboard?tab=visit", { replace: true })
          }
        />
      ),
    },
  };
  const current = navigation[active] || navigation.management;
  const change = (key) => {
    setActive(key);
    navigate(`/partnerdashboard?tab=${key}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#F4F7F8] text-[#173247]">
      <div className="space-y-3 p-2 md:p-3">
        <div className="rounded-[20px] bg-[#1F3C50] px-5 py-5">
          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#35C99A]">
            Partner Section
          </p>
          <div className="mt-1 flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-2xl font-extrabold text-white">
                {current.label}
              </h1>
              <p className="mt-1 text-xs text-[#BDD0DA]">
                {current.description}
              </p>
            </div>
            <span className="w-fit rounded-full bg-[#35C99A] px-4 py-2 text-[10px] font-extrabold">
              Active: {current.label}
            </span>
          </div>
        </div>


        
        <div className="rounded-[18px] border border-[#E0E8EC] bg-white p-3">
          <div className="flex flex-wrap gap-2">
            {Object.entries(navigation).map(([key, item]) => {
              const Icon = item.icon;
              return (
                <button
                  key={key}
                  onClick={() => change(key)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-[10px] font-bold ${key === active ? "bg-[#005F56] text-white" : "bg-[#F4F7F8] text-[#6F838D] hover:bg-[#EAF9F4] hover:text-[#08745F]"}`}
                >
                  <Icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="min-w-0">{current.component}</div>
      </div>
    </div>
  );
}
