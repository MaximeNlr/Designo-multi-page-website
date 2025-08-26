import { graphicDesignItems } from "../../data/DesignData"
import DesignPage from "../../components/designPage/DesignPage"

export default function Graphic() {

    return (
        <div>
            <DesignPage
                title="Graphic Design"
                description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
                bgImage="./assets/graphic-design/desktop/bg-pattern-intro-graphic.svg"
                items={graphicDesignItems}
            />
        </div >
    )
}