import { Link } from 'react-router'
import data from '../database/data.json'
import context from '/images/studygroup/context.png'
import process from '/images/studygroup/process_graph.png'
import user_challenge from '/images/studygroup/user_challenge.png'
import user_persona from '/images/studygroup/user_persona.png'
import key_findings from '/images/studygroup/key_findings.png'
import joseph_pic from '/images/studygroup/joseph.png'
import july_pic from '/images/studygroup/july.png'
import calendar_icon from '/images/studygroup/calendar_icon.png'
import pin_icon from '/images/studygroup/pin_icon.png'
import heart_icon from '/images/studygroup/heart_icon.png'
import user_journey_joseph from '/images/studygroup/user_journey_joseph.svg'
import user_journey_july from '/images/studygroup/user_journey_july.svg'
import comparative_journeys from '/images/studygroup/comparative_journeys.svg'
import user_flow from '/images/studygroup/user_flow.svg'
import low_res from '/images/studygroup/low_res.svg'
import high_res from '/images/studygroup/hi_res.svg'
import development from '/images/studygroup/development.png'
import testing_release from '/images/studygroup/testing_release.png'


function BoldSpan({ children }: { children: React.ReactNode }) {
    return <span className='font-bold'>{children}</span>
}

function StudyGroupDetail() {

    const work = data.restapp
    const sectionMarginTop = 'sm:mt-30 mt-15';
    const whiteBoxMarginTop = 'sm:mt-0 mt-15 ';

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
                <div className={`sm:mt-5 mt-15 grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                        <div className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            <h2 className="text-[24px] md:text-[40px] font-medium text-left">The Goal</h2>
                            The goal was to <BoldSpan>simulate the full UX design process</BoldSpan> - from research and problem framing to wireframing, prototyping, and testing - with a focus on designing a product aligned with current user needs
                            and design standards (such as accessibility, inclusivity, and mobile-first principles).
                            <BoldSpan>The project reflects real-world challenges and aims to demonstrate my ability to lead end-to-end UX work in solo or team-based environments.</BoldSpan>
                        </div>
                        <img src={context} alt={work.title} className="hidden md:block rounded-lg md:justify-self-end" />
                    </div>
                </div>

                {/* My Role */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">My Role</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            I worked as a <BoldSpan>Lead UX & UI Designer</BoldSpan>, managing the full design process:<br /><br />
                            - Defined the product strategy, user needs, and core functionalities<br />
                            - Conducted user research and competitor analysis<br />
                            - Created personas, user journeys, and user flows<br />
                            - Designed low- and high-fidelity wireframes and interactive prototypes<br />
                            - Applied accessibility and usability best practices (WCAG, inclusive design)<br />
                            - Planned user testing and iterative improvements<br />
                            - Documented the entire process with a focus on storytelling and stakeholder communication
                        </p>
                        <div className={`${whiteBoxMarginTop} col-span-1 flex items-center justify-center`}>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light bg-light-grey-2 border-light-grey rounded-[24px] p-10'>
                                This project also reflects my ability to anticipate emerging trends, such as community-based learning, and translate them into clear UX strategies and scalable interface patterns.
                                I created this self-initiated concept project developed to explore emerging trends in collaborative learning, digital communities, and social-driven study platforms.</p>
                        </div>
                    </div>
                </div>

                {/* Process */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 md:gap-10">
                        <img src={process} alt={work.title} className="block rounded-lg md:justify-self-end" />
                        <p className='mt-5 sm:mt-0 col-span-1 text-[16px] md:text-[20px] font-light text-center'>
                            "60% of users have difficult to find a simple app that help them connect people with same interest to share knowledge and learn together"
                        </p>
                    </div>
                </div>

                {/* Problem */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                        <div className="md:col-span-1"></div>
                        <div className='col-span-2 font-light bg-light-grey-2 border-light-grey rounded-[24px] p-10'>
                            <p className='font-regular text-[20px] md:text-[40px]'>Problem</p>
                            <p className='col-span-2 text-[16px] md:text-[20px] font-light'>
                                Many students and self-learners <BoldSpan>struggle to stay motivated</BoldSpan> and make consistent progress when studying alone.
                                Despite the abundance of online courses and learning content, it's often difficult to find people with similar interests or goals to share the journey with.
                                Traditional platforms offer either rigid class structures or passive content consumption - but lack tools to facilitate real, spontaneous peer-to-peer collaboration.
                                This gap creates frustration, drop-off, and a sense of isolation among learners.
                            </p>
                        </div>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* User Challenge */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <div className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            <h2 className="text-[24px] md:text-[40px] font-medium text-left">User Challenge</h2>
                            Users need a simple and flexible way to:<br /><br />
                            - <BoldSpan>Find</BoldSpan> others with similar learning goals, interests, or study rhythms<br />
                            - <BoldSpan>Create</BoldSpan> or join study groups based on shared topics (e.g., "UX Design for beginners", "React study circle", "Music theory deep dives")<br />
                            - <BoldSpan>Connect</BoldSpan> online or onsite, depending on their preferences<br />
                            - <BoldSpan>Feel</BoldSpan> motivated, supported, and less alone in their learning journey<br /><br />
                            For example, an aspiring designer studying after work may feel demotivated without social feedback or group accountability, especially if their friends or colleagues aren't in the same field.
                        </div>
                        <img src={user_challenge} alt={work.title} className="hidden md:block rounded-lg md:justify-self-end" />
                    </div>
                </div>

                {/* Business Opportunity / Design Challenge */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Business Opportunity / Design Challenge</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            This concept addresses the growing trend of community-based learning and peer-driven education, especially among Gen Z and adult learners who seek flexibility, autonomy, and human connection.
                            The challenge was to design an experience that:<br /><br />
                            - <BoldSpan>Enables</BoldSpan> fast discovery and group formation around topics<br />
                            - <BoldSpan>Encourages</BoldSpan> safe, inclusive, and purposeful interaction<br />
                            - <BoldSpan>Keeps</BoldSpan> the interface minimal and frictionless, especially for mobile use<br /><br />
                        </p>
                        <div className={`${whiteBoxMarginTop} col-span-1 flex items-center justify-center`}>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light bg-light-grey-2 border-light-grey rounded-[24px] p-10'>
                                The solution had to balance functionality and social dynamics, without turning into a "social media clone" or an overwhelming tool.
                                The project started from a simple question: "What if study groups could form as easily as a Tinder match - but for shared learning goals?"</p>
                        </div>
                    </div>
                </div>

                {/* Metodology - User Sample - Research Goal */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <img src={user_persona} alt={work.title} className="block rounded-lg justify-self-center" />
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-30">
                        <div>
                            <h3 className="mt-10 sm:mt-0 text-[24px] md:text-[40px] font-medium text-left">Metodology</h3>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                <BoldSpan>Competitor analysis</BoldSpan> of platforms such as Discord, Meetup, StudyStream, Reddit communities, and course platforms with social features (e.g., Coursera, Skillshare).<br />
                                <BoldSpan>Qualitative interviews</BoldSpan> (5 hypothetical users) representing diverse backgrounds (students, professionals, adult learners).<br />
                                <BoldSpan>Online survey</BoldSpan> (30+ simulated responses) exploring study habits, motivation triggers, and preferred formats of peer collaboration.
                            </p>
                        </div>
                        <div>
                            <h3 className="mt-10 sm:mt-0 text-[24px] md:text-[40px] font-medium text-left">User Sample</h3>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                <BoldSpan>Ages:</BoldSpan> 18-45<br />
                                <BoldSpan>Profiles:</BoldSpan> university students, career switchers, remote workers, autodidacts.<br />
                                <BoldSpan>Shared traits:</BoldSpan> high curiosity, digital-first behavior, need for flexibility, some frustration with self-discipline.
                            </p>
                        </div>
                        <div>
                            <h3 className="mt-10 sm:mt-0 text-[24px] md:text-[40px] font-medium text-left">Research Goal</h3>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                Understand <BoldSpan>how self-learners and students currently approach independent study</BoldSpan>, what challenges they face when studying alone,
                                and how they seek out or benefit from study groups - both online and offline.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Design Implications */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Design Implications</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            <BoldSpan>Create</BoldSpan> fast, frictionless ways to discover or launch study groups around specific topics.<br />
                            <BoldSpan>Prioritize</BoldSpan> mobile-first design for real-time access and communication.<br />
                            <BoldSpan>Implement</BoldSpan> filters (topic, level, format, time of day) for personalized matching.<br />
                            <BoldSpan>Include</BoldSpan> options for virtual and in-person collaboration.<br />
                            <BoldSpan>Keep</BoldSpan> the tone and interface warm, non-intimidating, and focused on shared goals.
                        </p>
                    </div>
                </div>

                {/* Key Findings */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <img src={key_findings} alt={work.title} className="hidden md:block rounded-lg h-[300px] md:justify-self-start" />
                        <div>
                            <h3 className="text-[24px] md:text-[40px] font-medium text-left">Key Findings</h3>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                - Loneliness and demotivation are common when studying solo - even more than lack of time.<br />
                                - Users often seek lightweight and informal peer support, not structured tutoring.<br />
                                - Existing tools (forums, chats, communities) are fragmented and not designed around learning rhythms or shared goals.<br />
                                - Users prefer platforms that are easy to navigate, visually clean, and don't feel like traditional academic tools.<br />
                                - In-person meetups are appreciated but hard to organize without geographic filters and topic tagging.<br />
                                - Many users mentioned that even just knowing someone else is "studying the same thing right now" is motivating.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Personas */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
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
                        <div className="font-light text-center flex flex-col items-center justify-center pl-3 pr-3 sm:pl-5 sm:pr-5 xl:pl-10 xl:pr-0">
                            <img className="sm:mt-0 mt-10 block rounded-lg w-[200px] sm:w-full" src={joseph_pic} alt={work.title} />
                            <p className='mt-5 xl:text-[38px] text-[28px] font-extralight'>Joseph</p>
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
                                <p className="text-[16px] sm:text-[20px] font-bold">Goals</p>
                                <p className="text-[16px] sm:text-[20px] font-light">
                                    He is satisfied with his work but not with is social life, his friends has too different interests and
                                    he desire to find people with his same passions and share knowledge and make projects.</p>
                            </div>
                            <div className="mb-10">
                                <p className="text-[16px] sm:text-[20px] font-bold">Behaviours</p>
                                <p className="text-[16px] sm:text-[20px] font-light">
                                    He prefer mobile device for distractions because he already work a lot with browser.</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10">
                                <p className="text-[16px] sm:text-[20px] font-bold">Pain Points</p>
                                <p className="text-[16px] sm:text-[20px] font-light">
                                    As a developer he is already addicted with technology so he tried lots of apps to find people but none of these give him great results,
                                    he want something faster with less click to find what he needs.
                                </p>
                            </div>
                            <div>
                                <p className="text-[16px] sm:text-[20px] font-bold">Personality</p>
                                <p className="text-[16px] sm:text-[20px] font-light">
                                    He loses patience when he notice that time is too consuming.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* July Card */}
                <div className="mt-15 gap-0 border-light-grey bg-light-grey-2 rounded-[24px] grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 md:gap-10">
                    <div className="dark-grey-2 pb-10 sm:rounded-l-[24px] rounded-t-[24px] sm:rounded-t-none grid grid-cols-1 xl:grid-cols-2 md:col-span-1 text-white text-center">
                        <div className="font-light text-center flex flex-col items-center justify-center pl-3 pr-3 sm:pl-5 sm:pr-5 xl:pl-10 xl:pr-0">
                            <img className="sm:mt-0 mt-10 block rounded-lg w-[200px] sm:w-full" src={july_pic} alt={work.title} />
                            <p className='mt-5 xl:text-[38px] text-[28px] font-extralight'>July</p>
                            <p className='xl:mt-[-8px] xl:text-[20px] text-[14px] font-regular'>Medicine Student</p>
                        </div>
                        <div className="pt-10 sm:pt-0 xl:text-[16px] font-light flex flex-col items-center justify-center">
                            <p className='xl:text-[20px] font-semibold'>Demographic</p>
                            <p><img src={calendar_icon} alt={work.title} className="inline-block mr-2" />28 years old</p>
                            <p><img src={pin_icon} alt={work.title} className="inline-block mr-2" />Madrid, ES</p>
                            <p><img src={heart_icon} alt={work.title} className="inline-block mr-2" />Married</p>
                        </div>

                    </div>
                    <div className="p-10 sm:p-0 col-span-1 xl:col-span-2 md:col-span-3 xl:flex xl:items-start xl:justify-center sm:pl-0 md:pl-0 md:p-10">
                        <div className="mr-10">
                            <div className="mb-10">
                                <p className="text-[16px] sm:text-[20px] font-bold">Goals</p>
                                <p className="text-[16px] sm:text-[20px] font-light">
                                    As great passionate for medieval revocation and love celtic festivals, she want to create a little group of friends with the same passion for history.</p>
                            </div>
                            <div className="mb-10">
                                <p className="text-[16px] sm:text-[20px] font-bold">Behaviours</p>
                                <p className="text-[16px] sm:text-[20px] font-light">
                                    She has social apps but felt easely confused when she needs to searching something specifics, also for this her network is really poor.</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10">
                                <p className="text-[16px] sm:text-[20px] font-bold">Pain Points</p>
                                <p className="text-[16px] sm:text-[20px] font-light">
                                    She is not very addicted with tech so she always needs support also for basic operations.
                                </p>
                            </div>
                            <div>
                                <p className="text-[16px] sm:text-[20px] font-bold">Personality</p>
                                <p className="text-[16px] sm:text-[20px] font-light">
                                    She would love to be tech-savvy one day, but she still feel far from that day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Journey Joseph */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <img src={user_journey_joseph} className="block w-full" />
                </div>

                {/* User Journey July */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <img src={user_journey_july} className="block w-full" />
                </div>

                {/* Comparative Journeys */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <img src={comparative_journeys} className="block w-full" />
                </div>

                {/* Key UX Challenges & Design Decisions */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Key UX Challenges & Design Decisions</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                            Throughout the design process, several user and product challenges emerged that shaped core design decisions. Some of the most critical included:
                            Designing for two very different user types:While Joseph expects speed and efficiency, July needs simplicity and guidance.
                            The solution was a dual-layered UX: minimal friction for experienced users and contextual help + onboarding for new users - without compromising the interface simplicity.
                            Reducing the "tool fatigue" of existing platforms:Interviews and research showed that users were tired of complex, noisy platforms (like Discord or Meetup).
                            I prioritized a clean visual hierarchy, with immediate access to relevant actions (search, join, chat) and low cognitive load per screen.
                            Encouraging first interaction in group chats:One pain point was the hesitation to send the first message.
                            I introduced "intro prompts" and optional first-message templates to lower social friction and improve engagement.
                            Balancing flexibility with structure in group creation:Users wanted both spontaneous and recurring group formats.
                            The app flow supports creating one-time events or ongoing study groups, with minimal steps and topic-based discovery.
                        </p>
                        <div className={`${whiteBoxMarginTop} col-span-1 flex items-center justify-center`}>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light bg-light-grey-2 border-light-grey rounded-[24px] p-10'>
                                These challenges helped define the product's core interaction model and led to key UI patterns that adapt dynamically to the user's behavior and experience level.</p>
                        </div>
                    </div>
                </div>

                {/* User Journey Joseph */}
                <div className={`${sectionMarginTop} grid grid-cols-1`}>
                    <img src={user_flow} className="block w-full" />
                </div>

                {/* Low Res VS High Res */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Low Res VS High Res</h2>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <p className='text-[16px] md:text-[20px] font-light'>
                            Design must be a simple and intuitive interface, the range of user age is very large (approx 18-60), so there's no need to particular animations or
                            transitions but a solid design with simple shapes and colours.
                        </p>
                    </div>
                </div>

                {/* Low Res */}
                <div className="sm:mt-20 mt-5 grid grid-cols-1">
                    <img src={low_res} className="block w-full" />
                </div>

                {/* High Res */}
                <div className="sm:mt-20 mt-5 grid grid-cols-1">
                    <img src={high_res} className="block w-full" />
                </div>

                {/* Colours Palette */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Colours Palette</h2>
                    <div className="grid sm:grid-cols-6 gap-0 border-light-grey border-5">
                        <div className="bg-[#272734] h-[60px] flex items-center justify-center"><p className="text-[20px] font-semibold text-white">#272734</p></div>
                        <div className="bg-[#1A3A50] h-[60px] flex items-center justify-center"><p className="text-[20px] font-semibold text-white">#1A3A50</p></div>
                        <div className="bg-[#006692] h-[60px] flex items-center justify-center"><p className="text-[20px] font-semibold text-white">#006692</p></div>
                        <div className="bg-[#FFE3A4] h-[60px] flex items-center justify-center"><p className="text-[20px] font-semibold">#FFE3A4</p></div>
                        <div className="bg-[#F5A67E] h-[60px] flex items-center justify-center"><p className="text-[20px] font-semibold">#F5A67E</p></div>
                        <div className="bg-[#F0F0F0] h-[60px] flex items-center justify-center"><p className="text-[20px] font-semibold">#F0F0F0</p></div>
                    </div>
                </div>

                {/* Development */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <img src={development} alt={work.title} className="hidden md:block rounded-lg h-[300px] md:justify-self-start" />
                        <div>
                            <h3 className="text-[24px] md:text-[40px] font-medium text-left">Development</h3>
                            <p className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                Although this project was primarily a UX/UI concept, I defined the design system and interface behaviors with development in mind.
                                I structured components for easy handoff via Figma, with attention to responsiveness, accessibility (WCAG), and UI consistency.
                                The prototype could be implemented using modern frameworks like React Native or Flutter to support both mobile and web platforms.
                                All screens were built considering flexible layout constraints, and transitions were designed using Framer principles to ensure smooth user interaction.
                                I also explored how to scale features progressively in case of future MVP development, prioritizing core features such as "group creation" and "topic matchmaking."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testing & Release */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="grid sm:grid-cols-2 md:gap-30">
                        <div>
                            <h3 className="text-[24px] md:text-[40px] font-medium text-left">Testing & Release</h3>
                            <div className='col-span-1 text-[16px] md:text-[20px] font-light'>
                                Usability testing was conducted on early wireframes and interactive prototypes using simulated sessions with fictional users like Joseph and July.
                                I performed 3 informal walkthroughs and used the "think-aloud" method to observe potential points of confusion.The test results highlighted the need for:
                                <ul>
                                    <li>Simplified navigation labels</li>
                                    <li>Shorter flows to reach group discovery</li>
                                    <li>A clearer onboarding step for first-time users</li>
                                </ul>
                                Based on these insights, I refined the user flow and added visual cues (empty states, hints, and helper icons).
                                If released, I would plan a soft launch with iterative A/B testing and feedback collection via in-app surveys.
                            </div>
                        </div>
                        <img src={testing_release} alt={work.title} className="hidden md:block rounded-lg h-[300px] md:justify-self-end" />
                    </div>
                </div>

                {/* Conclusions */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px] justify-self-center"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">Conclusions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2 text-[16px] md:text-[20px] font-light'>
                            This project allowed me to explore a solution that balances social connection with focused study environments, tailored to both tech-savvy and non-tech users.
                            The biggest challenge was designing a universal entry point that doesn't intimidate users like July while satisfying Joseph's need for speed and efficiency.
                            I followed a user-centered, problem-first approach with measurable improvements along the way.
                            If further developed, I would explore community moderation tools and smart matching algorithms to foster healthier interactions.
                            Overall, this concept demonstrates my ability to combine strategic UX thinking with real-world usability needs across different user types.
                        </p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>






            </section>

        </main>
    )
}

export default StudyGroupDetail 