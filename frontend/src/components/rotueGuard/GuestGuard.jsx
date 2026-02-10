// components/guards/GuestGuard.jsx
import { Navigate, Outlet } from "react-router-dom";

const GuestGuard = ({ isAuth }) => {
  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default GuestGuard;
