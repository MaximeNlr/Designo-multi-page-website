import { Link } from "react-router-dom"

export default function LocationComp() {

    const items = [
        {
            title: "CANADA",
            image: "./assets/shared/desktop/illustration-canada.svg",
            sendTo: "/locations#location-0"
        },
        {
            title: "AUSTRALIA",
            image: "./assets/shared/desktop/illustration-australia.svg",
            sendTo: "/locations#location-1"
        },
        {
            title: "UNITED KINGDOM",
            image: "./assets/shared/desktop/illustration-united-kingdom.svg",
            sendTo: "/locations#location-2"
        }
    ]

    return (
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-20 lg:gap-5 py-32 md:py-20 lg:py-32 lg:mx-60 lg:px-32">
            {items.map((item) => (
                <div
                    key={item.title}
                    className="flex flex-col items-center gap-8 whitespace-nowrap"
                >
                    <div className="bg-[url(./assets/shared/desktop/bg-pattern-small-circle.svg)] bg-cover">
                        <img
                            className="w-[202px] h-[202px] object-cover"
                            src={item.image}
                            alt=""
                        />
                    </div>
                    <p className="text-[20px] tracking-[5px]">{item.title}</p>
                    <Link
                        to={item.sendTo}
                        className="secondary-btn text-center"
                    >
                        SEE LOCATION
                    </Link>
                </div>
            ))}
        </div>
    )
}