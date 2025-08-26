import { appDesignItems } from "../../data/DesignData"
import DesignPage from "../../components/designPage/DesignPage"

export default function App() {

    return (
        <div>
            <DesignPage
                title="App Design"
                description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
                bgImage="./assets/app-design/desktop/bg-pattern-intro-app.svg"
                items={appDesignItems}
            />
        </div >
    )
}