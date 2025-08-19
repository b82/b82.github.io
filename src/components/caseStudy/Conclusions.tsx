export default function Conclusions({ description, sectionMarginTop }: { description: React.ReactNode, sectionMarginTop: string }) {
    const title = 'Conclusions'
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
        </div>
    )
}