// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import Dashboard from "./pages/Admin/Dashboard";
// // import AddProperty from "./pages/Admin/Property/AddProperty";
// // import PropertyManagement from "./pages/Admin/Property/PropertyManagement";
// // import Login from "./layout/login";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import PropertyApproval from "./pages/Admin/Property/PropertyApproval";
// // import Buyers from "./pages/Admin/Buyer/Buyers";
// // import Leads from "./pages/Admin/Leads/Leads";
// // import Sellers from "./pages/Admin/Seller/SellersManagement";
// // import WalletCreditDashboard from "./pages/Admin/Credits/WalletCredits";
// // import UsersManagement from "./pages/Admin/UsersManagement";
// // import PartnerApplications from "./pages/Admin/Partner/PartnerApplication";
// // import PropertyCommandCenter from "./pages/Admin/Property/PropertyCommandCenter";
// // import PropertyVerificationCenter from "./pages/Admin/Property/PropertyVerification";
// // import PropertyAuditHistory from "./pages/Admin/Property/PropertyHistory";
// // import LeadManagementApp from "./pages/Admin/Leads/LeadManagemnet";
// // import PartnerAssignmentQueue from "./pages/Admin/Partner/PartnerAssigned";
// // import VisitManagement from "./pages/Admin/Partner/VisitManagement";
// // import PartnerManagement from "./pages/Admin/Partner/PartnerApplication";
// // import PartnerDashboard from "./pages/Admin/Partner/PartnerDashboard";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Login />} />

// //         <Route element={<ProtectedRoute />}>
// //           <Route path="/dashboard" element={<Dashboard />} />
// //           <Route path="/add-property" element={<AddProperty />} />
// //           <Route
// //             path="/property-management"
// //             element={<Dashboard initialTab="Property Management" />}
// //           />
// //           <Route
// //             path="/property-management/:id"
// //             element={<Dashboard initialTab="Property Management" />}
// //           />
// //           <Route path="/property-approval" element={<PropertyApproval />} />
// //           <Route path="/buyers" element={<Buyers />} />
// //           <Route path="/leads" element={<Leads />} />
// //           <Route path="/sellers" element={<Sellers />} />
// //           <Route path="/wallet-credits" element={<WalletCreditDashboard />} />
// //           <Route path="/user" element={<UsersManagement />} />
// //           <Route path="/partners" element={<PartnerApplications />} />
// //           <Route
// //             path="/property-commandcenter"
// //             element={<PropertyCommandCenter />}
// //           />
// //           <Route
// //             path="/property-verification"
// //             element={<PropertyVerificationCenter />}
// //           />
// //           <Route path="/property-history" element={<PropertyAuditHistory />} />
// //           <Route path="/lead-management" element={<LeadManagementApp />} />
// //           <Route
// //             path="/partner-assigment"
// //             element={<PartnerAssignmentQueue />}
// //           />
// //           <Route path="/visit-management" element={<VisitManagement />} />
// //           <Route path="/partner" element={<PartnerManagement />} />
// //           <Route path="/partnerdashboard" element={<PartnerDashboard />} />
// //         </Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;


// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Login from "./layout/login";
// import ProtectedRoute from "./components/ProtectedRoute";

// import AdminLayout from "./layout/AdminLayout";

// import Dashboard from "./pages/Admin/Dashboard";

// import AddProperty from "./pages/Admin/Property/AddProperty";

// import PropertyManagement from "./pages/Admin/Property/PropertyManagement";

// import PropertyApproval from "./pages/Admin/Property/PropertyApproval";

// import Buyers from "./pages/Admin/Buyer/Buyers";

// import Leads from "./pages/Admin/Leads/Leads";

// import Sellers from "./pages/Admin/Seller/SellersManagement";

// import WalletCreditDashboard from "./pages/Admin/Credits/WalletCredits";

// import UsersManagement from "./pages/Admin/UsersManagement";

// import PartnerApplications from "./pages/Admin/Partner/PartnerApplication";

// import PropertyCommandCenter from "./pages/Admin/Property/PropertyCommandCenter";

// import PropertyVerificationCenter from "./pages/Admin/Property/PropertyVerification";

// import PropertyAuditHistory from "./pages/Admin/Property/PropertyHistory";

// import LeadManagementApp from "./pages/Admin/Leads/LeadManagemnet";

// import PartnerAssignmentQueue from "./pages/Admin/Partner/PartnerAssigned";

// import VisitManagement from "./pages/Admin/Partner/VisitManagement";

// import PartnerManagement from "./pages/Admin/Partner/PartnerApplication";

// import PartnerDashboard from "./pages/Admin/Partner/PartnerDashboard";

// import CMSDashboard from "./pages/Admin/CMS/CMSDashboard";

// import BuyerDashboard from "./pages/Admin/Buyer/BuyerDashboard";

// import SellerDashboard from "./pages/Admin/Seller/SellerDahboard";

// import LeadDashboard from "./pages/Admin/Leads/LeadDashboard";

// import PropertyDashboard from "./pages/Admin/Property/PropertyDashboard";


// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         {/* LOGIN */}

//         <Route
//           path="/"
//           element={<Login />}
//         />

//         {/* PROTECTED */}

//         <Route
//           element={
//             <ProtectedRoute />
//           }
//         >

//           {/* ADMIN LAYOUT */}

//           <Route
//             element={
//               <AdminLayout />
//             }
//           >

//             <Route
//               path="/dashboard"
//               element={
//                 <Dashboard />
//               }
//             />

//             <Route
//               path="/property-management"
//               element={
//                 <PropertyManagement />
//               }
//             />

