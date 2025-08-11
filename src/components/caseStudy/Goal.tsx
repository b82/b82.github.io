import context from '/images/studygroup/context.png'

export default function Goal({ title, description }: { title: string, description: React.ReactNode }) {
    return (
        <div className={`sm:mt-5 mt-15 grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                <div className='col-span-1 text-[16px] md:text-[20px] font-light'>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">{title}</h2>
                    {description}
                </div>
                <img src={context} alt={title} className="hidden md:block rounded-lg md:justify-self-end" />
            </div>
        </div>
    )
}