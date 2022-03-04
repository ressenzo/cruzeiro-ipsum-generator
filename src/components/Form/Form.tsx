import { FormEvent, useState } from 'react';
import Button from '../Button/Button';
import './Form.css';

interface FormInterface {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    onChangeQuantity: any
}

const Form = ({
    onSubmit,
    onChangeQuantity
}: FormInterface) => {

    const [disabled, setDisabled] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const onChangeHandle = (event: React.FormEvent<HTMLInputElement>) => {

        setError('');
        onChangeQuantity(0);

        let value = event.currentTarget.value;
        const regexOnlyNumbers = /^[0-9]+$/;
        if (value !== '' && !regexOnlyNumbers.test(value)) {
            setError('São permitidos apenas números');
            setDisabled(true);
            return;
        }

        let intValue = parseInt(value) || 0;
        
        if (intValue > 100) {
            setDisabled(true);
            setError('Número máximo de parágrafos é 100');            
            return;
        }
        
        setDisabled(intValue === 0);
        onChangeQuantity(intValue);
    }

    return (
        <div className="row">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control form__input-text"
                            placeholder="Quantidade de parágrafos"
                            title="Quantidade de parágrafos"
                            onChange={ev => onChangeHandle(ev)}
                            maxLength={3}
                        />
                        {
                            error
                        }
                    </div>
                    <div className="col">
                        <Button
                            classNames="btn button__btn-main"
                            disabled={disabled}
                            type="submit"
                            text="Gerar"
                            onClick={undefined}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
