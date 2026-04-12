import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token, loading } = useSelector((state) => state.auth);

  // 🔴 WAIT until auth loading finishes
  if (loading) {
    return (
      <div className="text-white flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  // 🔴 Check token from redux OR localStorage
  const authToken = token || JSON.parse(localStorage.getItem("token"));

  // ❌ If no token → redirect to login
  if (!authToken) {
    return <Navigate to="/login" replace />;
  }

  // ✅ If token exists → allow access
  return children ? children : <Outlet />;
};

export default PrivateRoute;
