
import Ornament114 from "../assets/Ornament 114.jpg";
import Ornament116 from "../assets/Ornament 116.jpg";
import Timeline from "./Timeline";
import groupPng from "../assets/width_1230.webp"
import bottomPng from "../assets/1731174855707.png"
import Ornament122 from "../assets/Ornament 122.jpg"

const Journey = () => {
  return (
    <>
    <div className="relative flex py-10 justify-center items-center px-3">
      <img src={Ornament122} className="absolute hidden  lg:block top-0  right-20 w-20" alt="" />
      <img src={Ornament116} className="hidden md:block w-20" alt="" />
      <h1 className="relative lg:w-2/5 text-gray-600 text-xl md:text-2xl lg:text-4xl text-center font-medium">
        Because We Offer What You Need at 
        <span className="text-[#008D8F]"> Every Step </span>
         Of Your
         <span className="text-[#008D8F]"> Transformative
        Learning Journey</span>
      <img src={Ornament114} className="absolute -bottom-10 right-24 w-28" alt="" />
      </h1>
    </div>
    <div className="w-full flex flex-col justify-center items-center">
      <img src={groupPng} className="w-full md:w-1/2 lg:w-1/3 lg:-mb-16 z-40" alt="" />
        <Timeline />
      <img src={bottomPng}  className="w-full z-40" alt="" />

    </div>
    </>
  );
};

export default Journey;
