import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export const metadata: Metadata = {
  title: "AppExceL - Delivering Excellence",
  description:
    "Discover innovative digital advertising solutions with AppExceL. We empower businesses to thrive in a dynamic marketplace through transformative services. Join us in redefining digital advertising.",
  icons: {
    icon: "/logo1.png", // /public path
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://appexcelmedia.com/",
  },
  openGraph: {
    images: "/logo.jpg",
  },
};


console.log("PRajjwal")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={sora.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
