import { combineReducers } from "redux";
import loginReducer from '../Pages/loginReducer';
import signupReducer from '../Pages/signupReducer';


import cartReducer from "../Pages/cartReducer";

//const loginReducer = require('../Pages/loginReducer');

const rootReducer = (state = {}, { type, payload }) => {

  switch (type) {

    case 'CLEAR_USER':
      return {};
    case 'SET_User_LIST_RESPONSE':
      return {
        ...state,
        UserListResponse: payload
      }
    default:
      return state;
  }
};
export default combineReducers({
  rootReducer,
  loginReducer,
  signupReducer, cartReducer
})