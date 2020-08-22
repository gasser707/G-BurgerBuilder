import React, {  useEffect } from 'react';
import Order from '../../components/Order/Order.js';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';

const orders = props => {
    const { onFetchOrders } = props;

    useEffect(() => {
        onFetchOrders(props.token, props.userId);
    },[onFetchOrders]);

    let orders = <Spinner/>

    if (props.orders) {
       orders = props.orders.map(order => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
    }
    return (
        <div>
            {orders}
        </div>
    );
};


const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        error: state.order.error,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(burgerBuilderActions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(orders, axios));
