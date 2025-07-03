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
            <section id="intro" className="text-center md:mt-20 mt-10">
                <h1 className="text-[40px] font-medium md:m-0">LUCA MORMILE</h1>
                <h2 className="text-[16px] md:text-[20px] font-regular">UI/UX Designer, Product Designer, Developer</h2>
                <h3 className="text-[22px] md:text-[36px] font-regular mt-5 leading-[1.2]">I create smooth and elegant but easy to use software interfaces</h3>
            </section>

            {/* SHOWCASE */}
            <section id="showcase" className="mt-5 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
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
            <section id="about" className="md:mt-20 mt-10 lg:mt-50 w-full text-center">
                <div className="divider hidden md:block black md:h-[10px] h-[5px] w-[140px] place-self-center"></div>
                <h2 className="text-[24px] font-medium mt-10 md:mb-10 mb-5">SOMETHING ABOUT ME</h2>
            </section>

            {/* EXPERTISES */}
            <section id="expertises" className="w-full grid grid-cols-1 lg:grid-cols-10 gap-5">
                <article className="md:col-span-3">
                    <p className="md:text-[24px] text-[20px] font-regular text-left">My areas of expertise</p>
                    <p className="md:text-[20px] text-[16px] font-light text-left mb-5">UX/UI Designer and Developer with 15+ years of experience crafting intuitive, high-performing interfaces for web and mobile applications.
                        My strong technical background and deep understanding of design principles allow me to merge aesthetics, usability, and accessibility into seamless digital experiences.
                        Over the years, I've worked closely with product and UX teams to improve user journeys, design modern and engaging interfaces, and enhance overall product performance — always with a focus on clarity,
                        efficiency, and current design trends.</p>
                </article>
                <article className="hidden md:block md:col-span-1"></article>
                <article className="md:col-span-3 text-white">
                    <div className="expertise-box dark-grey">
                        <p className="text-[24px] font-medium text-left">USER EXPERIENCE (UX)</p>
                        <p className="md:text-[20px] text-[16px] font-light text-left">I design intuitive, user-centered experiences that balance business goals and user needs. With a solid background in usability, interaction flows, and research-driven design,
                            I help create digital products that feel natural and deliver value from the first tap.</p>
                    </div>
                    <div className="expertise-box dark-grey mt-5">
                        <p className="text-[24px] font-medium text-left">USER INTERFACE (UI)</p>
                        <p className="md:text-[20px] text-[16px] font-light text-left">I craft clean, modern interfaces that combine clarity, consistency, and visual appeal.
                            With years of experience in frontend and design systems, I bring precision to layouts, attention to detail, and alignment with brand identity across all platforms.</p>
                    </div>
                </article>
                <article className="md:col-span-3 text-white">
                    <div className="expertise-box dark-grey">
                        <p className="text-[24px] font-medium text-left">PRODUCT DESIGN</p>
                        <p className="md:text-[20px] text-[16px] font-light text-left">I contribute to shaping digital products from concept to delivery. By combining UX strategy, interface design, and technical feasibility,
                            I help teams design features users love — with scalable structures, clear priorities, and real-world impact.</p>
                    </div>
                    <div className="expertise-box dark-grey mt-5">
                        <p className="text-[24px] font-medium text-left">DEVELOPMENT</p>
                        <p className="md:text-[20px] text-[16px] font-light text-left">With a developer's mindset and years of hands-on coding experience, I bridge the gap between design and implementation.
                            My technical background ensures smooth collaboration with development teams, precise handoffs, and design solutions that are both creative and feasible.</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Home 