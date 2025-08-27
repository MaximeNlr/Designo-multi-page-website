import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="hidden md:flex justify-between py-20 md:px-10 lg:px-60">
            <Link to="/">
                <img
                    className="w-[200px]"
                    src="./assets/shared/desktop/logo-dark.png"
                    alt="Company Logo"
                />
            </Link>
            <nav
                aria-label="Primary site navigation"
                className="flex flex-row gap-24">
                <Link to="/about" className="header-link">OUR COMPANY</Link>
                <Link to="/locations" className="header-link">LOCATIONS</Link>
                <Link to="/contact" className="header-link">CONTACT</Link>
            </nav>
        </header>
    )
}