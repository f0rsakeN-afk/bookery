import { useAuth } from "@/context/AuthContext";
import Loader from "./Loader";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Loader />;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
