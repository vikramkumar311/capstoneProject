
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/loginform" replace />;
  }

  // If token exists, allow access
  return children;
}
