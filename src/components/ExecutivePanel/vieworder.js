import React from 'react';
import './vieworder.css';
import ExecutivePanel from './index';
import { connect } from 'react-redux';

const ViewSalesOrders = ({ salesOrdersList }) => {
    return (
        <div className="view-sales-order-page">
            <ExecutivePanel />
            <div className="sales-orders-data">
                <h1>THE ORDERS</h1>
                <div className="sales-orders-header">
                    <p className="first-column table-heading">Order ID</p>
                    <p className="second-column table-heading">Customer Name</p>
                    <p className="third-column table-heading">Customer Contact</p>
                    <p className="fourth-column table-heading">Products</p>
                    <p className="fifth-column table-heading">Quantities</p>
                    <p className="sixth-column table-heading">Amount</p>
                </div>
                {salesOrdersList && salesOrdersList.map(item => <div className="sales-orders-card" key={Math.random()}>
                    <p className="first-column">{item.orderId}</p>
                    <p className="second-column">{item.customerName}</p>
                    <p className="third-column">{item.customerContact}</p>
                    <p className="fourth-column">{item.products}</p>
                    <p className="fifth-column">{item.quantity}</p>
                    <p className="sixth-column">{item.amount}</p>
                </div>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    salesOrdersList: state.salesOrdersList
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ViewSalesOrders);