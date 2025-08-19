export default function Personas({ description, sectionMarginTop }: { description: React.ReactNode, sectionMarginTop: string }) {
    const title = 'Personas'
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <div className="divider black h-[3px] w-[140px]"></div>
            <h2 className="text-[24px] md:text-[40px] font-medium text-left">{title}</h2>
            <p className='text-[16px] md:text-[20px] font-light'>
                {description}
            </p>
        </div>
    )
}