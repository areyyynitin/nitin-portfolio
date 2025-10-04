import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nitin Prajapat",
  description: "Nitin Prajapat's personal portfolio website showcasing projects, skills, and contact information.",
 
  
  // icon: [
  //   { url: "/svg/me.jpeg", sizes: "32x32", type: "image/jpeg" },
  //   { url: "/svg/me.jpeg", sizes: "16x16", type: "image/jpeg" },
  //   // icon: "/svg/me.jpeg",
  //   ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svg/nitin.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
