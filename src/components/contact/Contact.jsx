
const Contact = () => {
    return (
        // <div className="w-full text-center sm:text-left px-2 sm:px-4 lg:px-10 py-10 sm:py-6 md:py-10 flex flex-col sm:flex-row-reverse gap-10 sm:gap-4 items-center">
        <div className="w-full min-w-[300px] text-center px-2 py-10 flex flex-col gap-16">
            {/* contact form */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Get in tuch</h1>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl">
                    <form className="card-body text-base">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">E-mail</span>
                        </label>
                        <input type="email" placeholder=".@gmail.com" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Subject</span>
                        </label>
                        <input type="text" placeholder="Topic of discution" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered text-base h-48 max-h-60" placeholder="Detailed discussion"></textarea>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn ">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* contact information */}
            <div>
            </div>
    </div>
    );
};

export default Contact;