//             <Route
//               path="/property-management/:id"
//               element={
//                 <PropertyManagement />
//               }
//             />

//             <Route
//               path="/property-approval"
//               element={
//                 <PropertyApproval />
//               }
//             />

//             <Route
//               path="/add-property"
//               element={
//                 <AddProperty />
//               }
//             />

//             <Route
//               path="/cms"
//               element={
//                 <CMSDashboard />
//               }
//             />

//             <Route
//               path="/buyer-dashboard"
//               element={
//                 <BuyerDashboard />
//               }
//             />

//             <Route
//               path="/partnerdashboard"
//               element={
//                 <PartnerDashboard />
//               }
//             />

//             <Route
//               path="/seller-dashboard"
//               element={
//                 <SellerDashboard />
//               }
//             />

//             <Route
//               path="/leads-dashboard"
//               element={
//                 <LeadDashboard />
//               }
//             />

//             <Route
//               path="/property"
//               element={
//                 <PropertyDashboard />
//               }
//             />

//             <Route
//               path="/buyers"
//               element={
//                 <Buyers />
//               }
//             />

//             <Route
//               path="/leads"
//               element={
//                 <Leads />
//               }
//             />

//             <Route
//               path="/sellers"
//               element={
//                 <Sellers />
//               }
//             />

//             <Route
//               path="/wallet-credits"
//               element={
//                 <WalletCreditDashboard />
//               }
//             />

//             <Route
//               path="/user"
//               element={
//                 <UsersManagement />
//               }
//             />

//             <Route
//               path="/partners"
//               element={
//                 <PartnerApplications />
//               }
//             />

//             <Route
//               path="/property-commandcenter"
//               element={
//                 <PropertyCommandCenter />
//               }
//             />

//             <Route
//               path="/property-verification"
//               element={
//                 <PropertyVerificationCenter />
//               }
//             />

//             <Route
//               path="/property-history"
//               element={
//                 <PropertyAuditHistory />
//               }
//             />

//             <Route
//               path="/lead-management"
//               element={
//                 <LeadManagementApp />
//               }
//             />

//             <Route
//               path="/partner-assigment"
//               element={
//                 <PartnerAssignmentQueue />
//               }
//             />

//             <Route
//               path="/visit-management"
//               element={
//                 <VisitManagement />
//               }
//             />

//             <Route
//               path="/partner"
//               element={
//                 <PartnerManagement />
//               }
//             />

//           </Route>

//         </Route>

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./layout/login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layout/AdminLayout";

import Dashboard from "./pages/Admin/Dashboard";
import AddProperty from "./pages/Admin/Property/AddProperty";
import PropertyManagement from "./pages/Admin/Property/PropertyManagement";
import PropertyApproval from "./pages/Admin/Property/PropertyApproval";
import Buyers from "./pages/Admin/Buyer/Buyers";
import Leads from "./pages/Admin/Leads/Leads";
import Sellers from "./pages/Admin/Seller/SellersManagement";
import WalletCreditDashboard from "./pages/Admin/Credits/WalletCredits";
import UsersManagement from "./pages/Admin/UsersManagement";
import PartnerApplications from "./pages/Admin/Partner/PartnerApplication";
import PartnerManagement from "./pages/Admin/Partner/PartnerManagement";
import PropertyCommandCenter from "./pages/Admin/Property/PropertyCommandCenter";
import PropertyVerificationCenter from "./pages/Admin/Property/PropertyVerification";
import PropertyAuditHistory from "./pages/Admin/Property/PropertyHistory";
import LeadManagementApp from "./pages/Admin/Leads/LeadManagemnet";
import PartnerAssignmentQueue from "./pages/Admin/Partner/PartnerAssigned";
import VisitManagement from "./pages/Admin/Partner/VisitManagement";
import PartnerDashboard from "./pages/Admin/Partner/PartnerDashboard";
import CMSDashboard from "./pages/Admin/CMS/CMSDashboard";
import BuyerDashboard from "./pages/Admin/Buyer/BuyerDashboard";
import SellerDashboard from "./pages/Admin/Seller/SellerDahboard";
import LeadDashboard from "./pages/Admin/Leads/LeadDashboard";
import PropertyDashboard from "./pages/Admin/Property/PropertyDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/property-management" element={<PropertyManagement />} />
            <Route path="/property-management/:id" element={<PropertyManagement />} />
            <Route path="/property-approval" element={<PropertyApproval />} />
            <Route path="/add-property" element={<AddProperty />} />

            <Route path="/cms" element={<CMSDashboard />} />
            <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
            <Route path="/partnerdashboard" element={<PartnerDashboard />} />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            <Route path="/leads-dashboard" element={<LeadDashboard />} />
            <Route path="/property" element={<PropertyDashboard />} />

            <Route path="/buyers" element={<Buyers />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/wallet-credits" element={<WalletCreditDashboard />} />
            <Route path="/user" element={<UsersManagement />} />

            <Route path="/partner-applications" element={<PartnerApplications />} />

            <Route path="/partners" element={<PartnerManagement />} />
            <Route path="/partners/:id" element={<PartnerManagement />} />

            <Route path="/property-commandcenter" element={<PropertyCommandCenter />} />
            <Route path="/property-verification" element={<PropertyVerificationCenter />} />
            <Route path="/property-history" element={<PropertyAuditHistory />} />
            <Route path="/lead-management" element={<LeadManagementApp />} />
            <Route path="/partner-assigment" element={<PartnerAssignmentQueue />} />

            <Route path="/visit-management" element={<VisitManagement />} />
            <Route path="/visit-management/:id" element={<VisitManagement />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
