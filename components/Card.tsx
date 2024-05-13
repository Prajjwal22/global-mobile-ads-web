import { Users } from "lucide-react";
import React, { JSXElementConstructor, ReactNode } from "react";

type CardProps = {
  icon: ReactNode; 
  title:string;
  description:string;
};
export default function Card({icon,title,description}:CardProps) {
  return (
    <div className="group  md:w-96 w-auto 
     p-10 b border border-grey-100 hover:border-secondary transition-colors duration-500 flex flex-col ">
      <div className="flex justify-between items-end mb-5">
        <span className="font-bold text-2xl text-primary">
         {title}
        </span>
        <span className="p-5 bg-[#F7F7FA] rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
          {icon}
        </span>
      </div>
      <span className="text-mute text-[15px] ">
      {description}
      </span>
    </div>
  );
}
