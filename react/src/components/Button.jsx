import './buttons.css';
import IconPlus from './Icons';
const Button = () => {
    return(
        <>
        <button type="button" className='btn btn-increase' aria-label="Increase one">
            <IconPlus />
        </button>
        </>
    )
};

export default Button;