import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Navigation() {

    const location = useLocation();
    const { pathname } = location;

    const items = [
        {
            name: "WEB DESIGN",
            image: "./assets/home/desktop/image-web-design-large.jpg",
            imageMobile: "./assets/home/desktop/image-web-design-small.jpg",
            link: "/web-design"
        },
        {
            name: "APP DESIGN",
            image: "./assets/home/mobile/image-app-design.jpg",
            link: "/app-design"
        },
        {
            name: "GRAPHIC DESIGN",
            image: "./assets/home/mobile/image-graphic-design.jpg",
            link: "/graphic-design"
        },
    ]

    const visibleItems = items.filter((i) => i.link !== pathname)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:auto-rows-[300px] gap-7 mt-10 mx-5 md:mx-10 pb-20 lg:pb-40 lg:mx-60 lg:mt-20">
            {visibleItems.map((item, index) => (
                <Link
                    key={item.name}
                    className={`relative block group h-full 
                    ${visibleItems.length === 3 && index === 0 ? "lg:row-span-2" : ""}`}
                    to={item.link}
                >
                    <picture className="">
                        <source srcSet={item.imageMobile} media="(max-width:767px)"
                        />
                        <img
                            className="h-[250px] md:[200px] lg:h-full w-full object-cover rounded-2xl"
                            src={item.image}
                            alt={`Image de l'element de navigation ${item.name}`}
                        />
                    </picture>
                    <div
                        className="absolute inset-0 flex flex-col items-center gap-2 justify-center bg-black/70 w-full h-full
                         text-white rounded-2xl cursor-pointer hover:bg-[var(--custom-peach)]/50 transtion-colors duration-300"
                    >
                        <p className="text-2xl">{item.name}</p>
                        <Link
                            className="flex items-center gap-5 tracking-[5px] lg:text-[15px] font-light"
                            to={item.link}
                        >
                            VIEW PROJECTS
                            <span>
                                <img src="./assets/shared/desktop/icon-right-arrow.svg" alt="flex vers la droite" />
                            </span>
                        </Link>
                    </div>
                </Link>
            ))
            }
        </div >
    )
}