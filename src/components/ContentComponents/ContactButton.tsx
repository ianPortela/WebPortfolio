function ContactButton({url, text, img, color} : {url:string, text?:string, img?:string, color?:string}) {
    if(color === undefined) {
        color = "bg-amber-600"
    }

    if(text === undefined){
        return (
            <a
                className={`group flex flex-[1] ${color} items-center justify-center rounded-lg border-3 border-neutral-600 px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg hover:brightness-110`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="h-8 w-8 invert transition-transform duration-300 group-hover:scale-110"
                    src={img}
                    alt=""
                />
            </a>
        )
    } else {
        return (
            <a
                className={`group flex flex-[3] ${color} items-center justify-center rounded-lg border-3 border-neutral-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg hover:brightness-110`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="sm:hidden">{text}</span>
                <span className="hidden sm:inline">ian080406@gmail.com</span>
            </a>
        )
    }
}

export default ContactButton