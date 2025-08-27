import { Link } from "react-router-dom"
import Navigation from "../../components/navigation/Navigation"

export default function Home() {

    const qualities = [
        {
            title: "PASSIONATE",
            img: "./assets/home/desktop/illustration-passionate.svg",
            text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        },
        {
            title: "RESOURCEFUL",
            img: "./assets/home/desktop/illustration-resourceful.svg",
            text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        },
        {
            title: "FRIENDLY",
            img: "./assets/home/desktop/illustration-friendly.svg",
            text: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        }
    ];

    return (
        <div>
            <div
                className="font-jost lg:flex lg:flex-row items-center h-[900px] relative 
                     bg-[var(--custom-peach)] bg-[url('./assets/home/desktop/bg-pattern-hero-home.svg')] 
                     bg-no-repeat bg-cover text-center lg:text-left text-white pt-24 px-5 lg:pl-20 
                     md:mx-10 lg:mx-60 md:h-[800px] lg:h-[640px] md:rounded-2xl overflow-hidden"
            >
                <div className="flex flex-col items-center lg:items-start gap-10 lg:gap-10 lg:w-1/2 z-10">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Award-winning custom designs and digital branding solutions
                    </h1>
                    <p className="lg:text-lg">
                        With over 10 years in the industry, we are experienced in creating fully
                        responsive websites, app design, and engaging brand experiences. Find out
                        more about our services.
                    </p>
                    <Link className="primary-btn" to="#">
                        LEARN MORE
                    </Link>
                </div>
                <div className="flex justify-center lg:justify-end lg:w-1/2 relative">
                    <img
                        className="min-w-[500px] sm:w-[500px] lg:min-w-[600px] xl:w-[900px] 
                            relative lg:-right-32 lg:translate-y-10 object-cover"
                        src="./assets/home/desktop/image-hero-phone.png"
                        alt="Mockup téléphone"
                    />
                </div>
            </div>
            <Navigation />
            <div className="flex flex-col gap-20 lg:flex-row px-5 py-20 md:mx-10 lg:mx-60 lg:px-0">
                {qualities.map((item) => (
                    <div
                        key={item.title}
                        className="flex flex-col items-center md:flex-row md:gap-10 lg:gap-0 lg:flex-col"
                    >
                        <div
                            className="bg-[url(./assets/home/desktop/bg-pattern-hero-home.svg)] bg-contain bg-center bg-no-repeat md:w-1/2"
                        >
                            <img
                                className=""
                                src={item.img}
                                alt=""
                            />
                        </div>
                        <div className="text-center md:text-start lg:text-center">
                            <p className="py-10 md:py-4 lg:py-10 text-[20px] tracking-[5px]">{item.title}</p>
                            <p className="leading-6 text-[var(--custom-dark-grey)]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}