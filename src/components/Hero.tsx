
import iMacPng from '../assets/iMac mockup 2.png'
import { ChevronRight } from 'lucide-react'
import universityPng from "../assets/University.png"
import officePng from "../assets/Office.png"
import locationPng from "../assets/Location.png"
import notesPng from "../assets/Notes.png"
import graduationPng from "../assets/Graduation Cap.png"
import university2Png from "../assets/University-1.png"
import ornamentPng from "../assets/Ornament 107.jpg"
import poly1 from "../assets/Polygon 4 (1).png"
import poly2 from "../assets/Polygon 5 (1).png"
const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-12 gap-10'>
        <div className='flex flex-col justify-center items-center px-2 gap-6 xl:gap-10 md:flex-row'>
            <img src={iMacPng} alt="" className='w-full md:w-2/5  xl:w-2/5' />
            <div className='w-full flex flex-col justify-center items-center gap-5  '>
                <h1 className='relative text-[#4C5856] font-extrabold text-4xl md:text-5xl xl:text-6xl'>
                Where The World Learns To Code
                <img src={poly1} className='absolute bottom-4 right-28 w-6' alt="" />
                </h1>
                <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
                    <div className='relative flex flex-col justify-center items-center border-2 rounded-lg border-[#2B95ED] text-[#2B95ED] font-medium py-4 px-4 gap-3 shadow-lg '>
                        <img src={universityPng} className='w-10' alt="" />
                        <h3 className='text-[#1C408E]'>Campus Training</h3>
                        <p className='text-gray-600 text-xs text-center'>Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum dolor </p>
                        <button className='bg-[#2B95ED] text-white font-medium py-2 px-4 flex justify-center ic
                         rounded-lg'>Explore
                            <ChevronRight />
                        </button>
                    </div>
                    <div className='relative flex flex-col justify-center items-center border-2 rounded-lg border-[#2B95ED] text-[#2B95ED] font-medium py-4 px-4 gap-3 shadow-lg '>
                <img src={poly2} className='absolute -top-6 -right-4 w-6' alt="" />
                        <img src={officePng} className='w-10' alt="" />
                        <h3 className='text-[#1C408E]'>Professional Training</h3>
                        <p className='text-gray-600 text-xs text-center'>Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum </p>
                        <button className='bg-[#2B95ED] text-white font-medium py-2 px-4 flex justify-center ic
                         rounded-lg'>Explore
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full  px-2 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            <div className='w-full flex justify-center items-center px-10 rounded-lg py-2 border-2 border-[#2B95ED] gap-2'>
                <img src={locationPng} className='size-28' alt="" />
                <div className='text-[#2B95ED]'>
                    <h4 className='text-2xl font-bold'>50+</h4>
                    <p className='text-2xl font-bold'>Cities</p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center px-10 rounded-lg py-2 border-2 border-[#2B95ED] gap-2'>
                <img src={notesPng} className='size-28' alt="" />
                <div className='text-[#2B95ED]'>
                    <h4 className='text-2xl font-bold'>80+</h4>
                    <p className='text-2xl font-bold'>Modules</p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center px-10 rounded-lg py-2 border-2 border-[#2B95ED] gap-2'>
                <img src={graduationPng} className='size-28' alt="" />
                <div className='text-[#2B95ED]'>
                    <h4 className='text-2xl font-bold'>10K+</h4>
                    <p className='text-2xl font-bold'>Students</p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center px-10 rounded-lg py-2 border-2 border-[#2B95ED] gap-2'>
                <img src={university2Png} className='size-28' alt="" />
                <div className='text-[#2B95ED]'>
                    <h4 className='text-2xl font-bold'>100+</h4>
                    <p className='text-2xl font-bold'>Institutes</p>
                </div>
            </div>
           
           
        </div>
        <span className='w-full flex justify-end px-5'>
        <img src={ornamentPng} className='w-full opacity-80 md:w-1/4 lg:w-1/6 xl:w-44' alt="" />
        </span>
    </div>
  )
}

export default Hero