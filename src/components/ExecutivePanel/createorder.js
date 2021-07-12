import React, { useState } from 'react';
import ExecutivePanel from './index';
import './createorder.css'
import { connect } from 'react-redux';
import { addSalesOrder } from '../../actions/index';

const CreateSalesOrder = ({addOrderToSalesCart}) => {

    const [customerName, setCustomerName] = useState('');
    const [customerContact, setCustomerContact] = useState('');
    const [products, setProducts] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');

    const addSalesOrderForm = (e) => {
        const salesOrderData = { customerName: customerName, customerContact: customerContact, products: products, quantity: quantity, amount: amount, orderId: Math.floor((Math.random() * 100000000) + 1) }

        e.preventDefault();
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        e.target[4].value = '';

        addOrderToSalesCart(salesOrderData);
        var salesOrdersList = JSON.parse(localStorage.getItem('salesOrdersList')) || [];
        salesOrdersList.push(salesOrderData);
        localStorage.setItem('salesOrdersList', JSON.stringify(salesOrdersList));
    }

    return (
        <div className="create-sales-order-page">
            <ExecutivePanel />
            <div className="order-sales-data">
                <form onSubmit={addSalesOrderForm} className="add-sales-order-form">
                <h1>Add Order To Cart</h1>
                    <input type="text" id="customer-name" placeholder="Enter the customer's name" onChange={(e) => setCustomerName(e.target.value)} />
                    <input type="number" id="customer-contact" placeholder="Enter the customer's contact no." onChange={(e) => setCustomerContact(e.target.value)} />
                    <input type="text" id="products-list" placeholder="Enter the Products (separated by ,)" onChange={(e) => setProducts(e.target.value)} />
                    <input type="text" id="order-quantity" placeholder="Enter the respective quantities(seperated by ,)" onChange={(e) => setQuantity(e.target.value)} />
                    <input type="number" id="order-amount" placeholder="Enter the amount (in Rs.)" onChange={(e) => setAmount(e.target.value)} />
                    <button className="add-order-btn">Add Order</button>

                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addOrderToSalesCart: (payload) => dispatch(addSalesOrder(payload))
})

export default connect(null, mapDispatchToProps)(CreateSalesOrder);