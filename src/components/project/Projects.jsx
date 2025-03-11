import ProjectDetails from "../../sheared_components/ProjectDetails";

const Projects = () => {

    return (
        <div className="text-center py-10 sm:py-6 md:py-10">
            <h1 className="text-2xl md:text-4xl font-extrabold">My Projects</h1>
            <p className="my-6 max-w-[780px] mx-auto"> hover over the to see the video</p>
            <ProjectDetails />
        </div>
    );
};

export default Projects;