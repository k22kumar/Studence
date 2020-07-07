import React, {useState, useEffect} from 'react';

const Cart = (props) => {
    const [cartTotal, setCartTotal] = useState(0);
    const [madePurchase, setMadePurchase] = useState(false);
    
    useEffect( () => {
        // update the shopping cart total
        let newTotal = props.cart.reduce((accum, item) => {
            return accum + parseFloat(item.price);
        }, 0);
        setCartTotal(newTotal);
    });

    return (
        <div className="checkoutContainer">
            <h2>CheckOut</h2>
            {madePurchase && <p>Thank You!</p>}        
            {props.cart.length === 0 && <p>No items in Cart!</p>}
            {props.cart.length > 0 && <div className="flexParent flexColumn">
                <ul>
                    {props.cart.map((item, index) => {
                        return <li key={index} className="flexParent checkOutItem">
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                        </li>
                    })}
                </ul>
                <h3>Total: ${cartTotal}</h3>
                <button className="siteButton" onClick={() => {
                    setMadePurchase(true);
                    props.confirmPurchase();
                }}>Confirm Purchase</button>
            </div>
            }
        </div>
    )
}

export default Cart;