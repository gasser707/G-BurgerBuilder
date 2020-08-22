import * as actions from '../actions/actionTypes';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.25,
    meat: 2,
    bacon: 0.75
}

const initialState={
    ingredients:null,
    totalPrice:4,
    error:false,
    checkout:false
}


const reducer = (state=initialState, action) => {

    if(action.type===actions.ADD_INGREDIENT){
        let newIngredients = {...state.ingredients};
        newIngredients[action.ingredient] += 1

        const priceChange = INGREDIENT_PRICES[action.ingredient];
        const newPrice = state.totalPrice + priceChange;
        return{
            ...state,ingredients:newIngredients, totalPrice:newPrice
        }
    }
    else if(action.type===actions.REMOVE_INGREDIENT){
        let newIngredients = {...state.ingredients};
        newIngredients[action.ingredient] -= 1

        const priceChange = INGREDIENT_PRICES[action.ingredient];
        const newPrice = state.totalPrice - priceChange;
        return{
            ...state,ingredients:newIngredients, totalPrice:newPrice
        }
    }
    else if(action.type===actions.SET_INGREDIENTS){
        return{
            ...state,
            ingredients:action.ingredients,
            error:false,
            checkout:false,
            totalPrice:4
        }
    }

    else if(action.type===actions.FETCH_INGREDIENTS_FAILED){
        return{
            ...state,
            error:true
        }
    }
    else if(action.type===actions.SET_CHECKOUT_TRUE){
        return{
            ...state,
            checkout:true
        }
    }
    else if(action.type===actions.SET_CHECKOUT_FALSE){
        return{
            ...state,
            checkout:false
        }
    }
    
    return state
}


export default reducer