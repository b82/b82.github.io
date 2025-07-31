import { Link } from 'react-router'
import data from '../database/data.json'
import context from '/images/studygroup/context.png'
import process from '/images/studygroup/process_graph.png'
import user_challenge from '/images/studygroup/user_challenge.png'
import user_persona from '/images/studygroup/user_persona.png'
import key_findings from '/images/studygroup/key_findings.png'
import joseph_pic from '/images/studygroup/joseph.png'
import calendar_icon from '/images/studygroup/calendar_icon.png'
import pin_icon from '/images/studygroup/pin_icon.png'
import heart_icon from '/images/studygroup/heart_icon.png'


function StudyGroupDetail() {

    const work = data.restapp

    if (!work) {
        return (
            <main className="mt-20 text-center">
                <h1 className="text-[40px] font-medium">Work not found</h1>
                <Link to="/works" className="text-[20px] font-regular text-blue-600 hover:underline">
                    ← Back to Works
                </Link>
            </main>
        )
    }

    return (
        <main>
            <section className="md:mt-20 mt-10">

                {/* OVERVIEW */}
                <div className="mt-10 grid grid-cols-1 gap-5 text-center">
                    <h1 className="text-[32px] md:text-[48px] font-medium text-center leading-[1.2]">AI StudyGroup Platform - Concept Design</h1>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">Overview</h2>
                    <p className="md:mb-20 text-[16px] md:text-[20px] font-light">
                        I designed this concept app to bring together students, hobbyists, and lifelong learners who are passionate about studying and self-improvement.
                        The goal was to create a simple and intuitive platform where users can easily find or propose topics of interest - from design and programming to music and more - and connect
                        with like-minded people to form study groups, both remotely and in person. The clean and minimal design ensures a seamless user experience, making it easy to explore subjects, join discussions, or start new ones.
                    </p>
                </div>

                {/* THE GOAL */}
                <div className="grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">The Goal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            The goal was to simulate the full UX design process - from research and problem framing to wireframing, prototyping, and testing - with a focus on designing a product aligned with current user needs
                            and design standards (such as accessibility, inclusivity, and mobile-first principles).
                            The project reflects real-world challenges and aims to demonstrate my ability to lead end-to-end UX work in solo or team-based environments.</p>
                        <img src={context} alt={work.title} className="hidden md:block rounded-lg md:justify-self-end" />
                    </div>
                </div>

                {/* My Role */}
                <div className="mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">My Role</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            I worked as a Lead UX & UI Designer, managing the full design process:<br />
                            - Defined the product strategy, user needs, and core functionalities<br />
                            - Conducted user research and competitor analysis<br />
                            - Created personas, user journeys, and user flows<br />
                            - Designed low- and high-fidelity wireframes and interactive prototypes<br />
                            - Applied accessibility and usability best practices (WCAG, inclusive design)<br />
                            - Planned user testing and iterative improvements<br />
                            - Documented the entire process with a focus on storytelling and stakeholder communication
                        </p>
                        <div className='col-span-1 flex items-center justify-center'>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light bg-light-grey-2 border-light-grey rounded-[24px] p-10'>
                                This project also reflects my ability to anticipate emerging trends, such as community-based learning, and translate them into clear UX strategies and scalable interface patterns.
                                I created this self-initiated concept project developed to explore emerging trends in collaborative learning, digital communities, and social-driven study platforms.</p>
                        </div>
                    </div>
                </div>

                {/* Process */}
                <div className="mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 md:gap-10">
                        <img src={process} alt={work.title} className="block rounded-lg md:justify-self-end" />
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light text-center'>
                            "60% of users have difficult to find a simple app that help them connect people with same interest to share knowledge and learn together"
                        </p>
                    </div>
                </div>

                {/* Problem */}
                <div className="mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                        <div className="md:col-span-1"></div>
                        <div className='col-span-2 font-light bg-light-grey-2 border-light-grey rounded-[24px] p-10'>
                            <p className='font-regular text-[20px] md:text-[40px]'>Problem</p>
                            <p className='col-span-2 text-[16px] md:text-[20px] font-light'>
                                Many students and self-learners struggle to stay motivated and make consistent progress when studying alone.
                                Despite the abundance of online courses and learning content, it's often difficult to find people with similar interests or goals to share the journey with.
                                Traditional platforms offer either rigid class structures or passive content consumption - but lack tools to facilitate real, spontaneous peer-to-peer collaboration.
                                This gap creates frustration, drop-off, and a sense of isolation among learners.
                            </p>
                        </div>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* User Challenge */}
                <div className="mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">User Challenge</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            Users need a simple and flexible way to:<br />
                            - find others with similar learning goals, interests, or study rhythms<br />
                            - create or join study groups based on shared topics (e.g., “UX Design for beginners”, “React study circle”, “Music theory deep dives”)<br />
                            - connect online or onsite, depending on their preferences<br />
                            - feel motivated, supported, and less alone in their learning journey<br />
                            For example, an aspiring designer studying after work may feel demotivated without social feedback or group accountability, especially if their friends or colleagues aren't in the same field.
                        </p>
                        <img src={user_challenge} alt={work.title} className="hidden md:block rounded-lg h-[300px] md:justify-self-end" />
                    </div>
                </div>

                {/* Business Opportunity / Design Challenge */}
                <div className="mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Business Opportunity / Design Challenge</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            This concept addresses the growing trend of community-based learning and peer-driven education, especially among Gen Z and adult learners who seek flexibility, autonomy, and human connection.
                            The challenge was to design an experience that:
                            enables fast discovery and group formation around topics
                            encourages safe, inclusive, and purposeful interaction
                            keeps the interface minimal and frictionless, especially for mobile use
                        </p>
                        <div className='col-span-1 flex items-center justify-center'>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light bg-light-grey-2 border-light-grey rounded-[24px] p-10'>
                                The solution had to balance functionality and social dynamics, without turning into a “social media clone” or an overwhelming tool.
                                The project started from a simple question: “What if study groups could form as easily as a Tinder match — but for shared learning goals?”</p>
                        </div>
                    </div>
                </div>

                {/* Metodology - User Sample - Research Goal */}
                <div className="mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <img src={user_persona} alt={work.title} className="block rounded-lg justify-self-center" />
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-30">
                        <div>
                            <h3 className="text-[24px] md:text-[40px] font-medium text-left">Metodology</h3>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                Competitor analysis of platforms such as Discord, Meetup, StudyStream, Reddit communities, and course platforms with social features (e.g., Coursera, Skillshare)
                                Qualitative interviews (5 hypothetical users) representing diverse backgrounds (students, professionals, adult learners)
                                Online survey (30+ simulated responses) exploring study habits, motivation triggers, and preferred formats of peer collaboration
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[24px] md:text-[40px] font-medium text-left">User Sample</h3>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                <span className='font-bold'>Ages:</span> 18-45<br />
                                <span className='font-bold'>Profiles:</span> university students, career switchers, remote workers, autodidacts<br />
                                <span className='font-bold'>Shared traits:</span> high curiosity, digital-first behavior, need for flexibility, some frustration with self-discipline
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[24px] md:text-[40px] font-medium text-left">Research Goal</h3>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                Understand how self-learners and students currently approach independent study, what challenges they face when studying alone,
                                and how they seek out or benefit from study groups - both online and offline.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Design Implications */}
                <div className="mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Design Implications</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            Create fast, frictionless ways to discover or launch study groups around specific topics
                            Prioritize mobile-first design for real-time access and communication
                            Implement filters (topic, level, format, time of day) for personalized matching
                            Include options for virtual and in-person collaboration
                            Keep the tone and interface warm, non-intimidating, and focused on shared goals
                        </p>
                    </div>
                </div>

                {/* Key Findings */}
                <div className="mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <img src={key_findings} alt={work.title} className="hidden md:block rounded-lg h-[300px] md:justify-self-start" />
                        <div>
                            <h3 className="text-[24px] md:text-[40px] font-medium text-left">Key Findings</h3>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                Loneliness and demotivation are common when studying solo — even more than lack of time
                                Users often seek lightweight and informal peer support, not structured tutoring
                                Existing tools (forums, chats, communities) are fragmented and not designed around learning rhythms or shared goals
                                Users prefer platforms that are easy to navigate, visually clean, and don't feel like traditional academic tools
                                In-person meetups are appreciated but hard to organize without geographic filters and topic tagging
                                Many users mentioned that even just knowing someone else is “studying the same thing right now” is motivating
                            </p>
                        </div>
                    </div>
                </div>

                {/* Personas */}
                <div className="mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Personas</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='text-[16px] md:text-[20px] font-light'>
                            After some research on user feedback from similar app, the ideal user for this app is a guy of 32 years old, that I imagine to call Joseph.
                            He is a very passionate for programming language and crypto, but he lives in a very small town and he doesn't have much contact with similar interests,
                            so he decided to sign up to StudyGroup hoping to find immediately some users to discuss about programming and crypto without lose days of research or trying other platforms.
                        </p>
                    </div>
                </div>

                {/* Joseph Card */}
                <div className="mt-15 gap-0 border-light-grey bg-light-grey-2 rounded-[24px] grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 md:gap-10">
                    <div className="dark-grey-2 pb-10 sm:rounded-l-[24px] rounded-t-[24px] sm:rounded-t-none grid grid-cols-1 xl:grid-cols-2 md:col-span-1 text-white text-center">
                        <div className="font-light text-center flex flex-col items-center justify-center sm:pl-10 md:pr-0 sm:pr-10">
                            <img className="sm:mt-0 mt-10 block rounded-lg w-[200px] sm:w-full" src={joseph_pic} alt={work.title} />
                            <p className='mt-5 sm:text-[38px] text-[28px] font-extralight'>Joseph</p>
                            <p className='xl:mt-[-8px] xl:text-[20px] text-[14px] font-regular'>Web Developer</p>
                        </div>
                        <div className="pt-10 sm:pt-0 xl:text-[16px] font-light flex flex-col items-center justify-center">
                            <p className='xl:text-[20px] font-semibold'>Demographic</p>
                            <p><img src={calendar_icon} alt={work.title} className="inline-block mr-2" />32 years old</p>
                            <p><img src={pin_icon} alt={work.title} className="inline-block mr-2" />Leicester, UX</p>
                            <p><img src={heart_icon} alt={work.title} className="inline-block mr-2" />Single</p>
                        </div>

                    </div>
                    <div className="p-10 sm:p-0 col-span-1 xl:col-span-2 md:col-span-3 xl:flex xl:items-start xl:justify-center sm:pl-0 md:pl-0 md:p-10">
                        <div className="mr-10">
                            <div className="mb-10">
                                <p className="text-[14px] md:text-[20px] font-bold">Goals</p>
                                <p className="text-[14px] md:text-[20px] font-light">
                                    He is satisfied with his work but not with is social life, his friends has too different interests and
                                    he desire to find people with his same passions and share knowledge and make projects.</p>
                            </div>
                            <div className="mb-10">
                                <p className="text-[14px] md:text-[20px] font-bold">Behaviours</p>
                                <p className="text-[14px] md:text-[20px] font-light">
                                    He prefer mobile device for distractions because he already work a lot with browser.</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10">
                                <p className="text-[14px] md:text-[20px] font-bold">Pain Points</p>
                                <p className="text-[14px] md:text-[20px] font-light">
                                    As a developer he is already addicted with technology so he tried lots of apps to find people but none of these give him great results,
                                    he want something faster with less click to find what he needs.
                                </p>
                            </div>
                            <div>
                                <p className="text-[14px] md:text-[20px] font-bold">Personality</p>
                                <p className="text-[14px] md:text-[20px] font-light">
                                    He loses patience when he notice that time is too consuming
                                </p>
                            </div>
                        </div>
                    </div>
                </div>





            </section>

        </main>
    )
}

export default StudyGroupDetail 