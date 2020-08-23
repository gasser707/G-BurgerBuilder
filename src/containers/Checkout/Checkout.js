import React from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../../hoc/Layout/Layout';

const checkout = props => {

    const orderHandler = () => {
        props.history.push(props.match.url + '/contact-data');
    };

    const cancelOrderHandler = () => {
        props.history.push('/');
    };



    let summary = (
        <Redirect to='/' />
    );

    if (props.ings) {
        summary = <div>

            <CheckoutSummary ingredients={props.ings}
                cancel={cancelOrderHandler}
                order={orderHandler} />


            {/* <Route path={this.props.match.url + "/contact-data"}
            render={(props)=><ContactData ingredients={this.props.ings} 
            totalPrice={this.state.totalPrice} {...props}/>} /> */}


            <Route path={props.match.url + "/contact-data"}
                component={ContactData} />

        </div>;
    }
    return (
        <Layout>
            <div>
                {summary}

            </div>
        </Layout>
    );
};


const mapStateToProps = state => {

    return {
        ings: state.burgerBuilder.ingredients
    };
};

export default connect(mapStateToProps)(checkout);;

//line 52 we use props to pass the history for url pushing later, could have used withrouter in contact data