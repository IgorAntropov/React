import './style.css';
import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import ProductsForShoppingCart from '../../global_variables/products_for_shopping_cart';

class ProductDetails extends Component {
    render() {
        const productId = this.props.details.id;
        const name = this.props.details.name;
        const images = this.props.details.images;
        const descriptions = this.props.details.descriptions;

        return (
            <div className="product-container flex-justify-center">
                <div className="general-info flex-justify-center">
                    <div className="product-images flex-justify-center">
                        {images}
                    </div>
                    <div className="product-description flex-justify-center">
                        <h3>{name}</h3>
                        <div>
                            {descriptions}
                        </div>
                        <button className="add-to-shopping-cart" data-product-id={productId} onClick={this.handleAddClick}>
                            <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    handleAddClick = (e) => {
        let target = e.currentTarget;
        let id = target.dataset.productId;

        if (ProductsForShoppingCart.ids.indexOf(id) === -1) {
            ProductsForShoppingCart.ids.push(id);
        }
    }
}

export default ProductDetails;