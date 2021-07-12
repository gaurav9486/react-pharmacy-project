import React from 'react';
import { Link } from 'react-router-dom';
import './adminpanel.css';

const AdminPanel = () => {
    return (
        <div className="admin-panel-header">
            <Link to="/admin/add-medicine" className="admin-panel-menu">Add Medicines</Link>
            <Link to="/admin/inventory" className="admin-panel-menu">View Inventory</Link>
            <Link to="/admin/add-executive" className="admin-panel-menu">Add Sales Executive</Link>
            <Link to="/admin/team" className="admin-panel-menu">View Team</Link>
            <Link to="/admin/create-order" className="admin-panel-menu">Create Order</Link>
            <Link to="/admin/show-orders" className="admin-panel-menu">View All Orders</Link>
        </div>
    )
}

export default AdminPanel;