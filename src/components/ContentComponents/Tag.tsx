const technologies = { 
    Java: "src/assets/icons/java.svg",
    "Spring Boot": "src/assets/icons/spring-boot.svg",
    Kotlin: "src/assets/icons/kotlin.svg",
    JavaScript: "src/assets/icons/javascript.svg",
    TypeScript: "src/assets/icons/typescript.svg", 
    Room: "src/assets/icons/database.svg",
    MySQL: "src/assets/icons/database.svg", 
    "SQL Server": "src/assets/icons/database.svg",
    Bootstrap: "src/assets/icons/bootstrap.svg",
    HTML: "src/assets/icons/html.svg",
    CSS: "src/assets/icons/css.svg"
} as const;

export type TechIcon = keyof typeof technologies;

export const technologiesKeys = Object.keys(technologies) as TechIcon[];

function Tag({type} : {type: TechIcon}) {
    return( <span key={type}>
                <img src={technologies[type]} width={25} height={25}/>{type}
            </span>
    )
}

export default Tag