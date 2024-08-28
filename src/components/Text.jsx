import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React, { useEffect, useRef } from "react";

const Text = () => {

  const mo = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(mo.current,{
      rotate:()=> window.innerHeight-100,
      scrollTrigger:{
        trigger:"#net",
        scrub:1,
        start:"top bottom",
        end:"bottom top"
     }
    })
  }, [])
  
  return (
    <div className="min-h-[290vh] bg-[#F8F1DE] text-black px-60" id="net">
      <div className="pt-52">
        <h1 className="text-5xl font-normal">our manifesto*</h1>
      </div>
      <div className="text-8xl leading-tighter relative">
        <h1>The truth</h1>
        <h1>is only the truth</h1>
        <h1>if it’s intertresting.</h1>
        <img
          src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/640b4d3b97b40fcec7669276_manifesto-decoration-1.svg"
          alt=""
          className="absolute -bottom-5 right-32"
        />
      </div>
      <div className="text-5xl mt-36 leading-tight">
        <p>
          If no one’s paying attention, who cares if what you’re saying is true?
          Or what you’re saying at all? We do, but that’s because you’re paying
          us. And in exchange for you paying us we’ll do our hardest to make
          sure everyone else cares about what you’re saying too.
        </p>
      </div>
      <div className="text-5xl mt-36 leading-tight relative">
        <p>
          As the persuasion company we inject creativity into everything you do
          to excite and ignite people everywhere to change their lives for the
          better, or at the very least change their brand of peanut butter.
        </p>
        <img src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/6421a802ddcaaa2dfc036efd_manifesto-line.svg" alt="" className="absolute bottom-20 right-11" />
      </div>
      <div className="mt-36 flex justify-center " ref={mo}>
        <img src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/6423f74e22ab3520c53fcb3e_manifesto-bottom-image.svg" alt="" />
      </div>
      <div className="flex justify-center items-center relative mt-10 capitalize font-sans text-[#A8A397]">
      <h1 className="text-center">his is Naftoli’s <br /> Mannifesto.</h1>
      <img src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/6423f8f4bdb757848725df5a_manifesto-arrow.svg" alt="" className="absolute left-[55%]"/>
      </div>
    </div>
  );
};

export default Text;
