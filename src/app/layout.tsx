'use client';

import React, { Suspense, useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import "./globals.css";


function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch('http://localhost:8080/check-login', {
          method: 'GET',
          credentials: 'include',
        });
        const isLoggedIn = await response.json();
        setIsLoggedIn(isLoggedIn);
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLogin();
  }, []);

  return <Navbar isLoggedIn={isLoggedIn} />;
}

function LoadingFallback() {
  return <div>Loading</div>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<LoadingFallback />}>
          <LoginStatus />
          <div className="main">
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  );
}
