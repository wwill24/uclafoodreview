'use client'

import Navbar from "../../frontend/components/Navbar";
import "./globals.css";

import { useState, useEffect } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
  }, [isLoggedIn, isLoading]);

  return (
    <html lang="en">
      <body>
        {isLoading ? "Loading" : 
          <div>
            <Navbar isLoggedIn={isLoggedIn} />
            <div className="main">
              {children}
            </div>
          </div>     
        }
      </body>
    </html>
  );
}
