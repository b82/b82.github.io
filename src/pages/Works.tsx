import WorksPreviewItem from "../components/WorksPreviewItem"

function Works() {

    return (
        <main>
            {/* INTRO */}
            <section className="text-center md:mt-20 mt-10">
                <h1 className="text-[40px] font-medium md:m-0">MY WORKS</h1>
                <p className="text-[20px] font-regular">A collection of my researches about UX and UI concepts</p>
            </section>

            {/* WORKS */}
            <section className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* AI StudyGroup */}
                <WorksPreviewItem
                    title="AI StudyGroup"
                    subtitle="AI-powered study group platform"
                    type="Mobile"
                    description="Use case about a mobile-first platform designed to help people connect around shared study interests, both remotely and onsite. 
                        The concept focuses on inclusivity, ease of access, and meaningful group interactions.
A clean and inviting interface, fast discovery paths, and smart topic suggestions guide users—whether tech-savvy or not—toward forming or joining study groups with minimal friction.
The design carefully balances social interaction with focused intent, using user personas and real-world challenges to shape intuitive, scalable flows. The result is a solution that feels both human and efficient, and is well-suited for future implementation using modern cross-platform technologies."
                    url="/works/studygroup"
                    image="/study_group_mock.png"
                />

                {/* RestApp */}
                <WorksPreviewItem
                    title="RestApp"
                    subtitle="App concept for on-site restaurant use"
                    type="Mobile"
                    description="Use case about a mobile ordering app designed for on-site restaurant use, emphasizing speed, clarity, and user engagement.
                        The design concept leverages a minimal interface-large food images, a simple slider for filtering, and one-tap interactions-to create an intuitive experience that saves time and enhances decision-making.
                        By combining sleek visual design with user-centered flows and considering technical feasibility, the solution does not only feels polished but could also be realistically
                        implemented using modern technologies."
                    url="/works/restapp"
                    image="/mobile.svg"
                />

                {/* DailyCoach */}
                <WorksPreviewItem
                    title="DailyCoach"
                    subtitle="Dashboard concept for personal trainers"
                    type="Web"
                    description="This project explores the design of a personal training dashboard that blends user experience and development logic.
                        As a UX/UI designer with a strong background in coding, I focused not only on creating a clear and engaging interface, but also on structuring the layout in a way that would support real-world implementation.
                        The result is a concept that simplifies training, nutrition, and progress tracking - while also reflecting how good design can live in harmony with scalable, modular development."
                    url="/works/dailycoach"
                    image="/web.svg"
                />



            </section>


        </main>
    )
}

export default Works