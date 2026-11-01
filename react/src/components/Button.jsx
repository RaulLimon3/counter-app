import './buttons.css';
const Button = ({icon: Icon, btnClass, btnArial, action}) => {
    return(
        <>
        <button type="button" className={`btn ${btnClass}`} aria-label={btnArial} onClick={action}>
            <Icon />
        </button>
        </>
    )
};

export default Button;