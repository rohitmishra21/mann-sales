import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Arow from "./Arow";

gsap.registerPlugin(useGSAP);

const Three = () => {
  useGSAP(() => {
    gsap.from(".imggi", {
      scaleX: 0,
      duration: 0.5,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ".move",
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.from(".imm", {
      scaleX: 0,
      duration: 0.5,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ".maan",
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.from(".im", {
      scaleX: 0,
      duration: 0.5,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ".anim",
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.from(".run", {
      scaleX: 0,
      duration: 0.5,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ".rang",
        start: "top bottom",
        end: "bottom top",
      },
    });
  });

  return (
    <>
      <div className="leading-none text-center" id="direction">
        <h1 className="text-[12vw] tracking-tighter font-extralight pt-10 ">
          Select pieces of
        </h1>
        <h1 className="text-[12vw]  tracking-tighter font-extralight ">
          interest
        </h1>
      </div>
      <div className="maan w-full h-screen">
        <div className="px-9 mt-40">
          <div className='imm h-[75vh] w-full bg-slate-500 rounded-3xl overflow-hidden bg-[url("https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/66b5e1f85c354043a988ff05_cue1.gif")] bg-cover bg-center'></div>
          <Arow username="CUE Wigs" />
        </div>
      </div>
      <div className="move w-full h-screen">
        <div className="px-9 xl:mt-40">
          <div className='imggi h-[75vh] w-full bg-slate-500 rounded-3xl overflow-hidden bg-[url("https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/6422c2ce62beb0fcc0fca8b0_aws.webp")] bg-cover bg-center'></div>
          <Arow username="AWS" />
        </div>
      </div>
      <div className="anim w-full h-screen">
        <div className="px-9 xl:mt-40">
          <div className='im h-[75vh] w-full bg-slate-500 rounded-3xl overflow-hidden bg-[url("https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/663a27f90b1be7c85c2a5463_A%20good%20Friend%20Animation%20(Character%20Card%20Grid)%20(4).gif")] bg-cover bg-center'></div>
          <Arow username="A Good Friend" />
        </div>
      </div>
      <div className="rang w-full h-screen">
        <div className="px-9 xl:mt-40 xl:mb-60">
          <div className='run h-[75vh] w-full bg-slate-500 rounded-3xl overflow-hidden bg-[url("https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/64672bb0c813541f477eb87f_Seven%20Stone%20Closing%20Sign%20(16x9).gif")] bg-cover bg-center'></div>
          <Arow username="Sevenstone" />
        </div>
      </div>
    </>
  );
};

export default Three;
