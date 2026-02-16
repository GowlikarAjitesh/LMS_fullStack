import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "@/pages/student/StudentLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";

import AuthGuard from "@/components/rotueGuard/AuthGuard";
import GuestGuard from "@/components/rotueGuard/GuestGuard";
import InstructorGuard from "@/components/rotueGuard/InstructorGuard";

import AuthContext from "@/context/auth-context/index";

import Layout from "@/pages/Layout";
import NotFoundPage from "@/pages/NotFoundPage";
import InstructorLayoutPage from "./pages/instructor/InstructorLayoutPage";
import AddNewCoursePage from "./pages/instructor/AddNewCoursePage";
import InstructorDashboard from "./pages/instructor/components/dashboard/InstructorDashboard";
import InstructorCourses from "./pages/instructor/components/courses/InstructorCourses";
function App() {
  const auth = useContext(AuthContext);
  // If loading, show a spinner (important so guards don't redirect prematurely)
  if (auth.loading) return <div>Loading...</div>;
  return (
    <>
      <Routes>
        {/*Guest only */}
        <Route element={<GuestGuard isAuth={auth.isAuth} />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPasswordPage />}
          />
        </Route>

        <Route element={<Layout />}>
          {/* Authenticated users */}
          <Route
            element={<AuthGuard isAuth={auth.isAuth} user={auth.userDetails} />}
          >
            <Route path="/" element={<Home />} />
            {/* Instructor only */}
            <Route
              element={
                <InstructorGuard isAuth={auth.isAuth} user={auth.userDetails} />
              }
            >
              <Route path="/" element={<Navigate to="/instructor" replace />} />
              <Route path="/instructor" element={<InstructorLayoutPage />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<InstructorDashboard />} />
                <Route path="courses" element={<InstructorCourses />} />
                <Route path="newCourse" element={<AddNewCoursePage />} />
                <Route path="editCourse/:id" element={<AddNewCoursePage />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
