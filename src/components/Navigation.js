import React, {useState, useEffect} from 'react';
import { BrowserRouter as  Route, Link } from 'react-router-dom';


const Navigation = (props) => {
    // only work sif user clicks on a full view ad of one item and then a different item
    const [numberOfItems, setNumberOfItems] = useState(0);

    useEffect(() => {
        setNumberOfItems(props.cart.length);
    }, [props.cart]);

    return (
        <nav className="flexParent mainMenu">
            <Link to="/Studence"><h1>Studence</h1></Link>
            <Link className="postAdNav" to="/postAd">Post Ad</Link>
            <Link className="account" to="/account">Account <i className="fas fa-user-circle"></i></Link>
            <Link className="cart" to="/cart">
            <i aria-label="Click to view cart" className="fas fa-shopping-cart shoppingCart">
                    {numberOfItems > 0 && <div className="flexParent numberOfItems">
                        {numberOfItems < 10 ?
                            <p>{numberOfItems}</p> :
                            <p>9+</p>}
                    </div>}
            </i>
            </Link>
        </nav>
    )
}

export default Navigation;