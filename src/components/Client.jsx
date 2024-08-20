import React from "react";
import { LuDot } from "react-icons/lu";
const Client = () => {
  return (
    <div className="min-h-[100vh] bg-[#F8F1DE] text-black">
      <div className="text-[11vw] font-merriweather text-center pt-52">
        <h1 className="">our clients</h1>
        <h1 className="text-2xl uppercase font-sans">
          some recent compannines <br />
          we ha'worked with
        </h1>
        <div className="">
        <div className="text-6xl font-merriweather items-center tracking-tighter flex justify-center mt-16 leading-3">
          <h1 className="font-extralight">WEDNESDAY </h1>
          <LuDot className="text-[#FF6432]" />
          <h1 className="font-light">TEAM LIFELINE </h1>
          <LuDot className="text-[#FF6432]" />
          <h1 className="font-light">KODAK</h1>
        </div>
        <div className="text-6xl font-merriweather  flex justify-center mt-16 items-center leading-3 tracking-tighter">
          <h1 className="font-extralight">FLEISHIGS </h1>
          <LuDot className="text-[#FF6432]" />
          <h1 className="font-light">SEVENSTONE</h1>
          <LuDot className="text-[#FF6432]" />
          <h1 className="font-light">FURER SCHAEFER</h1>
        </div>
        <div className="text-6xl font-merriweather flex justify-center mt-16 items-center leading-3 tracking-tighter">
          <h1 className="font-extralight">AWS</h1>
          <LuDot className="text-[#FF6432]" />
          <h1 className="font-light">GOODWILL </h1>
          <LuDot className="text-[#FF6432]" />
          <h1 className="font-light">MEALMART</h1>
        </div>
        </div>
      </div>
      <div className="text-[11vw] mt-32 text-center">
        <h1>future clients</h1>
        <h1 className="text-2xl uppercase font-sans">
           companines we are going to <br />
           work with
        </h1>
      </div>
    </div>
  );
};

export default Client;
