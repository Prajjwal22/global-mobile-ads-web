import { BrainCircuit, Brush, Filter, Laptop, MonitorSmartphone, PencilRuler, Share, Target, UserPlus } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <section id="services" className="w-full  bg-primary text-white bg-[url('/blue-triangle.svg')] bg-no-repeat bg-left-bottom bg-clipPath bg-leftTriangle  mb-10">
      <div className="bg-[url('/cyan-triangle.svg')] bg-no-repeat bg-right-top bg-rightTriangle w-full h-full md:px-10 p-2 md:py-14">
        <div className="max-w-7xl m-auto flex md:flex-row flex-col items-center md:items-start">
          <span className="font-bold md:text-2xl text-xl mt-5">A bit deeper into our offerings</span>
          <div className="md:w-3/4 flex flex-col w-webkit md:pr-28">
            {/* <span className="md:text-5xl text-3xl font-bold md:text-left text-center mb-5">
              Advertising Solutions
            </span>
            <span className="">
              Whether you are a start-up looking to launch your app or an
              established app business seeking to drive user growth and
              engagement, our firm has the skills, expertise, and experience to
              help you achieve your last-mile goals.
            </span> */}
            <div className="flex flex-wrap items-start justify-center md:justify-between gap-x-10">
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <UserPlus className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">Effective User Acquisition</span>
                <span>
                Harnessing the power of advanced algorithms, we optimize user acquisition strategies to ensure your brand connects with the right audience at the right time. Our unified platform provides a comprehensive solution for mobile user growth.
                </span>
              </div>
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <Filter className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">Full-Funnel User Acquisition</span>
                <span>
                We go beyond the basics, offering a full-funnel approach to user acquisition. From precise forecasting of Lifetime Value (LTV) and in-app event conversion to driving incremental growth on a global scale, our strategies are designed for success.
                </span>
              </div>
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <Share className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">High-Impact Creatives with Dynamic Creative Optimization</span>
                <span>
                Elevate your advertising efforts with high-impact creatives. Our proprietary Dynamic Creative Optimization ensures that your content resonates with your audience, driving engagement and conversion.
                </span>
              </div>
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <BrainCircuit className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">Predictive Machine Learning</span>
                <span>
                Our advanced predictive machine learning algorithms optimize both behavioral and contextual data, ensuring that your campaigns are not only targeted but also adaptive, delivering optimal results.
                </span>
              </div>
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <PencilRuler className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">Re-engagement Strategies</span>
                <span>
                We understand the value of re-engaging your audience. With a focus on behavioral data analysis, dynamic ads, and deep links, we bring users back into the fold, guiding them directly to points of conversion.
                </span>
              </div>
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <MonitorSmartphone className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">Cross-Device Partnerships</span>
                <span>
                Forge meaningful connections across devices. Our cross-device partnerships ensure a seamless and consistent user experience, maximizing your brand&apos;s reach and impact.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
