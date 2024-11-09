
import PhonePng from "../assets/phone.png"
import GlyphPng from "../assets/Glyph.png"
import quizPng from "../assets/Group 1261152815.png"
import pagePng from "../assets/Page-1.png"
import reportPng from "../assets/Vector.png"
import keyboardPng from "../assets/Vector (1).png"
import infinitePng from "../assets/Group.png"
import cloudPng from "../assets/Vector (2).png"
import magazinePng from "../assets/Magazine.png"
import downloadPng from "../assets/download.png"
import designPng from "../assets/design.png"

const Promotion = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-3 py-12'>
      <img src={PhonePng} alt="" className='md:w-2/5 lg:w-2/6  '/>
      <div className='flex flex-col justify-start items-start gap-8 xl:w-2/5'>
        <h1  className='text-3xl xl:text-4xl font-medium text-gray-600'>
        Wanna see more?  <br/>
        Join us !
        </h1>
        <div className='flex flex-col md:flex-row justify-start items-start gap-8'>
          <div className='flex flex-col justify-center items-start gap-8'>
            <div className='flex justify-start items-center gap-3'>
              <img src={GlyphPng} alt="" className='w-10' />
              <p className=' text-gray-600'>Recorded Lectures</p>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <img src={quizPng} alt="" className='w-10' />
              <p className=' text-gray-600'>Online Quizzes</p>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <img src={pagePng} alt="" className='w-10' />
              <p className=' text-gray-600'>In-app Coding</p>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <img src={reportPng} alt="" className='w-10' />
              <p className=' text-gray-600'>Evaluation Reports</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-start gap-8'>
            <div className='flex justify-start items-center gap-3'>
              <img src={keyboardPng} alt="" className='w-10' />
              <p className=' text-gray-600'>Language-specific keyboard</p>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <img src={infinitePng} alt="" className='w-10' />
              <p className=' text-gray-600'>Infinite Project Size</p>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <img src={cloudPng} alt="" className='w-10' />
              <p className=' text-gray-600'>Cloud Computation</p>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <img src={magazinePng} alt="" className='w-10' />
              <p className=' text-gray-600'>Coding Magazine</p>
            </div>
          </div>
        </div>
        <img src={downloadPng} alt="" />
      </div>
      <img src={designPng} alt="" className='hidden lg:block lg:w-32 xl:w-44' />
    </div>
  )
}

export default Promotion