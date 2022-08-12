import React, { createContext, useReducer, useState } from 'react'
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer/Footer';
import data from './Pages/Data';
import Items from './portfolio_gallery/Items';






function App() {

  const { productItems } = data;
  const { cartItems, setCartItems } = useState([]);

  function getfeedbackalert() {
    alert("Submit your feedback successfully, Thank You")
  }
  return (

    <>

      <Router>

        <Nav />
        <Routes productItems={productItems} cartItems={cartItems} />

      </Router>

      <Footer data={getfeedbackalert} />
    </>
  )
}
export default App;