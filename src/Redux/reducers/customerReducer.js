export const initialState = {
    newCustomer: {},
    customerList: [],

    productList: [],

    orderList: [],
    newOrderList: [],
}

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER": {
            console.log("ADD_CUSTOMER")
            return state
        }

        case "GET_CUSTOMER_LIST": {
            console.log("GET_CUSTOMER_LIST")
            return state
        }

        default: {
            return state
        }
    }
}

export default customerReducer;