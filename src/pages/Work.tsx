import { Link } from 'react-router'
import Header from '../components/Header'

function Work() {
    const works = [
        {
            id: 1,
            title: "Restaurant App",
            description: "Mobile app for on-site restaurant use",
            type: "Mobile",
            image: "/mobile.svg"
        },
        {
            id: 2,
            title: "Personal Trainer Dashboard",
            description: "Web dashboard for personal trainers",
            type: "Web",
            image: "/web.svg"
        },
        {
            id: 3,
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution",
            type: "Web",
            image: "/web.svg"
        }
    ]

    return (
        <>
            <Header />
            <main>
                <section className="mt-20">
                    <h1 className="text-[40px] font-medium">MY WORKS</h1>
                    <p className="text-[20px] font-regular mt-5">A collection of my design and development projects</p>
                </section>

                <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work) => (
                        <Link
                            key={work.id}
                            to={`/work/${work.id}`}
                            className="work-item block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <img src={work.image} alt={work.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-[24px] font-medium mb-2">{work.title}</h3>
                            <p className="text-[16px] font-regular text-gray-600 mb-2">{work.description}</p>
                            <span className="text-[14px] font-light text-gray-500">{work.type}</span>
                        </Link>
                    ))}
                </section>
            </main>
        </>
    )
}

export default Work 