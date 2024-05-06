import React from "react";

function Timeline() {
  return (
    <>
      <div className=" font-bold text-3xl text-center m-auto w-full">Our Product Line</div>
      <ol className="flex py-10 flex-col md:flex-row items-center md:items-start relative">
        <span className="w-full absolute top-11 h-0.5 bg-gradient-to-r from-transparent  via-primary to-transparent hidden md:block"></span>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 relative left-2/4 md:flex hidden items-center justify-center w-3 h-3 bg-secondary animate-pulse   rounded-full ring-0   sm:ring-8  shrink-0"></div>
          </div>
          <div className="mt-3 sm:pe-8 w-72 shadow-lg px-10 py-5 rounded-lg border-b-4 mx-3   border-cyanno">
            <h3 className="text-lg font-semibold text-primary capitalize">
              25MN+ In house global mobile user base
            </h3>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 relative left-2/4 md:flex hidden items-center justify-center w-3 h-3 bg-secondary  animate-pulse rounded-full ring-0   sm:ring-8  shrink-0"></div>
          </div>
          <div className="mt-3 sm:pe-8 w-72 shadow-lg px-10 py-5 rounded-lg border-b-4  mx-3  border-cyanno">
            <h3 className="text-lg font-semibold text-primary capitalize">
              In-app Inventory
            </h3>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 relative left-2/4 md:flex hidden items-center justify-center w-3 h-3 bg-secondary animate-pulse rounded-full ring-0   sm:ring-8  shrink-0"></div>
          </div>
          <div className="mt-3 sm:pe-8 w-72 shadow-lg px-10 py-5 rounded-lg border-b-4  mx-3  border-cyanno">
            <h3 className="text-lg font-semibold text-primary capitalize">
              OEMs & Short Video Viral Apps
            </h3>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 relative left-2/4 md:flex hidden items-center justify-center w-3 h-3 bg-secondary animate-pulse rounded-full ring-0   sm:ring-8  shrink-0"></div>
          </div>
          <div className="mt-3 sm:pe-8 w-72 shadow-lg px-10 py-5 rounded-lg border-b-4  mx-3  border-cyanno">
            <h3 className="text-lg font-semibold text-primary caption-top">
              API driven self served channels
            </h3>
          </div>
        </li>
      </ol>
    </>
  );
}

export default Timeline;
