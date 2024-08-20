import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import cup from '../assets/cup.png'
import r from '../assets/r.png'

export default function Anim() {
  const dataSources = [
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3PtHpZHGA1YSY6G0BrYBbp3DuaJXD0GMa-KJam9q8b7e-1NPU",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSW2mA8FcQdVONTf-t8HwVBIAjMKLdUJ1cwdKwAiHjdb7Dnp_i9",
    cup,
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d14672bb1f80bfef0af33_img-10.webp",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-4ZPMUb8di5WetWc26U_PMnf8QCKWJ5H9wydbvUcBQfPlo6Pz",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQrJVpjLNHjmZo3qTJpqtsNdCh7AN8f_teD4En4kc0l0ZL12ek",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfJJCSc5OMymtthTr64yCPb3Dz__BhFqUcRByHDeTBSHdvxg3P",
    r,
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgm_GpiiYd3nAOQTW9YnIkiWIUSvlqrbPVVxdtQvD7j8W_QJUN",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyJxRNNZ8sUvgOFmbyPoonzrygpAgOoA1XA9SZZ58OMFv1Db3s",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcF_j1Aueqe4b9gN2NuN_F_bg4Jf8e7wdsmURliLux6k0yKEd5",
  ];

  const DEFAULT_DATA_SOURCE = dataSources[0];
  const Y_OFFSET_DIFFERENCE = 100;

  const [dataSource, setDataSource] = useState(DEFAULT_DATA_SOURCE);
  const [scale, setScale] = useState(1); 
  const divRef1 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(divRef1.current, {
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
      easeease: "expo.out",
      duration:1,
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
        transform: `scale(${scale})` ,
        backgroundImage:`url(${dataSource})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"

       
      }} // Apply scaling
      >
       
      </div>
    </div>
  );
}
