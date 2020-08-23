import React, { useEffect,Suspense } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Logout from './containers/Auth/Logout/Logout';
import Spinner from './components/UI/Spinner/Spinner'
import * as actions from './store/actions/index';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Herobox from './components/UI/herobox/herobox';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout')
})

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders')
})

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth')
})



const app = props => {

  const {onTryAutoSignUp} = props

  useEffect(() => {

    onTryAutoSignUp()


  }, [onTryAutoSignUp])



  let routes = (
    <Switch>

      <Route path="/Burger" render = {(props)=><BurgerBuilder {...props}/>} />
      <Route path="/auth" render= {(props) =><Auth  {...props}/>} />
      <Route path="/"  render ={()=><Herobox/>}/>
    </Switch>

  )

  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/orders" render={(props) => <Orders  {...props}/>} />
        <Route path="/checkout" render={(props) => <Checkout  {...props}/>} />
        <Route path="/Burger" render={(props) => <BurgerBuilder  {...props}/>} />
        <Route path="/logout" render={(props) => <Logout  {...props}/>} />
        <Route path="/auth" render={(props)=> <Auth  {...props}/>} />
        <Redirect from='/' to="/Burger" />
      </Switch>
    )
  }

const spinner = <Spinner/>
  return (
    <div >
        <Suspense fallback={spinner}>
        {routes}
        </Suspense>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app));
