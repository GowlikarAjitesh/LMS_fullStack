// auth-context.jsx
import { createContext, useEffect, useState } from "react";
import axiosInstance from "@/api/axiosInstance";
import { Toaster } from "sonner";

const AuthContext = createContext(null);
export default AuthContext;

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) throw new Error();

        const res = await axiosInstance.get("/api/auth/check-auth");
        const userData = res.data.data;
        const userDetails = localStorage.getItem("userDetails");
        if(!userDetails){
          localStorage.setItem("userDetails", JSON.stringify(userData));
        }
        setIsAuth(true);
        setUserDetails(res.data.data);
      } catch {
        setIsAuth(false);
        setUserDetails(null);
        localStorage.clear();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, userDetails, setIsAuth, setUserDetails, loading }}
    >
      {loading ? <Toaster/> : children}
    </AuthContext.Provider>
  );
}
