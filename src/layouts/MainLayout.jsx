import MobileHeader from "../components/mobile_header/MobileHeader"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import GetInTouch from "../components/get_in_touch/GetInTouch";
import ScrollToTop from "../utils/ScrollToTop";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main className="bg-[url(./assets/shared/desktop/bg-pattern-leaf.svg)] bg-no-repeat bg-[position:100%_80%]" >
            <ScrollToTop />
            <Header />
            <MobileHeader />
            <Outlet />
            <GetInTouch />
            <Footer />
        </main >
    )
}