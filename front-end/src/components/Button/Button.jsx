import './Button.css'

const Button = (props) => {
    return (
        <button disabled={props.disabled} onClick={props.onClick} className={props.className}>{props.children ? props.children: props.text}</button>
    )
}

export default Button