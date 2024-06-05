import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from './Header'
import { Project } from './components/Project'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Stop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header/>
        {children}
        <br/>
        <Project/>
        </body>
    </html>
  );
}
