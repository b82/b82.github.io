export default function UserChallenge({ title, description, sectionMarginTop, image }: { title: string, description: React.ReactNode, sectionMarginTop: string, image: string }) {
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <div className="divider black h-[3px] w-[140px]"></div>
            <div className="grid sm:grid-cols-2 md:gap-30">
                <div className='col-span-1 text-[16px] md:text-[20px] font-light'>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">{title}</h2>
                    {description}
                </div>
                <img src={image} alt={title} className="hidden md:block rounded-lg md:justify-self-end" />
            </div>
        </div>
    )
}