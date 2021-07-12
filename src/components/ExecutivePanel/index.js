import React from 'react';
import { Link } from 'react-router-dom';
import './executivepanel.css';

const ExecutivePanel = () => {
    return (
        <div className="executive-panel-header">
            <Link to="/executive/create-order" className="executive-panel-menu">Create Order</Link>
            <Link to="/executive/show-orders" className="executive-panel-menu">View All Orders</Link>
        </div>
    )
}

export default ExecutivePanel;