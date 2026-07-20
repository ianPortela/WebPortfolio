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
        <span className="inline-flex h-7 sm:h-9 w-fit items-center gap-2 rounded-xl border border-orange-400 px-3 text-amber-500 transition duration-200 hover:bg-amber-500 hover:text-white">
            <img className="size-3 sm:size-5 invert" src={technologies[type].icon} alt="" />
            <span className="whitespace-nowrap text-xs sm:text-sm">
                {type}
            </span>
        </span>
    )
}

export default Tag