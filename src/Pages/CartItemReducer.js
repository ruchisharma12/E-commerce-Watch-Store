const cardItemsReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case 'SET_CART_LIST_RESPONSE':
            return {
                ...state,
                getCartItem: payload
            }


        default:
            return state
    }
}

export default cardItemsReducer;