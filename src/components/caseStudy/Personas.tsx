export default function Personas({ title, description, sectionMarginTop }: { title: string, description: React.ReactNode, sectionMarginTop: string }) {
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <div className="divider black h-[3px] w-[140px]"></div>
            <h2 className="text-[24px] md:text-[40px] font-medium text-left">{title}</h2>
            <div className="grid sm:grid-cols-2 md:gap-30">
                <p className='text-[16px] md:text-[20px] font-light'>
                    {description}
                </p>
            </div>
        </div>
    )
}