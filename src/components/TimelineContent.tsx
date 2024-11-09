
import ArrowTail from './ArrowTail'


interface TimelineContentProps {
    data: {
        title: string,
        description: string,
        icon: string
    },
    index: number,
    direction: "left" | "right"
}
const TimelineContent = ({data,index , direction} : TimelineContentProps) => {
  return (
    <div className={`relative flex flex-col justify-center items-center p-4 w-full lg:w-2/5 border-0 rounded-3xl border-[#1DDDDF] ${direction === "right" ? "lg:border-l-4 " : "lg:border-r-4"}`}>
        <div className={`hidden lg:block absolute ${direction === "right" ? "left-[-6rem]" : "right-[-6rem] "} top-[calc(50%-0.9rem)]`}>
        {
            
            direction === "right" ? (
                <ArrowTail />
            ) : (
                <div className='-rotate-180'>
                    <ArrowTail />
                </div>
            )
        }
        </div>
        {/* Number  */}
        <div className='border border-gray-200/30 rounded-3xl shadow-xl p-5 py-12 relative flex flex-col justify-center items-center gap-5 bg-white'>
        <div className='absolute bg-[#4ABCAE] -top-8 text-white text-3xl size-16 flex justify-center items-center rounded-full'>{index}</div> 
            <span className='w-full flex justify-start  gap-4 items-center'>
                <img src={data.icon} className='w-12' alt="" />
                <h2 className='text-2xl text-black/80'>{data.title}</h2>
            </span>
            <p className='text-sm text-gray-600'>{data.description}</p>
        </div>
    </div>
  )
}

export default TimelineContent