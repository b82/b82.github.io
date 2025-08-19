export default function WhiteBox2({ description, sectionMarginTop, title }: { description: React.ReactNode, sectionMarginTop: string, title: string }) {
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <div className="grid grid-cols-1 md:grid-cols-8 md:gap-10">
                <div className="md:col-span-1"></div>
                <div className='col-span-6 font-light bg-light-grey-2 border-light-grey rounded-[24px] p-10'>
                    <p className='font-regular text-[20px] md:text-[40px] text-center mb-5'>{title}</p>
                    <p className='col-span-6 text-[16px] md:text-[20px] font-light'>
                        {description}
                    </p>
                </div>
                <div className="md:col-span-1"></div>
            </div>
        </div>
    )
}