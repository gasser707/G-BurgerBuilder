import React from 'react';
import Classes from './NavigationItem.css';
import {NavLink} from 'react-router-dom'; 

const navigationItem = (props) => {
    return(
    <li className={Classes.NavigationItem}> 
         <NavLink to={props.link}  onClick={props.clicked}> 
             {props.children}
         </NavLink>
    </li>

    );
}

export default navigationItem;
