import Button from "../sheared_components/Button";
import ImageScroll from "./ImageScroll";
import carbuddy from "../../src/assets/thumbnails/carbuddy.png";
import equisports from "../../src/assets/thumbnails/equisports.png";

const ProjectDetails = () => { 
    const projectCollection = [
        {
            "thumbnail": carbuddy,
            "proId": 29334,
            "name":"CAREBUDDY",
            "descreption": "A car rental reservation platform that offers use a smooth experience for browsing, booking, and managing cars while providing administrators with tools to manage inventory and reservations.",
            "tech":[
                "TypeScript", "Vite", "React", "Redux", "DaisyUI", "Tailwind CSS",
            ],
            "status": "Under Development",
            "base": "Frontend",
            "live":"https://github.com/jabirstain3/ToDoS-frontend",
            "github": "https://todos-ead5f.web.app/",
            "video": "/"
        },
        {
            "thumbnail": equisports,
            "proId": 29335,
            "name":"Equi Sports",
            "descreption": "A modern e-commerce platform that offers use a smooth experience for browsing, selecting sports product while providing administrators with tools to manage inventory and orders.",
            "tech":[
                "JavaScript", "Vite", "React", "Firebase", "ZenUI", "Tailwind CSS",
            ],
            "status": "Under Development",
            "base": "Frontend",
            "live":"https://github.com/jabirstain3/equi_sports",
            "github": "https://equisports-13522.web.app/",
            "video": "/"
        },
    ];

    return (
        <div className="grid gap-2 sm:gap-4 lg:gap-8 mx-2">
            { projectCollection.map(( project) =>
                <div key={project.proId} className=" rounded-xl w-full lg:w-11/12 m-auto  bg-[#f2f2f2] dark:bg-[#0a0a0a]" >
                    <div className="hero-content w-full flex-col sm:flex-row sm:justify-start gap-8 sm:gap-4 lg:gap-10">
                        {project.base === "Frontend" ? (
                            <ImageScroll key={project.proId} image={project.thumbnail}/>
                            ) : (
                            <div className="w-full aspect-video overflow-hidden">
                                <img src={project.thumbnail} alt={project.name} className="w-full h-full rounded-xl bg-cover" />
                            </div>
                            )
                        }

                        <div className="pl-4 sm:pl-0 text-left w-full grid gap-3">
                            <h1 className="text-2xl font-semibold ">{project.name}<span className="text-lg text-gray-600 font-medium"> ({project.base})</span></h1>
                            <p className="">{project.descreption}</p>

                            {project.status !=="compleate" && (
                                <p className="text-gray-500 font-semibold">Status: {project.status}</p>
                            )}

                            <div className="flex gap-4 flex-wrap justify-start">
                                {
                                    project.tech.map(( tech, index ) =>
                                        <button key={index} className="bg-white dark:bg-black px-3 py-1 font-medium sm:text-lg">{tech}</button>
                                    )
                                }
                            </div>

                            <div className="flex gap-4 justify-start py-3">
                                <Button Children={"live"} type={"link"} url={project.live}></Button>
                                <Button Children={"Github"} type={"link"} url={project.github}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
