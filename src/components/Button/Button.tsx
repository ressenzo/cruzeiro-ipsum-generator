import './Button.css';

interface ButtonInterface {
    text: string
    type: "button" | "submit" | "reset" | undefined
    disabled: boolean
    classNames: string
    onClick?: () => void
}

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
