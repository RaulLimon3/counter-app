import './buttons.css';
const Button = ({icon: Icon, btnClass, btnArial}) => {
    return(
        <>
        <button type="button" className={`btn ${btnClass}`} aria-label={btnArial}>
            <Icon />
        </button>
        </>
    )
};

export default Button;