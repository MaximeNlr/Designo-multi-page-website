import MobileHeader from "../../components/mobile_header/MobileHeader"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Navigation from "../../components/navigation/Navigation"
import { graphicDesignItems } from "../../data/DesignData"
import DesignPage from "../../components/designPage/DesignPage"
import GetInTouch from "../../components/get_in_touch/GetInTouch"

export default function Graphic() {

    return (
        <div>
            <MobileHeader />
            <Header />
            <DesignPage
                title="Graphic Design"
                description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
                bgImage="./assets/graphic-design/desktop/bg-pattern-intro-graphic.svg"
                items={graphicDesignItems}
            />
            <Navigation />
            <GetInTouch />

            <Footer />
        </div >
    )
}