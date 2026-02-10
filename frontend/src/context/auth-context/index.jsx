// src/context/auth-context.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const token = localStorage.getItem("Bearer");
    const savedUser = localStorage.getItem("userDetails");
    
    if (token && savedUser) {
      setIsAuth(true);
      setUserDetails(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  return (
    // Note: Use .Provider unless you are on React 19 (which supports direct Context)
    <AuthContext.Provider value={{ isAuth, setIsAuth, userDetails, setUserDetails, loading }}>
      {!loading && children} 
    </AuthContext.Provider>
  );
}