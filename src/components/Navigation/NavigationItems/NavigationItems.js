import React from 'react'
import Classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {

    return (
        <ul className={Classes.NavigationItems}>
            <NavigationItem link="/" clicked={props.clicked}>Burger Builder</NavigationItem>
            {props.auth ? <NavigationItem link="/orders" clicked={props.clicked}>Orders</NavigationItem> : null}
            {props.auth ? <NavigationItem link="/logout" clicked={props.clicked}>Logout</NavigationItem>
                : <NavigationItem link="/auth" clicked={props.clicked}>Signup/Login</NavigationItem>

            }
        </ul>
    );
}

export default navigationItems;
