function ImageProfile() {
    return (
        <div className="flex justify-center">
            <img
                className="
                    h-40 w-40
                    rounded-full
                    border-4 border-amber-600
                    object-cover
                    sm:h-52 sm:w-52
                    md:h-60 md:w-60
                    lg:h-64 lg:w-64
                    xl:h-72 xl:w-72
                "
                src="src/assets/images/profileImage.webp"
                alt="Imagen Ian Portela Miranda"
            />
        </div>
    );
}

export default ImageProfile;