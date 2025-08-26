import { Link } from "react-router-dom"

export default function Footer() {


    const socialIcons = [
        {
            name: "facebook icon",
            icon: "./assets/shared/desktop/icon-facebook.svg"
        },
        {
            name: "youtube icon",
            icon: "./assets/shared/desktop/icon-youtube.svg"
        },
        {
            name: "twitter icon",
            icon: "./assets/shared/desktop/icon-twitter.svg"
        },
        {
            name: "pinterest icon",
            icon: "./assets/shared/desktop/icon-pinterest.svg"
        },
        {
            name: "instagram icon",
            icon: "./assets/shared/desktop/icon-instagram.svg"
        }
    ]

    return (
        <footer className="flex flex-col gap-10 bg-[var(--custom-black)] text-white py-10 px-5 md:px-20 lg:px-60 pt-40 md:pb-20">
            <div className="flex flex-col md:flex-row lg:justify-between gap-5 items-center md:border-b-2 md:border-[var(--custom-dark-grey)] lg:pb-10">
                <img
                    className="px-11 pb-8 border-b-2 border-[var(--custom-dark-grey)] md:border-none md:w-2xs object-contain"
                    src="./assets/shared/desktop/logo-light.png"
                    alt=""
                />
                <nav className="flex flex-col md:flex-row gap-5 items-center">
                    <Link to="/about" className="border-b-2 border-transparent hover:border-b-2 hover:border-white duration-150 transition-colors">OUR COMPANY</Link>
                    <Link to="/locations" className="border-b-2 border-transparent hover:border-b-2 hover:border-white duration-150 transition-colors">LOCATIONS</Link>
                    <Link to="/contact" className="border-b-2 border-transparent hover:border-b-2 hover:border-white duration-150 transition-colors">CONTACT</Link>
                </nav>
            </div>
            <div className="flex flex-col md:flex-row lg:justify-between gap-10 text-center md:text-base text-white/50">
                <p className="flex flex-col md:gap-2">
                    <strong>Designo Central Office</strong>
                    <span>3886 Wellington Street</span>
                    Toronto, Ontario M9C 3J5
                </p>
                <p>
                    <strong className="flex flex-col lg:gap-2">
                        Contact Us (Central Office)
                        <span>P : +1 253-863-8967</span>
                        contact@designo.co
                    </strong>
                </p>
                <div className="flex justify-center items-end gap-5">
                    {socialIcons.map((item) => (
                        <img className="h-6 w-6 cursor-pointer" src={item.icon} alt={item.name} />
                    ))}
                </div>
            </div>
        </footer>
    )
}