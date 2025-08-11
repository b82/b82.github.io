export default function Conclusions({ title, description, sectionMarginTop, video, video_poster }: { title: string, description: React.ReactNode, sectionMarginTop: string, video: string, video_poster: string }) {
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <div className="divider black h-[3px] w-[140px] justify-self-center"></div>
            <h2 className="text-[24px] md:text-[40px] font-medium text-center">{title}</h2>
            <div className="grid grid-cols-1 md:gap-10">
                {/* <div className="md:col-span-1"></div> */}
                <div className='text-[16px] md:text-[20px] font-light'>
                    <p>{description}</p>
                </div>
                {/* <div className="md:col-span-1"></div> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 md:gap-10">
                <div className="md:col-span-2"></div>
                <div className='col-span-2 text-[16px] md:text-[20px] font-light'>
                    <video className="mt-10" controls playsInline preload="auto" width="100%" poster={video_poster}>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="md:col-span-2"></div>
            </div>
        </div>
    )
}