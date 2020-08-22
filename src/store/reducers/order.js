
import * as actions from '../actions/actionTypes';

const initialState = {
    orders: null,
    error: false,
    loading: false,
    result: false,
    response: false

}

const reducer = (state = initialState, action) => {


     if (action.type === actions.PURCHASE_BURGER_START) {

        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === actions.PURCHASE_BURGER_SUCCESS) {
     
        return {
            ...state,
            loading: false,
            response: true,
            result: true
        }

    }

    else if (action.type === actions.PURCHASE_BURGER_FAIL) {

        return {
            ...state,
            loading: false,
            response: true,
            result: false
        }
    }
    else if (action.type === actions.PURCHASE_CLEANUP) {
        return { ...state,
             result: false,
             response: false }

    }
    else if (action.type === actions.FETCH_ORDERS_START) {
        return {
            ...state,
            loading: true
        }
    }

    else if (action.type === actions.FETCH_ORDERS_SUCCESS) {
        return {
            ...state,
            loading: false,
            orders:action.orders
        }

    }

    else if (action.type === actions.FETCH_ORDERS_FAIL) {
        return {
            ...state,
            loading: false,
            error:action.error
        }

    }

    return state

}

export default reducer