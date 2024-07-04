import Menu from "../menu/Menu";



const navbar = () => {
    return (
        
        <div className="bg-slate-600 dark:bg-gray-500  flex justify-between  items-center flex-wrap px-3 py-2 sm:px-6 sm:py-4 ">
            <a className="" href="/">
                <img className="w-12 sm:w-16" src="https://ibb.co/GsD5NhP" alt="somthing is loading" />
            </a>
            <Menu></Menu>
        </div>
    );
};

export default navbar;