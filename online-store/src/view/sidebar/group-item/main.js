import './style.css';
import React, {Component} from 'react';
import ProductDetails from '../../product_details/main';
const ReactDOM = require('react-dom');

class GroupItem extends Component {
    render() {
        return (
            <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                {this.props.name}
            </div>
        );
    }

    handleItemClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        let productDetailContainer = document.getElementsByClassName('product-detail-container');
        let containers = document.getElementsByClassName('container-item');

        Array.from(containers).map((container) => {
            container.classList.add('hidden');
        });

        productDetailContainer[0].classList.remove('hidden');

        ReactDOM.render(<ProductDetails details={this.props.details} />, productDetailContainer[0]);
    }
}

export default GroupItem;