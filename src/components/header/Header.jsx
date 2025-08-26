import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="hidden md:flex justify-between py-20 md:px-10 lg:px-60">
            <Link to="/">
                <img
                    className="w-[200px]"
                    src="./assets/shared/desktop/logo-dark.png"
                    alt=""
                /></Link>
            <nav className="flex flex-row gap-24">
                <Link to="/about" className="border-b-2 border-transparent hover:border-b-2 hover:border-black duration-150 transition-colors">OUR COMPANY</Link>
                <Link to="/locations" className="border-b-2 border-transparent hover:border-b-2 hover:border-black duration-150 transition-colors">LOCATIONS</Link>
                <Link to="/contact" className="border-b-2 border-transparent hover:border-b-2 hover:border-black duration-150 transition-colors">CONTACT</Link>
            </nav>
        </header>
    )
}