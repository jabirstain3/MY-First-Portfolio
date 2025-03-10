import Button from "../sheared_components/Button";
import ImageScroll from "./ImageScroll";
import carbuddy from "../../src/assets/thumbnails/carbuddy.png";

const ProjectDetails = () => { 
    const projectCollection = [
        {
            "proId": 29394,
            "name":"ToDoS",
            "thumbnail":carbuddy,
            "descreption": "A todo list application for tracking your daily tasks. You can add, update, delete and set priority of your tasks also mark as complite.",
            "tech":[
                "Typescript", "React", "Tailwind", "Redux", "Vite", "firebase"
            ],
            "live":"https://todos-ead5f.web.app/",
            "github": "https://github.com/jabirstain3/ToDoS-frontend",
            "video": "/"
        },
        {
            "proId": 29334,
            "name":"protent to call",
            "thumbnail":carbuddy,
            "descreption": "lorem",
            "tech":[
                "Html", "Javascript", "React", "Redux"
            ],
            "live":"https://github.com/jabirstain3/ToDoS-frontend",
            "github": "https://todos-ead5f.web.app/",
            "video": "/"
        },
        {
            "proId": 25394,
            "name":"protent to call",
            "thumbnail":carbuddy,
            "descreption": "lorem",
            "tech":[
                "Html", "Javascript", "React", "Redux"
            ],
            "live":"https://github.com/jabirstain3/ToDoS-frontend",
            "github": "https://todos-ead5f.web.app/",
            "video": "/"
        }
    ];

    return (
        <div className="grid gap-2 sm:gap-4 lg:gap-8">
            { projectCollection.map(( project) =>
                <div key={project.proId} className=" rounded-xl w-full lg:w-11/12 m-auto bg-[#f2f2f2] dark:bg-[#0a0a0a]" >
                    <div className="hero-content w-full flex-col sm:flex-row sm:justify-start gap-8 sm:gap-4 lg:gap-10">
                        <ImageScroll key={project.proId} image={project.thumbnail}/>

                        <div className="pl-4 sm:pl-0 text-left w-full grid gap-3">
                            <h1 className="text-2xl font-semibold ">{project.name}</h1>
                            <p className="">{project.descreption}</p>
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
