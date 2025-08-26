import MobileHeader from "../../components/mobile_header/MobileHeader"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Navigation from "../../components/navigation/Navigation"
import { appDesignItems } from "../../data/DesignData"
import DesignPage from "../../components/designPage/DesignPage"
import GetInTouch from "../../components/get_in_touch/GetInTouch"

export default function App() {

    return (
        <div>
            <MobileHeader />
            <Header />
            <DesignPage
                title="App Design"
                description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
                bgImage="./assets/app-design/desktop/bg-pattern-intro-app.svg"
                items={appDesignItems}
            />
            <Navigation />
            <GetInTouch />
            <Footer />
        </div >
    )
}