import Button from "../../sheared_components/Button";

const About = () => {
    return (
        <div className=" text-center px-2 sm:px-4 ">
            <h1 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-6">Who am I</h1>
            <p className="my-4 sm:my-6 max-w-[780px] m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, accusantium. Natus voluptas voluptate asperiores? Quidem labore ratione commodi quibusdam aperiam velit, dignissimos illum, quaerat rerum provident sed excepturi tenetur deserunt.</p>
            <div className=" sm:flex justify-center items-center gap-8  ">
                <div className="max-w-[256px] m-auto md:m-0">
                    <h2 className="text-xl sm:text-2xl font-semibold my-2 ">Qualifications</h2>
                    <p className="my-2">Voluptas molestiae quas pariatur facere, recusandae dolore</p>
                </div>
                <div className="max-w-[256px] m-auto md:m-0">
                    <h2 className="text-xl sm:text-2xl font-semibold my-2 ">Qualifications</h2>
                    <p className="my-2">Voluptas molestiae quas pariatur facere, recusandae dolore</p>
                </div>
            </div>
            <div className="my-4 md:mt-8">
                <Button onClick={() =>{console.log("contact Information");}} Children={"Learn More"}></Button>
            </div>
        </div>
    );
};

export default About;