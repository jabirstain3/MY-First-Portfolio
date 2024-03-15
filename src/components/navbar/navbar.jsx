import Menu from "../menu/Menu";



const navbar = () => {
    return (
        <div className="flex justify-between border border-black px-6 py-4 ">
            <div className="text-lg md:text-3xl font-bold align-middle">
                <a href="">AL JABIR BIN HASAN</a>
            </div>
            <Menu></Menu>
            
        </div>
    );
};

export default navbar;