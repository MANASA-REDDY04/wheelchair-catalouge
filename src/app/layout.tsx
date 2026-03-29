import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kubera Mobility Solutions | Medical Equipment & Wheelchair Suppliers",
  description: "Browse our extensive catalog of wheelchairs and medical equipment. High quality, comfortable, and affordable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen bg-bg-alt`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919989908123?text=Hi,%20I'm%20interested%20in%20your%20wheelchairs" 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-secondary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 z-50 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <svg xmlns="http://www.0.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
