import { Link, useParams } from 'react-router'

function WorkDetail() {
    const { id } = useParams()

    // Mock data - in a real app, you'd fetch this based on the ID
    const workDetails = {
        1: {
            title: "Restaurant App",
            description: "A comprehensive mobile application designed for on-site restaurant use, featuring order management, table reservations, and customer feedback systems.",
            type: "Mobile",
            technologies: ["React Native", "Node.js", "MongoDB"],
            duration: "3 months",
            image: "/mobile.svg",
            features: [
                "Real-time order tracking",
                "Table reservation system",
                "Customer feedback integration",
                "Payment processing",
                "Inventory management"
            ]
        },
        2: {
            title: "Personal Trainer Dashboard",
            description: "A web-based dashboard that allows personal trainers to manage their clients, track progress, and schedule sessions efficiently.",
            type: "Web",
            technologies: ["React", "Express.js", "PostgreSQL"],
            duration: "4 months",
            image: "/web.svg",
            features: [
                "Client management system",
                "Progress tracking",
                "Session scheduling",
                "Payment processing",
                "Analytics dashboard"
            ]
        },
        3: {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution with advanced features for online retail businesses.",
            type: "Web",
            technologies: ["React", "Node.js", "Stripe", "AWS"],
            duration: "6 months",
            image: "/web.svg",
            features: [
                "Product catalog",
                "Shopping cart",
                "Payment integration",
                "Order management",
                "Admin dashboard"
            ]
        }
    }

    const workId = parseInt(id || '0')
    const work = workDetails[workId as keyof typeof workDetails]

    if (!work) {
        return (
            <main className="mt-20">
                <h1 className="text-[40px] font-medium">Work not found</h1>
                <Link to="/work" className="text-[20px] font-regular text-blue-600 hover:underline">
                    ← Back to Works
                </Link>
            </main>
        )
    }

    return (
        <main>
            <section className="mt-20">
                <Link to="/works" className="text-[20px] font-regular text-blue-600 hover:underline mb-8 inline-block">
                    ← Back to Works
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <img src={work.image} alt={work.title} className="w-full rounded-lg" />
                    </div>

                    <div>
                        <h1 className="text-[40px] font-medium mb-4">{work.title}</h1>
                        <p className="text-[20px] font-regular text-gray-600 mb-6">{work.description}</p>

                        <div className="mb-6">
                            <h3 className="text-[24px] font-medium mb-2">Project Details</h3>
                            <p className="text-[16px] font-regular"><strong>Type:</strong> {work.type}</p>
                            <p className="text-[16px] font-regular"><strong>Duration:</strong> {work.duration}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-[24px] font-medium mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {work.technologies.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-[14px] font-regular">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[24px] font-medium mb-2">Key Features</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {work.features.map((feature, index) => (
                                    <li key={index} className="text-[16px] font-regular">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default WorkDetail 