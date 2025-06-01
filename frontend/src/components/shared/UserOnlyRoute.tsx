import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Loader from "./Loader";

const UserOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;
  if (!user) return <Navigate to="/login" replace />;
  if (user.role === "admin") return <Navigate to="/" replace />;

  return children;
};

export default UserOnlyRoute;
