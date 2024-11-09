
import GraduationInvitation from "../assets/Graduation Invitation.png"
import AIPng from "../assets/3D Artificial Intelligence Image Generator.png"
import CodingPng from "../assets/image 13.png"
import BookPng from "../assets/Open Book.png"
import RecordedPng from "../assets/Stop Motion Studio.png"
import FlashCardPng from "../assets/Kindle.png"



const Programs = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#2B95ED] to-[#185587]">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-start py-6 lg:py-16 px-5 gap-4 lg:gap-10">
        <h1 className="text-white  text-3xl lg:text-4xl text-left ">What Sets Us Apart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
          <div className="bg-white rounded-md py-4 flex flex-col justify-center items-start">
            <img src={GraduationInvitation} className="w-1/3" alt="" />
            <div className="flex flex-col px-6 gap-1">
            <h1 className="text-[#2B95ED] text-lg font-medium ">Created by IIT-IIM Alumni</h1>
            <p className="text-sm lg:text-base">We’ve learnt from the best and strive to bring you the best.</p>
            </div>
          </div>
          <div className="bg-white rounded-md py-4 flex flex-col justify-center items-start">
            <img src={AIPng} className="w-1/3" alt="" />
            <div className="flex flex-col px-6 gap-1">
            <h1 className="text-[#2B95ED] text-lg font-medium ">A.I. Integration</h1>
            <p className="text-sm lg:text-base">We have harnessed the power of A.I. to enhance and assess your knowledge</p>
            </div>
          </div>
          <div className="relative bg-white rounded-md py-4 flex flex-col justify-center items-start px-6">
            <img src={CodingPng} className="w-1/3" alt="" />
            <div className=" flex flex-col  gap-1">
            <h1 className="text-[#2B95ED] text-lg font-medium ">In-app Coding</h1>
            <p className="text-sm lg:text-base">The app features in-app coding, eliminating the need for laptops</p>
            </div>
          </div>
          <div className="bg-white rounded-md py-4 flex flex-col justify-center items-start px-6">
            <img src={BookPng} className="w-1/3" alt="" />
            <div className="flex flex-col  gap-1">
            <h1 className="text-[#2B95ED] text-lg font-medium ">Extensive E-books</h1>
            <p className="text-sm lg:text-base">Deepen your understanding and mastery of the skills.</p>
            </div>
          </div>
          <div className="bg-white rounded-md py-4 flex flex-col justify-center items-start px-6">
            <img src={RecordedPng} className="w-1/3" alt="" />
            <div className="flex flex-col  gap-1">
            <h1 className="text-[#2B95ED] text-lg font-medium ">Recorded Lectures</h1>
            <p className="text-sm lg:text-base">Access lectures anywhere and anytime at your own pace.</p>
            </div>
          </div>
          <div className="bg-white rounded-md py-4 flex flex-col justify-center items-start">
            <img src={FlashCardPng} className="w-1/3" alt="" />
            <div className="flex flex-col px-6 gap-1">
            <h1 className="text-[#2B95ED] text-lg font-medium ">Flash cards</h1>
            <p className="text-sm lg:text-base">Make learning convenient and fun using flash cards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
