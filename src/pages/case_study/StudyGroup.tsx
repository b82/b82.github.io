import { Link } from 'react-router'
import BoldSpan from '../../components/BoldSpan'
import Overview from '../../components/caseStudy/Overview'
import Goal from '../../components/caseStudy/Goal'
import MyRole from '../../components/caseStudy/MyRole'
import Process from '../../components/caseStudy/Process'
import WhiteBox from '../../components/caseStudy/WhiteBox'
import UserChallenge from '../../components/caseStudy/UserChallenge'
import BusinessOpportunity from '../../components/caseStudy/BusinessOpportunity'
// import Metodology from '../../components/caseStudy/Metodology'
// import UserSample from '../../components/caseStudy/UserSample'
// import ResearchGoal from '../../components/caseStudy/ResearchGoal'
// import KeyFindings from '../../components/caseStudy/KeyFindings'
// import ChallengesAndDecisions from '../../components/caseStudy/ChallengesAndDecisions'
// import LowResHighRes from '../../components/caseStudy/LowResHighRes'
import DesignImplications from '../../components/caseStudy/DesignImplications'
import Personas from '../../components/caseStudy/Personas'
import PersonasCard from '../../components/caseStudy/PersonasCard'
import ColoursPalette from '../../components/caseStudy/ColoursPalette'
import Development from '../../components/caseStudy/Development'
import TestingAndRelease from '../../components/caseStudy/TestingAndRelease'
import Conclusions from '../../components/caseStudy/Conclusions'

import data from '../../database/data.json'
import process from '/images/studygroup/process_graph.png'
import user_challenge from '/images/studygroup/user_challenge.png'
// import user_persona from '/images/user_persona.png'
// import key_findings from '/images/studygroup/key_findings.png'
import joseph_pic from '/images/studygroup/joseph.png'
import july_pic from '/images/studygroup/july.png'
import user_journey_joseph from '/images/studygroup/user_journey_joseph.svg'
import user_journey_july from '/images/studygroup/user_journey_july.svg'
import comparative_journeys from '/images/studygroup/comparative_journeys.svg'
import user_flow from '/images/studygroup/user_flow.svg'
import low_res from '/images/studygroup/low_res.svg'
import high_res from '/images/studygroup/hi_res.svg'
import development from '/images/development.png'
import studygroup_demo from '/images/studygroup/demo.mp4'
import studygroup_demo_poster from '/images/studygroup/mock/home-portrait.png'
import WhiteBox2 from '../../components/caseStudy/WhiteBox2'



