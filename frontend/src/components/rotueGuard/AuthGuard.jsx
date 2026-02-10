// components/guards/AuthGuard.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthGuard = ({ isAuth }) => {
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
