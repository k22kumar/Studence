import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Cart = (props) => {
    let cartTotal =0;
    console.log("cart props", props);
    return (
        <div>
            <h2>CheckOut</h2>
            {props.cart.map((item) => {
                cartTotal += item.price; 
                return <div>
                    p
                </div>
            })}
        </div>
    )
}

export default Cart;