import React from 'react';
import Classes from './herobox.css';
import hero from '../../../assets/images/hero.jpg';
const herobox = (props) => {

    const btnClasses = [Classes.btn, Classes.btnFull];
    return (
        <div className={Classes.header}>
            <div className={Classes.heroTextBox}>
                <p>The world's coolest Burger Builder</p>
                <div className={Classes.heroText}>&ndash; By Gasser Aly</div>
                <a className={btnClasses.join(' ')} href="/burger">Get Started!</a>
            </div>
        </div>
    );
};

export default herobox;