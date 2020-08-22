import React from 'react'
import Classes from './BuildControl.css'


const buildControl = (props) => {
    return(
    <div className={Classes.BuildControl}>
        <div className={Classes.Label}>{props.label}</div>
        <button className={Classes.Less} onClick={props.remove} disabled={props.shouldDisable}>less</button>
        <button className={Classes.More} onClick={props.add}>more</button>
    </div>)
}
export default buildControl
