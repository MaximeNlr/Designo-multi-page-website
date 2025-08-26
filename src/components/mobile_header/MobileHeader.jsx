import { useState } from "react"
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function MobileHeader() {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden'
        }
        if (!isActive) {
            document.body.style.overflow = 'scroll'
        }
    }, [isActive])

    return (
        <header className="flex justify-between md:hidden px-5 py-5 sticky top-0 z-50 bg-white">
            <Link to="/">
                <img
                    className="w-[202px]"
                    src="./assets/shared/desktop/logo-dark.png"
                    alt=""
                />
            </Link>
            {isActive === false ?
                <button onClick={() => setIsActive(true)}>
                    <img src="./assets/shared/mobile/icon-hamburger.svg" alt="" />
                </button>
                :
                <button onClick={() => setIsActive(false)}>
                    <img src="./assets/shared/mobile/icon-close.svg" alt="" />
                </button>
            }
            {isActive &&
                <nav className="absolute flex flex-col gap-10 px-5 tracking-[2px] py-10 text-2xl h-screen left-0 top-[62px] bg-black/70 w-full text-white">
                    <Link to="/about">OUR COMPANY</Link>
                    <Link to="/locations">LOCATIONS</Link>
                    <Link to="/contact">CONTACT</Link>
                </nav>
            }
        </header>
    )
}