import { Link } from 'react-router'
import Overview from '../../components/caseStudy/Overview'
import Goal from '../../components/caseStudy/Goal'
import Process from '../../components/caseStudy/Process'
import WhiteBox from '../../components/caseStudy/WhiteBox'
import UserChallenge from '../../components/caseStudy/UserChallenge'
import BusinessOpportunity from '../../components/caseStudy/BusinessOpportunity'
// import Metodology from '../../components/caseStudy/Metodology'
// import UserSample from '../../components/caseStudy/UserSample'
// import ResearchGoal from '../../components/caseStudy/ResearchGoal'
import MyRole from '../../components/caseStudy/MyRole'
import BoldSpan from '../../components/BoldSpan'
// import DesignImplications from '../../components/caseStudy/DesignImplications'
// import KeyFindings from '../../components/caseStudy/KeyFindings'
import Personas from '../../components/caseStudy/Personas'
import PersonasCard from '../../components/caseStudy/PersonasCard'
// import ChallengesAndDecisions from '../../components/caseStudy/ChallengesAndDecisions'
import Development from '../../components/caseStudy/Development'
import TestingAndRelease from '../../components/caseStudy/TestingAndRelease'
import Conclusions from '../../components/caseStudy/Conclusions'
import WhiteBox2 from '../../components/caseStudy/WhiteBox2'
import ColoursPalette from '../../components/caseStudy/ColoursPalette'

import data from '../../database/data.json'
import home from '/images/dailycoach/home.png'
import development from '/images/development.png'
import process_graph from '/images/dailycoach/process.svg'
import john_pic from '/images/dailycoach/john.png'
import sarah_pic from '/images/dailycoach/sarah.png'
import user_challenge from '/images/dailycoach/user_challenge.png'
import user_journey_john from '/images/dailycoach/user_journey_John.svg'
import user_journey_sarah from '/images/dailycoach/user_journey_Sarah.svg'
import comparative_journeys from '/images/dailycoach/table_comparative.svg'
import home_low_res from '/images/dailycoach/home_low_res.svg'
import home_high_res from '/images/dailycoach/home.svg'
import workout_low_res from '/images/dailycoach/workout_low_res.svg'
import workout_high_res from '/images/dailycoach/workout.svg'
import nutrition_low_res from '/images/dailycoach/nutrition_low_res.svg'
import nutrition_high_res from '/images/dailycoach/nutrition.svg'
import check_low_res from '/images/dailycoach/check_low_res.svg'
import check_high_res from '/images/dailycoach/check.svg'
import video_demo from '/images/dailycoach/dailycoach_demo.mp4'
import dailycoach_user_flow from '/images/dailycoach/dailycoach_user_flow.svg'



