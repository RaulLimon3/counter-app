import './buttons.css';
const Button = ({icon: Icon, btnClass, btnArial, action, btnEnable}) => {
    return(
        <>
        <button type="button" className={`btn ${btnClass}`} aria-label={btnArial} onClick={action} disabled={btnEnable}>
            <Icon />
        </button>
        </>
    )
};

export default Button;