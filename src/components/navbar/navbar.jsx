import Menu from "../menu/Menu";



const navbar = () => {
    return (
        
        <div className="flex justify-between items-center flex-wrap px-3 py-2 sm:px-6 sm:py-4 bg-white dark:bg-black">
            <a className="" href="/">
                <img className="w-12" src="/src/assets/images/LOGO_1.png" alt="somthing is loading" />
                {/* <img src="https://i.ibb.co/M8HCQXN/LOGO-1.png" alt="LOGO-1" border="0"> */}
            </a>
            <Menu></Menu>
        </div>
    );
};

export default navbar;