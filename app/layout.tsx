import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"], weight: ["400","500", "700", "800"] });

export const metadata: Metadata = {
  title: "AppExcel Media",
  description: "Delivering Excellence",
  icons: {
    icon: '/logo1.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body className={sora.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
