function ContactButton({
    url,
    text,
    img,
    color = "bg-amber-600",
}: {
    url: string;
    text?: string;
    img?: string;
    color?: string;
}) {
    if (!text) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    group flex flex-1 items-center justify-center
                    rounded-lg border-2 border-orange-800
                    ${color}
                    px-4 py-3
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-amber-500
                    hover:shadow-lg
                    hover:brightness-110
                    sm:px-5
                    lg:px-6
                `}
            >
                <img
                    src={img}
                    alt=""
                    className="h-6 w-6 invert transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                />
            </a>
        );
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                group flex flex-[3] items-center justify-center
                rounded-lg border-2 border-orange-800
                ${color}
                px-4 py-3
                font-semibold text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:border-amber-500
                hover:shadow-lg
                hover:brightness-110
                sm:px-5
                lg:px-6
            `}
        >
            <span className="text-sm sm:hidden">
                {text}
            </span>

            <span className="hidden text-sm md:inline lg:text-base">
                ian080406@gmail.com
            </span>
        </a>
    );
}

export default ContactButton;