import Button from "../sheared_components/Button";
import ImageSeroll from "./ImageScroll";

const ProjectDetails = ({ name, thumbnail, descreption, tech, live, github}) => {

    return (
        <div className=" rounded-xl w-full lg:w-11/12 m-auto bg-[#f2f2f2] dark:bg-[#0a0a0a]" >
            <div className="hero-content w-full flex-col sm:flex-row sm:justify-start gap-8 sm:gap-4 lg:gap-10">
                <ImageSeroll image={thumbnail}/>

                <div className="pl-4 sm:pl-0 text-left w-full grid gap-3">
                    <h1 className="text-2xl font-semibold ">{name}</h1>
                    <p className="">{descreption}</p>
                    <div className="flex gap-4 flex-wrap justify-start">
                        {
                            tech.map((tech) =>
                                <button className="bg-white dark:bg-black px-3 py-1 font-medium sm:text-lg">{tech}</button>
                            )
                        }
                    </div>
                    <div className="flex gap-4 justify-start py-3">
                    <Button Children={"live"} type={"link"} url={live}></Button>
                    <Button Children={"Github"} type={"link"} url={github}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
