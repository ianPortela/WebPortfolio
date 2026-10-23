
import Item from "./Item";

function ServiceCard({
    service,
    serviceDescription,
}: {
    service: string;
    serviceDescription: string;
}) {
    return (
        <div className="
            group relative flex flex-row gap-4
            rounded-2xl border border-white/[0.08]
            bg-neutral-900/40 p-5
            transition-all duration-300
            hover:-translate-y-1
            hover:border-amber-500/30
            hover:bg-neutral-900/80
        ">
            <div className="mt-1 shrink-0">
                <Item />
            </div>

            <div className="space-y-2">
                <h3 className="
                    text-lg font-semibold tracking-tight
                    text-white transition-colors duration-300
                    group-hover:text-amber-500
                    sm:text-xl
                ">
                    {service}
                </h3>

                <p className="
                    text-sm leading-7 text-neutral-400
                    sm:text-base
                ">
                    {serviceDescription}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
