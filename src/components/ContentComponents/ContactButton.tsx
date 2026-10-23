
function ContactButton({
    url,
    text,
    img,
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
                aria-label="Abrir enlace de contacto"
                className="
                    group flex min-w-0 flex-1
                    min-h-12 items-center justify-center
                    rounded-xl border border-amber-500/30
                    bg-amber-500
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-amber-400
                    hover:bg-amber-400
                    hover:shadow-[0_8px_20px_rgba(245,158,11,0.25)]
                "
            >
                {img && (
                    <img
                        src={img}
                        alt=""
                        className="
                            size-5 object-contain
                            brightness-0 invert
                            transition-transform duration-300
                            group-hover:scale-110
                            sm:size-6
                        "
                    />
                )}
            </a>
        );
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
                group flex min-w-0 flex-[2]
                min-h-12 items-center justify-center gap-2
                rounded-xl border border-amber-500/30
                bg-amber-500 px-3 py-3
                font-semibold text-black
                transition-all duration-300
                hover:-translate-y-1
                hover:border-amber-400
                hover:bg-amber-400
                hover:shadow-[0_8px_25px_rgba(245,158,11,0.20)]
                sm:px-5
                lg:px-6
            "
        >
            <span className="truncate text-sm">
                {text}
            </span>
        </a>
    );
}

export default ContactButton;
