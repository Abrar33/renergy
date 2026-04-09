import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/landingPage";
import Login from "../pages/login/login";


import Dashboard from "../pages/admin/adminDashboard";

import SellerDashboard from "../pages/seller/Dashboard";
import Signup from "../pages/signup/signup";
import WarrantyTracker from "../pages/WarrentyTracker";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
<Route path="/warrenty" element={<WarrantyTracker/>}/>

        {/* Admin */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* Seller */}
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
      </Routes>
    
  );
};

export default AppRoutes;