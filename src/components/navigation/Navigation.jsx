import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Navigation() {

    const location = useLocation();
    const { pathname } = location;
    console.log(pathname);


    const items = [
        {
            name: "WEB DESIGN",
            img: "./assets/home/mobile/image-web-design.jpg",
            link: "/web-design"
        },
        {
            name: "APP DESIGN",
            img: "./assets/home/mobile/image-app-design.jpg",
            link: "/app-design"
        },
        {
            name: "GRAPHIC DESIGN",
            img: "./assets/home/mobile/image-graphic-design.jpg",
            link: "/graphic-design"
        },
    ]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:auto-rows-[300px] gap-7 mt-10 mx-5 md:mx-10 lg:mx-60 pb-20">
            {items.map((item, index) => (
                <Link
                    to={item.link}
                    className={`${pathname === item.link ? "hidden" : "relative block group"
                        } ${index === 0 ? "lg:row-span-2" : ""}`}
                >
                    <img
                        className="h-full w-full object-cover rounded-2xl"
                        src={item.img}
                        alt=""
                    />
                    <div
                        className="absolute inset-0 flex flex-col items-center gap-2 justify-center bg-black/50 w-full h-full
                         text-white rounded-2xl cursor-pointer hover:bg-[var(--custom-peach)]/50 transtion-colors duration-300"
                    >
                        <p className="text-2xl">{item.name}</p>
                        <p
                            className="flex items-center gap-5 tracking-[5px]"
                            to={item.link}
                        >
                            VIEW PROJECTS
                            <span><img src="./assets/shared/desktop/icon-right-arrow.svg" alt="flex vers la droite" /></span></p>
                    </div>
                </Link>
            ))}
        </div>
    )
}