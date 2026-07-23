import Item from "./Item";

function ServiceCard({service, serviceDescription} : {service:string, serviceDescription:string}) {
    return (
        <div className="relative flex flex-row gap-3 px-5">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <Item></Item>
            </div>
            <div className="ml-5 space-y-2">
                <h3 className="text-white text-xl font-bold">{service}</h3>
                <p className="text-white">{serviceDescription}</p>
            </div>
        </div>
    )
}

export default ServiceCard;