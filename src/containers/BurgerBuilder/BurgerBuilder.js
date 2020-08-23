/* eslint-disable no-undef */
import React, { useEffect, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import Layout from '../../hoc/Layout/Layout';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';


const burgerBuilder = props => {

    const { onInitializeIngredients, onPurchaseCleanup } = props;


    useEffect(() => {

        onPurchaseCleanup();


        onInitializeIngredients();

    }, [onInitializeIngredients, onPurchaseCleanup]);


    const checkoutHandler = () => {

        //    this.setState({ checkout: true });

        if (props.isAuth) {
            props.onSetCheckoutTrue();
        } else
            props.history.push('/auth');


    };





    const purchaseContinueHandler = () => {


        props.history.push('/checkout');


    };


    const updatePurchaseState = (updatedIngredients) => {
        let purchasable = false;
        let sum = 0;
        for (let x in updatedIngredients) {
            sum = sum + updatedIngredients[x];
        }
        if (sum > 0) {
            purchasable = true;
        }

        return purchasable;

    };


    const shouldDisable = { ...props.ings };
    for (let key in props.ings) {
        shouldDisable[key] = shouldDisable[key] <= 0;
    }

    let orderSummary = (
        <OrderSummary
            ingredients={props.ings}
            cancelPurchase={props.onSetCheckoutFalse}
            totalPrice={props.price}
            purchase={purchaseContinueHandler} />);
    if (!props.ings) {
        orderSummary = <Spinner />;
    }

    let burger = props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;


    if (props.ings) {

        burger =
            <Fragment>
                <Burger ingredients={props.ings} />
                <BuildControls
                    addIngredient={props.onIngredientAdded}
                    removeIngredient={props.onIngredientRemoved}
                    shouldDisable={shouldDisable}
                    price={props.price}
                    purchasable={updatePurchaseState(props.ings)} //could have used this.props.price>4
                    checkout={checkoutHandler}
                    isAuth={props.isAuth}
                />
            </Fragment>;
    }



    return (
        <Fragment>
            <Modal
                show={props.checkout}
                modalClosed={props.onSetCheckoutFalse}>
                {orderSummary}
            </Modal>
            <Layout>
                {burger}
            </Layout>
        </Fragment>
    );


};


const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        checkout: state.burgerBuilder.checkout,
        isAuth: state.auth.token !== null

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredient) => dispatch(burgerBuilderActions.addIngredient(ingredient)),
        onIngredientRemoved: (ingredient) => dispatch(burgerBuilderActions.removeIngredient(ingredient)),
        onInitializeIngredients: () => dispatch(burgerBuilderActions.initializeIngredients()),
        onSetCheckoutTrue: () => dispatch(burgerBuilderActions.setCheckoutTrue()),
        onSetCheckoutFalse: () => dispatch(burgerBuilderActions.setCheckoutFalse()),
        onPurchaseCleanup: () => dispatch(burgerBuilderActions.purchaseCleanup())


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(burgerBuilder, axios));