import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Admin/Dashboard";
import AddProperty from "./pages/Admin/AddProperty";
import PropertyManagement from "./pages/Admin/PropertyManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route
          path="/property-management"
          element={<PropertyManagement />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;