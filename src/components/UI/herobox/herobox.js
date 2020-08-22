import React, { Fragment } from 'react';
import Classes from './herobox.css';
import hero from '../../../assets/images/hero.jpg';
const herobox = (props) => {


    return (
        <Fragment>
            <header>
                <div className={Classes.heroTextBox}>
                </div>
            </header>
        </Fragment>
    );
};

export default herobox;