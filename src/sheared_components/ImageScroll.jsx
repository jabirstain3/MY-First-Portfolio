import { useState } from "react";

const ImageSeroll = ( {image} ) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-full aspect-video overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={`w-full h-full rounded-xl bg-cover transition-all duration-1000 ease-in-out`} style={{ backgroundImage: `url(${image})`, backgroundPosition: isHovered ? "0 100%" : "0 0",}}/>
        </div>
    );
};


export default ImageSeroll;