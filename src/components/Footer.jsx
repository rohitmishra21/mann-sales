import React, { useState } from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsThreads } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  const [dark, setdark] = useState("");

  function light() {
    setdark("");
  }

  function reset() {
    setdark("black");
  }

  return (
    <>
      <div className="xl:min-h-[200vh] min-h-[150vh] bg-[#FF6432] md:min-h-[170vh]">
        <div className=" xl:pt-72 px-8">
          <div className="xl:flex justify-around items-center py-11 border-t-2 border-b-2 border-[#c9c4b630]">
            <div>
              <div
                className={`hidden xl:block px-7 py-7 rounded-full bg-${dark} transition-all hover:bg-transparent border-[#c9c4b626] border-2 hover:bg-black `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 115 56"
                  width="90"
                  height="90"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: "100%",
                    height: " 100%",
                    transform: "translate3d(0px, 0px, 0px)",
                    contentVisibility: "visible",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_293">
                      <rect width="115" height="56" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_293)">
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
              </div>
            </div>
            <h1
              className="text-[7vw] leading-none tracking-tighter"
              onMouseEnter={light}
              onMouseLeave={reset}
            >
              Let’s work <br /> together
            </h1>
            <div className="card py-4 xl:h-[50vh] xl:w-[55vh] w-full mt-6 border-2 border-[#c9c4b626] rounded-2xl justify-around flex xl:flex xl:flex-col xl:justify-center items-center gap-5">
              <h1 className="xl:text-3xl font-sans text-center">
                Looking to hire <br className="hidden xl:block" /> an agency?{" "}
              </h1>
              <button className="xl:px-9 xl:py-3 py-1 px-5 rounded-full bg-[#171616] text-white uppercase font-sans text-sm xl:text-xl transition-all  hover:bg-transparent  hover:border-2 border-[#c9c4b626]">
                let's talk
              </button>
            </div>
            <div className="card py-4 xl:h-[50vh] xl:w-[55vh] w-full mt-6 border-2 border-[#c9c4b626] rounded-2xl justify-around flex xl:flex xl:flex-col xl:justify-center items-center gap-5">
            <h1 className="xl:text-3xl font-sans text-center">
                Work for <br className="hidden xl:block" />
                the Maan !
              </h1>
              <button className="xl:px-9 xl:py-3 py-1 px-5 rounded-full bg-[#171616] text-white uppercase font-sans text-sm xl:text-xl transition-all  hover:bg-transparent  hover:border-2 border-[#c9c4b626]">
                join us
              </button>
            </div>
          </div>
        </div>

        <div className="w-full xl:h-48  xl:flex justify-between items-center px-8 font-sans">
          <div className="xl:text-3xl py-5 xl:p-0">
            <h1>4631 US-9 Howell</h1>
            <h1>NJ 07731</h1>
            <h1>732.399.9400</h1>
          </div>
          <div className="xl:flex flex gap-5">
            <div className="p-4 rounded-full border-2 border-[#c9c4b631] hover:bg-black transition-all hover:border-none">
              <FaPinterest size={20} className="" />
            </div>
            <div className="p-4 rounded-full border-2 border-[#c9c4b631] hover:bg-black transition-all hover:border-none">
              <FaXTwitter size={20} className="" />
            </div>
            <div className="p-4 rounded-full border-2 border-[#c9c4b631] hover:bg-black transition-all hover:border-none">
              <BsThreads size={20} className="" />
            </div>
            <div className="p-4 rounded-full border-2 border-[#c9c4b631] hover:bg-black transition-all hover:border-none">
              <IoLogoInstagram size={20} className="" />
            </div>

            <div className="p-4 rounded-full border-2 border-[#c9c4b631] hover:bg-black transition-all hover:border-none">
              <IoLogoLinkedin size={20} className="" />
            </div>
          </div>
        </div>

        <div className="w-full xl:h-80 py-12 xl:py-0 ">
          <h1 className="text-[17vw] tracking-tighter font-light text-center">
            Maan Sales Co.
          </h1>
        </div>
        <div className="py-10 xl:py-0 uppercase xl:font-bold font-sans xl:flex justify-between mx-8 items-center h-24 border-t-2 border-[#c9c4b631] ">
          <h1>© 2024 MSC.</h1>
          <h1>NJ / FL</h1>
          <h1>Website made with the help of our friends at Widelab</h1>
          <h1>What Naftoli’s listening to</h1>
          <h1>proud owners of a pet stuffed pig</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
