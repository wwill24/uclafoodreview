import Navbar from "./frontend/components/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="main">
          {children}
        </div>
      </body>
    </html>
  );
}
