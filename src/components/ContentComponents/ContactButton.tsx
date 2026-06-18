function ContactButton({url, text, img} : {url:string, text?:string, img?:string}) {
    if(text === undefined){
        return (
            <a href={url} target="blank">
                <img src={img} width={50} height={50}/>
            </a>
        )
    } else {
        return (
            <a href={url} target="blank">
                {text}
            </a>
        )
    }
}

export default ContactButton