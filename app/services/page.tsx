import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import React from "react";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Our Services',
  description: 'AppExcel Media',
}
export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services " />
      <Services/>
    </>
  );
}
