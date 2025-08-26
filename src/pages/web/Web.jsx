import { webDesignItems } from "../../data/DesignData"
import DesignPage from "../../components/designPage/DesignPage"

export default function Web() {

    return (
        <div>
            <DesignPage
                title="Web Design"
                description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
                bgImage="./assets/web-design/desktop/bg-pattern-intro-web.svg"
                items={webDesignItems}
            />
        </div >
    )
}