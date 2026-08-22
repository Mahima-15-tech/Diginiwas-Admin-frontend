// import { useState } from 'react';
// import Seller from "./SellersManagement"
// import SellerControlTower from './SellerProperty';

// // Dynamic tabs configuration
// const navigationData = {
//   'promotions': {
//     label: 'Dashboard',
//     subTabs: [
//       { id: 'dashboard', label: 'Seller Management', component: <Seller /> },
//     ]
//   },
//   // 'seller': {
//   //   label: 'Seller Control Tower',
//   //   subTabs: [
//   //     { id: 'seller', label: 'Seller Control Tower', component: <SellerControlTower /> },
//   //   ]
//   // },
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
//             SELLERS SECTION
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

import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Seller from "./SellersManagement";
import SellerControlTower from "./SellerProperty";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const requestedTab = params.get("tab");
  const requestedSellerId = params.get("sellerId");

  const [activeTab, setActiveTab] = useState(
    requestedTab === "property"
      ? "property"
      : "promotions"
  );

  const [activeSubTab, setActiveSubTab] = useState(
    requestedTab === "property"
      ? "property"
      : "dashboard"
  );

  useEffect(() => {
    if (requestedTab === "property") {
      setActiveTab("property");
      setActiveSubTab("property");
      return;
    }

    setActiveTab("promotions");
    setActiveSubTab("dashboard");
  }, [requestedTab]);

  const navigationData = {
    promotions: {
      label: "Dashboard",
      subTabs: [
        {
          id: "dashboard",
          label: "Seller Management",
          component: (
            <Seller
              embedded={true}
              initialSellerId={requestedSellerId}
              onEmbeddedDetailClose={() => {
                navigate(
                  "/seller-dashboard?tab=dashboard",
                  { replace: true }
                );
              }}
            />
          ),
        },
      ],
    },

    // property: {
    //   label: "Property Control Tower",
    //   subTabs: [
    //     {
    //       id: "property",
    //       label: "Property Control Tower",
    //       component: <SellerControlTower />,
    //     },
    //   ],
    // },
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

  const handleTab = (key) => {
    const subTab =
      navigationData[key].subTabs[0];

    setActiveTab(key);
    setActiveSubTab(subTab.id);

    navigate(
      key === "property"
        ? "/seller-dashboard?tab=property"
        : "/seller-dashboard?tab=dashboard",
      { replace: true }
    );
  };

  return (
    <div className="min-h-screen space-y-2 p-1 text-[#24413E]">
      <div className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-extrabold text-[#005F56]">
          SELLERS SECTION
        </h1>

        <div className="rounded-full bg-[#005F56] px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm">
          Active: {activeSubTabItem?.label}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap gap-2.5">
          {Object.keys(navigationData).map((key) => {
            const isActive =
              activeTab === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => handleTab(key)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition ${
                  isActive
                    ? "bg-[#005F56] text-white shadow-md"
                    : "bg-[#F4F4F5] text-slate-600 hover:bg-slate-200/70"
                }`}
              >
                {navigationData[key].label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="transition-all duration-300">
        {activeComponent}
      </div>
    </div>
  );
}