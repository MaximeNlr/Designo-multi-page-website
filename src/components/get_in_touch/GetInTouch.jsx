import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function GetInTouch() {

    const { pathname } = useLocation();

    return (
        <div>
            {pathname !== '/contact' &&
                <div className="relative bottom-0 flex flex-col lg:flex-row items-center 
             bg-[url(./assets/shared/desktop/bg-pattern-call-to-action.svg)] bg-cover bg-no-repeat
             lg:justify-between gap-5 md:gap-0 
             h-auto md:h-[300px] bg-[var(--custom-peach)] text-white 
             mx-5 md:mx-10 md:px-20 lg:mx-60 -mb-20 rounded-2xl 
             px-10 lg:px-28 py-10 lg:py-0">

                    <div className="flex flex-col gap-5 lg:gap-10 lg:w-1/2 text-center lg:text-left">
                        <p className="text-2xl md:text-3xl lg:text-4xl flex flex-col">
                            Let’s talk about <span>your project</span>
                        </p>
                        <p className="text-sm md:text-base lg:flex lg:flex-col">
                            Ready to take it to the next level? Contact us today and find out
                            <span>how our expertise can help your business grow.</span>
                        </p>
                    </div>
                    <Link
                        className="primary-btn whitespace-nowrap mt-5 lg:mt-0"
                        to="/contact">
                        GET IN TOUCH
                    </Link>
                </div>
            }
        </div>
    )
}