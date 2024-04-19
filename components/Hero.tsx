import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-hero bg-right-bottom bg-no-repeat bg-mobheroSize md:bg-heroSize mb-20">
      <div className=" text-primary max-w-7xl flex flex-col items-start justify-center m-auto gap-10  h-full p-5">
        <h2 className=" text-4xl md:text-7xl  font-extrabold ">
          A leading mobile advertising agency delievering results from years
        </h2>
        <span className=" text-lg  text-mute">
          Congue consectetur sapien pellentesque ultrices tempus nunc.
        </span>
        <div className=""> 
        <Button title="Learn More"/>
        </div>
      </div>
    </section>
  );
}
