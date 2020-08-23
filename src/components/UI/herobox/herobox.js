import React from 'react';
import Classes from './herobox.css';
import {NavLink} from 'react-router-dom'
const herobox = (props) => {

    const btnClasses = [Classes.btn, Classes.btnFull];
    return (
        <div className={Classes.header}>
            <div className={Classes.heroTextBox}>
                <p>The world's coolest Burger Builder</p>
                <div className={Classes.heroText}>&ndash; By Gasser Aly</div>
                <NavLink className={btnClasses.join(' ')} to="/burger">Get Started!</NavLink>
            </div>
        </div>
    );
};

export default herobox;