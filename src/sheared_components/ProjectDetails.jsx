import Button from "../sheared_components/Button";

const ProjectDetails = ({ proId, name, descreption, tech, live, github, video}) => {
    // console.log(proId, name, descreption, tech, live, github, video);
    return (
        <div className="hero">
            <div className="hero-content flex-col sm:flex-row sm:justify-start gap-8 sm:gap-6 lg:gap-10">
                <img src="../../src/assets/images/tyche-free-website-template-1867156719.jpg" className="w-full sm:w-[50%] rounded-lg shadow-lg shadow-black" />
                <div className="sm:text-left w-full grid gap-3">
                    <h1 className="text-2xl font-semibold ">{name}</h1>
                    <p className="">{descreption}</p>
                    <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
                        {
                            tech.map((tech) =>
                                <button className="bg-stone-200 dark:bg-gray-900 rounded-2xl sm:rounded-3xl px-3 py-1 sm:px-5 sm:py-2 font-medium sm:text-lg">{tech}</button>
                            )
                        }
                    </div>
                    <div className="flex gap-4 justify-center sm:justify-start py-3">
                    <Button Children={"live"} type={"link"} url={live}></Button>
                    <Button Children={"Github"} type={"link"} url={github}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;