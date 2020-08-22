import React from 'react'
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import {withRouter} from 'react-router-dom';

import Classes from './CheckoutSummary.css'
const checkoutSummary = (props) => {


    return (
        <div className={Classes.CheckoutSummary}>
            <h1>It will taste extraordinary!</h1>
            <div>
                <Burger ingredients= {props.ingredients}/>
                
            <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.order}>Order</Button>

            </div>

        </div>
    );

}

export default withRouter(checkoutSummary);