export default function ChallengesAndDecisions(
    { description, sectionMarginTop, whiteBoxMarginTop, whiteBoxDescription }:
        { description: React.ReactNode, sectionMarginTop: string, whiteBoxMarginTop: string, whiteBoxDescription: React.ReactNode }) {
    const title = 'Key UX Challenges & Design Decisions'
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <div className="divider black h-[3px] w-[140px]"></div>
            <h2 className="text-[24px] md:text-[40px] font-medium text-left">{title}</h2>
            <div className="grid sm:grid-cols-2 md:gap-30">
                <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                    {description}
                </p>
                <div className={`${whiteBoxMarginTop} col-span-1 flex items-center justify-center`}>
                    <p className='col-span-1 text-[16px] md:text-[20px] font-light bg-light-grey-2 border-light-grey rounded-[24px] p-10'>
                        {whiteBoxDescription}
                    </p>
                </div>
            </div>
        </div>
    )
}