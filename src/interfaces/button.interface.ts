export default interface ButtonInterface {
    text: string
    type: "button" | "submit" | "reset" | undefined
    disabled: boolean
    classNames: string
}
