import React from 'react'
import burgerLogo from '../../assets/images/original.png'
import Classes from './Logo.css';
 const logo = (props) => (
     
     <div className={Classes.Logo}> 
         <img src={burgerLogo} alt="burger logo" onClick={props.clicked}/>
     </div>
 )
     
 
 export default logo;
 