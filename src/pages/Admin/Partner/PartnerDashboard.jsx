// import { useState } from 'react';
// import Partner from "./PartnerManagement";
// import PartnerAssignmentQueue from './PartnerAssigned';
// import PartnerApplications from './PartnerApplication';
// import VisitManagement from './VisitManagement';
// // Dynamic tabs configuration
// const navigationData = {
//   'promotions': {
//     label: 'Dashboard',
//     subTabs: [
//       { id: 'dashboard', label: 'Partner Management', component: <Partner /> },
//     ]
//   },
//   'assignment': {
//     label: 'Assignment',
//     subTabs: [
//       { id: 'assignment', label: 'Partner Assignment', component: <PartnerAssignmentQueue /> },
//     ]
//   },
//   // 'application': {
//   //   label: 'Application',
//   //   subTabs: [
//   //     { id: 'application', label: 'Partner Assignment', component: <PartnerApplications /> },
//   //   ]
//   // },
//   'visit': {
//   label: 'Visit Management',
//   subTabs: [
//     {
//       id: 'visit',
//       label: 'Visit Management',
//       component: (
//         <VisitManagement
//           embedded={true}
//         />
//       ),
//     },
//   ],
// },
// };

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState('promotions');
//   const [activeSubTab, setActiveSubTab] = useState('dashboard');

//   const currentCategory = navigationData[activeTab];
//   const activeSubTabItem = currentCategory.subTabs.find(st => st.id === activeSubTab) || currentCategory.subTabs[0];
//   const activeComponent = activeSubTabItem?.component;

//   return (
//     <div className="min-h-screen  p-1 space-y-2 text-[#24413E]">
//       {/* Top Header Card */}
//       <div className="bg-white p-6 rounded-2xl flex justify-between items-center border border-slate-200/60 shadow-sm">
//         <div>
//           <h1 className="text-2xl font-extrabold text-[#005F56] mt-0.5">
//             PARTNERS SECTION
//           </h1>
//         </div>
//         <div className="bg-[#005F56] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
//           Active: {activeSubTabItem?.label}
//         </div>
//       </div>

//       {/* Navigation Card */}
//       <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
//         {/* Main Category Tabs */}
//         <div className="flex gap-2.5 pb-2">
//           {Object.keys(navigationData).map((key) => {
//             const isActive = activeTab === key;
//             return (
//               <button
//                 key={key}
//                 onClick={() => {
//                   setActiveTab(key);
//                   setActiveSubTab(navigationData[key].subTabs[0].id);
//                 }}
//                 className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
//                   isActive
//                     ? 'bg-[#005F56] text-white shadow-md shadow-[#005F56]/20'
//                     : 'bg-[#F4F4F5] text-slate-600 hover:bg-slate-200/70'
//                 }`}
//               >
//                 {navigationData[key].label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Sub Navigation Chips */}
//         {currentCategory.subTabs.length > 1 && (
//           <div className="flex gap-2 pt-1 border-t border-slate-100">
//             {currentCategory.subTabs.map((subTab) => {
//               const isSubActive = activeSubTab === subTab.id;
//               return (
//                 <button
//                   key={subTab.id}
//                   onClick={() => setActiveSubTab(subTab.id)}
//                   className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
//                     isSubActive
//                       ? 'bg-[#E6F4F1] text-[#005F56] border border-[#005F56]/30'
//                       : 'bg-[#F4F4F5] text-slate-500 hover:bg-slate-200/60 hover:text-slate-800'
//                   }`}
//                 >
//                   {subTab.label}
//                 </button>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* Dynamic Content Container */}
//       <div className="transition-all duration-300">
//         {activeComponent}
//       </div>
//     </div>
//   );
// }


// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

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
//             <Partner />
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

//   return (
//     <div
//       className="
//         min-h-screen
//         space-y-2
//         p-1
//         text-[#24413E]
//       "
//     >
//       {/* ==========================================
//           TOP HEADER
//       ========================================== */}

