
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

const ThemeBtn = () => {
    const [ theme, setTheme ] = useState(true)

    useEffect(( ) => {
        if ( theme === true ){
            document.querySelector('html').classList.remove('dark');
        }
        else {
            document.querySelector('html').classList.add('dark');
            }
    }, [ theme ])
    
    return (
        <div className="" onClick={() => setTheme(!theme)}>
                    { theme === true ? 
                    <MdDarkMode className="w-6  h-6"></MdDarkMode> : <MdLightMode className="text-white w-6 h-6"></MdLightMode>}
        </div>
    );
};

export default ThemeBtn;