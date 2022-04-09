export const getProductList = payload => {
    fetch()
        .then(res => res.json())
        .then(data => {
            return (dispatch, getState) => {
                dispatch({
                    type: "GET_PRODUCT_LIST",
                    payload
                })
            }
        })

}

export const createNewOrder = payload => {
    return {
        type: "CREATE_NEW_ORDER",
        payload
    }
}

export const getOrderList = payload => {
    return {
        type: "GET_ORDER_LIST",
        payload
    }
}

export const updateOrderList = payload => {
    return {
        type: "UPDATE_ORDER_LIST",
        payload
    }
}