
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact AppExceL: Advertising Experts",
  description:
    "Get in touch with AppExceL for expert digital advertising solutions. We're here to help your business thrive in a dynamic market. Contact us today to learn more",
  icons: {
    icon: "/logo1.png", // /public path
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://appexcelmedia.com/contact",
  },
  openGraph: {
    images: "/logo.jpg",
  },
};

export default function ContactPage() {


  return (
    <>
      <PageHeader title="Contact Us " />
      <section className=" bg-[#F3F4F6]">
        <div className="max-w-7xl m-auto  py-20">
          <div className="flex  items-center p-2">
            <div className="flex flex-col gap-10">
              <span className="md:text-6xl text-4xl font-extrabold">
                Find the Perfect Partner for Your Business
              </span>
              <span>
                If you have questions or interest in partnership opportunities,
                or need support, our team is ready to assist you. We look
                forward to connecting with you and exploring how AppExcel can
                contribute to your digital success.
              </span>
              {/* <span>
                Reach out anytime to chat, share thoughts, or collaborate. Let&apos;s
                keep the conversation going!
              </span> */}
            </div>
            <div>
              <form action=""></form>
            </div>
          </div>
        </div>
        {/* <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height="480"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div> */}
        <div className="container px-6 md:px-12 m-auto    mt-10 ">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
           <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
}
