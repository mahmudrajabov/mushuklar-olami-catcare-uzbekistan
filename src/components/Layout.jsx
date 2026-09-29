import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import ReadingProgress from "@/components/ReadingProgress";
import { getStoredTheme, applyTheme } from "@/lib/storage";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    applyTheme(getStoredTheme());
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ReadingProgress />
      <Navbar />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
}