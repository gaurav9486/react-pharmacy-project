import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import { connect } from 'react-redux';
import AddMedicine from './components/AdminPanel/add-medicine';
import Inventory from './components/AdminPanel/inventory';
import AddExecutive from './components/AdminPanel/add-executive';
import team from './components/AdminPanel/team';
import CreateOrder from './components/AdminPanel/create-order';
import ViewOrders from './components/AdminPanel/view-order';
import CreateSalesOrder from './components/ExecutivePanel/createorder';
import ViewSalesOrders from './components/ExecutivePanel/vieworder';
import EditMedicine from './components/AdminPanel/edit-medicine';
import EditExecutive from './components/AdminPanel/edit-executive';

function App({ adminLogin, executiveLogin, loginStatus }) {
  console.log(loginStatus);
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="empty-div"></div>
        <Switch>
          <Route path="/" exact component={Home} />
          {loginStatus && adminLogin && <Route path="/admin/add-medicine"><AddMedicine /></Route>}
          {loginStatus && adminLogin && <Route path="/admin/inventory" exact component={Inventory} />}
          {loginStatus && adminLogin && <Route path="/admin/add-executive" component={AddExecutive} />}
          {loginStatus && adminLogin && <Route path="/admin/team" component={team} />}
          {loginStatus && adminLogin && <Route path="/admin/create-order" component={CreateOrder} />}
          {loginStatus && adminLogin && <Route path="/admin/show-orders" component={ViewOrders} />}
          {loginStatus && adminLogin && <Route path="/admin/edit-medicine" component={EditMedicine} />}
          {loginStatus && adminLogin && <Route path="/admin/edit-executive" component={EditExecutive} />}
          {loginStatus && executiveLogin && <Route path="/executive/create-order" component={CreateSalesOrder} />}
          {loginStatus && executiveLogin && <Route path="/executive/show-orders" component={ViewSalesOrders} />}
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
  adminLogin: state.adminLogin,
  executiveLogin: state.executiveLogin
})

export default connect(mapStateToProps, null)(App);