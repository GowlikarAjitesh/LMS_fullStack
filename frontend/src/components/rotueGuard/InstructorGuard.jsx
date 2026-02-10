// components/guards/InstructorGuard.jsx
import { Navigate, Outlet } from "react-router-dom";

const InstructorGuard = ({ user }) => {
  // if (user?.role !== "instructor") {
  //   return <Navigate to="/" replace />;
  // }
  if (user?.role !== "instructor" && user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default InstructorGuard;
