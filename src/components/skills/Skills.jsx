import { useEffect, useState } from "react";
import { TbFileTypeHtml } from "react-icons/tb";

const Skills = () => {
    const [ skills, setSkills]  = useState([])

    useEffect( () =>{
        fetch('skillInfo.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [] )

    // skills.map(
    //     skill => console.log(skill.name, skill.id, skill.learned
    // ));
    return (
        <div className=" border-black text-center ">
            <h1 className="text-2xl sm:text-3xl font-bold mt-6">Skill & Tools</h1>
            <p className=" max-w-[780px] m-auto my-6">The skills that i use to impress the recruters</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-10">
                <div className=" flex flex-col gap-4 sm:gap-6 px-3 py-2">
                    <h2 className="text-xl sm:text-2xl font-semibold m-2">Frontend Tech</h2>
                    <div className="flex flex-col gap-4">
                        {skills.map(skill => (skill.section == "Frontend" &&
                            <div key={skill.id} className="flex justify-center items-center gap-4">
                                <div className="w-10 flex iteam-center">
                                    <img src={skill.logo} alt={skill.name} className="object-cover"/>
                                </div>
                                <div className="text-start relative">
                                    <p className="absolute">{skill.name}</p>
                                    <div className="flex flex-col p-0 mt-4">
                                        <p className="text-end text-xs">{skill.learned}%</p>
                                        <progress className="progress progress-info w-40" value={skill.learned} max="100"></progress>
                                    </div>
                                </div>
                            </div>
                            
                        ))} 
                    </div>
                </div>
                <div className=" flex flex-col gap-4 sm:gap-6 px-3 py-2">
                    <h2 className="text-xl sm:text-2xl font-semibold m-2">Backend Tech</h2>
                    <div className="flex flex-col gap-4">
                        {skills.map(skill => (skill.section == "Backend" &&
                            <div key={skill.id} className="flex justify-center items-center gap-4">
                                <div className="w-10 flex iteam-center">
                                    <img src={skill.logo} alt={skill.name} className="object-cover"/>
                                </div>
                                <div className="text-start relative">
                                    <p className="absolute">{skill.name}</p>
                                    <div className="flex flex-col p-0 mt-4">
                                        <p className="text-end text-xs">{skill.learned}%</p>
                                        <progress className="progress progress-info w-40" value={skill.learned} max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                    
                </div>
                <div className=" flex flex-col gap-4 sm:gap-6 px-3 py-2">
                    <h2 className="text-xl sm:text-2xl font-semibold m-2">tools</h2>
                    <div className="flex flex-col gap-4">
                        {skills.map(skill => (skill.section == "Tools" &&
                            <div key={skill.id} className="flex justify-center items-center gap-4">
                                <div className="w-10">
                                    <img src={skill.logo} alt={skill.name} className="object-cover"/>
                                </div>
                                <div className="text-start relative">
                                    <p className="absolute">{skill.name}</p>
                                    <div className="flex flex-col p-0 mt-4">
                                        <p className="text-end text-xs">{skill.learned}%</p>
                                        <progress className="progress progress-info w-40" value={skill.learned} max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;



{/* <div className="flex flex-col gap-2 sm:gap-4">
                        <div className="flex justify-center items-center gap-4 ">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">HTML</p>
                                <div>
                                <progress className="progress progress-info  w-36 md:w-40" value="55" max="100"></progress>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className="text-start relative">
                                <p className="absolute">CSS</p>
                                <div className="flex flex-col p-0 mt-4">
                                <p className="text-end text-xs">20%</p>
                                <progress className="progress progress-info w-36 md:w-40" value="40" max="100"></progress> 
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className=""> Tailwind CSS</p>
                                <div>
                                <progress className="progress progress-info w-36 md:w-40" value="60" max="100"></progress>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">JavaScript</p>
                                <div>
                                <progress className="progress progress-info w-36 md:w-40" value="60" max="100"></progress>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">React js</p>
                                <div>
                                <progress className="progress progress-info w-36 md:w-40" value="65" max="100"></progress>
                                </div>
                            </div>
                        </div>
                    </div>
    
    <div className="flex flex-col gap-2 sm:gap-4">
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">Node js</p>
                                <div>
                                <progress className ="progress progress-info w-36 md:w-40" value="25" max="100"></progress>
                                </div>
                            </div>
                        </div>                       
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">Express js</p>
                                <div>
                                <progress className="progress progress-info w-36 md:w-40" value="20" max="100"></progress>
                                </div>
                            </div>
                        </div>                       
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">MongodDB</p>
                                <div>
                                <progress className="progress progress-info w-36 md:w-40" value="20" max="100"></progress>
                                </div>
                            </div>
                        </div>                       
                    </div> */}