function LinkToSection({idSection, text}: {idSection:string, text: string}) {
    return <a href={idSection}>{text}</a>
}

export default LinkToSection