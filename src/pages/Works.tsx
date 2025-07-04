import { Link } from "react-router"

function Works() {

    return (
        <main>
            {/* INTRO */}
            <section className="text-center md:mt-20 mt-10">
                <h1 className="text-[40px] font-medium md:m-0">MY WORKS</h1>
                <p className="text-[20px] font-regular">A collection of my researches on UX and UI concepts</p>
            </section>

            {/* WORKS */}
            <section className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* RestApp */}
                <article className="md:col-span-1 text-left">
                    <h2 className="text-[24px] md:text-[28px] font-medium">RestApp</h2>
                    <p className="text-[20px] md:text-[24px] font-regular">App concept for on-site restaurant use</p>
                    <span className="text-[18px] md:text-[20px] font-light">Mobile</span>
                    <p className="mt-5 md:text-[20px] text-[16px] font-light text-black">
                        Use case about a mobile ordering app designed for on-site restaurant use, emphasizing speed, clarity, and user engagement.
                        The design concept leverages a minimal interface—large food images, a simple slider for filtering, and one-tap interactions—to create an intuitive experience that saves time and enhances decision-making.
                        By combining sleek visual design with user-centered flows and considering technical feasibility, the solution does not only feels polished but could also be realistically
                        implemented using modern technologies.
                    </p>
                    <Link to="/works/restapp" className="works-link mt-5 text-[20px] font-regular text-blue-600 hover:underline mb-8 inline-block dark-grey text-white rounded-full px-5 py-2">Detail</Link>
                </article>
                <article className="hidden sm:block md:col-span-1 flex justify-end">
                    <img src="/mobile.svg" alt="RestApp" />
                </article>

                {/* DailyCoach */}
                <article className="md:col-span-1 text-left mt-10 md:mt-0">
                    <h2 className="text-[24px] md:text-[28px] font-medium">DailyCoach</h2>
                    <p className="text-[20px] md:text-[24px] font-regular">Dashboard concept for personal trainers</p>
                    <span className="text-[18px] md:text-[20px] font-light">Web</span>
                    <p className="mt-5 md:text-[20px] text-[16px] font-light text-black">
                        This project explores the design of a personal training dashboard that blends user experience and development logic.
                        As a UX/UI designer with a strong background in coding, I focused not only on creating a clear and engaging interface, but also on structuring the layout in a way that would support real-world implementation.
                        The result is a concept that simplifies training, nutrition, and progress tracking — while also reflecting how good design can live in harmony with scalable, modular development.
                    </p>
                    <Link to="/works/dailycoach" className="works-link mt-5 text-[20px] font-regular text-blue-600 hover:underline mb-8 inline-block dark-grey text-white rounded-full px-5 py-2">Detail</Link>
                </article>
                <article className="hidden sm:block md:col-span-1 flex justify-end">
                    <img src="/web.svg" alt="DailyCoach" />
                </article>

            </section>


        </main>
    )
}

export default Works