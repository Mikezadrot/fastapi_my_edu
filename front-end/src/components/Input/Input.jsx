import './Input.css'
import {useState} from "react";

const Input = (props) => {
    const {type, placeholder, className, aria_label, value, onChange, id, required, onBlur, name, control, readOnly} = props

    return (
        (
            <input value={value} onChange={onChange} type={type} placeholder={placeholder} aria-label={aria_label}
                   className={className} id={id} required={required} onBlur={onBlur} readOnly={readOnly}/>
        )

    )
}

export default Input