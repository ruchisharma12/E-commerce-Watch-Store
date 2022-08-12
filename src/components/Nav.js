import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/action';


const Nav = () => {

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  return (
    <div>
      <nav style={{ padding: '10px 10px 10px 10px' }}>

        <Link to="/home" style={{
          fontWeight: 500, fontSize: 18, marginLeft: '50px'
        }}> SAMAY WS</Link>
        {/* <Link to="/home">Home</Link> */}
        <Link to="/brands" style={{
          backgroundColor: "#3F8678", marginLeft: '15px',
          padding: 2
        }}>Brands</Link>
        <Link to="/userLists" style={{ marginLeft: '15px' }}>About Us</Link>
        <Link to="/cart" style={{
          textAlign: 'right', marginLeft: '900px'
        }}> <i className="fa-solid fa-cart-shopping"></i>Cart</Link>
        <Link to="/signup" style={{
          textAlign: 'right', marginLeft: '15px'
        }}><i className="fa-solid fa-user"></i>Signup/</Link>
        <Link to="/login" style={{
          textAlign: 'right', marginLeft: '5px'
        }}>Login </Link>

        {/* <Link to="/" onClick={handleLogout} style={{ marginLeft: '15px' }}>
          Logout
        </Link> */}
      </nav>
    </div>
  );
};


export default Nav;
