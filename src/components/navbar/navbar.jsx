import Menu from "../menu/Menu";



const navbar = () => {
    return (
        
        <div className="border border-black bg-slate-600 flex justify-between  items-center flex-wrap sticky top-0 z-[1] px-3 py-2 sm:px-6 sm:py-4 ">
            <a className="" href="/">
                <img className="w-16 sm:w-20" src="../../../src/assets/images/LOGO_1.png" alt="somthing is loading" />
            </a>
            
            <Menu></Menu>

        </div>
    );
};

export default navbar;