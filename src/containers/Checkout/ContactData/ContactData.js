import React, { useState, useRef, useEffect } from 'react';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/Input/Input';
import Modal from '../../../components/UI/Modal/Modal';
import Lottie from 'react-lottie';
import ninja from '../../../assets/ninja.json';
import * as actions from '../../../store/actions/index';
import { checkValidity } from '../../../Shared/checkValidity';
import { connect } from 'react-redux';

const contactData = props => {


    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
            element_name: "name"
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
            element_name: "street"

        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Postal Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 6,
                isNumeric: false
            },
            valid: false,
            touched: false,
            element_name: "Postal Code"

        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
            element_name: "country"

        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false,
            element_name: "Email"

        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }
                ]
            },
            value: 'fastest',
            validation: {},
            valid: true
        }
    });

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: ninja,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const focus = useRef(null);

    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        scrollToForm(focus);
    }, [focus]);


    const scrollToForm = ref => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    };

    const orderHandler = (event) => {

        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: props.ings,
            price: props.totalPrice,
            orderData: formData,
            userId: props.userId
        };


        props.onOrderBurger(order, props.token);
    };

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    };

    const closeModal = () => {
        if (props.result) {
            props.history.push('/');
        }
    };




    const formElementsArray = [];
    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        });
    }

    let form = (
        <form onSubmit={orderHandler}>
            <p>Enter your contact data:</p>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangedHandler(event, formElement.id)}
                    field={formElement.config.element_name}
                />
            ))}
            <Button btnType="Success" disabled={!formIsValid}>ORDER</Button>
        </form>
    );
    if (props.loading) {
        form = <Spinner />;
    }

    let result = null;

    if (props.result) {
        result = <Modal show={props.response} modalClosed={closeModal}>
            <Lottie
                options={lottieOptions}
                height={200}
                width={200}
            />
            <p>Your purchase was successful, your order is being prepared by our Master Ninja Burger Maker!</p>
        </Modal>;
    } else {
        result = <Modal show={props.response} modalClosed={closeModal}>
            <p>This is very sad but we couldn't get your order...sorry!</p>
        </Modal>;
    }



    return (
        <div className={Classes.ContactData} ref={focus}>
            {form}
            {result}

        </div>
    );
};


const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        result: state.order.result,
        response: state.order.response,
        token: state.auth.token,
        userId: state.auth.userId

    };
};

const mapDispatchToProps = dispatch => {

    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(contactData);
