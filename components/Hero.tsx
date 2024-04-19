import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-hero bg-right-bottom bg-no-repeat bg-mobheroSize md:bg-heroSize">
      <div className=" text-primary flex flex-col items-center gap-10 justify-center h-full p-5">
        <h2 className="md:w-2/3 text-4xl md:text-7xl  font-extrabold md:mr-80 ">
          A leading mobile advertising agency delievering results from years
        </h2>
        <span className="md:text-2xl text-lg md:w-2/3 md:mr-80 text-mute">
          Congue consectetur sapien pellentesque ultrices tempus nunc.
        </span>
        <div className="md:w-2/3 md:mr-80"> 
        <Button title="Learn More"/>
        </div>
      </div>
    </section>
  );
}
