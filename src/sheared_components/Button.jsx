import PropTypes from 'prop-types';
// import ReactPDF from '@react-pdf/react-pdf';

const Button = ({ Children, type }) => {
    const handelOnClick = () =>{
        if(type == 'contact'){
            console.log(type);
        }
        else if(type == 'download CV'){
            // console.log(type);
            const link = document.createElement("a");
            link.href = "Profile.pdf";
            link.download = "Al_Jabir_Bin_Hasan.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };


    return (
        <button onClick={() => {handelOnClick()}}  className="rounded-xl sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 font-bold sm:text-lg bg-slate-700">
            {Children}
        </button>
    );
};

Button.propTypes ={
    onClick: PropTypes.func,
    Children: PropTypes.string.isRequired
}

export default Button;