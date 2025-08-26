import Header from "../../components/header/Header"
import MobileHeader from "../../components/mobile_header/MobileHeader"
import Footer from "../../components/footer/Footer"
import LocationComp from "../../components/locations/LocationComp"
import GetInTouch from "../../components/get_in_touch/GetInTouch"

export default function About() {
    return (
        <div>
            <Header />
            <MobileHeader />
            <div className="lg:flex lg:flex-row-reverse md:mx-10 lg:mx-60">
                <picture className="w-full md:w-2/5 lg:w-5/12 flex-shrink-0">
                    <source srcSet="./assets/about/desktop/image-about-hero.jpg" media="(min-width:1024px)" />
                    <source srcSet="./assets/about/tablet/image-about-hero.jpg" media="(min-width:768px)" />
                    <img
                        className="w-full h-auto object-cover lg:rounded-r-2xl"
                        src="./assets/about/mobile/image-about-hero.jpg"
                        alt=""
                    />
                </picture>
                <div className="w-full lg:w-7/12 flex flex-col lg:justify-center gap-10 bg-[var(--custom-peach)]
                    bg-[url(./assets/about/mobile/bg-pattern-hero-about-mobile.svg)]
                    md:bg-[url(./assets/about/desktop/bg-pattern-hero-about-desktop.svg)]
                    text-white text-center lg:text-start py-20 px-5 md:px-20 lg:px-32 lg:rounded-l-2xl">
                    <h1 className="text-4xl lg:text-5xl">About Us</h1>
                    <p className="leading-[25px]">
                        Founded in 2010, we are a creative agency that produces lasting results for our clients.
                        We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that
                        make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                    </p>
                </div>
            </div>
            <div className="lg:flex lg:flex-row text-white md:mx-10 lg:mx-60 md:my-40 lg:rounded-2xl">
                <picture className="w-full md:w-2/5 lg:w-5/12 flex-shrink-0">
                    <source srcSet="./assets/about/desktop/image-world-class-talent.jpg" media="(min-width:1024px)" />
                    <source srcSet="./assets/about/tablet/image-world-class-talent.jpg" media="(min-width:768px)" />
                    <img
                        className="w-full h-auto object-cover lg:rounded-l-2xl"
                        src="./assets/about/mobile/image-world-class-talent.jpg"
                        alt=""
                    />
                </picture>
                <div className="w-full lg:w-7/12 flex flex-col lg:justify-center gap-10 bg-[var(--custom-beige)]
                    bg-[url(./assets/about/mobile/bg-pattern-hero-about-mobile.svg)]
                    md:bg-[url(./assets/about/desktop/bg-pattern-hero-about-desktop.svg)]
                    text-white text-center lg:text-start py-20 px-5 md:px-20 lg:px-32 lg:rounded-r-2xl">
                    <h2 className="text-4xl text-[var(--custom-peach)]">World-class talent</h2>
                    <p className="leading-[25px] text-[var(--custom-dark-grey)]">
                        We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept
                        to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                    </p>
                    <p className="text-[var(--custom-dark-grey)]">
                        Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important.
                        We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our
                        high-quality outcomes that encapsulates their brand’s story and mission.
                    </p>
                </div>
            </div>
            <LocationComp />
            <div className="lg:flex lg:flex-row-reverse text-white md:mx-10 lg:mx-60 lg:my-10 text-center pb-20">
                <picture className="w-full md:w-2/5 lg:w-5/12 flex-shrink-0 lg:rounded-r-2xl">
                    <source srcSet="./assets/about/desktop/image-real-deal.jpg" media="(min-width:1024px)" />
                    <source srcSet="./assets/about/tablet/image-real-deal.jpg" media="(min-width:768px)" />
                    <img
                        className="w-full h-auto object-cover lg:rounded-r-2xl"
                        src="./assets/about/mobile/image-real-deal.jpg"
                        alt=""
                    />
                </picture>
                <div className="w-full lg:w-7/12 flex flex-col lg:justify-center gap-10 bg-[var(--custom-beige)]
                    bg-[url(./assets/about/mobile/bg-pattern-hero-about-mobile.svg)]
                    md:bg-[url(./assets/about/desktop/bg-pattern-hero-about-desktop.svg)]
                    text-white text-center lg:text-start py-20 px-5 md:px-20 lg:px-32 lg:rounded-l-2xl">
                    <h3 className="text-4xl text-[var(--custom-peach)]">The real deal</h3>
                    <p className="leading-[25px] text-[var(--custom-dark-grey)]">
                        As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                        Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective
                        to every opportunity. We make design and technology more accessible and give you tools to measure success.
                    </p>
                    <p className="text-[var(--custom-dark-grey)]">
                        We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies,
                        we inspire audiences to take action and drive real results.
                    </p>
                </div>
            </div>
            <GetInTouch />
            <Footer />
        </div>
    )
}