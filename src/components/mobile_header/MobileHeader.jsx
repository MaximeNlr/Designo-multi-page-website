import { useState } from "react"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

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
                <button
                    aria-label="Open menu"
                    onClick={() => setIsActive(true)}
                >
                    <img src="./assets/shared/mobile/icon-hamburger.svg" alt="" />
                </button>
                :
                <button
                    aria-label="Close menu"
                    onClick={() => setIsActive(false)}
                >
                    <img src="./assets/shared/mobile/icon-close.svg" alt="" />
                </button>
            }
            {isActive &&
                <AnimatePresence mode="wait">
                    <motion.nav
                        initial={{ x: -400 }}
                        animate={{ x: 0 }}
                        exit={{ x: -400 }}
                        transition={{ duration: 0.4 }}
                        className="absolute flex flex-col gap-10 px-5 tracking-[2px] py-10 text-2xl h-screen left-0 top-[67px] bg-black/70 w-full text-white"
                    >
                        <Link
                            onClick={() => setIsActive(false)}
                            to="/about"
                        >
                            OUR COMPANY</Link>
                        <Link
                            onClick={() => setIsActive(false)}
                            to="/locations"
                        >
                            LOCATIONS
                        </Link>
                        <Link
                            onClick={() => setIsActive(false)}
                            to="/contact"
                        >
                            CONTACT
                        </Link>
                    </motion.nav>
                </AnimatePresence>
            }
        </header >
    )
}