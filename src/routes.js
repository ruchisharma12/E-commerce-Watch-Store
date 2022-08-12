import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pages from './Pages';
import Product from './portfolio_gallery/ProductD';


const Routes = ({ productItems, cartItems }) => {
    return (
        <Switch>

            <Route path="/Signup" component={Pages.signup} />
            <Route path="/Logout" component={Pages.logout} />
            <Route path="/Login" component={Pages.login} />
            <Route path="/Cart" component={Pages.cart} cartItems={cartItems} />
            <Route path="/verifyOtp" component={Pages.VerifyOtp} />
            <Route path="/userLists" component={Pages.userList} />
            <Route path="/home" component={Pages.home} />
            <Route path="/brands" component={Pages.brands} />
            <Route path="/product" component={Product} />
            <Route path="/" component={Pages.home} />

        </Switch>
    );
};

export default Routes;
