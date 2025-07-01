import { Link } from 'react-router'
import data from '../database/data.json'
import flow from '../../public/images/restapp/flow.png'
import welcome from '../../public/images/restapp/1.png'
import detail from '../../public/images/restapp/2.png'
import recap from '../../public/images/restapp/3.png'

function RestAppDetail() {

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
            <section className="mt-20">

                {/* BACK TO WORKS */}
                {/* <Link to="/works" className="text-[20px] font-regular text-blue-600 hover:underline mb-8 inline-block">
                    ← Back to Works
                </Link> */}

                {/* OVERVIEW */}
                <div className="mt-10 grid grid-cols-1 gap-5 text-center">
                    <h1 className="text-[48px] font-medium text-center">Use case - Ordering a product</h1>
                    <h2 className="text-[40px] font-medium text-center">Overview</h2>
                    <p className="mb-20 text-[20px] font-light">
                        This project involved designing a mobile app intended for direct use by customers inside pubs or restaurants,
                        aimed at simplifying and speeding up the ordering experience.
                        The interface is minimal, visual, and intuitive, with large images to highlight dishes and create a distinct
                        experience compared to traditional digital menus.
                    </p>
                </div>

                {/* THE GOAL */}
                <div className="mt-10 grid grid-cols-1 gap-10 text-left">
                    <img src={flow} alt={work.title} className="rounded-lg w-full" />
                    <h2 className="text-[40px] font-medium text-center">The Goal</h2>
                    <div className="grid grid-cols-1 md:gap-10">
                        <p className='col-span-2 text-[20px] font-light'>
                            The core goal of this concept is to offer a seamless, low-friction ordering experience that works for anyone — whether tech-savvy or not — directly from their table.
                            The entire flow is designed to minimize the number of interactions required to place an order, allowing the user to browse, select, and confirm in just a few intuitive steps.
                            Starting from a single tap to access the menu, the user is guided through a simple and visually engaging experience: scroll through large, inviting images of dishes,
                            tap to add them to the cart, instantly see the updated total, and confirm the order. There's no need for login, profile creation, or extra steps that might slow down the process.
                            This streamlined approach not only speeds up service but also ensures accessibility for all types of users — from young customers in a rush to older ones who may not be used to digital menus.
                            Every decision in the flow was made to reduce hesitation, support clarity, and enhance the pleasure of ordering.</p>
                    </div>
                </div>

                {/* WELCOME SCREEN & MENU NAVIGATION */}
                <div className="mt-30 grid gap-10 text-left">
                    <img src={welcome} alt={work.title} className="md:hidden block rounded-lg w-full" />
                    <h2 className="text-[40px] font-medium md:text-left text-center">Welcome Screen & Menu Navigation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                        <p className='col-span-1 text-[20px] font-light'>
                            The user journey begins with a full-screen welcome screen designed to evoke appetite and set the mood.
                            This screen uses a vertical carousel of high-quality food images to engage the user visually, immediately creating an emotional connection with the dining experience.
                            On the right side, a clearly visible “Menu” button allows the user to proceed to the ordering interface with a single tap.
                            Once in the menu section, the layout remains minimal and intuitive: a horizontal slider at the top lets users filter the content by category (e.g., food, drinks, desserts), helping them
                            focus on what they're interested in.Below the slider, a scrollable list displays individual menu items, each represented by a large photo, product name, and price. Users can interact with each item
                            through a stepper component — a compact UI element that allows them to increment or remove quantities with minimal effort.At the bottom of the screen, a fixed action area includes
                            a prominent “Confirm Order” button, followed by the real-time total. This consistent, anchored layout ensures that users always have a clear sense of their selections and can finalize their
                            order quickly and confidently.</p>
                        <img src={welcome} alt={work.title} className="hidden md:block rounded-lg md:justify-self-end" />
                    </div>
                </div>

                {/* PRODUCT DETAIL VIEW */}
                <div className="mt-30 grid gap-10">
                    <img src={detail} alt={work.title} className="md:hidden block rounded-lg w-full" />
                    <h2 className="text-[40px] font-medium md:text-right text-center">Product Detail View</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                        <img src={detail} alt={work.title} className="hidden md:block rounded-lg w-full md:max-w-[500px]" />
                        <p className='col-span-1 text-[20px] font-light text-left'>
                            Once a menu item is selected, the user is taken to a dedicated product detail screen designed to inform and entice at the same time.
                            At the top, a breadcrumb navigation with a back arrow allows users to understand their current position and return easily to the menu list.
                            The main section features a large, high-quality image of the selected item — purposely prominent to trigger visual appetite and support confident decision-making.
                            Below the image, users find the product name, its category (e.g., meat, fish, vegetables), the estimated preparation time, and a short description crafted to be easy to scan and pleasant to read.
                            The stepper component appears again beside the price, allowing users to quickly adjust quantity before adding to the order. As in the menu screen, a persistent bottom area shows the “Confirm Order”
                            button and the current total, ensuring consistency and reducing friction at any step.The focus of this screen is to maintain a smooth, enjoyable
                            experience — visually rich yet functionally minimal — so users can browse and select with clarity, speed, and confidence.</p>
                    </div>
                </div>

                {/* ORDER RECAP */}
                <div className="mt-30 grid gap-10">
                    <img src={recap} alt={work.title} className="md:hidden block rounded-lg w-full" />
                    <h2 className="text-[40px] font-medium md:text-left text-center">Order Recap</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                        <p className='col-span-1 text-[20px] font-light text-left'>
                            The final step in the flow is the recap screen, where users can review their selected items before submitting the order.
                            At the top, a breadcrumb indicates the current section and includes a back arrow to return to the menu if needed.
                            The main content area displays a familiar, consistent layout: each product is shown exactly as it appeared in the menu — with its image, name, price, and the stepper
                            component — allowing users to make quick final adjustments without learning a new interface.
                            The bottom section is slightly adapted to reinforce the final step of the process.
                            In addition to the total price, it includes the table number and a clear, prominent “Send Request” button.
                            This call-to-action highlights the intent: to notify the kitchen or central system of the order, without initiating any immediate payment.
                            The goal of this screen is to give users confidence and clarity before sending their order.
                            By keeping the design consistent and the interaction minimal, the experience remains simple, fast, and frictionless — right up to the final confirmation.</p>
                        <img src={recap} alt={work.title} className="hidden md:block rounded-lg w-full md:max-w-[500px] md:justify-self-end" />
                    </div>
                </div>

                {/* CONCLUSION */}
                <div className="mt-30 grid gap-10">
                    <div className="divider black h-[10px] w-[140px] place-self-center"></div>
                    <h2 className="text-[40px] font-medium text-center">Final Considerations</h2>
                    <div className="grid grid-cols-1 md:gap-10">
                        <p className='col-span-1 text-[20px] font-light text-left'>
                            This concept was designed to offer a fast, intuitive, and visually engaging ordering experience for customers inside restaurants or pubs.
                            The entire interaction flow was kept minimal and direct, allowing users to browse, select, and send their order with as little friction as possible — without logins, registrations, or payment steps.
                            The design leverages large visuals, simplified navigation, and a modular component structure to make the app accessible to a wide range of users, regardless of their technical familiarity or available time.
                            From a development perspective, the simplicity and consistency of the UI make this app an ideal candidate for a cross-platform framework like Flutter.
                            Flutter's widget-based structure and single codebase approach would significantly reduce development time, enabling the delivery of both Android and iOS versions with minimal effort.
                            It would also streamline the team size: a single developer could potentially handle the full implementation, reducing costs while maintaining quality.
                            Overall, this concept demonstrates how thoughtful UX design and smart development choices can work together to create a lightweight, focused product that enhances the dining experience without disrupting it.</p>
                    </div>
                </div>








            </section>

        </main>
    )
}

export default RestAppDetail 