export default function Goal({ description, video, video_poster, sectionMarginTop }: { description: React.ReactNode, video: string, video_poster: string, sectionMarginTop: string }) {
    const title = 'The Goal'
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <div className="divider black h-[3px] w-[140px]"></div>
            <div className="grid sm:grid-cols-2 md:gap-30">
                <div className='col-span-1 text-[16px] md:text-[20px] font-light'>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">{title}</h2>
                    {description}
                </div>
                <video className="mt-10" controls playsInline preload="auto" width="100%" poster={video_poster}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}