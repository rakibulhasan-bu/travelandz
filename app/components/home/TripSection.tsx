import Image from "next/image";
import dubai from '../../assets/dubai.png'
import petra from '../../assets/petra.png'
import istambul from '../../assets/istambul.png'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function TripSection() {
    return (
        <div className=' px-4 lg:px-0'>
            <div className='pb-14 flex justify-between items-start'>
                <div className='w-full lg:max-w-5xl'>
                    <h2 className="pb-6 text-2xl lg:text-4xl font-bold text-textDark">Discover Unique Destinations with AI Trip Itinerary.</h2>
                    <p className="text-[#3C3C43] lg:text-lg">Explore our AIs handpicked selection of the top 10 unique cities and create lifelong vacations memories using AI trip planner. Use Travelandz AI planner to experience local culture and nature in these breathtaking destinations.</p>

                </div>
                <div className='hidden lg:flex items-center gap-4'>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center bg-primary'>
                        <GoArrowLeft className="text-2xl text-white" />
                    </div>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center border border-primary'>
                        <GoArrowRight className="text-2xl text-primary" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-6'>
                <div className='overflow-hidden h-[450px] lg:h-[540px] w-full rounded-2xl cursor-pointer'>
                    <Image placeholder="blur" src={dubai} height={510} width={412} alt="Dubai" className="w-full h-full hover:-translate-y-16 transition-all duration-500" />
                </div>
                <div className='overflow-hidden h-[450px] lg:h-[540px] w-full rounded-2xl cursor-pointer'>
                    <Image placeholder="blur" src={petra} height={510} width={412} alt="petra" className="w-full hover:-translate-y-16 transition-all duration-500" />
                </div>
                <div className='overflow-hidden h-[450px] lg:h-[540px] w-full rounded-2xl cursor-pointer'>
                    <Image placeholder="blur" src={istambul} height={510} width={412} alt="istambul" className="w-full hover:-translate-y-16 transition-all duration-500" />
                </div>
            </div>
        </div>
    );
};
