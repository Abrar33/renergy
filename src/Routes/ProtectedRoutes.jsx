import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, role, loading } = useContext(AuthContext);

  if (loading) return <div >Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (requiredRole && role !== requiredRole) return <Navigate to="/" />;
  
  return children;
};

export default ProtectedRoute;