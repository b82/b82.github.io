import calendar_icon from '/images/studygroup/calendar_icon.png'
import pin_icon from '/images/studygroup/pin_icon.png'
import heart_icon from '/images/studygroup/heart_icon.png'

export default function PersonasCard(
    { name, age, location, image, job, status, goals, behaviours, painPoints, personality }:
        { name: string, age: string, location: string, image: string, job: string, status: string, goals: string, behaviours: string, painPoints: string, personality: string }
) {
    return (
        <div className="mt-15 gap-0 border-light-grey bg-light-grey-2 rounded-[24px] grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 md:gap-10">
            <div className="dark-grey-2 pb-10 sm:rounded-l-[24px] rounded-t-[24px] sm:rounded-t-none grid grid-cols-1 xl:grid-cols-2 md:col-span-1 text-white text-center">
                <div className="font-light text-center flex flex-col items-center justify-center pl-3 pr-3 sm:pl-5 sm:pr-5 xl:pl-10 xl:pr-0">
                    <img className="sm:mt-0 mt-10 block rounded-lg w-[200px] sm:w-full" src={image} alt={name} />
                    <p className='mt-5 xl:text-[38px] text-[28px] font-extralight'>{name}</p>
                    <p className='xl:mt-[-8px] xl:text-[20px] text-[14px] font-regular'>{job}</p>
                </div>
                <div className="pt-10 sm:pt-0 xl:text-[16px] font-light flex flex-col items-center justify-center">
                    <p className='xl:text-[20px] font-semibold'>Demographic</p>
                    <p><img src={calendar_icon} alt={name} className="inline-block mr-2" />{age} years old</p>
                    <p><img src={pin_icon} alt={location} className="inline-block mr-2" />{location}</p>
                    <p><img src={heart_icon} alt={status} className="inline-block mr-2" />{status}</p>
                </div>

            </div>
            <div className="p-10 sm:p-0 col-span-1 xl:col-span-2 md:col-span-3 xl:flex xl:items-start xl:justify-center sm:pl-0 md:pl-0 md:p-10">
                <div className="mr-10">
                    <div className="mb-10">
                        <p className="text-[16px] sm:text-[20px] font-bold">Goals</p>
                        <p className="text-[16px] sm:text-[20px] font-light">
                            {goals}
                        </p>
                    </div>
                    <div className="mb-10">
                        <p className="text-[16px] sm:text-[20px] font-bold">Behaviours</p>
                        <p className="text-[16px] sm:text-[20px] font-light">
                            {behaviours}
                        </p>
                    </div>
                </div>
                <div>
                    <div className="mb-10">
                        <p className="text-[16px] sm:text-[20px] font-bold">Pain Points</p>
                        <p className="text-[16px] sm:text-[20px] font-light">
                            {painPoints}
                        </p>
                    </div>
                    <div>
                        <p className="text-[16px] sm:text-[20px] font-bold">Personality</p>
                        <p className="text-[16px] sm:text-[20px] font-light">
                            {personality}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}