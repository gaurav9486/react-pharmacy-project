import { ADMIN_LOGIN, ADMIN_LOGOUT, EXECUTIVE_LOGIN, EXECUTIVE_LOGOUT, ADD_MEDICINE, ADD_EXECUTIVE, ADD_ORDER, ADD_SALES_ORDER, UPDATE_INVENTORY_AFTER_DELETE, UPDATE_TEAM_AFTER_DELETE, UPDATE_ORDERS_AFTER_DELETE, MEDICINE_ID_FOR_UPDATE, INVENTORY_AFTER_EDIT, TEAM_AFTER_EDIT, ORDERS_AFTER_EDIT, EXECUTIVE_ID_FOR_UPDATE, ORDER_ID_FOR_UPDATE } from "../actionTypes";

export const adminLogin = (payload) => ({
    type: ADMIN_LOGIN,
    payload
})

export const adminLogout = (payload) => ({
    type: ADMIN_LOGOUT,
    payload
})

export const executiveLogin = (payload) => ({
    type: EXECUTIVE_LOGIN,
    payload
})

export const executiveLogout = (payload) => ({
    type: EXECUTIVE_LOGOUT,
    payload
})

export const addMedicine = (payload) => ({
    type: ADD_MEDICINE,
    payload
})

export const addExecutive = (payload) => ({
    type: ADD_EXECUTIVE,
    payload
})

export const addOrder = (payload) => ({
    type: ADD_ORDER,
    payload
})

export const addSalesOrder = (payload) => ({
    type: ADD_SALES_ORDER,
    payload
})

export const updateInventory = (payload) => ({
    type: UPDATE_INVENTORY_AFTER_DELETE,
    payload
})

export const updateTeam = (payload) => ({
    type: UPDATE_TEAM_AFTER_DELETE,
    payload
})

export const updateOrders = (payload) => ({
    type: UPDATE_ORDERS_AFTER_DELETE,
    payload
})

export const medicineIdForUpdate = (payload) => ({
    type: MEDICINE_ID_FOR_UPDATE,
    payload
})

export const inventoryAfterEdit = (payload) => ({
    type: INVENTORY_AFTER_EDIT,
    payload
})

export const executiveIdForUpdate = (payload) => ({
    type: EXECUTIVE_ID_FOR_UPDATE,
    payload
})

export const teamAfterEdit = (payload) => ({
    type: TEAM_AFTER_EDIT,
    payload
})

export const orderIdForUpdate = (payload) => ({
    type: ORDER_ID_FOR_UPDATE,
    payload
})


export const ordersAfterEdit = (payload) => ({
    type: ORDERS_AFTER_EDIT,
    payload
})