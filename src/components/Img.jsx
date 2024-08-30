import React, { useState } from "react";

const Img = () => {
  const images = [
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d14670aba24c743ac8981_img-6.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d14673d5a51e23ead25a2_img-9.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d146730c31fddb90fcdb4_img-2.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d14672529e3bd1a002aa3_img-5.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d1467202f122c838f9441_img-7.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d14675b3c9f28de305e06_img-3.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d14674c9aaf0550619b6e_img-1.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d146751cd6b8181841cf9_img-11.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d146728f2df2d222cb887_img-4.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d14672bb1f80bfef0af33_img-10.webp",
    "https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/667d14675f177d0356773fe5_img-8.webp",
  ];

  const numberDiv = images.length;

  const initialPosition = Array.from({ length: numberDiv }, () => ({
    left: Math.random() * window.innerWidth,
    top: Math.random() * window.innerHeight,
  }));

  const [position, setPosition] = useState(initialPosition);

  const handleMouseEnter = (index) => {
    const newPosition = [...position];

    const maxWidth = Math.random() * window.innerWidth - 100;
    const maxHeigh = Math.random() * window.innerHeight;

    newPosition[index] = { left: maxWidth, top: maxHeigh };

    setPosition(newPosition);
  };

  return (
    <>
      <div className="min-h-[60vh] relative " id="na">
        <div>
          <h1 className="font-sans mt-52 text-center text-sm font-semibold uppercase">
            opps, we did it again
          </h1>
        </div>
        <div className="uppercase text-[11vw] text-center font-extralight tracking-tighter">
          <h1 className="">The Never</h1>
          <h1 className="leading-7">ending strem</h1>
        </div>
        <div>
          {position.map((pos, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              style={{
               position: "absolute",
                left: `${pos.left}px`,
                top: `${pos.top}px`,
                transition: "left 0.5s ease, top 0.5s ease",
                zIndex: 20,
              }}
            >
              <img src={images[index]} alt="" className=" object-cover" />
            </div>
          ))}
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Img;
