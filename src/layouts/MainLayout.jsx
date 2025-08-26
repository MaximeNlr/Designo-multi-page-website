import MobileHeader from "../components/mobile_header/MobileHeader"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import GetInTouch from "../components/get_in_touch/GetInTouch";
import ScrollToTop from "../utils/scrollToTop";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main>
            <ScrollToTop />
            <Header />
            <MobileHeader />
            <Outlet />
            <GetInTouch />
            <Footer />
        </main>
    )
}