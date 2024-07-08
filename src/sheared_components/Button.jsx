import PropTypes from 'prop-types';

const Button = ({ onClick, Children }) => {

    return (
        <button onClick={onClick}  className="rounded-xl sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 font-bold sm:text-lg bg-slate-700">
            {Children}
        </button>
    );
};

Button.propTypes ={
    onClick: PropTypes.func,
    Children: PropTypes.string.isRequired
}

export default Button;