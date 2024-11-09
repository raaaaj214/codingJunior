
import logoPng from '../assets/logo-light-removebg-preview 3.png'

const Navbar = () => {
  return (
    <>
    <div className='bg-[#CEFEFF] w-full flex justify-center items-center py-3'>
        <span className='text-sm font-medium text-center'>
        Learn coding at the nearby
        <span className='text-[#1C408E]'> Coding Pro </span>
            Institute. 
            <a href="#" className='text-[#1C408E] underline underline-offset-4'>
            Enquire now
            </a>
            </span>
    </div>
    <div className='w-full  justify-evenly items-center gap-10 py-2 hidden lg:flex'>
    <img src={logoPng} alt="" className='w-60' />
    <div className='flex justify-center items-center gap-20 '>
        <a href={"#"}>About Us</a>
        <a href={"#"}>Virtual Labs</a>
        <a href={"#"}>Programs</a>
        <a href={"#"}>For Colleges</a>
    </div>
    <div className='flex justify-center items-center gap-4'>
        <button className='border-2 rounded-lg border-[#2B95ED] text-[#2B95ED] font-medium py-1 px-4 '>Log in</button>
        <button className='rounded-lg bg-[#2B95ED] text-white font-medium py-2 px-4 '>Register</button>
    </div>
    </div>
    </>
  )
}

export default Navbar