import { FormEvent } from "react";

export default interface FormInterface {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    onChangeQuantity: any
}
