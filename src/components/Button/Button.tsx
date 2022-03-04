import ButtonInterface from "../../interfaces/button.interface";
import './Button.css';

const Button = ({
    classNames,
    disabled,
    text,
    type,
    onClick
}: ButtonInterface) => {
    return (
        
        onClick !== undefined ?
        <button
            className={classNames}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {text}
        </button> :
        <button
            className={classNames}
            disabled={disabled}
            type={type}
        >
            {text}
        </button>
    );
}

export default Button;
