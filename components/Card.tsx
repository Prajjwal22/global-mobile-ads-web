import { Users } from "lucide-react";
import React, { JSXElementConstructor, ReactNode } from "react";

type CardProps = {
  icon: ReactNode; 
  title:string
};
export default function Card({icon,title}:CardProps) {
  return (
    <div className="group  md:w-96 w-auto h-80 p-10 b border border-grey-100 hover:border-secondary transition-colors duration-500 flex flex-col justify-between">
      <div className="flex justify-between items-end">
        <span className="font-bold text-3xl text-primary">
         {title}
        </span>
        <span className="p-5 bg-[#F7F7FA] rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
          {icon}
        </span>
      </div>
      <span className="text-mute text-[15px] ">
        Our proprietary solution leverages an in-house database of 260M+
        customers and 2,000+ custom variables to build custom predictive models
        to drive business growth — from only the best customers.
      </span>
    </div>
  );
}
