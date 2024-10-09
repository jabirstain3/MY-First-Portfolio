import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import ThemeBtn from "../../sheared_components/ThemeBtn";

const Manu = () => {
    const [open, setOpen] = useState(false);

    const links = <>
                
                <li><a className="hover:text-slate-600 hover:font-bold active:text-sky-950" href="#about">About</a></li>
                <li><a className="hover:text-slate-600 hover:font-bold active:text-sky-950" href="#skills">Skills</a></li>
                <li><a className="hover:text-slate-600 hover:font-bold active:text-sky-950" href="#project">Project</a></li>
                <li><a className="hover:text-slate-600 hover:font-bold active:text-sky-950" href="#contact">Contact</a></li>
            </>

    return (
        <div className="static">
            <div className="flex gap-4 items-center">
                <div className="flex items-center gap-6 text-xl font-semibold">
                    <ul className="hidden sm:flex gap-6">
                    {links}
                    </ul>
                    <ThemeBtn />
                </div>

                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    { open === true ? 
                    <RxCross1 className="w-6 h-6"></RxCross1> : <RxHamburgerMenu className="w-6 h-6"></RxHamburgerMenu>}
                </div>         
            </div>
            {
                open && 
                <ul className="w-40 absolute top-full right-0 z-[1] bg-cyan-800 flex flex-col flex-wrap basis-full text-lg font-semibold gap-2 py-2 px-4">
                {links}
                </ul>

            }
        </div>
    );
};

export default Manu;