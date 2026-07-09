// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Admin/Dashboard";
// import AddProperty from "./pages/Admin/AddProperty";
// import PropertyManagement from "./pages/Admin/PropertyManagement";
// import Login from "./layout/login";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//          <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-property" element={<AddProperty />} />
//         <Route
//           path="/property-management"
//           element={<PropertyManagement />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Admin/Dashboard";
import AddProperty from "./pages/Admin/AddProperty";
import PropertyManagement from "./pages/Admin/PropertyManagement";
import Login from "./layout/login";
import ProtectedRoute from "./components/ProtectedRoute"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/property-management" element={<PropertyManagement />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;