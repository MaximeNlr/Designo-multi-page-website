import Header from "../../components/header/Header"
import MobileHeader from "../../components/mobile_header/MobileHeader"
import Footer from "../../components/footer/Footer"
import LocationComp from "../../components/locations/LocationComp"
import { useState } from "react"

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: 0,
        message: ""
    })

    return (
        <div>
            <Header />
            <MobileHeader />
            <main>
                <div
                    className="lg:flex lg:flex-row text-white text-center md:text-start bg-[var(--custom-peach)] 
                    bg-[url(./assets/contact/mobile/bg-pattern-hero-contact-mobile.svg)] lg:bg-[url(./assets/contact/desktop/bg-pattern-hero-desktop.svg)]
                     bg-no-repeat py-10 px-5 lg:py-0 md:mx-10 lg:mx-60 md:rounded-2xl md:px-20">
                    <div className="md:flex md:flex-col md:gap-10 md:justify-center lg:w-1/2">
                        <h1 className="text-3xl md:text-5xl py-5 lg:py-0">Contact Us</h1>
                        <p className="pt-5 lg:pr-20 leading-7">
                            Ready to take it to the next level? Let’s talk about your project or idea and find out how
                            we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                        </p>
                    </div>
                    <form
                        action=""
                        className="flex flex-col gap-10 lg:gap-5 py-20 lg:py-10 lg:w-1/2"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={() => setForm(prevForm => ({ ...prevForm, name: e.target.value }))}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Email Address"
                            onChange={() => setForm(prevForm => ({ ...prevForm, email: e.target.value }))}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Phone"
                            onChange={() => setForm(prevForm => ({ ...prevForm, phone: e.target.value }))}
                            required
                        />
                        <textarea
                            name=""
                            id=""
                            placeholder="Your Message"
                            onChange={() => setForm(prevForm => ({ ...prevForm, message: e.target.value }))}
                            required
                            className="border-b-2 border-white/50 py-5 lg:py-2 px-5 outline-none h-[150px] resize-none  hover:border-white/100 cursor-pointer"
                        ></textarea>
                        <button className="primary-btn sm:m-auto md:ml-auto md:m-0 mt-10">SUBMIT</button>
                    </form>
                </div>
                <LocationComp />
            </main>
            <Footer />
        </div>
    )
}