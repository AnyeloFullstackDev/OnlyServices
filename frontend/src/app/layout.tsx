'use client'
import { ReactNode, useEffect } from "react";
import Header from "@/components/globalLayout/header/Header";
import Footer from "@/components/globalLayout/footer/Footer";
import MetaTags from "@/components/meta/MetaTags";
import { useAuthStore } from "@/store/auth/Login"; // Importa el store de Zustand
import "./globals.css";
import 'animate.css';


export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <MetaTags />
      <html lang="en">
        <body>
          {/* Pasa el estado isAuthenticated como prop al Header */}
          <Header />
          <div className="flex h-auto">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
