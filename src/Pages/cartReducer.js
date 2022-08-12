// import { ADD_TO_CART } from "../apiConfig";
const cardItems = (state = {}, { type, payload }) => {

    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                setCartData: payload
            }


        default:
            return state
    }
}

export default cardItems;