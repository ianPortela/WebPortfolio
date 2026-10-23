
import profileImage from "/src/assets/images/profileImage.webp";

function ImageProfile() {
    return (
        <div className="group flex justify-center">
            <div className="
                relative rounded-full p-1
                bg-gradient-to-br from-amber-500/80
                via-amber-600/20 to-white/5
                shadow-[0_0_35px_rgba(245,158,11,0.10)]
                transition-all duration-500
                group-hover:shadow-[0_0_45px_rgba(245,158,11,0.20)]
            ">
                <img
                    className="
                        size-40 rounded-full
                        border-4 border-[#050505]
                        object-cover
                        sm:size-52
                        md:size-60
                        lg:size-64
                        xl:size-72
                    "
                    src={profileImage}
                    alt="Imagen Ian Portela Miranda"
                />
            </div>
        </div>
    );
}

export default ImageProfile;
