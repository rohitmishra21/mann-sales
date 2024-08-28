import React from "react";
import "../index.css";
import Arrow from "./Arrow";


const Black = () => {

  return (
    <div className="min-h-[140vh] bg-black">
      <div className="w-full flex ">
        <div className="font-inter w-[50%] px-32 text-5xl mt-40">
          <h1 className="text-[#FF6432] ">
            “Creativity is the last unfair advantage we’re legally allowed to
            take over our competitors{" "}
            <span className="text-2xl">- Bill Bernbech </span>”
          </h1>
          <h1 className="text-end text-[#FF6432] ">- Jack Levinsn</h1>
          <p className="text-2xl font-semibold mt-10">
            To be honest, we'll do any work that allows us to add creativity to
            it. But if you like lists, here's a list.
          </p>
        </div>
        <div className="w-1/2 h-screen mt-40 flex flex-col gap-5">
           <div className="flex gap-7">
           <Arrow/>
           <h1 className="font-merriweather text-6xl leading-normal font-light ">
                Strategy
              </h1>
           </div>
           <div className="flex gap-7">
           <Arrow/>
           <h1 className="font-merriweather text-6xl leading-normal font-light ">
                Design(url & irl)
              </h1>
           </div>
           <div className="flex gap-7">
           <Arrow/>
           <h1 className="font-merriweather text-6xl leading-normal font-light ">
                Branding
              </h1>
           </div>
           <div className="flex gap-7">
           <Arrow/>
           <h1 className="font-merriweather text-6xl leading-normal font-light ">
                Experience
              </h1>
           </div>
           <div className="flex gap-7">
           <Arrow/>
           <h1 className="font-merriweather text-6xl leading-normal font-light ">
                Packaging
              </h1>
           </div>
           <div className="flex gap-7">
           <Arrow/>
           <h1 className="font-merriweather text-6xl leading-normal font-light ">
                Parformance
              </h1>
           </div>
           <div className="flex gap-7">
           <Arrow/>
           <h1 className="font-merriweather text-6xl leading-normal font-light ">
                Comunication
              </h1>
           </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Black;
