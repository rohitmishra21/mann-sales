import React from "react";
import { LuDot } from "react-icons/lu";
const Col = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-[#F8F1DE] text-black px-16 pt-10 hidden xl:block md:block">
        <div className="big-box w-full h-[100vh]  grid grid-cols-8">
          <div className=" border-r-2 border-l-2  border-[#ECE6D4] h-screen bg-[#F8F1DE] hover:translate-y-10 transition-all">
            <div className="text-center py-8 border-b-2 border-[#ECE6D4]">
              <h1 className="text-2xl ">cadillac</h1>
            </div>
            <div className="h-[60vh]  flex flex-col justify-center">
              <div className="h-[80vh]  flex flex-col justify-end ">
                <div className="-rotate-90 text-[3vw] translate-y-full ">
                  <h1 className="w-96 ">
                    CADILLACd <span className="text-[#FF6432] px-5 ">.</span>01{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" border-r-2  border-[#ECE6D4]">
            <div className="text-center py-8 border-b-2 border-[#ECE6D4] ">
              <h1 className="text-2xl ">amazon</h1>
            </div>
            <div className="h-[82vh]  flex flex-col justify-center bg-[#FF6432] mt-9"></div>
          </div>
          <div className="border-r-2 border-[#ECE6D4] h-screen bg-[#F8F1DE] hover:translate-y-10 transition-all">
            <div className="text-center py-8 border-b-2 border-[#ECE6D4]">
              <h1 className="text-2xl ">pepsi</h1>
            </div>
            <div className="h-[60vh]  flex flex-col justify-center ">
              <div className="h-[80vh]  flex flex-col justify-end ">
                <div className="-rotate-90 text-[3vw] translate-y-full ">
                  <h1 className="w-96 uppercase font-light ">
                    pepsi <span className="text-[#FF6432] px-5 ">.</span>03
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="border-r-2 border-[#ECE6D4] h-screen bg-[#F8F1DE] hover:translate-y-10 transition-all">
            <div className="text-center py-8  border-b-2 border-[#ECE6D4]">
              <h1 className="text-2xl ">7- eleven</h1>
            </div>
            <div className="h-[60vh]  flex flex-col justify-center ">
              <div className="h-[80vh]  flex flex-col justify-end ">
                <div className="-rotate-90 text-[3vw] translate-y-full ">
                  <h1 className="w-96 ">
                    7- eleven <span className="text-[#FF6432] px-5 ">.</span>04
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border-r-2 border-[#ECE6D4] h-screen bg-[#F8F1DE] hover:translate-y-10 transition-all">
            <div className="text-center py-8 border-b-2 border-[#ECE6D4]">
              <h1 className="text-2xl ">zillow</h1>
            </div>
            <div className="h-[60vh]  flex flex-col justify-center ">
              <div className="h-[80vh]  flex flex-col justify-end ">
                <div className="-rotate-90 text-[3vw] translate-y-full ">
                  <h1 className="w-96 ">
                    zillow <span className="text-[#FF6432] px-5 ">.</span>05
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border-r-2 border-[#ECE6D4] h-screen bg-[#F8F1DE] hover:translate-y-10 transition-all">
            <div className="text-center py-8  border-b-2 border-[#ECE6D4]">
              <h1 className="text-2xl ">pinterest</h1>
            </div>
            <div className="h-[60vh]  flex flex-col justify-center ">
              <div className="h-[80vh]  flex flex-col justify-end ">
                <div className="-rotate-90 text-[3vw] translate-y-full ">
                  <h1 className="w-96 ">
                    pinterest <span className="text-[#FF6432] px-5 ">.</span>06
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border-r-2 border-[#ECE6D4] h-screen ">
            <div className="text-center py-8  border-b-2 border-[#ECE6D4]">
              <h1 className="text-2xl ">goodwill</h1>
            </div>
            <div className="h-[82vh]  flex flex-col justify-center bg-[#FF6432] mt-9"></div>
            <div className="h-[60vh]  flex flex-col justify-center ">
              <div className="h-[80vh]  flex flex-col justify-end">
                <div className="-rotate-90 text-[3vw] translate-y-full ">
                  <h1 className="w-96 "></h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border-r-2 border-[#ECE6D4] h-screen bg-[#F8F1DE] hover:translate-y-10 transition-all ">
            <div className="text-center py-8  border-b-2 border-[#ECE6D4]">
              <h1 className="text-2xl ">airbnb</h1>
            </div>
            <div className="h-[60vh]  flex flex-col justify-center ">
              <div className="h-[80vh]  flex flex-col justify-end ">
                <div className="-rotate-90 text-[3vw] translate-y-full ">
                  <h1 className="w-96 ">
                    airbnb <span className="text-[#FF6432] px-5 ">.</span>08
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Col;
