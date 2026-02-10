// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}