export default function Process({ description, sectionMarginTop, image }: { description: React.ReactNode, sectionMarginTop: string, image: string }) {
    const title = 'Process'
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <h2 className="text-[24px] md:text-[40px] font-medium text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 md:gap-10">
                <img src={image} alt={title} className="block rounded-lg md:justify-self-end" />
                <p className='mt-5 sm:mt-0 col-span-1 text-[16px] md:text-[20px] font-light text-center'>
                    {description}
                </p>
            </div>
        </div>
    )
}