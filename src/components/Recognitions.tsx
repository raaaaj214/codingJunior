
import firstPng from "../assets/Image with removed background (15) 1.png"
import secondPng from "../assets/India NSDC Logo 1.png"
import thirdPng from "../assets/Startup India Entrepreneurship 1.png"

const Features = () => {
  return (
    <div className='w-full bg-[#C5E5FF33] flex flex-col justify-center items-center gap-4 py-6 px-2 '>
        <h1 className='text-gray-600 text-lg'>RECOGNISED BY</h1>
        <div className='grid md:grid-cols-3 gap-5 divide-y-2 md:divide-y-0 md:divide-x-2'>
        <div className='w-full flex justify-center items-center '>
            <img src={firstPng} className='w-2/3 lg:w-2/4' alt="" />
        </div>
        <div className='w-full flex justify-center items-center '>
            <img src={secondPng} className='w-2/3 lg:w-2/4' alt="" />
        </div>
        <div className='w-full flex justify-center items-center '>
            <img src={thirdPng} className='w-2/3 lg:w-2/4' alt="" />
        </div>
        </div>
    </div>
  )
}

export default Features