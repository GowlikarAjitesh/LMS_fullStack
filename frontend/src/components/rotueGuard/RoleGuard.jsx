import InstructorLayoutPage from "@/pages/instructor/InstructorLayoutPage";
import Layout from "@/pages/Layout";

export default function RoleGuard({ isAuth, user }) {
  if (!isAuth) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user?.role === "instructor" || user?.role === "admin") {
    // Instructor/Admin → show instructor layout
    return <InstructorLayoutPage />;
  }

  // Default → student layout
  return <Layout />;
}