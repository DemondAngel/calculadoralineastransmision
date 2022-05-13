import React from "react";
import './style/style.css';

const FieldComponent = ({id, name, type, placeholder, min, max, step, required, value, onChange}) =>
         (<div className="p-2"><label htmlFor={id} className="label">{name}</label>
        <input value={value} onChange={onChange} type={type} placeholder={placeholder} id={id} min={min} max={max}
        step={step} required={required}/></div>);

const SelectComponent = ({id, name, values, keys, value, onChange}) => {

    let options = [];

    for(let i = 0; i < keys.length; i++){
        options.push(<option className="option" value={values[i]}>{keys[i]}</option>);
    }

    return (<div className="p-2">
        <label className="label pr-3" htmlFor={id}>{name}</label>
        <select className="select" id={id} value={value} onChange={onChange}>
            {options}
        </select>
    </div>);

}

export {FieldComponent, SelectComponent};