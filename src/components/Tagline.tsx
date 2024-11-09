
import Ornament117 from "../assets/Ornament 117.jpg"
import Ornament119 from "../assets/Ornament 119.jpg"
import bigDesignPng from "../assets/img.png"

const Tagline = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-12'>
    <div className='flex py-10 justify-center items-center'>
        <img src={Ornament117} className='hidden md:block w-20' alt="" />
        <h1 className="lg:w-3/6 text-gray-600 text-xl md:text-2xl lg:text-4xl text-center font-medium">
        Our Efforts To
        <span className="text-[#008D8F]"> Innovate </span>
             Have Been 
             <span className="text-[#008D8F]"> Recognized </span>
              And 
              <span className="text-[#008D8F]"> Appreciated </span>
        </h1>
        <img src={Ornament119} className='hidden md:block w-20' alt="" />
    </div>
    <div>
      <img src={bigDesignPng} alt="" />
    </div>
    </div>
  )
}

export default Tagline