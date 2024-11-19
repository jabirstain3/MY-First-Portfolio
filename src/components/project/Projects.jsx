import { useEffect, useState } from "react";
import ProjectDetails from "../../sheared_components/ProjectDetails";

const Projects = () => {
    const [ projects, setProjects]  = useState([])

    useEffect(() =>{
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [] )
    // console.log(projects);

    return (
        <div className="text-center py-10 sm:py-6 md:py-10">
            <h1 className="text-2xl sm:text-3xl font-bold">My Projects</h1>
            <p className="my-6 max-w-[780px] mx-auto"> hover over the to see the video</p>
            <div className="grid gap-2 sm:gap-4 lg:gap-8 sm:px-4">
                { 
                    projects.map((project) =>
                        <ProjectDetails {...project} key={project.proId}></ProjectDetails>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;