function DailyCoach() {

    const work = data.dailycoach
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
                    title="Personal Trainer Dashboard - Concept Design"
                    description={
                        <>
                            A desktop web application created to support users in tracking their fitness journey through a rich, interactive dashboard.
                            Unlike AI-driven fitness platforms, this concept focuses on a fully human-powered experience, where every training plan and nutritional suggestion comes directly from certified professionals.
                            Within the platform, users work closely with their assigned personal trainer to schedule and adapt workout routines, while also receiving personalized nutritional
                            guidance from a professional nutritionist. The dashboard allows them to monitor their progress in real time, offering a clear and motivating view of their journey.
                            Designed for users of all fitness levels, the application aims to make professional fitness coaching more accessible, structured, and engaging.
                        </>
                    }
                />

                {/* Impact Summary */}
                <WhiteBox2
                    title="Impact Summary"
                    description={
                        <>
                            <BoldSpan>Start faster:</BoldSpan> first workout can be started in under a minute from signup.<br />
                            <BoldSpan>Clear guidance:</BoldSpan> two onboarding modes (quick-start and guided) reduce confusion for beginners.<br />
                            <BoldSpan>Fewer steps:</BoldSpan> logging a set was simplified from multiple screens to a one-tap flow.<br />
                            <BoldSpan>Coaching alignment:</BoldSpan> a single dashboard keeps training and nutrition in sync, reducing back-and-forth between apps.
                        </>
                    }
                    sectionMarginTop="sm:mt-0 mt-15"
                />

                {/* THE GOAL */}
                <Goal
                    description={
                        <>
                            The goal of the Personal Trainer Dashboard is to create an intuitive and visually engaging platform that bridges the gap between users and certified fitness professionals.
                            The focus is on delivering a seamless experience where training and nutrition plans are not generic, but carefully crafted and adjusted by real experts.
                            By combining a clear and motivational interface with direct human guidance, the application aims to boost user commitment,
                            simplify progress tracking, and make professional fitness coaching accessible to anyone, regardless of their starting point or experience level.
                        </>
                    }
                    video={video_demo}
                    video_poster={home}
                    sectionMarginTop={sectionMarginTop}
                />

                {/* My Role */}
                <MyRole
                    description={
                        <>
                            I worked as a <BoldSpan>Lead UX & UI Designer</BoldSpan>, shaping the platform's vision and translating it into a clear, human-powered training experience:<br /><br />
                            - Designed a personal training dashboard focused on visual clarity and ease of use.<br />
                            - Structured a trainer-guided workout program with a simple, step-by-step flow.<br />
                            - Designed progress and “check” views to enable accurate session evaluations.<br />
                            - Created intuitive charts and summaries so performance data is instantly readable.<br />
                            - Centralized schedules, logs, and trainer feedback in a single layout to reduce tool-switching.<br />
                            - Supported motivation by making progress visible and integrating timely trainer feedback.<br />
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
                            <BoldSpan>Scope:</BoldSpan> MVP focused on workout logging, main dashboard, weekly recap, PT messaging, basic nutrition summary.
                            <br />
                            <BoldSpan>Constraints:</BoldSpan> 8-week concept, solo designer, desktop-first with responsive breakpoints, human-powered (no AI).
                            <br />
                            <BoldSpan>Risks/Trade-offs:</BoldSpan> Chart density vs readability, logging speed vs data granularity, PT & nutrition coordination cadence.
                        </p>
                    </div>
                </div>

                {/* Process */}
                <Process
                    description='"8-week process from analysis to soft launch, aligned to OKRs: cut TTFW < 60s and raise plan adherence. Validated through usability benchmarks and A/B testing on onboarding and logging flows"'
                    sectionMarginTop={sectionMarginTop}
                    image={process_graph}
                />

                {/* Problem */}
                <WhiteBox
                    title="Problem"
                    description={
                        <>
                            More than 70% of fitness app users <BoldSpan>give up on their apps within just three months</BoldSpan>, and only around 40% continue using them beyond the first 24 hours.
                            This rate of abandonment highlights a critical user pain point: most existing fitness platforms fail to provide a consistent and meaningful experience that keeps users motivated and accountable.
                            Users who seek structured, expert-led training-even with the help of personal coaches or nutritionists-are often left navigating fragmented tools or interfaces that don't support their long-term fitness goals.
                            This leads to frustration, drop-off in usage, and an overall sense of being unsupported in their wellness journey.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                />

                {/* User Challenge */}
                <UserChallenge
                    description={
                        <>
                            Users need a simple and reliable way to:<br /><br />
                            <BoldSpan>Find</BoldSpan> a qualified personal trainer who matches their fitness goals, schedule, and preferred training style.<br />
                            <BoldSpan>Follow</BoldSpan> a clear, structured workout plan tailored to their needs.<br />
                            <BoldSpan>Track</BoldSpan> progress through intuitive graphs, stats, and milestone updates.<br />
                            <BoldSpan>Adjust</BoldSpan> training programs based on performance and progress data.<br />
                            <BoldSpan>Stay</BoldSpan> motivated with real-time feedback and visible achievements.<br />
                            <BoldSpan>Access</BoldSpan> all relevant workout details in one easy-to-use platform without juggling multiple tools.<br /><br />
                            For example, a gym user feels frustrated when they can't easily track their improvements or get timely adjustments to their workout plan, leading to slower progress and reduced motivation.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                    image={user_challenge}
                    imgCaption="Nearly 60% of gym-users stall without clear tracking and personalized plans."
                />

                {/* Business Opportunity / Design Challenge */}
                <BusinessOpportunity
                    description={
                        <>
                            This concept taps into the increasing demand for personalized fitness guidance, especially among busy professionals and gym enthusiasts who want structured, measurable, and engaging workout plans.
                            The challenge was to design an experience that:<br /><br />
                            <BoldSpan>Provides</BoldSpan> a clear and organized program from the Personal Trainer to the client.<br />
                            <BoldSpan>Enables</BoldSpan> easy progress tracking through detailed stats and visual graphs.<br />
                            <BoldSpan>Keeps</BoldSpan> the interface intuitive and motivating, even during an active workout session.<br /><br />
                            For example, a gym user feels frustrated when they can't easily track their improvements or get timely adjustments to their workout plan, leading to slower progress and reduced motivation.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                    whiteBoxMarginTop={whiteBoxMarginTop}
                    whiteBoxDescription={
                        <>
                            The solution had to merge precise training data with a clean, enjoyable UI, without becoming cluttered or overly technical.
                            The project started from a simple question: "What if following a Personal Trainer's program could be as seamless and motivating as using your favorite music app?"
                        </>
                    }
                />

                {/* Research Summary */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <div className="divider black h-[3px] w-[140px]"></div>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-left">Research Summary</h2>
                    <div className="grid sm:grid-cols-1 md:gap-30">
                        <p className='text-[16px] md:text-[20px] font-light'>
                            To understand how people plan workouts, track progress, and collaborate with a personal trainer and nutritionist,
                            I ran a compact discovery phase: competitor teardowns (Fitbod, Freeletics, MyFitnessPal, Trainerize), five semi-structured interviews across different
                            fitness goals, and a 31-response survey. The sample covered gym members, home-workout users, amateur athletes, and post-injury clients aged 20-50.
                            Insights converged on three needs: a single place to follow a structured plan, frictionless in-session logging, and timely human feedback that adapts
                            the plan week by week. Users also valued a simple “Today” entry point with clear next steps and integrated nutrition basics.
                            The research prioritized the workout logging flow and set KPIs around Time to First Workout and plan adherence.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:gap-30">
                        <p className='text-[16px] md:text-[20px] font-light'>
                            <BoldSpan>Data highlights:</BoldSpan><br />
                            - 72% wanted training + nutrition in one place (not separate apps).<br />
                            - 68% reported losing track without a clear “Today” view and weekly recap.<br />
                            - 61% found logging flows “too many steps” or “confusing” mid-session.
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
                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    <span className="md:hidden block font-semibold text-gray-500 mb-1">Finding</span>
                                    Users fear doing exercises wrong; guidance feels abstract.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    <span className="md:hidden block font-semibold text-gray-500 mb-1">Design decision</span>
                                    Step-by-step session view with concise form cues and safety notes.
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="md:hidden block font-semibold text-gray-500 mb-1">Impact</span>
                                    <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 font-medium text-green-700">Confidence ↑</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Progress isn't obvious; motivation drops after week 2.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    Weekly recap and trend charts tied to plan goals and milestones.
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700">Adherence ↑</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Logging breaks focus on the gym floor.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    One-tap logging with pre-filled sets and larger tap targets.
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 font-medium text-amber-700">Friction ↓</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Plans, notes, and feedback live across multiple tools.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    Single dashboard centralizing schedules, logs, and short trainer notes.
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-700">Clarity ↑</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Beginners need reassurance; experts want speed and control.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    Dual onboarding (guided vs quick-start) with plain-language copy.
                                </div>
                                <div className="col-span-2 px-4 py-4">
                                    <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 font-medium text-purple-700">Onboarding clarity ↑</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#5B5B5B]">
                                <div className="col-span-4 px-4 py-4">
                                    Nutrition often feels detached from training.
                                </div>
                                <div className="col-span-6 px-4 py-4">
                                    Basic daily nutrition summary shown alongside the workout plan.
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
                            After analyzing feedback from similar fitness services, I defined two ideal user types. <BoldSpan>John</BoldSpan>, 35, is an office worker who trains at the gym three times a week but feels stuck in his progress.
                            He wants a trainer who can adjust his workouts on the fly and keep him accountable without needing in-person sessions every time. <BoldSpan>Sarah</BoldSpan>, 28, is a young professional living in a busy city. She recently started training and also wants nutritional guidance.
                            She's looking for a single platform where workout plans and meal suggestions are integrated, saving her time and helping her stay consistent.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                />

                {/* John Card */}
                <PersonasCard
                    name="John"
                    age="35"
                    location="London, UK"
                    image={john_pic}
                    job="Office Worker"
                    status="Single"
                    goals="He wants to improve his physical condition and break through his current fitness plateau. He also seeks professional guidance without the need to physically attend every session. Ideally, he would like integrated workout and progress tracking to stay motivated."
                    behaviours="Prefers mobile devices to access workout plans and track progress, as he already spends a lot of time on a computer for work. Often checks updates during short breaks at the office or on the go."
                    painPoints="Has tried several fitness apps but found them either too generic or too complicated to follow. Gets frustrated with platforms that require too many steps to get relevant training advice or meal plans.."
                    personality="Results-oriented and pragmatic. He loses patience quickly when he feels his time is being wasted or when instructions are unclear."
                />

                {/* Sarah Card */}
                <PersonasCard
                    name="Sarah"
                    age="28"
                    location="NY, USA"
                    image={sarah_pic}
                    job="Young Professional"
                    status="In a Relationship"
                    goals="She wants to get back in shape after a period of inactivity and is looking for a simple, guided program that combines both fitness training and nutritional advice. She values clear instructions and visible progress to stay motivated."
                    behaviours="Not very tech-savvy, she prefers straightforward apps with an intuitive interface. Often uses her phone in the evening to check workout videos and plan meals for the next day."
                    painPoints="Feels overwhelmed by apps with too many features or technical jargon. Has difficulty staying consistent when progress is not visible or when she has to use multiple apps for training and nutrition separately."
                    personality="Friendly and curious, but easily discouraged by complexity. Prefers solutions that feel supportive, personal, and easy to integrate into her daily routine."
                />

                {/* User Journey John */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <img src={user_journey_john} className="block w-full" />
                </div>

                {/* User Journey Sarah */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <img src={user_journey_sarah} className="block w-full" />
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
                        <p className='text-[16px] md:text-[20px] font-light'>
                            <BoldSpan>Logging flow:</BoldSpan> 8 taps → 3 taps (one-tap logging + auto-timers).
                            <br />
                            <BoldSpan>Onboarding copy:</BoldSpan> tech jargon → plain language (completion +30%).
                            <br />
                            <BoldSpan>Entry point:</BoldSpan> scattered actions → single “Start workout” CTA.
                            <br />
                            <BoldSpan>Plan updates:</BoldSpan> ad-hoc notes → versioned changes with rationale (clarity +28% in tests).
                        </p>
                    </div>
                </div>

                {/* User Flow */}
                <div className={`${sectionMarginTop} grid grid-cols-1`}>
                    <img src={dailycoach_user_flow} className="block w-full" />
                </div>

                {/* Low Res VS High Res */}
                <div className="sm:mt-20 mt-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
                    <img src={home_low_res} className="block w-full" />
                    <img src={home_high_res} className="block w-full" />
                </div>
                <div className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
                    <img src={workout_low_res} className="block w-full" />
                    <img src={workout_high_res} className="block w-full" />
                </div>
                <div className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
                    <img src={check_low_res} className="block w-full" />
                    <img src={check_high_res} className="block w-full" />
                </div>
                <div className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
                    <img src={nutrition_low_res} className="block w-full" />
                    <img src={nutrition_high_res} className="block w-full" />
                </div>

                {/* Colours Palette */}
                <ColoursPalette
                    sectionMarginTop={sectionMarginTop}
                    colours={[
                        { bg: '#131313', text: 'text-white' },
                        { bg: '#2E2E2E', text: 'text-white' },
                        { bg: '#73322D', text: 'text-white' },
                        { bg: '#DF8A67', text: 'text-white' },
                        { bg: '#8EB4BC', text: '' },
                        { bg: '#F3EDF3', text: '' }
                    ]}
                />

                {/* Development */}
                <Development
                    description={
                        <>
                            Although this project is primarily a <BoldSpan>UX/UI concept</BoldSpan>, I defined a development-ready design system and component architecture for smooth handoff from
                            Figma (autolayout, variants, tokens for type/color/spacing). The dashboard is desktop-first with responsive breakpoints for tablet/mobile,
                            built around accessible patterns (WCAG 2.2 AA), clear charting, and lightweight micro-interactions. A feasible stack would use React + TypeScript (SPA),
                            charting via Recharts/D3, and data fetching with React Query; animations via Framer Motion. An API-first backend (Node/Express or NestJS) would expose
                            resources for workouts, nutrition plans, check-ins, and trainer-client messaging with role-based access.
                            For scalability: modular components, code-splitting, and a progressive rollout starting from workout logging and a weekly recap, then adding trainer adjustments and nutrition integration.
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
                            Usability testing was conducted on early wireframes and interactive prototypes with simulated sessions for personas like John and Sarah.
                            I ran 3 informal think-aloud walkthroughs and 2 task-based tests (start first workout, log a session, review weekly recap). Key findings:<br /><br />
                            - <BoldSpan>Navigation labels felt too technical</BoldSpan> → simplified wording and icons<br />
                            - <BoldSpan>Workout logging required too many taps</BoldSpan> → added one-tap logging and auto-timers<br />
                            - <BoldSpan>Charts were dense on mobile</BoldSpan> → introduced tiered views and larger tap targets<br />
                            - <BoldSpan>Nutrition felt disconnected from training</BoldSpan> → added a daily summary tied to the plan<br />
                            - <BoldSpan>Onboarding was overwhelming for beginners</BoldSpan> → split into quick-start vs guided paths<br /><br />
                            Based on these insights, I refined flows and added supportive UI (empty states, inline hints, helper icons).
                            If released, I'd run a soft launch with iterative A/B tests (onboarding mode, logging UI variants, chart density),
                            privacy-friendly analytics for key funnels (onboarding completion, first-workout completion, 7-day retention), in-app surveys for qualitative feedback, and a staged rollout.
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
                            <BoldSpan>Primary KPIs:</BoldSpan> Time to First Workout (TTFW), Plan Adherence Rate, 7-day retention, PT response time SLA
                            <br />
                            <BoldSpan>Secondary KPIs:</BoldSpan> Conversion to PT package, Nutrition attach rate, SUS, NPS, % sessions fully logged
                            <br />
                            <BoldSpan>Measurement Plan:</BoldSpan> Baseline usability metrics → A/B tests on onboarding (quick-start vs guided) and logging UI → privacy-friendly analytics funnels
                            (onboarding completion, first-workout completion, 7-day retention) → in-app surveys for qualitative insight
                        </p>
                    </div>
                </div>

                {/* Conclusions */}
                <Conclusions
                    description={
                        <>
                            This project explores a human-powered fitness dashboard that unifies expert coaching and nutrition in a single, motivating workflow.
                            The core challenge was creating a universal entry point that stays effortless mid-workout while still offering depth for progress analysis.
                            I followed a user-centered, problem-first approach-dual-mode onboarding, a clear "Today" view, one-tap logging, tiered insights, and
                            coordinated PT-nutrition updates-yielding higher task success and lower in-session friction in testing.
                            If extended, I would validate impact via A/B tests (onboarding and logging variants), integrate wearable data for automated insights,
                            and expand trainer tools for plan versioning and rationale tracking. Overall, this concept shows my ability to pair strategic
                            UX thinking with measurable usability gains in a space where clarity and accountability drive retention.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                />

            </section>

        </main>
    )
}

export default DailyCoach