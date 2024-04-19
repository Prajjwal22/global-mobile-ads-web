import { Users } from "lucide-react";
import React from "react";

export default function Card() {
  return (
    <div className="md:w-96 w-auto h-80 p-10 b border border-grey-100 flex flex-col justify-between">
      <div className="flex justify-between items-end">
        <span className="font-bold text-3xl text-primary">Better Audiences</span>
        <span className="p-5 bg-[#F7F7FA] rounded-full">
          <Users />
        </span>
      </div>
      <span className="text-mute">
        Our proprietary solution leverages an in-house database of 260M+
        customers and 2,000+ custom variables to build custom predictive models
        to drive business growth — from only the best customers.
      </span>
    </div>
  );
}
