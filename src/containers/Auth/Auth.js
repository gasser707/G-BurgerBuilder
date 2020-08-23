
import React, { useState } from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/Input/Input';
import Classes from './Auth.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Layout from '../../hoc/Layout/Layout';
import { checkValidity } from '../../Shared/checkValidity';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const auth = props => {

    const [controls, setControls] = useState(
        {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                element_name: "email"
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                element_name: "password"
            },
        });


    const [formIsValid, setFormIsValid] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);





    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedControlsForm = {
            ...controls
        };
        const updatedFormElement = {
            ...updatedControlsForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedControlsForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControlsForm) {
            formIsValid = updatedControlsForm[inputIdentifier].valid && formIsValid;
        }
        setControls(updatedControlsForm);
        setFormIsValid(formIsValid);
    };

    const submitHandler = (event) => {

        event.preventDefault();
        props.onAuth(controls.email.value, controls.password.value, isSignUp);
    };

    const switchAuthModeHandler = () => {

        setIsSignUp(!isSignUp);
    };



    const formElementArray = [];

    for (let key in controls) {
        formElementArray.push({ id: key, config: controls[key] });
    }

    let form = formElementArray.map(formElement => {
        return <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}
            field={formElement.config.element_name}
        />;
    });

    if (props.loading) {
        form = <Spinner />;
    }

    let errorMessage = null;

    if (props.error) {
        errorMessage = <h4> {props.error.message}</h4>;
    }

    let redirect = null;
    let sum = 0;
    for (let x in props.ingredients) {
        sum = sum + props.ingredients[x];
    }

    if (props.isAuth && sum > 0) {
        redirect = <Redirect to='/checkout' />;
    }
    else if (props.isAuth && sum === 0)
        redirect = <Redirect to='/' />;

    return (
        <Layout>
            <div className={Classes.Auth}>
                {errorMessage}
                <form onSubmit={submitHandler}>
                    {form}
                    <Button btnType="Success"
                        disabled={!formIsValid}>
                        Submit
                    </Button>
                </form>
                <Button btnType="Danger"
                    clicked={switchAuthModeHandler}>

                    Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
                </Button>

                {redirect}

            </div>
        </Layout>
    );




};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        ingredients: state.burgerBuilder.ingredients
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(auth);
