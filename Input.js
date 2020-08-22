import React from 'react'
import Classes from './Input.css';

const input = (props) => {
    let inputEl = null;
    switch (props.inputtype) {
        case ('input'):
            inputEl = <input className={Classes.InputEl}{...props} />
            break;
        case ('textarea'):
            inputEl = <textarea className={Classes.InputEl} {...props} />
            break;
        case ('select'):
            inputEl =
                <div>
                    <p className={Classes.Message}>{props.message}</p>
                    <select {...props} className={Classes.InputEl}>
                        {props.options.map(option => {
                            return <option key={option} style={{ textTransform: 'capitalize' }}>
                                {option}
                            </option>
                        })}
                    </select>
                </div>

            break;

        default:
            inputEl = <input className={Classes.InputEl} {...props} />
    }

    return (
        <div className={Classes.Input}>
            <label className={Classes.Label}>{props.label}</label>
            {inputEl}
        </div>
    )

}

export default input;