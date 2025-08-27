import MobileHeader from "../components/mobile_header/MobileHeader"
import Header from "../components/header/Header"
import Navigation from "../components/navigation/Navigation"
import GetInTouch from "../components/get_in_touch/GetInTouch"
import Footer from "../components/footer/Footer"
import ScrollToTop from "../utils/ScrollToTop"
import { Outlet } from "react-router-dom"

export default function DesignLayout() {
    return (
        <main>
            <ScrollToTop />
            <Header />
            <MobileHeader />
            <Outlet />
            <Navigation />
            <GetInTouch />
            <Footer />
        </main>
    )
}