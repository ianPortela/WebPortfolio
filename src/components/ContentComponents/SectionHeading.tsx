type SectionHeadingProps = {
    eyebrow: string
    title: string
    description?: string
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
            <header className="max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.25em] text-amber-500"> 
                {eyebrow} 
            </p>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
            <p className="mt-5 max-w-2xl leading-7 text-neutral-500">
                {description}
            </p>
            )}
        </header>
    )
}