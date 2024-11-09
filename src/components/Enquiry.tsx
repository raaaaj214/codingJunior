
import ProgrammerPng from "../assets/e79f2bfe6b104a28539394f367c88f0c.jpeg"
import Ornament108 from "../assets/Ornament 108.jpg"
import Ornament110 from "../assets/Ornament 110.jpg"


const Enquiry = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex justify-center items-center px-3 py-12 h-full'>
        <div className='relative flex flex-col justify-end items-start border border-gray-300 p-3 rounded-lg gap-7
         shadow-md md:flex-row h-full md:p-7 md:gap-10'>
             <img src={Ornament108} alt="" className='absolute right-5 top-5 -z-10 w-20 '/>
             <img src={Ornament110} alt="" className='absolute left-12 -top-16 -z-10 w-20 '/>
            <img src={ProgrammerPng} alt="" className='rounded-md md:w-1/2 md:h-[500px] object-cover object-right' />
            <div className='flex flex-col justify-center items-start w-full gap-5 lg:gap-10'>
                <h1 className='text-2xl font-medium text-[#2B95ED] lg:text-4xl md:w-2/3'>Find Out More Reasons To Stay</h1>
                <form action="" className='w-full grid gap-5 lg:gap-7'>
                    <input type="text" name='full-name' placeholder='Full Name' className='outline-none border border-gray-300 rounded-lg px-2 py-2 w-full lg:p-3'/>
                    <input type="text" name='mobile-no' placeholder='Mobile no.' className='outline-none border border-gray-300 rounded-lg px-2 py-2 w-full  lg:p-3'/>
                    <input type="text" name='city' placeholder='City' className='outline-none border border-gray-300 rounded-lg px-2 py-2 w-full  lg:p-3'/>
                    <div className='flex justify-start items-start gap-2'>
                    <input type="checkbox" name="t&c" value="true" id="" required className='size-4v'/>
                    <span className='text-xs text-gray-600'>
                    Creating an account means you’re okay with our Terms of Service, Privacy Policy, and default Notification Settings
                    </span>
                    </div>
                    <div className='flex justify-center items-center'>
                    <button className='w-1/2 bg-[#2B95ED] text-white font-medium py-2 px-4 flex justify-center items-center rounded-lg'>Enquire Now</button>
                    </div>
                </form>
                <div className='w-full flex justify-center items-center text-gray-600'>
                <p className='text-center text-sm'>Already Have An Account?
                <a href="" className='underline '> Sign in</a>
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Enquiry