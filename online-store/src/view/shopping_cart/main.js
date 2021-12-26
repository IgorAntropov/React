import './style.css';
import React, {Component} from 'react';
import ProductsForShoppingCart from '../../global_variables/products_for_shopping_cart';

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                {ProductsForShoppingCart.ids.map((item, index) =>
                    <span key={index}>{item}</span>
                )}
            </div>
        );
    }
}

export default ShoppingCart;