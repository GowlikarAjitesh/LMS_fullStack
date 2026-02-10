import { Routes, Route } from "react-router-dom";
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

import { AuthContext } from "@/context/auth-context/index";

import Layout from "@/pages/Layout";
import NotFoundPage from "@/pages/NotFoundPage";

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
          <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        <Route element={<Layout />}>
        {/* Authenticated users */}
        <Route element={<AuthGuard isAuth={auth.isAuth} />}>
          <Route path="/" element={<Home />} />

          {/* Instructor only */}
          <Route element={<InstructorGuard user={auth.userDetails} />}>
            <Route path="/instructor" element={<h1>Instructor Dashboard</h1>} />
          </Route>
        </Route>


        <Route path="*" element={<NotFoundPage/>}/>

        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
