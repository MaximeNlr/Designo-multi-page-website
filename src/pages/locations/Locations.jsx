import MobileHeader from "../../components/mobile_header/MobileHeader"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { locationsItems } from "../../data/LocationData"
import { APIProvider, Map } from "@vis.gl/react-google-maps"
import GetInTouch from "../../components/get_in_touch/GetInTouch"


export default function Locations() {
    return (
        <div>
            <Header />
            <MobileHeader />
            <main className="flex flex-col gap-20 md:mx-10 lg:mx-60 lg:pb-40">
                {locationsItems.map((item, index) => (
                    <article
                        key={item.title}
                        className={index === 1 ? "flex flex-col lg:flex-row md:gap-10 items-stretch"
                            : "flex flex-col lg:flex-row-reverse md:gap-10 items-stretch"}
                    >
                        <picture className="lg:w-1/2 lg:min-w-[350px]">
                            <source media="(min-width:1024px)" srcSet={item.image} />
                            <source media="(min-width:768px)" srcSet={item.tabletImage} />
                            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
                                <div className="md:rounded-2xl overflow-hidden">
                                    <Map defaultCenter={{ lat: item.lat, lng: item.lng }}
                                        defaultZoom={12}
                                        style={{ width: "100%", height: "350px" }}>
                                    </Map>
                                </div>
                            </APIProvider>
                        </picture>
                        <div
                            className="text-center lg:text-start bg-[var(--custom-beige)] bg-[url(./assets/shared/desktop/bg-pattern-two-circles.svg)]
                             lg:w-full lg:pl-28 py-20 md:rounded-2xl bg-no-repeat bg-contain"
                        >
                            <h2
                                className="text-3xl lg:text-5xl text-[var(--custom-peach)] pb-10"
                            >
                                {item.title}
                            </h2>
                            <address className="lg:flex lg:flex-wrap lg:gap-10">
                                <div className="lg:w-1/3">
                                    <p><strong>{item.office}</strong></p>
                                    <p className="px-24 lg:px-0">{item.address}</p>
                                </div>
                                <div>
                                    <p className="pt-5 lg:pt-0">
                                        <strong>Contact :</strong>
                                    </p>
                                    <p className="lg:whitespace-nowrap">P : <a href={`tel:${item.phone}`}>{item.phone}</a></p>
                                    <p className="lg:whitespace-nowrap">M : <a href={`mailto:${item.mail}`}>{item.mail}</a></p>
                                </div>
                            </address>
                        </div>
                    </article>
                ))}
            </main>
            <GetInTouch />

            <Footer />
        </div>

    )
}