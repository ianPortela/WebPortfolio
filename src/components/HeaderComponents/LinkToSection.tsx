function LinkToSection({idSection, text}: {idSection:string, text: string}) {
    return <a className="relative text-lg text-gray-300 transition-colors duration-300 hover:text-amber-500 after:absolute
                        after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all
                        after:duration-300 hover:after:w-full" 
                        href={`#${idSection}`}> {text} </a>
}

export default LinkToSection