import Button from "../../sheared_components/Button";

const Hero = () => {
    return (
        <div className=" w-full text-center sm:text-left px-2 sm:px-4 lg:px-10">
            <div className="absolute  bg-black/20 sm:bg-inherit h-[100%] max-w-[520px] sm:w-[45%] text-white sm:text-black py-[45%] sm:py-[13%] lg:py-[20%] px-2 lg:px-4 mr-2">
                <p className="text-base font-bold">Hello, I am</p>
                <h1 className="text-3xl sm:text-5xl font-bold my-1 sm:mb-3">AL JABIR</h1>
                <h3 className="text-2xl sm:text-3xl font-semibold my-1 sm:my-4">A Frontend Developer</h3> 
                <p className="sm:mb-2">A tech enthosiest individual. working with web technologys like, react, node, express and mongodb. </p>
                <div className="flex gap-2 sm:gap-4 justify-center sm:justify-start my-4 sm:my-6">
                    <Button Children={"Contact Info"} type={"contact"}></Button>
                    <Button Children={"Download CV"} type={"download CV"}></Button>
                </div>
            </div>
            
            <div className="w-full flex justify-end ">
                <img src="../../../src/assets/images/undraw_responsive_re_e1nn.svg" alt="" className="w-full sm:w-1/2 aspect-[3/4] max-w-[520px]" />
            </div>
        </div>
    );
};

export default Hero;