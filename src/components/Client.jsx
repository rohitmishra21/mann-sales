import React from "react";
import { LuDot } from "react-icons/lu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Client = () => {
  useGSAP(() => {
    gsap.from(".boxx,.book", {
      x: -window.innerWidth,
      duration:1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".boox",   
        start: "top 60%",
      },
    });
    gsap.from(".lefti", {
      x: window.innerWidth,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".boox",
        start: "top 60%",
      },
    });
  });

  return (
    <div className="min-h-[100vh] bg-[#F8F1DE] text-black overflow-x-hidden">
      <div className="text-[11vw] font-merriweather text-center xl:pt-52 pt-9">
        <h1 className="text-7xl xl:normal-case">our clients</h1>
        <h1 className="xl:text-2xl text-xs pt-4 xl:pt-0 font-semibold uppercase font-sans xl:normal-case">
          some recent compannines <br />
          we ha'worked with
        </h1>
        <div className="boox">
          <div className="boxx  text-2xl xl:text-6xl font-merriweather items-center tracking-tighter xl:flex justify-center mt-16 leading-3">
            <h1 className="font-extralight">WEDNESDAY </h1>
            <LuDot className="text-[#FF6432]" />
            <h1 className="font-light">TEAM LIFELINE </h1>
            <LuDot className="text-[#FF6432]" />
            <h1 className="font-light">KODAK</h1>
          </div>
          <div className="lefti text-2xl xl:text-6xl font-merriweather  xl:flex justify-center mt-16 items-center leading-3 tracking-tighter">
            <h1 className="font-extralight">FLEISHIGS </h1>
            <LuDot className="text-[#FF6432]" />
            <h1 className="font-light">SEVENSTONE</h1>
            <LuDot className="text-[#FF6432]" />
            <h1 className="font-light">FURER SCHAEFER</h1>
          </div>
          <div className="book text-2xl xl:text-6xl font-merriweather xl:flex justify-center mt-16 items-center leading-3 tracking-tighter">
            <h1 className="font-extralight">AWS</h1>
            <LuDot className="text-[#FF6432]" />
            <h1 className="font-light">GOODWILL </h1>
            <LuDot className="text-[#FF6432]" />
            <h1 className="font-light">MEALMART</h1>
          </div>
        </div>
      </div>
      <div className="text-[11vw] mt-32 text-center">
        <h1>future clients</h1>
        <h1 className="text-2xl uppercase font-sans">
          companines we are going to <br />
          work with
        </h1>
      </div>
    </div>
  );
};

export default Client;
