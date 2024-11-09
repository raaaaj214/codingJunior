
import firstPng from "../assets/1.png";
import secondPng from "../assets/2.png";
import thirdPng from "../assets/3.png";
import designPng from "../assets/design2.png"


const Mentors = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center px-3 py-12 pt-20 gap-6 md:gap-10 lg:gap-16">
      <div className="relative flex flex-col justify-center items-center px-2 gap-4">
        <img src={designPng} className="absolute -bottom-8  lg:-bottom-20  -left-10 -z-10 w-2/6" alt="" />
        <h1 className="text-gray-600 text-xl md:text-2xl lg:text-2xl text-center font-medium">We know just education is not enough anymore</h1>
        <h1 className="text-gray-600 text-3xl md:text-3xl lg:text-4xl text-center font-medium">
        So We’ve Got The<span className="text-[#008D8F]"> Best Mentors </span> For You. 
        </h1>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full xl:w-5/6">
        <img src={firstPng} alt="" />
        <img src={secondPng} alt="" />
        <img src={thirdPng} alt="" />
      </div>
    </div>
  );
};

export default Mentors;
