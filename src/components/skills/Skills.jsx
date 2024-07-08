import { TbFileTypeHtml } from "react-icons/tb";

const Skills = () => {
    return (
        <div className="border border-black text-center ">
            <h1 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-6">Skill & Tools</h1>
            <p className=" max-w-[780px] m-auto my-4 sm:my-6">The skills that i use to impress the recruters</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-10">
                <div className=" flex flex-col gap-4 sm:gap-6 px-3  ">
                    <h2 className="text-xl sm:text-2xl font-semibold">Frontend Tech</h2>
                    <div className="flex flex-col gap-2 sm:gap-4">
                        <div className="flex justify-center items-center gap-4 ">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">HTML</p>
                                <div>
                                <progress class="progress progress-info  w-36 md:w-40" value="55" max="100"></progress>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">CSS</p>
                                <div>
                                <progress class="progress progress-info w-36 md:w-40" value="40" max="100"></progress>
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
                                <progress class="progress progress-info w-36 md:w-40" value="60" max="100"></progress>
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
                                <progress class="progress progress-info w-36 md:w-40" value="60" max="100"></progress>
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
                                <progress class="progress progress-info w-36 md:w-40" value="65" max="100"></progress>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-4 sm:gap-6 px-3  ">
                    <h2 className="text-xl sm:text-2xl font-semibold">Backend Tech</h2>
                    <div className="flex flex-col gap-2 sm:gap-4">
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">Node js</p>
                                <div>
                                <progress class="progress progress-info w-36 md:w-40" value="25" max="100"></progress>
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
                                <progress class="progress progress-info w-36 md:w-40" value="20" max="100"></progress>
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
                                <progress class="progress progress-info w-36 md:w-40" value="20" max="100"></progress>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div className=" flex flex-col gap-4 sm:gap-6 px-3 ">
                    <h2 className="text-xl sm:text-2xl font-semibold">tools</h2>
                    <div className="flex flex-col gap-2 sm:gap-4">
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">Git</p>
                                <div>
                                <progress class="progress progress-info w-36 md:w-40" value="30" max="100"></progress>
                                </div>
                            </div>
                        </div> 
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">Vercel</p>
                                <div>
                                <progress class="progress progress-info w-36 md:w-40" value="10" max="100"></progress>
                                </div>
                            </div>
                        </div> 
                        <div className="flex justify-center items-center gap-4">
                            <div className="">
                                <TbFileTypeHtml />
                            </div>
                            <div className=" text-start">
                                <p className="">VS code</p>
                                <div>
                                <progress class="progress progress-info w-36 md:w-40" value="50" max="100"></progress>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;