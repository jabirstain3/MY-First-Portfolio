import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Manu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="text-2xl ">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                { open === true ? <RxCross1 className="w-6 h-6"></RxCross1> : <RxHamburgerMenu className="w-7 h-7"></RxHamburgerMenu>}
            </div> 
            <ul className={`md:flex gap-6 ${open ? '':'hidden'} relative md:static`}>
                <li><a href="#about">About</a></li>
            {/* <li><a href="#experince">Experince</a></li> */}
                <li><a href="#project">Project</a></li>
                <li><a href="#contect">Contect</a></li>
            </ul>
        </div>
        
    );
};

export default Manu;