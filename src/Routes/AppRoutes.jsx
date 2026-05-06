import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/landingPage";
import Login from "../pages/login/login";


import Dashboard from "../pages/admin/adminDashboard";

import SellerDashboard from "../pages/seller/Dashboard";
import Signup from "../pages/signup/signup";


import ProtectedRoute from "./ProtectedRoutes"; // Import the guard
// import NewClaim from "../component/landing/Claim";
const NewClaim=lazy(() => import("../component/landing/Claim"));
// import DashboardLayout from "../component/layout/DashboardLayout";
const DashboardLayout=lazy(() => import("../component/layout/DashboardLayout"));
// import AddProductWizard from "../component/common/admin/AddProduct";
const AddProductWizard=lazy(() => import("../component/common/admin/AddProduct"));
// import Staff from "../component/common/admin/Staff/Staff";
const Staff=lazy(() => import("../component/common/admin/Staff/Staff"));
import Loader from "../component/layout/loader";
import { lazy, Suspense } from "react";
import Sales from "../pages/admin/Sales/Sales";
import Inventory from "../pages/admin/Inventory/INventory";
import Claims from "../pages/admin/Claims/Claims";
import Settings from "../pages/Settings/setting";
import Products from "../pages/admin/Products/Product";
import ProductDetails from "../pages/admin/Products/ProductDetailPage";
import EditProductWizard from "../component/common/admin/EditProduct";

const AppRoutes = () => {
  
  return (
    <Suspense fallback={<Loader />}>
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
        <Route element={<EditProductWizard/>} path="/admin/edit-product/:id" />
        <Route path="staff" element={<Staff/>}/>
        <Route path="sales" element={<Sales/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="inventory" element={<Inventory/>}/>
        <Route path="claims" element={<Claims/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Route>
      
      <Route path="/seller/dashboard" element={
        <ProtectedRoute requiredRole="seller">
          <SellerDashboard />
        </ProtectedRoute>
      } />
    </Routes>
    </Suspense>
  );
};
export default AppRoutes;