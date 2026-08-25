// import { useState } from 'react';
// import Leads from "./Leads"
// import LeadsManagment from "./LeadManagemnet"

// // Dynamic tabs configuration
// const navigationData = {
//   'promotions': {
//     label: 'Dashboard',
//     subTabs: [
//       { id: 'dashboard', label: 'Lead Management', component: <LeadsManagment /> },
//     ]
//   },
//   'leads': {
//     label: 'Leads Operation',
//     subTabs: [
//       { id: 'leads ', label: 'Lead Operation', component: <Leads /> },
//     ]
//   },
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
//             LEADS SECTION
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


import { useEffect, useMemo, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Leads from "./Leads";
import LeadManagement from "./LeadManagemnet";

export default function LeadDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const requestedTab = searchParams.get("tab");
  const requestedLeadId = searchParams.get("leadId");

  const getTabFromUrl = () => {
    if (requestedTab === "leads") {
      return "leads";
    }

    return "promotions";
  };

  const getSubTabFromUrl = () => {
    if (requestedTab === "leads") {
      return "leads";
    }

    return "dashboard";
  };

  const [activeTab, setActiveTab] = useState(getTabFromUrl);
  const [activeSubTab, setActiveSubTab] = useState(getSubTabFromUrl);

  useEffect(() => {
    setActiveTab(getTabFromUrl());
    setActiveSubTab(getSubTabFromUrl());
  }, [requestedTab]);

  const handleEmbeddedLeadClose = () => {
    navigate(
      "/leads-dashboard?tab=promotions",
      { replace: true }
    );
  };

  const navigationData = {
    promotions: {
      label: "Dashboard",
      subTabs: [
        {
          id: "dashboard",
          label: "Lead Management",
          component: (
            <LeadManagement
              embedded={true}
              initialLeadId={requestedLeadId}
              onEmbeddedDetailClose={handleEmbeddedLeadClose}
            />
          ),
        },
      ],
    },

    leads: {
      label: "Leads Operation",
      subTabs: [
        {
          // IMPORTANT: old code me "leads " tha.
          // Trailing space hata diya hai.
          id: "leads",
          label: "Lead Operation",
          component: <Leads />,
        },
      ],
    },
  };

  const currentCategory =
    navigationData[activeTab] ||
    navigationData.promotions;

  const activeSubTabItem =
    currentCategory.subTabs.find(
      (subTab) => subTab.id === activeSubTab
    ) || currentCategory.subTabs[0];

  const activeComponent =
    activeSubTabItem?.component;

  const handleMainTabChange = (key) => {
    const category = navigationData[key];

    if (!category) return;

    const firstSubTab = category.subTabs[0];

    setActiveTab(key);
    setActiveSubTab(firstSubTab.id);

    if (key === "leads") {
      navigate(
        "/leads-dashboard?tab=leads"
      );
      return;
    }

    navigate(
      "/leads-dashboard?tab=promotions"
    );
  };

  const handleSubTabChange = (subTabId) => {
    setActiveSubTab(subTabId);

    if (subTabId === "leads") {
      navigate(
        "/leads-dashboard?tab=leads"
      );
      return;
    }

    navigate(
      "/leads-dashboard?tab=promotions"
    );
  };

  return (
    <div className="min-h-screen p-1 space-y-2 text-[#24413E]">
      {/* TOP HEADER */}
      <div className="bg-white p-6 rounded-2xl flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center border border-slate-200/60 shadow-sm">
        <div>
          <h1 className="text-2xl font-extrabold text-[#005F56] mt-0.5">
            LEADS SECTION
          </h1>
        </div>

        <div className="w-fit bg-[#005F56] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
          Active: {activeSubTabItem?.label}
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
        <div className="flex flex-wrap gap-2.5 pb-2">
          {Object.keys(navigationData).map((key) => {
            const isActive = activeTab === key;

            return (
              <button
                type="button"
                key={key}
                onClick={() =>
                  handleMainTabChange(key)
                }
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#005F56] text-white shadow-md shadow-[#005F56]/20"
                    : "bg-[#F4F4F5] text-slate-600 hover:bg-slate-200/70"
                }`}
              >
                {navigationData[key].label}
              </button>
            );
          })}
        </div>

        {currentCategory.subTabs.length > 1 && (
          <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
            {currentCategory.subTabs.map((subTab) => {
              const isSubActive =
                activeSubTab === subTab.id;

              return (
                <button
                  type="button"
                  key={subTab.id}
                  onClick={() =>
                    handleSubTabChange(
                      subTab.id
                    )
                  }
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isSubActive
                      ? "bg-[#E6F4F1] text-[#005F56] border border-[#005F56]/30"
                      : "bg-[#F4F4F5] text-slate-500 hover:bg-slate-200/60 hover:text-slate-800"
                  }`}
                >
                  {subTab.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* DYNAMIC CONTENT */}
      <div className="transition-all duration-300">
        {activeComponent}
      </div>
    </div>
  );
}
