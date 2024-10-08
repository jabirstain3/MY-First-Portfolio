import { useEffect, useState } from "react";

const Projects = () => {
    const [ projects, setProjects]  = useState([])

    useEffect(() =>{
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [] )
    // console.log(projects);

    return (
        <div className="text-center py-10">
            <h1>My Projects</h1>
            <p> hover over the to see the video</p>
            <div className="">
                <p>{projects.length}</p>
                { 
                    projects.map((project) =>
                        <div className="" key={project.proId}>
                            <h1>{project.name}</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;