import React from "react";

const FieldComponent = ({id, name, type, placeholder, min, max, step, required, value, onChange}) =>
         (<div><label htmlFor={id}>{name}</label>
        <input value={value} onChange={onChange} type={type} placeholder={placeholder} id={id} min={min} max={max}
        step={step} required={required}/></div>);

const SelectComponent = ({id, name, values, keys, value, onChange}) => {

    let options = [];

    for(let i = 0; i < keys.length; i++){
        options.push(<option value={values[i]}>{keys[i]}</option>);
    }

    return (<div>
        <label htmlFor={id}>{name}</label>
        <select id={id} value={value} onChange={onChange}>
            {options}
        </select>
    </div>);

}

export {FieldComponent, SelectComponent};