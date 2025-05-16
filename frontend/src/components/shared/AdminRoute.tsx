import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Loader from "./Loader";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;
  if (!user || user.role !== "admin") return <Navigate to="/" replace />;

  return children;
};

export default AdminRoute;
