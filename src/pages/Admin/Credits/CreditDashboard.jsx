import { useState } from 'react';
import Credit from './WalletCredits'
import Boost from './BoostPropertyPartnerDashboard'
import Featured from './FeaturedPromotionManagement';
import Locality from './LocalityTopPromotionManagement'
import CreditPlan from './CreditPricingManagement'
// Dynamic tabs configuration
const navigationData = {
  'CreditPlan': {
    label: 'Credit Pricing Management',
    subTabs: [
      { id: 'CreditPlan', label: 'Credit Pricing Management', component: <CreditPlan /> },
    ]
  },
  'credit': {
    label: 'Credit Management',
    subTabs: [
      { id: 'credit', label: 'Credit Management', component: <Credit /> },
    ]
  },
'boost': {
    label: 'Boost Management',
    subTabs: [
      { id: 'boost', label: 'Boost Management', component: <Boost /> },
    ]
  },
 'Featured': {
    label: 'Featured Management',
    subTabs: [
      { id: 'Featured', label: 'Featured Management', component: <Featured /> },
    ]
  },
  'Locality': {
    label: 'Locality Management',
    subTabs: [
      { id: 'Locality', label: 'Locality Management', component: <Locality /> },
    ]
  },
  

};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('credit');
  const [activeSubTab, setActiveSubTab] = useState('credit');

  const currentCategory = navigationData[activeTab];
  const activeSubTabItem = currentCategory.subTabs.find(st => st.id === activeSubTab) || currentCategory.subTabs[0];
  const activeComponent = activeSubTabItem?.component;

  return (
    <div className="min-h-screen  p-1 space-y-2 text-[#24413E]">
      {/* Top Header Card */}
      <div className="bg-white p-6 rounded-2xl flex justify-between items-center border border-slate-200/60 shadow-sm">
        <div>
          <h1 className="text-2xl font-extrabold text-[#005F56] mt-0.5">
            CREDIT SECTION
          </h1>
        </div>
        <div className="bg-[#005F56] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
          Active: {activeSubTabItem?.label}
        </div>
      </div>

      {/* Navigation Card */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
        {/* Main Category Tabs */}
        <div className="flex gap-2.5 pb-2">
          {Object.keys(navigationData).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setActiveSubTab(navigationData[key].subTabs[0].id);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#005F56] text-white shadow-md shadow-[#005F56]/20'
                    : 'bg-[#F4F4F5] text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                {navigationData[key].label}
              </button>
            );
          })}
        </div>

        {/* Sub Navigation Chips */}
        {currentCategory.subTabs.length > 1 && (
          <div className="flex gap-2 pt-1 border-t border-slate-100">
            {currentCategory.subTabs.map((subTab) => {
              const isSubActive = activeSubTab === subTab.id;
              return (
                <button
                  key={subTab.id}
                  onClick={() => setActiveSubTab(subTab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isSubActive
                      ? 'bg-[#E6F4F1] text-[#005F56] border border-[#005F56]/30'
                      : 'bg-[#F4F4F5] text-slate-500 hover:bg-slate-200/60 hover:text-slate-800'
                  }`}
                >
                  {subTab.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Dynamic Content Container */}
      <div className="transition-all duration-300">
        {activeComponent}
      </div>
    </div>
  );
}