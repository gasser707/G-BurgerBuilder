import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{ textTransform: 'capitalize' }} >{igKey} </span>: {props.ingredients[igKey]} </li>
    });

    return (
        <Fragment >
            <h3>Your Order</h3>
            <p> A Tasty burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}

            </ul>
            <p> <strong>Total price: {props.totalPrice.toFixed(2)} $ </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancelPurchase}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchase}> Continue</Button>
        </Fragment>

    );

}
export default orderSummary;