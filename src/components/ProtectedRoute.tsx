import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: {children: ReactNode}) {
 const { isAuthenticated } = useAuth(); 

 //If not logged in, redirect the browser to the login
 if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the protected component
  return <>{children}</>;
}