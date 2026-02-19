// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden w-full max-w-full">
      <Header />
      <main className="grow w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}