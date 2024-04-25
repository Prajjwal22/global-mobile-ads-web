import PageHeader from "@/components/PageHeader";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us " />
      <section className=" bg-[#F3F4F6]">
        <div className="max-w-7xl m-auto  py-20">
          <div className="flex  items-center p-2">
            <div className="flex flex-col gap-10">
              <span className="md:text-6xl text-4xl font-extrabold">
                Feel free to keep in touch
              </span>
              <span>
                Vulputate egestas nullam volutpat diam nisi at venenatis
                adipiscing massa posuere massa nulla massa id integer.
              </span>
              <span>
                Cras ullamcorper fermentum arcu in sed fermentum velit nulla
                scelerisque pharetra tristique lectus justo faucibus purus est
                purus gravida nibh odio ante.
              </span>
            </div>
            <div>
              <form action=""></form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
