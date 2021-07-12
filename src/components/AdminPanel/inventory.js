import React from 'react';
import './inventory.css';
import AdminPanel from './index';
import { connect } from 'react-redux';
import { medicineIdForUpdate, updateInventory } from '../../actions';
import { useHistory } from 'react-router-dom';

const Inventory = ({ inventoryData, updateInventoryAfterDelete, updateMedicineById }) => {

    const history = useHistory();
    const deleteMedicine = (medicineId) => {
        var inventoryAfterDelete = JSON.parse(localStorage.getItem('inventoryData')) || [];
        inventoryAfterDelete = inventoryAfterDelete.filter(item => item.medicineId !== medicineId);
        localStorage.setItem('inventoryData', JSON.stringify(inventoryAfterDelete));
        updateInventoryAfterDelete(medicineId)
    }

    const updateTheMedicine = (medicineId) => {
        localStorage.setItem('medicineIdForUpdate', medicineId);
        updateMedicineById(medicineId);
        history.push("/admin/edit-medicine")
    }

    return (
        <>
            <AdminPanel />
            <div className="inventory-data">
                <h1>THE INVENTORY</h1>
                <div className="inventory-header">
                    <p className="inventory-first-column table-heading">Name</p>
                    <p className="inventory-second-column table-heading">Manufacturer</p>
                    <p className="inventory-third-column table-heading">Price</p>
                    <p className="inventory-fourth-column table-heading">Quantity</p>
                    <p className="inventory-fifth-column table-heading">Discount</p>
                </div>
                {inventoryData && inventoryData.map(item => <div className="medicine-card" key={Math.random()}>
                    <p className="inventory-first-column">{item.medicineName}</p>
                    <p className="inventory-second-column">{item.manufacturerName}</p>
                    <p className="inventory-third-column">{item.price}</p>
                    <p className="inventory-fourth-column">{item.stock}</p>
                    <p className="inventory-fifth-column">{item.discount}</p>
                    <div className="medicine-edit-button" onClick={() => {
                        updateTheMedicine(item.medicineId)
                    }}><i class="fas fa-edit"></i></div>
                    <div className="medicine-delete-button" onClick={() => {
                        deleteMedicine(item.medicineId)
                    }}><i class="fas fa-trash-alt"></i></div>
                </div>)}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    inventoryData: state.inventoryData
})

const mapDispatchToProps = (dispatch) => ({
    updateInventoryAfterDelete: (payload) => dispatch(updateInventory(payload)),
    updateMedicineById: (payload) => dispatch(medicineIdForUpdate(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);