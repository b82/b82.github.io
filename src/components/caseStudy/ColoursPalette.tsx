export default function ColoursPalette({ title, sectionMarginTop, colours }: { title: string, sectionMarginTop: string, colours: { bg: string, text: string }[] }) {
    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <h2 className="text-[24px] md:text-[40px] font-medium text-left">{title}</h2>
            <div className="grid sm:grid-cols-6 gap-0 border-light-grey border-5">
                {colours.map((colour, index) => (
                    <div key={index} className={`bg-[${colour.bg}] h-[60px] flex items-center justify-center`}>
                        <p className={`text-[20px] font-semibold ${colour.text}`}>{colour.bg}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}