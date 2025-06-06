import Menu from "../menu/Menu";


const navbar = () => {
    return (
        
        <div className="max-w-[1440px] w-[94vw] mx-auto flex justify-between items-center flex-wrap px-3 py-2 sm:px-6 sm:py-4 border-b border-black dark:border-white  bg-white dark:bg-black">
            <a className="" href="/">
                <img className="w-12" src="https://i.postimg.cc/qqDRmyky/LOGO-1.png" alt="somthing is loading" />
            </a>
            <Menu></Menu>
        </div>
    );
};

export default navbar;