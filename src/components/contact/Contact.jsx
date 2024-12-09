
const Contact = () => {
    return (
        // <div className="w-full text-center sm:text-left px-2 sm:px-4 lg:px-10 py-10 sm:py-6 md:py-10 flex flex-col sm:flex-row-reverse gap-10 sm:gap-4 items-center">
        <div className="w-full min-w-[300px] px-2 md:px-4 py-10 lg:flex md:gap-4 xl:gap-10 justify-around">
            {/* contact form */}
            <div className="border lg:w-[60%] max-w-xl mx-auto">
                <h1 className="text-center text-2xl sm:text-3xl font-bold">Get in tuch</h1>
                <div className="border mx-auto my-8 card bg-[#f2f2f2] dark:bg-[#0a0a0a] w-full max-w-xl shrink-0 shadow-xl">
                    <form className="card-body text-base">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold dark:white ">Name</span>
                        </label>
                        <input type="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">E-mail</span>
                        </label>
                        <input type="email" placeholder=".@gmail.com" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Subject</span>
                        </label>
                        <input type="text" placeholder="Topic of discution" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered text-base h-48 max-h-60" placeholder="Detailed discussion"></textarea>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* contact information */}
            <div className="border w-full lg:w-[36%] mt-6 lg:mt-0 mx-auto">
                <h1 className="text-2xl sm:text-3xl text-center font-bold">Contact me</h1>
                    <p className="my-4 max-w-[780px] mx-auto text-center">I am available for any suggestions or a simple chat.</p>
                    <ul className="border w-60 mx-auto">
                        <li className="m-4">
                            <a className="font-medium text-lg hover:text-[#44449b] hover:font-bold" href="https://mail.google.com/mail/u/0/#inbox?compose=new">mrjabir229@gmail.com</a>
                        </li>
                        <li className="m-4">
                            <a className="font-medium text-lg hover:text-[#44449b] hover:font-bold" href="www.linkedin.com/in/al-jabir-bin-hasan-o3">Al Jabir Bin Hasan</a>
                        </li>
                        <li className="m-4">
                            <a className="font-medium text-lg hover:text-[#44449b] hover:font-bold" href="https://www.facebook.com/jabirstain3/">Al Jabir Bin Hasan</a>
                        </li>
                        <li className="m-4">
                            <a className="font-medium text-lg hover:text-[#44449b] hover:font-bold" href="#contact">X</a>
                        </li>
                    </ul>
            </div>
    </div>
    );
};

export default Contact;