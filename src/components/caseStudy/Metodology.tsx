export default function Metodology({ description }: { description: React.ReactNode }) {
    const title = 'Metodology'
    return (
        <div>
            <h3 className="mt-10 sm:mt-0 text-[24px] md:text-[40px] font-medium text-left">{title}</h3>
            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                {description}
            </p>
        </div>
    )
}