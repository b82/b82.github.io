import Header from '../components/Header'
import mobile from '../assets/mobile.svg'
import web from '../assets/web.svg'
import linkedin from '../assets/linkedin.svg'
import dribble from '../assets/dribble.svg'

function Home() {
    return (
        <>
            <Header />
            <main>

                {/* INTRO */}
                <section id="intro">
                    <h1 className="text-[40px] font-medium m-0 mt-20">LUCA MORMILE</h1>
                    <h2 className="text-[20px] font-regular">UI/UX Designer, Product Designer, Developer</h2>
                    <h3 className="text-[36px] font-regular mt-5">I create smooth and elegant but easy to use user interfaces</h3>
                </section>

                {/* SHOWCASE */}
                <section id="home-showcase">

                    {/* SHOWCASE WORKS */}
                    <section className="mt-5 w-full grid grid-cols-10 gap-5">
                        <article className="col-span-5">
                            <img src={mobile} alt="Restaurant app for on-site use" className="self-center" />
                        </article>
                        <article className="col-span-5">
                            <img src={web} alt="Personal Trainer Dashboard" className="self-start" />
                        </article>
                    </section>

                    {/* SHOWCASE DESCRIPTION */}
                    <section className="mt-5 w-full grid grid-cols-10 gap-5">
                        <article className="col-span-5">
                            <p className="text-[20px] font-regular">Restaurant app for on-site use</p>
                            <p className="text-[20px] font-extralight">Mobile</p>
                        </article>
                        <article className="col-span-5">
                            <p className="text-[20px] font-regular">Personal Trainer Dashboard</p>
                            <p className="text-[20px] font-extralight">Web</p>
                        </article>
                    </section>
                </section>

                {/* ABOUT */}
                <section id="about" className="mt-50 w-full">
                    <div className="divider black h-[10px] w-[140px] place-self-center"></div>
                    <h2 className="text-[40px] font-medium mt-10 mb-10">SOMETHING ABOUT ME</h2>
                </section>

                {/* EXPERTISES */}
                <section id="expertises" className="w-full grid grid-cols-10 gap-5">
                    <article className="col-span-3">
                        <p className="text-[20px] font-regular text-left">My areas of expertise</p>
                        <p className="text-[20px] font-light text-left">Professional with 15 years of experience in designing complex user interfaces for web and mobile.
                            A solid technical base, combined with years of experience in design and UX, allows me to combine aesthetics, functionality and accessibility.
                            Over the years I have actively collaborated with UX and product teams, helping to improve the user experience, make the interfaces always attractive,
                            follow current trends and improve the performance of the applications.</p>
                    </article>
                    <article className="col-span-1"></article>
                    <article className="col-span-3 text-white">
                        <div className="expertise-box dark-grey">
                            <p className="text-[24px] font-medium text-left">USER EXPERIENCE (UX)</p>
                            <p className="text-[20px] font-light text-left">Professional with 15 years of experience in designing complex user interfaces for web and mobile.</p>
                        </div>
                        <div className="expertise-box dark-grey mt-5">
                            <p className="text-[24px] font-medium text-left">PRODUCT DESIGN</p>
                            <p className="text-[20px] font-light text-left">Professional with 15 years of experience in designing complex user interfaces for web and mobile.</p>
                        </div>
                    </article>
                    <article className="col-span-3 text-white">
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

                {/* CONTACTS */}
                <section id="contacts" className="mt-5 w-full grid grid-cols-10 gap-5 justify-between text-white pt-10 pb-10 relative">
                    <div className="contacts-bg-full w-full h-[176px]"></div>
                    <div className="col-span-5 text-left">
                        <p className="text-[24px] font-medium">LUCA MORMILE</p>
                        <p className="text-[20px] font-regular text-light-gray">UI/UX Designer, Product Designer, Developer</p>
                        <p className="text-[20px] font-regular text-left text-light-gray">2025</p>
                    </div>
                    <div className="col-span-5 text-right">
                        <p className="text-[20px] font-regular text-right">CONTACTS</p>
                        <p className="text-[20px] font-regular text-right">luca.mormile [@] gmail.com</p>
                        <div className="flex justify-end">
                            <img src={linkedin} alt="LinkedIn" className="self-end" />
                            <img src={dribble} alt="Dribble" className="self-end" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home 