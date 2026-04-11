import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/landingPage";
import Login from "../pages/login/login";


import Dashboard from "../pages/admin/adminDashboard";

import SellerDashboard from "../pages/seller/Dashboard";
import Signup from "../pages/signup/signup";


import ProtectedRoute from "./ProtectedRoutes"; // Import the guard
import NewClaim from "../component/landing/Claim";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/new-claim" element={<NewClaim />} />
      {/* Protected Admin Route */}
      <Route path="/admin/dashboard" element={
        <ProtectedRoute requiredRole="admin">
          <Dashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/seller/dashboard" element={
        <ProtectedRoute requiredRole="seller">
          <SellerDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
};
export default AppRoutes;