function StudyGroup() {

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
                <Overview
                    title="AI StudyGroup Platform - Concept Design"
                    description={
                        <>
                            I designed this concept app to bring together students, hobbyists, and lifelong learners who are passionate about studying and self-improvement.
                            The goal was to create a simple and intuitive platform where users can easily find or propose topics of interest - from design and programming to music and more - and connect
                            with like-minded people to form study groups, both remotely and in person. The clean and minimal design ensures a seamless user experience, making it easy to explore subjects, join discussions, or start new ones.
                        </>
                    }
                />

                {/* Impact Summary */}
                <WhiteBox2
                    title="Impact Summary"
                    description={
                        <>
                            <BoldSpan>Start faster:</BoldSpan> find and join a relevant study group in under a minute from signup.<br />
                            <BoldSpan>Clear guidance:</BoldSpan> dual onboarding (quick-start tags vs guided interests/availability) reduces confusion for newcomers.<br />
                            <BoldSpan>Fewer steps:</BoldSpan> one-tap “Join group” plus an inline “Create topic” path when no match appears.<br />
                            <BoldSpan>Safer social:</BoldSpan> icebreaker prompts and “newcomer-friendly” badges encourage the first message.
                        </>
                    }
                    sectionMarginTop="sm:mt-0 mt-15"
                />

                {/* THE GOAL */}
                <Goal
                    description={
                        <>
                            The goal was to <BoldSpan>simulate the full UX design process</BoldSpan> - from research and problem framing to wireframing, prototyping, and testing - with a focus on designing a product aligned with current user needs
                            and design standards (such as accessibility, inclusivity, and mobile-first principles).
                            <BoldSpan>The project reflects real-world challenges and aims to demonstrate my ability to lead end-to-end UX work in solo or team-based environments.</BoldSpan>
                        </>
                    }
                    video={studygroup_demo}
                    video_poster={studygroup_demo_poster}
                    sectionMarginTop={sectionMarginTop}
                />

                {/* My Role */}
                <MyRole
                    description={
                        <>
                            I worked as a <BoldSpan>Lead UX & UI Designer</BoldSpan>, managing the full design process:<br /><br />
                            - Defined the product strategy, user needs, and core functionalities<br />
                            - Conducted user research and competitor analysis<br />
                            - Created personas, user journeys, and user flows<br />
                            - Designed low- and high-fidelity wireframes and interactive prototypes<br />
                            - Applied accessibility and usability best practices (WCAG, inclusive design)<br />
                            - Planned user testing and iterative improvements<br />
                            - Documented the entire process with a focus on storytelling and stakeholder communication
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                />

                {/* Constraints & Scope */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Constraints & Scope</h2>
                    <div className="grid sm:grid-cols-1 md:gap-30">
                        <p className='text-[16px] md:text-[20px] font-light'>
                            <BoldSpan>Scope:</BoldSpan> MVP for discovery (topics + locality), join/create group, lightweight messaging, simple scheduling notes/reminders (online or onsite), mobile-first UI.
                            <br />
                            <BoldSpan>Constraints:</BoldSpan> 6-8 weeks, solo designer, concept stage, no AI matching; privacy-first.
                            <br />
                            <BoldSpan>Risks/Trade-offs:</BoldSpan> speed vs match quality; chat simplicity vs moderation; short onboarding vs profile richness.
                        </p>
                    </div>
                </div>

                {/* Process */}
                <Process
                    description='"60% of users have difficult to find a simple app that help them connect people with same interest to share knowledge and learn together"'
                    sectionMarginTop={sectionMarginTop}
                    image={process}
                />

                {/* Problem */}
                <WhiteBox
                    title="Problem"
                    description={
                        <>
                            Many students and self-learners <BoldSpan>struggle to stay motivated</BoldSpan> and make consistent progress when studying alone.
                            Despite the abundance of online courses and learning content, it's often difficult to find people with similar interests or goals to share the journey with.
                            Traditional platforms offer either rigid class structures or passive content consumption - but lack tools to facilitate real, spontaneous peer-to-peer collaboration.
                            This gap creates frustration, drop-off, and a sense of isolation among learners.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                />

                {/* User Challenge */}
                <UserChallenge
                    description={
                        <>
                            Users need a simple and flexible way to:<br /><br />
                            - <BoldSpan>Find</BoldSpan> others with similar learning goals, interests, or study rhythms<br />
                            - <BoldSpan>Create</BoldSpan> or join study groups based on shared topics (e.g., "UX Design for beginners", "React study circle", "Music theory deep dives")<br />
                            - <BoldSpan>Connect</BoldSpan> online or onsite, depending on their preferences<br />
                            - <BoldSpan>Feel</BoldSpan> motivated, supported, and less alone in their learning journey<br /><br />
                            For example, an aspiring designer studying after work may feel demotivated without social feedback or group accountability, especially if their friends or colleagues aren't in the same field.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                    image={user_challenge}
                    imgCaption=''
                />

                {/* Business Opportunity / Design Challenge */}
                <BusinessOpportunity
                    description={
                        <>
                            This concept addresses the growing trend of community-based learning and peer-driven education, especially among Gen Z and adult learners who seek flexibility, autonomy, and human connection.
                            The challenge was to design an experience that:<br /><br />
                            <BoldSpan>Enables</BoldSpan> fast discovery and group formation around topics<br />
                            <BoldSpan>Encourages</BoldSpan> safe, inclusive, and purposeful interaction<br />
                            <BoldSpan>Keeps</BoldSpan> the interface minimal and frictionless, especially for mobile use<br /><br />
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                    whiteBoxMarginTop={whiteBoxMarginTop}
                    whiteBoxDescription={
                        <>
                            The solution had to balance functionality and social dynamics, without turning into a 'social media clone' or an overwhelming tool.
                            The project started from a simple question: 'What if study groups could form as easily as a Tinder match - but for shared learning goals?'
                        </>
                    }
                />

                {/* Design Implications */}
                <DesignImplications
                    description={
                        <>
                            <BoldSpan>Create</BoldSpan> fast, frictionless ways to discover or launch study groups around specific topics.<br />
                            <BoldSpan>Prioritize</BoldSpan> mobile-first design for real-time access and communication.<br />
                            <BoldSpan>Implement</BoldSpan> filters (topic, level, format, time of day) for personalized matching.<br />
                            <BoldSpan>Include</BoldSpan> options for virtual and in-person collaboration.<br />
                            <BoldSpan>Keep</BoldSpan> the tone and interface warm, non-intimidating, and focused on shared goals.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                />

                {/* Research Summary */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Research Summary</h2>

                    <div className="grid sm:grid-cols-1 md:gap-30">
                        <p className="text-[16px] md:text-[20px] font-light">
                            To understand how people discover peers and form study groups (online or onsite), I ran a compact discovery phase:
                            competitor teardowns (Discord, Meetup, StudyStream, Reddit learning communities, and course platforms with social
                            features like Coursera/Skillshare), five semi-structured interviews across students, career switchers, and remote
                            workers, plus a 31-response survey. The sample (ages 18-45) highlighted three core needs: fast, low-friction
                            discovery by topic and locality; a welcoming first interaction (reduced social friction); and lightweight in-app
                            scheduling to avoid context switching. These insights shaped the IA, prioritized group discovery and first-message
                            flows, and set KPIs around Time to First Match, Join Rate, and First-Message Rate.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-1 md:gap-30">
                        <p className="text-[16px] md:text-[20px] font-light">
                            <BoldSpan>Data highlights (concept-stage sample):</BoldSpan><br />
                            - 71% preferred quick-start onboarding via topic tags and locality.<br />
                            - 64% felt discouraged when no relevant group appeared and wanted an inline “Create topic” path.<br />
                            - 58% hesitated to send the first message without prompts or a “newcomer-friendly” signal.
                        </p>
                    </div>
                </div>

                {/* Findings → Decisions */}
                <section aria-labelledby="findings-decisions" className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Findings → Decisions</h2>

                    <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden text-[16px]">
                        <div className="hidden md:grid md:grid-cols-12 bg-black text-white font-medium text-[20px]">
                            <div className="col-span-4 px-4 py-3">Finding</div>
                            <div className="col-span-6 px-4 py-3">Design decision</div>
                            <div className="col-span-2 px-4 py-3">Impact</div>
                        </div>

                        <div className="divide-y divide-[#6F6F6F] bg-[#404040] text-white">
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    <span className="md:hidden block font-semibold text-gray-500 mb-1">Finding</span>
                                    Complex, noisy communities overwhelm new users.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    <span className="md:hidden block font-semibold text-gray-500 mb-1">Design decision</span>
                                    Minimal discovery with topic tags and locality chips; clean previews.
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="md:hidden block font-semibold text-gray-500 mb-1">Impact</span>
                                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-700">Clarity ↑</span>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Users can’t tell if a group fits their topic, level, or schedule at a glance.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    Structured group cards showing topic, level, cadence, and online/onsite badges.
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700">Relevance ↑</span>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Many users hesitate to send the first message.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    Icebreaker prompts and a “newcomer-friendly” badge inside the group chat.
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 font-medium text-green-700">First message ↑</span>
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Drop-off occurs when no suitable group appears in results.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    Inline “Create topic” path inside results to avoid dead ends.
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 font-medium text-amber-700">Activation ↑</span>
                                </div>
                            </div>

                            {/* Row 5 */}
                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Beginners need reassurance; experts want speed and control.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    Dual onboarding (quick-start tags vs guided interests/availability).
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 font-medium text-purple-700">Onboarding clarity ↑</span>
                                </div>
                            </div>

                            {/* Row 6 */}
                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Scheduling across tools breaks group momentum.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    Lightweight in-group scheduling notes and reminders (online or onsite).
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 font-medium text-rose-700">Alignment ↑</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-500 text-center">
                        Concept-stage decisions validated in moderated prototype tests; to be re-checked post-launch with analytics and A/B experiments.
                    </p>
                </section>

                {/* Personas */}
                <Personas
                    description={
                        <>
                            After analyzing feedback from similar platforms, I defined two ideal user types. <BoldSpan>Joseph</BoldSpan>, 32, is a developer passionate about programming and crypto, living in a small town with limited social contacts.
                            He signs up to StudyGroup hoping to quickly find like-minded users without wasting time searching on other apps. <BoldSpan>July</BoldSpan>, 20, is a medical student fascinated by medieval culture.
                            She's not tech-savvy but wants to build a small group of friends who share her passion, hoping the app will guide her simply and clearly.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                />

                {/* Joseph Card */}
                <PersonasCard
                    name="Joseph"
                    age="32"
                    location="Leicester, UX"
                    image={joseph_pic}
                    job="Web Developer"
                    status="Single"
                    goals="He is satisfied with his work but not with is social life, his friends has too different interests and he desire to find people with his same passions and share knowledge and make projects."
                    behaviours="He prefer mobile device for distractions because he already work a lot with browser."
                    painPoints="As a developer he is already addicted with technology so he tried lots of apps to find people but none of these give him great results, he want something faster with less click to find what he needs."
                    personality="He loses patience when he notice that time is too consuming."
                />

                {/* July Card */}
                <PersonasCard
                    name="July"
                    age="20"
                    location="Madrid, ES"
                    image={july_pic}
                    job="Medical Student"
                    status="Married"
                    goals="As great passionate for medieval revocation and love celtic festivals, she want to create a little group of friends with the same passion for history."
                    behaviours="She has social apps but felt easely confused when she needs to searching something specifics, also for this her network is really poor."
                    painPoints="She is not very addicted with tech so she always needs support also for basic operations."
                    personality="She would love to be tech-savvy one day, but she still feel far from that day."
                />

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

                {/* Design Evolution */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Design Evolution</h2>

                    <div className="grid sm:grid-cols-1 md:gap-30">
                        <p className="text-[16px] md:text-[20px] font-light">
                            <BoldSpan>Discovery:</BoldSpan> noisy, long lists → topic tags + locality previews you can scan in seconds.<br />
                            <BoldSpan>Onboarding:</BoldSpan> single long form → dual paths (quick-start tags / guided interests & availability).<br />
                            <BoldSpan>Match flow:</BoldSpan> no relevant group = dead end → inline “Create topic” path inside results.<br />
                            <BoldSpan>Group cards:</BoldSpan> generic tiles → structured cards (topic, level, cadence, online/onsite).<br />
                            <BoldSpan>First interaction:</BoldSpan> silent groups → icebreaker prompts + “newcomer-friendly” badge.<br />
                            <BoldSpan>Scheduling:</BoldSpan> external tools → lightweight in-group notes & reminders (online or onsite).
                        </p>
                    </div>
                </div>

                {/* User Flow */}
                <div className={`${sectionMarginTop} grid grid-cols-1`}>
                    <img src={user_flow} className="block w-full" />
                </div>

                {/* Low Res VS High Res */}
                <div className="sm:mt-20 mt-5 grid grid-cols-1">
                    <img src={low_res} className="block w-full" />
                </div>
                <div className="sm:mt-20 mt-5 grid grid-cols-1">
                    <img src={high_res} className="block w-full" />
                </div>

                {/* Colours Palette */}
                <ColoursPalette
                    sectionMarginTop={sectionMarginTop}
                    colours={[
                        { bg: '#272734', text: 'text-white' },
                        { bg: '#1A3A50', text: 'text-white' },
                        { bg: '#006692', text: 'text-white' },
                        { bg: '#FFE3A4', text: '' },
                        { bg: '#F5A67E', text: '' },
                        { bg: '#F0F0F0', text: '' }
                    ]}
                />

                {/* Development */}
                <Development
                    description={
                        <>
                            Although this project was primarily a <BoldSpan>UX/UI concept</BoldSpan>, I defined the design system and interface behaviors with development in mind.
                            I structured components for easy handoff via <BoldSpan>Figma</BoldSpan>, with attention to <BoldSpan>responsiveness, accessibility (WCAG), and UI consistency</BoldSpan>.
                            The prototype could be implemented using modern frameworks like <BoldSpan>React Native</BoldSpan> or <BoldSpan>Flutter</BoldSpan> to support both mobile and web platforms.
                            All screens were built considering flexible layout constraints, and transitions were designed using Framer principles to ensure smooth user interaction.
                            I also explored how to scale features progressively in case of future MVP development, prioritizing core features such as "group creation" and "topic matchmaking."
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                    image={development}
                    workTitle={work.title}
                />

                {/* Testing & Release */}
                <TestingAndRelease
                    description={
                        <>
                            Usability testing was conducted on early wireframes and interactive prototypes using simulated sessions with fictional users like Joseph and July.
                            I performed 3 informal walkthroughs and used the "think-aloud" method to observe potential points of confusion. The test results highlighted the need for:<br /><br />
                            - <BoldSpan>Simplified navigation labels</BoldSpan><br />
                            - <BoldSpan>Shorter flows to reach group discovery</BoldSpan><br />
                            - <BoldSpan>A clearer onboarding step for first-time users</BoldSpan><br /><br />
                            Based on these insights, I refined the user flow and added visual cues (empty states, hints, and helper icons).
                            If released, I would plan a soft launch with iterative A/B testing and feedback collection via in-app surveys.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                />

                {/* KPIs & Measurement */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">KPIs & Measurement</h2>
                    <div className="grid sm:grid-cols-1 md:gap-30">
                        <p className='text-[16px] md:text-[20px] font-light'>
                            <BoldSpan>Primary KPIs:</BoldSpan> Time to First Match (TTFM), Join Rate, First-Message Rate (within 24h), 7-day retention
                            <br />
                            <BoldSpan>Secondary KPIs:</BoldSpan> Create-Topic Rate when no match, RSVP/attendance rate, reply-time SLA in group chats, SUS/NPS
                            <br />
                            <BoldSpan>Measurement Plan:</BoldSpan> baseline usability → A/B on onboarding (tags vs guided),
                            result ranking, and icebreaker prompts → privacy-friendly analytics funnels (signup → join → first message) → in-app micro-surveys for qualitative signal
                        </p>
                    </div>
                </div>

                {/* Conclusions */}
                <Conclusions
                    description={
                        <>
                            This project allowed me to explore a solution that balances social connection with focused study environments, tailored to both tech-savvy and non-tech users.
                            The biggest challenge was designing a universal entry point that doesn't intimidate users like July while satisfying Joseph's need for speed and efficiency.
                            I followed a user-centered, problem-first approach with measurable improvements along the way.
                            If further developed, I would explore community moderation tools and smart matching algorithms to foster healthier interactions.
                            Overall, this concept demonstrates my ability to combine strategic UX thinking with real-world usability needs across different user types.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                />

            </section>

        </main>
    )
}

export default StudyGroup 