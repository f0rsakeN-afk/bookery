import axiosInstance from "@/services/axios";
import { dataProps } from "@/types/auth";
import { useContext, createContext, useEffect, useState } from "react";

interface AuthContextType {
  user: dataProps | null;
  setUser: React.Dispatch<React.SetStateAction<dataProps | null>>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<dataProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUser = async () => {
    try {
      const res = await axiosInstance.get("users/me", {
        withCredentials: true,
      });
      setUser(res.data.data);
    } catch (error) {
      /*      console.log(error) */
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const logout = async () => {};

  return (
    <AuthContext.Provider value={{ user, logout, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
