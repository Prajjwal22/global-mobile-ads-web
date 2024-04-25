import React from "react";

type PropType = {
  title: string;
};

export default function PageHeader({ title }: PropType) {
  return (
    <div className="w-screen  bg-hero bg-right-bottom bg-no-repeat bg-mobheroSize md:bg-contain">
      <div className=" m-auto max-w-7xl flex justify-between items-center h-52 md:h-80 md:text-7xl text-3xl font-extrabold p-2">
        {title}
      </div>
    </div>
  );
}
