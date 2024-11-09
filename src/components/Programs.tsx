
import Ornament115 from "../assets/Ornament 115.jpg";
import Ornament86 from "../assets/Ornament 86 (1).jpg";
import CTPng from "../assets/image.png";
import PTPng from "../assets/image 112.png";
import { ChevronRight } from "lucide-react";
import bgPng from "../assets/sl_031420_28950_12 3.png";

const Programs = () => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-16 px-5 gap-14 lg:gap-24">
        <img src={bgPng} className="z-[-100] absolute w-full md:w-2/5 lg:w-1/4 left-0 top-24" alt="" />
        <img src={Ornament115} alt="" className="absolute z-[-1] w-24 top-10 left-6 md:top-6 lg:top-10 lg:left-44 xl:left-60" />
        <h1 className="lg:w-2/3 text-gray-600 text-xl md:text-2xl lg:text-3xl text-center font-medium">Check Out Our
        <span className="text-[#008D8F]"> Holistic Programs </span>
            Designed 
        To Help You Reach Your 
        <span className="text-[#008D8F]"> Goals</span>

        </h1>
        <div className="flex flex-col justify-center items-center gap-6 lg:w-2/3">
            <div className="relative bg-white flex flex-col md:flex-row p-4 border rounded-lg justify-center items-center shadow-lg gap-4">
                <img src={Ornament86} className="absolute -top-6 -right-10 z-[-1] w-32" alt="" />
                <img src={CTPng} alt="" className="w-full md:w-2/5"/>
                <div className="space-y-3">
                    <h1 className="font-bold">Campus Training</h1>
                    <p className="text-gray-600 text-sm">For students| 24+ Modules | 10 instructors</p>
                    <p className="text-gray-600 text-sm">The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.</p>
                    <div className="flex justify-end items-center">
                        <button className="bg-[#2B95ED] text-white font-medium py-2 px-4 flex justify-center ic rounded-lg">Explore 
                            <ChevronRight />
                        </button>
                    </div>
                </div>
                </div>
            <div className="relative bg-white  flex flex-col md:flex-row p-4 border rounded-lg justify-center items-center shadow-lg gap-4">
            <img src={Ornament86} className="absolute -bottom-6 -right-10 z-[-1] w-32" alt="" />
                <img src={PTPng} alt="" className="w-full md:w-2/5"/>
                <div className="space-y-3">
                    <h1 className="font-bold">Professional Training</h1>
                    <p className="text-gray-600 text-sm">For Professionals | 24+ Modules | 10 instructors</p>
                    <p className="text-gray-600 text-sm">The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.</p>
                    <div className="flex justify-end items-center">
                        <button className="bg-[#2B95ED] text-white font-medium py-2 px-4 flex justify-center ic rounded-lg">Explore 
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Programs;
