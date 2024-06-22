import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import React from "react";
import { Metadata } from 'next'
 

export const metadata: Metadata = {
  title: "AppExcel Media: Our Services",
  description:
    "Explore AppExcel Media's comprehensive digital advertising services. From strategy to execution, we offer solutions that empower your business to thrive in a dynamic marketplace. Discover our services today.",
  icons: {
    icon: "/logo1.png", // /public path
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/logo.jpg",
  },
};
export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services " />
      <Services/>
    </>
  );
}
