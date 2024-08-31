import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React, { useEffect } from "react";

const Text = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".rote", {
      rotate: window.innerHeight - 100,
      scrollTrigger: {
        trigger: "#net",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <div
      className="xl:min-h-[290vh] min-h-[230vh]  md:min-h-[280vh]   w-full  xl:overflow-x-hidden bg-[#F8F1DE] text-black xl:px-60 px-4"
      id="net"
    >
      <div className="xl:pt-52 pt-20">
        <h1 className="xl:text-5xl text-1xl text-start uppercase md:px-8 md:text-[3vw] ">our manifesto*</h1>
      </div>
      <div className="xl:text-8xl text-4xl mt-4 xl:mt-0 leading-tighter relative  md:text-[7vw] md:leading-tight md:p-0 md:px-8 md:border-none">
        <h1>The truth</h1>
        <h1>is only the truth</h1>
        <h1>if it’s intertresting.</h1>
        <img
          src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/640b4d3b97b40fcec7669276_manifesto-decoration-1.svg"
          alt=""
          className="absolute -bottom-5 right-32 hidden xl:block"
        />
      </div>
      <div className="xl:text-5xl md:text-[5vw] md:p-7 md:px-8 md:border-none xl:text-black md:text-black md:leading-none text-[#FF6432] text-4xl xl:mt-36 mt-11 border-t-2 border-gray-300 py-12 xl:py-0 pr-20 leading-tight">
        <p>
          If no one’s paying attention, who cares if what you’re saying is true?
          Or what you’re saying at all?
           <span className="xl:block hidden md:block">
          We do, but that’s because you’re paying
          us. And in exchange for you paying us we’ll do our hardest to make
          sure everyone else cares about what you’re saying too.
            </span>
        </p>
      </div>
      <div className="xl:hidden pr-24 md:text-[5vw] md:p-7 md:px-8 md:border-none md:leading-none">
        <p> We do, but that’s because you’re paying us. And in exchange for you paying us we'll do our hardest to make sure everyone else cares about what you're saying too.</p>
      </div>
      <div className="xl:text-5xl xl:mt-36 leading-tight relative mt-8 md:mt-0 pr-24 md:text-[5vw] md:p-5 md:px-8 md:border-none md:leading-none">
        <p>
          As the persuasion company we inject creativity into everything you do
          to excite and ignite people everywhere to change their lives for the
          better, or at the very least change their brand of peanut butter.
        </p>
        <img
          src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/6421a802ddcaaa2dfc036efd_manifesto-line.svg"
          alt=""
          className="absolute bottom-20 right-11 hidden xl:block"
        />
      </div>
      <div className=" flex justify-center items-center overflow-x-hidden overflow-y-hidden">
        <div className="rote mt-36 w-fit xl:flex justify-center  ">
          <img
            src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/6423f74e22ab3520c53fcb3e_manifesto-bottom-image.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center items-center relative mt-10 capitalize font-sans text-[#A8A397]">
        <h1 className="text-center">
          his is Naftoli’s <br /> Mannifesto.
        </h1>
        <img
          src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/6423f8f4bdb757848725df5a_manifesto-arrow.svg"
          alt=""
          className="absolute left-[55%]"
        />
      </div>
    </div>
  );
};

export default Text;
