
import TimelineAxis from './TimelineAxis';
import TimelineContent from './TimelineContent';
import bagPng from "../assets/bag.png"
import groupPng from "../assets/_Group_.png"
import pcPng from "../assets/pc.png"
import resumePng from "../assets/Resume.png"
import onlinePng from "../assets/Online.png"
import degreePng from "../assets/Degree.png"

const timelineData = [
  {
    title: "Custom Specialization",
    description: "We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals.",
    icon: degreePng,
  },
  {
    title: "Virtual Labs",
    description: "We provide our students with the convenience of accessing a fully equipped lab from anywhere just with an internet connection.",
    icon: onlinePng,
  },
  {
    title: "AI Tests",
    description: "We understand that teaching alone isn’t enough, so we provide our students with AI-powered tests to assess their progress.",
    icon: groupPng,
  },
  {
    title: "Resume Builder",
    description: "We not only support skill development but also leverage AI to highlight those skills effectively on your resume to help you stand out from the crowd.",
    icon: resumePng,
  },
  {
    title: "Placement Preparation",
    description: "We go beyond building skills, taking our students to the next level by providing them with thorough placement preparation.",
    icon: bagPng,
  },
  {
    title: "AI Interviews",
    description: "Interviews can be challenging, so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared.",
    icon: pcPng,
  },
];

const Timeline = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen   py-10">
      <div className="w-full flex flex-col justify-center items-center gap-10 lg:gap-0 lg:block">

        {timelineData.map((item, index) => (
          <div key={index} className="relative flex md:flex-row flex-col items-center gap-20 xl:gap-28">
            {/* Left Card */}
            {index % 2 === 0 ? (
              <TimelineContent data={item} index={index+1} direction="left"/>
            ) : <div className='hidden lg:flex w-2/5'></div>}

            {/* Line and Icon */}
            <div className="hidden lg:flex relative flex-col items-center">
              <div className="hidden lg:flex absolute z-30 top-[calc(50%-1.5rem)] bg-blue-500 text-white text-lg rounded-full h-10 w-10 items-center justify-center">
          
              </div>
              {index < timelineData.length && (
               <TimelineAxis/>
              )}
            </div>

            {/* Right Card */}
            {index % 2 !== 0 && (
              <TimelineContent data={item} index={index+1} direction="right"/>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
