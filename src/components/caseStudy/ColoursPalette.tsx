export default function ColoursPalette({ sectionMarginTop, colours }: { sectionMarginTop: string, colours: { bg: string, text: string }[] }) {
    const title = 'Colours Palette'

    return (
        <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
            <h3 className="text-[24px] md:text-[30px] font-medium text-left">{title}</h3>
            <div className="grid sm:grid-cols-6 gap-0 border-light-grey border-5">
                {colours.map((colour, index) => (
                    <div key={index} className="h-[60px] flex items-center justify-center" style={{ backgroundColor: colour.bg }}>
                        <p className={`text-[20px] font-semibold ${colour.text}`}>{colour.bg}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}