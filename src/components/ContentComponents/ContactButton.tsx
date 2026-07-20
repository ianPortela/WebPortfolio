function ContactButton({url, text, img} : {url:string, text?:string, img?:string}) {
    if(text === undefined){
        return (
            <a className="bg-amber-500 px-6 py-3 rounded-lg" href={url} target="blank">
                <img className="inline w-8 h-8 invert brightness-0" src={img}/>
            </a>
        )
    } else {
        return (
            <a className="bg-amber-500 px-6 py-3 text-white underline font-bold rounded-lg" href={url} target="blank">
                {text}
            </a>
        )
    }
}

export default ContactButton