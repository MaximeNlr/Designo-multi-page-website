import { locationsItems } from "../../data/LocationData"
import { APIProvider, Map } from "@vis.gl/react-google-maps"
import ScrollToHash from "../../utils/ScrollToHash"

export default function Locations() {
    return (
        <div className="flex flex-col gap-20 md:mx-10 lg:mx-60 pb-40">
            <ScrollToHash />
            {locationsItems.map((item, index) => (
                <article
                    id={`location-${index}`}
                    key={index}
                    className={index === 1
                        ? "flex flex-col lg:flex-row md:gap-10 items-stretch"
                        : "flex flex-col lg:flex-row-reverse md:gap-10 items-stretch"}
                >
                    <div className="min-w-[300px] lg:w-[30%]">
                        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
                            <div className="md:rounded-2xl overflow-hidden h-[350px]">
                                <Map defaultCenter={{ lat: item.lat, lng: item.lng }}
                                    defaultZoom={12}
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                        </APIProvider>
                    </div>
                    <div
                        className="flex-1 text-center lg:text-start bg-[var(--custom-beige)] bg-[url(./assets/shared/desktop/bg-pattern-two-circles.svg)]
                            py-20 md:rounded-2xl bg-no-repeat bg-contain lg:pl-28"
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
        </div>
    )
}