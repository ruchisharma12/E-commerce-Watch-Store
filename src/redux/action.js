import { getAllUsersList, AddDataIntoCart, LoginVerify, createUsers, OtpVerify, getItemsFromCartApi } from '../services/GetUserList'
// import { LoginVerify } from '../services/GetUserList';
// import { createUsers } from '../services/GetUserList';
// import { OtpVerify } from '../services/GetUserList';
import { ADD_TO_CART } from '../apiConfig'


const BASE_URL = 'http://localhost:4000/api/auth';
const USERS_URL = BASE_URL + '/create';
const PERSIST_URL = BASE_URL + '/verifyOtp';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;




//Redux Action 
const setUserAction = (userObj) => ({
  type: 'SET_USER',
  payload: userObj
});
const setUserAction1 = (userObj) => ({
  type: 'SET_USER_REGISTER',
  payload: userObj
});
const setUserVerifyAction = (userObj) => ({
  type: 'SET_USER_OTP_VERIFY',
  payload: userObj
})
const clearUserAction = () => ({
  type: 'CLEAR_USER'
});

//Redux Action 
const setUserList = (UserResponse) => ({
  type: 'SET_User_LIST_RESPONSE',
  payload: UserResponse
});
const setCartItemData = (cartResult) => ({
  type: 'SET_CART_LIST_RESPONSE',
  payload: cartResult
});




const setCartDataAction = (data) => ({
  type: 'ADD_TO_CART',
  payload: data,

});

export const removeToCart = (data) => {
  return {
    type: "Remove_To_Cart",
    data: data,

  };
}



//
//Fetch
const getAllUserAction = () => dispatch => {

  getAllUsersList().then(function (response) {

    dispatch(setUserList(response));
    console.log(response)
  })

};

//Login User
const loginUserToDB = (data) => dispatch => {
  LoginVerify(data).then(function (data) {

    dispatch(setUserAction(data));
    console.log(data);
    // localStorage.setItem('token', data.token);
  })
};

const addToCart = (data) => dispatch => {
  AddDataIntoCart(data).then(function (data) {

    dispatch(setCartDataAction(data));
    console.log(data);
    // localStorage.setItem('token', data.token);
  })
};







//Fetch
const newUserToDB = (data) => dispatch => {

  createUsers(data).then(function (data) {

    dispatch(setUserAction1(data));
    console.log(data)
  });
};

const OtpVerifyToDB = (data) => dispatch => {

  debugger
  OtpVerify(data).then(function (response) {

    dispatch(setUserVerifyAction(response));
    console.log(data);
    // localStorage.setItem('token', data.token);
  })
};

export const getItemsFromCart = () => dispatch => {


  getItemsFromCartApi().then(function (response) {

    dispatch(setCartItemData(response));
  })
};



const persistUser = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ` + localStorage.token
    }
  };
  fetch(PERSIST_URL, config)
    .then(r => r.json())
    .then(userInstance => {
      dispatch(setUserAction(userInstance));
    });
};

const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};

export default {
  newUserToDB,
  // deleteUserFromDB,
  OtpVerifyToDB,
  loginUserToDB,
  persistUser,
  logoutUser,
  getAllUserAction, addToCart,
  getItemsFromCart

};