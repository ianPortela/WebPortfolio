function Item() {
    return (
        <div className="
            flex size-5 shrink-0 items-center justify-center
            rounded-full border border-amber-500/40
            bg-amber-500/10
            transition-all duration-300
            group-hover:border-amber-500/70
            group-hover:bg-amber-500/20
        ">
            <div className="
                size-2 rounded-full bg-amber-500
                shadow-[0_0_8px_rgba(245,158,11,0.55)]
            " />
        </div>
    );
}

export default Item;
