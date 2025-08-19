import { Link } from 'react-router'
import data from '../database/data.json'
import home from '/images/dailycoach/home.png'
import nutrition from '/images/dailycoach/nutrition.png'
import workout from '/images/dailycoach/workout.png'
import check from '/images/dailycoach/check.png'
import dev from '/images/dailycoach/dev_area.png'


function DailyCoachDetail() {

    const work = data.dailycoach

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
                    <h1 className="text-[32px] md:text-[48px] font-medium text-center leading-[1.2]">Personal Trainer Dashboard - Concept Design</h1>
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">Overview</h2>
                    <p className="mb-5 md:mb-20 text-[16px] md:text-[20px] font-light">
                        This concept explores the design of a personal fitness dashboard aimed at helping users stay on track with their workouts, nutrition, and progress.
                        The main goal was to create an intuitive, visually engaging interface that simplifies tracking and supports consistency over time.
                        The project is reflected under a dual mindset of UX design and development, with attention to both user experience and implementation feasibility.
                    </p>
                </div>

                {/* THE GOAL */}
                <div className="mt-10 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <img src={home} alt={work.title} className="rounded-lg" />
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">The Goal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2 text-[16px] md:text-[20px] font-light'>The goal of this concept is to provide a simple yet informative dashboard that gives users a clear overview of their current training status.
                            The home screen features a collection of widgets highlighting key areas such as training progress, performance graphs, assigned trainer, and dietary plan.
                            At the top, a status bar displays the user's current goals and overall progress at a glance.</p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* WORKOUT */}
                <div className="mt-20 md:mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <img src={workout} alt={work.title} className="rounded-lg" />
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">Easy to use but very useful</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2 text-[16px] md:text-[20px] font-light'>The workout section is designed to offer a clear and organized view of the user's training sessions.
                            Exercises are grouped in an accordion-style layout to keep the interface clean and easily scannable.
                            Each entry can be expanded to reveal visual feedback on progress, helping users quickly understand how their performance evolves over time.
                            A calendar widget on the side allows users to explore past and upcoming workout sessions, supporting planning and consistency.
                            There is the possibility to create the workout or import one already compiled</p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* NUTRITION */}
                <div className="mt-20 md:mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <img src={nutrition} alt={work.title} className="rounded-lg" />
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">Set a target and go</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2 text-[16px] md:text-[20px] font-light'>The nutrition section is built to give users a clear and structured overview of their daily meal plan.
                            On the left, a table breaks down breakfast, lunch, and dinner, showing nutritional values for each item and total calories per meal.
                            On the right, a calendar widget allows users to navigate through their meal plans by date, while a summary widget displays the daily calorie target
                            along with a color-coded legend to help users quickly identify the balance of macronutrients.
                            The layout focuses on clarity and quick insights, supporting healthy habits with minimal effort. The user can both create or import a plan for his/her diet</p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* CHECK */}
                <div className="mt-20 md:mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <img src={check} alt={work.title} className="rounded-lg" />
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">Simple data and smooth user experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2 text-[16px] md:text-[20px] font-light'>The check section is focused on helping users monitor their physical condition over time through periodic health updates.
                            At the top, the next scheduled check-in date is clearly displayed. Below, a compact summary highlights key health metrics such as current weight, body fat percentage,
                            muscle mass, and resting heart rate. A graph at the bottom visualizes the evolution of lean and fat mass month by month, giving users a sense of progression and motivation.
                            As in other sections, a calendar widget on the right provides easy navigation through past and upcoming check-ins. The user can import old checks</p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* DEVELOPMENT */}
                <div className="mt-20 md:mt-50 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <img src={dev} alt={work.title} className="rounded-lg" />
                    <h2 className="text-[24px] md:text-[40px] font-medium text-center">Development</h2>
                    <p className="md:mb-20 text-[16px] md:text-[20px] font-light">
                        While this concept focuses primarily on the user experience and interface design, I also considered the structural logic behind the implementation.
                        The layout separates static and dynamic areas for greater modularity and maintainability. The static sections — such as the top navigation and current date display — frame the page,
                        while the main content area is composed of three dynamic zones: the primary content (charts, tables, accordions), the sidebar widgets, and a compact action area above the widgets
                        containing key buttons for creating workouts, meal plans, and importing data.

                        Given the nature of the interface and the interactions required, this concept is well-suited for a Single Page Application architecture.
                        A modern frontend framework like React or Vue would support efficient state management and dynamic UI rendering. For the backend, Node.js could provide API endpoints capable of delivering real-time data,
                        such as training progress and nutritional updates. Optionally, a scalable cloud infrastructure such as AWS could be used to manage authentication, file storage (e.g. images of meals or charts),
                        and serverless logic to keep costs efficient while ensuring performance.

                        This technical consideration adds an extra layer to the design process, allowing me to bridge the gap between concept and implementation — a skill that supports communication between designers and developers,
                        and often accelerates the development workflow.
                    </p>
                </div>

                {/* CONCLUSION */}
                <div className="mt-20 grid grid-cols-1 md:gap-10 gap-5 text-left">
                    <div className="divider black md:h-[10px] h-[5px] w-[140px] place-self-center"></div>
                    <h2 className="text-[26px] md:text-[40px] font-medium text-center">Final Considerations</h2>
                    <p className="text-[16px] md:text-[20px] font-light">
                        This concept was designed with a clear focus on usability, clarity, and engagement. Every section of the interface aims to reduce friction and guide the user through their training and nutrition
                        journey with intuitive, minimal interactions. While the design prioritizes the user experience, it also takes into account scalability and technical feasibility, proposing a modular structure
                        that could be effectively developed with modern web technologies. This project allowed me to combine my design thinking with my technical background, approaching the solution not only from a UX perspective,
                        but also from a development-oriented mindset. In real-world scenarios, this helps bridge the gap between design and implementation, making communication with developers more fluid and aligned.
                        Rather than building a fully detailed product, I chose to concentrate on the most meaningful parts of the experience — from data visualization to component structure — in order to highlight
                        my approach to design thinking, logic, and interface clarity. If further developed, the concept could evolve with real user feedback and include personalized coaching features, smart notifications,
                        or integrations with fitness devices — while always keeping simplicity and user needs at the core.
                    </p>
                </div>

            </section>

        </main>
    )
}

export default DailyCoachDetail 