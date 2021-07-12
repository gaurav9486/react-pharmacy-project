import { ADMIN_LOGIN, ADMIN_LOGOUT, EXECUTIVE_LOGIN, EXECUTIVE_LOGOUT, ADD_MEDICINE, ADD_EXECUTIVE, ADD_ORDER, ADD_SALES_ORDER, UPDATE_INVENTORY_AFTER_DELETE, UPDATE_TEAM_AFTER_DELETE, UPDATE_ORDERS_AFTER_DELETE, MEDICINE_ID_FOR_UPDATE, INVENTORY_AFTER_EDIT, TEAM_AFTER_EDIT, ORDERS_AFTER_EDIT, EXECUTIVE_ID_FOR_UPDATE, ORDER_ID_FOR_UPDATE } from "../actionTypes";

const initialState = {
    loginStatus: localStorage.getItem('loginStatus') === 'true' ? true : false,
    adminLogin: localStorage.getItem('adminLogin') === 'true' ? true : false,
    executiveLogin: localStorage.getItem('executiveLogin') === 'true' ? true : false,
    inventoryData: JSON.parse(localStorage.getItem('inventoryData')) || [],
    executivesTeam: JSON.parse(localStorage.getItem('executivesTeam')) || [],
    ordersList: JSON.parse(localStorage.getItem('ordersList')) || [],
    salesOrdersList: JSON.parse(localStorage.getItem('salesOrdersList')) || [],
    medicineIdForUpdate: localStorage.getItem('medicineIdForUpdate'),
    executiveIdForUpdate: localStorage.getItem('executiveIdForUpdate'),
    orderIdForUpdate: localStorage.getItem('orderIdForUpdate'),
}

const pharmacyReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ADMIN_LOGIN:
        return { ...state, loginStatus: true, adminLogin: true }

    case ADMIN_LOGOUT:
        return { ...state, loginStatus: false, adminLogin: false }

    case EXECUTIVE_LOGIN:
        return { ...state, loginStatus: true, executiveLogin: true }

    case EXECUTIVE_LOGOUT:
        return { ...state, loginStatus: false, executiveLogin: false }

    case ADD_MEDICINE:
        return {...state, inventoryData: [...state.inventoryData, payload] }

    case ADD_EXECUTIVE:
        return {...state, executivesTeam: [...state.executivesTeam, payload] }

    case ADD_ORDER:
        return {...state, ordersList: [...state.ordersList, payload] }

    case ADD_SALES_ORDER:
        return {...state, salesOrdersList: [...state.salesOrdersList, payload] }

    case UPDATE_INVENTORY_AFTER_DELETE:
        return {...state, inventoryData: state.inventoryData.filter(item => item.medicineId !== payload)}

    case UPDATE_TEAM_AFTER_DELETE:
        return {...state, executivesTeam: state.executivesTeam.filter(item => item.executiveId !== payload)}

    case UPDATE_ORDERS_AFTER_DELETE:
        return {...state, ordersList: state.ordersList.filter(item => item.orderId !== payload)}

    case MEDICINE_ID_FOR_UPDATE:
        return {...state, medicineIdForUpdate: payload}

    case INVENTORY_AFTER_EDIT:
        return {state, inventoryData: payload}

    case EXECUTIVE_ID_FOR_UPDATE:
        return {state, executiveIdForUpdate: payload}

    case TEAM_AFTER_EDIT:
        return {state, executivesTeam: payload}

    case ORDER_ID_FOR_UPDATE:
        return {state, orderIdForUpdate: payload}

    case ORDERS_AFTER_EDIT:
        return {state, ordersList: payload}

    default:
        return state
    }
}

export default pharmacyReducer;