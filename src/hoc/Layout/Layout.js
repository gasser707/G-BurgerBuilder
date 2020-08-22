import React, { Fragment, useState } from 'react';
import Classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux'


const layout = props => {

  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerToggler = () => {
    setShowSideDrawer(!showSideDrawer)
  }

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false)
  }



  return (

    <Fragment>
      <Toolbar toggleDrawer={sideDrawerToggler} auth={props.isAuth} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} auth={props.auth} />
      <main className={Classes.content}>
        {props.children}
      </main>

    </Fragment >)
    ;

}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(layout);
