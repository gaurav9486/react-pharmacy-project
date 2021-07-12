import React, { useState } from 'react';
import AdminPanel from './index';
import './add-medicine.css'
import { connect } from 'react-redux';
import { addMedicine } from '../../actions/index';

const AddMedicine = ({addMedicineToInventory}) => {

    const [medicineName, setMedicineName] = useState('');
    const [manufacturerName, setManufacturerName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [discount, setDiscount] = useState('');

    const addMedicineForm = (e) => {
        const medicineData = { medicineName: medicineName, manufacturerName: manufacturerName, price: price, stock: stock, discount: discount, medicineId: Math.floor((Math.random() * 100000000) + 1) }

        e.preventDefault();
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        e.target[4].value = '';

        addMedicineToInventory(medicineData);
        var inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
        inventoryData.push(medicineData);
        localStorage.setItem('inventoryData', JSON.stringify(inventoryData));
    }

    return (
        <>
            <AdminPanel />
            <div className="medicine-data">
                <h1>Add Medicine To Inventory</h1>
                <form onSubmit={addMedicineForm} className="add-medicine-form">
                    <input type="text" id="medicine-name" placeholder="Enter the medicine name" onChange={(e) => setMedicineName(e.target.value)} />
                    <input type="text" id="manufacturer-name" placeholder="Enter the manufacturer name" onChange={(e) => setManufacturerName(e.target.value)} />
                    <input type="number" id="medicine-price" placeholder="Enter the medicine price in Rupees" onChange={(e) => setPrice(e.target.value)} />
                    <input type="number" id="medicine-stock" placeholder="Enter the available stock" onChange={(e) => setStock(e.target.value)} />
                    <input type="number" id="medicine-discount" placeholder="Enter the discount in %" onChange={(e) => setDiscount(e.target.value)} />
                    <button className="add-to-inventory-btn">Add Medicine to Inventory</button>

                </form>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addMedicineToInventory: (payload) => dispatch(addMedicine(payload))
})

export default connect(null, mapDispatchToProps)(AddMedicine);