//       <div
//         className="
//           flex
//           items-center
//           justify-between
//           rounded-2xl
//           border
//           border-slate-200/60
//           bg-white
//           p-6
//           shadow-sm
//         "
//       >
//         <div>
//           <h1
//             className="
//               mt-0.5
//               text-2xl
//               font-extrabold
//               text-[#005F56]
//             "
//           >
//             PARTNERS SECTION
//           </h1>
//         </div>

//         <div
//           className="
//             rounded-full
//             bg-[#005F56]
//             px-4
//             py-1.5
//             text-xs
//             font-semibold
//             tracking-wide
//             text-white
//             shadow-sm
//           "
//         >
//           Active:{" "}
//           {
//             activeSubTabItem
//               ?.label
//           }
//         </div>
//       </div>

//       {/* ==========================================
//           NAVIGATION CARD
//       ========================================== */}

//       <div
//         className="
//           space-y-4
//           rounded-2xl
//           border
//           border-slate-200/60
//           bg-white
//           p-5
//           shadow-sm
//         "
//       >
//         {/* MAIN TABS */}

//         <div
//           className="
//             flex
//             flex-wrap
//             gap-2.5
//             pb-2
//           "
//         >
//           {Object.keys(
//             navigationData
//           ).map(
//             (key) => {
//               const isActive =
//                 activeTab ===
//                 key;

//               return (
//                 <button
//                   key={
//                     key
//                   }

//                   type="button"

//                   onClick={() =>
//                     handleMainTabChange(
//                       key
//                     )
//                   }

//                   className={`
//                     rounded-xl
//                     px-5
//                     py-2.5
//                     text-xs
//                     font-bold
//                     transition-all
//                     duration-200

//                     ${
//                       isActive
//                         ? `
//                           bg-[#005F56]
//                           text-white
//                           shadow-md
//                           shadow-[#005F56]/20
//                         `
//                         : `
//                           bg-[#F4F4F5]
//                           text-slate-600
//                           hover:bg-slate-200/70
//                         `
//                     }
//                   `}
//                 >
//                   {
//                     navigationData[
//                       key
//                     ].label
//                   }
//                 </button>
//               );
//             }
//           )}
//         </div>

//         {/* SUB TABS */}

//         {currentCategory
//           .subTabs
//           .length >
//           1 && (
//           <div
//             className="
//               flex
//               flex-wrap
//               gap-2
//               border-t
//               border-slate-100
//               pt-3
//             "
//           >
//             {currentCategory
//               .subTabs
//               .map(
//                 (
//                   subTab
//                 ) => {
//                   const isSubActive =
//                     activeSubTab ===
//                     subTab.id;

//                   return (
//                     <button
//                       key={
//                         subTab.id
//                       }

//                       type="button"

//                       onClick={() =>
//                         handleSubTabChange(
//                           subTab.id
//                         )
//                       }

//                       className={`
//                         rounded-xl
//                         px-4
//                         py-2
//                         text-xs
//                         font-semibold
//                         transition-all
//                         duration-200

//                         ${
//                           isSubActive
//                             ? `
//                               border
//                               border-[#005F56]/30
//                               bg-[#E6F4F1]
//                               text-[#005F56]
//                             `
//                             : `
//                               bg-[#F4F4F5]
//                               text-slate-500
//                               hover:bg-slate-200/60
//                               hover:text-slate-800
//                             `
//                         }
//                       `}
//                     >
//                       {
//                         subTab.label
//                       }
//                     </button>
//                   );
//                 }
//               )}
//           </div>
//         )}
//       </div>

//       {/* ==========================================
//           DYNAMIC CONTENT
//       ========================================== */}

//       <div
//         className="
//           transition-all
//           duration-300
//         "
//       >
//         {
//           activeComponent
//         }
//       </div>
//     </div>
//   );
// }

