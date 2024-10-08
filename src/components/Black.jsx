import React from "react";
import "../index.css";
import Arrow from "./Arrow";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Black = () => {
  useGSAP(() => {
    gsap.from(".right", {
      x: -window.innerWidth,
      duration: 1,
      scrollTrigger: {
        trigger: ".side",
      },
      ease: "power1.out",
    });
    gsap.from(".left", {
      x: window.innerWidth,
      duration: 1,
      scrollTrigger: {
        trigger: ".side",
      },
      ease: "power1.out",
    });
  });

  return (
    <div className="min-h-[140vh] md:min-h-[100vh] xl:min-h-[150vh] bg-black overflow-x-hidden">
      <div className="side w-full  xl:flex md:flex  ">
        <div className="right  font-inter xl:w-[50%] md:w-1/2 xl:px-32 xl:text-5xl xl:pt-36  pt-20 px-5 pr-24 xl:pr-0 text-3xl">
          <h1 className="text-[#FF6432] ">
            “Creativity is the last unfair advantage we’re legally allowed to
            take over our competitors{" "}
            <span className="text-2xl">- Bill Bernbech </span>”
          </h1>
          <h1 className="text-end text-[#FF6432] ">- Jack Levinsn</h1>
          <p className="xl:text-2xl  mt-10 text-xl ">
            To be honest, we'll do any work that allows us to add creativity to
            it. But if you like lists, here's a list.
          </p>
        </div>
        <div className="left   xl:w-1/2  md:w-1/2  h-fit  flex flex-col gap-5 mt-16 xl:mt-0 xl:pt-36">
          <div className="flex gap-7">
            <Arrow />
            <h1 className="font-merriweather text-4xl xl:text-6xl leading-normal font-light ">
              Strategy
            </h1>
          </div>
          <div className="flex gap-7">
            <Arrow />
            <h1 className="font-merriweather text-4xl xl:text-6xl leading-normal font-light ">
              Design(url & irl)
            </h1>
          </div>
          <div className="flex gap-7">
            <Arrow />
            <h1 className="font-merriweather text-4xl xl:text-6xl leading-normal font-light ">
              Branding
            </h1>
          </div>
          <div className="flex gap-7">
            <Arrow />
            <h1 className="font-merriweather text-4xl xl:text-6xl leading-normal font-light ">
              Experience
            </h1>
          </div>
          <div className="flex gap-7">
            <Arrow />
            <h1 className="font-merriweather text-4xl xl:text-6xl leading-normal font-light ">
              Packaging
            </h1>
          </div>
          <div className="flex gap-7">
            <Arrow />
            <h1 className="font-merriweather text-4xl xl:text-6xl leading-normal font-light ">
              Parformance
            </h1>
          </div>
          <div className="flex gap-7">
            <Arrow />
            <h1 className="font-merriweather text-4xl xl:text-6xl leading-normal font-light ">
              Comunication
            </h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Black;
