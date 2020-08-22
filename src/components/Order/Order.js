import React from 'react'
import Classes from './Order.css';
const Order = (props) => {

    let style={
        textTransform :'capitalize',
        display :'inline-block',
        margin:'0 8px',
        border: '1px solid #eee',
        padding:'5px',
        
    }

    let ingredients= [];
    for (let i in props.ingredients){
        ingredients.push({name:i, amount: props.ingredients[i]});
    }   

    let ingredientsOutput= ingredients.map(ig=>{
    return <span key={ig.name} style={style}> {ig.name}: ({ig.amount})</span>
    }) ;
    return(
    <div className={Classes.Order}>
        <p> Ingredients: {ingredientsOutput} </p>
    <p>Price <strong>{props.price} USD</strong></p>
    </div>
    
    )
}

export default Order;
