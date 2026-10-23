function LinkToSection({
    idSection,
    text,
    onNavigate,
}: {
    idSection: string;
    text: string;
    onNavigate?: () => void;
}) {
    return (
        <a
            href={idSection}
            onClick={onNavigate}
            className="
                relative block w-full rounded-lg px-4 py-3
                text-sm font-medium text-neutral-400
                transition-colors duration-300
                hover:bg-amber-500/10 hover:text-amber-500

                after:absolute after:bottom-2 after:left-4
                after:h-[2px] after:w-0 after:bg-amber-500
                after:transition-all after:duration-300
                hover:after:w-[calc(100%-2rem)]

                lg:w-auto lg:rounded-none lg:px-0 lg:py-2
                lg:text-base lg:hover:bg-transparent
                xl:text-lg
                lg:after:bottom-0 lg:after:left-0
                lg:hover:after:w-full
            "
        >
            {text}
        </a>
    );
}

export default LinkToSection