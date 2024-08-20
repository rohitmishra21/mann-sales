import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Three = () => {
  const rafi = useRef(null);
  const rafi2 = useRef(null);
  const rafi3 = useRef(null);
  const rafi4 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(rafi.current,{
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#direction",
        start: "top -10%",
      },
    });
  });

  return (
    <>
      <div className="leading-none text-center" id="direction">
        <h1 className="text-[12vw] tracking-tighter font-extralight ">
          Select pieces of
        </h1>
        <h1 className="text-[12vw]  tracking-tighter font-extralight ">
          interest
        </h1>
      </div>
      <div className="px-9 mt-40">
        <div
          className='h-[75vh] w-full bg-slate-500 rounded-3xl overflow-hidden bg-[url("https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/66b5e1f85c354043a988ff05_cue1.gif")] bg-cover bg-center'
          ref={rafi}
        ></div>
        <div className="leading-none flex justify-between items-center relative">
          <h1 className="text-[7vw] tracking-tighter font-extralight mt-9 ">
            {" "}
            CUE Wigs
          </h1>
          <svg
            className="w-40 h-11"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 115 56"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "8%",
              height: "10%",
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: " visible",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_132">
                <rect width="115" height="56" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_132)">
              <g
                transform="matrix(1,0,0,1,101.11100006103516,14)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-14,-14 C-14,1.4609999656677246 -1.4609999656677246,14 14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,101.11100006103516,42)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M14,-14 C-1.4609999656677246,-14 -14,-1.4609999656677246 -14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,57.555999755859375,28)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-57.555999755859375,0 C-57.555999755859375,0 57.555999755859375,0 57.555999755859375,0"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div className="w-32 h-3 bg-[#171616] absolute right-32 hover:right-16"></div>
        </div>
      </div>
      <div className="px-9 mt-40">
        <div
          className='h-[75vh] w-full bg-slate-500 rounded-3xl overflow-hidden bg-[url("https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/6422c2ce62beb0fcc0fca8b0_aws.webp")] bg-cover bg-center'
          ref={rafi2}
        ></div>
        <div className="leading-none flex justify-between items-center relative">
          <h1 className="text-[7vw] tracking-tighter font-extralight mt-9 ">
            {" "}
            AWS
          </h1>
          <svg
            className="w-40 h-11"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 115 56"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "8%",
              height: "10%",
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: " visible",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_132">
                <rect width="115" height="56" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_132)">
              <g
                transform="matrix(1,0,0,1,101.11100006103516,14)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-14,-14 C-14,1.4609999656677246 -1.4609999656677246,14 14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,101.11100006103516,42)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M14,-14 C-1.4609999656677246,-14 -14,-1.4609999656677246 -14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,57.555999755859375,28)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-57.555999755859375,0 C-57.555999755859375,0 57.555999755859375,0 57.555999755859375,0"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div className="w-32 h-3 bg-[#171616] absolute right-32 hover:right-16"></div>
        </div>
      </div>
      <div className="px-9 mt-40">
        <div
          className='h-[75vh] w-full bg-slate-500 rounded-3xl overflow-hidden bg-[url("https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/663a27f90b1be7c85c2a5463_A%20good%20Friend%20Animation%20(Character%20Card%20Grid)%20(4).gif")] bg-cover bg-center'
          ref={rafi3}
        ></div>
        <div className="leading-none flex justify-between items-center relative">
          <h1 className="text-[7vw] tracking-tighter font-extralight mt-9 ">
            {" "}
            A Good Friend
          </h1>
          <svg
            className="w-40 h-11"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 115 56"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "8%",
              height: "10%",
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: " visible",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_132">
                <rect width="115" height="56" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_132)">
              <g
                transform="matrix(1,0,0,1,101.11100006103516,14)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-14,-14 C-14,1.4609999656677246 -1.4609999656677246,14 14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,101.11100006103516,42)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M14,-14 C-1.4609999656677246,-14 -14,-1.4609999656677246 -14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,57.555999755859375,28)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-57.555999755859375,0 C-57.555999755859375,0 57.555999755859375,0 57.555999755859375,0"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div className="w-32 h-3 bg-[#171616] absolute right-32 hover:right-16"></div>
        </div>
      </div>
      <div className="px-9 mt-40 mb-60">
        <div
          className='h-[75vh] w-full bg-slate-500 rounded-3xl overflow-hidden bg-[url("https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/64672bb0c813541f477eb87f_Seven%20Stone%20Closing%20Sign%20(16x9).gif")] bg-cover bg-center'
          ref={rafi4}
        ></div>
        <div className="leading-none flex justify-between items-center relative">
          <h1 className="text-[7vw] tracking-tighter font-extralight mt-9 ">
            {" "}
            Sevenstone
          </h1>
          <svg
            className="w-40 h-11"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 115 56"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "8%",
              height: "10%",
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: " visible",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_132">
                <rect width="115" height="56" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_132)">
              <g
                transform="matrix(1,0,0,1,101.11100006103516,14)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-14,-14 C-14,1.4609999656677246 -1.4609999656677246,14 14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,101.11100006103516,42)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M14,-14 C-1.4609999656677246,-14 -14,-1.4609999656677246 -14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,57.555999755859375,28)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-57.555999755859375,0 C-57.555999755859375,0 57.555999755859375,0 57.555999755859375,0"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div className="w-32 h-3 bg-[#171616] absolute right-32 hover:right-16"></div>
        </div>
      </div>
    </>
  );
};

export default Three;
