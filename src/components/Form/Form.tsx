import './Form.css';

const Form = () => {
    return (
        <div className="row">
            <div className="col">
                <input
                    type="text"
                    className="form-control form__input-text"
                    placeholder="Quantidade de parágrafos"
                    title="Quantidade de parágrafos"
                />
            </div>
            <div className="col">
                <button
                    className="btn form__btn-main"
                >
                    Gerar
                </button>
            </div>
        </div>
    );
}

export default Form;
