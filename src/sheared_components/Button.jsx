import PropTypes from 'prop-types';
// import ReactPDF from '@react-pdf/react-pdf';

const Button = ({ Children, type, url = '',}) => {
    if (type === 'disable') {
        return;
        // return(
        //     <button  className="border border-black dark:border-white rounded-xl sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 font-bold sm:text-lg dark:hover:text-black dark:hover:bg-white" disabled>
        //         {Children}
        //     </button>
        // );
    };

    const handelOnClick = () =>{
        switch (type){
            case 'contact':
                // console.log(type);
                break;
            case 'download CV':
                // console.log(type);
                const link = document.createElement("a");
                link.href = "Profile.pdf";
                link.download = "Al_Jabir_Bin_Hasan.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;
            case 'link':
                // console.log(url);
                window.open(url, '_blank');
                break;
        }
    };

    return (
        <button id={type}  onClick={() => {handelOnClick()}}  className="shadow-md shadow-slate-950 border border-black dark:border-white rounded-xl sm:rounded-2xl px-4 py-1 sm:px-6 sm:py-2 font-bold sm:text-lg hover:text-white dark:hover:text-black  hover:bg-black dark:hover:bg-white" >
            {Children}
        </button>
    );
};

Button.propTypes ={
    onClick: PropTypes.func,
    Children: PropTypes.string.isRequired
}

export default Button;
// hover:bg-[#191919]