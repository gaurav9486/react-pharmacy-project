import React from 'react';
import './view-order.css';
import AdminPanel from './index';
import { connect } from 'react-redux';
import { updateOrders } from '../../actions';

const ViewOrders = ({ ordersList, updateOrdersAfterDelete }) => {

    const deleteOrder =(orderId) => {
        var ordersListAfterDelete = JSON.parse(localStorage.getItem('ordersList')) || [];
        ordersListAfterDelete = ordersListAfterDelete.filter(item => item.orderId !== orderId);
        localStorage.setItem('ordersList', JSON.stringify(ordersListAfterDelete));
        updateOrdersAfterDelete(orderId);
    }

    return (
        <>
            <AdminPanel />
            <div className="orders-data">
                <h1>THE ORDERS</h1>
                <div className="orders-header">
                    <p className="orders-first-column table-heading">Order ID</p>
                    <p className="orders-second-column table-heading">Customer Name</p>
                    <p className="orders-third-column table-heading">Customer Contact</p>
                    <p className="orders-fourth-column table-heading">Products</p>
                    <p className="orders-fifth-column table-heading">Quantities</p>
                    <p className="orders-sixth-column table-heading">Amount</p>
                </div>
                {ordersList && ordersList.map(item => <div className="orders-card" key={Math.random()}>
                    <p className="orders-first-column">{item.orderId}</p>
                    <p className="orders-second-column">{item.customerName}</p>
                    <p className="orders-third-column">{item.customerContact}</p>
                    <p className="orders-fourth-column">{item.products}</p>
                    <p className="orders-fifth-column">{item.quantity}</p>
                    <p className="orders-sixth-column">{item.amount}</p>
                    <div className="order-delete-button" onClick={() => {
                        deleteOrder(item.orderId)
                    }}><i class="fas fa-trash-alt"></i></div>
                </div>)}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    ordersList: state.ordersList
})

const mapDispatchToProps = (dispatch) => ({
    updateOrdersAfterDelete: (payload) => dispatch(updateOrders(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrders);