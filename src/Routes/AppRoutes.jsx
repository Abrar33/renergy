import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/landingPage";
import Login from "../pages/login/login";


import Dashboard from "../pages/admin/adminDashboard";

import SellerDashboard from "../pages/seller/Dashboard";
import Signup from "../pages/signup/signup";


import ProtectedRoute from "./ProtectedRoutes"; // Import the guard
import NewClaim from "../component/landing/Claim";
import DashboardLayout from "../component/layout/DashboardLayout";

import AddProductWizard from "../component/common/admin/AddProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/new-claim" element={<NewClaim />} />
      {/* Protected Admin Route */}
    <Route path="/admin" element={
        <ProtectedRoute requiredRole="admin">
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-product" element={<AddProductWizard />} />
      </Route>
      
      <Route path="/seller/dashboard" element={
        <ProtectedRoute requiredRole="seller">
          <SellerDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
};
export default AppRoutes;