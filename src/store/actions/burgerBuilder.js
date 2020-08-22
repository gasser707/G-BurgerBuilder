import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const addIngredient = (name)=>{
    return {
        type:actionTypes.ADD_INGREDIENT,
        ingredient:name
    }
} 

export const removeIngredient = (name)=>{
    return {
        type:actionTypes.REMOVE_INGREDIENT,
        ingredient:name
    }
}

const setIngredients =(ingredients)=>{
    return {
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }
}
export const fetchIngredientsFailed =()=>{
    return{
        type:actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initializeIngredients =()=>{
    return dispatch =>{
             axios.get('/ingredients.json').then(response => {
            dispatch(setIngredients(response.data))
        }).catch(error=>{
            dispatch(fetchIngredientsFailed())
        })
    }
}


export const setCheckoutTrue =()=>{
    return {
        type:actionTypes.SET_CHECKOUT_TRUE
    }
}

export const setCheckoutFalse =()=>{
    return {
        type:actionTypes.SET_CHECKOUT_FALSE
    }
}

