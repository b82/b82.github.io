import { Link } from 'react-router'
import data from '../database/data.json'
import mock1 from '../../public/images/restapp/cover.png'

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
            <section className="mt-20 text-center">

                {/* BACK TO WORKS */}
                <Link to="/works" className="text-[20px] font-regular text-blue-600 hover:underline mb-8 inline-block">
                    ← Back to Works
                </Link>

                {/* USE CASE */}
                <div className="mt-10 grid grid-cols-1 gap-12">
                    <h1 className="text-[40px] font-medium">Use Case - Ordering a product</h1>
                    <img src={mock1} alt={work.title} className="rounded-lg" />
                </div>

                {/* CONTEXT */}
                <div className="mt-20 grid grid-cols-1 gap-12">
                    <h2 className="text-[30px] font-regular">Context</h2>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-4 md:gap-12">
                    <div className="md:col-span-1"></div>
                    <p className='col-span-2'>This project involved designing a mobile app intended for direct use by customers inside pubs or restaurants,
                        aimed at simplifying and speeding up the ordering experience.
                        The interface is minimal, visual, and intuitive, with large images to highlight dishes and create a distinct
                        experience compared to traditional digital menus.</p>
                    <div className="md:col-span-1"></div>
                </div>

                {/* USE CASE GOAL */}
                <div className="mt-20 grid grid-cols-1 gap-12">
                    <h4 className='text-[30px] font-regular'>Use Case Goal</h4>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-12">
                    <div>
                        <p className='text-[20px] font-regular'>Enable the customer to:</p>
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2'>Browse the menu independently in just a few taps</p>
                        <p className='col-span-2'>Visually select appealing products</p>
                        <p className='col-span-2'>Add items to their cart and instantly see the total</p>
                        <p className='col-span-2'>Without requiring registration, login, or complex flows</p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* ACTORS INVOLVED */}
                <div className="mt-20 grid grid-cols-1 gap-12">
                    <div>
                        <p className='text-[30px] font-regular'>Actors Involved</p>
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2'>User (Customer): accesses the app directly from the table (via QR code)</p>
                        <p className='col-span-2'>System (Mobile App): displays menu content, manages selections and cart</p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* PRECONDITIONS */}
                <div className="mt-20 grid grid-cols-1 gap-12">
                    <div>
                        <p className='text-[30px] font-regular'>Preconditions</p>
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2'>The customer has already opened the app on their device</p>
                        <p className='col-span-2'>A connection is available or the app works offline</p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* MAIN FLOW */}
                <div className="mt-20 grid grid-cols-1 gap-12">
                    <div>
                        <p className='text-[30px] font-regular'>Main Flow (Basic Flow)</p>
                        <ul className='list-disc list-inside space-y-1'>
                            <li>1.	The customer opens the app and sees a welcome screen with a single button: “Menu”.</li>
                            <li>2.	After tapping “Menu”, they access the main screen:</li>
                            <ul className='list-disc list-inside space-y-1'>
                                <li>A category slider appears at the top to filter products (e.g., Starters, Drinks, Desserts).</li>
                                <li>A visual list of products is displayed below, featuring large images, names, and prices.</li>
                            </ul>
                            <li>3.	The customer can:</li>
                            <ul className='list-disc list-inside space-y-1'>
                                <li>Freely scroll through the list;</li>
                                <li>Tap a product to open the detail view with an extended description and larger image;</li>
                                <li>Tap “Add” to include it in the cart.</li>
                            </ul>
                            <li>4.	The total amount is always visible (button in the top right corner), and tapping it leads to the “Bill” screen.</li>
                            <li>5.	Once finished, the customer taps on “Bill” to view a summary of selected products and the total amount due.</li>
                        </ul>
                    </div>
                </div>

                {/* POSTCONDITIONS */}
                <div className="mt-20 grid grid-cols-1 gap-12">
                    <div>
                        <p className='text-[30px] font-regular'>Postconditions</p>
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2'>Selected products are added to the cart</p>
                        <p className='col-span-2'>The customer clearly sees the total and can either show it to a waiter or proceed (depending on the service model of the venue)</p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                {/* NON-FUNCTIONAL REQUIREMENTS */}
                <div className="mt-20 grid grid-cols-1 gap-12">
                    <div>
                        <p className='text-[30px] font-regular'>Non-functional Requirements</p>
                        <div className="md:col-span-1"></div>
                        <p className='col-span-2'>Average ordering time: under 2 minutes</p>
                        <p className='col-span-2'>Visual impact: emphasis on large, high-quality images</p>
                        <p className='col-span-2'>User experience: designed for all users, including elderly and non-tech-savvy individuals</p>
                        <p className='col-span-2'>Simplified navigation: each action requires a maximum of 2 taps</p>
                        <div className="md:col-span-1"></div>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-12">
                    <div>
                        <p className='text-[30px] font-regular'>Design Considerations</p>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 md:gap-12">
                            <div className="md:col-span-1"></div>
                            <p className='col-span-2 font-regular'>The core idea behind this design is to reduce friction in the ordering experience by providing a streamlined and visual interface.
                                Large product images, category filtering through a slider, and the absence of intermediate steps (such as login or table selection) make the interaction extremely fast and effective.</p>
                            <div className="md:col-span-1"></div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default RestAppDetail 