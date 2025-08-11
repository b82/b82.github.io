import { Link } from 'react-router'
import BoldSpan from '../components/BoldSpan'
import Overview from '../components/caseStudy/Overview'
import Goal from '../components/caseStudy/Goal'
import MyRole from '../components/caseStudy/MyRole'
import Process from '../components/caseStudy/Process'
import Problem from '../components/caseStudy/Problem'
import UserChallenge from '../components/caseStudy/UserChallenge'
import BusinessOpportunity from '../components/caseStudy/BusinessOpportunity'
import Metodology from '../components/caseStudy/Metodology'
import UserSample from '../components/caseStudy/UserSample'
import ResearchGoal from '../components/caseStudy/ResearchGoal'
import DesignImplications from '../components/caseStudy/DesignImplications'
import KeyFindings from '../components/caseStudy/KeyFindings'
import Personas from '../components/caseStudy/Personas'

import data from '../database/data.json'
import process from '/images/studygroup/process_graph.png'
import user_challenge from '/images/studygroup/user_challenge.png'
import user_persona from '/images/studygroup/user_persona.png'
import key_findings from '/images/studygroup/key_findings.png'
import joseph_pic from '/images/studygroup/joseph.png'
import july_pic from '/images/studygroup/july.png'
import user_journey_joseph from '/images/studygroup/user_journey_joseph.svg'
import user_journey_july from '/images/studygroup/user_journey_july.svg'
import comparative_journeys from '/images/studygroup/comparative_journeys.svg'
import user_flow from '/images/studygroup/user_flow.svg'
import low_res from '/images/studygroup/low_res.svg'
import high_res from '/images/studygroup/hi_res.svg'
import development from '/images/studygroup/development.png'
import testing_release from '/images/studygroup/testing_release.png'
import studygroup_demo from '/images/studygroup/demo.mp4'
import studygroup_demo_poster from '/images/studygroup/mock/home-portrait.png'
import PersonasCard from '../components/caseStudy/PersonasCard'
import ChallengesAndDecisions from '../components/caseStudy/ChallengesAndDecisions'
import LowResHighRes from '../components/caseStudy/LowResHighRes'
import ColoursPalette from '../components/caseStudy/ColoursPalette'
import Development from '../components/caseStudy/Development'
import TestingAndRelease from '../components/caseStudy/TestingAndRelease'
import Conclusions from '../components/caseStudy/Conclusions'


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
                <Overview
                    title="AI StudyGroup Platform - Concept Design"
                    description={
                        <>
                            I designed this concept app to bring together students, hobbyists, and lifelong learners who are passionate about studying and self-improvement.
                            The goal was to create a simple and intuitive platform where users can easily find or propose topics of interest - from design and programming to music and more - and connect
                            with like-minded people to form study groups, both remotely and in person. The clean and minimal design ensures a seamless user experience, making it easy to explore subjects, join discussions, or start new ones.
                        </>
                    } />

                {/* THE GOAL */}
                <Goal
                    title="The Goal"
                    description={
                        <>
                            The goal was to <BoldSpan>simulate the full UX design process</BoldSpan> - from research and problem framing to wireframing, prototyping, and testing - with a focus on designing a product aligned with current user needs
                            and design standards (such as accessibility, inclusivity, and mobile-first principles).
                            <BoldSpan>The project reflects real-world challenges and aims to demonstrate my ability to lead end-to-end UX work in solo or team-based environments.</BoldSpan>
                        </>
                    }
                />

                {/* My Role */}
                <MyRole
                    title="My Role"
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
                    whiteBoxDescription="This project also reflects my ability to anticipate emerging trends, such as community-based learning, and translate them into clear UX strategies and scalable interface patterns. 
                    I created this self-initiated concept project developed to explore emerging trends in collaborative learning, digital communities, and social-driven study platforms."
                    sectionMarginTop={sectionMarginTop}
                    whiteBoxMarginTop={whiteBoxMarginTop}
                />

                {/* Process */}
                <Process
                    title="Process"
                    description='"60% of users have difficult to find a simple app that help them connect people with same interest to share knowledge and learn together"'
                    sectionMarginTop={sectionMarginTop}
                    image={process}
                />

                {/* Problem */}
                <Problem
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
                    title="User Challenge"
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
                />

                {/* Business Opportunity / Design Challenge */}
                <BusinessOpportunity
                    title="Business Opportunity / Design Challenge"
                    description={
                        <>
                            This concept addresses the growing trend of community-based learning and peer-driven education, especially among Gen Z and adult learners who seek flexibility, autonomy, and human connection.
                            The challenge was to design an experience that:<br /><br />
                            - <BoldSpan>Enables</BoldSpan> fast discovery and group formation around topics<br />
                            - <BoldSpan>Encourages</BoldSpan> safe, inclusive, and purposeful interaction<br />
                            - <BoldSpan>Keeps</BoldSpan> the interface minimal and frictionless, especially for mobile use<br /><br />
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                    whiteBoxMarginTop={whiteBoxMarginTop}
                    whiteBoxDescription="The solution had to balance functionality and social dynamics, without turning into a 'social media clone' or an overwhelming tool.
                    The project started from a simple question: 'What if study groups could form as easily as a Tinder match - but for shared learning goals?'"
                />

                {/* Metodology - User Sample - Research Goal */}
                <div className={`${sectionMarginTop} grid grid-cols-1 md:gap-10 gap-5 text-left`}>
                    <img src={user_persona} alt={work.title} className="block rounded-lg justify-self-center" />
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-30">
                        <Metodology
                            title="Metodology"
                            description={
                                <>
                                    <BoldSpan>Competitor analysis</BoldSpan> of platforms such as Discord, Meetup, StudyStream, Reddit communities, and course platforms with social features (e.g., Coursera, Skillshare).<br />
                                    <BoldSpan>Qualitative interviews</BoldSpan> (5 hypothetical users) representing diverse backgrounds (students, professionals, adult learners).<br />
                                    <BoldSpan>Online survey</BoldSpan> (30+ simulated responses) exploring study habits, motivation triggers, and preferred formats of peer collaboration.
                                </>
                            }
                        />
                        <UserSample
                            title="User Sample"
                            description={
                                <>
                                    <BoldSpan>Ages:</BoldSpan> 18-45<br />
                                    <BoldSpan>Profiles:</BoldSpan> university students, career switchers, remote workers, autodidacts.<br />
                                    <BoldSpan>Shared traits:</BoldSpan> high curiosity, digital-first behavior, need for flexibility, some frustration with self-discipline.
                                </>
                            }
                        />
                        <ResearchGoal
                            title="Research Goal"
                            description={
                                <>
                                    Understand <BoldSpan>how self-learners and students currently approach independent study</BoldSpan>, what challenges they face when studying alone,
                                    and how they seek out or benefit from study groups - both online and offline.
                                </>
                            }
                        />
                    </div>
                </div>

                {/* Design Implications */}
                <DesignImplications
                    title="Design Implications"
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

                {/* Key Findings */}
                <KeyFindings
                    title="Key Findings"
                    description={
                        <>
                            - <BoldSpan>Loneliness and demotivation</BoldSpan> are common when studying solo - even more than lack of time.<br />
                            - Users often seek <BoldSpan>lightweight and informal peer support</BoldSpan>, not structured tutoring.<br />
                            - Existing tools (forums, chats, communities) are fragmented and <BoldSpan>not designed around learning rhythms</BoldSpan> or shared goals.<br />
                            - Users prefer platforms that are <BoldSpan>easy to navigate</BoldSpan>, visually clean, and don't feel like traditional academic tools.<br />
                            - In-person meetups are appreciated but <BoldSpan>hard to organize</BoldSpan> without geographic filters and topic tagging.<br />
                            - Many users mentioned that even just knowing someone else is <BoldSpan>"studying the same thing right now"</BoldSpan> is motivating.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                    image={key_findings}
                    workTitle={work.title}
                />

                {/* Personas */}
                <Personas
                    title="Personas"
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

                {/* Key UX Challenges & Design Decisions */}
                <ChallengesAndDecisions
                    title="Key UX Challenges & Design Decisions"
                    description={
                        <>
                            Throughout the design process, several user and product challenges emerged that shaped core design decisions. Some of the most critical included:<br /><br />
                            <BoldSpan>Designing for two very different user types:</BoldSpan><br />While Joseph expects speed and efficiency, July needs simplicity and guidance.<br />
                            The solution was a dual-layered UX: minimal friction for experienced users and contextual help + onboarding for new users - without compromising the interface simplicity.<br />
                            <BoldSpan>Reducing the "tool fatigue" of existing platforms:</BoldSpan><br />Interviews and research showed that users were tired of complex, noisy platforms (like Discord or Meetup).<br />
                            I prioritized a clean visual hierarchy, with immediate access to relevant actions (search, join, chat) and low cognitive load per screen.<br />
                            <BoldSpan>Encouraging first interaction in group chats:</BoldSpan><br />One pain point was the hesitation to send the first message.<br />
                            I introduced "intro prompts" and optional first-message templates to lower social friction and improve engagement.<br />
                            <BoldSpan>Balancing flexibility with structure in group creation:</BoldSpan><br />Users wanted both spontaneous and recurring group formats.<br /><br />
                            The app flow supports creating one-time events or ongoing study groups, with minimal steps and topic-based discovery.
                        </>
                    }
                    sectionMarginTop={sectionMarginTop}
                    whiteBoxMarginTop={whiteBoxMarginTop}
                    whiteBoxDescription="These challenges helped define the product's core interaction model and led to key UI patterns that adapt dynamically to the user's behavior and experience level."
                />

                {/* User Journey Joseph */}
                <div className={`${sectionMarginTop} grid grid-cols-1`}>
                    <img src={user_flow} className="block w-full" />
                </div>

                {/* Low Res VS High Res */}
                <LowResHighRes
                    title="Low Res VS High Res"
                    description="Design must be a simple and intuitive interface, the range of user age is very large (approx 18-60), so there's no need to particular animations or transitions but a solid design with simple shapes and colours."
                    sectionMarginTop={sectionMarginTop}
                />

                {/* Low Res */}
                <div className="sm:mt-20 mt-5 grid grid-cols-1">
                    <img src={low_res} className="block w-full" />
                </div>

                {/* High Res */}
                <div className="sm:mt-20 mt-5 grid grid-cols-1">
                    <img src={high_res} className="block w-full" />
                </div>

                {/* Colours Palette */}
                <ColoursPalette
                    title="Colours Palette"
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
                    title="Development"
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
                    title="Testing & Release"
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
                    image={testing_release}
                    workTitle={work.title}
                />

                {/* Conclusions */}
                <Conclusions
                    title="Conclusions"
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
                    video={studygroup_demo}
                    video_poster={studygroup_demo_poster}
                />

            </section>

        </main>
    )
}

export default StudyGroupDetail 