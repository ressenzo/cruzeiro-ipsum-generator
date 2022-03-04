import ButtonInterface from "../../interfaces/button.interface";
import './Button.css';

const Button = ({
    classNames,
    disabled,
    text,
    type
}: ButtonInterface) => {
    return (
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
