import React, { useEffect } from 'react';
// import { DeleteIcon } from '@material-ui/icons'
import { Delete } from '@material-ui/icons';
import { useState } from 'react'
import { getCartData } from '../services/GetUserList';
const axios = require('axios').default;
function Cart() {

    return (
        <div className="row " style={{ width: "1200px" }} >


            < div className='order-area' style={{ marginTop: "50px", width: "1200px" }
            }>
                <div className='order-total' style={{ marginTop: "10px", background: "#053742", color: "white", fontWeight: "bold", margin: "10px 15% 20px 15%", border: "1px solid black", weight: "60%", padding: "10px" }}> Your Order</div>
            </div >

            <div className='row' style={{ margin: "10px 15% 15px 15%", border: "1px solid black", padding: "10px" }}>
                <div className='col' style={{ width: "800px" }}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHq0B6-NkA7Yqe2vFx9Lhbu1gdRa9dycdI8KnJA0oY87pJoJsKkkPBtV-a5R9PxCgoOhY&usqp=CAU' style={{}} /></div>
                <div className='col'> <div className=' order-item' style={{}}>Titan Z-Black</div>
                    <div style={{ background: "", marginTop: "15px" }}>$300.00</div>
                    <div className='order-qty' style={{ marginTop: "10px", }}>Qty
                        <button className='qty-btn' style={{ marginLeft: "10px" }}>-</button>
                        <input type="text" className="qty-input" style={{ width: "40px", textAlign: "center" }} />
                        <button className='qty-btn'>+</button>
                    </div></div>

                <div className=' col order-price' style={{ marginRight: 0 }}>
                    <button>
                        <Delete />
                    </button>

                </div>
            </div>

            <div className='row' style={{ marginTop: "10px", background: "#053742", color: "white", fontWeight: "bold", margin: "10px 15% 20px 15%", border: "1px solid black", weight: "60%", padding: "10px" }}>
                <div className='col' >Total Order</div>
                <div className='col' > $300.00</div>
                <button className='col'>Place Order</button>
            </div>



        </div >
    )













    //         </>
    //     );
    // }

}

export default Cart;
