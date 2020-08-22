import React from 'react';
import Classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => {
    return(
    <header className={Classes.Toolbar}>
        <div className={Classes.Logo} >
        <Logo  clicked={props.toggleDrawer}/>
        </div>
        
        <nav className={Classes.DesktopOnly}>
           <NavigationItems auth={props.auth}/>
        </nav>
    </header>
    );
}
export default toolbar