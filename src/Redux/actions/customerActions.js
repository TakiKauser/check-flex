export const addCustomer = payload =>{
    return {
        type: "ADD_CUSTOMER",
        payload
    }
}

export const getCustomerList = payload =>{
    return {
        type: "GET_CUSTOMER_LIST",
        payload
    }
}