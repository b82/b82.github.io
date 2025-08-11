export default function Overview({ title, description }: { title: string, description: React.ReactNode }) {
    return (
        <div className="mt-10 grid grid-cols-1 gap-5 text-center">
            <h1 className="text-[32px] md:text-[48px] font-medium text-center leading-[1.2]">{title}</h1>
            <h2 className="text-[24px] md:text-[40px] font-medium text-center">Overview</h2>
            <p className="md:mb-20 text-[16px] md:text-[20px] font-light">
                {description}
            </p>
        </div>
    )
}