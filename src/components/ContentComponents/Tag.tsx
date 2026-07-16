function Tag({text} : {text:string}) {
    return <span key={text}>{text}</span>
}

export default Tag