import React, {useState, useEffect} from 'react';

const Cart = (props) => {
    console.log("cart props", props);
    const [cartTotal, setCartTotal] = useState(0);
    const [madepurchase, setMadePurchase] = useState(false);
    
    useEffect( () => {
        // update the shopping cart total
        let newTotal = props.cart.reduce((accum, item) => {
            return accum + parseFloat(item.price);
        }, 0);
        setCartTotal(newTotal);
    });

    return (
        <div>
            <h2>CheckOut</h2>
            {props.cart.length === 0 && <p>No items in Cart!</p>}
            {props.cart.length > 0 && <div>
                <ul>
                    {props.cart.map((item, index) => {
                        return <li key={index}>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </li>
                    })}
                </ul>
                <h3>Total: {cartTotal}</h3>
                <button onClick={() => {
                    setMadePurchase(true);
                    props.confirmPurchase();
                }}>Confirm Purchase</button>
            </div>
            }
        </div>
    )
}

export default Cart;