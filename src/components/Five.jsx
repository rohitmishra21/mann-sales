import React, { useRef, useEffect } from "react";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from '../assets/arrow.png'
const Five = () => {
  const txt = useRef(null);
  const tsst = useRef(null);
  const big = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (txt.current) {
      gsap.to(txt.current, {
        x: () => window.innerHeight,
        scrollTrigger: {
          trigger: "#text",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });
    }

    if (tsst.current) {
      gsap.to(tsst.current, {
        x: () => -window.innerHeight,
        scrollTrigger: {
          trigger: "#text",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });
    }
  }, []);

  return (
    <>
      <div className="min-h-[100vh] w-full overflow-x-hidden relative" id="text">
        <div className=" h-96  flex flex-col justify-center">
          <div className="bg-[#FF6432] h-32 rotate-2 relative top-6 z-10 overflow-x-hidden">
            <div
              className="whitespace-nowrap flex items-center justify-center"
              ref={txt}
            >
              <div className="flex items-center gap-6">
                <h1 className="text-[5vw] tracking-tighter font-serif font-extralight whitespace-nowrap">
                  meet science
                </h1>
                <div className="border-2 border-white rounded-xl px-2 flex">
                  <h1 className="text-[3vw]">M</h1>̥
                  <div className="flex flex-col items-center h-8">
                    <h1 className="text-xl mt-3">S</h1>
                    <h1 className="text-xl leading-3">©</h1>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <h1 className="text-[5vw] tracking-tighter font-serif font-extralight whitespace-nowrap">
                    we mind your business
                  </h1>
                  <div className="border-2 border-white rounded-xl px-2 flex">
                    <h1 className="text-[3vw]">M</h1>̥
                    <div className="flex flex-col items-center h-8">
                      <h1 className="text-xl mt-3">S</h1>
                      <h1 className="text-xl leading-3">©</h1>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-white rounded-xl px-2 flex">
                  <h1 className="text-[3vw]">M</h1>̥
                  <div className="flex flex-col items-center h-8">
                    <h1 className="text-xl mt-3">S</h1>
                    <h1 className="text-xl leading-3">©</h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <h1 className="text-[5vw] tracking-tighter font-serif font-extralight whitespace-nowrap">
                  meet science
                </h1>
                <div className="border-2 border-white rounded-xl px-2 flex">
                  <h1 className="text-[3vw]">M</h1>̥
                  <div className="flex flex-col items-center h-8">
                    <h1 className="text-xl mt-3">S</h1>
                    <h1 className="text-xl leading-3">©</h1>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <h1 className="text-[5vw] tracking-tighter font-serif font-extralight whitespace-nowrap">
                    we mind your business
                  </h1>
                  <div className="border-2 border-white rounded-xl px-2 flex">
                    <h1 className="text-[3vw]">M</h1>̥
                    <div className="flex flex-col items-center h-8">
                      <h1 className="text-xl mt-3">S</h1>
                      <h1 className="text-xl leading-3">©</h1>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-white rounded-xl px-2 flex">
                  <h1 className="text-[3vw]">M</h1>̥
                  <div className="flex flex-col items-center h-8">
                    <h1 className="text-xl mt-3">S</h1>
                    <h1 className="text-xl leading-3">©</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-32 -rotate-1 overflow-x-hidden bg-[#F8F1DE] text-black">
            <div
              className="whitespace-nowrap flex items-center justify-center "
              ref={tsst}
            >
              <div className="flex items-center gap-6">
                <h1 className="text-[5vw] tracking-tighter font-serif font-extralight whitespace-nowrap">
                  meet science
                </h1>
                <div className="border-2 border-white rounded-xl px-2 flex">
                  <h1 className="text-[3vw]">M</h1>̥
                  <div className="flex flex-col items-center h-8">
                    <h1 className="text-xl mt-3">S</h1>
                    <h1 className="text-xl leading-3">©</h1>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <h1 className="text-[5vw] tracking-tighter font-serif font-extralight whitespace-nowrap">
                    we mind your business
                  </h1>
                  <div className="border-2 border-black rounded-xl px-2 flex">
                    <h1 className="text-[3vw]">M</h1>̥
                    <div className="flex flex-col items-center h-8">
                      <h1 className="text-xl mt-3">S</h1>
                      <h1 className="text-xl leading-3">©</h1>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-black rounded-xl px-2 flex">
                  <h1 className="text-[3vw]">M</h1>̥
                  <div className="flex flex-col items-center h-8">
                    <h1 className="text-xl mt-3">S</h1>
                    <h1 className="text-xl leading-3">©</h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <h1 className="text-[5vw] tracking-tighter font-serif font-extralight whitespace-nowrap">
                  meet science
                </h1>
                <div className="border-2 border-black rounded-xl px-2 flex">
                  <h1 className="text-[3vw]">M</h1>̥
                  <div className="flex flex-col items-center h-8">
                    <h1 className="text-xl mt-3">S</h1>
                    <h1 className="text-xl leading-3">©</h1>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <h1 className="text-[5vw] tracking-tighter font-serif font-extralight whitespace-nowrap">
                    we mind your business
                  </h1>
                  <div className="border-2 border-black rounded-xl px-2 flex">
                    <h1 className="text-[3vw]">M</h1>̥
                    <div className="flex flex-col items-center h-8">
                      <h1 className="text-xl mt-3">S</h1>
                      <h1 className="text-xl leading-3">©</h1>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-black rounded-xl px-2 flex">
                  <h1 className="text-[3vw]">M</h1>̥
                  <div className="flex flex-col items-center h-8">
                    <h1 className="text-xl mt-3">S</h1>
                    <h1 className="text-xl leading-3">©</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-40">
          <div className="text-2xl font-sans uppercase italic absolute left-1/2 -top-24">
            <h1>our calling</h1>
            <h1>is you</h1>
            <h1>collecting</h1>
          </div>
          <div>
           <img 
           src={arrow}
           alt=""
           className="absolute right-[500px] -top-[90px]"
           />
          </div>

          <div className="flex justify-center items-center">
            <img
              src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/6422c74ff13a4e2a24900655_solutions-text-image.svg"
              alt="Solutions Text"
            />
          </div>
          <div className="top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-[48%]">
            <img
              ref={big}
              src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/64492b9653ef66564ec79778_main-image.webp"
              alt="Main Image"
              className="shadow-2xl shadow-black"
            />
          </div>
        </div>
        <div className="w-full flex justify-between px-9 uppercase font-sans font-bold mt-52 border-b-2 border-white py-6">
          <div className="overflow-hidden h-6">
            <h1 className="elem">etcetera</h1>
            <h1 className="ele">etcetera</h1>
          </div>
          <div className="overflow-hidden h-6">
            <h1 className="elem">etcetera</h1>
            <h1 className="ele">etcetera</h1>
          </div>
          <div className="overflow-hidden h-6">
            <h1 className="elem">etcetera</h1>
            <h1 className="ele">etcetera</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Five;
