import React from "react";

type ButtonProps = {
  title: string;
};
export default function Button({ title }: ButtonProps) {
  return (
    <div className="bg-white cursor-pointer text-secondary text-sm border-secondary transition-colors duration-300 hover:text-white b-2 border font-medium uppercase min-h-12 flex items-center justify-center w-40 min-w-40 hover:bg-blue-700 border-blue  py-2 px-4">
      {title} →
    </div>
  );
}
