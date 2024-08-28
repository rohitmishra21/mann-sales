import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import cup from "../assets/cup.png";
import r from "../assets/r.png";
import phone from "../assets/phone.png";
import book from "../assets/book.png";
import white from "../assets/white.png";
import tshirt from "../assets/t-shirt.png";

export default function Anim() {
  const dataSources = [
    book,
    cup,
    phone,
    "https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/6422c2ce62beb0fcc0fca8b0_aws.webp",
    "https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/66b5e1f85c354043a988ff05_cue1.gif",
    "https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/663a27f90b1be7c85c2a5463_A%20good%20Friend%20Animation%20(Character%20Card%20Grid)%20(4).gif",
    white,
    r,
    tshirt,
    "https://cdn.prod.website-files.com/641470ee1ebc5e28c0735bbb/64672bb0c813541f477eb87f_Seven%20Stone%20Closing%20Sign%20(16x9).gif",
  ];

  const DEFAULT_DATA_SOURCE = dataSources[0];
  const Y_OFFSET_DIFFERENCE = 100;

  const [dataSource, setDataSource] = useState(DEFAULT_DATA_SOURCE);
  const [scale, setScale] = useState(1);
  const divRef1 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(divRef1.current, {
      duration: 1,
      ease:"power1",
      scrollTrigger: {
        trigger: "#page",
        start: "top 23%",
        end: "top -50%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          setScale(1 + progress * 3);
        },
      },
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const index =
        Math.floor(position / Y_OFFSET_DIFFERENCE) % dataSources.length;
      const selectedSource = dataSources[index];

      if (selectedSource === dataSource) {
        return;
      }
      setDataSource(selectedSource);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dataSource]);

  return (
    <div
      className="flex justify-center items-center relative min-h-[200vh] "
      id="page"
    >
      <div
        ref={divRef1}
        className="h-[65vh] w-[50vh] bg-black rounded-[40vh] flex justify-center items-center overflow-hidden fixed top-32"
        id="box"
        style={{
          transform: `scale(${scale})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} // Apply scaling
      >
        <img src={dataSource} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
