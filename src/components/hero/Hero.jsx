import Button from "../../sheared_components/Button";
import portrate from "../../assets/images/undraw_responsive_re_e1nn.svg"

const Hero = () => {
    return (
        <div className="w-full text-center sm:text-left px-2 sm:px-4 lg:px-10 py-10 sm:py-6 md:py-10 flex flex-col sm:flex-row-reverse gap-10 sm:gap-4 items-center">
            <div className="w-full sm:w-1/2 flex justify-center">
                <img src={portrate} alt="" className="w-full aspect-[4/3]" />
            </div>
            <div className="h-full w-full sm:w-1/2 px-2 lg:px-4">
                <p className="text-base font-bold">Hello, I am</p>
                <h1 className="text-3xl sm:text-5xl font-bold my-1 sm:mb-3">AL JABIR</h1>
                <h3 className="text-2xl sm:text-3xl font-semibold my-1 sm:my-4">A Frontend Developer</h3> 
                <p className="sm:mb-2">A tech enthusiast, use Javascript, React.js, Next,js. node.js and Tailwind CSS for websites. Use MERN for web applications.</p>
                <div className="flex gap-2 sm:gap-4 justify-center sm:justify-start my-4 sm:my-6">
                    <Button Children={"Contact Info"} type={"contact"}></Button>
                    <Button Children={"Download CV"} type={"download CV"}></Button>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;