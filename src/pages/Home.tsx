import { Link } from 'react-router'

function Home() {

    const works = [
        {
            id: 1,
            title: "RestApp",
            description: "Mobile app for on-site restaurant use",
            type: "Mobile",
            image: "/mobile.svg",
            path: "restapp"
        },
        {
            id: 2,
            title: "DailyCoach",
            description: "Web dashboard for personal trainers",
            type: "Web",
            image: "/web.svg",
            path: "dailycoach"
        }
    ]


    return (
        <main>
            {/* INTRO */}
            <section id="intro" className="text-center">
                <h1 className="text-[40px] font-medium m-0 mt-20">LUCA MORMILE</h1>
                <h2 className="text-[20px] font-regular">UI/UX Designer, Product Designer, Developer</h2>
                <h3 className="text-[36px] font-regular mt-5">I create smooth and elegant but easy to use user interfaces</h3>
            </section>

            {/* SHOWCASE */}
            <section id="showcase" className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                {works.map((work) => (
                    <Link
                        key={work.id}
                        to={`/works/${work.path}`}
                        className="work-item block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                    >
                        <img src={work.image} alt={work.title} className="w-full rounded-lg mb-4" />
                        <h3 className="text-[24px] font-medium mb-2">{work.title}</h3>
                        <p className="text-[16px] font-regular text-gray-600 mb-2">{work.description}</p>
                        <span className="text-[14px] font-light text-gray-500">{work.type}</span>
                    </Link>
                ))}
            </section>

            {/* ABOUT */}
            <section id="about" className="mt-50 w-full text-center">
                <div className="divider black h-[10px] w-[140px] place-self-center"></div>
                <h2 className="text-[24px] font-medium mt-10 mb-10">SOMETHING ABOUT ME</h2>
            </section>

            {/* EXPERTISES */}
            <section id="expertises" className="w-full grid grid-cols-1 md:grid-cols-10 gap-5">
                <article className="md:col-span-3">
                    <p className="text-[20px] font-regular text-left">My areas of expertise</p>
                    <p className="text-[20px] font-light text-left">Professional with 15 years of experience in designing complex user interfaces for web and mobile.
                        A solid technical base, combined with years of experience in design and UX, allows me to combine aesthetics, functionality and accessibility.
                        Over the years I have actively collaborated with UX and product teams, helping to improve the user experience, make the interfaces always attractive,
                        follow current trends and improve the performance of the applications.</p>
                </article>
                <article className="hidden md:block md:col-span-1"></article>
                <article className="md:col-span-3 text-white">
                    <div className="expertise-box dark-grey">
                        <p className="text-[24px] font-medium text-left">USER EXPERIENCE (UX)</p>
                        <p className="text-[20px] font-light text-left">Professional with 15 years of experience in designing complex user interfaces for web and mobile.</p>
                    </div>
                    <div className="expertise-box dark-grey mt-5">
                        <p className="text-[24px] font-medium text-left">PRODUCT DESIGN</p>
                        <p className="text-[20px] font-light text-left">Professional with 15 years of experience in designing complex user interfaces for web and mobile.</p>
                    </div>
                </article>
                <article className="md:col-span-3 text-white">
                    <div className="expertise-box dark-grey">
                        <p className="text-[24px] font-medium text-left">USER INTERFACE (UI)</p>
                        <p className="text-[20px] font-light text-left">Professional with 15 years of experience in designing complex user interfaces for web and mobile.</p>
                    </div>
                    <div className="expertise-box dark-grey mt-5">
                        <p className="text-[24px] font-medium text-left">DEVELOPMENT</p>
                        <p className="text-[20px] font-light text-left">Professional with 15 years of experience in designing complex user interfaces for web and mobile.</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Home 