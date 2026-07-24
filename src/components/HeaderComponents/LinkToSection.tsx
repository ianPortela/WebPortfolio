function LinkToSection({
    idSection,
    text,
}: {
    idSection: string;
    text: string;
}) {

    return (
        <a
            href={idSection}
            className="
                relative
                text-sm
                font-medium
                text-gray-300
                transition-colors
                duration-300
                hover:text-amber-500
                lg:text-base
                xl:text-lg
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-amber-500
                after:transition-all
                after:duration-300
                hover:after:w-full
            "
        >
            {text}
        </a>
    );
}

export default LinkToSection;