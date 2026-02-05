import { Button } from "@/components/ui/button.jsx";
import LoginPage from "@/pages/auth/LoginPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

function App() {
  return (
    <>
      <Routes>
          <Route path='/auth/login' element={<LoginPage />}></Route>
          <Route path='/auth/register' element={<RegisterPage />}></Route>
          <Route path="/auth/forgot-password" element={<ForgotPasswordPage/>}></Route>
        <Route path="/">
          <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
