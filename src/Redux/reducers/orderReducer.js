import { initialState } from "./customerReducer";

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT_LIST": {
            console.log("GET_PRODUCT_LIST")
            return state
        }

        case "CREATE_NEW_ORDER": {
            console.log("CREATE_NEW_ORDER")
            return state
        }

        case "GET_ORDER_LIST": {
            console.log("GET_ORDER_LIST")
            return state
        }

        case "UPDATE_ORDER_LIST": {
            console.log("UPDATE_ORDER_LIST")
            return state
        }

        default: {
            return state
        }
    }
}

export default orderReducer;