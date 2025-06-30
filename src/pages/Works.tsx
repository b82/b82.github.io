import { Link } from "react-router"

function Works() {

    return (
        <main>
            {/* INTRO */}
            <section className="mt-20 text-center">
                <h1 className="text-[40px] font-medium">MY WORKS</h1>
                <p className="text-[20px] font-regular mt-5">A collection of my researches on UX and UI concepts</p>
            </section>

            {/* WORKS */}
            <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="md:col-span-1 text-left">
                    <h2 className="text-[28px] font-medium">DailyCoach</h2>
                    <p className="text-[20px] font-regular">Dashboard concept for personal trainers</p>
                    <span className="text-[20px] font-light">Web</span>
                    <p className="mt-5 text-[16px] font-light text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                    <Link to="/works/dailycoach" className="mt-5 text-[20px] font-regular text-blue-600 hover:underline mb-8 inline-block light-grey text-white rounded-full px-5 py-2">Detail</Link>
                </article>
                <article className="md:col-span-1 flex justify-end">
                    <img src="/web.svg" alt="DailyCoach" />
                </article>

                <article className="md:col-span-1 text-left">
                    <h2 className="text-[28px] font-medium">RestApp</h2>
                    <p className="text-[20px] font-regular">App concept for on-site restaurant use</p>
                    <span className="text-[20px] font-light">Mobile</span>
                    <p className="mt-5 text-[16px] font-light text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                    <Link to="/works/restapp" className="mt-5 text-[20px] font-regular text-blue-600 hover:underline mb-8 inline-block light-grey text-white rounded-full px-5 py-2">Detail</Link>
                </article>
                <article className="md:col-span-1 flex justify-end">
                    <img src="/mobile.svg" alt="RestApp" />
                </article>

            </section>


        </main>
    )
}

export default Works