import {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Partner from "./PartnerManagement";

import PartnerAssignmentQueue from "./PartnerAssigned";

import VisitManagement from "./VisitManagement";

export default function Dashboard() {
  const location =
    useLocation();

  const navigate =
    useNavigate();

  // ======================================================
  // URL QUERY
  // Example:
  // /partnerdashboard?tab=visit&visitId=xxxx
  // ======================================================

  const searchParams =
    new URLSearchParams(
      location.search
    );

  const requestedTab =
    searchParams.get(
      "tab"
    );

  const requestedVisitId =
    searchParams.get(
      "visitId"
    );

  const requestedPartnerId =
    searchParams.get(
      "partnerId"
    );

  // ======================================================
  // INITIAL TAB
  // ======================================================

  const getInitialTab = () => {
    if (
      requestedTab ===
      "visit"
    ) {
      return "visit";
    }

    if (
      requestedTab ===
      "assignment"
    ) {
      return "assignment";
    }

    return "promotions";
  };

  const getInitialSubTab =
    () => {
      if (
        requestedTab ===
        "visit"
      ) {
        return "visit";
      }

      if (
        requestedTab ===
        "assignment"
      ) {
        return "assignment";
      }

      return "dashboard";
    };

  const [
    activeTab,
    setActiveTab,
  ] = useState(
    getInitialTab
  );

  const [
    activeSubTab,
    setActiveSubTab,
  ] = useState(
    getInitialSubTab
  );

  // ======================================================
  // URL → ACTIVE TAB SYNC
  // ======================================================

  useEffect(() => {
    if (
      requestedTab ===
      "visit"
    ) {
      setActiveTab(
        "visit"
      );

      setActiveSubTab(
        "visit"
      );

      return;
    }

    if (
      requestedTab ===
      "assignment"
    ) {
      setActiveTab(
        "assignment"
      );

      setActiveSubTab(
        "assignment"
      );

      return;
    }

    if (
      requestedTab ===
      "dashboard"
    ) {
      setActiveTab(
        "promotions"
      );

      setActiveSubTab(
        "dashboard"
      );
    }
  }, [
    requestedTab,
  ]);

  // ======================================================
  // VISIT DRAWER CLOSE
  // ======================================================

  const handleEmbeddedVisitClose =
    () => {
      navigate(
        "/partnerdashboard?tab=visit",
        {
          replace: true,
        }
      );
    };

  // ======================================================
  // DYNAMIC NAVIGATION DATA
  // IMPORTANT:
  // component ko Dashboard ke andar rakha hai
  // because requestedVisitId dynamic hai.
  // ======================================================

  const navigationData = {
    promotions: {
      label:
        "Dashboard",

      subTabs: [
        {
          id: "dashboard",

          label:
            "Partner Management",

          component: (
            <Partner
              embedded={true}
              initialPartnerId={requestedPartnerId}
              onEmbeddedDetailClose={() => {
                navigate(
                  "/partnerdashboard?tab=dashboard",
                  { replace: true }
                );
              }}
            />
          ),
        },
      ],
    },

    assignment: {
      label:
        "Assignment",

      subTabs: [
        {
          id: "assignment",

          label:
            "Partner Assignment",

          component: (
            <PartnerAssignmentQueue />
          ),
        },
      ],
    },

    visit: {
      label:
        "Visit Management",

      subTabs: [
        {
          id: "visit",

          label:
            "Visit Management",

          component: (
            <VisitManagement
              embedded={
                true
              }

              initialVisitId={
                requestedVisitId
              }

              onEmbeddedDetailClose={
                handleEmbeddedVisitClose
              }
            />
          ),
        },
      ],
    },
  };

  // ======================================================
  // CURRENT CATEGORY
  // ======================================================

  const currentCategory =
    navigationData[
      activeTab
    ] ||
    navigationData
      .promotions;

  const activeSubTabItem =
    currentCategory
      .subTabs
      .find(
        (subTab) =>
          subTab.id ===
          activeSubTab
      ) ||
    currentCategory
      .subTabs[0];

  const activeComponent =
    activeSubTabItem
      ?.component;

  // ======================================================
  // MAIN TAB CHANGE
  // ======================================================

  const handleMainTabChange =
    (key) => {
      const category =
        navigationData[key];

      if (!category) {
        return;
      }

      const firstSubTab =
        category
          .subTabs[0];

      setActiveTab(
        key
      );

      setActiveSubTab(
        firstSubTab.id
      );

      // URL bhi sync karo
      if (
        key ===
        "visit"
      ) {
        navigate(
          "/partnerdashboard?tab=visit",
          {
            replace: true,
          }
        );

        return;
      }

      if (
        key ===
        "assignment"
      ) {
        navigate(
          "/partnerdashboard?tab=assignment",
          {
            replace: true,
          }
        );

        return;
      }

      navigate(
        "/partnerdashboard?tab=dashboard",
        {
          replace: true,
        }
      );
    };

  // ======================================================
  // SUB TAB CHANGE
  // ======================================================

  const handleSubTabChange =
    (subTabId) => {
      setActiveSubTab(
        subTabId
      );
    };

  return (
    <div
      className="
        min-h-screen
        space-y-2
        p-1
        text-[#24413E]
      "
    >
      {/* ==========================================
          TOP HEADER
      ========================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-slate-200/60
          bg-white
          p-6
          shadow-sm
        "
      >
        <div>
          <h1
            className="
              mt-0.5
              text-2xl
              font-extrabold
              text-[#005F56]
            "
          >
            PARTNERS SECTION
          </h1>
        </div>

        <div
          className="
            rounded-full
            bg-[#005F56]
            px-4
            py-1.5
            text-xs
            font-semibold
            tracking-wide
            text-white
            shadow-sm
          "
        >
          Active:{" "}
          {
            activeSubTabItem
              ?.label
          }
        </div>
      </div>

      {/* ==========================================
          NAVIGATION CARD
      ========================================== */}

      <div
        className="
          space-y-4
          rounded-2xl
          border
          border-slate-200/60
          bg-white
          p-5
          shadow-sm
        "
      >
        {/* MAIN TABS */}

        <div
          className="
            flex
            flex-wrap
            gap-2.5
            pb-2
          "
        >
          {Object.keys(
            navigationData
          ).map(
            (key) => {
              const isActive =
                activeTab ===
                key;

              return (
                <button
                  key={
                    key
                  }

                  type="button"

                  onClick={() =>
                    handleMainTabChange(
                      key
                    )
                  }

                  className={`
                    rounded-xl
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? `
                          bg-[#005F56]
                          text-white
                          shadow-md
                          shadow-[#005F56]/20
                        `
                        : `
                          bg-[#F4F4F5]
                          text-slate-600
                          hover:bg-slate-200/70
                        `
                    }
                  `}
                >
                  {
                    navigationData[
                      key
                    ].label
                  }
                </button>
              );
            }
          )}
        </div>

        {/* SUB TABS */}

        {currentCategory
          .subTabs
          .length >
          1 && (
          <div
            className="
              flex
              flex-wrap
              gap-2
              border-t
              border-slate-100
              pt-3
            "
          >
            {currentCategory
              .subTabs
              .map(
                (
                  subTab
                ) => {
                  const isSubActive =
                    activeSubTab ===
                    subTab.id;

                  return (
                    <button
                      key={
                        subTab.id
                      }

                      type="button"

                      onClick={() =>
                        handleSubTabChange(
                          subTab.id
                        )
                      }

                      className={`
                        rounded-xl
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        transition-all
                        duration-200

                        ${
                          isSubActive
                            ? `
                              border
                              border-[#005F56]/30
                              bg-[#E6F4F1]
                              text-[#005F56]
                            `
                            : `
                              bg-[#F4F4F5]
                              text-slate-500
                              hover:bg-slate-200/60
                              hover:text-slate-800
                            `
                        }
                      `}
                    >
                      {
                        subTab.label
                      }
                    </button>
                  );
                }
              )}
          </div>
        )}
      </div>

      {/* ==========================================
          DYNAMIC CONTENT
      ========================================== */}

      <div
        className="
          transition-all
          duration-300
        "
      >
        {
          activeComponent
        }
      </div>
    </div>
  );
}