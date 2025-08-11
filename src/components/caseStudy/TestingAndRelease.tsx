export default function TestingAndRelease({ title, description, sectionMarginTop, image, workTitle }: { title: string, description: React.ReactNode, sectionMarginTop: string, image: string, workTitle: string }) {
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <div className="grid sm:grid-cols-2 md:gap-30">
                <div>
                    <h3 className="text-[24px] md:text-[40px] font-medium text-left">{title}</h3>
                    <div className='col-span-1 text-[16px] md:text-[20px] font-light'>
                        {description}
                    </div>
                </div>
                <img src={image} alt={workTitle} className="hidden md:block rounded-lg h-[300px] md:justify-self-end" />
            </div>
        </div>
    )
}