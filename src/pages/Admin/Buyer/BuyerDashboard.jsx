// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import Buyers from "./Buyers";
// import BuyerDetail from "./BuyerDetail";

// const navigationData = {
//   promotions: {
//     label: "Dashboard",
//     subTabs: [
//       {
//         id: "home-banner",
//         label: "Buyer Management",
//       },
//     ],
//   },
// };

// export default function BuyerDashboard() {
//   const navigate = useNavigate();
//   const { buyerId } = useParams();

//   const [activeTab, setActiveTab] = useState("promotions");
//   const [activeSubTab, setActiveSubTab] = useState("home-banner");

//   const currentCategory = navigationData[activeTab];

//   const activeSubTabItem =
//     currentCategory?.subTabs.find(
//       (subTab) => subTab.id === activeSubTab
//     ) || currentCategory?.subTabs?.[0];

//   const isBuyerDetail = Boolean(buyerId);

//   const goToBuyerManagement = () => {
//     setActiveTab("promotions");
//     setActiveSubTab("home-banner");
//     navigate("/buyer-dashboard");
//   };

//   return (
//     <div className="min-h-screen p-1 space-y-2 text-[#24413E]">
//       {/* ======================================================
//           TOP HEADER CARD
//       ====================================================== */}
//       <div className="bg-white p-6 rounded-2xl flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center border border-slate-200/60 shadow-sm">
//         <div>
//           <h1 className="text-2xl font-extrabold text-[#005F56] mt-0.5">
//             BUYERS SECTION
//           </h1>
//         </div>

//         <div className="w-fit bg-[#005F56] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
//           Active:{" "}
//           {isBuyerDetail
//             ? "Buyer Details"
//             : activeSubTabItem?.label || "Buyer Management"}
//         </div>
//       </div>

//       {/* ======================================================
//           NAVIGATION CARD
//       ====================================================== */}
//       <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
//         {/* MAIN CATEGORY TABS */}
//         <div className="flex flex-wrap gap-2.5 pb-2">
//           {Object.keys(navigationData).map((key) => {
//             const isActive = activeTab === key;

//             return (
//               <button
//                 key={key}
//                 onClick={() => {
//                   setActiveTab(key);
//                   setActiveSubTab(navigationData[key].subTabs[0].id);
//                   navigate("/buyer-dashboard");
//                 }}
//                 className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
//                   isActive
//                     ? "bg-[#005F56] text-white shadow-md shadow-[#005F56]/20"
//                     : "bg-[#F4F4F5] text-slate-600 hover:bg-slate-200/70"
//                 }`}
//               >
//                 {navigationData[key].label}
//               </button>
//             );
//           })}
//         </div>

//         {/* SUB NAVIGATION CHIPS */}
//         {currentCategory?.subTabs?.length > 1 && (
//           <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
//             {currentCategory.subTabs.map((subTab) => {
//               const isSubActive = activeSubTab === subTab.id;

//               return (
//                 <button
//                   key={subTab.id}
//                   onClick={() => {
//                     setActiveSubTab(subTab.id);
//                     navigate("/buyer-dashboard");
//                   }}
//                   className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
//                     isSubActive
//                       ? "bg-[#E6F4F1] text-[#005F56] border border-[#005F56]/30"
//                       : "bg-[#F4F4F5] text-slate-500 hover:bg-slate-200/60 hover:text-slate-800"
//                   }`}
//                 >
//                   {subTab.label}
//                 </button>
//               );
//             })}
//           </div>
//         )}

//         {/* DETAIL BREADCRUMB */}
//         {isBuyerDetail && (
//           <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
//             <button
//               type="button"
//               onClick={goToBuyerManagement}
//               className="text-xs font-semibold text-[#005F56] hover:underline"
//             >
//               Buyer Management
//             </button>

//             <span className="text-slate-300">/</span>

//             <span className="text-xs font-semibold text-slate-500">
//               Buyer Details
//             </span>
//           </div>
//         )}
//       </div>

//       {/* ======================================================
//           DYNAMIC CONTENT
//       ====================================================== */}
//       <div className="transition-all duration-300">
//         {isBuyerDetail ? <BuyerDetail /> : <Buyers />}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LayoutDashboard, Users, ChevronRight, UserRound } from "lucide-react";

import Buyers from "./Buyers";
import BuyerDetail from "./BuyerDetail";

const navigationData = {
  promotions: {
    label: "Dashboard",
    icon: LayoutDashboard,
    subTabs: [
      {
        id: "home-banner",
        // label: "Buyer Management",
      },
    ],
  },
};

export default function BuyerDashboard() {
  const navigate = useNavigate();
  const { buyerId } = useParams();

  const [activeTab, setActiveTab] = useState("promotions");
  const [activeSubTab, setActiveSubTab] = useState("home-banner");

  const currentCategory = navigationData[activeTab];

  const activeSubTabItem =
    currentCategory?.subTabs.find((subTab) => subTab.id === activeSubTab) ||
    currentCategory?.subTabs?.[0];

  const isBuyerDetail = Boolean(buyerId);

  const goToBuyerManagement = () => {
    setActiveTab("promotions");
    setActiveSubTab("home-banner");
    navigate("/buyer-dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F4F7F8] text-[#173247]">
      <div className="space-y-3 p-2 md:p-3">
        {/* ================= HEADER ================= */}
        <div className="relative overflow-hidden rounded-[20px] bg-[#1F3C50] px-5 py-5 shadow-sm md:px-7">
          <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#35C99A]/10" />
          <div className="pointer-events-none absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-white/5" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#35C99A] text-white shadow-sm">
                <Users size={21} strokeWidth={2.2} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9FB3C0]">
                  DigiNiwas Admin
                </p>

                <h1 className="mt-0.5 text-xl font-bold tracking-tight text-white md:text-2xl">
                  Buyer Management
                </h1>

                <p className="mt-1 text-xs text-[#C3D0D8]">
                  Manage buyers, enquiries, visits and property interactions
                </p>
              </div>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-[#35C99A]" />

              <div>
                <p className="text-[9px] font-medium uppercase tracking-wide text-[#AFC0CA]">
                  Current View
                </p>

                <p className="text-xs font-semibold text-white">
                  {isBuyerDetail
                    ? "Buyer Details"
                    : activeSubTabItem?.label || "Buyer Management"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="rounded-[18px] border border-[#DCE5E9] bg-white px-4 py-3 shadow-[0_4px_18px_rgba(15,47,69,0.04)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {Object.entries(navigationData).map(([key, item]) => {
                const isActive = activeTab === key;
                const Icon = item.icon;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setActiveTab(key);
                      setActiveSubTab(item.subTabs[0].id);
                      navigate("/buyer-dashboard");
                    }}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#1F3C50] text-white shadow-sm"
                        : "bg-[#F2F6F7] text-[#667B88] hover:bg-[#EAF9F4] hover:text-[#15966F]"
                    }`}
                  >
                    <Icon size={15} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {isBuyerDetail && (
              <div className="flex items-center gap-1.5 rounded-lg bg-[#F4F7F8] px-3 py-2">
                <button
                  type="button"
                  onClick={goToBuyerManagement}
                  className="text-[11px] font-semibold text-[#15966F] transition hover:text-[#117657]"
                >
                  Buyers
                </button>

                <ChevronRight size={12} className="text-[#A7B5BD]" />

                <span className="flex items-center gap-1 text-[11px] font-semibold text-[#526A78]">
                  <UserRound size={12} />
                  Details
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="min-w-0">
          {isBuyerDetail ? <BuyerDetail /> : <Buyers />}
        </div>
      </div>
    </div>
  );
}
