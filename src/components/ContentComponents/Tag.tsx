export const technologies = {
    Java: {
        icon: "src/assets/icons/java.svg",
        category: "Backend",
    },
    "Spring Boot": {
        icon: "src/assets/icons/spring-boot.svg",
        category: "Backend",
    },
    Kotlin: {
        icon: "src/assets/icons/kotlin.svg",
        category: "Backend",
    },
    JavaScript: {
        icon: "src/assets/icons/javascript.svg",
        category: "Frontend",
    },
    TypeScript: {
        icon: "src/assets/icons/typescript.svg",
        category: "Frontend",
    },
    HTML: {
        icon: "src/assets/icons/html.svg",
        category: "Frontend",
    },
    CSS: {
        icon: "src/assets/icons/css.svg",
        category: "Frontend",
    },
    Bootstrap: {
        icon: "src/assets/icons/bootstrap.svg",
        category: "Frontend",
    },
    Room: {
        icon: "src/assets/icons/database.svg",
        category: "Base de datos",
    },
    MySQL: {
        icon: "src/assets/icons/database.svg",
        category: "Base de datos",
    },
    "SQL Server": {
        icon: "src/assets/icons/database.svg",
        category: "Base de datos",
    },
    React: {
        icon: "src/assets/icons/react.svg",
        category: "Frontend",
    },
    "Tailwind CSS": {
        icon: "src/assets/icons/tailwind-css.svg",
        category: "Frontend"
    }
} as const;

export type TechIcon = keyof typeof technologies;

export const technologiesKeys = Object.entries(technologies).reduce(
    (acc, [name, tech]) => {
        (acc[tech.category] ??= []).push(name as TechIcon);
        return acc;
    },
    {} as Record<string, TechIcon[]>
);

function Tag({ type }: { type: TechIcon }) {
    return (
        <span
            className="
                inline-flex
                w-fit
                items-center
                gap-1
                rounded-lg
                border border-orange-400
                px-2 py-1
                text-amber-500
                transition-all
                duration-200
                hover:bg-amber-500
                hover:text-white
                sm:gap-2
                sm:rounded-xl
                sm:px-3
                sm:py-1.5
            "
        >
            <img
                className="
                    h-3 w-3
                    invert
                    sm:h-4 sm:w-4
                    lg:h-5 lg:w-5
                "
                src={technologies[type].icon}
                alt=""
            />

            <span
                className="
                    whitespace-nowrap
                    text-[10px]
                    sm:text-xs
                    lg:text-sm
                "
            >
                {type}
            </span>
        </span>
    );
}

export default Tag;