
import EmblaCarousel from './EmblaCarousel'
import iconPng from "../assets/Programmer working all night.png"
import javaPng from "../assets/Java.png"
import nodeJsPng from "../assets/NodeJS.png"
import reactPng from "../assets/React.png"
import flutterPng from "../assets/Flutter.png"

const OPTIONS = { dragFree: true, loop: true }
const SLIDES = [
  {
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name : "Saanvi Patel",
    title : "Executive Engineer",
    icon : iconPng
  },
  {
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name : "Saanvi Patel",
    title : "Executive Engineer",
    icon : iconPng
  },
  {
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name : "Saanvi Patel",
    title : "Executive Engineer",
    icon : iconPng
  },
  {
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name : "Saanvi Patel",
    title : "Executive Engineer",
    icon : iconPng
  },
  {
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name : "Saanvi Patel",
    title : "Executive Engineer",
    icon : iconPng
  },
  {
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name : "Saanvi Patel",
    title : "Executive Engineer",
    icon : iconPng
  },
]
const Testimonials = () => {
  return (
    <div className='relative bg-gradient-to-b from-[#0196F9] via-[#2B95ED] to-[#14CBD5B2]  w-full flex justify-center items-center py-24'>
      <img src={javaPng} className='w-20 absolute top-0 left-0 hidden md:block' alt="" />
      <img src={nodeJsPng} className='w-20 absolute bottom-20 left-40 ' alt="" />
      <img src={reactPng} className='w-20 absolute bottom-20 right-80 ' alt="" />
      <img src={flutterPng} className='w-20 absolute bottom-0 right-40 ' alt="" />
    <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center px-3 gap-6 md:gap-10 lg:gap-16">
      <h1 className='z-10 text-white text-2xl md:text-3xl lg:text-4xl text-center font-medium'>And Our Students Agree...</h1>
      <EmblaCarousel   slides={SLIDES} options={OPTIONS}  />
      </div>
      </div>
  )
}

export default Testimonials