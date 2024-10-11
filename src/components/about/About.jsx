import Button from "../../sheared_components/Button";

const About = () => {
    return (
        <div className="text-center px-2 sm:px-4 py-10 sm:py-6 md:py-10 ">
            <h1 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-7">Who am I</h1>
            <div className="my-6 max-w-[780px] mx-auto">
                <p><strong >Your idea should be online if you want it to grow as a business.</strong></p>
                <p className="my-3">My approach  is all about collaborating your vision with my experience and knowledge of frontend technologies like React.js and next.js to craft a solution. Being unique will enhance your brand and solve the problem of audience engagement. If needed I can also take on the challenge of a full-stack project, as I have got a solid foundation in MERN stack.</p>
                <p className="">The project will come with a polished website and a video walkthrough so you can easily navigate your new platform. To ensure your satisfaction I also offer free maintenance  for 3 to 6 months after the launch of the product. Allowing you to  focus on what you do best, I will handle the technical details.</p>
            </div>
            <div className="h-fit sm:flex justify-center items-start gap-10  ">
                <div className="sm:w-1/2 max-w-[320px] m-auto md:m-0">
                    <h2 className="text-xl sm:text-2xl font-semibold my-3 ">Qualifications</h2>
                    <div className="my-2 grid gap-2">
                        <div className="">
                            <p className=""><strong>Complete Web Development Course</strong></p>
                            <p className="">2024 . Programming Hero</p>
                        </div>
                        <div className="">
                            <p className=""><strong>BSc in CSC</strong></p>
                            <p className="">2026 . IUBAT</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 sm:w-0 h-full sm:h-36  m-auto sm:mx-0 border border-black dark:border-white"></div>
                <div className="sm:w-1/2 max-w-[320px] m-auto md:m-0">
                    <h2 className="text-xl sm:text-2xl font-semibold my-3 ">Experience</h2>
                    <div className="my-2 grid gap-2">
                        <div className="">
                            <p className=""><strong>Dishan Tech</strong></p>
                            <p className="">Software Engineer . Part-time</p>
                            <p className=""> Aug, 2024 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8" >
                <Button  Children={"Learn More"} type="disable"></Button>
            </div>
        </div>
    );
};

export default About;