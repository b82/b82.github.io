import { Link } from "react-router"

const WorksPreviewItem = ({ title, subtitle, type, description, url, image }: { title: string, subtitle: string, type: string, description: string, url: string, image: string }) => {
    return (
        <>
            <article className="md:col-span-1 text-left">
                <h2 className="text-[24px] md:text-[28px] font-medium">{title}</h2>
                <p className="text-[20px] md:text-[24px] font-regular">{subtitle}</p>
                <span className="text-[18px] md:text-[20px] font-light">{type}</span>
                <p className="mt-5 md:text-[20px] text-[16px] font-light text-black">
                    {description}
                </p>
                <Link to={url} className="works-link mt-5 text-[20px] font-regular text-blue-600 hover:underline mb-8 inline-block dark-grey text-white rounded-full px-5 py-2">Detail</Link>
            </article>
            <div className="hidden sm:block md:col-span-1 flex justify-end">
                <img src={image} alt={title} />
            </div>
        </>
    )
}

export default WorksPreviewItem