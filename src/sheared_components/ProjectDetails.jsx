import Button from "../sheared_components/Button";

const ProjectDetails = ({ name, thumbnail, descreption, tech, live, github, video}) => {
    // console.log(proId, name, descreption, tech, live, github, video);

    return (
        <div className="hero" >
            <div className="hero-content flex-col sm:flex-row sm:justify-start gap-8 sm:gap-4 lg:gap-10">
                <div  onClick={() => document.getElementById('my_modal_3').showModal()} className="w-full rounded-lg shadow-lg shadow-black dark:shadow-slate-100">
                    <img src={thumbnail} className="w-full rounded-lg" />
                </div>
                <div className="pl-4 sm:pl-0 text-left w-full grid gap-3">
                    <h1 className="text-2xl font-semibold ">{name}</h1>
                    <p className="">{descreption}</p>
                    <div className="flex gap-4 flex-wrap justify-start">
                        {
                            tech.map((tech) =>
                                <button className="bg-[#f2f2f2] dark:bg-[#0a0a0a] px-3 py-1 font-medium sm:text-lg">{tech}</button>
                            )
                        }
                    </div>
                    <div className="flex gap-4 justify-start py-3">
                    <Button Children={"live"} type={"link"} url={live}></Button>
                    <Button Children={"Github"} type={"link"} url={github}></Button>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default ProjectDetails;

// import Button from "../sheared_components/Button";

// const ProjectDetails = ({ proId, name, descreption, tech, live, github, video}) => {
//     // console.log(proId, name, descreption, tech, live, github, video);
//     return (
//         <div className="hero" >
//             <div className="hero-content flex-col sm:flex-row sm:justify-start gap-8 sm:gap-6 lg:gap-10">
//                 <img src="../../src/assets/images/tyche-free-website-template-1867156719.jpg" className="w-full sm:w-[50%] rounded-lg shadow-lg shadow-black dark:shadow-slate-100" />
//                 <div className="sm:text-left w-full grid gap-3">
//                     <h1 className="text-2xl font-semibold ">{name}</h1>
//                     <p className="">{descreption}</p>
//                     <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
//                         {
//                             tech.map((tech) =>
//                                 <button className="bg-[#f2f2f2] dark:bg-[#0a0a0a] px-3 py-1 font-medium sm:text-lg">{tech}</button>
//                             )
//                         }
//                     </div>
//                     <div className="flex gap-4 justify-center sm:justify-start py-3">
//                     <Button Children={"live"} type={"link"} url={live}></Button>
//                     <Button Children={"Github"} type={"link"} url={github}></Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProjectDetails;