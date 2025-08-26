import { useState } from "react"
import LocationComp from "../../components/locations/LocationComp"

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}

        if (!form.name.trim()) newErrors.name = "Can't be empty"
        if (!form.email.trim()) {
            newErrors.email = "Can't be empty"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please use a valid email address"
        }
        if (!form.phone.trim()) newErrors.phone = "Can't be empty"
        if (!form.message.trim()) newErrors.message = "Can't be empty"

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted")
        }
    }

    return (
        <div>
            <div
                className="lg:flex lg:flex-row text-white text-center md:text-start bg-[var(--custom-peach)] 
                        bg-[url(./assets/contact/mobile/bg-pattern-hero-contact-mobile.svg)] lg:bg-[url(./assets/contact/desktop/bg-pattern-hero-desktop.svg)]
                        bg-no-repeat py-10 px-5 lg:py-0 md:mx-10 lg:mx-60 md:rounded-2xl md:px-20"
            >
                <div className="md:flex md:flex-col md:gap-10 md:justify-center lg:w-1/2">
                    <h1 className="text-3xl md:text-5xl py-5 lg:py-0">Contact Us</h1>
                    <p className="pt-5 lg:pr-20 leading-7">
                        Ready to take it to the next level? Let’s talk about your project
                        or idea and find out how we can help your business grow. If you
                        are looking for unique digital experiences that’s relatable to
                        your users, drop us a line.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-10 lg:gap-5 py-20 lg:py-10 lg:w-1/2"
                >
                    <div className="flex flex-row border-b-2 border-white/50">
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) =>
                                setForm((prevForm) => ({ ...prevForm, name: e.target.value }))
                            }
                            className="border-none py-3 px-5 w-full outline-none bg-transparent"
                        />
                        {errors.name && (
                            <p className="flex justify-end items-center italic font-light gap-2 text-white text-sm mt-1 w-full">
                                {errors.name}
                                <span>
                                    <img src="./assets/contact/desktop/icon-error.svg" alt="error icon" />
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="flex flex-row border-b-2 border-white/50">
                        <input
                            type="text"
                            placeholder="Email Address"
                            onChange={(e) =>
                                setForm((prevForm) => ({ ...prevForm, email: e.target.value }))
                            }
                            className="border-none py-3 px-5 w-full outline-none bg-transparent"
                        />
                        {errors.email && (
                            <p className="flex justify-end items-center italic font-light gap-2 text-white text-sm mt-1 w-full">
                                {errors.email}
                                <span>
                                    <img src="./assets/contact/desktop/icon-error.svg" alt="error icon" />
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="flex flex-row border-b-2 border-white/50">
                        <input
                            type="number"
                            placeholder="Phone"
                            onChange={(e) =>
                                setForm((prevForm) => ({ ...prevForm, phone: e.target.value }))
                            }
                            className="border-none py-3 px-5 w-full outline-none bg-transparent"
                        />
                        {errors.phone && (
                            <p className="flex justify-end items-center italic font-light gap-2 text-white text-sm mt-1 w-full">
                                {errors.phone}
                                <span>
                                    <img src="./assets/contact/desktop/icon-error.svg" alt="error icon" />
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="flex flex-row border-b-2 border-white/50">
                        <textarea
                            placeholder="Your Message"
                            onChange={(e) =>
                                setForm((prevForm) => ({ ...prevForm, message: e.target.value }))
                            }
                            className="border-none py-3 px-5 w-full outline-none bg-transparent resize-none h-[150px]"
                        />
                        {errors.message && (
                            <p className="flex justify-end items-center italic font-light gap-2 text-white text-sm mt-1 w-full">
                                {errors.message}
                                <span>
                                    <img src="./assets/contact/desktop/icon-error.svg" alt="error icon" />
                                </span>
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="primary-btn sm:m-auto md:ml-auto md:m-0 mt-10"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
            <LocationComp />
        </div>
    )
}
