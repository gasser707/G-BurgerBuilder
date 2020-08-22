import React,{Fragment} from 'react';
// import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop'
const sideDrawer = (props) => {

let attachedClasses=[Classes.SideDrawer,Classes.Close];

if(props.open){
    attachedClasses=[Classes.SideDrawer,Classes.Open]
}

// let mq = window.matchMedia( "(min-width: 500px)" );



    return (
        <Fragment>
            <Backdrop show={props.open}  clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} >
                {/* <div className={Classes.Logo}>
                    <Logo/>
                </div> */}
                <nav>
                    <NavigationItems auth={props.auth} clicked={props.closed}/>
                </nav>

            </div>
        </Fragment>
    );

}



export default sideDrawer;
