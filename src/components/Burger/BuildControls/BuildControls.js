import React from 'react'
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const Controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" }

]
const buildControls = (props) => {
    return (
        <div className={Classes.BuildControls}>
            <p> <strong>Current price: {props.price.toFixed(2)} $ </strong></p>
            {Controls.map(ctrl => {
                return <BuildControl key={ctrl.label} 
                label={ctrl.label}
                add={()=>props.addIngredient(ctrl.type)}
                remove={()=>props.removeIngredient(ctrl.type)}
                shouldDisable={props.shouldDisable[ctrl.type]}
                />

            })
            }
            <button className={Classes.OrderButton} 
            disabled={!props.purchasable}
             onClick={props.checkout}>{props.isAuth?'Order Now !':'Signup/ Login To Order'}</button>

        </div>
    )
}
export default buildControls;