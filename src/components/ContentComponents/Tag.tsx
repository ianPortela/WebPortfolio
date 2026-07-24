import icJava from "../../assets/icons/java.svg";
import icSpringBoot from "../../assets/icons/spring-boot.svg";
import icKotlin from "../../assets/icons/kotlin.svg";
import icJavaScript from "../../assets/icons/javascript.svg";
import icTypeScript from "../../assets/icons/typescript.svg";
import icHTML from "../../assets/icons/html.svg";
import icCSS from "../../assets/icons/css.svg";
import icBootstrap from "../../assets/icons/bootstrap.svg";
import icDatabase from "../../assets/icons/database.svg";
import icReact from "../../assets/icons/react.svg";
import icTailwindCSS from "../../assets/icons/tailwind-css.svg";

export const technologies = {
    Java: {
        icon: icJava,
        category: "Backend",
    },
    "Spring Boot": {
        icon: icSpringBoot,
        category: "Backend",
    },
    Kotlin: {
        icon: icKotlin,
        category: "Backend",
    },
    JavaScript: {
        icon: icJavaScript,
        category: "Frontend",
    },
    TypeScript: {
        icon: icTypeScript,
        category: "Frontend",
    },
    HTML: {
        icon: icHTML,
        category: "Frontend",
    },
    CSS: {
        icon: icCSS,
        category: "Frontend",
    },
    Bootstrap: {
        icon: icBootstrap,
        category: "Frontend",
    },
    Room: {
        icon: icDatabase,
        category: "Base de datos",
    },
    MySQL: {
        icon: icDatabase,
        category: "Base de datos",
    },
    "SQL Server": {
        icon: icDatabase,
        category: "Base de datos",
    },
    React: {
        icon: icReact,
        category: "Frontend",
    },
    "Tailwind CSS": {
        icon: icTailwindCSS,
        category: "Frontend",
    },
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