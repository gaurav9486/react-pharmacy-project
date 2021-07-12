import React, { useState } from 'react';
import './edit-medicine.css'
import { connect } from 'react-redux';
import AdminPanel from './index';
import { Link, useHistory } from 'react-router-dom';
import { inventoryAfterEdit } from '../../actions';

const EditMedicine = ({ inventoryData, medicineIdForUpdate, inventoryUpdateAfterEdit }) => {

    const requiredMedicineId = medicineIdForUpdate || localStorage.getItem('medicineIdForUpdate');
    const medicineDataForUpdate = inventoryData.filter(item => item.medicineId == requiredMedicineId);
    const { medicineName, manufacturerName, price, stock, discount } = medicineDataForUpdate[0];
    const [updatedMedicineName, setUpdatedMedicineName] = useState(medicineName);
    const [updatedManufacturerName, setUpdatedManufacturerName] = useState(manufacturerName);
    const [updatedPrice, setUpdatedPrice] = useState(price);
    const [updatedStock, setUpdatedStock] = useState(stock);
    const [updatedDiscount, setUpdatedDiscount] = useState(discount);
    const history = useHistory();

    const medicineEditHandle = (e) => {
        e.preventDefault();
        var inventoryAfterEdit = JSON.parse(localStorage.getItem('inventoryData')) || [];
        const requiredIndex = inventoryAfterEdit.findIndex(item => item.medicineId == requiredMedicineId);
        inventoryAfterEdit[requiredIndex].medicineName = updatedMedicineName;
        inventoryAfterEdit[requiredIndex].manufacturerName = updatedManufacturerName;
        inventoryAfterEdit[requiredIndex].price = updatedPrice;
        inventoryAfterEdit[requiredIndex].stock = updatedStock;
        inventoryAfterEdit[requiredIndex].discount = updatedDiscount;
        localStorage.setItem('inventoryData', JSON.stringify(inventoryAfterEdit));
        inventoryUpdateAfterEdit(inventoryAfterEdit);
        alert('Data updated successfully');
        history.push("/admin/inventory");
    }

    return (
        <>
            <AdminPanel />
            <div className="medicine-edit-page">
                <form onSubmit={medicineEditHandle} className="edit-medicine-form">
                <h1>Update Details Here</h1>
                    <input type="text" id="medicine-name" placeholder="Enter the medicine name" value={updatedMedicineName} onChange={(e) => setUpdatedMedicineName(e.target.value)} />
                    <input type="text" id="manufacturer-name" placeholder="Enter the manufacturer name" value={updatedManufacturerName} onChange={(e) => setUpdatedManufacturerName(e.target.value)} />
                    <input type="number" id="medicine-price" placeholder="Enter the medicine price in Rupees" value={updatedPrice} onChange={(e) => setUpdatedPrice(e.target.value)} />
                    <input type="number" id="medicine-stock" placeholder="Enter the available stock" value={updatedStock} onChange={(e) => setUpdatedStock(e.target.value)} />
                    <input type="number" id="medicine-discount" placeholder="Enter the discount in %" value={updatedDiscount} onChange={(e) => setUpdatedDiscount(e.target.value)} />
                    <div className="buttons">
                    <Link to="/admin/inventory"><button>Go Back</button></Link>
                    <button type="submit">Confirm</button>
                    </div>
                </form>

            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    inventoryData: state.inventoryData,
    medicineIdForUpdate: state.medicineIdForUpdate
})

const mapDispatchToProps = (dispatch) => ({
    inventoryUpdateAfterEdit: (payload) => dispatch(inventoryAfterEdit(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditMedicine);