import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { Cable, FileSearch, Ratio, Smartphone, Target } from "lucide-react";
import React from "react";
import { Metadata } from 'next'
 

export const metadata: Metadata = {
  title: "AppExceL: Partner with Us",
  description:
    "Partner with AppExceL and leverage our innovative digital advertising solutions. Together, we can create transformative opportunities and drive business success. Explore partnership opportunities today.",
  icons: {
    icon: "/logo1.png", // /public path
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://appexcelmedia.com/partnerships",
  },
  openGraph: {
    images: "/logo.jpg",
  },
};


export default function PartnershipsPage() {
  return (
    <>
      <PageHeader title="Partnerships " />
      <section
        id="work"
        className="w-full text-primary bg-[url('/border-b.svg')] bg-no-repeat bg-bottom px-2 pb-20 my-10"
      >
        <div className="max-w-7xl m-auto flex flex-col gap-10 ">
          <div className="flex md:flex-row flex-col justify-between items-center md:items-end gap-5">
            <div className=" flex flex-col items-center md:items-start justify-center gap-5">
              {/* <span className="text-xl">What we do</span> */}
              <span className="text-4xl font-bold text-center md:text-left">
                Our sheer focus
              </span>
            </div>
            <div className="md:w-2/5 flex flex-col items-start justify-center gap-5 ">
              <span className="text-center md:text-left">
                At AppExceL, our partnership with advertisers is a dynamic
                alliance that propels brands to new heights. Here&apos;s what
                our partnership brings to the table
              </span>
              {/* <span className=" m-auto md:m-0 border-b-2  cursor-pointer border-secondary">
              MORE ABOUT US
            </span> */}
            </div>
          </div>
          <div className="flex flex-wrap gap-5 ">
            <Card
              icon={<Smartphone />}
              title="In-house Mobile Userbase"
              description="Elevate your user acquisition and retargeting strategies with our in house mobile users who have taken surveys on diversified verticals like travel, finance, shopping, lifestyle, etc. Drive relevant high-intent users to your brand, maximizing the impact of your campaigns"
            />
            <Card
              icon={<Target />}
              title="Targeting"
              description="At AppExceL, advertisers gain the ability to target customers through 10+ different vectors, providing unparalleled granularity. Access 25MN+ in house audience ensure your message reaches the right audience every time"
            />
            <Card
              icon={<Cable />}
              title="Multi Channels"
              description="Extend your reach across platforms. Our partnership enables advertisers to target customers seamlessly across channels. Additionally, explore the advantages of private marketplaces for a tailored and efficient advertising experience"
            />
            <Card
              icon={<FileSearch />}
              title="Transparent Detialed Reporting"
              description="Transparency is the major pillar of our partnership. Advertisers benefit from a clear and comprehensive view of campaign performance. Our detailed reporting ensures you have the insights needed to make informed decisions and optimize campaigns effectively"
            />
            <Card
              icon={<Ratio />}
              title="Impactful Solutions"
              description="We go beyond traditional advertising. AppExcel is dedicated to helping brands and agency partners with creative solutions that captivate audiences. Elevate your brand's presence with innovative and impactful campaigns that leave a lasting impression"
            />
          </div>
        </div>
      </section>
    </>
  );
}
