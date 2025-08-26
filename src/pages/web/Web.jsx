import MobileHeader from "../../components/mobile_header/MobileHeader"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Navigation from "../../components/navigation/Navigation"
import { webDesignItems } from "../../data/DesignData"
import DesignPage from "../../components/designPage/DesignPage"
import GetInTouch from "../../components/get_in_touch/GetInTouch"

export default function Web() {

    return (
        <div>
            <MobileHeader />
            <Header />
            <DesignPage
                title="Web Design"
                description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
                bgImage="./assets/web-design/desktop/bg-pattern-intro-web.svg"
                items={webDesignItems}
            />
            <Navigation />
            <GetInTouch />
            <Footer />
        </div >
    )
}