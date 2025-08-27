export default function DesignPage({ title, description, bgImage, items }) {
    return (
        <div className="md:mx-5 lg:mx-60">
            <div
                className="flex flex-col items-center gap-10 bg-[var(--custom-peach)] bg-no-repeat text-white px-5 py-16 md:rounded-2xl"
                style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            >
                <h1 className="text-3xl lg:text-5xl">{title}</h1>
                <p className="text-center lg:w-1/3">{description}</p>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-14 lg:gap-10 px-5 py-20 lg:px-0" >
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="md:flex md:flex-row lg:flex-col lg:w-full"
                    >
                        <img
                            className="rounded-t-2xl md:rounded-t-none md:rounded-bl-2xl md:rounded-tl-2xl lg:rounded-bl-none lg:rounded-t-2xl md:w-1/2 lg:w-full"
                            src={item.image} alt=""
                        />
                        <div
                            className="flex flex-col md:justify-center lg:justify-normal text-center gap-5 bg-[var(--custom-beige)]
                                py-10 px-5 rounded-b-2xl md:rounded-bl-none md:rounded-tr-2xl lg:rounded-tr-none lg:rounded-b-2xl lg:w-full
                                lg:min-h-[200px] group cursor-pointer hover:bg-[var(--custom-peach)] hover:text-white transition-colors duration-300"
                        >
                            <p className="text-[var(--custom-peach)] text-2xl tracking-[5px] group-hover:text-white transition-colors duration-300">{item.title}</p>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}