import './buttons.css';
const Button = ({icon: Icon, className, ariaLabel, onClick, disabled}) => {
    return(
        <>
        <button type="button" className={`btn ${className}`} aria-label={ariaLabel} onClick={onClick} disabled={disabled}>
            <Icon aria-hidden="true"/>
        </button>
        </>
    )
};

export default Button;