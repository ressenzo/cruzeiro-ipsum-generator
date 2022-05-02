import './Toast.css';

interface ToastInterface {
    text: string;
    show: boolean;
}

const Toast = ({
    text,
    show
}: ToastInterface) => {

    return (
        <div className={`toast fade position-fixed p-1 ${show ? 'show' : 'hide'}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    <span>{text}</span>
                </div>
                <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Toast;
